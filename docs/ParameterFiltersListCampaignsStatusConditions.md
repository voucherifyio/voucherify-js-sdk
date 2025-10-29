# Voucherify.ParameterFiltersListCampaignsStatusConditions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Object** | Campaigns finished generation codes. This also returns campaigns regardless of their &#x60;expiration_date&#x60; and &#x60;start_date&#x60;. | [optional] 
**failed** | **Object** | Campaigs failed to generated codes. | [optional] 
**inProgress** | **Object** | Campaigns are generating codes or they are updating. | [optional] 
**expired** | **Object** | Campaigns generated codes, but their &#x60;expiration_date&#x60; is in the past. | [optional] 
**beforeStart** | **Object** | Campaigns generated codes, but their &#x60;start_date&#x60; is in the future. | [optional] 


