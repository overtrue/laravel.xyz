import previousPackages from '../../../content/packages.json';
import previousPeople from '../../../content/stars.json';
import { localize, type Locale } from '../lib/locale';
import { profileFor } from './community';
import { featuredHandles } from './people';

export const docs = 'https://laravel.com/framework/docs/13.x';

export const sections = {
  resources: { en: ['Resources', 'Find documentation, courses, books, packages, and people who can help.'], zh: ['资源库', '查找文档、课程、电子书、扩展包和社区。'] },
  docs: { en: ['Documentation', 'Choose the docs for the Laravel version in your project.'], zh: ['文档导航', '按项目里的 Laravel 版本找文档。'] },
  reading: { en: ['The bookshelf', 'Pick a book for your next project, or browse courses from other Laravel developers.'], zh: ['社区书架', '为下一个项目挑一本书，也可以看看其他 Laravel 开发者的课程。'] },
  packages: { en: ['Package directory', 'Start with the problem you need to solve. Check PHP and Illuminate requirements on Packagist before installing.'], zh: ['扩展包目录', '从你要解决的问题出发。安装前到 Packagist 核对 PHP 和 Illuminate 的版本约束。'] },
  sites: { en: ['Community & news', 'Ask a question, follow releases, or report an issue you’ve narrowed down.'], zh: ['社区与资讯', '找同行交流、追版本动态，或反馈一个已经定位的问题。'] },
  stars: { en: ['People in Laravel', 'Meet maintainers, authors, and teachers. Each profile points to a project or resource worth starting with.'], zh: ['Laravel 人物', '认识框架维护者、作者和技术讲师。从每个人的代表作开始读，找到你想深入的方向。'] },
  jobs: { en: ['Job boards', 'Check location, time zone, and listing status on the employer’s original post.'], zh: ['招聘与求职', '从招聘方的原始发布页确认时区、地区限制和岗位状态。'] },
} as const;

export type Section = keyof typeof sections;

export const categories = {
  doc: { en: 'Docs', zh: '文档' },
  course: { en: 'Course', zh: '课程' },
  book: { en: 'Book', zh: '电子书' },
  package: { en: 'Package', zh: '扩展包' },
  community: { en: 'Community', zh: '社区' },
  person: { en: 'Developer', zh: '开发者' },
  job: { en: 'Jobs', zh: '招聘' },
} as const;

type Category = keyof typeof categories;

interface Resource {
  title: string;
  archived?: boolean;
  description: string;
  href: string;
  category: Category;
  detail?: string;
  keywords?: string;
}

type LocalResource = Resource & { zh: Partial<Omit<Resource, 'category'>> };

