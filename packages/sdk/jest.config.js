module.exports = {
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
	testMatch: ['<rootDir>/**/*.(spec|test).{ts,tsx,js,jsx}'],
	testURL: 'http://localhost',
	testEnvironment: 'node',
	globals: {
		__VERSION__: require('./package.json').version,
		'ts-jest': {
			tsconfig: '<rootDir>/tsconfig.build.json',
			isolatedModules: true,
		},
	},
	moduleNameMapper: {
		'^@voucherify/sdk$': '<rootDir>/src/index.ts',
		axios: 'axios/dist/node/axios.cjs',
	},
}
