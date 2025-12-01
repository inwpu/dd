-- D1 数据库 Schema
-- 用于西安大学生拼车平台

-- 行程表
CREATE TABLE IF NOT EXISTS trips (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  school TEXT NOT NULL,
  campus TEXT,
  college TEXT,
  lat REAL NOT NULL,
  lon REAL NOT NULL,
  location_name TEXT NOT NULL,
  departure_date TEXT NOT NULL,
  departure_time TEXT NOT NULL,
  departure_timestamp INTEGER NOT NULL,
  contact TEXT NOT NULL,
  ip TEXT NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE INDEX idx_departure_timestamp ON trips(departure_timestamp);
CREATE INDEX idx_created_at ON trips(created_at);
CREATE INDEX idx_trips_ip ON trips(ip);

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
