# Voucherify.RewardsListResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **String** | The type of the object represented by JSON. | [optional] [default to &#39;list&#39;]
**dataRef** | **String** | Identifies the name of the attribute that contains the array of transaction objects. | [optional] [default to &#39;data&#39;]
**data** | [**[Reward]**](Reward.md) | A dictionary that contains an array of rewards. Each entry in the array is a separate transaction object. | [optional] 
**total** | **Number** | Returns how many rewards in the project meet the limits defined by the query parameter definitions. | [optional] 


