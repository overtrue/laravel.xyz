<template>
  <div class="mt-8 space-y-6">
    <header class="space-y-4">
      <div class="flex items-center justify-between">
        <h1 class="mb-0 text-3xl text-gray-700 dark:text-gray-300">人物</h1>
        <the-link-button href="https://github.com/overtrue/laravel.xyz/edit/master/content/packages.json" class="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>推荐更多人选</span>
        </the-link-button>
      </div>
      <div class="text-gray-500 dark:text-neutral-400">关注他们，学习和模仿。</div>
    </header>
    <div class="grid content-center w-full gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      <star-card v-for="star of stars.body" :star="star" class="w-full mx-auto" :key="star.name"></star-card>
    </div>
  </div>
</template>

<script setup>
const { data: stars } = await useAsyncData('stars', () => queryContent('/compiled/stars').findOne())
</script>
