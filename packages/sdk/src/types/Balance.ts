export interface BalanceCreateParams {
	amount: number
	source_id?: string
	reason?: string
}

export interface BalanceCreateResponse {
	amount: number
	total: number
	balance: number
	type: string
	object: 'balance'
	related_object: {
		type: string
		id: string
	}
}
