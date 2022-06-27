<template>
  <div class="mt-8 space-y-6">
    <header>
      <h1 class="text-3xl mb-0 text-gray-700 dark:text-gray-300 leading-relaxed">Tips</h1>
      <p class="text-gray-600 my-0 dark:text-neutral-400">Awesome tips for Laravel.</p>
    </header>

    <div class="flex flex-wrap -mx-2">
      <the-tags :tags="tags" href="/tips?tag="></the-tags>
    </div>

    <div class="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto">
      <tip-card v-for="tip of tips" :tip="tip" :key="tip.id"></tip-card>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const { data: tips } = await supabase.from('tips').select()
const { data: tags } = await supabase.from('tags').select()
</script>
