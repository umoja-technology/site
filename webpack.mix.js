let mix = require('laravel-mix')
require('laravel-mix-purgecss')
let tailwindcss = require('tailwindcss')

mix.js('src/app.js', 'dist')
	.sass('src/app.scss', 'dist')
	.options({
		processCssUrls: false,
		postCss: [tailwindcss('tailwind.js')]
	})
	.purgeCss({
		enabled: true,
		glob: ['public'],
		folders: ['dist']
	})
