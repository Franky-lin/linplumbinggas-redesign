# 上线后 SEO 关键依据

## Google Search Console

Google Search Console 官方页面说明，Search Console 可以帮助网站所有者查看搜索流量和表现、修复问题，并让网站在 Google 搜索结果中表现更好。页面明确提到可以提交 sitemap 和单个 URL 供 Google 抓取，并查看索引覆盖情况；URL Inspection Tool 可查看页面的抓取、索引和展示信息。

引用来源：
- https://search.google.com/search-console/about

## Sitemap

Google Search Central 的 sitemap 文档说明，网站可以通过 Search Console 的 Sitemaps report 提交 sitemap，也可以在 robots.txt 中声明 sitemap 路径，Google 下一次抓取 robots.txt 时会发现它。XML sitemap 是最通用的 sitemap 格式之一，可向 Google 提供 URL 相关信息。

引用来源：
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

## 用户当前站点状态

用户确认 `https://linplumbinggas.com` 与 `https://www.linplumbinggas.com` 均可打开新版网站，Manus 域名设置中两个自定义域名均显示绿色勾。网站已具备基础站内 SEO，包括中文关键词、FAQ、结构化数据、robots.txt 与 sitemap.xml。下一步重点不是立即修改 DNS，而是提交 Search Console、等待 Google 抓取索引、持续增强本地 SEO 信号。

## Google Business Profile 与本地排名

Google Business Profile 官方帮助页面说明，客户在 Google Maps 和 Search 中搜索附近商家时，会看到本地结果；商家可以使用 Business Profile 改善本地排名。页面同时说明，完整且准确的商家信息更有可能出现在本地搜索结果中，而本地结果主要基于 relevance、distance、prominence 三类因素。Google 也说明无法通过请求或付费获得更好的自然本地排名。

引用来源：
- https://support.google.com/business/answer/7091?hl=en


## Google Search Console 当前页面观察

当前已能进入 Google Search Console 后台，账号显示为 `franky@linplumbinggas.com`。资源选择器中可见两个资源：`linplumbinggas.com` 的 Domain property，以及 `http://www.linplumbinggas.com/` 的 URL prefix property。当前页面停留在 URL prefix property 的 Sitemaps 页面，Submitted sitemaps 列表为空，表示还没有提交 sitemap。建议优先切换到 `linplumbinggas.com` Domain property 后提交完整 sitemap：`https://linplumbinggas.com/sitemap.xml`，这样更适合覆盖主域名与 www 等不同 URL 版本。


## Sitemap 可访问性检查

已打开 `https://linplumbinggas.com/sitemap.xml`，浏览器显示 XML sitemap 文件可以访问。当前 sitemap 内容包含首页 URL `https://www.linplumbinggas.com/`，并标注 `changefreq` 为 `weekly`、`priority` 为 `1.0`。这表示可以在 Search Console 的 `linplumbinggas.com` Domain property 下提交该 sitemap。提交时在输入框内可填写完整地址 `https://linplumbinggas.com/sitemap.xml`，或按页面前缀要求只填写 `sitemap.xml`。


## Sitemap 提交结果

已在 Google Search Console 的 `linplumbinggas.com` Domain property 中提交 `https://linplumbinggas.com/sitemap.xml`。页面弹窗显示 `Sitemap submitted successfully`，表示站点地图提交成功。Google 将定期处理该 sitemap 并检查后续变化。下一步建议使用 URL Inspection 检查并请求索引首页 `https://linplumbinggas.com/`。
