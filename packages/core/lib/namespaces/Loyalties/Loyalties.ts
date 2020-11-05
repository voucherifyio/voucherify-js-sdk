import { Loyalties } from './types'
import { RequestController } from 'lib/controllers'

class Loyalties {
	/** @internal */
	constructor(private client: RequestController) {}
	create(code: string, params: any): any {}
}

export { Loyalties }
