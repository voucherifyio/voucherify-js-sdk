export interface ListProductCollectionsParameters {
	limit?: number
	page?: number
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
}

export interface ListProductCollections {
	object: 'list'
	data_ref: 'data'
	data: ProductCollectionsObject[]
	total: number
}

export type ProductCollectionsObject = ProductCollectionsStaticObject | ProductCollectionsAutoUpdateObject

interface ProductCollectionsStaticObject {
	id: string
	name: string
	type: 'AUTO_UPDATE' | 'STATIC'
	products: { id: string; object: 'product' }[]
	created_at: string
	updated_at: string
	object: 'products_collection'
}

interface ProductCollectionsAutoUpdateObject {
	id: string
	name: string
	type: 'AUTO_UPDATE' | 'STATIC'
	filter: Record<string, any>
	created_at: string
	updated_at: string
	object: 'products_collection'
}
