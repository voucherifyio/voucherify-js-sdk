import { RequestController } from './RequestController'

export class ApiLimitsHandler {
	constructor(private readonly requestController: RequestController) {}

	private getLastResponseHeadersFromController(): Record<string, string> {
		return this.requestController.getLastResponseHeaders()
	}

	private isLastResponseHeadersSet(): boolean {
		return this.requestController.isLastReponseHeadersSet()
	}

	public getRateLimit(): number | boolean {
		if (this.isLastResponseHeadersSet()) {
			const rateLimit = this.getLastResponseHeadersFromController()['x-rate-limit-limit'] ?? false
			if (rateLimit) {
				return parseInt(rateLimit, 10)
			}
		}

		return false
	}

	public getRateLimitRemaining(): number | boolean {
		if (this.isLastResponseHeadersSet()) {
			const rateLimitRemaining = this.getLastResponseHeadersFromController()['x-rate-limit-remaining'] ?? false
			if (rateLimitRemaining) {
				return parseInt(rateLimitRemaining, 10)
			}
		}

		return false
	}
}
