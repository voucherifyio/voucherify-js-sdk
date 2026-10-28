# Voucherify.ExamineCustomerIdentification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Identification method. | [optional] 
**customerId** | **String** | Unique customer ID (&#x60;cust_...&#x60;). Required when &#x60;type&#x60; is &#x60;customer_id&#x60;. | [optional] 
**customerSourceId** | **String** | Customer source ID, e.g. from an external system. May be provided as a string or a number. Required when &#x60;type&#x60; is &#x60;customer_source_id&#x60;. | [optional] 
**memberId** | **String** | Loyalty member ID (&#x60;lmbr_...&#x60;). Required when &#x60;type&#x60; is &#x60;member_id&#x60;. | [optional] 



## Enum: TypeEnum


* `customer_id` (value: `"customer_id"`)

* `customer_source_id` (value: `"customer_source_id"`)

* `member_id` (value: `"member_id"`)




