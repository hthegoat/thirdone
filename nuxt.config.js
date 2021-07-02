export default {

  
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  googleAnalytics: {
    id: 'UA-135455452-6'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {


// On page load or when changing themes, best to add inline in `head` to avoid FOUC


    title: 'Harrison Kugler',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },


      {
        hid: 'Harrison Kugler',
        name: 'Harrison Kugler',
        content: 'Harrison Kugler personal project',
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
   
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css'],

  
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [ '@nuxtjs/google-analytics', '@nuxtjs/color-mode', '@nuxtjs/svg' ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
