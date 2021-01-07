import omit from 'lodash/omit'
import { encode } from './helpers'
import * as T from './types/Customers'
import type { RequestController } from './RequestController'

class Customers {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-customer
	 */
	public create(customer: T.CustomersCreateBody) {
		return this.client.post<T.CustomersCreateResponse>('/customers', customer)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#read-customer
	 */
	public get(customerId: string) {
		return this.client.get<T.CustomersGetResponse>(`/customers/${encode(customerId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-customers
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

			response = await this.client.get(
				'/customers',
				Object.assign({}, params, {
					starting_after: startingAfter,
				}),
			)
		}
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-customer
	 */
	public update(customer: T.CustomersUpdateParams) {
		const id = 'id' in customer ? customer.id : customer.source_id
		return this.client.put<T.CustomersUpdateResponse>(`/customers/${encode(id)}`, omit(customer, ['id']))
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-customer
	 */
	public delete(customerId: string) {
		return this.client.delete<undefined>(`/customers/${encode(customerId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-customers-consents
	 */
	public updateConsents(customer: T.CustomersUpdateConsentsParams, consents: T.CustomersUpdateConsentsBody) {
		const id = 'id' in customer ? customer.id : customer.source_id
		return this.client.put<undefined>(`/customers/${encode(id)}/consents`, consents)
	}
}

export { Customers }
