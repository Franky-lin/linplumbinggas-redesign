# Lin Plumbing & Gas 重设计待办

- [x] 等待用户上传“Manus专用”文件夹中的真实素材；不得使用 AI 生成图片作为新版网站图片。
- [x] 将已生成的 AI 视觉资产从新版实施方案中排除，仅作为废弃参考，不写入网站代码。
- [x] 网站服务范围以 Sydney / 悉尼地区为核心表达。
- [x] 在首页、服务区和移动端固定联系区突出 24/7 Emergency Plumbing & Gas Service。
- [x] 网站内容采用中英双语：英文优先用于 SEO 与澳洲本地客户，中文辅助服务华人客户。
- [x] 保留并强化现有公开信息：电话 0430 731 989、邮箱 FRANKY@LINPLUMBINGGAS.COM、LIC NO: 459684C、ABN: 92 670 077 102。
- [x] 构建本地 SEO 页面结构：Home、Services、Gas Services、Emergency Plumbing、Hot Water、Blocked Drains、Service Areas、Contact、Terms。
- [x] 联系路径包含一键电话、报价表单样式、邮箱、服务区域说明和紧急服务提示。
- [x] 若用户暂时未提供 Logo 或照片，先使用非图片型设计占位区块或明确标注“待替换真实照片”，避免使用假照片。

- [x] 检查当前可访问文件系统中是否存在桌面“Manus专用”文件夹，并清点可用于网站的真实照片、Logo、视频或文档素材。
- [x] 如找到素材，将可用图片复制到 `/home/ubuntu/webdev-static-assets/` 并上传为网站可用的持久资源链接。

- [x] 用户已上传 `/home/ubuntu/upload/pasted_file_8IjNKJ_Manus专用`，需要清点该路径中的真实素材并选择适合网站首屏、服务区、案例区和页脚品牌区的图片。

- [x] 已收到真实图片素材：98.jpg（Logo）、97.jpeg（人员与车辆）、91.jpg（工具车）、89.jpeg（浴室完工图）、90.jpeg 与 103.jpg（燃气表/燃气管）、92.jpeg（燃气工具现场）、96.jpeg（热水或设备间）、99.jpeg（管道摄像/排水检查）、102.jpeg（地下排水管）、93.jpeg、94.jpeg、95.jpeg、100.jpeg、101.jpeg、105.jpeg（施工与管道工程）。
- [x] 严格遵守用户要求：不得再次用图片查看工具打开这些附件；根据用户在对话中展示的图片内容进行甄别和归类。
- [x] 新网站所有图片必须来自这些真实上传素材或用户后续补充素材；不得使用 AI 生成图片、图库假图或 Unsplash 图片。
- [x] 对 97.jpeg 中人物面部已模糊的照片谨慎使用，可作为“真实团队/车辆”信任素材；避免放大人物脸部，优先突出车辆和设备。
- [x] 优先选择 91.jpg 或 97.jpeg 作为首屏真实服务场景，98.jpg 作为 Logo，89.jpeg 作为完工质量案例，90/103/92/100/105 作为 gas service，99/102/94/95/93 作为 drainage/plumbing construction service。

## 本轮用户反馈修改

- [x] 放大并优化页头中的公司名称与 Logo 展示，优先使用用户提供照片中的品牌/Logo素材，不再显得过小。
- [x] 将首页中英文并排内容调整为语言切换模式：主页提供按钮，用户点击后可在 English 与 中文之间切换。
- [x] 删除或淡化页面中“真实照片”“No stock or AI images”等显性说明，让照片自然体现真实性。
- [x] 检查导航、服务区、案例区、联系区在两种语言下的内容完整性与排版。
- [x] 运行构建验证并保存新的可回滚版本。

## 本轮用户反馈修改：Terms 与 Logo 融合

