import { defineConfig } from 'tsup'
import { readFileSync, copyFileSync, mkdirSync } from 'fs'
import { resolve } from 'path'

const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf8'))

// Bundle these modules instead of keeping them external
const BUNDLE_MODULES = ['clsx']

// Make all deps external except ones we explicitly bundle
const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})].filter(
	dep => !BUNDLE_MODULES.includes(dep),
)

function copyAssets() {
	const src = resolve(__dirname, 'src/assets/voucherify.css')
	const destDir = resolve(__dirname, 'dist')
	const dest = resolve(destDir, 'voucherify.css')
	mkdirSync(destDir, { recursive: true })
	copyFileSync(src, dest)
}

export default defineConfig([
	// Configuration for bundled JavaScript files
	{
		entry: {
			voucherifywidget: 'src/index.tsx',
		},
		outDir: 'dist',
		dts: false,
		sourcemap: true,
		clean: true,

		// Build both CJS and ESM like in SDK
		format: ['cjs', 'esm'],
		globalName: 'VoucherifyWidget',

		esbuildOptions(options) {
			options.banner = options.banner || {}
			options.footer = options.footer || {}
			// Keep code readable like in SDK
			options.minify = false
			options.minifyIdentifiers = false
			options.minifySyntax = false
			options.minifyWhitespace = false
		},

		// Inject __VERSION__
		define: {
			__VERSION__: JSON.stringify(pkg.version),
		},

		external,

		// File copying after each successful build
		onSuccess: copyAssets,

		minify: false, // Changed to false like in SDK

		outExtension({ format }) {
			if (format === 'esm') return { js: '.esm.js' }
			if (format === 'cjs') return { js: '.cjs' }
			return { js: '.js' }
		},

		target: ['es2019'],
		splitting: false,
		platform: 'browser',
		bundle: true,
		keepNames: true,
	},

	// TypeScript declaration files
	{
		entry: ['src/**/*.ts', 'src/**/*.tsx'],
		outDir: 'dist',
		dts: {
			only: true,
		},
		format: ['cjs'], // Generate .d.ts instead of .d.mts
		external,
		target: ['es2019'],
		bundle: false,

		onSuccess: async () => {
			console.log('✅ Declaration files generated')
		},
	},
])
