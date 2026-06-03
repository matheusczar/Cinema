// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Aqui você registra os módulos
  modules: [
    '@nuxtjs/supabase'
  ],

  // Aqui você configura o Supabase
  supabase: {
    redirect: false
  },

  // Como seu código está na pasta app, mantenha isso:
  srcDir: 'app/'
})

