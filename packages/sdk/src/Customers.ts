import * as T from './types/Customers'
import * as AAT from './types/AsyncActions'

import { assert, encode, environment, omit } from './helpers'

import type { RequestController } from './RequestController'
import FormData from 'form-data'

class Customers {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference/create-customer
	 */
	public create(customer: T.CustomersCreateBody) {
		return this.client.post<T.CustomersCreateResponse>('/customers', customer)
	}
	/**
	 * @see https://docs.voucherify.io/reference/read-customer
	 */
	public get(customerId: string) {
		return this.client.get<T.CustomersGetResponse>(`/customers/${encode(customerId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-customers
	 */
	public list(params: T.CustomersListParams) {
		return this.client.get<T.CustomersListResponse>('/customers', params)
	}
	/**
	 * Standard list customers API has limitation of available pages to be shown equal to 100. To cover cases when you would like to fetch more, you must use scroll capabilities.
	 *
	 * ```javascript
	 * async function () {
	 *		for await (const customer of voucherify.customers.scroll(params)) {
	 *			console.log('Customer', customer)
	 *		}
	 * }
	 * ```
	 */
	public async *scroll(
		params: T.CustomersScrollParams,
	): AsyncGenerator<T.CustomersScrollYield, void, T.CustomersScrollYield> {
		let startingAfter =
			params.starting_after ?? (params.order === 'created_at' ? '1970-01-01T00:00:00Z' : '2200-01-01T00:00:00Z')
		let response = await this.client.get<T.CustomersScrollResponse>(
			'/customers',
			Object.assign({}, params, { starting_after: startingAfter }),
		)

		while (true) {
			if (response.customers.length === 0) break

			for (const customer of response.customers) {
				if (params.order === 'created_at') {
					startingAfter = startingAfter > customer.created_at ? startingAfter : customer.created_at
				} else {
					startingAfter = startingAfter < customer.created_at ? startingAfter : customer.created_at
				}
				yield customer
			}

			if (!response.has_more) break

			response = await this.client.get('/customers', Object.assign({}, params, { starting_after: startingAfter }))
		}
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-customer
	 */
	public update(customer: T.CustomersUpdateParams) {
		const id = 'id' in customer ? customer.id : customer.source_id

		const customerWithoutId = omit(customer, ['id'])

		return this.client.put<T.CustomersUpdateResponse>(`/customers/${encode(id)}`, customerWithoutId)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-customers-in-bulk
	 */
	public updateInBulk(customers: T.CustomersUpdateInBulkRequestBody) {
		return this.client.post<AAT.AsyncActionCreateResponse>(`/customers/bulk/async`, customers)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-customers-metadata-in-bulk
	 */
	public updateMetadataInBulk(sourceIdsAndMetadata: T.CustomersUpdateMetadataInBulkRequestBody) {
		return this.client.post<AAT.AsyncActionCreateResponse>(`/customers/metadata/async`, sourceIdsAndMetadata)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-customer
	 */
	public delete(customerId: string) {
		return this.client.delete<undefined>(`/customers/${encode(customerId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-customer-permanently
	 */
	public deletePermanently(customerId: string) {
		return this.client.post<T.CustomersDeletePermanentlyResponseBody>(
			`/customers/${encode(customerId)}/permanent-deletion`,
			{},
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-customers-consents
	 */
	public updateConsents(idOrSourceId: string, consents: T.CustomersUpdateConsentsBody) {
		return this.client.put<undefined>(`/customers/${encode(idOrSourceId)}/consents`, consents)
	}

	/**
	 * @see https://docs.voucherify.io/reference/get-customer-activities
	 */
	public listActivities(customerId: string, params?: T.CustomerActivitiesListQueryParams) {
		return this.client.get<T.CustomerActivitiesListResponse>(`/customers/${encode(customerId)}/activities`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/import-customers-using-csv
	 */
	public async importCSV(filePath: string) {
		assert(
			environment().startsWith('Node'),
			`Method "client.customers.importCSV(filePath)" is only for Node environment`,
		)
		const fs = (await import('fs')).default
		const fileStream = fs.createReadStream(filePath)
		const form = new FormData()
		form.append('file', fileStream)
		const headers = { 'Content-Type': 'multipart/form-data' }

		return this.client.post<AAT.AsyncActionCreateResponse>(`/customers/importCSV`, form, undefined, headers)
	}

	/**
	 * @see https://docs.voucherify.io/reference/list-customer-redeemables
	 */
	public listRedeemables(id: string, params?: T.CustomerRedeemablesListQueryParams) {
		return this.client.get<T.CustomerRedeemablesListResponse>(`/customers/${encode(id)}/redeemables`, params)
	}
}

export { Customers }
