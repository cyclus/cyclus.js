var gulp = require('gulp');
var NodeWebkitBuilder = require('node-webkit-builder');

gulp.task('default', ['build']);

gulp.task('build', [], function(cb) {

  // Find out which node modules to include
  var modules = [];

  var node = require('./package.json')
  if (!!node.dependencies) {
    modules = Object.keys(node.dependencies)
      .filter(function (m) { return m != 'nodewebkit' })
      .map(function (m) { return './node_modules/' + m + '/**/*' });
  }

  var bower = require('./bower.json')
  if (!!bower.dependencies) {
    modules = modules.concat(Object.keys(bower.dependencies)
      .filter(function (m) { return m != 'nodewebkit' })
      .map(function (m) { return './bower_components/' + m + '/**/*' }));
  }
  // Which platforms should we build
  var options = ['osx', 'win', 'linux', 'osx32', 'osx64', 'win32', 'win64', 'linux32', 'linux64'];
  var platforms;

  if (process.argv.indexOf('--all') > -1) {
    platforms = ['osx', 'win', 'linux'];
  } else {
    platforms = options.filter(function (opt) {
      return process.argv.indexOf('--' + opt) > -1;
    }
    );
  }

  if (platforms.length == 0) {
    if (process.platform === 'darwin')      platforms.push(process.arch == 'x64' ? 'osx64' : 'osx32');
    else if (process.platform === 'win32')  platforms.push('win');
    else if (process.arch === 'ia32')       platforms.push('linux32');
    else if (process.arch === 'x64')        platforms.push('linux64');
  }

  // Initialize
  var nw = new NodeWebkitBuilder({
    files:         ['./package.json', './app/**/*'].concat(modules),
    version: '0.12.2',
    name: 'cyclusjs',
    cacheDir:      './dist/cache',
    buildDir:      './dist',
    platforms:     platforms,
    macIcns:       './app/assets/icons/cyclus.icns',
    //winIco:        './app/assets/icons/cyclus.ico',
  }
  );

  nw.on('log', function (msg) {
    // Ignore 'Zipping... messages
    if (msg.indexOf('Zipping') !== 0) console.log(msg)
  }
  );

  nw.build(function (err) {

    if (!!err) return console.error(err);

    // misc ops
  }
  )
});

