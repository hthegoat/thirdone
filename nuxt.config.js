export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  googleAnalytics: {
    id: 'UA-135455452-6'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Harrison Kugler',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'Harrison Kugler',
        name: 'Harrison Kugler',
        content: 'Harrison Kugler personal project',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{
   
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-analytics'
],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [ '@nuxtjs/google-analytics' ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
