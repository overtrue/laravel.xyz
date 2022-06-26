<template>
  <div class="rounded-lg shadow bg-white dark:bg-neutral-800 p-6 hover:shadow-lg dark:hover:bg-black relative">
    <a class="h-full cursor-pointer flex flex-col justify-between space-y-2" :href="`/tips/${tip.id}`">
      <h2 class="text-2xl line-clamp-2 h-16 text-gray-700 dark:text-gray-300">{{ tip.title }}</h2>
      <article class="flex-1 text-gray-400 line-clamp-3 overflow-hidden" v-html="markdownContents" />

      <div class="flex items-center justify-between align-bottom">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 overflow-hidden border-gray-400 rounded-full">
            <img src="https://avatars.githubusercontent.com/u/463230?v=4" class="object-cover w-full h-full" alt="avatar" />
          </div>
          <div class="dark:text-gray-300">Taylor Otwell</div>
        </div>
        <div>
          <span class="text-gray-500">{{ createdAt }}</span>
        </div>
      </div>
    </a>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    tip: {
      type: Object,
      required: true,
    },
  },
  computed: {
    markdownContents() {
      return this.tip.body //this.$markdown.render(this.tip.body)
    },
    createdAt() {
      return this.$dayjs(this.tip.created_at).format('YYYY-MM-DD')
    },
  },
}
</script>
