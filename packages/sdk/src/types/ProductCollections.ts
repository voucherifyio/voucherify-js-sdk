import { WithRequiredProperty } from './UtilityTypes'

// Domain types
// Product
export interface ProductIdentity {
	id?: string
	object?: 'product'
}

export interface SkuIdentity {
	id?: string
	product_id?: string
	object?: 'sku'
}

export interface ProductBase {
	name?: string | null
	price?: number | null
	attributes?: string[]
	metadata?: Record<string, unknown>
}

export interface SkuBase {
	sku?: string | null
	price?: number | null
	attributes?: Record<string, unknown>
	metadata?: Record<string, unknown>
	product?: ProductInCollectionItem
	image_url?: string | null
}

export interface ProductSaved {
	created_at?: string
	updated_at?: string | null
	image_url?: string | null
	object?: 'product'
}

export interface SkuSaved {
	created_at?: string
	updated_at?: string | null
	image_url?: string | null
	object?: 'sku'
}

export type Product = Required<SkuIdentity> | Required<ProductIdentity>

export type ProductInCollection = Required<ProductIdentity> &
	Required<ProductSaved> &
	Required<ProductBase> & { source_id: string | null }

export type SkuInCollection = Required<SkuIdentity> &
	Required<SkuSaved> &
	Required<SkuBase> & { source_id: string | null }

export type ProductInCollectionItem = Required<ProductIdentity> &
	Required<ProductBase> & { source_id: string | null; object: 'product' }

// Product Collection

export interface ProductCollectionIdentity {
	id?: string
}

export interface ProductCollectionSaved {
	created_at?: string
	object?: 'products_collection'
}

export type ProductCollectionBase = Required<StaticProductCollectionBase> | Required<DynamicProductCollectionBase>
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

export type Filter = {
	junction: Junction
} & Partial<Record<AllowedFiltersKeys, { conditions: Partial<Record<FiltersCondition, unknown>> }>>

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

// create

export type ProductCollectionsCreateRequestBody =
	| WithRequiredProperty<StaticProductCollectionBase, 'name' | 'type'>
	| Required<DynamicProductCollectionBase>

export type ProductCollectionsCreateResponseBody = ProductCollectionBase &
	Required<ProductCollectionIdentity> &
	Required<ProductCollectionSaved>

// list
export interface ProductCollectionsListRequestQuery {
	limit?: number
	page?: number
	order?: 'created_at' | '-created_at'
}

export interface ProductCollectionsListResponseBody {
	object: 'list'
	data_ref: 'data'
	data: (Required<ProductCollectionBase> & Required<ProductCollectionIdentity> & Required<ProductCollectionSaved>)[]
	total: number
}

// get

export type ProductCollectionsGetResponseBody = ProductCollectionBase &
	Required<ProductCollectionIdentity> &
	Required<ProductCollectionSaved>

// list products
export interface ProductCollectionsListProductsRequestQuery {
	limit?: number
	page?: number
}

export interface ProductCollectionsListProductsResponseBody {
	object: 'list'
	data_ref: 'data'
	data: (SkuInCollection | ProductInCollection)[]
	total: number
}
