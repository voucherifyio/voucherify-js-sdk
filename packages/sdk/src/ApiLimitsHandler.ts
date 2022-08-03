import { RequestController } from './RequestController'

export class ApiLimitsHandler {
	constructor(private readonly requestController: RequestController) {}

	private getLastResponseHeadersFromController(): Record<string, string> {
		return this.requestController.getLastResponseHeaders()
	}

	public areLimitsAvailable(): boolean {
		return this.requestController.isLastReponseHeadersSet()
	}

	public getRateLimit(): number {
		const rateLimit = this.getLastResponseHeadersFromController()['x-rate-limit-limit'] ?? 0
		return parseInt(rateLimit, 10)
	}

	public getRateLimitRemaining(): number {
		const rateLimitRemaining = this.getLastResponseHeadersFromController()['x-rate-limit-remaining'] ?? 0
		return parseInt(rateLimitRemaining, 10)
	}

	public getRetryAfter(): number {
		const retryAfter = this.getLastResponseHeadersFromController()['retry-after'] ?? 0
		return parseInt(retryAfter, 10)
	}
}
