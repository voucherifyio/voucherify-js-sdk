import { Exports } from './types'
import { RequestController } from 'lib/controllers'

class Exports {
	/** @internal */
	constructor(private client: RequestController) {}
	create(code: string, params: any): any {}
}

export { Exports }
