import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  router: {
    options: {
      linkActiveClass: 'text-gray-800 dark:text-gray-200',
      linkExactActiveClass: 'text-gray-800 dark:text-gray-200',
    },
  },
  modules: ['@nuxt/content'],
  supabase: {
    // Options
  },
  css: ['@/assets/styles/styles.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
})