const reading: LocalResource[] = [
  { title: 'Laravel 13.x documentation', description: 'The main reference for new projects. Find installation requirements, framework behavior, and examples.', href: `${docs}/installation`, category: 'doc', detail: 'Official', keywords: 'PHP Composer install', zh: { title: 'Laravel 13.x 官方文档', description: '新项目的主要参考。查安装条件、框架行为和代码示例。', detail: '英文 · 官方', keywords: '安装 PHP Composer' } },
  { title: 'Laravel 13.x documentation in Chinese', description: 'LearnKu’s community translation. Check the matching English docs when exact version behavior matters.', href: 'https://learnku.com/docs/laravel/13.x', category: 'doc', detail: 'Chinese · Community translation', zh: { title: 'Laravel 13.x 中文文档', description: '用于快速理解概念和查阅中文术语，版本行为以对应英文文档为准。', detail: '中文 · 社区翻译' } },
  { title: 'Laravel 12.x documentation', description: 'Find matching APIs and configuration when maintaining a Laravel 12 application.', href: 'https://laravel.com/framework/docs/12.x', category: 'doc', detail: 'Official', zh: { title: 'Laravel 12.x 官方文档', description: '维护 Laravel 12 服务时，查对应版本的接口和配置。', detail: '英文 · 官方' } },
  { title: 'Framework support policy', description: 'Check supported PHP versions and when each release stops receiving bug fixes and security patches.', href: `${docs}/releases`, category: 'doc', detail: 'Official', keywords: 'upgrade PHP versions', zh: { title: '版本支持周期', description: '上线或升级前，核对 PHP 兼容范围、错误修复期限和安全支持日期。', detail: '英文 · 官方', keywords: '升级 版本 PHP' } },
  { title: 'Upgrade from Laravel 12 to 13', description: 'Review changes for the framework features your project uses before updating dependencies.', href: `${docs}/upgrade`, category: 'doc', detail: 'Official upgrade guide', zh: { title: '从 Laravel 12 升级到 13', description: '更新依赖前，按项目实际使用的功能逐项检查变更。', detail: '英文 · 升级指南' } },
  { title: 'Laravel starter kits', description: 'Compare the official frontend options and choose how to add common authentication flows to a new project.', href: `${docs}/starter-kits`, category: 'doc', detail: 'Official', keywords: 'authentication login react vue svelte livewire', zh: { title: 'Laravel Starter Kits', description: '比较官方提供的前端方案，了解新项目怎么接入登录和注册流程。', detail: '英文 · 官方', keywords: '登录 注册 认证 脚手架' } },
  { title: 'Developing a Laravel package', description: 'Learn how service providers, package discovery, configuration, and resources fit together before publishing a library.', href: `${docs}/packages`, category: 'doc', detail: 'Official', keywords: 'composer package discovery service provider', zh: { title: '开发 Laravel 扩展包', description: '准备发布扩展包时，查清服务提供者、自动发现、配置和资源的组织方式。', detail: '英文 · 官方', keywords: 'Composer 发布 服务提供者 自动发现' } },
  { title: 'PHP manual', description: 'Look up syntax, standard library functions, and behavior around dates, arrays, and strings.', href: 'https://www.php.net/manual/en/', category: 'doc', detail: 'Official', zh: { title: 'PHP 手册', description: '查语言语法、标准库和函数参数。处理日期、数组和字符串时尤其省时间。', href: 'https://www.php.net/manual/zh/', detail: '中文 · 官方' } },
  { title: 'Composer documentation', description: 'Understand version constraints, lock files, autoloading, and dependency conflicts.', href: 'https://getcomposer.org/doc/', category: 'doc', detail: 'Official', zh: { title: 'Composer 文档', description: '弄清版本约束、锁文件、自动加载和依赖冲突。', detail: '英文 · 官方' } },
  { title: 'Getting Started with Laravel', description: 'A short official video course that walks through a complete first web application.', href: 'https://laravel.com/learn', category: 'course', detail: 'Official video course', keywords: 'beginner installation', zh: { description: '短课，适合第一次跟着做完一个完整 Web 应用。', detail: '英文 · 官方视频', keywords: '安装 初学 入门' } },
  { title: 'Laravel From Scratch (2026)', description: 'A practical series covering routes, authentication, queues, tests, and deployment.', href: 'https://laracasts.com/series/laravel-from-scratch-2026/', category: 'course', detail: 'Laracasts', keywords: 'beginner videos', zh: { description: '用一套课把路由、认证、队列、测试和部署串起来。', detail: '英文 · Laracasts', keywords: '从零 视频 入门' } },
  { title: 'PHP Fundamentals', description: 'A short introductory series for learning PHP syntax and core concepts before starting a Laravel project.', href: 'https://laravel.com/learn/php-fundamentals', category: 'course', detail: 'Official video course', keywords: 'beginner PHP syntax', zh: { title: 'PHP 基础', description: '第一次写 PHP 时，先补上基本语法和常用概念，再去跟做 Laravel 项目。', detail: '英文 · 官方视频', keywords: 'PHP 基础 入门 语法' } },
  { title: 'Laravel Learning Roadmap', description: 'Use Laravel Daily’s topic-by-topic roadmap to pick what to practice next. Useful when you know the basics and want a specific exercise.', href: 'https://laraveldaily.com/roadmap-learning-path', category: 'course', detail: 'Laravel Daily', keywords: 'roadmap tutorials testing deployment', zh: { title: 'Laravel 学习路线图', description: '已经会基础开发时，按路线图挑一个专题继续练。可以从数据库、测试或部署开始。', detail: '英文 · Laravel Daily', keywords: '路线 学习 测试 上线' } },
  { title: 'LearnKu web development courses', description: 'Project-based courses in Chinese. The introductory course uses Laravel 9, so match the course version when following along.', href: 'https://learnku.com/laravel/courses', category: 'course', detail: 'Chinese · Some paid', zh: { title: 'LearnKu Web 开发实战', description: '适合跟做中文项目，入门课基于 Laravel 9。跟做时注意版本。', detail: '中文 · 部分付费' } },
  { title: 'Testing Laravel', description: 'Learn to design PHPUnit and Pest tests and organize a suite for an application you maintain.', href: 'https://spatie.be/products/testing-laravel', category: 'course', detail: 'Paid video course', keywords: 'tests Pest PHPUnit', zh: { description: '接手有一定规模的项目时，了解怎样设计 PHPUnit 和 Pest 测试，怎样组织测试套件。', detail: '英文 · 付费视频', keywords: '测试 Pest PHPUnit' } },
  { title: 'Laravel: Up & Running', description: 'Matt Stauffer’s third edition covers Laravel 10. Use it to look up framework concepts, and use current docs for setup.', href: 'https://www.oreilly.com/library/view/laravel-up/9781098153250/', category: 'book', detail: 'O’Reilly · 3rd edition', zh: { description: 'Matt Stauffer 的第三版覆盖 Laravel 10，适合查阅框架机制。新版项目的安装以官方文档为准。', detail: '英文 · O’Reilly · 第 3 版' } },
  { title: 'Laravel Beyond CRUD', description: 'A guide to organizing domain code as business rules grow, best read after maintaining an application.', href: 'https://spatie.be/products/laravel-beyond-crud', category: 'book', detail: 'Spatie · Paid', zh: { description: '当增删改查开始变成复杂业务时，读它了解如何组织领域代码。建议维护过一个应用后再读。', detail: '英文 · Spatie · 付费' } },
  { title: 'PHP: The Right Way', description: 'A quick reference for the PHP toolchain, Composer, exceptions, and testing.', href: 'https://phptherightway.com/', category: 'book', detail: 'Free online', zh: { title: 'PHP 之道', description: '补 PHP 工具链和编码实践基础，随手查 Composer、异常处理和自动化测试。', detail: '英文 · 免费在线阅读' } },
  { title: 'Laravel News', description: 'Follow framework releases and package announcements. Check compatibility in the package’s own repository.', href: 'https://laravel-news.com/', category: 'community', detail: 'News', zh: { description: '查看版本发布、生态动态和扩展包介绍。选型时到维护者的仓库核对兼容性。', detail: '英文 · 资讯' } },
  { title: 'Laravel blog', description: 'Read framework announcements and releases from the Laravel team in their original context.', href: 'https://laravel.com/blog', category: 'community', detail: 'Official', keywords: 'releases announcements framework', zh: { title: 'Laravel 官方博客', description: '阅读框架团队发布的公告、版本说明和项目用法。', detail: '英文 · 官方', keywords: '官方 发布 公告' } },
  { title: 'LearnKu Laravel community', description: 'Discuss projects in Chinese. When asking a question, include your framework version and a small example.', href: 'https://learnku.com/laravel', category: 'community', detail: 'Chinese · Forum', zh: { title: 'LearnKu Laravel 社区', description: '用中文讨论框架和项目实践。提问时附上框架版本和最小示例。', detail: '中文 · 论坛' } },
  { title: 'Laravel.io', description: 'Browse community questions and development discussions in English.', href: 'https://laravel.io/', category: 'community', detail: 'Forum', zh: { description: '适合用英文查找社区问答与开发实践。', detail: '英文 · 论坛' } },
  { title: 'Laracasts Discussions', description: 'Find help with a lesson or look up an existing discussion by framework feature.', href: 'https://laracasts.com/discuss', category: 'community', detail: 'Forum', zh: { description: '跟课遇到问题时，从相关讨论找线索，也可以按框架功能查问答。', detail: '英文 · 论坛' } },
  { title: 'Laravel framework repository', description: 'Read the source and change history. Search existing reports before filing a framework issue.', href: 'https://github.com/laravel/framework', category: 'community', detail: 'GitHub · Source', zh: { title: 'Laravel Framework 仓库', description: '查源代码和历史变更。能稳定复现的框架问题可先搜索已有讨论。', detail: 'GitHub · 框架源码' } },
  { title: 'LaraJobs', description: 'Browse Laravel roles. Check whether a remote listing still restricts country or time zone.', href: 'https://larajobs.com/', category: 'job', detail: 'Job board', zh: { description: '集中查找 Laravel 岗位。远程职位也可能限定居住地和工作时区。', detail: '英文 · 招聘' } },
  { title: 'LearnKu jobs', description: 'Browse Chinese-language hiring and freelance posts, and check when the role was posted.', href: 'https://learnku.com/laravel/c/jobs', category: 'job', detail: 'Chinese · Job board', zh: { title: 'LearnKu 招聘求职', description: '浏览中文社区的招聘和求职帖子，联系前核对发帖时间。', detail: '中文 · 招聘' } },
];

