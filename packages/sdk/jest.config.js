module.exports = {
	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
	testMatch: ['<rootDir>/**/*.(spec|test).{ts,tsx,js,jsx}'],
	testURL: 'http://localhost',
	watchPlugins: [require.resolve('jest-watch-typeahead/filename'), require.resolve('jest-watch-typeahead/testname')],
	testEnvironment: 'node',
	globals: {
		__VERSION__: require('./package.json').version,
	},
	moduleNameMapper: {
		axios: 'axios/dist/node/axios.cjs',
	},
}
