// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css:[
    '~/assets/css/main.css',
  ],

  modules: ["@nuxtjs/tailwindcss", ["@nuxtjs/google-fonts",  {
    families: {
      Oswald: true,
      'Rubik+Moonrocks': true,
      Inter: [400, 700],
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      Inter: '200..700',
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700',
      }
    }
}]]
})