- [x] 找到原网站 Terms & Conditions 内容，并完整迁移到新网站中。
- [x] 在首页导航或页脚提供 Terms & Conditions 入口，避免原网站有用内容丢失。
- [x] 将当前白底 Logo 处理为透明背景或适合深色导航的反白/融入式版本。
- [x] 更新网站品牌区，避免白色 Logo 图片块与深海军蓝导航背景割裂。
- [x] 运行构建检查、预览验证并保存新的可回滚版本。

## 本轮用户反馈修改：页面精简与 Terms 菜单化

- [x] 检查首页当前图片使用情况，移除重复或视觉功能相近的照片，让页面更简洁。
- [x] 保留必要的代表性图片：首屏、核心服务、Gas、Drain、案例精选与联系信任区即可，避免同类照片堆叠。
- [x] 将 Terms & Conditions 从首页主体内容流中移除，不强制客户浏览。
- [x] 保留顶部菜单与页脚中的 Terms 入口，用户需要时可自行查看。
- [x] 如果当前单页结构不适合隐藏 Terms，改为独立 Terms 路由或轻量弹出/折叠方式，并确保导航可访问。
- [x] 运行构建检查、预览验证并保存新的可回滚版本。

## 中文 SEO 竞品对比：悉尼水工
- [x] 使用中文关键词“悉尼水工”查看搜索结果，记录自然搜索中的主要竞争页面。
- [x] 分析竞争页面的标题、描述、中文关键词、服务页结构、本地信号与转化入口。
- [x] 审计当前新网站的 title、meta description、H1/H2、中文内容、robots.txt、sitemap.xml 与服务关键词覆盖。
- [x] 对比我们当前 SEO 与竞品的优势和不足，形成可执行优化建议。
- [x] 基于明显 SEO 缺口，完成首页 title/meta、中文 H1/H2、服务关键词、地区覆盖、长尾内容区块与 JSON-LD serviceType 优化。

## 发布与旧站覆盖

- [x] 确认旧网站当前托管方式：是否在 Manus、cPanel/传统主机、WordPress、Wix/Squarespace、Netlify/Vercel 或其他平台。
- [x] 确认旧网站域名 DNS 管理位置：域名注册商、Cloudflare 或托管商 DNS 面板。
- [x] 发布新版网站前保留旧站备份，并记录旧站当前 A/CNAME 记录，便于必要时回滚。
- [x] 如果使用 Manus 内置托管，先点击当前 checkpoint 的 Publish，再在 Domains 设置中绑定旧域名。
- [x] 如果继续使用外部托管，导出静态构建文件或代码，并按目标平台要求上传，同时注意可能存在兼容性差异。

## 旧站迁移与 SEO 获客策略补充

- [x] 旧网站由淘宝服务商制作并托管，当前可获得旧站后台登录信息，但仍需确认域名 DNS 控制权在哪里。
- [x] 优先目标不是简单换页面，而是保留 `linplumbinggas.com` 原域名并提升悉尼本地 SEO 获客能力。
- [x] 上线前需要备份旧站内容、截图旧站后台关键设置，并记录当前 DNS A/CNAME 解析，避免迁移后无法回滚。
- [x] 建议优先采用 Manus 发布新版网站并绑定原域名；如果不能拿到 DNS 控制权，再考虑让淘宝服务商提供域名解析修改或协助导入静态文件。
- [x] 用户截图中包含旧站后台账号信息，上线迁移后应立即修改旧后台密码，避免长期暴露风险。

## Google Domains 域名迁移确认

- [x] 用户确认域名使用 Google Domains/Google 域名体系管理，优先通过 DNS 指向新版 Manus 网站，而不是继续依赖旧站后台。
- [x] 发布新版网站后，在 Manus 的 Domains 面板添加 `linplumbinggas.com` 与 `www.linplumbinggas.com`，并按照系统给出的 A/CNAME 记录到 Google Domains DNS 中配置。
- [x] 修改 DNS 前截图保存原有 `@`、`www`、MX、TXT 等记录；只替换网站相关 A/CNAME，不动邮箱相关 MX/TXT 记录，避免影响邮箱。
- [x] DNS 生效后检查 `https://linplumbinggas.com` 和 `https://www.linplumbinggas.com` 是否都打开新版网站，并确认电话、邮箱、中文切换与表单正常。

