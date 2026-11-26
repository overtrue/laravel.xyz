export const levels = [
  { id: 'foundation', en: { title: 'Foundation', description: 'Get comfortable with PHP, Composer, and the request lifecycle.' }, zh: { title: '入门准备', description: '打好 PHP、Composer 和 HTTP 请求的基础。' } },
  { id: 'application', en: { title: 'Build an application', description: 'Take a small web app from a working page to a documented JSON API.' }, zh: { title: '应用实战', description: '从页面和表单入手，再把业务做成可验证的 JSON API。' } },
  { id: 'data-access', en: { title: 'Data and access', description: 'Keep queries predictable and restrict what each user can do.' }, zh: { title: '数据与权限', description: '测量数据库查询，明确每位用户能访问和修改什么。' } },
  { id: 'reliability', en: { title: 'Reliability', description: 'Test application boundaries and design work that can be repeated safely.' }, zh: { title: '可靠性', description: '用测试守住关键行为，处理队列、重试和计划任务。' } },
  { id: 'production', en: { title: 'Production', description: 'Rehearse deployments, schema changes, and recovery before you need them.' }, zh: { title: '生产进阶', description: '在本地或预发布环境演练部署、数据库变更与故障恢复。' } },
  { id: 'capstone', en: { title: 'Capstone', description: 'Bring the techniques together in a reservation service with explicit reliability guarantees.' }, zh: { title: '综合项目', description: '把接口、事务、异步处理和验证合到一个可验收的预约服务。' } },
] as const;

type Level = typeof levels[number]['id'];
type CourseCopy = { title: string; description: string; prerequisites: string; outcome: string };

