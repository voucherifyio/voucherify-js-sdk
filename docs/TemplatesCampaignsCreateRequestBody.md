# Voucherify.TemplatesCampaignsCreateRequestBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignId** | **String** | Unique identifier of the campaign that will create a template. It must be an ID of an existing discount or gift card campaign. It cannot be passed when &#x60;promotion_tier_id&#x60; has value. Required when the &#x60;promotion_tier_id&#x60; is not passed or it is &#x60;null&#x60;. | [optional] 
**promotionTierId** | **String** | Unique identifier of the promotion tier that will create a template. It cannot be passed when &#x60;campaign_id&#x60; has value. Required when the &#x60;campaign_id&#x60; is not passed or it is &#x60;null&#x60;. | [optional] 
**name** | **String** | User-defined name of the campaign template. It must be unique. | [optional] 
**description** | **String** | User-defined description of the campaign template. | [optional] 


