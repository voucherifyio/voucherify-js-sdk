module.exports = {
	parser: '@typescript-eslint/parser',
	extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'],
	globals: {
		__DEV__: 'readonly',
		__VERSION__: 'readonly',
		self: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: '999.999.999',
		},
	},
	rules: {
		'@typescript-eslint/consistent-type-assertions': 'off',
		'@typescript-eslint/no-redeclare': 'off',
	},
	ignorePatterns: ['dist', 'node_modules'],
}
