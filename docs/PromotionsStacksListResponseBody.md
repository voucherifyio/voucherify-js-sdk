# Voucherify.PromotionsStacksListResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **String** | The type of the object represented by JSON. This object stores information about promotion stacks in a dictionary. | [optional] [default to &#39;list&#39;]
**dataRef** | **String** | Identifies the name of the attribute that contains the array of promotion stack objects. | [optional] [default to &#39;data&#39;]
**data** | [**[PromotionStack]**](PromotionStack.md) | Contains array of promotion stack objects. | [optional] 
**total** | **Number** | Total number of promotion stacks. | [optional] 



## Enum: ObjectEnum


* `list` (value: `"list"`)





## Enum: DataRefEnum


* `data` (value: `"data"`)




