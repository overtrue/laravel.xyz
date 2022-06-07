<template>
  <nuxt-link :to="doc.url" class="flex gap-6 rounded-lg shadow bg-white dark:bg-gray-800 p-6 hover:shadow-lg dark:hover:bg-black">
    <div class="rounded p-2 w-12 h-12 grid place-content-center" :class="doc.color">
      <img v-if="doc.logo_url" :src="doc.logo_url" :alt="doc.name" class="h-6 w-6" />
      <div v-else class="rounded-full h-6 w-6 bg-opacity-75 bg-white"></div>
    </div>
    <div>
      {{ doc.name }}
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
