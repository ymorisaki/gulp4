const {
  series, src, dest, watch, parallel,
} = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const Fiber = require('fibers');

sass.compiler = require('sass');

function javascript() {
  return src([
    './src/ts/*.ts',
    '!./src/ts/import/**',
  ])
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(uglify())
    .pipe(dest('../js'));
}

function css() {
  return src('./src/scss/main.scss')
    .pipe(sass({ fiber: Fiber }))
    .pipe(postcss([
      autoprefixer({ grid: true }),
      cssnano(),
    ]))
    .pipe(dest('../css'));
}

exports.default = () => {
  watch(
    [
      './src/**/*.ts',
      './src/**/*.scss',
    ],
    { ignoreInitial: false },
    series(
      parallel(
        javascript,
        css,
      ),
    ),
  );
};
