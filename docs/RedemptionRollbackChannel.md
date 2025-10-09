# Voucherify.RedemptionRollbackChannel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channelId** | **String** | Unique identifier of the channel which was used by the user performing the redemption rollback. This is either a user ID from the user using the Voucherify Dashboard or an X-APP-Id of a user using the API. | [optional] 
**channelType** | **String** | The source of the channel for the redemption. A &#x60;USER&#x60; corresponds to the Voucherify Dashboard and an &#x60;API&#x60; corresponds to the API. | [optional] 



## Enum: ChannelTypeEnum


* `USER` (value: `"USER"`)

* `API` (value: `"API"`)




