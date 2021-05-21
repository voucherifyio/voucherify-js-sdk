export interface ExportResource {
	exported_object: 'voucher' | 'redemption' | 'publication' | 'customer'
	parameters?: {
		order?: string
		fields?: string[]
		filters?: {
			junction?: 'AND' | 'OR'
			[filter_condition: string]: any
		}
	}
}

export interface ExportsCreateResponse {
	id: string
	object: 'export'
	created_at: string
	status: 'SCHEDULED' | 'IN_PROGRESS' | 'DONE' | 'ERROR'
	channel?: string
	exported_object: 'voucher' | 'redemption' | 'publication' | 'customer'
	parameters?: {
		fields?: string[]
		filters?: {
			junction?: string
			[filter_condition: string]: any
		}
	}
	result?: {
		url: string
	}
}

export type ExportsGetResponse = ExportsCreateResponse
