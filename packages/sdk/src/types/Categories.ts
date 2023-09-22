export interface Category {
	id: string
	name: string
	hierarchy: number
	created_at: string
	object: 'category'
	updated_at?: string
}

export interface CategoriesListResponseBody {
	object: 'list'
	data_ref: 'data'
	data: Category[]
	total: number
}

export interface CategoriesCreateRequestBody {
	name: string
	hierarchy: number
}

export interface CategoriesCreateResponseBody {
	id: string
	name: string
	hierarchy: number
	created_at: string
	object: 'category'
}

export type CategoriesGetResponseBody = Category

export interface CategoriesUpdateRequestBody {
	name: string
	hierarchy: number
}

export interface CategoriesUpdateResponseBody extends Category {
	updated_at: string
}
