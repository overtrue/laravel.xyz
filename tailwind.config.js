module.exports = {
  mode: 'jit',
  content: [
    './app.vue',
    './assets/**/*.css',
    './components/*.{vue,js}',
    './components/**/*.{vue,js}',
    './pages/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  safelist: [
    'bg-gray-200',
    'dark:bg-gray-700',
    'text-gray-200',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
