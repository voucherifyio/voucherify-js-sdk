const replace = require('@rollup/plugin-replace')
const version = require('./package.json').version

const expressions = replace({
	__VERSION__: `"${version}"`,
})

/**
 * Include the specified node_modules in the array to the bundle, if any.
 */
const BUNDLE_MODULES = []

module.exports = {
	rollup(config, _options) {
		const external = config.external

		/**
		 * If loaded through CDN, UMD will lookup for `global.[name]`
		 * Use this to alias external modules to UMD name of the module
		 */
		Object.assign(config.output.globals, {
			axios: 'axios',
		})

		config.external = id => {
			if (BUNDLE_MODULES.includes(id)) return false
			return external(id)
		}

		config.plugins.unshift(expressions)
		return config
	},
}
