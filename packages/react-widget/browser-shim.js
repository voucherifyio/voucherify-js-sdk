// Browser shims for Node.js modules
export const fs = {
	default: {
		createReadStream: () => {
			throw new Error('fs.createReadStream is not available in browser environment')
		},
	},
}
