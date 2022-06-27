<template>
  <div class="mt-8 space-y-6">
    <header class="space-y-4">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl mb-0 text-gray-700 dark:text-gray-300">教程</h1>
        <the-link-button href="https://github.com/overtrue/laravel.xyz/edit/master/content/packages.json" class="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>推荐更多课程</span>
        </the-link-button>
      </div>
      <div class="text-gray-500 dark:text-neutral-400">通过教程，我们可以更深入系统的学习使用 Laravel。</div>
    </header>
    <div class="gap-6 flex-1 grid grid-cols-1 xl:grid-cols-2">
      <course-card v-for="course of courses.body" :course="course" :key="course.name"></course-card>
    </div>
  </div>
</template>

<script setup>
const { data: courses } = await useAsyncData('courses', () => queryContent('/courses').findOne())
</script>
