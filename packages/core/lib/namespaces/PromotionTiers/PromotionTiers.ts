import { PromotionTiers } from './types'
import { RequestController } from 'lib/controllers'

class PromotionTiers {
	/** @internal */
	constructor(private client: RequestController) {}
	create(code: string, params: any): any {}
}

export { PromotionTiers }
