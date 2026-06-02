# 表单处理说明

本文档记录了网站表单功能的当前状态和推荐的处理方案。

## 当前状态

### ⚠️ 未配置

网站中的联系表单**当前未配置**。源代码中存在表单组件，但没有实际的提交处理。

### 表单位置

- **英文页面**: Home.tsx 中的 Contact Form
- **中文页面**: ZhHome.tsx 中的 Contact Form

### 表单字段

```
- 姓名 (Name)
- 邮箱 (Email)
- 电话 (Phone)
- 服务类型 (Service Type)
- 消息 (Message)
```

## 推荐方案：Formspree

### 为什么选择 Formspree？

| 特性 | Formspree | 其他方案 |
|------|-----------|----------|
| **成本** | 免费 | 可能收费 |
| **后端** | 无需 | 需要 |
| **配置** | 简单 | 复杂 |
| **邮件** | 自动发送 | 需要配置 |
| **存储** | 仪表板 | 需要数据库 |

### 优点

✅ 完全免费（无限表单提交）  
✅ 无需后端服务器  
✅ 自动发送邮件到你的邮箱  
✅ 简单的 HTML 集成  
✅ 提交数据保存在仪表板  
✅ 支持文件上传  
✅ 支持自定义重定向  

### 缺点

❌ 需要第三方服务  
❌ 依赖 Formspree 的可用性  

## 配置步骤

### 1. 创建 Formspree 账户

1. 访问 https://formspree.io
2. 点击 "Sign Up"
3. 使用邮箱注册
4. 验证邮箱

### 2. 创建新表单

1. 登录 Formspree 仪表板
2. 点击 "New Form"
3. 输入表单名称：`Lin Plumbing Contact Form`
4. 点击 "Create"

### 3. 获取 Form ID

创建表单后，你会看到 Form ID，格式如：

```
f_xxxxxxxxxx
```

例如：`f_abcd1234efgh5678`

### 4. 配置环境变量

在项目根目录创建 `.env.local` 文件：

```env
VITE_FORMSPREE_FORM_ID=f_xxxxxxxxxx
```

### 5. 更新源代码

在 `client/src/pages/Home.tsx` 中：

```tsx
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;
    
    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // 表单提交成功
        alert('感谢您的留言！我们会尽快回复。');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        alert('提交失败，请重试。');
      }
    } catch (error) {
      console.error('表单提交错误:', error);
      alert('提交出错，请重试。');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 表单字段 */}
    </form>
  );
}
```

### 6. 测试表单

1. 本地运行：`pnpm dev`
2. 填写表单并提交
3. 检查邮箱是否收到提交通知

## 其他方案

### EmailJS

**优点**:
- 客户端直接发送邮件
- 无需后端
- 支持模板

**缺点**:
- 需要 API 密钥
- 有免费配额限制

**配置**:
```bash
npm install @emailjs/browser
```

### 自定义后端

**优点**:
- 完全控制
- 可存储数据
- 可自定义逻辑

**缺点**:
- 需要后端服务器
- 需要数据库
- 维护成本高

### Netlify Forms

**优点**:
- 如果部署到 Netlify 可直接使用
- 无需配置

**缺点**:
- 仅限 Netlify
- 需要特定的 HTML 属性

## 表单提交流程

### Formspree 流程

```
用户填写表单
    ↓
点击提交按钮
    ↓
JavaScript 发送 POST 请求到 Formspree
    ↓
Formspree 接收数据
    ↓
Formspree 发送邮件到你的邮箱
    ↓
显示成功消息给用户
```

## 当前备份中的状态

### ✅ 已包含

- 表单 HTML 结构
- 表单样式（Tailwind CSS）
- 表单验证逻辑（基础）

### ⚠️ 需要配置

- Formspree Form ID
- 表单提交处理代码
- 环境变量

### 📝 记录的信息

- 推荐方案：Formspree
- 配置步骤
- 代码示例
- 测试方法

## 如何从备份恢复

如果需要重新配置表单：

1. 按照上述步骤创建 Formspree 账户
2. 获取 Form ID
3. 在 `.env.local` 中配置
4. 更新源代码中的表单处理
5. 测试表单

## 常见问题

### Q: 表单提交后数据去哪了？

A: 数据会发送到 Formspree，你会收到邮件通知。数据也保存在 Formspree 仪表板中。

### Q: 如何查看所有提交？

A: 登录 Formspree 仪表板，点击表单名称查看所有提交记录。

### Q: 可以自定义邮件模板吗？

A: 可以，Formspree 支持自定义邮件模板和重定向 URL。

### Q: 如何处理文件上传？

A: Formspree 支持文件上传，需要在表单中添加 `<input type="file">` 字段。

### Q: 有提交配额限制吗？

A: 免费计划无限制，但有其他限制（如邮件频率）。

## 备份信息

- **备份日期**: 2026-06-02
- **表单状态**: 未配置（方案已记录）
- **推荐方案**: Formspree
- **配置难度**: ⭐ 简单
