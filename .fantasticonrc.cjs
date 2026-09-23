const appDir = './src/app/'
const uiDir = './src/shared/'
// dirs must exist

module.exports = {
	name: 'icons',
	normalize: true,
	fontTypes: ['woff2', 'woff', 'ttf'],
	inputDir: uiDir + 'icons/', // (required)
	outputDir: appDir + 'fonts/', // (required)
	fontsUrl: '~@/app/fonts',
	assetTypes: ['scss'],
	templates: {
		scss: appDir + 'icons.scss.hbs',
	},
	pathOptions: {
		scss: appDir + 'styles/icons.scss',
	},
}
