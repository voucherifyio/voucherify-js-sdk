import { defineConfig } from 'tsup'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf8'))

// List modules to bundle instead of keeping them external
const BUNDLE_MODULES = []

const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})].filter(
	dep => !BUNDLE_MODULES.includes(dep),
)

export default defineConfig({
	entry: {
		voucherifysdk: 'src/index.ts',
	},
	outDir: 'dist',
	dts: true,
	sourcemap: true,
	clean: true,

	// Build only Node-targeted formats; remove UMD to avoid esbuild error
	format: ['cjs', 'esm'],

	define: {
		__VERSION__: JSON.stringify(pkg.version),
	},

	external,

	esbuildOptions(options) {
		options.banner = options.banner || {}
		options.footer = options.footer || {}
	},

	minify: true,

	outExtension({ format }) {
		if (format === 'esm') return { js: '.esm.js' }
		if (format === 'cjs') return { js: '.cjs' }
		return { js: '.js' }
	},

	target: ['es2019'],
	splitting: false,
	platform: 'node',
})
