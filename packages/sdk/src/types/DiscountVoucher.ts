export type DiscountVouchersTypes = 'AMOUNT' | 'PERCENT' | 'UNIT' | 'FIXED'

export enum DiscountVouchersTypesEnum {
	AMOUNT = 'AMOUNT',
	PERCENT = 'PERCENT',
	UNIT = 'UNIT',
	FIXED = 'FIXED',
}

export type DiscountVouchersEffectTypes =
	| 'ADD_MISSING_ITEMS'
	| 'ADD_NEW_ITEMS'
	| 'ADD_MANY_ITEMS'
	| 'APPLY_TO_ORDER'
	| 'APPLY_TO_ITEMS'
	| 'APPLY_TO_ITEMS_PROPORTIONALLY'
	| 'APPLY_TO_ITEMS_PROPORTIONALLY_BY_QUANTITY'

export type DiscountUnitVouchersEffectTypes = 'ADD_MISSING_ITEMS' | 'ADD_NEW_ITEMS' | 'ADD_MANY_ITEMS'

export type DiscountAmountVouchersEffectTypes =
	| 'APPLY_TO_ORDER'
	| 'APPLY_TO_ITEMS'
	| 'APPLY_TO_ITEMS_PROPORTIONALLY'
	| 'APPLY_TO_ITEMS_PROPORTIONALLY_BY_QUANTITY'

export type DiscountPercentVouchersEffectTypes = 'APPLY_TO_ORDER' | 'APPLY_TO_ITEMS'

export type DiscountFixedVouchersEffectTypes = 'APPLY_TO_ORDER' | 'APPLY_TO_ITEMS'

interface SimpleSkuDiscountUnit {
	id: string
	source_id?: string
	sku: string
}

interface SimpleProductDiscountUnit {
	id: string
	source_id?: string
	name: string
}

export interface DiscountUnit {
	type?: DiscountVouchersTypesEnum.UNIT
	unit_off?: number
	unit_off_formula?: string
	effect?: DiscountUnitVouchersEffectTypes
	unit_type?: string
	product?: SimpleProductDiscountUnit
	sku?: SimpleSkuDiscountUnit
}

export interface DiscountAmount {
	type?: DiscountVouchersTypesEnum.AMOUNT
	amount_off?: number
	amount_off_formula?: string
	effect?: DiscountAmountVouchersEffectTypes
}

export interface DiscountPercent {
	type?: DiscountVouchersTypesEnum.PERCENT
	percent_off?: number
	percent_off_formula?: string
	amount_limit?: number
	effect?: DiscountPercentVouchersEffectTypes
}
export interface DiscountFixed {
	type?: DiscountVouchersTypesEnum.FIXED
	fixed_amount?: number
	fixed_amount_formula?: string
	effect?: DiscountFixedVouchersEffectTypes
}

export interface VoucherObjectDiscountAmount {
	type: DiscountVouchersTypesEnum.AMOUNT
	amount_off?: number
	amount_off_formula?: string
	effect?:
		| 'APPLY_TO_ORDER'
		| 'APPLY_TO_ITEMS'
		| 'APPLY_TO_ITEMS_PROPORTIONALLY'
		| 'APPLY_TO_ITEMS_PROPORTIONALLY_BY_QUANTITY'
		| 'APPLY_TO_ITEMS_BY_QUANTITY'
}

export interface VoucherObjectDiscountPercentage {
	type: 'PERCENT'
	amount_limit: string
	percent_off: number
	percent_off_formula: string
	effect: 'APPLY_TO_ORDER' | 'APPLY_TO_ITEMS'
}

export interface VoucherObjectDiscountFixed {
	type?: 'FIXED'
	fixed_amount?: number
	fixed_amount_formula?: string
	effect?: 'APPLY_TO_ORDER' | 'APPLY_TO_ITEMS'
}
export interface VoucherObjectDiscountUnitOne {
	type?: 'UNIT'
	unit_off?: number
	unit_off_formula?: string
	unit_type?: string
	effect?: 'ADD_NEW_ITEMS' | 'ADD_MISSING_ITEMS'
}

export interface VoucherObjectDiscountUnitMultiple {
	type?: 'UNIT'
	effect?: 'ADD_MANY_ITEMS'
	units?: {
		unit_off: number
		unit_off_formula: string
		unit_type: string
		effect: 'ADD_NEW_ITEMS' | 'ADD_MISSING_ITEMS'
	}[]
}

export interface VoucherObjectDiscountShipping {
	type?: 'UNIT'
	unit_off?: number
	unit_type?: 'prod_5h1pp1ng'
	effect?: 'ADD_MISSING_ITEMS'
}
