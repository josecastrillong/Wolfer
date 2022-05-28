/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    stream: require.resolve('stream-browserify'),
    zlib: require.resolve('browserify-zlib'),
    http: require.resolve('stream-http'),
    util: require.resolve('util/'),
    buffer: require.resolve('buffer/'),
    assert: require.resolve('assert/'),
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
   	new webpack.ProvidePlugin({
    	process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);
  return config;
};
