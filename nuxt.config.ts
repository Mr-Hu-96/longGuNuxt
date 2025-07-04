// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
     css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/main.scss" as *;'
        }
      }
    },
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@ant-design-vue/nuxt','@pinia/nuxt'],
  runtimeConfig: {
    public: {
      apiBase: 'https://api.longgu.com/api' // 可用 process.env.API_BASE 注入
    }
  },
})