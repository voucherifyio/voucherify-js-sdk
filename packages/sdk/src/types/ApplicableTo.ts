export type ApplicableToEffect = 'APPLY_TO_EVERY' | 'APPLY_TO_CHEAPEST' | 'APPLY_TO_MOST_EXPENSIVE'

export interface ApplicableTo {
	object: 'product' | 'sku' | 'products_collection'
	id: string
	source_id?: string
	strict: boolean
	price?: number
	price_formula?: number
	effect: ApplicableToEffect
}

export interface ApplicableToResultList {
	object: 'list'
	total: number
	data: ApplicableTo[]
}
