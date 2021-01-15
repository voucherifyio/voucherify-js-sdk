export interface ExportResource {
	exported_object?: 'voucher' | 'redemption' | 'publication' | 'customer'
	parameters?: {
		order?: string
		fields?: string[]
		filters?: {
			junction?: string
			[filter_condition: string]: $FixMe
		}
	}
}

export interface ExportsCreateResponse {
	id?: string
	object?: 'export'
	created_at?: string
	status?: string
	channel?: string
	exported_object?: string
	parameters?: {
		fields?: string[]
		filters?: {
			junction?: string
			[filter_condition: string]: $FixMe
		}
	}
	result?: {
		url?: string
	}
}

export type ExportsGetResponse = ExportsCreateResponse
