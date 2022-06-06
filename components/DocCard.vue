<template>
  <nuxt-link :to="doc.url" class="flex gap-6 rounded-lg shadow bg-white dark:bg-gray-800 p-6 hover:shadow-lg dark:hover:bg-black">
    {{ doc.name }}
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
