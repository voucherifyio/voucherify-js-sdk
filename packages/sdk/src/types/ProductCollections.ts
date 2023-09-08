export type CreateProductCollection = CreateProductCollectionStatic | CreateProductCollectionAutoUpdate

export type CreateProductCollectionStaticProduct =
	| {
			id: string //skuId
			object: 'sku'
			product_id: string //productId
	  }
	| {
			id: string
			object: 'product'
	  }

export interface CreateProductCollectionStatic {
	type: 'STATIC'
	name: string
	products: CreateProductCollectionStaticProduct[]
}

export interface CreateProductCollectionAutoUpdate {
	type: 'AUTO_UPDATE'
	name: string
	filter: {
		junction: Junction
	} & Record<string, Record<FiltersCondition, any>>
}

export declare type Junction = 'and' | 'AND' | 'or' | 'OR'
export declare type FiltersCondition =
	| '$in'
	| '$not_in'
	| '$is'
	| '$is_days_ago'
	| '$is_days_in_future'
	| '$is_not'
	| '$has_value'
	| '$is_unknown'
	| '$contains'
	| '$not_contain'
	| '$starts_with'
	| '$ends_with'
	| '$more_than'
	| '$less_than'
	| '$more_than_ago'
	| '$less_than_ago'
	| '$more_than_future'
	| '$less_than_future'
	| '$more_than_equal'
	| '$less_than_equal'
	| '$after'
	| '$before'
	| '$count'
	| '$count_less'
	| '$count_more'

export type ProductCollectionsObject = CreateProductCollection & {
	id: string
	created_at: string
	object: 'products_collection'
}

export interface ListProductCollectionsParameters {
	limit: number
	page: number
	order: 'created_at' | '-created_at'
}

export interface ListProductCollections {
	object?: 'list'
	data_ref?: 'data'
	data?: ProductCollectionsObject[]
	total?: number
}

export interface ListProductsInCollectionParameters {
	limit?: number
	page?: number
}

export interface ListProductsInCollection {
	object: 'list'
	data_ref: 'data'
	data: (ProductInCollectionSku | ProductInCollectionProduct)[]
	total: number
}

export interface ProductInCollectionSku {
	id: string //skuId
	source_id: string | null
	product_id: string
	sku: string
	price: number | null
	currency: string | null
	attributes: Record<string, any>
	image_url: string | null
	metadata: Record<string, any>
	created_at: string
	updated_at: string | null
	object: 'sku'
	product: ProductInCollectionSkuProduct
}

export interface ProductInCollectionSkuProduct {
	id: string
	source_id: string | null
	name: string | null
	price: number
	attributes: string[]
	metadata: Record<string, any>
	object: 'product'
}

export interface ProductInCollectionProduct {
	id: string
	source_id: string | null
	name: string | null
	price: number
	attributes: string[]
	metadata: Record<string, any>
	image_url: string | null
	created_at: string
	updated_at: string | null
	object: 'product'
}
