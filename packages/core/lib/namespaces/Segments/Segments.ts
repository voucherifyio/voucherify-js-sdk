import { Segments } from './types'
import { RequestController } from 'lib/controllers'

class Segments {
	/** @internal */
	constructor(private client: RequestController) {}
	create(code: string, params: any): any {}
}

export { Segments }
