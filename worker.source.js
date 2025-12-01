/**
 * 西安大学生拼车平台 - Cloudflare Worker
 * 功能：API路由、高德地图代理、反爬虫、访客统计
 */

const MAX_REQUESTS_PER_MINUTE = 60;
const BAN_DURATION = 24 * 60 * 60 * 1000; // 24小时
const SEARCH_RATE_LIMIT = 2; // 每秒2次
const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
const MAX_MATCH_PER_DAY = 5; // 每天最多匹配5次
const MIN_SEARCH_LENGTH = 2; // 最小搜索长度（字符）
const MAX_QUERY_PER_MINUTE = 10; // 每分钟最多查询10次

// 爬虫UA黑名单
const CRAWLER_PATTERNS = [
  'bot', 'spider', 'crawler', 'scan', 'python-requests',
  'baiduspider', '360spider', 'yisouspider', 'bytespider',
  'sogou', 'petalbot', 'bingbot', 'googlebot', 'mj12bot'
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const ip = request.headers.get('CF-Connecting-IP');
    const ua = request.headers.get('User-Agent') || '';

    // CORS处理
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    try {
      // 反爬虫检查
      const crawlerCheck = await checkCrawler(ua, ip, env);
      if (!crawlerCheck.allowed) {
        return jsonResponse({ error: crawlerCheck.reason }, 403);
      }

      // 路由
      if (url.pathname === '/' || url.pathname === '/index.html') {
        // 访客统计（只在访问HTML页面时统计）
        await trackVisitor(request, ip, ua, env);
        return new Response(INDEX_HTML, {
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
          }
        });
      } else if (url.pathname === '/stats.html') {
        // 访客统计（只在访问HTML页面时统计）
        await trackVisitor(request, ip, ua, env);
        return new Response(STATS_HTML, {
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
          }
        });
      } else if (url.pathname === '/api/search') {
        return handleSearch(request, env);
      } else if (url.pathname === '/api/resolve-poi') {
        return handleResolvePOI(request, env);
      } else if (url.pathname === '/api/create-trip') {
        return handleCreateTrip(request, env, ip);
      } else if (url.pathname === '/api/match') {
        return handleMatch(request, env, ip);
      } else if (url.pathname === '/api/search-by-time') {
        return handleSearchByTime(request, env, ip);
      } else if (url.pathname === '/api/search-by-route') {
        return handleSearchByRoute(request, env, ip);
      } else if (url.pathname === '/api/stats') {
        return handleStats(env);
      } else if (url.pathname === '/api/cleanup') {
        return handleCleanup(env);
      } else if (url.pathname === '/images/wechhat.jpg') {
        return handleImage('wechat');
      } else if (url.pathname === '/images/alipay.jpg') {
        return handleImage('alipay');
      }

      return jsonResponse({ error: 'Not found' }, 404);
    } catch (error) {
      console.error('Worker error:', error);
      return jsonResponse({ error: 'Internal server error' }, 500);
    }
  }
};

// 内存中的临时封禁缓存和访问记录
const IP_BAN_CACHE = new Map(); // IP封禁缓存：key=IP, value=解封时间戳
const IP_ACCESS_LOG = new Map(); // 访问记录：key=IP, value=访问时间戳数组

// 清理过期的访问记录（保留最近2分钟）
function cleanupAccessLog() {
  const now = Date.now();
  const twoMinutesAgo = now - 120000;

  for (const [ip, timestamps] of IP_ACCESS_LOG.entries()) {
    const validTimestamps = timestamps.filter(t => t > twoMinutesAgo);
    if (validTimestamps.length === 0) {
      IP_ACCESS_LOG.delete(ip);
    } else {
      IP_ACCESS_LOG.set(ip, validTimestamps);
    }
  }
}

