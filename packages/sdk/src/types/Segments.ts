export type SegmentsCreate = SegmentsCreateStatic | SegmentsCreateAutoUpdate

export interface SegmentsCreateStatic {
	name: string
	type: 'static'
	customers?: string[]
}

export interface SegmentsCreateAutoUpdate {
	name: string
	type: 'auto-update'
	filter?: {
		junction?: 'AND' | 'OR'
		[filter_conditions: string]: any
	}
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
	type?: 'auto-update' | 'static'
	object: 'segment'
	initial_sync_status?: 'DONE' | 'IN_PROGRESS'
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
