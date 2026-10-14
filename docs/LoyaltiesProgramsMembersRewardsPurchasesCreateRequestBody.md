# Voucherify.LoyaltiesProgramsMembersRewardsPurchasesCreateRequestBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rewardId** | **String** | Unique identifier of the reward to purchase (format &#x60;lrew_...&#x60;). | [optional] 
**mode** | **String** | Purchase mode. &#x60;TRANSACTION&#x60; creates a &#x60;PENDING&#x60; reward transaction processed asynchronously (HTTP &#x60;202&#x60;). &#x60;DRY_RUN&#x60; only simulates the purchase and returns the calculation result (HTTP &#x60;200&#x60;); no transaction is created. Defaults to &#x60;TRANSACTION&#x60; when omitted. | [optional] [default to &#39;TRANSACTION&#39;]



## Enum: ModeEnum


* `TRANSACTION` (value: `"TRANSACTION"`)

* `DRY_RUN` (value: `"DRY_RUN"`)