// 反爬虫检查
async function checkCrawler(ua, ip, env) {
  // UA检查
  const lowerUA = ua.toLowerCase();
  for (const pattern of CRAWLER_PATTERNS) {
    if (lowerUA.includes(pattern)) {
      return { allowed: false, reason: 'Crawler detected' };
    }
  }

  const now = Date.now();

  // 检查内存缓存中的IP封禁
  const banUntil = IP_BAN_CACHE.get(ip);
  if (banUntil && banUntil > now) {
    return { allowed: false, reason: 'IP banned' };
  } else if (banUntil && banUntil <= now) {
    // 封禁已过期，删除
    IP_BAN_CACHE.delete(ip);
  }

  // 频率检查：统计最近1分钟的访问次数
  const oneMinuteAgo = now - 60000;
  const accessLog = IP_ACCESS_LOG.get(ip) || [];
  const recentAccess = accessLog.filter(t => t > oneMinuteAgo);

  if (recentAccess.length >= MAX_REQUESTS_PER_MINUTE) {
    // 超过限制，封禁24小时
    IP_BAN_CACHE.set(ip, now + BAN_DURATION);
    return { allowed: false, reason: 'Rate limit exceeded' };
  }

  // 记录本次访问
  recentAccess.push(now);
  IP_ACCESS_LOG.set(ip, recentAccess);

  // 定期清理过期记录（每100次请求清理一次）
  if (Math.random() < 0.01) {
    cleanupAccessLog();
  }

  return { allowed: true };
}

// 访客统计
async function trackVisitor(request, ip, ua, env) {
  const cf = request.cf || {};
  const country = cf.country || 'Unknown';
  const city = cf.city || 'Unknown';
  const now = Date.now();

  // 同时记录UV和PV：count字段记录访问次数（PV）
  await env.DB.prepare(`
    INSERT INTO visitors (ip, ua, country, city, count, last_visit)
    VALUES (?, ?, ?, ?, 1, ?)
    ON CONFLICT(ip) DO UPDATE SET
      count = count + 1,
      last_visit = ?,
      ua = ?,
      country = ?,
      city = ?
  `).bind(ip, ua, country, city, now, now, ua, country, city).run();
}

// 高德地图搜索API
async function handleSearch(request, env) {
  const url = new URL(request.url);
  const keywords = url.searchParams.get('keywords');

  if (!keywords) {
    return jsonResponse({ error: 'Missing keywords' }, 400);
  }

  const AMAP_KEY = env.AMAP_KEY;
  if (!AMAP_KEY) {
    return jsonResponse({ error: 'API key not configured' }, 500);
  }

  const apiUrl = `https://restapi.amap.com/v3/assistant/inputtips?key=${AMAP_KEY}&keywords=${encodeURIComponent(keywords)}&city=西安`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  return jsonResponse(data);
}

// 高德POI解析
async function handleResolvePOI(request, env) {
  const body = await request.json();
  const { name, address } = body;

  if (!name) {
    return jsonResponse({ error: 'Missing name' }, 400);
  }

  const AMAP_KEY = env.AMAP_KEY;
  if (!AMAP_KEY) {
    return jsonResponse({ error: 'API key not configured' }, 500);
  }

  const apiUrl = `https://restapi.amap.com/v3/place/text?key=${AMAP_KEY}&keywords=${encodeURIComponent(name)}&city=西安&citylimit=true`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  return jsonResponse(data);
}

