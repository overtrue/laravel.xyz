import { categories, getResources, getTools } from '../data/catalog';
import { getCourses, getGuides } from './site';
import { localize, type Locale } from './locale';
import { getFeaturedPeople } from '../data/people';
import { coursePath } from '../data/courses';
import { quizStops, quizPath } from '../data/quizzes';
import { getEcosystem, getOpenSourceProjects } from '../data/ecosystem';

export async function searchEntries(locale: Locale) {
  const { t, href } = localize(locale);
  const guides = (await getGuides(locale)).map(({ id, data }) => ({
    title: data.title, description: data.description, href: href(`/learn/${id}/`), type: t('Free lesson', '免费课时'), keywords: data.keywords.join(' '),
  }));
  const courses = (await getCourses(locale)).map(({ id, title, description, outcome }) => ({
    title, description, href: href(coursePath(id)), type: t('Free course', '免费课程'), keywords: outcome,
  }));
  const workbench = getTools(locale).map(({ id, title, description, keywords }) => ({
    title, description, href: href(`/tools/${id}/`), type: t('Tool', '工具'), keywords,
  }));
  const people = getFeaturedPeople(locale).map(({ id, name, handle, description, topic, work }) => ({
    title: name, description, href: `${href('/stars/')}#${id}`, type: t('Person', '人物'), keywords: `${handle} ${topic} ${work}`,
  }));
  const ecosystemPath = href('/ecosystem/');
  const ecosystemType = t('Ecosystem guide', '生态选型');
  const ecosystem = getEcosystem(locale).flatMap(({ title, resources }) => resources.map(({ id, name, description }) => ({
    title: name, description, href: `${ecosystemPath}#${id}`, type: ecosystemType, keywords: title,
  })));
  const projects = getOpenSourceProjects(locale).map(({ id, name, description, topic, entry }) => ({
    title: name, description, href: `${ecosystemPath}#${id}`, type: t('Open-source project', '开源项目'), keywords: `${topic} ${entry}`,
  }));
  const links = [...new Map([
    ...getResources('resources', locale), ...getResources('packages', locale),
    ...getResources('jobs', locale), ...getResources('stars', locale),
  ].map((resource) => [resource.href, resource])).values()];

  return [
    { title:t('Course challenges','课程闯关'), description:t('Test your skills and review your scores','自测知识点，复习错题，查看战绩'), href:href('/challenges/'), type:t('Quiz','测验'), keywords:'quiz test challenges exam points 闯关 测试 成绩 积分' },
    ...quizStops(locale).map(stop => ({title:t('Challenge · ','闯关 · ')+stop.title, description:t('Four scenarios with explanations','四道实战题，附答案解析'), href:href(quizPath(stop.id)), type:t('Quiz','测验'), keywords:'quiz test practice checkpoint 闯关 测试 练习'})),
    { title: t('Free learning roadmap', '免费学习路线图'), description: t('Choose a learning path or browse all six course levels', '选择学习路线或浏览全部六个课程阶段'), href: href('/courses/'), type: t('Directory', '目录'), keywords: t('free courses learning atlas lessons training roadmap tasks', '免费 课程 学习 路线图 任务') },
    { title: t('My Orbit', '我的小宇宙'), description: t('Resume a lesson and revisit saved items and challenge stamps', '继续学习，查看收藏与挑战印章'), href: href('/orbit/'), type: t('Personal collection', '个人收藏'), keywords: 'bookmarks progress stamps 收藏 印章 进度' },
    { title: t('Laravel ecosystem', 'Laravel 生态选型'), description: t('Compare tools and browse open-source examples', '按需求选择工具，查阅开源示例'), href: ecosystemPath, type: ecosystemType, keywords: t('stack open source libraries projects', '技术栈 开源 项目') },
    workbench[0], { title: t('Documentation', '文档导航'), description: t('Find the docs for your version of Laravel', '按 Laravel 版本选择文档'), href: href('/docs/'), type: t('Directory', '目录'), keywords: t('docs install PHP', '文档 安装 PHP') },
    { title: t('Bookshelf and external courses', '社区书架与外部课程'), description: t('Preview books and browse courses from the community', '翻看书架，查阅社区课程'), href: href('/reading/'), type: t('Directory', '目录'), keywords: 'books bookshelf reading ebooks 书籍 书架 电子书' },
    workbench[1], { title: t('Package directory', '扩展包目录'), description: t('Find packages by use case', '查看常用扩展包'), href: href('/packages/'), type: t('Directory', '目录'), keywords: t('Composer packages', 'Composer 包') },
    { title: t('Account and sync','账号与跨设备同步'), description: t('Sign in with a passkey or recover an account','用通行密钥登录，或找回账号'), href: href('/orbit/') + '#account', type: t('Account','账号'), keywords: 'login sign in register passkey recovery sync 登录 注册 恢复 同步' },
    ...courses, ...guides, ...workbench.slice(2), ...people, ...ecosystem, ...projects,
    ...links.map(({ title, description, href, key, category, keywords, detail }) => ({ title, description, href, key, type: categories[category][locale], keywords: `${keywords ?? ''} ${detail ?? ''}` })),
  ];
}

export async function searchResponse(locale: Locale) {
  return Response.json((await searchEntries(locale)).map(({title, description, href, type, keywords}) => ({title, description, href, type, keywords})));
}
