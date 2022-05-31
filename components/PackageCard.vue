<template>
  <div class="flex flex-col rounded-lg shadow bg-white dark:bg-gray-800 p-6 hover:shadow-lg dark:hover:bg-black space-y-4">
    <div class="space-y-2 flex-1">
      <div class="flex items-center justify-between">
        <NuxtLink class="font-semibold text-gray-800 dark:text-gray-300 flex-1" :to="repo.html_url">{{ repo.full_name }}</NuxtLink>
        <div class="flex items-center justify-evenly">
          <div class="flex items-center space-x-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <span>{{ repo.stargazers_count }}</span>
          </div>
        </div>
      </div>
      <NuxtLink class="block text-gray-600 dark:text-gray-500 line-clamp-2" :to="repo.html_url">{{ $emoji.replace_colons(repo.description) }}</NuxtLink>
    </div>
    <div class="flex items-center gap-4 text-sm text-gray-400 dark:text-gray-500">
      <NuxtLink class="text-center cursor-pointer inline-flex items-center space-x-2" :to="repo.owner.html_url">
        <img :src="repo.owner.avatar_url" alt="" class="rounded-full h-6 w-6" />
        <h5 class="text-gray-700 dark:text-gray-400">{{ repo.owner.login }}</h5>
      </NuxtLink>
      <div class="flex items-center gap-1"><span class="block rounded-full h-3 w-3 border dark:border-gray-600"></span>{{ repo.language }}</div>
      <nuxt-link :to="repo.html_url" class="ml-auto">
        <time :datetime="repo.updated_at" :title="repo.updated_at"> {{ $dayjs().to(repo.updated_at) }}更新 </time>
      </nuxt-link>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },
}
</script>
