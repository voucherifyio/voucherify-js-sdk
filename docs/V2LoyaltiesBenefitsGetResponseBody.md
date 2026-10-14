# Voucherify.V2LoyaltiesBenefitsGetResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique benefit ID, prefixed with &#x60;lben_&#x60;. | [optional] 
**name** | **String** | Benefit name, unique within the project. | [optional] 
**type** | **String** | Benefit type. | [optional] 
**status** | **String** | Current benefit status. &#x60;DELETED&#x60; appears only in the response of the delete endpoint and in activity snapshots. | [optional] 
**stock** | [**V2LoyaltiesBenefitsGetResponseBodyStock**](V2LoyaltiesBenefitsGetResponseBodyStock.md) |  | [optional] 
**points** | [**V2LoyaltiesBenefitsGetResponseBodyPoints**](V2LoyaltiesBenefitsGetResponseBodyPoints.md) |  | [optional] 
**pointsProportional** | [**V2LoyaltiesBenefitsGetResponseBodyPointsProportional**](V2LoyaltiesBenefitsGetResponseBodyPointsProportional.md) |  | [optional] 
**material** | **Object** |  | [optional] 
**digital** | **Object** |  | [optional] 
**createdAt** | **Date** | Timestamp of when the benefit was created, in ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp of the last update, in ISO 8601 format. &#x60;null&#x60; when the benefit was never updated. | [optional] 
**object** | **String** | Type of the object. Always &#x60;benefit&#x60;. | [optional] [default to &#39;benefit&#39;]



## Enum: TypeEnum


* `POINTS` (value: `"POINTS"`)

* `POINTS_PROPORTIONAL` (value: `"POINTS_PROPORTIONAL"`)

* `MATERIAL` (value: `"MATERIAL"`)

* `DIGITAL` (value: `"DIGITAL"`)





## Enum: StatusEnum


* `DRAFT` (value: `"DRAFT"`)

* `ACTIVE` (value: `"ACTIVE"`)

* `DELETED` (value: `"DELETED"`)





## Enum: ObjectEnum


* `benefit` (value: `"benefit"`)