export const courses = [
  { id: 'php-composer', level: 'foundation',
    en: { title: 'Your first route and PHP essentials', description: 'Try a price calculator in your browser, then build a small PHP script and load a class with Composer.', prerequisites: 'Just a browser for the first exercise. For the local exercises, install PHP 8.3–8.5, Composer, and the SQLite extension.', outcome: 'Read the reply from a Laravel route, calculate totals in PHP, and load your own class.' },
    zh: { title: '从第一条路由学起', description: '先在浏览器里试用一个询价接口，再写一个 PHP 小程序，用 Composer 加载自己写的类。', prerequisites: '第一个练习只需浏览器。本地练习需安装 PHP 8.3–8.5、Composer 和 SQLite 扩展。', outcome: '能读懂 Laravel 路由的回复，用 PHP 计算总价，再加载自己写的类。' },
  },
  { id: 'taskboard', level: 'application',
    en: { title: 'Build your first Laravel app', description: 'Build Taskboard with SQLite and Blade, then add validation, relationships, a queue, and tests.', prerequisites: 'Try the list and form in your browser. To build your own copy, use PHP, Composer, and PDO SQLite.', outcome: 'A task board you can run locally, with a form, a related model, a retryable job, and a deployment checklist.' },
    zh: { title: '用一个项目学 Laravel', description: '用 SQLite 和 Blade 搭建任务清单，再逐步加入验证、关联、队列和测试。', prerequisites: '清单和表单都可以先在浏览器里试。跟着教程搭建本地项目时，需要 PHP、Composer 和 PDO SQLite。', outcome: '完成一个本地可运行的任务清单，包含表单、模型关联、可重试任务和上线检查。' },
  },
  { id: 'rest-api', level: 'application',
    en: { title: 'Design a JSON API', description: 'Use the task list you already know to practice pagination, validate a new task, and write your first API tests.', prerequisites: 'Practice reading and creating tasks in your browser. To code along locally, use the task list and form from the first two Taskboard lessons.', outcome: 'A versioned /api/v1/tasks collection with paginated reads, a validated create endpoint, and feature tests.' },
    zh: { title: '设计一个 JSON API', description: '用熟悉的任务清单学习分页、验证新任务，再为接口写一组测试。', prerequisites: '在浏览器里就能练习读取和添加任务。本地跟练会用到任务清单前两课做好的页面和表单。', outcome: '实现 /api/v1/tasks 的分页读取、受验证的新增接口和契约测试。' },
  },
  { id: 'eloquent', level: 'data-access',
    en: { title: 'Eloquent and database performance', description: 'Measure a query plan, traverse a changing table, and update inventory without overselling.', prerequisites: 'The Taskboard project, including the project relationship. The inventory exercise uses its own table.', outcome: 'An explainable composite index, stable cursor paging, and an inventory update protected by the database.' },
    zh: { title: 'Eloquent 与数据库性能', description: '看懂一次查询计划，为大表选游标分页，并用数据库条件更新库存。', prerequisites: '完成包含项目关联的任务清单。库存练习使用单独的表。', outcome: '用执行计划验证复合索引，用游标分页读数据，并通过数据库约束防止库存超卖。' },
  },
  { id: 'api-access', level: 'data-access',
    en: { title: 'API authentication and authorization', description: 'Use Sanctum tokens, owner checks, and policy tests to decide which records an API caller can change.', prerequisites: 'Complete Design a JSON API and use a local Taskboard database. The first lesson adds task ownership.', outcome: 'An authenticated, owner-scoped task API with tested 401, 403, and successful responses.' },
    zh: { title: 'API 认证与授权', description: '用 Sanctum 令牌、资源归属和策略测试限制每个调用者可以修改的任务。', prerequisites: '完成 JSON API 课程，在本地任务清单数据库练习。第一课会添加任务归属字段。', outcome: '实现需要认证且按归属隔离的任务 API，并验证 401、403 和成功响应。' },
  },
  { id: 'async-work', level: 'reliability',
    en: { title: 'Queues and scheduled work', description: 'Use a database queue, test commit boundaries, and give each scheduled run observable results.', prerequisites: 'Complete the Taskboard queue lesson. Use a local database queue and cache store.', outcome: 'A job that is dispatched after the transaction commits, tolerates retries, and runs on a verifiable schedule.' },
    zh: { title: '队列、重试与计划任务', description: '验证事务提交边界，在数据库队列里观察执行过程，并让调度结果可检查。', prerequisites: '完成任务清单队列章节，准备本地数据库队列和缓存。', outcome: '让任务在事务提交后入队，重复执行保持状态一致，并验证调度触发。' },
  },
  { id: 'automated-tests', level: 'reliability',
    en: { title: 'Automated tests that catch regressions', description: 'Test validation at the boundaries, fake a job dispatch, and run the suite in continuous integration.', prerequisites: 'Complete the Taskboard form and testing lessons. Use its PHPUnit setup and the command from the scheduling lesson.', outcome: 'Tests for input boundaries and dispatch behavior, plus a CI workflow that runs on two PHP versions.' },
    zh: { title: '能发现回归的自动化测试', description: '围绕输入边界和任务分发写测试，把测试套件放进持续集成。', prerequisites: '完成任务清单的表单和测试章节，沿用 PHPUnit 配置与调度课的命令。', outcome: '覆盖验证边界和队列分发，最后在两个 PHP 版本上运行持续集成。' },
  },
  { id: 'deploy-operate', level: 'production',
    en: { title: 'Deploy and operate Laravel', description: 'Validate configuration as the application sees it, ship compatible schema changes, and rehearse worker recovery.', prerequisites: 'A working local Taskboard installation and a disposable database. A paid hosting service is unnecessary for the labs.', outcome: 'A release rehearsal with effective config checks, a staged migration plan, and a worker recovery exercise.' },
    zh: { title: 'Laravel 部署与运维', description: '核对框架实际读取的配置，分阶段发布数据库变更，演练队列故障恢复。', prerequisites: '已有本地任务清单和可重建的测试数据库。练习无需购买服务器。', outcome: '走完一次发布演练，包含运行配置、兼容迁移和 Worker 恢复检查。' },
  },
  { id: 'reservation-capstone', level: 'capstone',
    en: { title: 'Build a resilient reservation service', description: 'Write a reservation API that survives repeated requests and preserves events when a worker is unavailable.', prerequisites: 'Comfort with API validation, transactions, queues, and feature tests. Use a fresh local Laravel 13 app.', outcome: 'A reservation endpoint with request idempotency, a transactional outbox, and a release rehearsal with tested invariants.' },
    zh: { title: '综合项目：可靠的预约服务', description: '从零做一个可处理重复请求的预约 API，让 Worker 离线时仍能保留待处理事件。', prerequisites: '掌握 API 验证、事务、队列和功能测试，准备全新的本地 Laravel 13 项目。', outcome: '做出支持请求幂等和事务发件箱的预约接口，并用回归测试验收。' },
  },
] as const satisfies readonly { id: string; level: Level; en: CourseCopy; zh: CourseCopy }[];

export type CourseId = typeof courses[number]['id'];

export function coursePath(id: CourseId) {
  return id === 'taskboard' ? '/learn/' : `/courses/${id}/`;
}
