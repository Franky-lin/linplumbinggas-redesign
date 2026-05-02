# Google 收录检查记录

检查时间：2026-05-02（悉尼时间）

## 公开 Google 搜索检查

使用 Google 搜索 `site:linplumbinggas.com` 后，搜索结果页已经显示 `linplumbinggas.com` 的结果，说明网站至少已有页面被 Google 发现并收录。

可见结果包括：

| 序号 | Google 显示标题 | Google 显示 URL | 摘要情况 |
|---|---|---|---|
| 1 | Lin Plumbing & Gas | `http://linplumbinggas.com` | 显示 General Plumbing、Leak repairs、Gas Fitting & Repairs 等新版网站服务内容。 |
| 2 | Linplumbinggas - lin plumbing&gas | `https://www.linplumbinggas.com › col` | 显示旧站/历史内容片段，如 All Aspects of General Plumbing 等。 |
| 3 | Linplumbinggas - Linplumbinggas | `https://www.linplumbinggas.com › col` | 显示 Terms & Conditions 相关文字片段。 |

## 初步判断

网站已经出现在 Google 的 `site:` 搜索结果中，因此可以初步判断：Lin Plumbing & Gas 网站已经“上 Google”了。当前仍需要继续通过 Google Search Console URL Inspection 确认首页 canonical、索引覆盖状态，以及 Search Console Performance 中是否已经开始记录曝光、点击和查询词。


## Google Search Console 检查

已进入 Google Search Console 的 `sc-domain:linplumbinggas.com` 属性，并使用 URL Inspection 检查 `https://linplumbinggas.com/`。

| 检查项目 | Search Console 显示结果 | 判断 |
|---|---|---|
| URL Inspection 总状态 | URL is on Google | 首页已经在 Google 索引中，可以出现在 Google 搜索结果。 |
| Page indexing | Page is indexed | 首页已被收录。 |
| Last crawl | May 1, 2026, 12:50:46 PM | Google 最近已经抓取过首页。 |
| Crawled as | Googlebot smartphone | Google 以移动端爬虫抓取，符合移动优先索引逻辑。 |
| Crawl allowed | Yes | 抓取未被 robots 阻止。 |
| Page fetch | Successful | Google 能成功获取页面。 |
| Indexing allowed | Yes | 页面允许索引。 |
| User-declared canonical | https://linplumbinggas.com/ | 站点声明的 canonical 正确指向主域名。 |
| Google-selected canonical | Inspected URL | Google 选择当前检查的首页作为规范页面。 |
| HTTPS | Page is served over HTTPS | HTTPS 正常。 |
| FAQ enhancement | 1 valid item detected | FAQ 结构化数据有效。 |

Search Console Overview 页面还显示 Performance 区域已有 `23 total web search clicks`，Indexing 区域显示 `3 indexed pages` 与 `8 not indexed pages`。这些数据说明网站已开始有 Google 搜索数据，但仍需要进一步查看 Performance 报告中的具体查询词，以区分新站内容和旧站历史页面带来的点击。


## Search Console Performance 初步数据

Google Search Console Performance 报告当前时间范围为最近 3 个月，最后更新时间显示为 5 小时前。报告显示：

| 指标 | 当前数值 |
|---|---:|
| Total clicks | 23 |
| Total impressions | 304 |
| Average CTR | 7.6% |
| Average position | 31.3 |

当前可见的 Top queries 包括 `plumber joslin`、`lin plumbing`、`natural gas plumbers broadmeadows`、`lin gas`、`natural gas plumbers kew east`、`franklin plumbing and gas`、`natural gas plumbers heidelberg`、`lane plumbing and gas`、`lin water`、`franklin plumbing`。这些查询词目前点击数多为 0，说明虽然 Search Console 已经有曝光数据，但核心目标词如 `悉尼水管工`、`悉尼水工`、`Sydney plumber`、`gas plumber Sydney` 等还需要持续观察。

重要说明：由于 Search Console 的时间范围是最近 3 个月，且网站刚完成新版上线，部分点击、曝光或查询词可能来自旧站历史页面或旧内容。因此本次结论应重点确认“首页已被 Google 收录”，关键词排名则建议继续按每周一、周四固定检查。