## HTTPS 证书与 Publish 影响

- [x] 用户旧站曾向淘宝服务商购买 HTTPS 证书，需提醒该证书通常绑定旧托管环境，迁移到新托管后一般不需要继续依赖旧证书。
- [x] Publish 新版 Manus 网站本身不会影响旧站；只有在 Google Domains/Squarespace Domains 修改 DNS 指向新站后，旧域名访问内容才会切换。
- [x] 使用 Manus 绑定自定义域名后，应等待平台自动签发/启用 HTTPS，再确认 `https://linplumbinggas.com` 与 `https://www.linplumbinggas.com` 均无“不安全”提示。
- [x] DNS 切换期间可能出现短暂解析或证书生效延迟，建议在非高峰时间操作并保留旧 DNS 记录截图以便回滚。

## 用户确认开始域名绑定协助

- [x] 用户已确认希望协助完成 Manus 发布、绑定 `linplumbinggas.com` / `www.linplumbinggas.com`，并指导在 Google Domains 中修改 DNS。
- [x] 涉及 Publish、域名绑定、DNS 记录修改、删除旧 A/CNAME 记录等真实上线动作前，需要用户在界面中自行确认或明确授权。
- [x] 如 Google Domains 需要登录、双重验证或个人信息输入，应让用户接管浏览器或由用户提供截图，不直接索要敏感登录密码。

## iPhone 操作域名绑定

- [x] 用户当前使用 iPhone 操作 Manus 发布与自定义域名流程，需要以手机端界面说明如何找到“自定义域名 / Domains”入口。
- [x] 如果手机端无法清楚显示 DNS 记录，建议用户横屏、使用浏览器打开 Manus，或改用电脑完成域名和 DNS 设置。
- [x] 用户只需先在 Manus 端查看/添加自定义域名并截图 DNS 记录，暂不在 Google Domains 保存任何 DNS 修改。

## 本轮前端修复

- [x] 检查网站中用户提供的真实图片显示位置与对齐方式，修复裁切、偏移或容器比例导致的不对齐问题。
- [x] 从网站界面中移除 “Sydney Chinese service” 选项，避免用户认为该标签不合适或影响品牌表达。
- [x] 修改完成后运行构建验证，确认关键词移除和图片布局调整没有造成前端错误。
- [x] 保存新的 checkpoint，便于用户继续查看和发布。

## SEO competitor follow-up

- [x] 分析 Chinese Panda Plumbing 在“悉尼水工 / 悉尼水管工”相关中文搜索中的站内 SEO 做法、页面结构、标题描述与内容覆盖。
- [x] 对比 Lin Plumbing & Gas 当前新站的中文关键词覆盖、结构化数据、标题层级与本地服务区域内容。
- [x] 在不夸大、不堆砌关键词的前提下，进一步优化 Lin Plumbing & Gas 首页中文 SEO 文案、服务语义、FAQ 或结构化数据。
- [x] 运行生产构建验证并保存新的检查点。
- [x] 向用户说明 SEO 无法保证第一页排名，但可通过站内 SEO、本地商家资料、外链与持续内容提高机会。

## Stormwater 与 Pump System 服务补充

- [x] 在不新增图片素材的情况下，把 stormwater system 和 pump system 加入首页服务项目。
- [x] 同步更新英文文案，包括 service cards、service area tags、SEO section、FAQ 与 meta description。
- [x] 同步更新中文文案，包括雨水排水系统、泵系统/排污泵/增压泵等服务表达。
- [x] 更新 JSON-LD 结构化数据的 serviceType，增强搜索引擎对新增服务范围的理解。
- [x] 运行生产构建验证，并保存新的 checkpoint 给用户预览。

## 住宅热水器图片与新增服务补充

