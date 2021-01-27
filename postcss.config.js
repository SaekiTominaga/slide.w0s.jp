module.exports = (ctx) => ({
	map: ctx.options.map,
	plugins: {
		'postcss-nesting': {},
		cssnano: {
			preset: [
				'default',
				{
					minifySelectors: false,
				},
			],
		},
	},
});
