# Lin Plumbing & Gas 永久网站 SEO 与托管待办清单

本清单用于确保新永久网站不是简单复制临时恢复版本，而是基于 GitHub 旧网站备份、最新 Search Console 发现的问题、Squarespace 托管状态和 Google 抓取要求进行整理。

| 状态 | 项目 | 具体要求 |
|---|---|---|
| [ ] | 读取 GitHub 旧网站备份 | 克隆用户授权仓库 `Franky-lin/linplumbinggas-redesign`，审查旧网站源码、内容、路由、SEO 文件和可复用素材。 |
| [ ] | 对比旧备份与恢复预览 | 保留真实业务内容、电话、License、ABN、服务区域和中英文页面，避免丢失以前做好的内容。 |
| [ ] | 修复 canonical/重复网页问题 | 每个核心页面必须有唯一 canonical，尤其是 `/zh`、中文通渠、热水器、煤气工、漏水维修等页面。 |
| [ ] | 优化核心关键词 | 重点覆盖“悉尼水管工”“悉尼华人水管工”“悉尼通渠”“悉尼热水器维修”“悉尼煤气工”“悉尼天然气”“悉尼漏水维修”。 |
| [ ] | 完成中英文 SEO 元数据 | 每个核心页面独立设置 title、meta description、canonical、Open Graph 和 Twitter metadata。 |
| [ ] | 完成 hreflang | 英文与中文页面互相声明语言版本，减少 Google 对重复页面的误判。 |
| [ ] | 生成 sitemap.xml | 包含英文首页、中文首页、英文服务页、中文服务页和主要服务区域页。 |
| [ ] | 生成 robots.txt | 明确允许搜索引擎抓取，并声明 sitemap 地址。 |
| [ ] | 加入结构化数据 | 使用 LocalBusiness / Plumber schema，包含业务名、电话、服务区域、License、ABN、服务类型和网站 URL。 |
| [ ] | 检查 Squarespace 托管设置 | 查看当前域名、SSL、DNS、重定向、索引可见性、站点发布状态和是否有阻止搜索引擎的设置。 |
| [ ] | 检查 Google Search Console 设置 | 查看 sitemap 提交状态、页面索引、重复网页/canonical 提示、域名资源状态和核心页面 URL 检查结果。 |
| [ ] | 构建并预览 | 完成永久网站后运行构建检查，确认页面、路由、表单、电话链接和移动端显示可用。 |
| [ ] | 保存可发布版本 | 创建 checkpoint，给 Franky 预览确认。正式 Publish、DNS 修改或提交后台设置前必须先确认。 |

## GitHub 旧备份审查后的整合策略

旧备份已经迁移进永久网站项目。当前策略是保留旧备份中的真实业务内容、双语页面、中文服务页和真实现场图片，同时修复 sitemap 同时暴露 canonical URL 与 alias URL 导致的重复网页问题。

| 页面类型 | 首选收录 URL | 兼容保留的别名 | SEO 处理 |
|---|---|---|---|
| 英文首页 | `/` | 无 | 作为英文主入口，保留 LocalBusiness/Plumber schema。 |
| 中文首页 | `/zh` | `/zh/`, `/zh/sydney-plumber` | canonical 指向 `/zh`，sitemap 只保留 `/zh`。 |
| 中文通渠 | `/zh/blocked-drains` | `/zh/blocked-drain`, `/zh/roof-stormwater-drainage` | canonical 指向 `/zh/blocked-drains`，保留通渠、CCTV、雨水排水关键词。 |
| 中文热水器 | `/zh/hot-water-repair` | `/zh/hot-water` | canonical 改为 `/zh/hot-water-repair`，更贴合“悉尼热水器维修”搜索意图。 |
| 中文煤气工 | `/zh/gas-fitter` | `/zh/gas` | canonical 改为 `/zh/gas-fitter`，更贴合“悉尼煤气工 / gas fitter”搜索意图。 |
| 中文漏水维修 | `/zh/leak-repair` | 无 | canonical 保持 `/zh/leak-repair`。 |
| 服务区域页 | `/zh/areas/...` | 无 | 保留在 sitemap 中，辅助本地 SEO。 |

下一步代码修改必须同时更新路由、导航链接、页面 `meta.path`、breadcrumb、sitemap.xml、robots.txt 和必要的结构化数据，确保 Google 看到的首选 URL 与页面 canonical 一致。

## 线上发布访问故障排查（2026-05-07）

