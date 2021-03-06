var vv = require('drainpipe'),
    less = require('gulp-less'),
    karma = require('gulp-karma'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    pathJoin = require('path').join,
    del = require('del'),
    gulp = require('gulp'),
    watch = gulp.watch.bind(gulp),
    task = gulp.task.bind(gulp),
    src = gulp.src.bind(gulp),
    dest = gulp.dest.bind(gulp)


var scripts = {
  vendor: [
    'bower_components/keymage/keymage.js',
    'bower_components/ace-builds/src/ace.js',
    'bower_components/ace-builds/src/mode-javascript.js',
    'bower_components/ace-builds/src/theme-monokai.js',
    'bower_components/gibberish-dsp/build/gibberish.js',
    'bower_components/sig-js/sig.js',
    'bower_components/drainpipe/drainpipe.js',
    'bower_components/wires-js/wires.js',
    'bower_components/museq/museq.js',
    'bower_components/motif-js/motif.js',
    'bower_components/warped/warped.js'
  ],
  src: [
    'src/scripts/index.js',
    'src/scripts/**/*.js'
  ]
}


task('default', ['build', 'test'])
task('build', ['markup', 'styles', 'scripts'])
task('scripts', ['scripts:vendor', 'scripts:src'])
task('markup', ['markup:clean', 'markup:build'])


task('watch', function() {
  watch(scripts.vendor, ['scripts:vendor', 'test'])
  watch(scripts.src, ['scripts:src', 'test'])
  watch('src/markup/**/*.html', ['markup'])
  watch('src/styles/**/*.less', ['styles'])
  watch('tests/**/*.test.js', ['test'])
})


task('scripts:src', function() {
  return vv(scripts.src)
    (src)
    (pipe, concat('permutation.js'))
    (pipe, uglify())
    (pipe, rename('permutation.min.js'))
    (pipe, dest('build/static'))
    ()
})


task('scripts:vendor', function() {
  return vv(scripts.vendor)
    (src)
    (pipe, concat('permutation-vendor.js'))
    (pipe, uglify())
    (pipe, rename('permutation-vendor.min.js'))
    (pipe, dest('build/static'))
    ()
})


task('styles', function() {
  return vv('src/styles/index.less')
    (src)
    (pipe, less())
    (pipe, cssmin())
    (pipe, rename('permutation.min.css'))
    (pipe, dest('build/static'))
    ()
})


task('markup:clean', function(done) {
  del('build/**/*.html', done)
})


task('markup:build', function() {
  return vv('src/markup/**/*.html')
    (src)
    (pipe, dest('build/'))
    ()
})


task('test', function() {
  return vv(cat(
      scripts.vendor,
      scripts.src,
      ['tests/init.js',
       'tests/**/*.test.js']))
    (src)
    (pipe, karma({
      action: 'run',
      reporters: ['mocha'],
      browsers: ['Chrome'],
      frameworks: ['mocha', 'chai']
    }))
    ()
})


process.env.CHROME_BIN = pathJoin(
  __dirname, 'node_modules/.bin/run-headless-chromium')


function pipe(s, t) {
  return s.pipe(t).on('error', onError)
}


function onError(e) {
  console.error(e.toString())
  this.emit('end')
}


function cat() {
  return Array.prototype.concat.apply([], arguments)
}
