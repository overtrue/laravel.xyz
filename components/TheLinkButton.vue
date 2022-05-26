<template>
  <a :href="href" :class="classes" :type="type" :disabled="disabled">
    <slot></slot>
  </a>
</template>

<script lang="ts">
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
    href: {
      type: String,
      default: '#',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    pending: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'inline-flex': true,
        'items-center': true,
        'px-4': true,
        'py-2': true,
        'bg-indigo-800': true,
        'border': true,
        'border-transparent': true,
        'rounded-md': true,
        'font-semibold': true,
        'text-xs': true,
        'text-white': true,
        'uppercase': true,
        'tracking-widest': true,
        'hover:bg-indigo-700': true,
        'active:bg-indigo-900': true,
        'focus:outline-none': true,
        'focus:border-indigo-900': true,
        'focus:ring': true,
        'focus:ring-indigo-300': true,
        'disabled:opacity-25': true,
        'transition': true,
      }
    },
  },
}
</script>
