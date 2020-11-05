import { Consents } from './types'
import { RequestController } from 'lib/controllers'

class Consents {
	/** @internal */
	constructor(private client: RequestController) {}
	create(campaign: string): any {}
}

export { Consents }
