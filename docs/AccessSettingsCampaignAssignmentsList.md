# Voucherify.AccessSettingsCampaignAssignmentsList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **String** | The type of the object represented by JSON. Default is &#x60;list&#x60;. This object stores information about campaign assignments to areas and stores | [optional] [default to &#39;list&#39;]
**dataRef** | **String** | Identifies the name of the attribute that contains the array of campaign assignments. | [optional] [default to &#39;data&#39;]
**data** | [**[AreaStoreCampaignAssignment]**](AreaStoreCampaignAssignment.md) | Contains an array of campaign assignments. | [optional] 
**total** | **Number** | Total number of areas and stores to which the campaign is assigned. | [optional] 



## Enum: ObjectEnum


* `list` (value: `"list"`)





## Enum: DataRefEnum


* `data` (value: `"data"`)




