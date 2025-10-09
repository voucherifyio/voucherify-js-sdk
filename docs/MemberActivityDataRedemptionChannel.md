# Voucherify.MemberActivityDataRedemptionChannel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channelId** | **String** | Unique channel ID of the user performing the redemption. This is either a user ID from a user using the Voucherify Dashboard, an X-APP-Id of a user using the API, or the reward assignment ID for automatic reward redemption. | [optional] 
**channelType** | **String** | The source of the channel for the redemption: &#x60;USER&#x60; - the redemption was made in the Voucherify Dashboard by a user,  &#x60;API&#x60; - redemption was made through the API, &#x60;AUTO_REDEEM&#x60; - the redemption was made automatically for a reward. | [optional] 



## Enum: ChannelTypeEnum


* `API` (value: `"API"`)

* `AUTO_REDEEM` (value: `"AUTO_REDEEM"`)

* `USER` (value: `"USER"`)




