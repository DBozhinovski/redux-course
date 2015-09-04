var path = require('path');
var Builder = require('systemjs-builder');

var builder = new Builder();

builder.loadConfig('config.js')
.then(function() {
  builder.config({
  });
  return builder.buildSFX(
          './src/script/index.js',
          './dist/script/bundle.js',
          { minify: true, sourceMaps: 'inline'}
        );
});
