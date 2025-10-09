# Voucherify.TrashBinItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the trash bin entry. It should not be confused with the ID of the resource moved to the bin. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the resource was moved to the bin. The value for this parameter is shown in the ISO 8601 format. | [optional] 
**deletedByUserId** | **String** | Unique identifier of the user who moved the resource to the bin. It returns a user ID if the resource was moved to the bin through an action in the website. It returns a &#x60;null&#x60; if the resource was deleted through the API. | [optional] 
**resourceId** | **String** | Unique identifier of the resource moved to the bin, i.e. an ID of a campaign, product, SKU, or voucher. | [optional] 
**resourceType** | **String** | Type of the resource moved to the bin. | [optional] 
**resourceName** | **String** | Name of the resouce moved to the bin. It is the name of the campaign, product or SKU, or the voucher code. | [optional] 
**resourceParentId** | **String** | Unique identifier of the parent resource. For a voucher, it is a campaign ID, except for generic (standalone) vouchers. For an SKU, it is the product ID. It returns &#x60;null&#x60; for campaigns and base products. | [optional] 
**object** | **String** | The type of the object represented by JSON. It is equal to the &#x60;resource_type&#x60;. | [optional] 



## Enum: ResourceTypeEnum


* `campaign` (value: `"campaign"`)

* `product` (value: `"product"`)

* `sku` (value: `"sku"`)

* `voucher` (value: `"voucher"`)





## Enum: ObjectEnum


* `campaign` (value: `"campaign"`)

* `product` (value: `"product"`)

* `sku` (value: `"sku"`)

* `voucher` (value: `"voucher"`)




