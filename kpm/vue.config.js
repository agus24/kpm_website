module.exports = {
  css: {
    requireModuleExtension: true
  },

    lintOnSave: false,
  
    publicPath: process.env.NODE_ENV === 'production'
    ? '/kpm_publish/'
    : '/'
}