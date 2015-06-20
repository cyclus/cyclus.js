/**
 * Created by yarden on 6/18/15.
 */

global.window = window;
global.document = window.document;
global.navigator = window.navigator;

requirejs.config({
  baseUrl: '.',
  config: {
    es6: {
      resolveModuleSource: function(source) {
        return 'es6!'+source;
      }
    }
  },
  paths: {
    lib: '../bower_components',
    es6: '../node_modules/requirejs-babel/es6',
    babel: '../node_modules/requirejs-babel/babel-4.6.6.min'
  }
});

require(['cyclus']);