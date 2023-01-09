export interface ValidationError {
	code?: number
	key?: number
	message: string
	details?: string
	request_id?: string
}
