# Voucherify.QualificationsRedeemables

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **String** | The type of the object represented by JSON. Default is &#x60;list&#x60;. | [optional] [default to &#39;list&#39;]
**dataRef** | **String** | Identifies the name of the attribute that contains the array of qualified redeemables. | [optional] [default to &#39;data&#39;]
**data** | [**[QualificationsRedeemable]**](QualificationsRedeemable.md) | Array of qualified redeemables. | [optional] 
**total** | **Number** | The number of redeemables returned in the API request. | [optional] 
**hasMore** | **Boolean** | As results are always limited, the &#x60;has_more&#x60; flag indicates if there are more records for given parameters. This lets you know if you can run another request (with different options) to get more records returned in the results. | [optional] 
**moreStartingAfter** | **Date** | Timestamp representing the date and time to use in &#x60;starting_after&#x60; cursor to get more redeemables. | [optional] 



## Enum: ObjectEnum


* `list` (value: `"list"`)





## Enum: DataRefEnum


* `data` (value: `"data"`)




