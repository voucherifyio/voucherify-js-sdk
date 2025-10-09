# Voucherify.PromotionTiersList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **String** | The type of the object represented by JSON. This object stores information about promotion tiers in a dictionary. | [optional] [default to &#39;list&#39;]
**dataRef** | **String** | Identifies the name of the attribute that contains the array of promotion tier objects. | [optional] [default to &#39;tiers&#39;]
**tiers** | [**[PromotionTier]**](PromotionTier.md) | Contains array of promotion tier objects. | [optional] 
**total** | **Number** | Total number of promotion tiers. | [optional] 
**hasMore** | **Boolean** | As query results are always limited (by the limit parameter), the &#x60;has_more&#x60; flag indicates if there are more records for given filter parameters. This lets you know if you can run another request to get more records returned in the results. | [optional] 


