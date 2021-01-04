import omit from 'lodash/omit'
import { encode } from './helpers'
import { Customers } from './types/Customers'
import type { RequestController } from './RequestController'

class Customers {
	constructor(private client: RequestController) {}

	public create(customer: Customers.Create.Body) {
		return this.client.post<Customers.Create.Response>('/customers', customer)
	}
	public get(customerId: string) {
		return this.client.get<Customers.Get.Response>(`/customers/${encode(customerId)}`)
	}
	public list(params: Customers.List.Params) {
		return this.client.get<Customers.List.Response>('/customers', params)
	}
	public async *scroll(
		params: Customers.Scroll.Params,
	): AsyncGenerator<Customers.Scroll.Yield, void, Customers.Scroll.Yield> {
		let startingAfter =
			params.starting_after ?? (params.order === 'created_at' ? '1970-01-01T00:00:00Z' : '2200-01-01T00:00:00Z')
		let response = await this.client.get<Customers.Scroll.Response>(
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
	public update(customer: Customers.Update.Params) {
		const id = 'id' in customer ? customer.id : customer.source_id
		return this.client.put<Customers.Update.Response>(`/customers/${encode(id)}`, omit(customer, ['id']))
	}
	public delete(customerId: string) {
		return this.client.delete<undefined>(`/customers/${encode(customerId)}`)
	}
	public updateConsents(customer: Customers.UpdateConsents.Params, consents: Customers.UpdateConsents.Consents) {
		const id = 'id' in customer ? customer.id : customer.source_id
		return this.client.put<undefined>(`/customers/${encode(id)}/consents`, consents)
	}
}

export { Customers }
