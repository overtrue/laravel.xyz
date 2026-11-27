import { docs } from './catalog';
import { localize, type Locale } from '../lib/locale';

export function getEcosystem(locale: Locale) {
  const { t } = localize(locale);
  return [
    {
      id: 'setup', title: t('Setup', '环境搭建'),
      summary: t('Pick a local PHP environment and the services your app needs.', '选择本地 PHP 环境和项目依赖的服务。'),
      resources: [
        { id: 'herd', name: 'Herd', url: 'https://herd.laravel.com/docs', description: t('Run PHP and serve local sites on macOS or Windows. A good fit for a workstation where you want a native setup.', '在 macOS 或 Windows 上运行 PHP 和本地站点，适合想使用原生开发环境时。') },
        { id: 'sail', name: 'Sail', url: `${docs}/sail`, description: t('Run the app and its services in Docker. Consider it when teammates need the same local PHP, database, and Redis versions.', '在 Docker 中运行应用及其依赖。团队需要统一 PHP、数据库和 Redis 版本时优先考虑。') },
        { id: 'starter-kits', name: t('Starter kits', '项目起步模板'), url: `${docs}/starter-kits`, description: t('Start with authentication and a sample UI. Pick the frontend you want the team to maintain before creating the app.', '从已带认证和示例界面的项目出发。创建应用前，先挑选团队愿意长期维护的前端方案。') },
      ],
    },
    {
      id: 'frontend', title: t('Frontend', '前端界面'),
      summary: t('Choose between server-rendered components, JavaScript pages, and an admin toolkit.', '在服务端组件、JavaScript 页面和后台工具包之间做选择。'),
      resources: [
        { id: 'livewire', name: 'Livewire', url: 'https://livewire.laravel.com/docs', description: t('Build interactive Blade components in PHP. Start here if most of your UI is forms, filtering, and server-side state.', '用 PHP 和 Blade 做交互组件。如果界面主要是表单、筛选和服务端状态，可以从这里开始。') },
        { id: 'inertia', name: 'Inertia', url: 'https://inertiajs.com/', description: t('Keep routing and controllers in Laravel, with React, Vue, or Svelte pages. Choose it when the team wants a JavaScript UI and can ship the app together.', '路由和控制器留在 Laravel，页面用 React、Vue 或 Svelte。适合需要 JS 界面、前后端一起交付的团队。') },
        { id: 'filament', name: 'Filament', url: 'https://filamentphp.com/docs', description: t('Assemble admin screens from forms, tables, and actions. Map your resources and authorization policies before designing custom dashboards.', '用表单、表格和操作组件搭建后台。设计自定义仪表盘前，先定义资源及对应的授权 Policy。') },
      ],
    },
    {
      id: 'data', title: t('APIs & search', '接口与搜索'),
      summary: t('Give the right clients access, and pick a search engine only when you need one.', '给合适的客户端开放访问，按搜索需求选择索引方案。'),
      resources: [
        { id: 'sanctum', name: 'Sanctum', url: `${docs}/sanctum`, description: t('Choose session cookies for your own SPA or simple tokens for clients. Keep record-level permissions in policies.', '为自家 SPA 使用会话 Cookie，或为客户端签发简单令牌。记录级的权限仍由 Policy 管理。') },
        { id: 'passport', name: 'Passport', url: `${docs}/passport`, description: t('Run an OAuth 2.0 authorization server when independent third-party clients need delegated access. Budget for client and key management.', '独立第三方客户端需要受委托的访问权限时，用它运行 OAuth 2.0 授权服务器，并规划客户端和密钥的管理。') },
        { id: 'scout', name: 'Scout', url: `${docs}/scout`, description: t('Make Eloquent models searchable. Try the database engine first, then compare an external engine if you need features such as typo tolerance or faceting.', '让 Eloquent 模型可搜索。先尝试数据库引擎，需要容错匹配或分面筛选时再比较外部搜索引擎。') },
      ],
    },
    {
      id: 'async', title: t('Async work', '异步任务'),
      summary: t('Move work off the request path, supervise it, and deliver updates to the browser.', '把耗时工作移出请求，在后台监控执行，并向浏览器推送更新。'),
      resources: [
        { id: 'queues', name: t('Queues', '队列'), url: `${docs}/queues`, description: t('Try the database driver for a first worker. Decide which jobs can run twice safely before increasing concurrency or retry counts.', '第一个 Worker 可以从数据库驱动起步。提高并发或重试次数前，先确认哪些任务可安全重复执行。') },
        { id: 'horizon', name: 'Horizon', url: `${docs}/horizon`, description: t('Supervise Redis queue workers and inspect throughput, wait times, and failed jobs. Check driver support before choosing it.', '管理 Redis 队列 Worker，查看吞吐、等待时间和失败任务。选用前确认队列驱动是否适用。') },
        { id: 'reverb', name: 'Reverb', url: `${docs}/reverb`, description: t('Run a WebSocket server for Laravel broadcasting. Plan the connection lifecycle and worker monitoring alongside the app.', '为 Laravel 广播运行 WebSocket 服务。和应用一起规划连接的生命周期与进程监控。') },
      ],
    },
    {
      id: 'quality', title: t('Testing', '测试与排查'),
      summary: t('Catch regressions in CI and learn what happened during a request.', '在 CI 找出回归，在本地看清每个请求做了什么。'),
      resources: [
        { id: 'pest', name: 'Pest', url: 'https://pestphp.com/docs/installation', description: t('Write tests on top of PHPUnit with concise assertions and datasets. Start with a feature test for a real user action.', '基于 PHPUnit，使用简洁的断言和数据集。先为一个真实用户操作编写功能测试。') },
        { id: 'larastan', name: 'Larastan', url: 'https://github.com/larastan/larastan', description: t('Teach PHPStan about Laravel conventions. Fix one class of errors at a time and run the same analysis in CI.', '让 PHPStan 理解 Laravel 的约定。可以从一类错误开始修复，并在 CI 中运行同样的分析。') },
        { id: 'telescope', name: 'Telescope', url: `${docs}/telescope`, description: t('Inspect individual requests, queries, jobs, and exceptions during debugging. Set access and retention explicitly before using it outside local development.', '调试时逐条查看请求、查询、任务与异常。在本地开发以外的环境使用时，明确访问权限和数据保留时间。') },
      ],
    },
    {
      id: 'production', title: t('Production', '生产运维'),
      summary: t('Ship a release you can check and find the regressions that affect real traffic.', '发布一版可以验收的应用，并找到影响真实流量的问题。'),
      resources: [
        { id: 'deployment', name: t('Deployment', '部署指南'), url: `${docs}/deployment`, description: t('Start with the framework’s server requirements, public web root, worker restarts, and health route. Verify each one on a staging release.', '从框架要求、站点根目录、后台进程重启和健康检查入手，在预发布环境逐项验证。') },
        { id: 'pulse', name: 'Pulse', url: `${docs}/pulse`, description: t('See slow requests, slow queries, and queue activity on an aggregate dashboard. Use sustained trends to decide what to investigate first.', '在聚合仪表盘上查看慢请求、慢查询和队列活动，再根据持续趋势确定优先调查的方向。') },
        { id: 'nightwatch', name: 'Nightwatch', url: 'https://laravel.com/nightwatch', description: t('Consider managed monitoring when you need alerts and detailed production traces. Review what telemetry leaves your infrastructure.', '需要告警和生产请求的详细追踪时，可以考虑托管监控。先确认哪些遥测数据会离开自己的基础设施。') },
      ],
    },
  ] as const;
}

