import { Products } from './types'
import { RequestController } from 'lib/controllers'

class Products {
	/** @internal */
	constructor(private client: RequestController) {}
	create(code: string, params: any): any {}
}

export { Products }
