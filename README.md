# Artisan Orbit / Laravel 小宇宙

独立的 Laravel 学习站，默认英文，中文位于 `/zh/`。新版在 `site/`，使用 Astro 生成静态页面。仓库根目录保留了原站的 Nuxt 应用与目录数据，旧站开发仍可使用 `yarn install` 和 `yarn dev`。

课程和闯关主要面向刚接触 Laravel 的新手，以及已经会写页面和表单、想练习 API 和测试的开发者。部署、队列等专题可按需选学。

## 本地开发

使用 Node.js 22.23.4 或更新版本。

```bash
cd site
npm ci
npm run dev
npm run check
npm run build
```

课程阶段和大纲位于 `site/src/data/courses.ts`。英文课时位于 `site/src/guides/en/`，中文课时位于 `site/src/guides/`。译文使用相同的文件名、`course` 和 `order`。精选资料和工具位于 `site/src/data/catalog.ts`，人物推荐位于 `site/src/data/people.ts`。

设计变量位于 `site/src/styles/base.css`。白底、细分割线、Instrument Sans 和 IBM Plex Mono 参考官网，品牌色和代码工作区使用本站的设计。 [Laravel 官网](https://laravel.com/)

课程闯关位于 `/challenges/`。双语题库在 `site/src/data/quizzes.ts`，每门课四题，答对三题过关。成绩按题目和选项的原始位置核算，修改已发布题目的顺序或正确选项时要更新答卷版本。完整站点启动后，在 `site/` 运行 `npm run test:quizzes` 验证答题、重试和成绩保留。

## Cloudflare

在个人 Cloudflare 账户中使用 `npm run deploy` 发布站点和账号 API。Wrangler 有多个可用账户时，通过 `CLOUDFLARE_ACCOUNT_ID` 选择部署账户。默认构建使用 `workers.dev` 预览、页面标记 `noindex`，广告关闭。

使用 `npm run deploy:production` 发布 `laravel.xyz`。使用 `npm run deploy:www` 发布 `www.laravel.xyz` 到主域名的永久重定向。两个 Worker 路由沿用已有的代理 DNS 记录。

## 账号与赞助

公开页面由静态资源提供。可选账号使用通行密钥，Worker 处理登录，D1 保存账号、会话和学习进度。正式站和预览站各有独立的 D1 数据库和通行密钥域。首次注册会导入本机游客记录，退出登录后可继续使用原来的游客记录。赞助链接直达 [overtrue 的 GitHub Sponsors](https://github.com/sponsors/overtrue)。

在 `site/` 运行 `npm run dev:accounts`，用 `http://localhost:4379` 测试完整站点。另开终端运行 `npm run test:accounts`，测试会用本机 Chrome 的虚拟认证器验证跨设备同步，并删除测试账号。使用 Chromium 时可设置 `ORBIT_CHROME_CHANNEL=chromium`。部署脚本会先应用所属环境的 D1 迁移。

## AdSense

正式站提供 `ads.txt` 和首页验证标签，用于在 AdSense 添加和审核站点。广告位在原创教程的正文和参考文档之后。站点通过审核并配置适用地区的认证 CMP 后，用 `ADSENSE_ENABLED=true` 和 `ADSENSE_GUIDE_SLOT`（响应式展示单元 ID）重新部署。手动广告的展示位置由教程模板控制，自动广告在 AdSense 后台单独管理。 [站点验证](https://support.google.com/adsense/answer/7584263) · [展示广告单元](https://support.google.com/adsense/answer/9274025) · [认证 CMP](https://support.google.com/adsense/answer/13554116)
