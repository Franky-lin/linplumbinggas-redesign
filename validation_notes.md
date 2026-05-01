# Validation Notes

Initial browser preview loaded successfully at the project preview URL. The page title, bilingual content, CTAs, contact details, service sections, gallery labels, and form fields are present in extracted page text. Primary phone links and email links are present as interactive anchors.

Visual issue observed in the first viewport: the hero background is a very bright real photo with a large Lin Plumbing & Gas logo area, so the intended dark overlay and hero copy do not dominate the first screen strongly enough. To preserve the real-photo-only constraint while improving first-screen conversion, the hero section should use a stronger deep navy panel or a split layout so the headline and emergency CTA remain immediately visible even when the real photo is bright.

No AI-generated, stock, or Unsplash images are used. All image URLs come from uploaded `/manus-storage/` paths mapped in `client/src/lib/linAssets.ts`.

## Follow-up Browser Validation

After restoring the Tailwind CSS import, the preview renders correctly: the sticky top emergency bar is safety yellow, the header is deep navy, the hero headline and CTAs are prominent over a real photo with a dark overlay, and the service/contact sections render with the intended layout. The page includes visible call links, quote CTA anchors, bilingual service content, license/ABN, Sydney-wide service area wording, and the contact form fields. The lower page preview confirms the service area and contact blocks are present and visually aligned with the chosen trade-modern design direction.

Build validation also succeeded with `pnpm run build`. The only build output note is a standard chunk-size warning from the bundled frontend, not a compilation failure.

## 本轮反馈修改验证

已根据用户反馈完成首页优化：页头品牌区改用裁切后的公司 Logo 图片，去除了原始图片中的大面积白边，Logo 与公司名称在导航栏中比之前更清晰醒目。首页新增语言切换按钮，默认英文，点击“中文”后切换为中文内容，再点击“English”可切回英文；导航、首屏、服务、案例、联系表单和移动端底部电话按钮均会随语言切换。

页面可见文案已经移除“真实照片”“No stock or AI images”等显性说明，保留照片本身作为施工可信度表达。构建验证已通过：`pnpm run build` 成功完成。浏览器预览中确认英文和中文首屏均正常显示；中文首屏标题已缩短为“悉尼水管与燃气服务”，避免之前长句在大标题中产生过度换行。
