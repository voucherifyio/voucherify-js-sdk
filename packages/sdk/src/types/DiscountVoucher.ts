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

export interface DiscountUnit {
	type?: DiscountVouchersTypesEnum.UNIT
	unit_off?: number
	effect?: DiscountUnitVouchersEffectTypes
	unit_type?: string
}

export interface DiscountAmount {
	type?: DiscountVouchersTypesEnum.AMOUNT
	amount_off?: number
	effect?: DiscountAmountVouchersEffectTypes
}

export interface DiscountPercent {
	type?: DiscountVouchersTypesEnum.PERCENT
	percent_off?: number
	amount_limit?: number
	effect?: DiscountPercentVouchersEffectTypes
}
