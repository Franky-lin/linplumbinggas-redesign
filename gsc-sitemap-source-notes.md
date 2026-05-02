# Google Search Console Sitemap 官方資料重點

來源一：Google Search Central《Build and Submit a Sitemap》。重點包括：Google 支援多種 sitemap 格式；XML sitemap 可提供頁面 URL、最後更新時間與本地化版本資訊；可以透過 Search Console 的 Sitemaps report 提交 sitemap；也可以在 robots.txt 中加入 `Sitemap: https://example.com/my_sitemap.xml`，Google 下次抓取 robots.txt 時會找到該 sitemap。

來源二：Google Search Console 說明《透過 Sitemap 報告管理 Sitemap》。重點包括：Sitemap 報告可向 Google 說明資源是否有新的 sitemap、查看提交記錄、查看 Google 解析 sitemap 時發現的錯誤；提交 sitemap 需要該資源的擁有者權限；報告會顯示「成功」、「無法擷取」或「Sitemap 發生錯誤」等狀態；如果看不到預期 sitemap，需確認是否混淆 http/https 或 www/非 www 資源。

本專案適用判斷：目前公開檢查顯示 `https://linplumbinggas.com/` 與 `https://linplumbinggas.com/sitemap.xml` 為 200；`https://www.linplumbinggas.com/` 會 301 轉到非 www。因此，本輪已將 sitemap 與 robots.txt 改為使用 `https://linplumbinggas.com` 作為正式提交基準。
