import { Rewards } from './types'
import { RequestController } from 'lib/controllers'

class Rewards {
	/** @internal */
	constructor(private client: RequestController) {}
	create(code: string, params: any): any {}
}

export { Rewards }
