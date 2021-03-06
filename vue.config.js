module.exports = {
  lintOnSave: false,

  configureWebpack: {
    resolve: {
      alias: {
        'vee-validate$': 'vee-validate/dist/vee-validate.minimal.esm.js'
      }
    }
  },

  pwa: {
    themeColor: '#1976d2'
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
