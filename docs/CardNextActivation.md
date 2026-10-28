# Voucherify.CardNextActivation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**points** | **Number** | Number of pending points to be activated. | [optional] [default to 0]
**type** | **String** | Pending points activation type from the card definition. | [optional] 
**date** | **Date** | Activation date (&#x60;YYYY-MM-DD&#x60;). Present for all types except &#x60;EVENT_BASED&#x60;. | [optional] 
**cancelDate** | **Date** | Date when the pending points are canceled if the activating event does not occur (&#x60;YYYY-MM-DD&#x60;). Present only for the &#x60;EVENT_BASED&#x60; type. | [optional] 



## Enum: TypeEnum


* `IMMEDIATE` (value: `"IMMEDIATE"`)

* `PERIOD_BASED` (value: `"PERIOD_BASED"`)

* `FIXED_DATES` (value: `"FIXED_DATES"`)

* `EVENT_BASED` (value: `"EVENT_BASED"`)




