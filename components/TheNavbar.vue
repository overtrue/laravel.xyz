<template>
  <nav class="bg-white shadow dark:bg-gray-800">
    <div class="container px-6 py-4 mx-auto">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex items-center justify-between">
          <div class="text-xl font-semibold text-gray-700">
            <a
              href="/"
              class="flex items-center space-x-2 text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-600 dark:hover:text-gray-300"
            >
              <h1 class="text-3xl leading-none m-0">Laravel</h1>
              <span class="bg-blue-500 text-white text-sm px-2 py-1 rounded rounded-bl-none">小宇宙</span>
            </a>
          </div>

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button
              type="button"
              class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="flex-1 md:flex md:items-center md:justify-between">
          <div class="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
            <!-- <NuxtLink
              to="/articles"
              class="flex items-center space-x-2 px-2 py-1 mx-2 mt-2 text-sm font-medium transition-colors duration-200 transform rounded-md md:mt-0 text-gray-600 hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              Articles
            </NuxtLink> -->
            <!-- <NuxtLink
              to="/tips"
              class="flex items-center space-x-2 px-2 py-1 mx-2 mt-2 text-sm font-medium transition-colors duration-200 transform rounded-md md:mt-0 text-gray-600 hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              Tips
            </NuxtLink> -->
            <NuxtLink
              to="/stars"
              class="flex items-center space-x-2 px-2 py-1 mx-2 mt-2 text-sm font-medium transition-colors duration-200 transform rounded-md md:mt-0 text-gray-600 hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <span>Stars</span>
            </NuxtLink>
            <NuxtLink
              to="/packages"
              class="flex items-center space-x-2 px-2 py-1 mx-2 mt-2 text-sm font-medium transition-colors duration-200 transform rounded-md md:mt-0 text-gray-600 hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
              <span>Packages</span>
            </NuxtLink>
            <NuxtLink
              to="/jobs"
              class="flex items-center space-x-2 px-2 py-1 mx-2 mt-2 text-sm font-medium transition-colors duration-200 transform rounded-md md:mt-0 text-gray-600 hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <span>Jobs</span>
            </NuxtLink>
          </div>

          <!-- <div class="flex items-center mt-4 md:mt-0">
            <button type="button" class="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
              <div class="w-8 h-8 overflow-hidden border-gray-400 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  class="object-cover w-full h-full"
                  alt="avatar"
                />
              </div>

              <h3 class="mx-2 text-sm font-medium text-gray-600 dark:text-gray-200 md:hidden">Khatab wedaa</h3>
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </nav>
</template>
