export type SegmentsCreate = SegmentsCreateStatic | SegmentsCreateAutoUpdate

export interface SegmentsCreateStatic {
	name: string
	type: 'static'
	customers?: string[]
}

export interface SegmentsCreateAutoUpdate {
	name: string
	type: 'auto-update'
	filter?: Record<string, any>
}

export interface SegmentsCreateResponse {
	id: string
	name: string
	created_at: string
	filter?: null | object
	type?: 'auto-update' | 'static'
	object: 'segment'
	initial_sync_status: 'DONE' | 'IN_PROGRESS'
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
