# Lin Plumbing & Gas 网站完整备份

**备份日期**: 2026 年 6 月 2 日  
**备份类型**: 完整网站备份（包括源代码、内容、SEO、图片）  
**网站地址**: https://linplumbinggas.com  
**GitHub 备份**: https://github.com/Franky-lin/linplumbinggas-redesign  

---

## 📋 备份内容清单

### ✅ 已包含的内容

| 类别 | 内容 | 状态 |
|------|------|------|
| **源代码** | 所有 React/TypeScript 源代码 | ✅ |
| **页面** | 13 个页面（英文 1 + 中文 12） | ✅ |
| **组件** | 50+ UI 组件和自定义组件 | ✅ |
| **样式** | Tailwind CSS 全局样式 | ✅ |
| **SEO** | Meta 标签、Schema.org、Sitemap | ✅ |
| **图片** | 20 张图片（全部本地保存） | ✅ |
| **Logo** | 公司 Logo（PNG） | ✅ |
| **品牌资产** | 品牌面板和地图图片 | ✅ |
| **配置文件** | package.json、vite.config.ts 等 | ✅ |
| **文案** | 所有英文和中文文案 | ✅ |
| **业务信息** | 电话、邮箱、执照、ABN | ✅ |

### ⚠️ 需要配置的功能

| 功能 | 当前状态 | 说明 |
|------|----------|------|
| **表单处理** | 已记录方案 | 使用 Formspree（需要配置） |
| **图片 URL** | 已本地保存 | 源代码中仍使用 Manus 路径 |
| **部署配置** | 未配置 | 可选择 Netlify/Vercel/GitHub Pages |

---

## 📁 目录结构

```
linplumbinggas_backup/
├── source-code/                    # 完整源代码
│   ├── client/
│   │   ├── src/
│   │   │   ├── pages/             # 13 个页面
│   │   │   ├── components/        # 50+ 组件
│   │   │   ├── lib/               # 工具和资源
│   │   │   ├── contexts/          # React 上下文
│   │   │   ├── hooks/             # 自定义 hooks
│   │   │   ├── index.css          # 全局样式
│   │   │   └── main.tsx           # 入口
│   │   ├── public/                # 静态文件
│   │   └── index.html             # HTML 模板
│   ├── server/                    # 后端代码（Manus 特定）
│   ├── shared/                    # 共享类型
│   ├── package.json               # 依赖配置
│   ├── vite.config.ts             # 构建配置
│   ├── tsconfig.json              # TypeScript 配置
│   └── components.json            # shadcn/ui 配置
├── assets/                        # 所有媒体资源
│   ├── images/                    # 20 张图片（全部本地）
│   │   ├── *.webp                # 17 张 WebP 格式
│   │   └── *.png                 # 3 张 PNG 格式
│   ├── logos/                     # Logo 文件
│   ├── icons/                     # 图标文件
│   └── backgrounds/               # 背景图
├── docs/                          # 文档
│   ├── SEO_INFO.md               # SEO 信息
│   ├── CONTENT_STRUCTURE.md      # 内容结构
│   ├── FORM_HANDLING.md          # 表单处理方案
│   └── URL_STRUCTURE.md          # URL 路径结构
├── BACKUP_README.md              # 本文档
└── BACKUP_MANIFEST.json          # 备份清单

```

---

## 🖼️ 图片资源清单

### 已保存的图片（20 张）

**服务图片**（WebP 格式）:
- `cctv_drain_inspection_32f6ee3d_1899af86_ca84441c.webp` (91K) - CCTV 排水检查
- `commercial_plant_pipework_07334ac4_a924ff2f_5ddef7e4.webp` (95K) - 商业管道
- `complex_pipework_af4ab774_da370b75_22387841.webp` (61K) - 复杂管道
- `excavation_new_build_64513b2c_65319aab_1a4cd8a7.webp` (159K) - 挖掘新建
- `finished_bathroom_12496624_e550870c_44e95efb.webp` (20K) - 完成的浴室
- `gas_meter_test_0bb96844_daac010b_5bd9edeb.webp` (82K) - 煤气表测试
- `gas_pipe_wall_3421d980_79fb7977_4df06ad8.webp` (112K) - 煤气管道墙
- `gas_tools_site_e9f512b4_2283c5f2_b8a8eeb9.webp` (138K) - 煤气工具现场
- `heritage_pipe_repair_b52cbe34_df665abe_04fcffea.webp` (213K) - 遗产管道维修
- `hero_vehicle_tools_optimized_5bfb7a35.webp` (199K) - 英雄车辆和工具
- `hot_water_plant_room_a78a6433_64355e5e_23a7eeed.webp` (80K) - 热水厂房
- `residential-rinnai-hot-water-install_e25c0ada_ea3c71ee_e25e28f0.webp` (31K) - 热水器安装
- `roof_copper_pipework_d1e2b5b9_68174d38_6a6f98ff.webp` (54K) - 屋顶铜管
- `stormwater-drainage-real-site_7dc6c845_7627dd21_a74446ae.webp` (115K) - 雨水排水
- `team_vehicle_trust_4d608dd1_b02f9323_32755091.webp` (211K) - 团队车辆
- `under_slab_pipework_fbb0f781_9f9241b8_f9e57d73.webp` (148K) - 地板下管道

