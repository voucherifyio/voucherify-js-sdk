interface ConsentGroup {
	id: string
	name: string
	description: string
	consents: string[]
	created_at: string
	updated_at?: string
	object: 'consent_group'
}

export interface Consent {
	id: string
	name: string
	description: string
	category: string
	created_at: string
	updated_at?: string
	object: 'consent'
}

export interface ConsentsListResponse {
	groups: {
		object: 'list'
		total: number
		data_ref: 'data'
		data: ConsentGroup[]
	}
	consents: {
		object: 'list'
		total: number
		data_ref: 'data'
		data: Consent[]
	}
}
