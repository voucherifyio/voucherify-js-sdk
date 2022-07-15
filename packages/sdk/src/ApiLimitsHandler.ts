import { RequestController } from './RequestController'
import { ApiLimits } from './types/ApiLimits'

export class ApiLimitsHandler {
	constructor(private readonly requestController: RequestController) {}

	private getApiLimitsFromController(): ApiLimits {
		return this.requestController.getApiLimits()
	}

	public getRateLimit(): number | boolean {
		return this.getApiLimitsFromController().rateLimit
	}

	public getRateLimitRemaining(): number | boolean {
		return this.getApiLimitsFromController().rateLimitRemaining
	}
}
