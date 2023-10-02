
## Introduction

By its nature, SDK should help software developers integrate with Voucherify REST API. In most cases, Voucherify SDK methods are just wrappers for HTTP clients, so the SDK values that can help a software developer are:
- types for requests and responses
- examples of use
- documentation describing the endpoints

Precisely defined and well-designed request and response types are the main value of the Voucherify SDK, especially since our REST API uses large and complex data structures for communication. We should pay attention to the following:
- aligned SDK with OpenAPI Specification and REST API (naming, data structures)
- covering in SDK all available endpoints in REST API
- covering in types all available properties in data
- types names and structure that is intuitive for developers

This document describes good practices and patterns we should use in developing Voucherify SDK in correlation with Voucherify OpenAPI specification and [Voucherify OpenAPI Guideline](https://github.com/voucherifyio/voucherify-openapi/blob/master/CONTRIBUTING.md), including strategy for legacy code and backward compatibility.


## Types structure

We can recognise two groups of types in SDK:
- **0-level Types**, used in SDK methods, directly describe the parameters and returned values. 
- **Domain Types**, describing fundamental domain building blocks used in Voucherify.

0-level Types can use Domain Types, not the other way around. 

## 0-level Types

In most cases, Voucherify SDK methods are just wrappers for HTTP clients, so 0-level Types should be aligned to the Voucherify OpenAPI file in the context of:
- resource naming
- types naming
- data structure, property types, required/optional attribute


Because of that, the 0-level Types naming should be aligned with [OpenAPI Types](https://github.com/voucherifyio/voucherify-openapi/blob/master/CONTRIBUTING.md#openapi), but instead of snake casing, we will use the pascal case casing used in SDK.

Pattern: `<resource><action><request|response><body|param|query>`, where 
	- `resource`: plural name taken from API path, e.g. `vouchers`, `customers`, `products` 
	- `action` : `get`(single record), `list`, `update`, `delete`, `create` (etc.)
	- `request` or `response`
	- `body`, `param` or `query` 

If in 0-level Types, there is a need to refer to created child types (enums, list items, other large structures), and those child types are used only for this one 0-level, we can still name them as 0-level type, including additional information after `action` and following the pattern:

`<resource><action><child type distinction><request|response><body|param|query>`

For example:

The 0-level type that describes the voucher list response body is named `VouchersListResponseBody`, but the voucher object is large itself; it's also a good practice to give the SDK user the type of the specific list item so he can use it easily in his application, so we should create the type describing voucher object and name it: `VouchersListItemResponseBody`.

## Domain Types

Domain Types:
- should not be identified with any specific API endpoint or SDK method
- should prefer composition over inherence
- names should describe what it's inside, not where it's used, e.g: `CustomerAddress`, `CustomerSummary`
- should have optional fields; we can mark them as required in 0-level Types
- avoid utility types like: Pick, Omit, Partial

> [!NOTE] Do not create domain type if we can't give intuitive name

## Examples
> [!WARNING] This example shows how we can structure the types, it's not Voucherify specification

```ts
// Uility types 👇

// @TODO Required nested utility type

// Mark specific property as required
type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property];
};
// Remove null as the option type for specific properties
type WithNonNullableProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]: Exclude<Type[Property], null> ;
};

// Domain types 👇

// Basic customer properties, common for most of the 0-level endpoints
type CustomerBase = {
	name?: string
	email?: string
	phone?: string
	description?: string
	birthdate? : string
	metadata?: Record<string, any>
}

type CustomerUnconfirmed =  CustomerLoyalty 
	& CustomerSummary 
	& {
		email?: string
		object: 'unconfirmed_customer'
	}

// Can we use it as pattern in other places?
type CustomerIdentity = {
	id?: string
	source_id?:string
}


type CustomerAddress = {
	address?: {
		city?: string | null
		state?: string | null
		line_1?: string | null
		line_2?: string | null
		country?: string | null
		postal_code?: string | null
	} | null
}

type CustomerSummary = {
	summary: {
		redemptions: {
			total_redeemed: number
			total_failed: number
			total_succeeded: number
			total_rolled_back: number
			total_rollback_failed: number
			total_rollback_succeeded: number
			gift?: {
				redeemed_amount: number
				amount_to_go: number
			}
			loyalty?: {
				redeemed_points: number
				points_to_go: number
			}
		}
		orders: {
			total_amount: number
			total_count: number
			average_amount: number
			last_order_amount: number
			last_order_date?: string
		}
	}
}

type CustomerReferals = {
	 referrals: {
		 campaing_id: string
		 referrer_id: string
		 related_object_id: string
		 related_object_type: string
		 date: string
	 }
}

type CustomerLoyalty = {
	loyalty: {
		points: number
		referred_customers: number
		campaigns?: Record<
			string,
			{
				points: number
				referred_customers: number
			}
		>
	}
}

type CustomerSaved = {
	object: 'customer'
	system_metadata: {
		consent: {
			consentId: string
		}
	}
	created_at: string
	updated_at: string
	assets: {
		cocpit_url: string
	}
}

// Exists because:
// - it's defined as building block in Voucherify documentation: https://docs.voucherify.io/reference/customer-object
// - it's used in two places: List item in response and get response
type Customer = Required<CustomerBase>
				& Required<CustomerIdentity>
				& Required<CustomerAddress>
				& Required<CustomerSummary>
				& Required<CustomerLoyalty>
				& CustomerReferals
				& CustomerSaved

// 0 Level types 👇

type CustomersGetResponseBody = Customer
	
type CustomerListRequestParams = {
	limit?: number
	page?: number
	email?: string
	city?: string
	name?: string
	order?: string
	starting_after?: string
}

type CustomersListResponseBody = {
	object: 'list'
	data_ref: 'customers'
	customers: (Customer)[]
	total: number
	has_more: boolean
} 

type CustomerCreateRequestBody = WithRequiredProperty<CustomerBase, 'email' | 'name' > // an example how to mark specific fields as required
								& CustomerAddress
								& {
									source_id?: string
								}

type CustomerUpdateRequestBody = CustomerBase
								
type IdOrSourceId = { id: string } | { source_id: string }							
type CustomerCreateResponseBody = Customer;


customer.get(id: string): CustomersGetResponseBody{}
customer.list(CustomerListRequestParams):CustomerListResponseBody {}
customer.create(customer: CustomerCreateRequestBody): CustomerCreateResponseBody{}
customer.delete(id: string): CustomerDeleteResponseBody{}
customre.update(customer: CustomerUpdateRequestBody): CustomerUpdateResponseBody{}

```



## Legacy

The existing SDK doesn't have one consistent structure for types in the context of naming or structure. Working on SDK, we could adjust all legacy code to the new guideline, but it will generate many non-backwards compatible changes that we want to avoid as long as possible because it will require SDK users to adjust their existing integrations. On the other hand, we can not be blocked to improve SDK at the end. We will split the work into two phases:
1. Phase one: pick low-hanging fruits by adding missing attributes to the existing types in a backwards-compatible manner and adding support for the new API Endpoints, where we can create a new type aligned to recent guidelines.
2. Phase two: cumulative major version bumps, where we can replace legacy types with new ones.

We split the types from the file into two groups and described them by comments.

```ts
// Legacy types 👇
export type CustomerReq = { ... }

// Types following the Guideline: https:// .... 👇


```
