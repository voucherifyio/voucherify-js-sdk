import { Events } from './types'
import { RequestController } from 'lib/controllers'

class Events {
	/** @internal */
	constructor(private client: RequestController) {}
	create(code: string, params: any): any {}
}

export { Events }
