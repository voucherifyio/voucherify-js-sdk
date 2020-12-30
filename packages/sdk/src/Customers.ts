import omit from 'lodash/omit'
import { encode } from './helpers'
import type { RequestController } from './RequestController'

interface CustomersScrollParams {
	starting_after?: string
	order?: 'created_at' | '-created_at'
}
export class Customers {
	constructor(private client: RequestController) {}

	create(customer: $FixMe) {
		return this.client.post('/customers', customer)
	}
	get(customerId: string) {
		return this.client.get(`/customers/${encode(customerId)}`)
	}
	list(params?: $FixMe) {
		return this.client.get('/customers', params)
	}
	async *scroll(params: CustomersScrollParams = {}) {
		let startingAfter =
			params.starting_after ?? (params.order === 'created_at' ? '1970-01-01T00:00:00Z' : '2200-01-01T00:00:00Z')
		let response = await this.client.get<$FixMe>(
			'/customers',
			Object.assign({}, params, { starting_after: startingAfter }),
		)

		while (true) {
			if (response.customers.length === 0) {
				break
			}
			for (const customer of response.customers) {
				if (params.order === 'created_at') {
					startingAfter = startingAfter > customer.created_at ? startingAfter : customer.created_at
				} else {
					startingAfter = startingAfter < customer.created_at ? startingAfter : customer.created_at
				}
				yield customer
			}
			if (!response.has_more) {
				break
			}

			response = await this.client.get(
				'/customers',
				Object.assign({}, params, {
					starting_after: startingAfter,
				}),
			)
		}
	}
	update(customer: $FixMe) {
		return this.client.put(`/customers/${encode(customer.id || customer.source_id)}`, omit(customer, ['id']))
	}
	delete(customerId: string) {
		return this.client.delete(`/customers/${encode(customerId)}`)
	}
	updateConsents(customer: $FixMe, consents: $FixMe) {
		return this.client.put(`/customers/${encode(customer.id || customer.source_id)}/consents`, consents)
	}
}
