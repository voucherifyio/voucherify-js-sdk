export interface CategoryObject {
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
	data: CategoryObject[]
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

export type CategoriesGetResponseBody = CategoryObject

export interface CategoriesUpdateRequestBody {
	name: string
	hierarchy: number
}

export interface CategoriesUpdateResponseBody extends CategoryObject {
	updated_at: string
}
