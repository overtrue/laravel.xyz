<template>
  <div class="mt-8 space-y-6">
    <header class="space-y-4">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl mb-0 text-gray-700 dark:text-gray-300">扩展包</h1>
        <the-link-button href="https://github.com/overtrue/laravel.xyz/edit/master/content/packages.json" class="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>提议更多扩展包</span>
        </the-link-button>
      </div>
      <p class="text-gray-500 dark:text-gray-500">一些开源的让你更方便创建Laravel应用的库或者组件。</p>
    </header>
    <div class="flex gap-6">
      <card class="rounded-lg p-6 shadow w-64">
        <h2 class="text-xl font-semibold text-gray-700">标签</h2>
        <div class="mt-6">
          <label class="flex items-center space-x-2 w-full" v-for="topic in topics.body" :key="topic">
            <input type="checkbox" class="form-checkbox rounded" />
            <div class="flex-1 truncate min-w-0 whitespace-nowrap">{{ topic.name }}</div>
            <span class="justify-self-end text-gray-400 text-sm rounded bg-gray-200 px-2">{{ topic.packages_count }}</span>
          </label>
        </div>
      </card>
      <div class="space-y-6 flex-1">
        <package-card v-for="repo of repos.body" :repo="repo" :key="repo.name"></package-card>
      </div>
    </div>
  </div>
</template>
<script setup>
const { data: repos } = await useAsyncData('packages', () => queryContent('/compiled/packages').findOne())
const { data: topics } = await useAsyncData('topics', () => queryContent('/compiled/topics').findOne())
</script>
