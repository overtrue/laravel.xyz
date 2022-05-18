<template>
  <div class="flex flex-wrap">
    <the-tag :href="href + tag.id" v-for="tag of tags" :key="tag.id" :name="tag.name" class="m-2" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
  },
}
</script>
