-- 只添加新的复合索引，用于优化查询性能

-- 优化重复订单检查
CREATE INDEX IF NOT EXISTS idx_trips_duplicate_check ON trips(user_key, departure_date, departure_time, departure_timestamp);

-- 优化手机号频率检查
CREATE INDEX IF NOT EXISTS idx_trips_contact_time ON trips(contact, created_at);

-- 优化IP频率检查
CREATE INDEX IF NOT EXISTS idx_trips_ip_time ON trips(ip, created_at);
