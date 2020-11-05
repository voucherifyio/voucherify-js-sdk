import { Customers } from './types'
import { RequestController } from 'lib/controllers'

class Customers {
	/** @internal */
	constructor(private client: RequestController) {}
	create(campaign: string): any {}
}

export { Customers }
