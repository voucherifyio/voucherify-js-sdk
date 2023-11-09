export type ApplicableToEffect = 'APPLY_TO_EVERY' | 'APPLY_TO_CHEAPEST' | 'APPLY_TO_MOST_EXPENSIVE'

export interface ApplicableTo {
	object: 'product' | 'sku' | 'products_collection'
	id: string
	source_id?: string
	product_id?: string
	product_source_id?: string
	strict: boolean
	price?: number
	price_formula?: number
	effect: ApplicableToEffect
	quantity_limit?: number
	aggregated_quantity_limit?: number
	amount_limit?: number
	aggregated_amount_limit?: number
	order_item_indices?: number[]
}

export interface ApplicableToResultList {
	object: 'list'
	total: number
	data: ApplicableTo[]
	data_ref: 'data'
}

export type InapplicableToResultList = {
	data: InapplicableTo[]
	total: number
	object: 'list'
	data_ref: string
}

export type InapplicableTo = ApplicableTo