- [x] 确认当前 Manus 发布域名 `linplumbgas-irvd6ftq.manus.space` 是否公网可访问。
- [x] 检查正式域名 `linplumbinggas.com` 与 `www.linplumbinggas.com` 是否已绑定到本次发布的网站。
- [x] 对比 DNS 记录、HTTPS 响应与浏览器访问结果，定位打不开的具体原因。
- [x] 向 Franky 说明当前可打开地址、正式域名未生效原因以及下一步需要在域名/发布设置中完成的操作。


## Squarespace 正式域名与托管对接（2026-05-07）

- [ ] 确认 Franky 的正式目标：Manus 只用于制作和预览网站，正式品牌域名仍使用 `linplumbinggas.com`。
- [ ] 区分“域名由 Squarespace 管理”和“网站内容由 Squarespace 托管”两种不同方案，避免仅修改 DNS 却没有对应网站内容。
- [ ] 向 Franky 展示当前设计好的新网站预览地址与已保存版本。
- [ ] 如果最终选择将域名指向 Manus 托管的新网站，在执行 DNS 修改前取得 Franky 明确确认。
- [ ] 如果最终坚持网站内容托管在 Squarespace，整理可迁移内容清单与 Squarespace 页面重建方案，而不是只改 DNS。


## 已确认上线方案 A（2026-05-07）

| 状态 | 项目 | 说明 |
|---|---|---|
| [x] | 方案选择 | Franky 已确认选择方案 A：域名仍由 Squarespace 管理，正式访问 `linplumbinggas.com` 时显示 Manus 制作并发布的新网站。 |
| [x] | 目标绑定 | `linplumbinggas.com` 与 `www.linplumbinggas.com` 已指向并打开已发布的新网站，SSL 错误已恢复。 |
| [x] | 操作确认 | Franky 已明确确认执行正式自定义域名绑定。 |


## 正式自定义域名绑定确认（2026-05-07）

| 状态 | 项目 | 说明 |
|---|---|---|
| [x] | 用户确认 | Franky 已确认继续把 `linplumbinggas.com` 与 `www.linplumbinggas.com` 添加到当前新网站的自定义域名设置。 |
| [x] | 安全边界 | 未点击 Squarespace 的 “UPDATE DNS RECORDS” 默认重置按钮，未删除 Google Workspace 邮箱记录，未删除 Google Search Console 验证 TXT。 |
| [x] | 域名绑定 | 已在当前网站项目设置中添加 `linplumbinggas.com` 与 `www.linplumbinggas.com` 正式自定义域名。 |
| [x] | 验证 | 已检查 `https://linplumbinggas.com/` 与 `https://www.linplumbinggas.com/`；主域 HTTPS 200，www 301 到主域后 200。 |


## Google Search Console sitemap 提交（2026-05-07）

| 状态 | 项目 | 说明 |
|---|---|---|
| [x] | 打开 Search Console | 已进入 `linplumbinggas.com` 域名资源的 Sitemaps 页面。 |
| [x] | 提交 sitemap | Franky 已确认，已提交 `https://linplumbinggas.com/sitemap.xml`。 |
| [x] | 验证结果 | Search Console 页面反馈“已成功提交站点地图”，表格状态显示为“成功”。 |


## GitHub 全量同步与 SEO 架构保留（2026-05-07）

| 状态 | 项目 | 说明 |
|---|---|---|
| [x] | 审查本地项目文件 | 已确认当前永久网站项目包含 HTML、CSS、JS/TS、配置与必要资源文件。 |
| [x] | 审查 GitHub 仓库状态 | 已确认目标仓库 `Franky-lin/linplumbinggas-redesign` 远端为 `origin`，当前分支为 `main`，并已拉取远端最新状态。 |
| [x] | 排除冗余文件 | 已排除 node_modules、dist、.manus-logs、.webdev、缓存和临时日志文件；未把构建产物或依赖目录纳入提交。 |
| [x] | 同步完整网站代码 | 已同步当前设计网站的 HTML、CSS、JS/TS、React 页面、配置文件、公共 SEO 文件与运行所需文件到目标仓库。 |
| [x] | 验证 SEO 核心文件 | 已生成 `github_sync_seo_verification.md`；确认 `sitemap.xml`、`robots.txt`、meta/canonical/hreflang、Schema、H 标签与图片 alt 相关代码均保留。 |
| [x] | 提交并推送 | 已创建提交 `d96033e`（Sync permanent site design and SEO architecture）并推送到 GitHub `main` 分支。 |
