export interface ValidationError {
	code?: number
	key?: string
	message: string
	details?: string
	request_id?: string
}
