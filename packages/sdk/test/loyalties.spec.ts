import { voucherifyClient as client } from './client'
import { generateRandomString } from './utils/generateRandomString'
import {
	LoyaltiesCreateCampaignResponse,
	LoyaltiesCreateMemberResponse,
	LoyaltiesAddPointsResponse,
	LoyaltiesListLoyaltyCardTransactionsResponse,
} from '@voucherify/sdk'
import { isoRegex } from './utils/isoRegex'

describe('Loyalties API', () => {
	let loyaltyCampaign: LoyaltiesCreateCampaignResponse,
		loyaltiesMember: LoyaltiesCreateMemberResponse,
		startBalance = 100,
		addPoints = 88
	it('Should create loyalties campaign and 1 member', async () => {
		loyaltyCampaign = await client.loyalties.create({
			name: generateRandomString(),
			voucher: {
				type: 'LOYALTY_CARD',
				loyalty_card: {
					points: startBalance,
				},
			},
			type: 'AUTO_UPDATE',
		})
		loyaltiesMember = await client.loyalties.createMember(loyaltyCampaign.id, {
			customer: { name: generateRandomString() },
		}) //member
	})

	it('Should add loyalties points to a member previously added', async () => {
		const response = await client.loyalties.addOrRemoveLoyaltyCardBalance(
			loyaltiesMember.code,
			{ points: addPoints },
			loyaltyCampaign.id,
		)
		expect(response).toEqual({
			points: addPoints,
			total: startBalance + addPoints,
			balance: startBalance + addPoints,
			type: 'loyalty_card',
			object: 'balance',
			related_object: { type: 'voucher', id: expect.stringMatching(/^v_.*/) },
			operation_type: 'MANUAL',
			// use as `type` for typescript check
		} as LoyaltiesAddPointsResponse)
	})

	it('Should list members activities', async () => {
		const memberCardTransactions = await client.loyalties.listLoyaltyCardTransactions(loyaltiesMember.code)
		expect(memberCardTransactions).toEqual({
			object: 'list',
			data_ref: 'data',
			data: [
				{
					id: expect.stringMatching(/^vtx_.*/),
					source_id: null,
					voucher_id: expect.stringMatching(/^v_.*/),
					campaign_id: expect.stringMatching(/^camp_.*/),
					source: expect.stringMatching(/^Node.js.*/),
					reason: null,
					type: 'POINTS_ADDITION',
					details: {
						balance: {
							type: 'loyalty_card',
							total: startBalance + addPoints,
							object: 'balance',
							points: addPoints,
							balance: startBalance + addPoints,
							related_object: { id: expect.stringMatching(/^v_.*/), type: 'voucher' },
						},
					},
					related_transaction_id: null,
					created_at: expect.stringMatching(isoRegex),
				},
			],
			has_more: false,
			// use as `type` for typescript check
		} as LoyaltiesListLoyaltyCardTransactionsResponse)
	})
})
