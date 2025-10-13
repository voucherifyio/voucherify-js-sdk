import { defineConfig } from 'tsup'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf8'))

// List modules to bundle instead of keeping them external
const BUNDLE_MODULES = []

const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})].filter(
	dep => !BUNDLE_MODULES.includes(dep),
)

export default defineConfig([
	// Configuration for bundled JavaScript files
	{
		entry: {
			voucherifysdk: 'src/index.ts',
		},
		outDir: 'dist',
		dts: false,
		sourcemap: true,
		clean: true,

		// Only Node.js formats since you use 'fs' module
		format: ['cjs', 'esm'],

		define: {
			__VERSION__: JSON.stringify(pkg.version),
		},

		external,

		esbuildOptions(options) {
			options.banner = options.banner || {}
			options.footer = options.footer || {}
			// Keep code readable
			options.minify = false
			options.minifyIdentifiers = false
			options.minifySyntax = false
			options.minifyWhitespace = false
		},

		minify: false,

		outExtension({ format }) {
			if (format === 'esm') return { js: '.esm.js' }
			if (format === 'cjs') return { js: '.cjs' }
			return { js: '.js' }
		},

		target: ['es2019'],
		splitting: false,
		platform: 'node',
		bundle: true,
		keepNames: true,

		onSuccess: async () => {
			console.log('✅ Build completed')
		},
	},

	// TypeScript declaration files
	{
		entry: ['src/**/*.ts'],
		outDir: 'dist',
		dts: {
			only: true,
		},
		format: ['cjs'], // Changed back to 'cjs' to generate .d.ts instead of .d.mts
		external,
		target: ['es2019'],
		bundle: false,

		onSuccess: async () => {
			console.log('✅ Declaration files generated')
		},
	},
])
