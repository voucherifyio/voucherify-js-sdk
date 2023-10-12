import { Category } from './Categories'
import { DeepPartial, Required } from 'utility-types'

// 0 level
export interface PromotionsStacksListInCampaignResponseBody {
	object: 'list'
	data_ref: 'data'
	data: PromotionStack[]
	total: number
}

export interface PromotionsStacksListResponseBody {
	object: 'list'
	data_ref: 'data'
	data: PromotionStack[]
	total: number
}

export interface PromotionsStacksListRequestQuery {
	limit?: number
	page?: number
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at' | 'name' | '-name'
	created_at?: {
		before?: string
		after?: string
	}
	updated_at?: {
		before?: string
		after?: string
	}
}

export type PromotionsStacksGetResponseBody = PromotionStack

export type PromotionsStacksUpdateRequestBody = DeepPartial<PromotionStackBase> & { category_id?: string }

export type PromotionsStacksUpdateResponseBody = Required<PromotionStack, 'updated_at'>

export type PromotionsStacksCreateInCampaignRequestBody = PromotionStackBase & { category_id?: string }
export type PromotionsStacksCreateInCampaignResponseBody = PromotionStack

// domain types
export interface PromotionStackBase {
	name: string
	tiers: {
		ids: string[] // min 1
		hierarchy_mode?: 'MANUAL'
	}
}

export type PromotionStack = PromotionStackBase & {
	id: string
	created_at: string
	updated_at?: string
	campaign_id: string
	object: 'promotion_stack'
	category_id: string | null
	categories: Category[]
}