- [x] 使用用户新上传的住宅 Rinnai hotflo plus 热水器照片替换 Hot Water Systems / 热水器服务卡片原商业热水系统照片。
- [x] 将原 commercial hot water system 图片保留给商业、复杂管道或设备间相关场景，避免住宅客户误解服务重点。
- [x] 将 stormwater system 和 pump system 加入英文服务项目、服务标签、FAQ 与 SEO 文案。
- [x] 将“雨水排水系统”“泵系统/排污泵/增压泵”等中文表达加入中文服务项目、服务标签、FAQ 与 SEO 文案。
- [x] 上传新图片到网站静态资源存储，使用返回的持久 URL，不把图片直接放进项目目录。
- [x] 更新 JSON-LD serviceType 并运行生产构建验证，然后保存新的 checkpoint。

## 客户口吻修正与新增服务完成项

- [x] 将页面中“客户搜索什么”“给搜索引擎 clearer context”等偏内部 SEO 说明的文字改成直接面向客户的服务说明。
- [x] 将中文“中文搜索服务 / 客户搜索悉尼水工时...”版块改为“悉尼水管与排水服务说明”或类似客户友好标题。
- [x] 将英文 “Search FAQ / Sydney Plumbing Questions Customers Ask Before Calling” 改为自然的 “Common Plumbing Questions” 或客户服务问答表达。
- [x] 同步完成 stormwater system、pump system 与住宅热水器安装图片的服务展示更新。


## 上线前检查与域名替换咨询

- [x] 向用户说明当前网站上线前仍建议人工复核的项目，包括电话、服务范围、中文文案、真实图片裁切和移动端显示。
- [x] 说明 Manus 内置发布与域名绑定流程，提醒用户需要在界面点击 Publish，而不是由助手直接发布。
- [x] 指导用户在 Domains 中添加 `linplumbinggas.com` 与 `www.linplumbinggas.com`，并按界面提示修改 DNS。
- [x] 提醒用户保留旧网站资料和 DNS 回滚信息，以便出现解析延迟或内容问题时恢复。


## 网站已发布后的正式域名绑定

- [x] 用户已完成新版网站 Publish，下一步需要在 Manus Domains 添加 `linplumbinggas.com` 与 `www.linplumbinggas.com`。
- [x] 获取 Manus 为两个域名生成的 DNS 记录后，再到 Google Domains / Squarespace Domains 修改对应网站记录。
- [x] 修改前截图保存当前 DNS；只处理网站相关的 `@`、`www`、A、CNAME 记录，不修改 MX/TXT 邮箱记录。
- [x] DNS 生效后检查 `https://linplumbinggas.com`、`https://www.linplumbinggas.com`、电话按钮、中文切换、Terms 与主要服务页面。


## 域名设置界面图文指引

- [x] 用户找不到 Manus 项目管理界面的 Settings / Domains，需要通过截图或图文方式引导。
- [x] 请用户上传当前 Manus 页面截图后，在截图基础上说明应点击的按钮位置。
- [x] 在用户进入 Domains 后，继续指导添加 `linplumbinggas.com` 与 `www.linplumbinggas.com`，并获取 DNS 记录。

## 上线后 SEO 与发布跟进

- [x] 协助用户将 `linplumbinggas.com` 提交到 Google Search Console，并提交 sitemap。
- [x] 指导用户检查 Google 是否已索引 `linplumbinggas.com` 与 `www.linplumbinggas.com`。
- [x] 说明“悉尼水工”等关键词排名需要时间、索引、内容深度、本地商家资料与外部信号共同积累。
- [x] 向用户确认后续通过 Manus 修改网站后，需要保存检查点并重新发布，正式域名才会显示最新版本。
- [x] 建议用户后续补充 Google Business Profile、真实案例照片、客户评价和区域服务内容页。

配套参考：当前正式域名 `linplumbinggas.com` 与 `www.linplumbinggas.com` 已在 Manus 网域设置中显示绿色勾，表示自定义域名连接成功。


## Google Search Console 设置指导

