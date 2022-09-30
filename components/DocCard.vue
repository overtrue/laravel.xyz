<template>
  <nuxt-link :to="doc.url">
    <content-card class="flex gap-6">
      <div class="grid w-12 h-12 p-2 rounded place-content-center" :class="doc.color">
        <img v-if="doc.logo_url" :src="doc.logo_url" :alt="doc.name" class="w-6 h-6" />
        <div v-else class="w-6 h-6 bg-white bg-opacity-75 rounded-full"></div>
      </div>
      <div>
        <div class="font-medium dark:text-neutral-300">{{ doc.name }}</div>
        <div class="h-12 text-sm text-gray-500">{{ doc.introduction }}</div>
      </div>
    </content-card>
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
