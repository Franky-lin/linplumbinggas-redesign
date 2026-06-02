# SEO 信息备份

本文档记录了 LINPLUMBINGGAS.COM 网站的所有 SEO 配置。

## Meta 标签

### 全局 Meta 标签

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="悉尼持牌水管工与煤气工，提供通渠、热水器维修、漏水维修、雨水排水系统及24小时紧急服务。中文英文均可沟通。">
<meta name="keywords" content="悉尼水管工, 悉尼水工, 悉尼煤气工, 悉尼热水器维修, 悉尼通渠">
<meta name="author" content="Lin Plumbing & Gas">
<meta name="robots" content="index, follow">
```

### Open Graph 标签

```html
<meta property="og:title" content="Lin Plumbing & Gas | 悉尼水管工">
<meta property="og:description" content="悉尼持牌水管工与煤气工，提供通渠、热水器维修、漏水维修、雨水排水系统及24小时紧急服务。">
<meta property="og:type" content="website">
<meta property="og:url" content="https://linplumbinggas.com">
<meta property="og:image" content="https://linplumbinggas.com/manus-storage/logo_white_transparent_c489426c_ede5fd7f.png">
```

### Twitter 卡片

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Lin Plumbing & Gas | 悉尼水管工">
<meta name="twitter:description" content="悉尼持牌水管工与煤气工，24小时紧急服务">
<meta name="twitter:image" content="https://linplumbinggas.com/manus-storage/logo_white_transparent_c489426c_ede5fd7f.png">
```

## 结构化数据（Schema.org）

### 业务信息

```json
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Lin Plumbing & Gas Pty Ltd",
  "image": "https://linplumbinggas.com/manus-storage/logo_white_transparent_c489426c_ede5fd7f.png",
  "url": "https://linplumbinggas.com",
  "telephone": "+61430731989",
  "email": "franky@linplumbinggas.com",
  "description": "悉尼持牌水管工与煤气工，提供通渠、热水器维修、漏水维修、雨水排水系统及24小时紧急服务。中文英文均可沟通。",
  "areaServed": ["Eastwood", "Chatswood", "Hurstville", "Burwood", "Epping", "Ryde", "Parramatta", "Sydney"],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "NSW",
    "addressCountry": "AU"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$",
  "availableLanguage": ["zh", "en"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Plumbing & Gas Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "通渠 Blocked Drains"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "热水器维修 Hot Water Repairs"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "煤气安装 Gas Fitting"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "漏水维修 Leak Repairs"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "雨水排水系统 Stormwater Drainage"}}
    ]
  }
}
```

## 关键词

### 中文关键词

**主要关键词**:
- 悉尼水管工
- 悉尼水工
- 悉尼煤气工
- 悉尼热水器维修
- 悉尼通渠

**长尾关键词**:
- 悉尼 Eastwood 水管工
- 悉尼 Chatswood 水管工
- 悉尼 Hurstville 水管工
- 悉尼 Burwood 水管工
- 悉尼 Epping 水管工
- 悉尼 Ryde 水管工
- 悉尼 Parramatta 水管工

**服务关键词**:
- 通渠服务
- 热水器维修
- 煤气安装
- 漏水维修
- 雨水排水系统
- 24小时紧急服务

### 英文关键词

**主要关键词**:
- Sydney plumber
- Plumber Sydney
- Sydney gas fitter
- Hot water repair Sydney
- Blocked drains Sydney

**地区关键词**:
- Eastwood plumber
- Chatswood plumber
- Hurstville plumber
- Burwood plumber
- Epping plumber
- Ryde plumber
- Parramatta plumber

## 页面 SEO 配置

### 英文首页 (/)

```
Title: Lin Plumbing & Gas | Sydney Plumber & Licensed Gas Fitter
Description: Professional plumbing and gas fitting services in Sydney. 24/7 emergency service. Licensed and insured.
Keywords: Sydney plumber, gas fitter, blocked drains, hot water repair
```

### 中文首页 (/zh)

```
Title: 悉尼水管工 | 持牌水管工与煤气工 - Lin Plumbing & Gas
Description: 悉尼持牌水管工与煤气工，提供通渠、热水器维修、漏水维修、雨水排水系统及24小时紧急服务。中文英文均可沟通。
Keywords: 悉尼水管工, 悉尼水工, 悉尼煤气工, 悉尼热水器维修, 悉尼通渠
```

