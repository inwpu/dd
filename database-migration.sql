-- 为trips表添加time_range字段（单位：分钟）
-- 表示用户可接受的出发时间范围，默认60分钟

-- SQLite不支持直接ALTER TABLE ADD COLUMN带默认值，需要分步执行
-- 步骤1：添加字段
ALTER TABLE trips ADD COLUMN time_range INTEGER;

-- 步骤2：更新现有数据的默认值为60分钟
UPDATE trips SET time_range = 60 WHERE time_range IS NULL;

-- 验证：查看表结构
-- SELECT sql FROM sqlite_master WHERE type='table' AND name='trips';
