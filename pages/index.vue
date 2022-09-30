<template>
  <section class="flex items-center justify-center h-full px-4 py-24 md:px-12">
    <div class="flex flex-col items-center max-w-6xl space-y-20">
      <h1 class="text-4xl font-extrabold text-transparent md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-blue-600 to-green-400">人生苦短<br />我选择 Laravel</h1>
      <div class="flex flex-wrap items-center gap-6">
        <NuxtLink
          to="/courses"
          class="flex items-center px-6 py-2 space-x-2 text-white bg-gray-700 rounded dark:text-gray-300 dark:border-gray-600 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
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
          class="flex items-center px-6 py-2 space-x-2 text-white bg-gray-700 rounded dark:text-gray-300 dark:border-gray-600 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
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
          class="flex items-center px-6 py-2 space-x-2 text-white bg-gray-700 rounded dark:text-gray-300 dark:border-gray-600 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
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
          class="flex items-center px-6 py-2 space-x-2 text-white bg-gray-700 rounded dark:text-gray-300 dark:border-gray-600 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
            />
          </svg>
          <span>扩展包</span>
        </NuxtLink>
      </div>
      <div class="items-center md:flex md:space-x-6 xl:space-x-12 xl:flex">
        <a href="https://github.com/overtrue" target="_blank" class="group">
          <content-card class="flex items-center px-6 py-2 space-x-2">
            <div class="h-12 w-12 rounded-full border-2 border-blue-200 group-hover:border-blue-400 dark:group-hover:border-gray-300 p-0.5">
              <img src="~/assets/images/overtrue.webp" alt="overtrue" class="rounded-full" />
            </div>
            <div class="p-2 text-left text-gray-400 dark:group-hover:text-gray-300">
              <div class="font-semibold text-gray-700 dark:group-hover:text-white dark:text-gray-300">overtrue</div>
              <small>用心为你整理</small>
            </div>
          </content-card>
        </a>
      </div>
    </div>
  </section>
</template>
