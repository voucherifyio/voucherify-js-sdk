export declare namespace Balance {
	namespace Create {
		export interface Params {
			amount: number
		}
		export interface Response {
			amount: number
			object: 'balance'
			type: string
			related_object: Response.RelatedObject
		}
		namespace Response {
			interface RelatedObject {
				type: string
				id: string
			}
		}
	}
}
