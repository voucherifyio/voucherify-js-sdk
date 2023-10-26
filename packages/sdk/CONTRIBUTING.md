
## Introduction

By its nature, the SDK should help software developers integrate with Voucherify REST API. In most cases, Voucherify SDK methods are just wrappers for HTTP clients, so the SDK values that can help a software developer are:
- types of requests and responses
- examples of use
- documentation describing the endpoints

Precisely defined and well-designed request and response types are the main value of the Voucherify SDK, especially since our REST API uses large and complex data structures for communication. We should pay attention to the following:
- aligned SDK with OpenAPI Specification and REST API (naming, data structures)
- covering in SDK all available endpoints in REST API
- covering in types all available properties in data
- types names and structure that is intuitive for developers

This document describes good practices and patterns we should use in developing Voucherify SDK in correlation with Voucherify OpenAPI specification and [Voucherify OpenAPI Guideline](https://github.com/voucherifyio/voucherify-openapi/blob/master/CONTRIBUTING.md), including strategy for legacy code and backward compatibility.

## Types structure

We can recognise the following types in SDK:
- **0-level Types**, used in SDK methods, directly describe the parameters and returned values. 
  - **Subtypes of 0-level Types**, used in situations where a 0-level type can have different forms, e.g. when you need to use Union types or create a type that will be the basis of an array.
- **Domain Types**, describing fundamental domain building blocks used in Voucherify.
  - **Subtypes of Domain Types**, if a Domain Type is used in many places and can take two different forms, you can create subtypes of domain types for readability.

## 0-level Types

**0-level Types** can use Domain Types, not the other way around. We decided to design `0-level Types` first, even if there are repeated types or properties. 
Then we should analyze the existing 0-level types and decide whether there is a need to create a separate domain type.
If not, we should only separate `Subtypes of 0-level Types` where necessary. 

In most cases, Voucherify SDK methods are just wrappers for HTTP clients, so 0-level Types should be aligned to the Voucherify OpenAPI file in the context of:
- resource naming,
- types naming,
- data structure,
- property types, 
- required/optional attribute.

Because of that, the 0-level Types naming should be aligned with [OpenAPI Types](https://github.com/voucherifyio/voucherify-openapi/blob/master/CONTRIBUTING.md#openapi).

Pattern: `<Resource><Action><Request|Response><Body|Param|Query>`, where:
- `Resource`: plural name taken from API path, e.g.`Vouchers`,`Customers`,`Products`,
- `Action`: `get`(single record),`list`,`update`,`delete`,`create`(etc.)
- `Request` or `Response`
- `Body`, `Param` or `Query` 

If in 0-level Types, there is a need to refer to created child types (enums, list items, other large structures), and those child types are used only for this one 0-level, we can still name them as 0-level type, including additional information after `action` and following the pattern:

`<Resource><Action><Child type distinction><Request|Response><Body|Param|Query>`

For example:

The 0-level type that describes the response body for listing vouchers is named `VouchersListResponseBody`, but the `Voucher` object is large itself; 
it's also a good practice to give the SDK user the type of the specific list item, so he can use it easily in his application, so we should create the type describing voucher object and name it: `VouchersListItemResponseBody`.

## Domain Types

**Domain Types** should only be created when:
1. The building block is used in many places.
2. There is no need to encapsulate their use with [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) such as **Required**, **Omit**, **Partial**.

> [!NOTE] If there is a need to use one of the Utility Types, you should not create a Domain Type.
> [!NOTE] Do not create Domain Type if we can't give it an intuitive name

Domain Types:
- should not be identified with any specific API endpoint or SDK method,
- should prefer composition to inheritance,
- names should describe what it's inside, not where it's used, e.g: `CustomerAddress`, `CustomerSummary`,
- should not use Utility Types,
- if they can take different forms, you can use Union Types to define them.

## Examples
> [!WARNING] These examples show how we can structure the types, it's not Voucherify specification
### Categories
```ts
// 0-level types

interface CategoriesListResponseBody {
  object: 'list'
  data_ref: 'data'
  data: Category[]
  total: number
}

type CategoriesGetResponseBody = Category

interface CategoriesCreateRequestBody {
  name: string
  hierarchy: number
}

interface CategoriesCreateResponseBody {
  id: string
  name: string
  hierarchy: number
  created_at: string
  object: 'category'
}

// Domain types 
// Based on above 0-level types, only one domain type can be defined

// Basic category properties, common for most of the 0-level endpoints
// Exists because:
// - it's defined as building block in Voucherify documentation: https://docs.voucherify.io/reference/category-object
// - it's used in two places: List categories response and get category response
interface Category {
  id: string
  name: string
  hierarchy: number
  created_at: string
  object: 'category'
  updated_at?: string
}

categories.list(): CategoriesListResponseBody {}
categories.get(categoryId: string): CategoriesGetResponseBody {}
categories.create(createCategory: CategoriesCreateRequestBody): CategoriesCreateResponseBody {}

```
### Reward Assignments
```ts
// 0-level types

type RewardsGetAssignmentResponseBody = RewardAssignment

interface RewardsListAssignmentsRequestQuery {
  limit?: number
  page?: number
}

interface RewardsListAssignmentsResponseBody {
  object: 'list'
  data_ref: 'data'
  data: RewardAssignment[]
  total: number
}

export type RewardsCreateAssignmentRequestBody =
  | RewardsCreateAssignmentCoinRewardRequestBody
  | RewardsCreateAssignmentCampaignOrMaterialRewardRequestBody

// Subtypes of 0-level type
// Depending on the Reward type for which the Reward Assignment is created, the request body can take two forms: one for Coin Reward and the other for Campaign/Material Reward.

export interface RewardsCreateAssignmentCoinRewardRequestBody {
  campaign: string
  validation_rules?: string[]
}

export interface RewardsCreateAssignmentCampaignOrMaterialRewardRequestBody {
  campaign: string
  parameters: {
    loyalty: {
      points?: number
    }
  }
}

// Domain types 
// Based on above 0-level types, only one domain type and two subtypes of domain type can be defined

// Basic reward assignment properties, common for most of the 0-level endpoints
// Exists because:
// - it's defined as building block in Voucherify documentation: https://docs.voucherify.io/reference/reward-assignment-object
// - it's used in two places: List assignments response, get assignment response
// - in this case, the Reward Assignment type can have two different forms
type RewardAssignment = RewardsAssignmentCoinReward | RewardsAssignmentCampaignOrMaterialReward

interface RewardsAssignmentCoinReward {
  id: string
  reward_id: string
  related_object_id: string
  related_object_type: 'campaign'
  created_at: string
  updated_at: string | null
  object: 'reward-assignment'
}

interface RewardsAssignmentCampaignOrMaterialReward {
  id: string
  reward_id: string
  related_object_id: string
  related_object_type: 'campaign'
  created_at: string
  updated_at: string | null
  object: 'reward-assignment'
  parameters: {
    loyalty: {
      points?: number
    }
  }
}

rewards.getAssignment(rewardId: string, assignmentId: string): RewardsGetAssignmentResponseBody {}
rewards.listAssignments(rewardId: string, params: RewardsListAssignmentsRequestQuery): RewardsListAssignmentsResponseBody {}
rewards.createAssignment(rewardId: string, assignment: RewardsCreateAssignmentRequestBody): RewardsCreateAssignmentResponseBody {}
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
