export interface BalanceCreateParams {
	amount: number
}

export interface BalanceResponse {
	amount: number
	object: string
	type: string
	related_object: {
		type: string
		id: string
	}
}
