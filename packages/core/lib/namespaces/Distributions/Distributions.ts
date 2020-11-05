import { Distributions } from './types'
import type { RequestController } from 'lib/controllers'
import type { Exports } from 'lib/namespaces/Exports/Exports'

class Distributions {
	/** @internal */
	constructor(private client: RequestController, public exports: Exports) {}
	create(code: string, params: any): any {}
}

export { Distributions }
