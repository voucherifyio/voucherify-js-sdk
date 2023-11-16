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
	| 'APPLY_TO_ITEMS_BY_QUANTITY'

export type DiscountUnitVouchersEffectTypes = 'ADD_MISSING_ITEMS' | 'ADD_NEW_ITEMS' | 'ADD_MANY_ITEMS'

export type DiscountAmountVouchersEffectTypes =
	| 'APPLY_TO_ORDER'
	| 'APPLY_TO_ITEMS'
	| 'APPLY_TO_ITEMS_PROPORTIONALLY'
	| 'APPLY_TO_ITEMS_PROPORTIONALLY_BY_QUANTITY'
	| 'APPLY_TO_ITEMS_BY_QUANTITY'

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

// domain types

// didn't want to make major changes
export type Discount = DiscountAmount_ | DiscountUnit_ | DiscountUnitMultiple_ | DiscountPercent_ | DiscountFixed_

export type DiscountAmount_ = {
	type: 'AMOUNT'
	amount_off?: number
	amount_off_formula?: string
	aggregated_amount_limit?: number
	effect?: DiscountAmountVouchersEffectTypes
	is_dynamic?: boolean
}

export type DiscountUnit_ = { type: 'UNIT' } & DiscountUnitBase_

export type DiscountUnitBase_ = {
	unit_off?: number
	unit_off_formula?: string
	unit_type: string
	product?: SimpleProductDiscountUnit
	sku?: SimpleSkuDiscountUnit
	effect?: 'ADD_MISSING_ITEMS' | 'ADD_NEW_ITEMS'
	is_dynamic?: boolean
}

export type DiscountUnitMultiple_ = {
	type: 'UNIT'
	effect: 'ADD_MANY_ITEMS'
	units: DiscountUnitBase_[]
}

export type DiscountPercent_ = {
	type: 'PERCENT'
	percent_off?: number
	percent_off_formula?: string
	amount_limit?: number
	aggregated_amount_limit?: number
	effect?: DiscountPercentVouchersEffectTypes
	is_dynamic?: boolean
}

export type DiscountFixed_ = {
	type: 'FIXED'
	fixed_amount?: number
	fixed_amount_formula?: string
	effect?: DiscountFixedVouchersEffectTypes
	is_dynamic?: boolean
}
