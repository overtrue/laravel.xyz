import type { Locale } from '../lib/locale';

const profiles = [
  {
    name: 'Taylor Otwell', handle: 'taylorotwell', initials: 'TO',
    topic: { en: 'The framework', zh: '框架演进' },
    description: { en: 'Laravel’s creator. Follow the framework release notes to see how routing, queues, testing, and other core features evolve.', zh: 'Laravel 创始人。阅读发行说明，可以跟进路由、队列、测试等核心功能的变化。' },
    work: { en: 'Laravel release notes', zh: 'Laravel 发行说明' },
    url: 'https://laravel.com/framework/docs/13.x/releases',
  },
  {
    name: 'Jeffrey Way', handle: 'JeffreyWay', initials: 'JW',
    topic: { en: 'Learning by example', zh: '实战教学' },
    description: { en: 'The teacher behind Laracasts’ Laravel From Scratch series. His examples are a good way to see how the pieces of a first app fit together.', zh: 'Laracasts《Laravel From Scratch》系列的讲师。适合跟着视频把路由、认证和部署串进同一个项目。' },
    work: { en: 'Laravel From Scratch (2026)', zh: 'Laravel 从零入门（2026）' },
    url: 'https://laracasts.com/series/laravel-from-scratch-2026/',
  },
  {
    name: 'Caleb Porzio', handle: 'calebporzio', initials: 'CP',
    topic: { en: 'Livewire & Alpine', zh: 'Livewire 与 Alpine' },
    description: { en: 'Creator of Livewire and Alpine.js. Start with a small interactive component if most of your application already lives in Blade.', zh: 'Livewire 和 Alpine.js 的创建者。主要用 Blade 写页面时，可以先跟着快速入门做一个交互组件。' },
    work: { en: 'Livewire quickstart', zh: 'Livewire 快速入门' },
    url: 'https://livewire.laravel.com/docs/4.x/quickstart',
  },
  {
    name: 'Nuno Maduro', handle: 'nunomaduro', initials: 'NM',
    topic: { en: 'Testing & tooling', zh: '测试与工具链' },
    description: { en: 'Creator of Pest. Try writing one feature test for a route you maintain to get a feel for its syntax and assertions.', zh: 'Pest 的创建者。可以先挑项目中已有的一条路由，尝试用 Pest 写功能测试和断言。' },
    work: { en: 'Pest installation guide', zh: 'Pest 安装指南' },
    url: 'https://pestphp.com/docs/installation',
  },
  {
    name: 'Jess Archer', handle: 'jessarcher', initials: 'JA',
    topic: { en: 'Command-line design', zh: '命令行体验' },
    description: { en: 'The developer behind Laravel Prompts. Study its prompts and validation when you need an Artisan command that people can use without memorizing flags.', zh: 'Laravel Prompts 的创建者。想把需要记参数的 Artisan 命令做成交互流程，可以从输入提示和验证开始。' },
    work: { en: 'Laravel Prompts documentation', zh: 'Laravel Prompts 文档' },
    url: 'https://laravel.com/framework/docs/13.x/prompts',
  },
  {
    name: 'Freek Van der Herten', handle: 'freekmurze', initials: 'FV',
    topic: { en: 'Open source packages', zh: '开源扩展包' },
    description: { en: 'A Spatie package maintainer who writes about the trade-offs behind building and maintaining Laravel applications and libraries.', zh: 'Spatie 的扩展包维护者，常分享构建和维护应用、抽取可复用扩展包时的取舍。' },
    work: { en: 'Freek’s original articles', zh: 'Freek 的原创文章' },
    url: 'https://freek.dev/originals',
  },
  {
    name: 'Matt Stauffer', handle: 'mattstauffer', initials: 'MS',
    topic: { en: 'Books & reference', zh: '书籍与参考资料' },
    description: { en: 'Author of Laravel: Up & Running. Keep it nearby when you want to understand why a framework feature works the way it does. The third edition covers Laravel 10.', zh: '《Laravel: Up & Running》作者。适合遇到问题时按主题回查框架机制，第三版基于 Laravel 10。' },
    work: { en: 'Laravel: Up & Running', zh: 'Laravel: Up & Running' },
    url: 'https://www.oreilly.com/library/view/laravel-up/9781098153250/',
  },
  {
    name: 'Povilas Korop', handle: 'povilaskorop', initials: 'PK',
    topic: { en: 'Practical learning paths', zh: '实用学习路径' },
    description: { en: 'Founder of Laravel Daily. Use his roadmap to find a topic you want to practice next, whether that is Eloquent, testing, or deployment.', zh: 'Laravel Daily 创始人。可以按已有经验选一个主题继续练，比如 Eloquent、测试或部署。' },
    work: { en: 'Laravel Learning Roadmap', zh: 'Laravel 学习路线图' },
    url: 'https://laraveldaily.com/roadmap-learning-path',
  },
  {
    name: 'Jason McCreary', handle: 'jasonmccreary', initials: 'JM',
    topic: { en: 'Upgrades & scaffolding', zh: '版本升级与脚手架' },
    description: { en: 'Creator of Laravel Shift. His Blueprint project is a starting point for generating models, migrations, and controller code from a draft.', zh: 'Laravel Shift 的创建者。想从业务结构草稿生成模型、迁移和控制器时，可以先试 Blueprint。' },
    work: { en: 'Blueprint documentation', zh: 'Blueprint 文档' },
    url: 'https://blueprint.laravelshift.com/docs/installation/',
  },
  {
    name: 'Aaron Francis', handle: 'aarondfrancis', initials: 'AF',
    topic: { en: 'Databases & performance', zh: '数据库与性能' },
    description: { en: 'Writes and teaches about Laravel and databases. His SQLite course is a next step once you want to understand indexes and query plans.', zh: '常写 Laravel 和数据库，也制作数据库课程。做完任务清单后，可以用他的 SQLite 课程继续练索引与查询计划。' },
    work: { en: 'High Performance SQLite', zh: 'High Performance SQLite' },
    url: 'https://highperformancesqlite.com/',
  },
  {
    name: 'Shruti Balasa', handle: 'shrutibalasa', initials: 'SB',
    topic: { en: 'Frontend & Laravel education', zh: '前端与 Laravel 教学' },
    description: { en: 'Teaches Laravel and frontend layout. Her CSS Grid lessons make a good follow-up if you’re turning a Blade template into a responsive interface.', zh: '教授 Laravel 与前端布局。用 Blade 写完页面后，可以跟她的 CSS Grid 课程练小屏幕上的响应式布局。' },
    work: { en: 'CSS Grids Simplified', zh: 'CSS Grid 实战课' },
    url: 'https://laracasts.com/series/css-grids-simplified',
    site: 'https://shrutibalasa.com/',
  },
  {
    name: 'overtrue', handle: 'overtrue', initials: 'OT',
    topic: { en: 'PHP integrations', zh: '国内业务集成' },
    description: { en: 'Maintainer of this site and open-source PHP packages. His Laravel WeChat integration is a starting point for projects that need WeChat’s APIs.', zh: '本站维护者，也维护多个 PHP 开源扩展包。需要在 Laravel 里接入微信接口时，可以从 Laravel WeChat 看起。' },
    work: { en: 'EasyWeChat for Laravel', zh: 'EasyWeChat for Laravel' },
    url: 'https://github.com/overtrue/laravel-wechat',
  },
] as const;

export const featuredHandles = new Set<string>(profiles.map(({ handle }) => handle.toLowerCase()));

export function getFeaturedPeople(locale: Locale) {
  return profiles.map((profile) => {
    const { name, handle, initials, topic, description, work, url } = profile;
    return {
      id: handle.toLowerCase(), name, handle, initials, topic: topic[locale],
      description: description[locale], work: work[locale], url,
      site: 'site' in profile ? profile.site : undefined,
    };
  });
}
