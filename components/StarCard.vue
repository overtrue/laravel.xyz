<template>
  <content-card class="relative">
    <NuxtLink class="block h-48 text-center cursor-pointer" :to="star.html_url">
      <img :src="star.avatar_url" alt="" class="w-32 h-32 mx-auto my-4 rounded-full" />
      <h3 class="m-0 text-xl font-semibold text-gray-700 dark:text-white">{{ star.name }}</h3>
      <p class="mt-2 overflow-hidden text-sm text-gray-500 line-clamp-2">{{ star.introduction || star.bio || '' }}</p>
    </NuxtLink>
    <div class="flex justify-center mt-8">
      <div class="flex space-x-1 text-gray-500">
        <a
          v-if="star.twitter_id"
          :href="`https://twitter.com/${star.twitter_id}`"
          class="flex items-center justify-center p-2 text-gray-400 rounded-full hover:bg-neutral-300 hover:text-gray-700 dark:hover:bg-neutral-800 dark:text-gray-500 hover:dark:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 icon"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"
            />
          </svg>
        </a>
        <a
          :href="star.html_url"
          class="flex items-center justify-center p-2 text-gray-500 rounded-full hover:bg-neutral-300 hover:text-gray-700 dark:hover:bg-neutral-800 dark:text-gray-500 hover:dark:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 icon"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
            />
          </svg>
        </a>
      </div>
    </div>
  </content-card>
</template>
<script lang="ts">
export default {
  props: {
    star: {
      type: Object,
      required: true,
    },
  },
}
</script>
