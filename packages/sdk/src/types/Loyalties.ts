import { DiscountAmount, DiscountPercent, DiscountUnit } from './Vouchers'
import { ValidationRulesCreateAssignmentResponse } from './ValidationRules'

interface LoyaltiesVoucher {
	code_config?: {
		length?: number
		charset?: string
		pattern?: string
	}
	type?: string
	is_referral_code?: boolean
	discount?: DiscountAmount | DiscountPercent | DiscountUnit
	loyalty_card?: {
		points: number
	}
	redemption?: {
		quantity?: number
	}
}

export interface LoyaltiesListParams {
	limit?: number
	page?: number
}

export interface LoyaltiesListResponse {
	object: 'list'
	total: number
	data_ref: 'campaigns'
	campaigns?: LoyaltiesCreateCampaignResponse[]
}

export interface LoyaltiesCreateCampaign {
	name: string
	start_date?: string
	expiration_date?: string
	type?: string
	vouchers_count?: number
	voucher?: {
		type?: string
		redemption?: {
			quantity?: number
		}
		loyalty_card?: {
			points?: number
			balance?: number
		}
		code_config?: {
			lenght?: number
			charset?: string
			pattern?: string
		}
	}
	metadata?: Record<string, any>
}

export interface LoyaltiesCreateCampaignResponse {
	id: string
	name: string
	campaign_type?: 'LOYALTY_PROGRAM'
	type: 'AUTO_UPDATE' | 'STATIC'
	category?: string
	auto_join?: boolean
	join_once?: boolean
	description: string
	start_date?: string
	validation_rules_assignments: {
		data?: ValidationRulesCreateAssignmentResponse[]
		object: 'list'
		total: number
		data_ref: 'data'
	}
	expiration_date?: string
	activity_duration_after_publishing?: string
	validity_timeframe?: {
		interval?: string
		duration?: string
	}
	validity_day_of_week?: number[]
	metadata?: Record<string, string>
	created_at: string
	vouchers_generation_status: 'DONE'
	active: boolean
	voucher?: LoyaltiesVoucher
	referral_program?: boolean
	use_voucher_metadata_schema?: boolean
	protected?: boolean
	vouchers_count?: number
	object: 'campaign'
}

export type LoyaltiesGetCampaignResponse = LoyaltiesCreateCampaignResponse

export interface LoyaltiesUpdateCampaign {
	id: string
	start_date?: string
	expiration_date?: string
	metadata?: Record<string, any>
	description?: string
	type?: string
}

export type LoyaltiesUpdateCampaignResponse = LoyaltiesCreateCampaignResponse

export interface LoyaltiesDeleteCampaign {
	id: string
	force?: boolean
}

export interface LoyaltiesListRewardAssignmentsParams {
	limit?: number
	page?: number
}

export interface LoyaltiesListRewardAssignmentsResponse {
	object: 'list'
	total: number
	data_ref: 'data'
	data: {
		id?: string
		reward_id?: string
		related_object_id?: string
		related_object_type?: string
		parameters: {
			loyalty?: {
				points: number
			}
		}
		created_at?: string
		updated_at?: string
		object: 'reward_assignment'
	}[]
}

export interface LoyaltiesCreateRewardAssignments {
	reward?: string
	parameters?: {
		points: number
	}
}

export interface LoyaltiesCreateRewardAssignmentResponse {
	id: string
	reward_id?: string
	related_object_id?: string
	related_object_type?: string
	parameters?: {
		loyalty?: {
			points: number
		}
	}
	created_at: string
	updated_at?: string
	object: 'reward_assignment'
}

export interface LoyaltiesUpdateRewardAssignment {
	id: string
	parameters?: {
		loyalty?: {
			points: number
		}
	}
}

export type LoyaltiesUpdateRewardAssignmentResponse = LoyaltiesCreateRewardAssignmentResponse

export interface LoyaltiesListEarningRulesParams {
	limit?: number
	page?: number
}

export interface LoyaltyFixed {
	type: 'FIXED'
	points?: number
}

export interface LoyaltyProportional {
	type: 'PROPORTIONAL'
	order?: {
		amount?: {
			every?: number
			points?: number
		}
	}
}
export interface LoyaltiesListEarningRulesResponse {
	object: 'list'
	total: number
	data_ref: string
	data: {
		id: string
		created_at: string
		updated_at?: string
		validation_rule_id?: string
		loyalty?: LoyaltyFixed | LoyaltyProportional | $FixMe
		segment?: {
			id: string
		}
		event?: 'customer.segment.entered' | 'order.paid' | string
		source?: {
			banner?: string
			object_id?: string
			object_type?: string
		}
		object: 'earning_rule'
		automation_id: string
	}[]
}

export interface LoyaltiesCreateEarningRule {
	event?: 'order.paid' | 'customer.segment.entered' | string
	validation_rule_id?: string
	loyalty?: LoyaltyProportional | LoyaltyFixed | $FixMe
	source?: { banner?: string }
	custom_event?: { schema_id?: string }
	segment?: { id?: string }
}

export interface LoyaltiesCreateEarningRuleResponse {
	id: string
	object: 'earning_rule'
	created_at: string
	validation_rule_id?: string
	source?: {
		banner?: string
		object_id?: string
		object_type?: string
	}
	loyalty?: {
		points: number
	}
	event?: string
}

export interface LoyaltiesUpdateEarningRule {
	id: string
	validation_rule_id?: string
	source?: {
		banner: string
	}
	loyalty?: {
		points: number
	}
}