### 服务页面

**通渠 (/zh/blocked-drains)**:
```
Title: 通渠服务 | 悉尼专业通渠 - Lin Plumbing & Gas
Description: 悉尼专业通渠服务，快速解决各种堵塞问题。24小时应急服务。
Keywords: 悉尼通渠, 通渠服务, 堵塞维修
```

**热水器维修 (/zh/hot-water)**:
```
Title: 热水器维修 | 悉尼热水器安装维修 - Lin Plumbing & Gas
Description: 悉尼热水器维修和安装服务。Rinnai、Rheem 等品牌维修。24小时应急。
Keywords: 热水器维修, 热水器安装, 悉尼热水器
```

**煤气服务 (/zh/gas)**:
```
Title: 煤气工服务 | 悉尼持牌煤气工 - Lin Plumbing & Gas
Description: 悉尼持牌煤气工，提供煤气管道安装、维修和检查服务。
Keywords: 煤气工, 煤气安装, 煤气维修
```

**漏水维修 (/zh/leak-repair)**:
```
Title: 漏水维修 | 悉尼漏水检测维修 - Lin Plumbing & Gas
Description: 悉尼漏水检测和维修服务。快速定位漏水点，专业维修。
Keywords: 漏水维修, 漏水检测, 悉尼漏水
```

### 地区页面

**Eastwood (/zh/eastwood)**:
```
Title: Eastwood 水管工 | 悉尼 Eastwood 水管工服务 - Lin Plumbing & Gas
Description: Eastwood 地区专业水管工服务。24小时应急服务。
Keywords: Eastwood 水管工, Eastwood 通渠, Eastwood 热水器
```

（其他地区页面类似）

## Sitemap

### 文件位置
```
/sitemap.xml
```

### 包含的 URL

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://linplumbinggas.com/</loc>
    <lastmod>2026-06-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://linplumbinggas.com/zh</loc>
    <lastmod>2026-06-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- 所有服务页面 -->
  <url>
    <loc>https://linplumbinggas.com/zh/blocked-drains</loc>
    <priority>0.8</priority>
  </url>
  <!-- 所有地区页面 -->
  <url>
    <loc>https://linplumbinggas.com/zh/eastwood</loc>
    <priority>0.8</priority>
  </url>
  <!-- ... 其他页面 -->
</urlset>
```

## Robots.txt

### 文件位置
```
/robots.txt
```

### 内容

```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /.webdev

Sitemap: https://linplumbinggas.com/sitemap.xml
```

## Google Search Console

### 验证方法
- HTML 文件验证
- DNS 记录验证
- Google Analytics 验证

### 提交内容
- Sitemap: https://linplumbinggas.com/sitemap.xml
- 移动设备适配性
- 页面体验

## 本地 SEO

### Google Business Profile

- **业务名称**: Lin Plumbing & Gas Pty Ltd
- **类别**: Plumber
- **服务区域**: Sydney-wide
- **电话**: 0430 731 989
- **邮箱**: franky@linplumbinggas.com
- **执照**: LIC NO: 459684C
- **ABN**: ABN: 92 670 077 102

### 服务区域

- Eastwood
- Chatswood
- Hurstville
- Burwood
- Epping
- Ryde
- Parramatta
- 以及悉尼其他地区

## 页面性能指标

### Core Web Vitals 目标

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### 优化措施

- WebP 图片格式（减少 65% 文件大小）
- 代码分割和懒加载
- 关键 CSS 内联
- 资源预加载

## 国际化 (i18n)

### 支持的语言

- 英文 (en)
- 简体中文 (zh)

### Hreflang 标签

```html
<link rel="alternate" hreflang="en" href="https://linplumbinggas.com/">
<link rel="alternate" hreflang="zh" href="https://linplumbinggas.com/zh">
<link rel="alternate" hreflang="x-default" href="https://linplumbinggas.com/">
```

## 社交媒体

### Open Graph 配置

- og:title
- og:description
- og:image
- og:url
- og:type

### 推荐的社交媒体账号

- Facebook: [待配置]
- Instagram: [待配置]
- WeChat: [待配置]
- 小红书: [待配置]

## 备份信息

- **备份日期**: 2026-06-02
- **网站**: https://linplumbinggas.com
- **状态**: ✅ 完整备份