const packageNotes: [name: string, detail: string, description: string, keywords: string][] = [
  ['laravel/sanctum', '认证', '给第一方 SPA 使用会话认证，或给简单 API 发个人访问令牌。', '登录 token SPA API'],
  ['laravel/passport', '认证', '确实要对第三方提供 OAuth 2.0 授权时再选。仅需访问令牌时先看 Sanctum。', '登录 授权 OAuth API'],
  ['laravel/horizon', '队列', '监控任务吞吐、失败和工作进程。使用前确认队列驱动是 Redis。', '异步 Redis Job Worker'],
  ['laravel/socialite', '认证', '接入 GitHub、Google 等 OAuth 登录。先核对目标服务是否在支持列表里。', '登录 OAuth'],
  ['laravel/scout', '搜索', '让 Eloquent 模型接入搜索。先确认数据库驱动或外部搜索服务满足需求。', '全文索引 搜索'],
  ['laravel/pint', '代码质量', '统一 PHP 代码格式。适合在持续集成里用测试模式检查格式。', 'CI 格式化 style'],
  ['laravel/telescope', '调试', '在开发环境查看请求、查询和任务。生产启用前先评估访问控制及敏感数据。', '日志 性能 SQL 调试'],
  ['laravel/pulse', '可观测性', '从请求、慢查询和队列看应用的运行趋势。安装前先核对存储条件。', '监控 性能'],
  ['spatie/laravel-permission', '权限', '用角色与权限管理业务访问规则，适合权限需要由后台配置的应用。', 'RBAC 授权 Policy'],
  ['spatie/laravel-activitylog', '审计', '记录业务动作和模型变化。上线前约定记录范围及保留周期。', '操作日志 活动 审计'],
  ['maatwebsite/excel', '数据处理', '给常见 Excel 导入导出一个起点。大表格先验证内存占用和队列策略。', 'CSV 表格 数据 导入 导出'],
  ['overtrue/easy-sms', '消息', '在同一套接口下接多个短信服务商。接入前核对网关、签名和模板要求。', '通知 短信 通信'],
  ['sentry/sentry-laravel', '可观测性', '收集异常与性能信息。上线前先设置数据脱敏和采样。', '日志 异常 报错 监控'],
  ['intervention/image', '图像', '裁切和缩放上传图片。先确认部署环境里 PHP 图像驱动可用。', '图片 压缩 GD Imagick'],
];

