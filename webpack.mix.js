const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    processCssUrls: false
});
<<<<<<< HEAD

if (!mix.inProduction()) {
    mix.webpackConfig({
            devtool: 'source-map'
        })
        .sourceMaps()
}

mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')

.browserSync({
    host: 'localhost',
    port: 3000,
    proxy: {
        target: 'http://www.mi6.test',
    }
});

=======
 
if (!mix.inProduction()) {
    mix.webpackConfig({
        devtool: 'source-map'
    })
    .sourceMaps()
}
 
mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
 
    .browserSync({
        host: 'localhost',
        port: 3000,
        proxy: {
            target: 'http://www.mi6.test:8080',
        }
    });
 
>>>>>>> bed9484acd2a4a93bc52d8b46ba37b0654ec3faf
// add versioning 
mix.version();