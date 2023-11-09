export interface ListCategories {
	object: 'list'
	data_ref: 'data'
	data: CategoryObject[]
	total: number
	has_more: boolean
}

export type CategoryObject = ResponseCreateCategory & {
	updated_at?: string
}

export interface CreateCategory {
	name: string
	hierarchy: number
}

export interface ResponseCreateCategory {
	id: string
	name: string
	hierarchy: number
	created_at: string
	object: 'category'
}

export type ResponseUpdateCategory = ResponseCreateCategory & {
	updated_at: string
}

export type UpdateCategoryRequest = CreateCategory

// domain types

export type Category = {
	id: string
	name: string
	hierarchy: number
	created_at: string
	updated_at?: string
	object: 'category'
}

// 0-level types

export type CategoriesListRequestQuery = {
	limit?: number
	starting_after_id?: number
}
