const path = require('path');

module.exports = {
  custom: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        src: path.resolve(__dirname, './src'),
      }
    }
  },
  override: (config) => {
    if (process.env.NODE_ENV === 'development') {
      require('@jkyu/monet-studio-reqeust')();
    }
    return config
  }
};