- [x] 指导用户进入 Google Search Console，并使用 Google 账号登录。
- [x] 建议优先添加 Domain property：`linplumbinggas.com`，不要输入 `https://` 或 `www`。
- [x] 获取 Google 提供的 DNS TXT 验证记录，并指导用户在 Squarespace DNS 的 Custom records 中新增 TXT 记录。
- [x] 提醒用户不要删除或修改现有 MX、TXT、CNAME、A 记录，尤其是 Google Workspace 邮箱相关记录。
- [x] 验证通过后提交 `https://linplumbinggas.com/sitemap.xml`。
- [x] 使用 URL Inspection 检查 `https://linplumbinggas.com` 并请求索引。
- [x] 说明 Search Console 数据通常需要数天开始显示，关键词排名需要持续观察与内容积累。


## 本地 SEO 关键词长期跟踪

- [x] 定期检查 Google Search Console 中 `linplumbinggas.com` 的索引状态、曝光、点击、平均排名与查询词。
- [x] 重点关注中文关键词：`悉尼水管工`、`悉尼水工`、`悉尼天然气`、`悉尼煤气工`、`悉尼热水器维修`、`悉尼热水系统`、`悉尼通渠`、`悉尼漏水维修`。
- [x] 重点关注英文关键词：`Sydney plumber`、`plumber Sydney`、`gas plumber Sydney`、`hot water plumber Sydney`、`blocked drain plumber Sydney`、`emergency plumber Sydney`、`licensed plumber Sydney`。
- [x] 如果 Search Console 显示有曝光但点击率低，优先优化标题、描述和页面首屏文案。
- [x] 如果相关关键词没有曝光，优先新增对应服务页面或区域页面，例如热水器维修、煤气安装、通渠、Eastwood/Chatswood/Ryde 等区域服务页。
- [x] 持续建议用户完善 Google Business Profile，包括服务类别、服务区域、照片、评价与网站链接。
- [x] 后续若用户同意，可设置每周或每两周 SEO 检查提醒。


## 每周两次 SEO 检查安排

- [x] 用户确认希望每周检查 2 次 Lin Plumbing & Gas 的 SEO 表现，重点关注 Google Search Console 数据与本地关键词排名趋势。
- [x] 每次检查应覆盖索引状态、sitemap 状态、首页 URL Inspection、Search Console 查询词、曝光、点击、CTR、平均排名。
- [x] 重点关键词包括 `悉尼水管工`、`悉尼水工`、`悉尼天然气`、`悉尼煤气工`、`悉尼热水`、`悉尼热水器维修`、`Sydney plumber`、`gas plumber Sydney`、`hot water plumber Sydney`、`blocked drain plumber Sydney`。
- [x] 如果发现关键词有曝光但点击率低，建议优化 title、meta description 与首页首屏转化文案。
- [x] 如果关键词长期没有曝光，建议新增独立服务页、区域服务页、案例内容或完善 Google Business Profile。
- [x] 每周两次的具体日期和时间已确认：每周一与每周四上午 9:00（悉尼时间）。
- [x] 已创建定期 SEO 检查任务：每周一与每周四上午 9:00（悉尼时间），按固定时间检查首页收录、sitemap 状态、Search Console 曝光/点击/CTR/平均排名，以及核心中英文关键词表现。
- [x] 首 4–6 周以观察 Google 收录与初始曝光为主，不急于频繁改动网站；若数据表明某些服务词有曝光但点击率低，再优先调整标题、描述与首页文案。


## 本次 Google 收录状态检查

- [x] 检查 `https://linplumbinggas.com/` 与 `https://www.linplumbinggas.com/` 是否可正常访问：主域名返回 200，www 自动 301 跳转到主域名后返回 200。
- [x] 使用公开 Google 搜索方式检查 `site:linplumbinggas.com` 是否已经出现收录结果：Google 已显示 linplumbinggas.com 相关结果。
- [x] 已进入 `sc-domain:linplumbinggas.com` 的 Google Search Console，URL Inspection 显示 `https://linplumbinggas.com/` 为 `URL is on Google`，`Page is indexed`。
- [x] 本次无需用户接管浏览器，当前登录状态可查看 Search Console。
- [x] 根据检查结果说明当前是否已经“上 Google”，并给出下一步等待、再次请求索引或内容优化建议。


