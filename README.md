# 西安大学生拼车平台

基于 Cloudflare Workers + D1 数据库的拼车平台

## 功能特性

- 发布拼车行程
- 智能匹配（基于时间和地理位置）
- 访客统计和反爬虫
- 高德地图 POI 搜索

## 部署步骤

### 1. 初始化数据库

首次部署需要创建并初始化 D1 数据库：

```bash
# 创建数据库（如果还没创建）
npx wrangler d1 create xian_carpool_db

# 应用数据库 schema
npx wrangler d1 execute xian_carpool_db --remote --file=schema.sql
```

### 2. 配置环境变量

需要在 Cloudflare Dashboard 中配置高德地图 API Key：

1. 登录 Cloudflare Dashboard
2. 进入 Workers & Pages > 你的 Worker > Settings > Variables
3. 添加环境变量 `AMAP_KEY`（选择 Encrypt）

或使用命令行：

```bash
npx wrangler secret put AMAP_KEY
```

### 3. 构建和部署

```bash
# 安装依赖（如果需要）
npm install

# 构建（将 HTML 文件打包到 worker）
npm run build

# 部署到 Cloudflare
npm run deploy
```

## 开发

```bash
# 本地开发
npm run dev
```

## 项目结构

```
.
├── worker.js          # Worker 源代码
├── index.html         # 主页
├── stats.html         # 统计页面
├── schema.sql         # 数据库 schema
├── build.js           # 构建脚本
├── wrangler.toml      # Cloudflare Workers 配置
└── dist/
    └── worker.js      # 打包后的 worker（包含 HTML）
```

## 注意事项

1. 每次修改 HTML 文件后，需要运行 `npm run build` 重新打包
2. 部署时会自动运行构建脚本
3. 数据库 schema 只需要初始化一次
4. 行程数据会自动清理（保留7天）

## License

MIT
