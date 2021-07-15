export interface AsyncActionsResponse {
	id: string
	type: string
	status: 'ENQUEUED' | 'IN_PROGRESS' | 'DONE' | 'FAILED'
	result: {
		message: string
		failed: string[]
	}
	created_at: string
	object: 'async_action'
}

export interface AsyncActionsListParams {
	limit?: number
	end_date?: string
}

export interface AsyncActionsListResponse {
	object: 'list'
	data_ref: 'async_actions'
	async_actions: Omit<AsyncActionsResponse, 'result'>[]
}

export type AsyncActionsGetResponse = AsyncActionsResponse