## 本次中文关键词公开排名检查

- [x] 使用 Google 公开搜索检查核心中文关键词，包括 `悉尼水管工`、`悉尼水工`、`悉尼煤气工`、`悉尼热水器维修`、`悉尼通渠`。
- [x] 记录 Lin Plumbing & Gas 是否出现在自然搜索结果中，以及大致页数、自然排名位置、标题、URL 与摘要显示方式：上述中文词当前可见结果中未发现 `linplumbinggas.com` 明显自然排名。
- [x] 同时注意 Google 是否优先展示地图包、本地商家、中文目录站或竞争对手网站：当前结果主要由广告、分类信息、中文社区、旧媒体页和本地服务商占据。
- [x] 将公开搜索结果与 Google Search Console Performance 数据进行对照，说明当前排名只是一次搜索快照，实际排名可能因地点、设备、语言和账号而变化。
- [x] 根据结果判断下一步是继续等待、优化首页标题描述，还是新增中文服务页/区域页：短期继续观察，后续优先考虑新增中文服务页和区域页。


## 中文本地 SEO 后续优化建议

- [x] 基于当前状态制定建议：网站已收录，但中文核心词尚未进入明显前排。
- [x] 按优先级区分立即可做、观察 2–4 周后再做、4–6 周后根据数据决定的优化动作。
- [x] 重点围绕中文服务页、区域服务页、Google Business Profile、客户评价、真实案例照片和标题摘要展示优化。
- [x] 避免承诺固定排名或保证首页；用可执行、可衡量的方式说明后续 SEO 路线。


## 定期 SEO 检测与报告确认

- [x] 用户已确认需要按时检测并报告：每周一与每周四上午 9:00（悉尼时间）。
- [x] 每次报告需要覆盖 Google 收录状态、Search Console 曝光/点击/CTR/平均排名、中文核心关键词排名，以及是否需要进一步优化。
- [x] 重点关注关键词：`悉尼水管工`、`悉尼水工`、`悉尼煤气工`、`悉尼热水器维修`、`悉尼通渠`，并兼顾英文本地服务词。


## SEO 检测频率评估

- [x] 评估每周两次 SEO 检测对新站阶段是否合适：新站前 4–6 周每周两次合适，不算多。
- [x] 说明什么时候适合保持每周两次，什么时候可以降为每周一次：上线初期、刚改页面、刚提交 sitemap 时保持每周两次；数据稳定后可降为每周一次。
- [x] 给出 Lin Plumbing & Gas 当前阶段的推荐检测节奏：先保持每周一与周四 9:00，4–6 周后根据数据稳定程度再考虑调为每周一次。


## Google 搜索展示中文化优化

- [x] 分析用户截图中自然搜索结果：标题偏英文、摘要带旧站内容、出现 `Login / 本站支持` 等不利于转化的信息。
- [x] 分析 Google 商家资料展示：当前商家卡片已有中文界面、电话、营业状态、照片，但自然搜索结果摘要仍需优化。
- [x] 对比 Chinese Panda Plumbing 等竞品显示方式，判断其是否通过标题、meta description、页面中文内容、结构化数据、Google Business Profile 和评论信息获得更详细展示。
- [x] 给出 Lin Plumbing & Gas 面向华人客户的优化建议，包括首页 title、description、中文首屏文案、FAQ、服务页和旧路径清理。
- [x] 如用户确认执行，后续可修改网站元标题、元描述和中文内容，并等待 Google 重新抓取。

## 2026-05-02 Google 搜索展示中文化优化执行

