<template>
  <content-card class="flex flex-col dark:text-gray-400">
    <div class="flex-1 space-y-2">
      <div class="flex items-center justify-between">
        <NuxtLink class="flex-1 font-semibold text-gray-800 dark:text-white" :to="repo.html_url">{{ repo.full_name }}</NuxtLink>
        <div class="flex items-center justify-evenly">
          <div class="flex items-center space-x-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
      <NuxtLink class="block text-gray-600 dark:text-neutral-400 line-clamp-2" :to="repo.html_url">{{ $emoji.replace_colons(repo.description) }}</NuxtLink>
    </div>
    <div class="flex items-center gap-4 mt-4 text-sm">
      <NuxtLink class="inline-flex items-center space-x-2 text-center cursor-pointer" :to="repo.owner.html_url">
        <img :src="repo.owner.avatar_url" alt="" class="w-6 h-6 rounded-full" />
        <h5 class="text-gray-700 dark:text-gray-400">{{ repo.owner.login }}</h5>
      </NuxtLink>
      <div class="flex items-center gap-1">
        <span class="block w-3 h-3 border rounded-full dark:border-neutral-400" :style="`background-color:${repo.language_color}`"></span>{{ repo.language }}
      </div>
      <nuxt-link :to="repo.html_url" class="ml-auto text-xs text-gray-400 dark:text-neutral-400">
        <time :datetime="repo.updated_at" :title="repo.updated_at"> {{ $dayjs().to(repo.updated_at) }}更新 </time>
      </nuxt-link>
    </div>
  </content-card>
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
