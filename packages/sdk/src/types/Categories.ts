export interface ListCategories {
	object: 'list'
	data_ref: 'data'
	data: CategoryObject[]
	total: number
}

export interface CategoryObject {
	//20_obj_category_object
	id: string
	name: string
	hierarchy?: number
	created_at: string
	updated_at?: string
	object: 'category'
}

export interface CreateCategory {
	//20_req_create_category
	name: string
	hierarchy?: number
}

export type ResponseCreateCategory = Omit<CategoryObject, 'updated_at'>
export type UpdateCategoriesCategoryId = Partial<CreateCategory> //20_req_update_categories_categoryId
