export declare namespace Validations {
	namespace ValidateVoucher {
		export interface Params {
			customer?: Params.Customer
			order?: Params.Order
			metadata?: Record<string, any>
			gift?: Params.Gift
			session?: any
		}
		namespace Params {
			interface Customer {
				id?: string
				source_id?: string
				name?: string
				email?: string
				description?: string
				metadata?: string
			}
			interface OrderItem {
				source_id?: string
				related_product?: 'product' | 'sku'
				quantity?: number
				price?: number
				amount?: number
				product_id?: string
				sku_id?: string
			}
			interface Order {
				id?: string
				source_id?: string
				items?: OrderItem[]
				amount?: number
				metadata?: Record<string, any>
			}
			interface Gift {
				credits?: number
			}
			interface Session {
				type?: string
				key?: string
				ttl?: number
				ttl_unit?: 'MILLISECONDS' | 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS'
			}
		}

		export type Response = Response.GiftVoucher | Response.Invalid | Response.Session

		namespace Response {
			interface GiftVoucher {
				code: string
				valid: true
				gift: { amount: number }
				tracking_id: string
			}
			interface Invalid {
				code: string
				valid: false
				reason: string
				tracking_id: string
			}
			interface Session {
				code: string
				valid: true
				session: SessionOptions
			}
			interface SessionOptions {
				type: 'LOCK'
				key: string
				ttl: number
				ttl_unit: 'MILLISECONDS' | 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS'
			}
		}
	}
}
