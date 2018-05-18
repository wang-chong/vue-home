module.exports = {
  '/api': {
    target: 'http://192.168.1.49:3000/api',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }
}