const packageEnglish: Record<string, [detail: string, description: string, keywords: string]> = {
  'laravel/sanctum': ['Authentication', 'Use session authentication for a first-party SPA or issue personal tokens for a simple API.', 'login token SPA API'],
  'laravel/passport': ['Authentication', 'Use it when a third party needs OAuth 2.0 authorization. For personal access tokens, also consider Sanctum.', 'OAuth login API'],
  'laravel/horizon': ['Queues', 'Monitor throughput, failures, and workers for applications that use Redis queues.', 'Redis job worker async'],
  'laravel/socialite': ['Authentication', 'Add OAuth sign-in from providers such as GitHub and Google. Check the supported providers first.', 'OAuth login'],
  'laravel/scout': ['Search', 'Make Eloquent models searchable. Match the database or external driver to your search requirements.', 'full-text index'],
  'laravel/pint': ['Code quality', 'Keep PHP formatting consistent and run Pint in check mode in CI.', 'CI formatter style'],
  'laravel/telescope': ['Debugging', 'Inspect requests, queries, and jobs in development. Review access controls and sensitive data before production use.', 'SQL logs performance'],
  'laravel/pulse': ['Observability', 'Follow request, query, and queue trends. Check the storage requirements before installing.', 'monitoring performance'],
  'spatie/laravel-permission': ['Authorization', 'Manage roles and permissions that need to be configurable by application administrators.', 'RBAC authorization policy'],
  'spatie/laravel-activitylog': ['Audit logs', 'Record important business actions and model changes. Set a clear retention period.', 'audit activity'],
  'maatwebsite/excel': ['Data processing', 'Import and export Excel files. Test memory use and queue behavior with large workbooks.', 'CSV workbook spreadsheet'],
  'overtrue/easy-sms': ['Messaging', 'Use one interface across SMS providers. Review gateway, signature, and template requirements.', 'SMS notification'],
  'sentry/sentry-laravel': ['Observability', 'Collect errors and performance data. Configure sampling and data scrubbing before production use.', 'errors logs monitoring'],
  'intervention/image': ['Images', 'Crop and resize uploaded images. Verify the PHP image driver on your deployment target.', 'image compression GD Imagick'],
};

