<template>
  <a :href="href" class="py-2 px-5 bg-white shadow-sm hover:bg-gray-100 rounded">{{ name }}</a>
</template>

<script lang="ts">
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
