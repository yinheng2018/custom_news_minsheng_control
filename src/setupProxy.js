const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/monet/studio/api', {
    target: 'http://localhost:8888',
    secure: false,
    changeOrigin: true,
    headers: {
      Host: '',
      Connection: 'keep-alive'
    },
    pathRewrite: {
      '^/monet/studio/api': '/monet/studio/api'
    }
  }));
};
