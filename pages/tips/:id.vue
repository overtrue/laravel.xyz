<template>
  <div class="flex space-x-4 mt-8">
    <card class="rounded-lg shadow p-6 flex-1">
      <h1 class="font-semibold text-2xl line-clamp-2 text-gray-700 dark:text-gray-300">{{ tip.title }}</h1>

      <div class="my-6 flex items-center space-x-2">
        <div class="w-8 h-8 overflow-hidden border-gray-400 rounded-full">
          <img src="https://avatars.githubusercontent.com/u/463230?v=4" class="object-cover w-full h-full" alt="avatar" />
        </div>
        <div class="dark:text-gray-300">Taylor Otwell</div>
        <span class="text-gray-500">{{ createdAt }}</span>
      </div>

      <article class="text-gray-200 line-clamp-5 overflow-hidden h-52 mt-6" v-html="markdownContents" />
    </card>

    <card class="hidden md:block md:w-64 xl:w-80 rounded-lg shadow p-6">
      <NuxtLink class="block text-center h-52 cursor-pointer" :to="`/user/123`">
        <img src="https://avatars.githubusercontent.com/u/463230?v=4" alt="" class="rounded-full h-32 w-32 my-4 mx-auto" />
        <h3 class="text-xl text-gray-700 dark:text-gray-300 m-0">Taylor Otwell</h3>
        <p class="text-gray-500 line-clamp-3 text-sm overflow-hidden">The creator of Laravel.</p>
      </NuxtLink>
    </card>
  </div>
</template>
<script setup>
const $supabase = useSupabaseClient()
const $markdown = useNuxtApp().$markdown
const $dayjs = useNuxtApp().$dayjs
const $route = useRoute()

const { pending, data: tip } = await $supabase.from('tips').select().eq('id', $route.params.id).single()

const markdownContents = computed(() => {
  return $markdown.render(tip.body)
})
const createdAt = computed(() => {
  return $dayjs(tip.created_at).format('YYYY-MM-DD')
})
</script>
