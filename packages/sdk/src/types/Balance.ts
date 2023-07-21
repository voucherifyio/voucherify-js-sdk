export interface BalanceCreateParams {
	//1_req_vouchers_code_balance
	amount: number
	reason?: string
	source_id?: string
}

export interface BalanceCreateResponse {
	//1_res_vouchers_code_balance
	amount?: number
	total?: number
	balance?: number
	type?: 'gift_voucher'
	object?: 'balance'
	related_object?: {
		type?: 'voucher'
		id?: string
	}
}
