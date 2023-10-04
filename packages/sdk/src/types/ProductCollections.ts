// export type CreateProductCollection = CreateProductCollectionStatic | CreateProductCollectionAutoUpdate

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

// export type AllowedFiltersKeys =
// 	| 'name'
// 	| 'attributes'
// 	| 'source_id'
// 	| 'price'
// 	| 'image_url'
// 	| 'product_id'
// 	| 'sku'
// 	| 'created_at'
// 	| 'updated_at'
// 	| `metadata.${string}`

// export interface CreateProductCollectionAutoUpdate {
// 	type: 'AUTO_UPDATE'
// 	name: string
// 	filter: {
// 		junction: Junction
// 	} & Partial<Record<AllowedFiltersKeys, { conditions: Partial<Record<FiltersCondition, any>> }>>
// }

// export declare type Junction = 'and' | 'AND' | 'or' | 'OR'
// export declare type FiltersCondition =
// 	| '$in'
// 	| '$not_in'
// 	| '$is'
// 	| '$is_days_ago'
// 	| '$is_days_in_future'
// 	| '$is_not'
// 	| '$has_value'
// 	| '$is_unknown'
// 	| '$contains'
// 	| '$not_contain'
// 	| '$starts_with'
// 	| '$ends_with'
// 	| '$more_than'
// 	| '$less_than'
// 	| '$more_than_ago'
// 	| '$less_than_ago'
// 	| '$more_than_future'
// 	| '$less_than_future'
// 	| '$more_than_equal'
// 	| '$less_than_equal'
// 	| '$after'
// 	| '$before'
// 	| '$count'
// 	| '$count_less'
// 	| '$count_more'

// export type ProductCollectionsObject = CreateProductCollection & {
// 	id: string
// 	created_at: string
// 	object: 'products_collection'
// }

// export interface ProductCollectionsListRequestQuery {
// 	limit?: number
// 	page?: number
// 	order?: 'created_at' | '-created_at'
// }

// export interface ListProductCollections {
// 	object: 'list'
// 	data_ref: 'data'
// 	data: ProductCollectionsObject[]
// 	total: number
// }

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
	sku: string | null
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
	price: number | null
	attributes: string[]
	metadata: Record<string, any>
	object: 'product'
}

export interface ProductInCollectionProduct {
	id: string
	source_id: string | null
	name: string | null
	price: number | null
	attributes: string[]
	metadata: Record<string, any>
	image_url: string | null
	created_at: string
	updated_at: string | null
	object: 'product'
}
// Utility types
type WithRequiredProperty<Type, Key extends keyof Type> = Type &
	{
		[Property in Key]-?: Type[Property]
	}
// Domain types

export type ProductCollectionBase = StaticProductCollectionBase | DynamicProductCollectionBase
export interface StaticProductCollectionBase {
	name?: string
	type?: 'STATIC'
	products?: Product[]
}

export interface DynamicProductCollectionBase {
	name?: string
	type?: 'AUTO_UPDATE'
	filter?: Filter
}

export interface ProductCollectionIdentity {
	id?: string
}

export interface ProductCollectionResponseData {
	created_at?: string
	object?: 'products_collection'
}

export type ProductCollectionUpdateResponseData = ProductCollectionResponseData & { updated_at?: string }

export type Product =
	| {
			id: string
			object: 'sku'
			product_id: string
	  }
	| {
			id: string
			object: 'product'
	  }

// consider creating a new file: Filters.ts
export type Filter = {
	junction: Junction
} & Partial<Record<AllowedFiltersKeys, { conditions: Partial<Record<FiltersCondition, any>> }>>

export declare type Junction = 'and' | 'AND' | 'or' | 'OR'

export type AllowedFiltersKeys =
	| 'name'
	| 'attributes'
	| 'source_id'
	| 'price'
	| 'image_url'
	| 'product_id'
	| 'sku'
	| 'created_at'
	| 'updated_at'
	| `metadata.${string}`

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

// 0-level types

export type ProductCollectionsCreateRequestBody =
	| WithRequiredProperty<StaticProductCollectionBase, 'name' | 'type'>
	| Required<DynamicProductCollectionBase>

export type ProductCollectionsCreateResponseBody = Required<ProductCollectionBase> &
	Required<ProductCollectionIdentity> &
	Required<ProductCollectionResponseData>

export interface ProductCollectionsListRequestQuery {
	limit?: number
	page?: number
	order?: 'created_at' | '-created_at'
}

// export interface ProductCollectionsListResponseBody {
// 	object: 'list'
// 	data_ref: 'data'
// 	data: ProductCollectionsObject[]
// 	total: number
// }

export interface ProductCollectionsListResponseBody {
	object: 'list'
	data_ref: 'data'
	data: (Required<ProductCollectionBase> &
		Required<ProductCollectionIdentity> &
		Required<ProductCollectionResponseData>)[]
	total: number
}
