import { Orders } from './types'
import { RequestController } from 'lib/controllers'

class Orders {
	/** @internal */
	constructor(private client: RequestController) {}
	create(code: string, params: any): any {}
}

export { Orders }
