const replace = require('@rollup/plugin-replace')
const copy = require('rollup-plugin-copy')
const version = require('./package.json').version

const expressions = replace({
	__VERSION__: `"${version}"`,
})
const copyAssets = copy({
	targets: [{ src: 'src/assets/voucherify.css', dest: 'dist' }],
})

/**
 * Include the following in the bundle
 */
const BUNDLE_MODULES = ['clsx']

module.exports = {
	rollup(config, _options) {
		const external = config.external

		Object.assign(config.output.globals, {
			'@voucherify/sdk': 'VoucherifySDK', // <<< UMD name
		})

		config.external = id => {
			if (BUNDLE_MODULES.includes(id)) return false
			return external(id)
		}

		config.plugins.unshift(copyAssets)
		config.plugins.unshift(expressions)

		return config
	},
}
