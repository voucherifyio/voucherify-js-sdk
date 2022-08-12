export interface AsyncActionsResponse {
	id: string
	type: string
	status: string
	result: object
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

export interface AsyncActionCreateResponse {
	async_action_id: string
}

export type AsyncActionsGetResponse = AsyncActionsResponse
