module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/docs/'
      : '/',
      outputDir: '../docs'
  }