import { ValidationRules } from './types'
import { RequestController } from 'lib/controllers'

class ValidationRules {
	/** @internal */
	constructor(private client: RequestController) {}
	create(code: string, params: any): any {}
}

export { ValidationRules }
