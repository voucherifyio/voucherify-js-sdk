import { Promotions } from './types'
import { RequestController } from 'lib/controllers'

class Promotions {
	/** @internal */
	constructor(private client: RequestController, private campaigns: any, public tiers: any) {}
	create(params: any): any {}
	validate(params: any): any {}
}

export { Promotions }
