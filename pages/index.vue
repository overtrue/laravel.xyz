<template>
  <section class="text-center flex flex-col flex-1 px-4 md:px-12 h-full">
    <div class="flex-1 flex flex-col items-center justify-center space-y-20">
      <div class="flex justify-center">
        <h1 class="tagline text-left text-3xl md:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-400">
          人生苦短 我选择 Laravel
        </h1>
      </div>
      <div class="flex items-center justify-center gap-6 flex-wrap justify-center">
        <NuxtLink
          to="/courses"
          class="block xl:space-y-4 px-8 py-4 border-4 rounded-xl dark:border-gray-600 font-medium transition-colors duration-200 transform text-gray-600 hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <span>教程</span>
        </NuxtLink>
        <NuxtLink
          to="/docs"
          class="block xl:space-y-4 px-8 py-4 border-4 rounded-xl dark:border-gray-600 font-medium transition-colors duration-200 transform text-gray-600 hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>文档</span>
        </NuxtLink>
        <NuxtLink
          to="/stars"
          class="block xl:space-y-4 px-8 py-4 border-4 rounded-xl dark:border-gray-600 font-medium transition-colors duration-200 transform text-gray-600 hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          <span>人物</span>
        </NuxtLink>
        <NuxtLink
          to="/packages"
          class="block xl:space-y-4 px-8 py-4 border-4 rounded-xl dark:border-gray-600 font-medium transition-colors duration-200 transform text-gray-600 hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
            />
          </svg>
          <span>扩展包</span>
        </NuxtLink>
        <!-- <NuxtLink
          to="/jobs"
          class="block xl:space-y-4 px-8 py-4 border-4 rounded-xl dark:border-gray-600 font-medium transition-colors duration-200 transform text-gray-600 hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          <span>工作</span>
        </NuxtLink> -->
      </div>
    </div>
    <div class="py-4 md:py-12 md:flex items-center md:space-x-6 xl:space-x-12 xl:flex justify-center">
      <a href="https://github.com/overtrue" target="_blank" class="flex items-center group hover:bg-gray-200 dark:hover:bg-indigo-500 px-6 py-2 rounded-lg">
        <div class="h-12 w-12 rounded-full border-2 border-blue-200 group-hover:border-blue-400 dark:group-hover:border-gray-300 p-0.5">
          <img src="~/assets/images/overtrue.webp" alt="overtrue" class="rounded-full" />
        </div>
        <div class="p-2 text-left text-gray-400 dark:group-hover:text-gray-300">
          <div class="text-gray-700 dark:group-hover:text-white dark:text-gray-400 font-semibold">overtrue</div>
          <small>用心为你整理</small>
        </div>
      </a>
    </div>
  </section>
</template>
