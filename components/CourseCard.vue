<template>
  <div class="grid grid-cols-3 gap-6 rounded-lg bg-white border dark:border-neutral-600 dark:bg-neutral-700 p-6 hover:shadow-lg dark:hover:bg-neutral-600">
    <nuxt-link :to="course.url"><img :src="course.image_url" class="bg-white w-full object-cover" :alt="course.name" /></nuxt-link>
    <div class="col-span-2 space-y-4 flex flex-col">
      <nuxt-link :to="course.url" class="font-bold text-gray-300">{{ course.name }}</nuxt-link>
      <div class="text-sm text-gray-500">
        来自 <nuxt-link :to="course.author_url" class="text-indigo-900 dark:text-indigo-400">{{ course.author }}</nuxt-link>
      </div>
      <nuxt-link :to="course.url" class="block w-full flex-1 text-gray-500">
        {{ course.introduction }}
      </nuxt-link>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
}
</script>
