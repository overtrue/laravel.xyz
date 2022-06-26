<template>
  <nuxt-link :to="doc.url" class="flex gap-6 rounded-lg bg-white border dark:border-neutral-600 dark:bg-neutral-700 p-6 hover:shadow-lg dark:hover:bg-neutral-600">
    <div class="rounded p-2 w-12 h-12 grid place-content-center" :class="doc.color">
      <img v-if="doc.logo_url" :src="doc.logo_url" :alt="doc.name" class="h-6 w-6" />
      <div v-else class="rounded-full h-6 w-6 bg-opacity-75 bg-white"></div>
    </div>
    <div>
      <div class="dark:text-gray-300">{{ doc.name }}</div>
      <div class="text-gray-500 text-sm">{{ doc.introduction }}</div>
    </div>
  </nuxt-link>
</template>
<script lang="ts">
export default {
  props: {
    doc: {
      type: Object,
      required: true,
    },
  },
}
</script>
