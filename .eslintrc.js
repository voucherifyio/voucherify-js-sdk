module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: ['react-app', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
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
		'react-hooks/exhaustive-deps': 'off',
		'@typescript-eslint/consistent-type-assertions': 'off',
		'@typescript-eslint/no-redeclare': 'off',
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{ accessibility: 'explicit', overrides: { constructors: 'no-public' } },
		],
	},
	ignorePatterns: ['dist', 'node_modules', 'docs'],
}
