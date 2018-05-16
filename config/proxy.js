module.exports = {
  '/user': {
    target: 'http://192.168.1.49:6666/user',
    changeOrigin: true,
    pathRewrite: {
      '^/user': ''
    }
  }
}
