-- 创建page_views表用于记录PV（页面浏览量）
CREATE TABLE IF NOT EXISTS page_views (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ip TEXT NOT NULL,
  visit_time INTEGER NOT NULL,
  path TEXT,
  ua TEXT
);

-- 为查询性能创建索引
CREATE INDEX IF NOT EXISTS idx_page_views_ip_time ON page_views(ip, visit_time);

-- 删除不再需要的visitors表的count字段（可选）
-- 注意：SQLite不支持DROP COLUMN，如需删除需要重建表
-- 这里保留count字段以防万一，不影响新逻辑

-- 清理ip_bans表（不再使用数据库存储封禁）
DROP TABLE IF EXISTS ip_bans;
