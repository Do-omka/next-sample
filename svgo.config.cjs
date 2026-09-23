module.exports = {
	plugins: [
		{
			// set of built-in plugins enabled by default
			name: 'preset-default',
			params: {
				overrides: {
					// allow scaling
					removeViewBox: false,
					// removeUnknownsAndDefaults: false,
				},
			},
		},
		// allow scaling for Apple devices
		{
			name: 'addAttributesToSVGElement',
			params: {
				attributes: [{ preserveAspectRatio: 'none' }],
			},
		},
	],
}
