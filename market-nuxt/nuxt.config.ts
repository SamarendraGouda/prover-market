// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", '@wagmi/vue/nuxt'],
  css: ["@/assets/css/app.css", "@fontsource/poppins/400.css", '@fontsource/poppins/500.css', '@fontsource/poppins/600.css', '@fontsource/poppins/700.css'],
  tailwindcss: {
    exposeConfig: true,
  }
})