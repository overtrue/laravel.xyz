<template>
  <div class="mt-8 space-y-6">
    <header class="space-y-4">
      <div class="flex items-center justify-between">
        <h1 class="mb-0 text-3xl text-gray-700 dark:text-gray-300">网站</h1>
        <the-link-button href="https://github.com/overtrue/laravel.xyz/edit/master/content/sites.json" class="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>推荐更多网站</span>
        </the-link-button>
      </div>
      <p class="text-gray-500 dark:text-neutral-400">一些有用的网站</p>
    </header>

    <div class="flex items-start gap-6">
      <div class="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-4">
        <site-card v-for="site of sites.body" :site="site" :key="site.url"></site-card>
      </div>
    </div>
  </div>
</template>
<script setup>
const { data: sites } = await useAsyncData('sites', () => queryContent('/sites').findOne())
</script>
