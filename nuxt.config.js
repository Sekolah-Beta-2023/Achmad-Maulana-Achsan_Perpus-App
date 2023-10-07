export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'perpus-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    // google font
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      'Roboto Slab': true,
      Inter: true,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://mzjeafajapudsfpztxcy.supabase.co/rest/v1/',
    headers: {
      apikey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16amVhZmFqYXB1ZHNmcHp0eGN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2MDU1NjQsImV4cCI6MjAxMjE4MTU2NH0.bY__Q9LhzVdl7JF6jhNfHWLy-FBprSAnRZPAbyCCBdA',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16amVhZmFqYXB1ZHNmcHp0eGN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2MDU1NjQsImV4cCI6MjAxMjE4MTU2NH0.bY__Q9LhzVdl7JF6jhNfHWLy-FBprSAnRZPAbyCCBdA',
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
