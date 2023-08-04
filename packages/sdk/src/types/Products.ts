export interface ListSkusParams {
	limit?: number
	page?: number
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
}

export interface ProductsCreate {
	name?: string
	source_id?: string
	price?: number
	attributes?: string[]
	metadata?: Record<string, any>
	image_url?: string
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
	skus?: { data?: SkuObject[]; data_ref: 'data'; object: 'list'; total: number }
	updated_at?: string
}

export type ProductsGetResponse = ProductsCreateResponse

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
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
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
	product_id?: string
	image_url?: string
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
	data_ref: 'skus'
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

export interface ProductObject {
	//11_obj_product_object_truncated
	id: string
	source_id?: string
	name?: string
	price?: number
	attributes?: string[]
	metadata?: Record<string, any>
	image_url?: string
	updated_at?: string
	created_at?: string
	object?: 'product'
}

export interface SkuObject {
	//11_obj_sku_object
	id: string
	source_id?: string
	product_id?: string
	sku?: string
	price?: number
	currency?: string
	attributes?: Record<string, any>
	metadata?: Record<string, any>
	image_url?: string
	updated_at?: string
	created_at: string
	object?: 'sku'
}
