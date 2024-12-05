export default {
  css: [
    '/nuxt3-form-project/assets/css/tailwind.css', // підключення глобальних стилів Tailwind
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
}
