# Lin Plumbing & Gas Vercel Deployment Notes

作者：**Manus AI**  
日期：2026-05-02

本文件記錄本網站從 Manus storage 圖片依賴遷移到本地靜態圖片後，部署到 Vercel 所需要的設定。網站目前是 **React + Vite 靜態前端網站**，外部部署時不需要必填的 `.env` 或秘密環境變量。

| 項目 | Vercel 設定 |
|---|---|
| Framework Preset | Vite |
| Install Command | `pnpm install --frozen-lockfile` |
| Build Command | `pnpm build:client` |
| Output Directory | `dist/public` |
| Required Environment Variables | 無 |
| Static Images Directory | `client/public/images` |

圖片已從 `/manus-storage/...` 轉為 Vite public 靜態資源路徑 `/images/...`。在 Vercel 部署後，這些圖片會直接由網站根路徑下的 `/images/filename` 提供。

| 類別 | 狀態 |
|---|---|
| Manus Analytics | 已從 `client/index.html` 移除，避免外部部署時出現 Manus 平台環境變量佔位符。 |
| Manus Runtime | 已從 Vite plugins 移除，避免外部 build 注入 Manus 預覽提示。 |
| Manus Storage Proxy | 僅保留為本地 Manus 開發環境工具；正式 Vercel build 不依賴它。 |
| SPA Routing | 已在 `vercel.json` 加入 rewrite 到 `/index.html`，支援前端路由刷新。 |

如果未來要新增 Google Analytics、Umami 或其他統計工具，建議使用 Vercel 的 Environment Variables 配置自己的公開端追蹤 ID，而不要使用 Manus 內部變量。
