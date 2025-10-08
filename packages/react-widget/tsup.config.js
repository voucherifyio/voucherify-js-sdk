import { defineConfig } from 'tsup'
import { readFileSync, copyFileSync, mkdirSync } from 'fs'
import { resolve } from 'path'

const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf8'))

// Bundle these modules instead of keeping them external (matches old BUNDLE_MODULES)
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

export default defineConfig({
	entry: {
		voucherifywidget: 'src/index.tsx',
	},
	outDir: 'dist',
	dts: true,
	sourcemap: true,
	clean: true,

	// Build only ESM to avoid esbuild UMD error
	format: ['esm'],
	globalName: 'VoucherifyWidget',

	// Define UMD globals (Rollup's output.globals equivalent)
	// Here we expose '@voucherify/sdk' as global VoucherifySDK in UMD builds.
	esbuildOptions(options) {
		options.banner = options.banner || {}
		options.footer = options.footer || {}
	},

	// Inject __VERSION__
	define: {
		__VERSION__: JSON.stringify(pkg.version),
	},

	external,

	// File copying after each successful build
	onSuccess: copyAssets,

	minify: true,

	outExtension({ format }) {
		if (format === 'esm') return { js: '.esm.js' }
		return { js: '.js' }
	},

	target: ['es2019'],
	splitting: false,
	platform: 'browser',
})
