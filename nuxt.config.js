export default {
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  
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
      
            {
              hid: 'description',
              name: 'description',
              content: 'Harrison Kugler Paid Social Expert',
            },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Harrison Kugler' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://harrisonkugler.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Harrison Kugler'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Harrison Kugler is an experienced marketing professional with over $500k managed for clients in three years.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://i.ibb.co/r2Rt78D/DSC0764-3.jpg'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://i.ibb.co/r2Rt78D/DSC0764-3.jpg'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Harrison Kugler'
      }, 
        // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@harrisonkugler' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://harrisonkugler.com'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Harrison Kugler'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Harrison Kugler is an experienced marketing professional with over $500k managed for clients in three years.'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://i.ibb.co/r2Rt78D/DSC0764-3.jpg'
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{
      src: 'vue-youtube/dist/vue-youtube.js'

    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css'],

  
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-youtube.js', '~/plugins/cohere-js.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss',],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [ '@nuxtjs/google-analytics', '@nuxtjs/color-mode', '@nuxtjs/svg', '@nuxt/content', '@tailwindcss/typography',],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
