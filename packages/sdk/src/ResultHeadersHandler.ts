import { RequestController } from './RequestController'
import { ResultHeaders } from './types/ResultHeaders'

export class ResultHeadersHandler {
	constructor(private readonly requestController: RequestController) {}

	private getResultsHeadersFromController(): ResultHeaders {
		return this.requestController.getResultHeaders()
	}

	public getRateLimit(): number {
		return this.getResultsHeadersFromController().rateLimit
	}

	public getRateLimitRemaining(): number {
		return this.getResultsHeadersFromController().rateLimitRemaining
	}
}