// 创建行程
async function handleCreateTrip(request, env, ip) {
  const body = await request.json();
  const { name, school, campus, college, lat, lon, location_name, departure_date, departure_time, contact, time_range } = body;

  // 验证必填字段
  if (!name || !school || !lat || !lon || !location_name || !departure_date || !departure_time || !contact || !time_range) {
    return jsonResponse({ error: '缺少必填字段' }, 400);
  }

  // 验证time_range值
  const timeRangeValue = parseInt(time_range);
  if (![30, 60].includes(timeRangeValue)) {
    return jsonResponse({ error: '时间范围只能是30或60分钟' }, 400);
  }

  // 计算时间戳
  const departureDateTime = new Date(`${departure_date}T${departure_time}:00`);
  const departureTimestamp = departureDateTime.getTime();
  const now = Date.now();
  const sevenDaysLater = now + SEVEN_DAYS;

  // 验证时间范围
  if (departureTimestamp < now) {
    return jsonResponse({ error: '出发时间不能早于当前时间' }, 400);
  }

  if (departureTimestamp > sevenDaysLater) {
    return jsonResponse({ error: '仅支持未来7天内的行程，请勿录入7天后的行程' }, 400);
  }

  // 插入数据库（包含IP和时间范围）
  const result = await env.DB.prepare(`
    INSERT INTO trips (name, school, campus, college, lat, lon, location_name, departure_date, departure_time, departure_timestamp, contact, time_range, ip, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(name, school, campus || '', college || '', lat, lon, location_name, departure_date, departure_time, departureTimestamp, contact, timeRangeValue, ip, now).run();

  // 清理过期数据
  await cleanupExpiredTrips(env);

  return jsonResponse({ success: true, id: result.meta.last_row_id });
}

// 匹配行程（仅限已发布行程的用户使用，返回联系方式）
async function handleMatch(request, env, ip) {
  const body = await request.json();
  const { trip_id, lat, lon, departure_timestamp } = body;

  // 规则1：必须先发布自己的行程
  if (!trip_id) {
    return jsonResponse({
      error: '您需要先发布自己的行程才能查看其他人的联系方式',
      hint: '请先填写并提交您的拼车信息'
    }, 403);
  }

  // 验证trip_id是否存在且属于该IP（防止伪造）
  const userTrip = await env.DB.prepare(
    'SELECT * FROM trips WHERE id = ? AND ip = ?'
  ).bind(trip_id, ip).first();

  if (!userTrip) {
    return jsonResponse({
      error: '行程不存在、已过期或不属于您',
      hint: '只能使用自己发布的行程进行匹配'
    }, 403);
  }

  // 验证行程时间是否有效（未来7天内）
  const now = Date.now();
  if (userTrip.departure_timestamp < now) {
    return jsonResponse({ error: '您的行程已过期，无法进行匹配' }, 400);
  }

  // 规则2：检查匹配频率限制
  const today = new Date().toISOString().split('T')[0];
  const limitCheck = await checkMatchLimit(ip, today, env);

  if (!limitCheck.allowed) {
    return jsonResponse({
      error: '今日匹配次数已达上限',
      limit: limitCheck.limit,
      used: limitCheck.used
    }, 429);
  }

  // 使用用户自己的行程信息进行匹配
  const userLat = userTrip.lat;
  const userLon = userTrip.lon;
  const userTimestamp = userTrip.departure_timestamp;
  const userTimeRange = userTrip.time_range || 60; // 默认60分钟

  // 时间范围：根据用户选择的时间范围（±30分钟或±1小时）
  const timeRangeMs = userTimeRange * 60 * 1000; // 转换为毫秒
  const minTime = userTimestamp - timeRangeMs;
  const maxTime = userTimestamp + timeRangeMs;

  // 查询时间范围内的行程（排除自己的）
  const trips = await env.DB.prepare(`
    SELECT * FROM trips
    WHERE departure_timestamp BETWEEN ? AND ?
    AND id != ?
    ORDER BY departure_timestamp
  `).bind(minTime, maxTime, trip_id).all();

  // 计算距离并过滤（规则3：只返回≤1km的匹配，最多2人）
  const matches = [];
  for (const trip of trips.results) {
    if (matches.length >= 2) break; // 最多返回2个匹配

    const distance = haversineDistance(userLat, userLon, trip.lat, trip.lon);
    if (distance <= 1.0) { // 1km内
      matches.push({
        id: trip.id,
        name: trip.name,
        school: trip.school,
        campus: trip.campus,
        college: trip.college,
        location_name: trip.location_name,
        departure_date: trip.departure_date,
        departure_time: trip.departure_time,
        contact: trip.contact, // 只有匹配接口才返回联系方式
        distance: distance.toFixed(2)
      });
    }
  }

  // 记录匹配次数
  await recordMatchAttempt(ip, today, env);

  return jsonResponse({
    matches,
    your_trip: {
      id: userTrip.id,
      location: userTrip.location_name,
      time: `${userTrip.departure_date} ${userTrip.departure_time}`
    }
  });
}

// 访客统计
async function handleStats(env) {
  // UV（独立访客数）
  const totalVisitors = await env.DB.prepare(
    'SELECT COUNT(*) as total FROM visitors'
  ).first();

  // PV（页面浏览量）：所有IP的count总和
  const totalPageViews = await env.DB.prepare(
    'SELECT SUM(count) as total FROM visitors'
  ).first();

  // IP归属地排名（按最后访问时间排序，包含访问次数）
  const topLocations = await env.DB.prepare(`
    SELECT ip, country, city, count
    FROM visitors
    ORDER BY last_visit DESC
    LIMIT 50
  `).all();

  return jsonResponse({
    totalVisitors: totalVisitors.total || 0,
    totalPageViews: totalPageViews.total || 0,
    topLocations: topLocations.results
  });
}

// 按时间查询行程统计（不返回联系方式）
async function handleSearchByTime(request, env, ip) {
  // 检查查询频率限制
  const queryCheck = await checkQueryLimit(ip, env);
  if (!queryCheck.allowed) {
    return jsonResponse({
      error: '查询过于频繁，请稍后再试',
      limit: queryCheck.limit,
      used: queryCheck.used
    }, 429);
  }

  const url = new URL(request.url);
  const date = url.searchParams.get('date');
  const startTime = url.searchParams.get('start_time');
  const endTime = url.searchParams.get('end_time');

  if (!date || !startTime || !endTime) {
    return jsonResponse({ error: '缺少必填参数：date, start_time, end_time' }, 400);
  }

  // 记录查询
  await recordQueryAttempt(ip, env);

  // 解析时间范围
  const startTimestamp = new Date(`${date}T${startTime}:00`).getTime();
  const endTimestamp = new Date(`${date}T${endTime}:00`).getTime();

  if (isNaN(startTimestamp) || isNaN(endTimestamp)) {
    return jsonResponse({ error: '时间格式错误' }, 400);
  }

  // 查询该时间段内的行程
  const trips = await env.DB.prepare(`
    SELECT id, school, campus, location_name, departure_date, departure_time, departure_timestamp
    FROM trips
    WHERE departure_timestamp BETWEEN ? AND ?
    ORDER BY departure_timestamp
  `).bind(startTimestamp, endTimestamp).all();

  // 统计信息
  const schoolStats = {};
  trips.results.forEach(trip => {
    const schoolKey = trip.campus ? `${trip.school} ${trip.campus}` : trip.school;
    schoolStats[schoolKey] = (schoolStats[schoolKey] || 0) + 1;
  });

  return jsonResponse({
    total: trips.results.length,
    time_range: {
      start: `${date} ${startTime}`,
      end: `${date} ${endTime}`
    },
    school_distribution: schoolStats,
    trips: trips.results.map(t => ({
      school: t.school,
      campus: t.campus,
      location: t.location_name,
      departure_time: `${t.departure_date} ${t.departure_time}`
    }))
  });
}

// 按路线查询行程统计（不返回联系方式）
async function handleSearchByRoute(request, env, ip) {
  // 检查查询频率限制
  const queryCheck = await checkQueryLimit(ip, env);
  if (!queryCheck.allowed) {
    return jsonResponse({
      error: '查询过于频繁，请稍后再试',
      limit: queryCheck.limit,
      used: queryCheck.used
    }, 429);
  }

  const body = await request.json();
  const { start_location, end_location, date } = body;

  if (!end_location) {
    return jsonResponse({ error: '缺少必填字段：end_location' }, 400);
  }

  // 验证搜索长度
  if (end_location.trim().length < MIN_SEARCH_LENGTH) {
    return jsonResponse({
      error: `搜索关键词至少需要${MIN_SEARCH_LENGTH}个字符`,
      hint: '请输入更具体的地点名称'
    }, 400);
  }

  // 记录查询
  await recordQueryAttempt(ip, env);

  let query = `
    SELECT id, school, campus, location_name, departure_date, departure_time, departure_timestamp, lat, lon
    FROM trips
    WHERE location_name LIKE ?
  `;
  let params = [`%${end_location.trim()}%`];

  // 如果指定了日期，添加日期过滤
  if (date) {
    const dayStart = new Date(`${date}T00:00:00`).getTime();
    const dayEnd = new Date(`${date}T23:59:59`).getTime();
    query += ` AND departure_timestamp BETWEEN ? AND ?`;
    params.push(dayStart, dayEnd);
  }

  query += ` ORDER BY departure_timestamp`;

  const trips = await env.DB.prepare(query).bind(...params).all();

  // 按时间段统计
  const timeSlots = {
    '早晨(06:00-09:00)': 0,
    '上午(09:00-12:00)': 0,
    '下午(12:00-18:00)': 0,
    '晚上(18:00-24:00)': 0,
    '深夜(00:00-06:00)': 0
  };

  trips.results.forEach(trip => {
    const time = trip.departure_time.split(':')[0];
    const hour = parseInt(time);

    if (hour >= 6 && hour < 9) timeSlots['早晨(06:00-09:00)']++;
    else if (hour >= 9 && hour < 12) timeSlots['上午(09:00-12:00)']++;
    else if (hour >= 12 && hour < 18) timeSlots['下午(12:00-18:00)']++;
    else if (hour >= 18 || hour < 0) timeSlots['晚上(18:00-24:00)']++;
    else timeSlots['深夜(00:00-06:00)']++;
  });

  return jsonResponse({
    total: trips.results.length,
    route: {
      start: start_location,
      end: end_location
    },
    date: date || '所有日期',
    time_distribution: timeSlots,
    summary: `该路线${date ? '当天' : ''}共有 ${trips.results.length} 个行程`
  });
}

// 检查匹配频率限制
async function checkMatchLimit(ip, date, env) {
  const limit = await env.DB.prepare(
    'SELECT count FROM match_limits WHERE ip = ? AND date = ?'
  ).bind(ip, date).first();

  const used = limit ? limit.count : 0;

  return {
    allowed: used < MAX_MATCH_PER_DAY,
    limit: MAX_MATCH_PER_DAY,
    used
  };
}

// 记录匹配尝试
async function recordMatchAttempt(ip, date, env) {
  const now = Date.now();

  await env.DB.prepare(`
    INSERT INTO match_limits (ip, date, count, last_match)
    VALUES (?, ?, 1, ?)
    ON CONFLICT(ip, date) DO UPDATE SET
      count = count + 1,
      last_match = ?
  `).bind(ip, date, now, now).run();
}

// 检查查询频率限制
async function checkQueryLimit(ip, env) {
  const now = Date.now();
  const currentMinute = new Date(now).toISOString().slice(0, 16); // YYYY-MM-DDTHH:MM

  const limit = await env.DB.prepare(
    'SELECT count FROM query_limits WHERE ip = ? AND minute = ?'
  ).bind(ip, currentMinute).first();

  const used = limit ? limit.count : 0;

  return {
    allowed: used < MAX_QUERY_PER_MINUTE,
    limit: MAX_QUERY_PER_MINUTE,
    used
  };
}

// 记录查询尝试
async function recordQueryAttempt(ip, env) {
  const now = Date.now();
  const currentMinute = new Date(now).toISOString().slice(0, 16);

  await env.DB.prepare(`
    INSERT INTO query_limits (ip, minute, count, last_query)
    VALUES (?, ?, 1, ?)
    ON CONFLICT(ip, minute) DO UPDATE SET
      count = count + 1,
      last_query = ?
  `).bind(ip, currentMinute, now, now).run();
}

// 清理过期数据
async function handleCleanup(env) {
  const deleted = await cleanupExpiredTrips(env);
  return jsonResponse({ deleted });
}

async function cleanupExpiredTrips(env) {
  const now = Date.now();
  const result = await env.DB.prepare(
    'DELETE FROM trips WHERE departure_timestamp < ?'
  ).bind(now).run();

  return result.meta.changes;
}

// Haversine距离计算（单位：km）
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // 地球半径（km）
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg) {
  return deg * (Math.PI / 180);
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  });
}

// 处理图片请求
function handleImage(type) {
  const base64Data = type === 'wechat' ? WECHAT_IMG_BASE64 : ALIPAY_IMG_BASE64;

  // 将base64转换为二进制
  const binaryString = atob(base64Data);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return new Response(bytes, {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000', // 缓存1年
      'Access-Control-Allow-Origin': '*',
    }
  });
}
