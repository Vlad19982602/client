const webpack = require('webpack');
const path = require('path');

module.exports = function override(config) {
  console.log('Overriding Webpack config...');
  
  // Добавляем полифиллы
  config.resolve.fallback = {
    ...config.resolve.fallback,
    os: require.resolve('os-browserify/browser'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    stream: require.resolve('stream-browserify'),
    buffer: require.resolve('buffer/'),
    url: require.resolve('url/'),
    process: require.resolve('process/browser')
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser'
    })
  ]);

  // Настраиваем setupMiddlewares
  if (config.devServer) {
    config.devServer.setupMiddlewares = (middlewares, devServer) => {
      if (devServer) {
        devServer.app.get('/some/path', (req, res) => {
          res.json({ custom: 'response' });
        });
      }
      return middlewares;
    };
  }

  console.log('Webpack config overridden successfully.');
  return config;
};
