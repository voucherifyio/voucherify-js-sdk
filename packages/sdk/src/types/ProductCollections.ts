import { ProductObject } from '@voucherify/sdk'

export interface ListProductCollectionsParameters {
	limit?: number
	page?: number
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
}

export interface ListProductsCollectionParameters {
	limit?: number
	page?: number
}

export interface ListProductCollections {
	object?: 'list'
	data_ref?: 'data'
	data?: ProductCollectionsObject[]
	total?: number
}

export interface ListProductsCollection {
	object?: 'list'
	data_ref?: 'data'
	data?: (ProductObject | SkuObjectExtended)[]
	total?: number
}

interface SkuObjectExtended {
	id?: string
	source_id?: string
	product_id?: string
	sku?: string
	price?: number
	attributes?: Record<string, any>
	image_url?: string
	metadata?: Record<string, any>
	created_at?: string
	updated_at?: string
	object?: 'sku'
	product?: {
		id?: string
		source_id?: string
		name?: string
		price?: number
		attributes?: string[]
		metadata?: Record<string, any>
		object?: 'product'
	}
}

export type ProductCollectionsObject = ProductCollectionsStaticObject | ProductCollectionsAutoUpdateObject

interface ProductCollectionsStaticObject {
	id?: string
	name?: string
	type?: 'AUTO_UPDATE' | 'STATIC'
	products?: { id?: string; object?: 'product' }[]
	created_at?: string
	updated_at?: string
	object?: 'products_collection'
}

interface ProductCollectionsAutoUpdateObject {
	id?: string
	name?: string
	type?: 'AUTO_UPDATE' | 'STATIC'
	filter?: Record<string, any>
	created_at?: string
	updated_at?: string
	object?: 'products_collection'
}
