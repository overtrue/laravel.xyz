<template>
  <nuxt-link :to="doc.url">
    <content-card class="flex gap-6">
      <div class="rounded p-2 w-12 h-12 grid place-content-center" :class="doc.color">
        <img v-if="doc.logo_url" :src="doc.logo_url" :alt="doc.name" class="h-6 w-6" />
        <div v-else class="rounded-full h-6 w-6 bg-opacity-75 bg-white"></div>
      </div>
      <div>
        <div class="dark:text-neutral-300 font-medium">{{ doc.name }}</div>
        <div class="text-neutral-400 text-sm">{{ doc.introduction }}</div>
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
