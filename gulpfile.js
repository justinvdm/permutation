var vv = require('drainpipe'),
    less = require('gulp-less'),
    karma = require('gulp-karma'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    del = require('del'),
    gulp = require('gulp'),
    watch = gulp.watch.bind(gulp),
    task = gulp.task.bind(gulp),
    src = gulp.src.bind(gulp),
    dest = gulp.dest.bind(gulp)


var scripts = [
  'bower_components/gibberish-dsp/build/gibberish.js',
  'bower_components/sig-js/sig.js',
  'bower_components/drainpipe/drainpipe.js',
  'bower_components/wires/wires.js',
  'bower_components/museq/museq.js',
  'bower_components/motif-js/motif.js',
  'bower_components/warped/warped.js',
  'src/scripts/index.js'
]


task('default', ['build', 'test'])


task('build', ['clean', 'markup', 'styles', 'scripts'])


task('watch', function() {
  watch('src/scripts/**/*.js', ['scripts', 'test'])
  watch('src/styles/**/*.less', ['styles'])
})


task('clean', function(done) {
  del('build/**/*', done)
})


task('scripts', function() {
  return vv(scripts)
    (cat)
    (src)
    (pipe, concat('permutation.js'))
    (pipe, uglify())
    (pipe, rename('permutation.min.js'))
    (pipe, dest('build/static'))
    ()
})

task('styles', function() {
  return vv('src/styles/permutation.less')
    (src)
    (pipe, less())
    (pipe, cssmin())
    (pipe, rename('permutation.min.css'))
    (pipe, dest('build/static'))
    ()
})


task('markup', function() {
  return vv('src/markup/**/*.html')
    (src)
    (pipe, dest('build/'))
    ()
})


task('test', function() {
  return vv([
      scripts,
      ['tests/**/*.test.js']])
    (cat)
    (src)
    (pipe, karma({
      action: 'run',
      reporters: ['mocha'],
      browsers: ['PhantomJS'],
      frameworks: ['mocha', 'chai']
    }))
    ()
})


function pipe(s, t) {
  return s.pipe(t).on('error', onError)
}


function onError(e) {
  console.error(e.toString())
  this.emit('end')
}


function cat(arrays) {
  return Array.prototype.concat.apply([], arrays)
}
