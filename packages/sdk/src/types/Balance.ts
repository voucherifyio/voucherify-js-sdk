export interface BalanceCreateParams {
	amount: number
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
