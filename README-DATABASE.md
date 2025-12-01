# 数据库更新说明

## 需要执行的SQL脚本

在Cloudflare Dashboard中执行以下操作：

1. 登录 Cloudflare Dashboard
2. 进入 **Workers & Pages** → **D1**
3. 选择数据库 `xian_carpool_db`
4. 点击 **Console** 标签
5. 执行 `schema-update.sql` 中的SQL语句

## 数据表说明

### visitors (UV统计)
- 每个IP只记录一次
- 用于统计独立访客数（UV）

### page_views (PV统计)
- 每次页面访问都记录
- 用于统计页面浏览量（PV）
- 用于频率检查（防止滥用）

### ip_bans
- 已删除，改用内存缓存
- IP封禁24小时后自动解除

## 注意事项

1. 数据库中的`visitors.count`字段不再使用，但保留以防万一
2. IP封禁使用内存Map存储，Worker重启后会清空
3. page_views表会随着访问增长，建议定期清理旧数据（>7天）
