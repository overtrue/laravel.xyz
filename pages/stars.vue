<template>
  <div class="mt-8 space-y-6">
    <header>
      <h1 class="text-3xl mb-0 text-gray-700 dark:text-gray-300">Stars</h1>
      <p class="text-gray-600 my-0 dark:text-gray-500">It's because of them that Laravel has become so popular.</p>
    </header>
    <div class="flex flex-wrap gap-6 w-full">
      <star-card v-for="star of stars" :star="star" :key="star.id"></star-card>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const { data: stars } = await supabase.from('stars').select()
</script>
