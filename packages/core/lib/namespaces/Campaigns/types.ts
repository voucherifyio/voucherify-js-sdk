export declare namespace Campaigns {
	namespace Create {
		export interface Body {
			name: string
			campaign_type?: string
			start_date?: string
			expiration_date?: string
		}
		namespace Body {
			interface Promotion {}
			interface Tiers {
				name?: string
				banner?: string
				action?: Record<string, any>
				metadata?: Record<string, any>
			}
		}

		export interface Response {
			name: string
			object: 'campaign'
			type: 'STATIC' | 'AUTO_UPDATE'
			description: string
			active: boolean
			metadata: Record<string, any>
			voucher: Response.Voucher
		}
		namespace Response {
			interface Voucher {
				code_config: CodeConfig
				type: string
				discount: Discount
				start_date: string
				expiration_date: string
				redemption: Redemption
			}
			interface CodeConfig {
				length: number
				charset: string
				prefix: string
				postfix: string
				pattern: string
			}
			interface Discount {
				type: string
				[other: string]: any
			}
			interface Redemption {
				quantity: number
				[other: string]: any
			}
		}
	}
}
