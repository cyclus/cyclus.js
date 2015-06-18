/**
 * Created by yarden on 6/18/15.
 */

require.config({
  baseURL: '.',
  nodeRequire: requireNode,
  paths: {
    lib: '../node_modules',
    "promised-io": '../node_modules/promised-io',
    'pfs': '../node_modules/promised-io/fs',
    codemirror: '../node_modules/codemirror/lib/codemirror'
  }
});

require(['cyclus'], function(cyclus) {
  console.log('called cyclus');
});