module.exports = {
  '/user': {
    target: 'http://192.168.1.49:3000/user',
    changeOrigin: true,
    pathRewrite: {
      '^/user': ''
    }
  }
}
