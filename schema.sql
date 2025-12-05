-- D1 数据库 Schema
-- 用于西安大学生拼车平台

-- 行程表
CREATE TABLE IF NOT EXISTS trips (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  school TEXT NOT NULL,
  campus TEXT,
  college TEXT,
  departure_lat REAL NOT NULL,
  departure_lon REAL NOT NULL,
  departure_location_name TEXT NOT NULL,
  destination_lat REAL NOT NULL,
  destination_lon REAL NOT NULL,
  destination_location_name TEXT NOT NULL,
  departure_date TEXT NOT NULL,
  departure_time TEXT NOT NULL,
  departure_timestamp INTEGER NOT NULL,
  contact TEXT NOT NULL,
  time_range INTEGER DEFAULT 60,
  ip TEXT NOT NULL,
  user_key TEXT NOT NULL,
  user_id TEXT NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE INDEX idx_departure_timestamp ON trips(departure_timestamp);
CREATE INDEX idx_created_at ON trips(created_at);
CREATE INDEX idx_trips_ip ON trips(ip);
CREATE INDEX idx_trips_user_key ON trips(user_key);
CREATE INDEX idx_trips_user_id ON trips(user_id);

-- 复合索引优化查询性能
CREATE INDEX idx_trips_duplicate_check ON trips(user_key, departure_date, departure_time, departure_timestamp);
CREATE INDEX idx_trips_contact_time ON trips(contact, created_at);
CREATE INDEX idx_trips_ip_time ON trips(ip, created_at);

-- 访客统计表
CREATE TABLE IF NOT EXISTS visitors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ip TEXT NOT NULL UNIQUE,
  ua TEXT,
  country TEXT,
  city TEXT,
  count INTEGER DEFAULT 1,
  last_visit INTEGER NOT NULL
);

CREATE INDEX idx_visitors_ip ON visitors(ip);
CREATE INDEX idx_last_visit ON visitors(last_visit);

-- IP封禁表
CREATE TABLE IF NOT EXISTS ip_bans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ip TEXT NOT NULL UNIQUE,
  banned_until INTEGER NOT NULL,
  reason TEXT
);

CREATE INDEX idx_ip_bans_ip ON ip_bans(ip);
CREATE INDEX idx_banned_until ON ip_bans(banned_until);

-- 匹配次数限制表
CREATE TABLE IF NOT EXISTS match_limits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ip TEXT NOT NULL,
  date TEXT NOT NULL,
  count INTEGER DEFAULT 0,
  last_match INTEGER NOT NULL,
  UNIQUE(ip, date)
);

CREATE INDEX idx_match_limits_ip_date ON match_limits(ip, date);

-- 查询频率限制表
CREATE TABLE IF NOT EXISTS query_limits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ip TEXT NOT NULL,
  minute TEXT NOT NULL,
  count INTEGER DEFAULT 0,
  last_query INTEGER NOT NULL,
  UNIQUE(ip, minute)
);

CREATE INDEX idx_query_limits_ip_minute ON query_limits(ip, minute);

-- 匹配确认表
CREATE TABLE IF NOT EXISTS trip_matches (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  trip_id_1 INTEGER NOT NULL,
  trip_id_2 INTEGER NOT NULL,
  confirmed_by INTEGER NOT NULL,
  confirmed_at INTEGER NOT NULL,
  UNIQUE(trip_id_1, trip_id_2)
);

CREATE INDEX idx_trip_matches_trip1 ON trip_matches(trip_id_1);
CREATE INDEX idx_trip_matches_trip2 ON trip_matches(trip_id_2);

-- 发单频率限制表（同一天、同地点、同时段最多5次）
CREATE TABLE IF NOT EXISTS trip_limits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_key TEXT NOT NULL,
  date TEXT NOT NULL,
  departure_grid TEXT NOT NULL,
  destination_grid TEXT NOT NULL,
  time_slot TEXT NOT NULL,
  count INTEGER DEFAULT 0,
  last_trip INTEGER NOT NULL,
  UNIQUE(user_key, date, departure_grid, destination_grid, time_slot)
);

CREATE INDEX idx_trip_limits_user_date ON trip_limits(user_key, date);

-- 手机号黑名单表（检测到刷单的手机号）
CREATE TABLE IF NOT EXISTS phone_blacklist (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  phone TEXT NOT NULL UNIQUE,
  reason TEXT NOT NULL,
  banned_at INTEGER NOT NULL,
  banned_until INTEGER NOT NULL
);

CREATE INDEX idx_phone_blacklist_phone ON phone_blacklist(phone);
CREATE INDEX idx_phone_blacklist_banned_until ON phone_blacklist(banned_until);
