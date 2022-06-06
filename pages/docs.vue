<template>
  <div class="mt-8 space-y-6">
    <header class="space-y-4">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl mb-0 text-gray-700 dark:text-gray-300">文档</h1>
        <the-link-button href="https://github.com/overtrue/laravel.xyz/edit/master/content/docs.json" class="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>推荐更多文档</span>
        </the-link-button>
      </div>
      <p class="text-gray-500 dark:text-gray-500">所有和 Laravel 相关的文档都在这里</p>
    </header>
    <section class="space-y-6">
      <h2 class="font-bold">框架文档</h2>

      <div class="flex gap-6 items-start">
        <div class="gap-6 flex-1 grid grid-cols-1 xl:grid-cols-2">
          <doc-card v-for="doc of docs.framework" :doc="doc" :key="doc.name"></doc-card>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="font-bold">官方拓展</h2>

      <div class="flex gap-6 items-start">
        <div class="gap-6 flex-1 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
          <doc-card v-for="doc of docs.packages" :doc="doc" :key="doc.name"></doc-card>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const { data: docs } = await useAsyncData('docs', () => queryContent('/docs').findOne())
</script>