const projectSources = {
  bookstack: ['BookStackApp/BookStack', '34edd552294e4ba0603e55542ae5fafef28b96e7', 'LICENSE', 'MIT', 13],
  bagisto: ['bagisto/bagisto', 'ac4bd606e7a57061c8abe3c204addfdad8a5f526', 'LICENSE', 'MIT', 13],
  firefly: ['firefly-iii/firefly-iii', 'e1a90bf8ee7499524039b331179e40431b3c84af', 'LICENSE', 'AGPL-3.0', 13],
  monica: ['monicahq/monica', 'dab74273acc5c9e0ba713a9f7c2c71c24ab16993', 'LICENSE.md', 'AGPL-3.0', 12],
  koel: ['koel/koel', '636eca8f01ec0cfc1aa0ca3652b018630cb280e4', 'LICENSE.md', 'MIT', 13],
  pingcrm: ['inertiajs/pingcrm', '59c77d038f47758417119c28d840025caa9aac6d', 'LICENSE.md', 'MIT', 11],
} as const;

export function getOpenSourceProjects(locale: Locale) {
  const { t } = localize(locale);
  const projects = [
    { id: 'bookstack', name: 'BookStack', topic: t('Authorization', '授权'),
      description: t('A self-hosted knowledge base. Follow how book and chapter permissions inform the decision to show a page.', '一个自托管知识库。顺着书籍和章节的权限，读懂代码如何判断用户能否查看页面。'),
      entry: 'EntityPermissionEvaluator.php', path: 'app/Permissions/EntityPermissionEvaluator.php' },
    { id: 'bagisto', name: 'Bagisto', topic: t('Application modules', '应用模块'),
      description: t('An ecommerce platform organized into Composer packages. Start with the cart and trace how the checkout module is registered.', '以 Composer 包组织的电商平台。可以从购物车读起，顺着 Checkout 模块看它如何注册。'),
      entry: 'Checkout/Cart.php', path: 'packages/Webkul/Checkout/src/Cart.php' },
    { id: 'firefly', name: 'Firefly III', topic: t('JSON API', 'JSON API'),
      description: t('A personal finance manager. Read the transaction endpoint to see validation, persistence, and response transformation in one request.', '一个个人财务管理应用。读一次创建交易的接口，串起验证、持久化和响应转换。'),
      entry: 'Transaction/StoreController.php', path: 'app/Api/V1/Controllers/Models/Transaction/StoreController.php' },
    { id: 'monica', name: 'Monica', topic: t('Domain services', '领域服务'),
      description: t('A personal CRM. Read how a service checks permissions and links two contacts within a vault.', '一个个人 CRM。看看领域服务如何检查权限，并关联同一资料库中的两位联系人。'),
      entry: 'SetRelationship.php', path: 'app/Domains/Contact/ManageRelationships/Services/SetRelationship.php' },
    { id: 'koel', name: 'Koel', topic: t('Media streaming', '媒体流'),
      description: t('A personal music streaming app. Follow the Streamer directory to see how playback is separated from library management.', '一个个人音乐流媒体应用。从 Streamer 目录开始读，看看播放逻辑怎样和音乐库管理分离。'),
      entry: 'app/Services/Streamer/', path: 'app/Services/Streamer' },
    { id: 'pingcrm', name: 'Ping CRM', topic: t('Inertia demo', 'Inertia 示例'),
      description: t('A compact demo from Inertia. Read the contacts controller to see how a Laravel query becomes props for a JavaScript page.', 'Inertia 团队的小型示例。阅读联系人控制器，看看 Laravel 查询怎样变成 JavaScript 页面的 props。'),
      entry: 'ContactsController.php', path: 'app/Http/Controllers/ContactsController.php' },
  ] as const;

  return projects.map(({ id, path, ...project }) => {
    const [repository, revision, licenseFile, license, framework] = projectSources[id];
    const repositoryUrl = `https://github.com/${repository}`;
    return {
      id, ...project, repositoryUrl, license, framework,
      licenseUrl: `${repositoryUrl}/blob/${revision}/${licenseFile}`,
      sourceUrl: `${repositoryUrl}/${path.endsWith('.php') ? 'blob' : 'tree'}/${revision}/${path}`,
    };
  });
}
