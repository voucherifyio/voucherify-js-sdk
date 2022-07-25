interface MetadataSchemaProperty {
	type: string
	array: boolean
	deleted?: boolean
	optional: boolean
	objectType?: string
	eq?: (string | number)[]
	ne?: (string | number)[]
	lt?: number
	lte?: number
	gt?: number
	gte?: number
	minLength?: number
	maxLength?: number
	exactLength?: number
}

export interface MetadataSchema {
	id: string
	related_object: string
	properties: Record<string, MetadataSchemaProperty>
	allow_defined_only?: boolean
	created_at: string
	updated_at?: string
	object: 'metadata_schema'
}

export interface MetadataSchemasListResponse {
	object: 'list'
	total: number
	data_ref: 'schemas'
	schemas: MetadataSchema[]
}

export type MetadataSchemasGetResponse = MetadataSchema
