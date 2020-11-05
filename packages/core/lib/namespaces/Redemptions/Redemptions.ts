import { Redemptions } from './types'
import type { RequestController } from 'lib/controllers'
import type { Promotions } from 'lib/namespaces/Promotions/Promotions'

class Redemptions {
	/** @internal */
	constructor(private client: RequestController, public promotions: Promotions) {}
	create(code: string, params: any): any {}
}

export { Redemptions }
