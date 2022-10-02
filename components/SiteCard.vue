<template>
  <div>
    <nuxt-link :to="site.url" class="block space-y-4">
      <content-card>
        <div class="flex items-center justify-between gap-6">
          <div>
            <div class="font-semibold dark:text-white">{{ site.name }}</div>
            <a :href="site.url" class="text-sm text-neutral-500 dark:text-neutral-400" target="_blank">{{ site.url }}</a>
          </div>
          <div
            class="flex items-center justify-center w-20 h-20 p-4 bg-opacity-75 rounded-full bg-neutral-200 place-content-center"
            :style="site.logo_bg_color ? `background: ${site.logo_bg_color}` : '#fff'"
          >
            <img v-if="site.logo_url" :src="site.logo_url" :alt="site.name" class="object-scale-down" />
            <div v-else class="w-full h-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="h-24 mt-4 text-sm text-neutral-500 dark:text-neutral-400">{{ site.description }}</div>
        <div class="flex items-center gap-2" v-if="site.tags && site.tags.length">
          <div class="px-2 py-1 leading-4 text-white rounded bg-neutral-600" v-for="tag in site.tags" :key="tag">
            {{ tag }}
          </div>
        </div>
      </content-card>
    </nuxt-link>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    site: {
      type: Object,
      required: true,
    },
  },
}
</script>
