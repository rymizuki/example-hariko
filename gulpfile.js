const gulp      = require('gulp')
const webserver = require('gulp-webserver')
const aglio     = require('gulp-aglio')
const hariko    = require('hariko')

gulp.task('default', [
  'build'
])

gulp.task('start', [
  'build',
  'watch',
  'server',
])

gulp.task('build', [
  'aglio',
])

gulp.task('watch', () => {
  gulp.watch([
    './docs/api/**/*.md'
  ], ['aglio'])
})

gulp.task('aglio', () => {
  gulp.src([
    './docs/api/**/*.md',
  ])
    .pipe(aglio({ template: 'default' }))
    .pipe(gulp.dest('./static-docs'))
})

gulp.task('server', [
  'server:hariko',
  'server:aglio',
])

gulp.task('server:hariko', (done) => {
    hariko.start({
      host: '0.0.0.0',
      port: 8010,
      file: './docs/api/**/*.md',
      watch: true,
      output: '.hariko',
    }, done)
})

gulp.task('server:aglio', () => {
  gulp.src([
    'static-docs'
  ])
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8000,
      directoryListening: true,
    }))
})
