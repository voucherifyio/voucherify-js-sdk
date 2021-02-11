import { OrdersItem } from './Orders'
import { DiscountUnit, DiscountAmount, DiscountPercent } from './Vouchers'
import { SimpleCustomer } from './Customers'

export interface PromotionsCreate {
	name: string
	campaign_type: 'PROMOTION'
	start_date?: string
	expiration_date: string
	promotion: {
		tiers: {
			name: string
			banner: string
			action: {
				discount?: DiscountUnit | DiscountAmount | DiscountPercent
			}
		}[]
	}
}

export interface PromotionsValidateParams {
	customer?: Omit<SimpleCustomer, 'object'> & { description?: string }
	order?: {
		id?: string
		source_id?: string
		items?: OrdersItem[]
		amount?: number
		metadata?: Record<string, any>
	}
	metadata?: Record<string, any>
}

export interface PromotionsValidateResponse {
	valid?: boolean
	promotions?: {
		id?: string
		object?: 'promotion_tier'
		banner?: string
		discount?: DiscountUnit | DiscountAmount | DiscountPercent
		discount_amount?: number
	}[]
	tracking_id?: string
}
