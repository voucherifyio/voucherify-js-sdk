import * as T from './types/Qualifications'

import type { RequestController } from './RequestController'

export class Qualifications {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference/check-eligibility
	 */
	public checkEligibility(body: T.QualificationsCheckEligibilityRequestBody) {
		return this.client.post<T.QualificationsCheckEligibilityResponseBody>('/qualifications', body)
	}
}
