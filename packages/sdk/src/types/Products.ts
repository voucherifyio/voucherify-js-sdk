export interface ProductsCreate {
	name?: string
	source_id?: string
	price?: number
	attributes?: string[]
	metadata?: Record<string, any>
	image_url?: string
}

export interface ProductsGetResponseSkus {
	skus?: {
		object: 'list'
		total: number
		data?: ProductsGetSkuResponse[]
	}
}

export interface ProductsCreateResponse {
	id: string
	source_id?: string
	object: 'product'
	name?: string
	price?: number
	attributes?: string[]
	created_at: string
	image_url?: string
	metadata?: Record<string, any>
}

export type ProductsGetResponse = ProductsCreateResponse & ProductsGetResponseSkus

export type ProductsUpdate = {
	name?: string
	id?: string
	source_id?: string
	attributes?: string[]
	price?: number
	image_url?: string
	metadata?: Record<string, any>
}

export type ProductsUpdateResponse = ProductsCreateResponse

export interface ProductsBulkUpdateMetadata {
	source_ids: string[]
	metadata: Record<string, any>
}

export type ProductsBulkUpdate = ProductsCreate[]

export type ProductsBulkUpdateResponse = {
	async_action_id: string
}

export type ProductsBulkUpdateMetadataResponse = {
	async_action_id: string
}

export interface ProductsDeleteParams {
	force?: boolean
}

export interface ProductsListParams {
	page?: number
	limit?: number
}

export interface ProductsListResponse {
	object: 'list'
	total: number
	data_ref: 'products'
	products: ProductsGetResponse[]
}

export interface ProductsCreateSku {
	sku: string
	source_id?: string
	attributes?: Record<string, string>
	metadata?: Record<string, any>
	price?: number
	image_url?: string
	currency?: string
}

export interface ProductsCreateSkuResponse {
	id: string
	source_id?: string
	sku?: string
	price?: number
	attributes?: Record<string, string>
	metadata?: Record<string, any>
	updated_at?: string
	currency?: string
	created_at: string
	object: 'sku'
}

export type ProductsGetSkuResponse = ProductsCreateSkuResponse

export type ProductsUpdateSku = ProductsCreateSku & { id?: string; source_id?: string }

export type ProductsUpdateSkuResponse = ProductsGetSkuResponse

export interface ProductsDeleteSkuParams {
	force?: boolean
}

export interface ProductsListSkus {
	object: 'list'
	total: number
	skus: ProductsGetSkuResponse[]
}

export interface SimpleProduct {
	id: string
	source_id?: string
	name?: string
}

export interface SimpleSku {
	id: string
	source_id?: string
	sku?: string
}
