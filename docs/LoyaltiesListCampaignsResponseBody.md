# Voucherify.LoyaltiesListCampaignsResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **String** | The type of the object represented by JSON. This object stores information about loyalty campaigns in a dictionary. | [optional] [default to &#39;list&#39;]
**dataRef** | **String** | Identifies the name of the attribute that contains the array of loyalty campaign objects. | [optional] [default to &#39;campaigns&#39;]
**campaigns** | [**[LoyaltyCampaign]**](LoyaltyCampaign.md) | Contains an array of loyalty campaign objects. | [optional] 
**total** | **Number** | Total number of loyalty campaign objects. | [optional] 



## Enum: DataRefEnum


* `campaigns` (value: `"campaigns"`)