export type LoyaltiesUpdateEarningRuleResponse = LoyaltiesCreateEarningRuleResponse

export interface LoyaltiesListMembersParams {
	limit?: number
	page?: number
	created_at?: {
		before?: string
		after?: string
	}
	updated_at?: {
		before?: string
		after?: string
	}
}

export interface LoyaltiesListMembersResponse {
	object: 'list'
	total: number
	data_ref: string
	vouchers?: {
		id: string
		code?: string
		campaign?: string
		campaign_id?: string
		category?: string
		type?: string
		discount?: DiscountUnit | DiscountAmount | DiscountPercent
		gift?: {
			amount?: number
			balance?: number
		}
		loyalty_card?: {
			points?: number
			balance?: number
		}
		start_date?: string
		expiration_date?: string
		validity_timeframe?: {
			interval?: string
			duration?: string
		}
		validity_day_of_week?: number[]
		publish?: {
			count?: number
			entries?: string[]
		}
		redemption?: {
			quantity?: number
			redeemed_quantity?: number
			redemption_entries?: string[]
		}
		active?: boolean
		additional_info?: string
		metadata?: Record<string, any>
		is_referral_code?: boolean
		holder_id?: string
		updated_at?: string
	}[]
}

export interface LoyaltiesCreateMember {
	voucher?: string
	channel?: string
	customer?: {
		id?: string
		name?: string
		email?: string
		metadata?: Record<string, string>
		description?: string
		source_id?: string
	}
	metadata?: Record<string, string>
}

export interface LoyaltiesCreateMemberResponse {
	id: string
	code?: string
	campaign?: string
	campaign_id?: string
	category?: string
	type?: string
	loyalty_card?: {
		points?: number
		balance?: number
	}
	start_date?: string
	expiration_date?: string
	validity_timeframe?: {
		interval?: string
		duration?: string
	}
	validity_day_of_week?: number[]
	publish?: {
		object?: string
		count?: number
		url?: string
	}
	redemption: {
		object?: string
		quantity?: number
		redeemed_quantity?: number
		url?: string
	}
	active?: boolean
	additional_info?: string
	metadata?: Record<string, any>
	is_referral_code?: boolean
	holder_id?: string
	updated_at?: string
}

export type LoyaltiesGetMemberResponse = LoyaltiesCreateMemberResponse

export interface LoyaltiesGetMemberActivitiesResponse {
	object?: string
	data_ref?: string
	total?: number
	activities?: {
		id?: string
		type?: string
		object?: string
		created_at?: string
		data?: {
			previous_attributes?: {
				loyalty_card?: {
					points?: number
					balance?: number
				}
			}
			object?: {
				loyalty_card?: {
					points?: number
					balance?: number
				}
				object?: string
			}
		}
	}[]
}

export interface LoyaltiesAddPoints {
	points: number
}

export interface LoyaltiesAddPointsResponse {
	points?: number
	total?: number
	balance?: number
	type?: string
	object?: string
	related_object?: {
		type?: string
		id?: string
	}
}

export interface LoyaltiesRedeemReward {
	reward?: {
		id?: string
	}
	metadata?: Record<string, any>
}

export interface LoyaltiesRedeemRewardResponse {
	id: string
	object?: string
	date: string
	customer_id?: string
	tracking_id?: string
	amount?: number
	reward: {
		id: string
		assignment_id?: string
		voucher: {
			id?: string
			code?: string
			campaign?: string
			campaign_id?: string
			category?: string
			type?: string
			discount?: DiscountUnit | DiscountAmount | DiscountPercent
			gift?: {
				amount?: number
				balance?: number
			}
			loyalty_card?: {
				points?: number
				balance?: number
			}
			start_date?: string
			expiration_date?: string
			validity_timeframe?: {
				interval?: string
				duration?: string
			}
			validity_day_of_week?: number[]
			publish?: {
				count?: number
				entries: $FixMe[]
			}
			redemption?: {
				quantity?: number
				redeemed_quantity?: number
				redemption_entries: $FixMe[]
			}
			active?: boolean
			additional_info?: string
			metadata: Record<string, any>
			assets?: {
				qr?: {
					id: string
					url: string
				}
				barcode?: {
					id: string
					url: string
				}
			}
			is_referral_code?: boolean
			holder_id?: string
			updated_at?: string
		}
		name?: string
		created_at?: string
		parameters: {
			automation_id?: string
			campaign: {
				id?: string
			}
		}
		type?: string
		object?: string
	}
	metadata?: Record<string, any>
	result?: string
	voucher: {
		id?: string
		code?: string
		campaign?: string
		campaign_id?: string
		category?: string
		type?: string
		discount?: DiscountUnit | DiscountAmount | DiscountPercent
		gift?: {
			amount: number
			balance: number
		}
		loyalty_card: {
			points?: number
			balance?: number
		}
		start_date?: string
		expiration_date?: string
		validity_timeframe?: {
			interval?: string
			duration?: string
		}
		validity_day_of_week?: number[]
		publish: {
			object?: string
			count?: number
			url?: string
		}
		redemption: {
			object?: string
			quantity: null
			redeemed_quantity?: number
			url?: string
			redeemed_points?: number
		}
		active: true
		additional_info?: string
		metadata?: Record<string, any>
		is_referral_code: false
		holder_id?: string
		updated_at?: string
		object?: string
	}
}
