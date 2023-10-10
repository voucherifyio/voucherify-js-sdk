import { voucherifyClient as client } from './client'
import { isoRegex } from './utils/isoRegex'

describe('Exports API', () => {
	it('Should create export, with no parameters', async () => {
		const result = await client.distributions.exports.create({ exported_object: 'voucher' })
		expect(result).toMatchObject({
			id: expect.stringMatching(/^exp-*/),
			object: 'export',
			created_at: expect.stringMatching(isoRegex),
			status: 'SCHEDULED',
			channel: 'API',
			exported_object: 'voucher',
			parameters: {},
			result: null,
			user_id: null,
		})
	})

	it('Should create export, with some parameters', async () => {
		const request = {
			exported_object: 'voucher' as const,
			parameters: {
				fields: ['id', 'code', 'voucher_type', 'value', 'discount_type'],
				filters: { code: { conditions: { $is_unknown: true } } },
			},
		}
		const result = await client.distributions.exports.create(request)
		//we must narrow down result type, otherwise we will have hard time with 'parameters' type
		expect(result.exported_object).toEqual(request.exported_object)
		if (result.exported_object !== request.exported_object) {
			return
		}
		//we need to use endpoint list, since only this endpoint has most complicated definition
		const list = await client.distributions.exports.list()
		const justExported = list.exports.find(_export => _export.id === result.id)
		if (!justExported) {
			return
		}
		//we must find out if 'fields' and 'filters' are defined, to figure out its value
		expect(justExported.parameters.fields).toBeDefined()
		if (!justExported.parameters.fields) {
			return
		}
		expect(justExported.parameters.filters).toBeDefined()
		if (!justExported.parameters.filters) {
			return
		}
		expect(justExported).toMatchObject({
			id: expect.stringMatching(/^exp-*/),
			object: 'export',
			created_at: expect.stringMatching(isoRegex),
			status: expect.stringMatching(/.*/),
			channel: 'API',
			exported_object: request.exported_object,
			parameters: request.parameters,
			result: null,
			user_id: null,
		})
	})
})
