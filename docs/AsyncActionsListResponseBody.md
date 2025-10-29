# Voucherify.AsyncActionsListResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **String** | The type of the object represented by JSON. This object stores information about asynchronous actions. | [optional] [default to &#39;list&#39;]
**dataRef** | **String** | Identifies the name of the JSON property that contains the array of asynchronous actions. | [optional] [default to &#39;async_actions&#39;]
**asyncActions** | [**[AsyncActionBase]**](AsyncActionBase.md) |  | [optional] 
**hasMore** | **Boolean** | As query results are always limited by parameters, the &#x60;has_more&#x60; flag indicates if there are more records available. This lets you know if you can run another request to get more records returned in the results. | [optional] 



## Enum: ObjectEnum


* `list` (value: `"list"`)





## Enum: DataRefEnum


* `async_actions` (value: `"async_actions"`)