- [x] 更新首页 HTML title、meta description、Open Graph 和 Twitter 描述，使其更明确面向悉尼华人客户。
- [x] 在首页靠前位置增加可见中文服务说明，覆盖悉尼水管工、悉尼煤气工、热水器维修、通渠和中文服务关键词。
- [x] 检查结构化数据与页面可见文案是否保持一致，避免只在 meta 中堆关键词。
- [x] 运行生产构建验证，并检查关键中文词是否已经出现在源码和构建输出中。
- [x] 保存新 checkpoint，并向用户说明 Google 展示更新仍需等待下一轮抓取。


## 2026-05-02 最新版 SEO 复查与澳洲华人关键词调研

- [x] 复查最新版首页 title、meta description、可见中文内容、结构化数据与构建输出是否一致。
- [x] 调研澳洲华人用户在本地服务搜索中的语言习惯，包括中文、英文和中英混合关键词。
- [x] 对比华人水管工相关竞品的 Google 展示方式、页面标题、摘要和内容结构。
- [x] 整理 Lin Plumbing & Gas 当前版本预计会提升的搜索机会，以及仍然较弱的关键词覆盖。
- [x] 给出可执行关键词地图，包括首页关键词、服务页关键词、区域页关键词和 Google Business Profile 文案方向。


## 2026-05-02 跨市场中文水管工 SEO 竞品调研

- [x] 采集美国、加拿大、英国中文 Google 或可公开索引结果中与“水工 / 水管工 / 华人水管工 / Chinese plumber”相关的代表性结果。
- [x] 浏览代表性华人水管工或中文服务网站首页，记录标题、首屏、服务分类、城市/区域词、紧急电话、评价、执照和语言入口做法。
- [x] 对比 Lin Plumbing & Gas 当前首页，判断仍有哪些 SEO 与转化优化空间。
- [x] 整理可借鉴做法，区分“建议马上做”“可后续做”“不建议照搬”。
- [x] 形成面向 Lin Plumbing & Gas 的下一步优化建议并交付用户。


## 2026-05-02 中文 SEO 页面体系开发

- [x] 检查现有 React 路由、首页组件和全局 SEO 结构，确认新增页面不会影响英文首页。
- [x] 新增 `/zh/` 中文首页，面向“悉尼华人水管工 / 悉尼中文水管工 / Chinese plumber Sydney”等核心搜索。
- [x] 新增中文服务页：`/zh/blocked-drain-sydney/`，面向“悉尼通渠 / 悉尼下水道堵塞 / 马桶堵 / 厨房下水堵”等搜索。
- [x] 新增中文服务页：`/zh/hot-water-repair-sydney/`，面向“悉尼热水器维修 / 热水器不出热水 / 热水炉更换”等搜索。
- [x] 新增中文服务页：`/zh/gas-fitter-sydney/`，面向“悉尼煤气工 / 煤气安装 / 煤气炉维修”等搜索。
- [x] 新增中文服务页：`/zh/leak-repair-sydney/`，面向“悉尼漏水维修 / 爆水管 / 天花板漏水 / 水龙头漏水”等搜索。
- [x] 在英文首页加入中文入口与内部链接，帮助用户和 Google 发现中文页面。
- [x] 为中文页面补充页面级标题、描述、canonical、结构化数据或等效页面元信息策略。
- [x] 运行生产构建，并检查关键中文词和路由构建结果。
- [x] 保存新版本并交付给用户查看成品。

## 2026-05-02 中文 SEO 页面客户可见文案整改

- [x] 全站检查新增中文页面中偏内部说明、SEO 策略说明、给站长看的说明文字。
- [x] 将“按搜索习惯组织内容”“独立页面承接搜索意图”“强化本地搜索匹配”“内部链接帮助搜索引擎理解”等文案改成客户能接受的服务说明。
- [x] 检查中文首页 `/zh` 的服务介绍、重点页面、区域页面、FAQ 与联系区文案。
- [x] 检查中文服务页模板 `/zh/blocked-drains`、`/zh/hot-water`、`/zh/gas`、`/zh/leak-repair` 的标题、段落和 CTA。
- [x] 检查中文区域页模板 `/zh/areas/*` 的本地服务文案，删除“区域页”“关键词”“搜索组合”等站内 SEO 术语。
- [x] 保留有利于排名的关键词，但让它们自然出现在客户可读的段落里。
- [x] 重新运行生产构建并预览关键页面。
- [x] 保存新的 checkpoint 并向用户说明已修正内容。

