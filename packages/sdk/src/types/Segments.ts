export interface SegmentsCreate {
	name: string
	type: 'static' | 'auto-update'
	filter?: {
		junction?: 'AND' | 'OR'
		[filter_conditions: string]: $FixMe
	}
	customers?: string[]
}

export interface SegmentsCreateResponse {
	id: string
	name: string
	created_at: string
	metadata?: $FixMe
	filter?: {
		junction?: 'AND' | 'OR'
		[filter_conditions: string]: $FixMe
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
