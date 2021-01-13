export interface LoyaltiesListParams {
	limit?: number
	page?: number
}

export interface LoyaltiesListResponse {
	object?: 'list'
	total?: number
	data_ref?: 'campaigns'
	campaigns?: {
		name: string
		campaign_type?: string
		start_date?: string
		expiration_date?: string
		vouchers_count?: number
		object?: 'campaign'
		referral_program?: boolean
		voucher?: {
			type?: string
			is_referral_code?: boolean
			discount?: {
				type?: string
				effect?: string
				percent_off?: string
				amount_off?: number
			}
			redemption?: {
				quantity?: number
			}
			loyalty_card?: {
				points?: number
				balance?: number
			}
			gift?: {
				amount?: number
				balance?: number
			}
			code_config?: {
				lenght?: number
				charset?: string
				pattern?: string
			}
		}
		metadata?: Record<string, string>
	}[]
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

export interface LoyaltiesResponse {
	id?: string
	name?: string
	campaign_type?: string
	type?: string
	description?: string
	start_date?: string
	expiration_date?: string
	validity_timeframe?: string
	metadata?: Record<string, any>
	vouchers_count?: number
	vouchers_generation_status?: string
	active?: boolean
	voucher?: {
		code_config?: {
			charset?: string
			pattern?: string
		}
		type?: string
		is_referral_code?: boolean
		loyalty_card?: {
			points?: number
			balance?: number
		}
		start_date?: string
		redemption?: {
			quantity?: number
		}
	}
	validation_rules_assignments?: {
		object?: 'list'
		total?: number
		data_ref?: 'data'
		data?: any[]
	}
	referral_program?: boolean
	object?: 'campaign'
}

export interface LoyaltiesUpdateCampaign {
	id: string
	start_date?: string
	expiration_date?: string
	metadata?: Record<string, any>
	description?: string
	type?: string
}

export interface LoyaltiesDeleteCampaign {
	id: string
	force?: boolean
}

export interface LoyaltiesListRewardAssigmentsParams {
	limit?: number
	page?: number
}

export interface LoyaltiesListRewardAssigmentsResponse {
	object?: 'list'
	total?: number
	data_ref?: 'data'
	data: {
		id?: string
		reward_id?: string
		related_object_id?: string
		related_object_type?: string
		parameters: {
			loyalty?: {
				points?: number
			}
		}
		created_at?: string
		updated_at?: string
		object: 'reward_assignment'
	}[]
}

export interface LoyaltiesRewardAssigmentCreate {
	reward?: string
	parameters?: {
		points?: number
	}
}

export interface LoyaltiesRewardAssigmentResponse {
	id?: string
	reward_id?: string
	related_object_id?: string
	related_object_type?: string
	parameters?: {
		loyalty?: {
			points?: number
		}
	}
	created_at?: string
	updated_at?: string
	object: 'reward_assignment'
}

export interface LoyaltiesRewardAssigmentUpdate {
	id: string
	parameters?: {
		loyalty?: {
			points?: number
		}
	}
}

export interface LoyaltiesListEarningRules {
	limit?: number
	page?: number
}

export interface LoyaltiesCreateEarningRule {
	event?: 'order.paid' | 'customer.segment.entered' | string
	validation_rule_id?: string
	loyalty?: { points?: number }
	source?: { banner?: string }
	custom_event?: { schema_id?: string }
	segment?: { id?: string }
}

export interface LoyaltiesCreateEarningRuleResponse {
	id?: string
	object?: 'earning_rule'
	created_at?: string
	validation_rule_id?: string
	source?: {
		banner?: string
		object_id?: string
		object_type?: string
	}
	loyalty?: {
		points?: number
	}
	event?: string
}

export interface LoyaltiesUpdateEarningRule {
	id: string
	validation_rule_id?: string
	source?: {
		banner?: string
	}
	loyalty?: {
		points?: number
	}
}

export interface LoyaltiesListMembers {
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
	object?: 'list'
	total?: number
	data_ref?: string
	vouchers: {
		id?: string
		code?: string
		campaign?: string
		campaign_id?: string
		category?: string
		type?: string
		discount?: null
		gift?: null
		loyalty_card?: {
			points?: number
			balance?: number
		}
		start_date?: string
		expiration_date?: null
		validity_timeframe?: null
		validity_day_of_week?: null
		publish?: {
			count?: number
			entries?: null
		}
		redemption?: {
			quantity?: number
			redeemed_quantity?: number
			redemption_entries?: any[]
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

export interface LoyaltiesMemberResponse {
	id?: string
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
	validity_timeframe?: string
	validity_day_of_week?: string
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
	id?: string
	object?: string
	date?: string
	customer_id?: string
	tracking_id?: string
	amount?: number
	reward: {
		id?: string
		assignment_id?: string
		voucher: {
			id?: string
			code?: string
			campaign?: string
			campaign_id?: string
			category?: string
			type?: string
			discount: {
				type?: string
				percent_off?: number
				amount_off?: number
				unit_off?: number
				unit_type?: string
			}
			gift?: {
				amount: number
				balance: number
			}
			loyalty_card?: { points: number; balance: number }
			start_date?: string
			expiration_date?: string
			validity_timeframe?: string
			validity_day_of_week?: string
			publish?: {
				count?: number
				entries?: any[]
			}
			redemption?: {
				quantity?: number
				redeemed_quantity?: number
				redemption_entries?: any[]
			}
			active?: boolean
			additional_info?: string
			metadata: Record<string, any>
			assets?: {
				qr?: {
					id?: string
					url?: string
				}
				barcode?: {
					id?: string
					url?: string
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
	metadata: Record<string, any>
	result?: string
	voucher: {
		id?: string
		code?: string
		campaign?: string
		campaign_id?: string
		category?: string
		type?: string
		discount: {
			type?: string
			percent_off?: number
			amount_off?: number
			unit_off?: number
			unit_type?: string
		}
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
		validity_timeframe?: string
		validity_day_of_week?: string
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