**Logo 和品牌资产**（PNG 格式）:
- `logo_white_transparent_c489426c_ede5fd7f.png` (22K) - 白色透明 Logo
- `industrial_blueprint_hero_48a4766a.png` (5.5M) - 工业蓝图英雄
- `service_network_panel_5402b57a.png` (6.0M) - 服务网络面板
- `local_seo_suburb_map_8a0cc1c0.png` (351K) - 本地 SEO 郊区地图

**总大小**: 12.5 MB

---

## 📄 页面和内容

### 英文页面

1. **Home.tsx** - 英文首页
   - 英文标题、描述、服务介绍
   - 英文 SEO 元数据
   - 英文 CTA 按钮

### 中文页面

1. **ZhHome.tsx** - 中文首页
   - 中文标题、描述、服务介绍
   - 中文 SEO 元数据

2. **服务页面** (ServicePage.tsx):
   - BlockedDrains.tsx - 通渠服务
   - Gas.tsx - 煤气服务
   - HotWater.tsx - 热水器维修
   - LeakRepair.tsx - 漏水维修

3. **地区页面** (AreaPage.tsx):
   - Eastwood.tsx
   - Chatswood.tsx
   - Hurstville.tsx
   - Burwood.tsx
   - EppingRyde.tsx

---

## 🔍 SEO 信息

### Meta 标签

所有页面包含：
- `<title>` - 页面标题
- `<meta name="description">` - 页面描述
- `<meta name="keywords">` - 关键词
- `<meta property="og:*">` - Open Graph 标签
- `<meta name="twitter:*">` - Twitter 卡片

### 结构化数据

- Schema.org JSON-LD 格式
- 业务类型：Plumber（水管工）
- 服务区域：Sydney-wide
- 联系方式：电话、邮箱

### Sitemap

- `robots.txt` - 搜索引擎爬虫指令
- `sitemap.xml` - 网站地图
- 所有页面已包含

---

## 🔗 URL 路径结构

### 英文页面

```
/                  # 英文首页
```

### 中文页面

```
/zh                # 中文首页
/zh/blocked-drains # 通渠
/zh/gas            # 煤气
/zh/hot-water      # 热水器
/zh/leak-repair    # 漏水维修
/zh/eastwood       # Eastwood 地区
/zh/chatswood      # Chatswood 地区
/zh/hurstville     # Hurstville 地区
/zh/burwood        # Burwood 地区
/zh/epping-ryde    # Epping/Ryde 地区
```

---

## 📝 业务信息

| 信息 | 值 |
|------|-----|
| **公司名** | Lin Plumbing & Gas |
| **法律名** | Lin Plumbing & Gas Pty Ltd |
| **电话** | 0430 731 989 |
| **邮箱** | FRANKY@LINPLUMBINGGAS.COM |
| **执照** | LIC NO: 459684C |
| **ABN** | ABN: 92 670 077 102 |
| **服务范围** | Sydney-wide |
| **网站** | https://linplumbinggas.com |

---

## 🛠️ 表单功能

### 当前状态

表单处理方案已记录，但**未在此备份中配置**。

### 推荐方案：Formspree

**优点**:
- 免费（无限表单提交）
- 无需后端
- 自动发送邮件
- 简单集成

**配置步骤**:
1. 访问 https://formspree.io
2. 创建免费账户
3. 创建新表单
4. 获取 Form ID
5. 在源代码中配置

详见 `docs/FORM_HANDLING.md`

---

## 📊 源代码统计

