export interface SegmentsCreate {
	name: string
	type: 'static' | 'auto-update'
	filter?: {
		junction?: 'AND' | 'OR'
		[filter_conditions: string]: any
	}
	customers?: string[]
}

export interface SegmentsCreateResponse {
	id: string
	name: string
	created_at: string
	metadata?: Record<string, any>
	filter?: {
		junction?: 'AND' | 'OR'
		[filter_conditions: string]: any
	}
	type?: string
	object: 'segment'
}

export type SegmentsGetResponse = SegmentsCreateResponse

export interface SegmentsListResponse {
	object: 'list'
	total: number
	data_ref: 'data'
	data: {
		id: string
		name: string
		object: 'segment'
	}[]
}
