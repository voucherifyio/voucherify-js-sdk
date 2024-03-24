import type { RequestController } from './RequestController'
import * as T from './types/Referrals'
import { encode } from './helpers'

class Referrals {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference/referrals-member-holders
	 * @see https://docs.voucherify.io/reference/referrals-member-holders-1
	 */
	public getMember(campaignId: string | null, memberId: string, params?: T.RedeemableHoldersListQueryParams) {
		return this.client.get<T.RedeemableHoldersListResponse>(
			campaignId
				? `/referrals/${encode(campaignId)}/members/${memberId}/holders`
				: `/referrals/members/${memberId}/holders`,
			params,
		)
	}
}

export { Referrals }
