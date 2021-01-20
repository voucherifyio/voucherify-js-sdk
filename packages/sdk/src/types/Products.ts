export interface ProductsCreate {
	name?: string
	source_id?: string
	price?: number
	attributes?: string[]
	metadata?: Record<string, any>
}

export interface ProductsCreateResponse {
	id?: string
	source_id?: string
	object: 'product'
	name?: string
	price?: number
	attributes?: string[]
	created_at?: string
	skus?: {
		object: 'list'
		total: number
		data?: {
			id?: string
			source_id?: string
			sku?: string
			currency?: string
			price?: number
			attributes: Record<string, string>
			created_at?: string
			object?: string
		}[]
	}
}

export type ProductsGetResponse = ProductsCreateResponse

export type ProductsUpdate = {
	name?: string
	id?: string
	source_id?: string
	attributes?: string[]
	metadata?: Record<string, any>
}

export type ProductsUpdateResponse = ProductsCreateResponse

export interface ProductsBulkUpdate {
	name?: string
	price?: number
	source_id?: string
	attributes?: string[]
	metadata?: Record<string, any>
}

export interface ProductsBulkUpdateResponse {
	source_id?: string
	found?: boolean
	updated?: boolean
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
	products?: ProductsGetResponse[]
}

export interface ProductsCreateSku {
	sku: string
	source_id?: string
	attributes?: Record<string, string>
	metadata?: Record<string, any>
	price?: number
}

export interface ProductsCreateSkuResponse {
	id?: string
	source_id?: string
	sku?: string
	attributes?: Record<string, string>
	created_at?: string
	object?: 'sku'
}

export type ProductsGetSkuResponse = ProductsCreateSkuResponse

export type ProductsUpdateSku = ProductsCreateSku & { id?: string; source_id: string }

export type ProductsUpdateSkuResponse = ProductsGetSkuResponse

export type ProductsDeleteSkuParams = ProductsDeleteParams

export interface ProductsListSkus {
	object: 'list'
	total: number
	skus: ProductsGetSkuResponse[]
}
