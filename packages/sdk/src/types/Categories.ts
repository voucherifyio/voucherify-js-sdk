export interface ListCategories {
	object: 'list'
	data_ref: 'data'
	data: CategoryObject[]
	total: number
}

export interface CategoryObject {
	id: string
	name: string
	hierarchy: number
	created_at: string
	updated_at?: string
	object: 'category'
}

export interface CreateCategory {
	name: string
	hierarchy: number
}

export type ResponseCreateCategory = Omit<CategoryObject, 'updated_at'>
export type ResponseUpdateCategory = Required<CategoryObject>
export type UpdateCategory = CreateCategory & { categoryId: string }
