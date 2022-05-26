<template>
  <div class="mt-8 space-y-6">
    <header>
      <h1 class="text-3xl mb-0 text-gray-700 dark:text-gray-300">Packages</h1>
      <p class="text-gray-600 my-0 dark:text-gray-500">It's because of them that Laravel has become so popular.</p>
    </header>
    <div class="space-y-6">
      <package-card v-for="repo of repos.body" :repo="repo" :key="repo.name"></package-card>
    </div>
  </div>
</template>
<script setup>
const { data: repos } = await useAsyncData('packages', () => queryContent('/compiled/packages').findOne())
</script>
