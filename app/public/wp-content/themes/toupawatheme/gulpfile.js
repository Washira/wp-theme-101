/* eslint-disable no-undef */
'use strict'

const gulp = require('gulp')
const rename = require('gulp-rename')
const header = require('gulp-header')
const terser = require('gulp-terser')
const concat = require('gulp-concat')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const livereload = require('gulp-livereload')
const cleanCSS = require('gulp-clean-css')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')

const banner = [
  '/*',
  'Theme Name: Toupawa',
  'Theme URI: https://wordpress.org/themes/twentytwenty/',
  'Author: the WordPress team',
  'Author URI: https://wordpress.org/',
  'Description: Our default theme for 2020 is designed to take full advantage of the flexibility of the block editor. Organizations and businesses have the ability to create dynamic landing pages with endless layouts using the group and column blocks. The centered content column and fine-tuned typography also makes it perfect for traditional blogs. Complete editor styles give you a good idea of what your content will look like, even before you publish. You can give your site a personal touch by changing the background colors and the accent color in the Customizer. The colors of all elements on your site are automatically calculated based on the colors you pick, ensuring a high, accessible color contrast for your visitors.',
  'Tags: blog, one-column, custom-background, custom-colors, custom-logo, custom-menu, editor-style, featured-images, footer-widgets, full-width-template, rtl-language-support, sticky-post, theme-options, threaded-comments, translation-ready, block-styles, wide-blocks, accessibility-ready',
  'Version: 1.0',
  'Requires at least: 6.4',
  'Tested up to: 6.4',
  'Requires PHP: 7.0',
  'License: GNU General Public License v2 or later',
  'License URI: http://www.gnu.org/licenses/gpl-2.0.html',
  'Text Domain: twentytwenty',
  'This theme, like WordPress, is licensed under the GPL.',
  '*/',
].join('\n')

/**
 * Task - styles
 * transform all scss/sass files to style.css
 */
const styles = () =>
  gulp
    .src(['./scss/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename('style.css'))
    .pipe(cleanCSS())
    .pipe(header(banner))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./'))
    .pipe(livereload())

/**
 * Task - scripts
 * compiling all es6 JavaScript syntax with babel
 * save to `compiled.js`
 */
const scripts = () =>
  gulp
    .src('./js/main.js')
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(
      terser({
        compress: {
          ecma: 2015,
        },
        ecma: 2015,
        output: {
          comments: 'some',
          beautify: false,
        },
      })
    )
    .pipe(rename('compiled.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./js/'))
    .pipe(livereload())

/**
 * Task - Vendor Styles
 * Add your vendor stylesheet files here
 *** eg. bootstrap, slider or lightbox
 */
const vendorStyles = () =>
  gulp
    .src(
      [
        // './node_modules/bootstrap/dist/css/bootstrap.min.css'
      ],
      { allowEmpty: true }
    )
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./css/vendor'))

/**
 * Task - Concatenate all vendor's files
 * merge them to vendor.js
 */
const vendorScripts = () =>
  gulp
    .src(
      [
        './js/vendor/modernizr-3.6.0.min.js',
        // './node_modules/bootstrap/dist/js/bootstrap.min.js',
      ],
      { allowEmpty: true }
    )
    .pipe(
      concat('vendor.js', {
        newLine: ';',
      })
    )
    .pipe(gulp.dest('./js/vendor'))

/**
 * Task - images
 * Compress all image in /img/ folder
 * including png, gif, jpg and svg.
 */
const images = () =>
  gulp
    .src(['./img/*.{gif,png,jpg,svg}'])
    .pipe(
      imagemin([
        imagemin.gifsicle({
          interlaced: true,
          optimizationLevel: 3,
        }), // maximum compress
        imagemin.mozjpeg({
          quality: 70,
          progressive: true,
        }), // 0 = worst, 100 = best
        imagemin.optipng({
          optimizationLevel: 5,
        }), // 7 = maxmimum
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: true,
            },
            {
              cleanupIDs: false,
            },
          ],
        }),
      ])
    )
    .pipe(gulp.dest('./img'))

/**
 * Task - Watch php files changed
 * if changed, trigger livereload to reload browser
 */
const reloadPHP = () => gulp.src('.', { allowEmpty: true }).pipe(livereload())

const watch = () => {
  livereload.listen({ start: true })
  gulp.watch(['./scss/**/*.scss'], gulp.series('styles'))
  gulp.watch(['./js/main.js'], gulp.series('scripts'))
  gulp.watch(['./*.php', './**/*.php'], reloadPHP)
}

exports.styles = styles
exports.vendorStyles = vendorStyles

exports.scripts = scripts
exports.vendorScripts = vendorScripts

exports.images = images
exports.reloadPHP = reloadPHP
exports.watch = watch

const vendor = gulp.series(images, vendorStyles, vendorScripts)
const dev = gulp.series(styles, scripts, watch)

exports.vendor = vendor
exports.dev = dev
exports.default = dev
