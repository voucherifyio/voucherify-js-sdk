export interface AsyncActionsResponse {
	id: string
	type:
		| 'CAMPAIGN.UPDATE'
		| 'CAMPAIGN.VOUCHERS_IMPORT'
		| 'CAMPAIGN.VOUCHERS_IMPORT_CSV'
		| 'CAMPAIGN.VOUCHERS_UPDATE'
		| 'CAMPAIGN.VOUCHERS_DELETE'
		| 'CAMPAIGN.VOUCHERS_GENERATE'
		| 'CAMPAIGN.LOYALTY_TIERS_EXPIRATION_REFRESH'
		| 'CAMPAIGNS.METADATA_KEY_PURGE'
		| 'CUSTOMERS.IMPORT_CSV'
		| 'CUSTOMERS.BULK_UPDATE'
		| 'CUSTOMERS.METADATA_UPDATE'
		| 'CUSTOMERS.METADATA_KEY_PURGE'
		| 'LOYALTY_TIERS.METADATA_KEY_PURGE'
		| 'ORDER_ITEMS.METADATA_KEY_PURGE'
		| 'ORDERS.METADATA_KEY_PURGE'
		| 'ORDERS.IMPORT'
		| 'PRODUCTS.BULK_UPDATE'
		| 'PRODUCTS.METADATA_UPDATE'
		| 'PRODUCTS.METADATA_KEY_PURGE'
		| 'PRODUCTS.IMPORT_CSV'
		| 'SKUS.IMPORT_CSV'
		| 'PROMOTION_TIERS.METADATA_KEY_PURGE'
		| 'VOUCHERS.IMPORT'
		| 'VOUCHERS.IMPORT_CSV'
		| 'VOUCHERS.BULK_UPDATE'
		| 'VOUCHERS.METADATA_UPDATE'
		| 'VOUCHERS.METADATA_KEY_PURGE'
	status: 'DONE' | 'ENQUEUED' | 'FAILED' | 'IN_PROGRESS'
	result:
		| AsyncActionGetResultCampaignVouchersImport
		| AsyncActionGetResultCampaignVouchersImportCSV
		| AsyncActionGetResultCampaignVouchersUpdate
		| AsyncActionGetResultCampaignVouchersDelete
		| AsyncActionGetResultCampaignVouchersGenerate
		| AsyncActionGetResultCampaignMetadataKeyPurge
		| AsyncActionGetResultCustomersImportCSV
		| AsyncActionGetResultCustomersBulkUpdate
		| AsyncActionGetResultCustomersMetadataKeyPurge
	created_at: string
	object: 'async_action'
	progress: number
	request_id: string
	updated_at: string
	processing_time: number
}

interface AsyncActionGetResultCampaignVouchersImport {
	done_count: number
	failed: {
		code: string
		reason: string
	}[]
	failed_count: number
	message: string
}

interface AsyncActionGetResultCampaignVouchersImportCSV {
	done_count: number
	failed: {
		code: string
		reason: string
		row: number
	}[]
	failed_count?: number
	message: string
}

interface AsyncActionGetResultCampaignVouchersUpdate {
	done_count: number
	message: string
}

type AsyncActionGetResultCampaignVouchersDelete = AsyncActionGetResultCampaignVouchersUpdate
type AsyncActionGetResultCampaignVouchersGenerate = AsyncActionGetResultCampaignVouchersUpdate
type AsyncActionGetResultCampaignMetadataKeyPurge = AsyncActionGetResultCampaignVouchersUpdate

interface AsyncActionGetResultCustomersImportCSV {
	done_count: number
	failed: {
		reason: string
		row: number
		source_id: string
	}[]
	failed_count: number
	message: string
}
interface AsyncActionGetResultCustomersBulkUpdate {
	done_count: number
	results: {
		found: boolean
		source_id: string
		updated: boolean
	}[]
}
type AsyncActionGetResultCustomersMetadataKeyPurge = AsyncActionGetResultCustomersBulkUpdate

export interface AsyncActionsListParams {
	limit?: number
	end_date?: string
}

export interface AsyncActionsListResponse {
	object: 'list'
	data_ref: 'async_actions'
	async_actions: Omit<AsyncActionsResponse, 'result' | 'processing_time'>[]
}

export interface AsyncActionCreateResponse {
	async_action_id: string
}

export type AsyncActionsGetResponse = AsyncActionsResponse