| 指标 | 数值 |
|------|------|
| **页面** | 13 |
| **组件** | 50+ |
| **TypeScript 文件** | 70+ |
| **总代码行数** | ~5000+ |
| **依赖包数** | 40+ |
| **CSS 文件** | 1（全局） |

---

## 🔄 Manus 依赖

### 源代码中的 Manus 路径

所有图片目前使用 Manus 内部路径：

```typescript
// client/src/lib/linAssets.ts
export const REAL_PHOTOS = {
  cctvDrainInspection: "/manus-storage/cctv_drain_inspection_32f6ee3d_1899af86_ca84441c.webp",
  // ... 其他图片使用 /manus-storage/ 路径
};
```

### 本地图片已保存

所有图片已下载到本地：

```
assets/images/
├── cctv_drain_inspection_32f6ee3d_1899af86_ca84441c.webp
├── commercial_plant_pipework_07334ac4_a924ff2f_5ddef7e4.webp
└── ... 其他 18 张图片
```

### 如何更新

要使用本地图片，需要：

1. 更新 `client/src/lib/linAssets.ts` 中的路径
2. 将 `/manus-storage/` 改为相对路径或 CDN URL
3. 重新构建项目

---

## 📦 如何使用此备份

### 1. 克隆备份

```bash
git clone https://github.com/Franky-lin/linplumbinggas-redesign.git
cd linplumbinggas-redesign
```

### 2. 查看源代码

```bash
cd source-code
ls -la client/src/pages/   # 查看所有页面
ls -la assets/images/      # 查看所有图片
```

### 3. 查看文档

```bash
cat docs/SEO_INFO.md              # SEO 信息
cat docs/CONTENT_STRUCTURE.md     # 内容结构
cat docs/FORM_HANDLING.md         # 表单处理
cat docs/URL_STRUCTURE.md         # URL 结构
```

### 4. 本地运行（如需）

```bash
cd source-code
pnpm install
pnpm dev
```

---

## 🚀 后续步骤（可选）

如果要将此备份转换为独立部署：

1. **更新图片 URL**
   - 选择图片托管服务（Cloudinary、Imgur 等）
   - 上传本地图片
   - 更新源代码中的 URL

2. **配置表单**
   - 创建 Formspree 账户
   - 配置表单处理

3. **部署**
   - 选择部署平台（Netlify、Vercel 等）
   - 连接 GitHub
   - 自动部署

详见源代码中的 README.md（如有）

---

## ✅ 备份验证清单

- [x] 所有源代码已保存
- [x] 所有页面已保存
- [x] 所有组件已保存
- [x] 所有样式已保存
- [x] 所有 SEO 信息已保存
- [x] 所有 20 张图片已下载到本地
- [x] Logo 已保存
- [x] 品牌资产已保存
- [x] robots.txt 已保存
- [x] sitemap.xml 已保存
- [x] 所有配置文件已保存
- [x] 业务信息已记录
- [x] 表单方案已记录
- [x] URL 结构已记录
- [x] 文档已创建

---

## 📞 备份信息

| 项目 | 值 |
|------|-----|
| **备份日期** | 2026-06-02 |
| **备份类型** | 完整备份 |
| **总大小** | ~15 MB |
| **文件数** | 150+ |
| **图片数** | 20 |
| **GitHub 仓库** | https://github.com/Franky-lin/linplumbinggas-redesign |
| **备份状态** | ✅ 完成 |

---

## 🔐 安全性

- ✅ 所有源代码已保存
- ✅ 所有内容已保存
- ✅ 所有媒体已保存
- ✅ 无敏感信息泄露
- ✅ 可随时恢复

---

## 📝 注意事项

1. **Manus 依赖**：源代码中仍包含 Manus 特定的配置，但所有内容都已备份

2. **图片格式**：
   - WebP 格式用于服务图片（更小的文件大小）
   - PNG 格式用于 Logo 和品牌资产

3. **表单处理**：
   - 当前未配置表单处理
   - 建议使用 Formspree（免费、无需后端）

4. **部署**：
   - 此备份是静态网站
   - 可部署到任何静态托管平台

---

## 🎯 备份目的

此备份用于：
- ✅ 保存网站完整内容
- ✅ 防止数据丢失
- ✅ 便于版本控制
- ✅ 便于迁移和恢复
- ✅ 便于团队协作

---

**备份完成时间**: 2026 年 6 月 2 日  
**备份版本**: 1.0  
**状态**: ✅ 完成
