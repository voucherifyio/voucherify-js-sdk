import { Vouchers } from './types'
import type { RequestController } from 'lib/controllers'
import type { Balance } from 'lib/namespaces/Balance/Balance'

class Vouchers {
	/** @internal */
	constructor(private client: RequestController, public balance: Balance) {}
	create(code: string, params: any): any {}
}

export { Vouchers }
