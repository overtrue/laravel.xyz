<template>
  <div class="mt-8 space-y-6">
    <header class="space-y-4">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl mb-0 text-gray-700 dark:text-gray-300">扩展包</h1>
        <the-link-button href="https://github.com/overtrue/laravel.xyz/edit/master/content/packages.json" class="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>提议更多扩展包</span>
        </the-link-button>
      </div>
      <p class="text-gray-500 dark:text-gray-500">一些开源的让你更方便创建Laravel应用的库或者组件。</p>
    </header>
    <div class="flex gap-6 items-start">
      <card class="rounded-lg p-6 shadow w-64">
        <topic-selector v-model="topic" />
      </card>
      <div class="gap-6 flex-1 grid grid-cols-1 xl:grid-cols-2">
        <package-card v-for="repo of filteredRepos" :repo="repo" :key="repo.name"></package-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topic: null,
      repos: [],
    }
  },
  methods: {
    async fetchRepos() {
      const { body } = await queryContent('/compiled/packages').findOne()
      this.repos = body
    },
  },
  created() {
    this.fetchRepos()
  },
  computed: {
    filteredRepos() {
      if (!this.topic) {
        return this.repos
      }
      return this.repos.filter((repo) => repo.topics.includes(this.topic))
    },
  },
}
</script>