const recommended = new Set(packageNotes.map(([name]) => name));
const packages: LocalResource[] = packageNotes.map(([title, detail, description, keywords]) => {
  const [enDetail, enDescription, enKeywords] = packageEnglish[title];
  return { title, detail: enDetail, description: enDescription, keywords: enKeywords, category: 'package', href: `https://packagist.org/packages/${title}`, zh: { detail, description, keywords } };
});

const archive: LocalResource[] = [...new Set(previousPackages)]
  .filter((name) => !recommended.has(name))
  .map((title) => ({
    title, archived:true, category: 'package', detail: 'From the original directory',
    description: 'Check version constraints, maintenance status, and installation instructions.',
    href: `https://packagist.org/packages/${title}`,
    zh: { detail: '原站收藏', description: '查看包的版本约束、维护状态和安装说明。' },
  }));

const people: LocalResource[] = previousPeople.filter(({ github_id }) => !featuredHandles.has(github_id.toLowerCase())).map(({ name, github_id }) => ({
  title: name, description: 'Browse public repositories and contributions.', category: 'person',
  href: `https://github.com/${profileFor(github_id).github}`, detail: `@${github_id}`, zh: { description: '查看公开仓库和贡献。' },
}));

const sectionCategories: Record<Section, Category[]> = {
  resources: ['doc', 'course', 'book', 'community', 'package'],
  docs: ['doc'], reading: ['course', 'book'], packages: ['package'], sites: ['community'], stars: ['person'], jobs: ['job'],
};

export function resourceTabs(locale: Locale) {
  const { t, href } = localize(locale);
  return [
    { href: href('/resources/'), label: t('All resources', '全部') },
    { href: href('/docs/'), label: t('Documentation', '文档') },
    { href: href('/reading/'), label: t('External courses & books', '外部课程与书籍') },
    { href: href('/packages/'), label: t('Packages', '扩展包') },
    { href: href('/ecosystem/'), label: t('Ecosystem guide', '生态选型指南') },
    { href: href('/sites/'), label: t('Community', '社区') },
  ];
}

export function getResources(section: Section, locale: Locale) {
  const entries = section === 'packages' ? [...packages, ...archive] : [...reading, ...packages, ...people];
  return entries.filter((entry) => sectionCategories[section].includes(entry.category))
    .map(({ zh, ...entry }) => ({ ...entry, ...(locale === 'zh' ? zh : {}), key:entry.href }));
}

export const tools = [
  { id: 'artisan', title: 'Artisan command builder', label: 'Artisan', description: 'Generate Artisan commands with the options you need.', icon: 'terminal', keywords: 'make:model controller request job migration seeder test 脚手架', zh: { title: 'Artisan 命令生成器', label: 'Artisan 命令', description: '选资源类型、填类名，复制带参数的生成命令。' } },
  { id: 'validation', title: 'Validation rule builder', label: 'Validation', description: 'Build a set of rules for a Laravel form request.', icon: 'list', keywords: 'validate FormRequest 校验 required nullable email', zh: { title: '表单验证规则生成器', label: '表单验证', description: '组装常用规则，复制到 Form Request 的 rules 方法。' } },
  { id: 'schedule', title: 'Schedule builder', label: 'Scheduler', description: 'Turn a schedule into Laravel code and a cron expression.', icon: 'clock', keywords: 'crontab scheduler 定时任务 cron 定时', zh: { title: '任务调度助手', label: '任务调度', description: '把执行时间转成 Scheduler 代码和 Cron 表达式。' } },
  { id: 'env-check', title: '.env production check', label: '.env check', description: 'Review debug mode, your app key, and other common settings locally.', icon: 'shield', keywords: 'dotenv APP_DEBUG APP_ENV APP_KEY 环境变量 部署', zh: { title: '.env 上线检查', label: '.env 检查', description: '在浏览器本地检查调试模式、应用密钥和常见配置。' } },
] as const;

export function getTools(locale: Locale) {
  return tools.map(({ zh, ...tool }) => locale === 'zh' ? { ...tool, ...zh } : tool);
}

export type Tool = ReturnType<typeof getTools>[number];