## 2026-05-02 Stormwater 图片修正

- [ ] 使用用户上传的真实 stormwater 现场照片替换网站中误用的 stormwater 图片。
- [ ] 将图片保存到 `/home/ubuntu/webdev-static-assets/` 并通过网站静态资源上传流程获取可部署 URL。
- [ ] 定位所有 stormwater、雨水排水、stormwater system 相关图片引用，避免仍显示错误图片。
- [ ] 预览相关页面，确认图片显示正常且没有拉伸、遮挡或错误裁切。
- [ ] 运行生产构建并保存新版本。

## 2026-05-02 根据 Google 搜索结果截图优化中文 SEO

- [ ] 对照截图中的搜索结果，强化客户会直接搜索的词：`悉尼水管工`、`华人水管工`、`Eastwood 水管工`、`排水管维修`、`屋顶雨水系统改造`、`本地持牌水管工`。
- [ ] 检查中文首页 `/zh` 的 title、description、H1、首屏文案，确保搜索结果摘要更像客户会点击的服务介绍。
- [ ] 优化 Eastwood 区域页标题与摘要，增加 `Eastwood 水管工`、`悉尼华人水管工`、`本地持牌水管工` 等自然表达。
- [ ] 优化通渠/排水相关页面，补充 `排水管维修`、`雨水管维修`、`stormwater drainage`、`屋顶雨水系统` 等服务表达，但避免堆砌关键词。
- [ ] 增加一个面向客户的“常见中文搜索问题”区块，让页面自然覆盖中文搜索习惯，而不是展示 SEO 术语。
- [ ] 检查 sitemap、meta 与结构化数据是否仍对应新的中文 SEO 页面。
- [ ] 运行生产构建并保存新版本。

## 2026-05-02 Sitemap 與 Google Search Console 收錄提交

- [ ] 核對目前網站正式網域：`https://www.linplumbinggas.com`、`https://linplumbinggas.com` 與 Manus 發布網域。
- [ ] 檢查現有 `client/public/sitemap.xml` 是否包含英文首頁、中文首頁、中文服務頁與中文區域頁。
- [ ] 生成或更新 sitemap，使用正式首選網域 `https://www.linplumbinggas.com` 作為 URL 基準。
- [ ] 檢查 `robots.txt` 是否允許抓取並指向正式 sitemap。
- [ ] 執行 XML 基本檢查與前端生產構建。
- [ ] 保存版本。
- [ ] 提供 Google Search Console 新增資源、驗證網站、提交 sitemap、要求索引與後續檢查的詳細步驟。

## 2026-05-02 全站 Meta Title 與 Description SEO 檢查

- [ ] 盤點目前網站所有可索引頁面路由，包括英文首頁、中文首頁、中文服務頁與中文區域頁。
- [ ] 檢查每個頁面的 meta title 是否包含主要服務詞、區域詞與品牌詞，且長度適合 Google 搜尋結果展示。
- [ ] 檢查每個頁面的 meta description 是否自然包含客戶會搜尋的服務需求、地區、持牌與緊急服務訊息。
- [ ] 檢查 canonical 是否使用正式主網域 `https://linplumbinggas.com`。
- [ ] 檢查首頁與中文首頁是否具備正確 hreflang 關係。
- [ ] 檢查每個頁面的 H1 是否與 meta title 搜尋意圖一致，但避免完全機械重複。
- [ ] 優化不足頁面的 title、description、canonical、structured data 與客戶可見標題。
- [ ] 執行生產構建並抽查重要頁面的 head 輸出。
- [ ] 保存新版本並交付檢查結果表。
