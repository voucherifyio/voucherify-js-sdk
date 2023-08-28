export interface ListCategories {
	object: 'list'
	data_ref: 'data'
	data: CategoryObject[]
	total: number
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

export type UpdateCategoryRequest = CreateCategory & { categoryId: string }
