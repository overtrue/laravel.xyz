<template>
  <NuxtLink
    :to="to"
    class="flex items-center space-x-1.5 px-3 py-1 mx-1 mt-2 font-medium transition-colors duration-200 transform rounded md:mt-0 text-gray-600 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-200 hover:bg-neutral-200 dark:hover:bg-neutral-700"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
}
</script>
