# Lin Plumbing & Gas 網站 SEO Meta 檢查與優化報告

作者：**Manus AI**  
日期：2026-05-02

## 檢查結論

本次已完成網站所有可索引頁面的 **meta title、meta description、canonical、hreflang、sitemap 與 robots.txt** 檢查，並已直接優化目前不足的頁面文案。依照 Google Search Central 的建議，搜尋結果標題應使用描述性且精簡的文字，避免空泛、重複或關鍵字堆砌；meta description 則應為每個頁面提供獨特、準確且具吸引力的摘要，讓搜尋用戶能快速理解頁面內容。[1] [2]

整體而言，網站目前共有 **11 個主要可索引頁面**，包含首頁、中文首頁、4 個服務頁與 5 個區域頁。優化後所有頁面均已具備獨立 title、獨立 description、正式網域 canonical，並已列入 sitemap。首頁也保留 `en-AU`、`zh-Hans-AU` 與 `x-default` 的 hreflang 設定，利於中英文版本之間的搜尋辨識。

## 本次已優化的重點

本次主要修正了部分服務頁與區域頁 title 未包含品牌詞、部分 description 缺少明確行動提示，以及部分頁面文案未充分結合服務詞與地區詞的問題。優化後的文案更聚焦 **悉尼水管工、悉尼華人水管工、中文水管工、通渠、熱水器維修、漏水維修、持牌煤氣工、Eastwood、Chatswood、Hurstville、Burwood、Epping/Ryde** 等主要搜尋意圖。

| 檢查項目 | 優化前狀態 | 優化後狀態 |
|---|---|---|
| Meta title | 部分服務頁與區域頁未包含品牌詞，頁面區分度不足 | 所有頁面均加入主要服務詞、區域詞與 **Lin Plumbing & Gas** 品牌詞 |
| Meta description | 部分頁面描述偏短或缺少行動提示 | 所有頁面均補入服務範圍、中文溝通、區域覆蓋與「立即致電」類行動提示 |
| Canonical | 已配置正式網域 canonical | 全部 11 個頁面確認存在 canonical |
| Sitemap | 已包含主要頁面 | 確認 sitemap 共有 11 個 URL，與目前主要路由一致 |
| Robots.txt | 允許搜尋引擎抓取並指向 sitemap | 確認 `Allow: /` 與正式 sitemap URL 正常 |
| 生產構建 | 尚未驗證本次修改後構建 | 已執行 `pnpm run build`，構建成功 |

## 優化後頁面 Meta 摘要

| 頁面 | Title 字數 | Description 字數 | 檢查結果 |
|---|---:|---:|---|
| `/` | 44 | 136 | 已優化，包含悉尼水管工、華人水管工、通渠、熱水器、煤氣與品牌詞 |
| `/zh` | 42 | 131 | 已優化，聚焦中文水管工、持牌煤氣工與悉尼主要華人區 |
| `/zh/blocked-drains` | 53 | 135 | 已優化，聚焦通渠、排水管維修、屋頂雨水系統與 CCTV 管道檢測 |
| `/zh/hot-water` | 43 | 123 | 已優化，聚焦熱水器維修、熱水爐安裝、沒有熱水處理與區域覆蓋 |
| `/zh/gas` | 52 | 138 | 已優化，聚焦悉尼煤氣工、持牌燃氣安裝、煤氣維修與 LPG/GAS 連接 |
| `/zh/leak-repair` | 47 | 126 | 已優化，聚焦漏水維修、水管爆裂、浴室廚房水管與緊急水管服務 |
| `/zh/areas/eastwood` | 50 | 148 | 已優化，聚焦 Eastwood 水管工、華人水管工、通渠與熱水器維修 |
| `/zh/areas/chatswood` | 51 | 129 | 已優化，聚焦 Chatswood 中文水管工、通渠、熱水器維修與煤氣工 |
| `/zh/areas/hurstville` | 53 | 138 | 已優化，聚焦 Hurstville 華人區、通渠、熱水器維修與煤氣工 |
| `/zh/areas/burwood` | 52 | 129 | 已優化，聚焦 Burwood 中文通渠、漏水維修、熱水器與煤氣工 |
| `/zh/areas/epping-ryde` | 54 | 132 | 已優化，聚焦 Epping/Ryde 中文水管、通渠、熱水器與煤氣服務 |

## 目前 SEO 狀態評估

優化後，所有主要頁面的 title 均保持在可讀且相對精簡的範圍內，並採用「主要搜尋詞 + 服務/地區差異 + 品牌詞」的結構。這種結構有助於搜尋用戶在結果頁快速辨識頁面主題，也避免每個頁面看起來過度相似。Google 官方文件也建議 title 應避免重複模板化文字，並可在 title 中簡潔加入品牌名稱。[1]

Description 方面，所有主要頁面均改為獨特摘要，並加入服務內容、中文溝通、覆蓋區域與自然行動提示。Google 官方文件指出，好的 meta description 應能以簡短摘要說明頁面內容，且不同頁面應使用能準確描述該頁面的獨特描述。[2]

## 已驗證項目

| 驗證項目 | 結果 |
|---|---|
| SEO meta 盤點腳本 | 已執行並覆蓋 11 個主要頁面 |
| Title 品質檢查 | 11/11 通過 |
| Description 品質檢查 | 11/11 通過 |
| Description 行動提示 | 11/11 通過 |
| Canonical | 11/11 通過 |
| Sitemap URL 數量 | 11 個 URL，與主要頁面一致 |
| Robots.txt | 已允許抓取並指向 `https://linplumbinggas.com/sitemap.xml` |
| 生產構建 | `pnpm run build` 成功 |

## 後續建議

接下來若要進一步提升 SEO 效果，建議可以針對 **Google Search Console** 提交 sitemap，並在網站發布後檢查實際索引狀態、搜尋字詞曝光、點擊率與頁面排名變化。Meta title 與 description 會影響搜尋結果展示與點擊意願，但最終是否完全採用仍取決於 Google 對頁面內容與查詢意圖的判斷，因此發布後仍需要根據 Search Console 實際資料進行迭代。[1] [2]

也建議後續建立更多細分服務或區域頁，例如 **Auburn 水管工、Strathfield 水管工、Macquarie Park 水管工、餐館商鋪水管維修、雨水排水系統、泵系統維修** 等，以擴展長尾搜尋覆蓋。不過新增頁面時需要保持每頁有獨立內容與真實服務資訊，避免僅用模板替換地名造成低品質重複頁面。

## References

[1]: https://developers.google.com/search/docs/appearance/title-link "Google Search Central: Influencing your title links in search results"  
[2]: https://developers.google.com/search/docs/appearance/snippet "Google Search Central: How to Write Meta Descriptions"
