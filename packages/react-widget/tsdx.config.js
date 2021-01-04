const replace = require('@rollup/plugin-replace')
const version = require('./package.json').version

const expressions = replace({
	__VERSION__: `"${version}"`,
})

module.exports = {
	rollup(config, _options) {
		config.plugins.unshift(expressions)
		return config
	},
}
