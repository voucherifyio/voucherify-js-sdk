# Voucherify.ParameterFiltersListBinResourceTypeConditions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_in** | **[String]** | Array of resource values that should be included in the results (multiple values). | [optional] 
**notIn** | **[String]** | Array of resource values that should be included in the results (multiple values). | [optional] 
**is** | **String** | Value is exactly this value (single value). | [optional] 
**isNot** | **String** | Results omit this value (single value). | [optional] 
**hasValue** | **String** | Value is NOT null. The value for this parameter is an empty string. | [optional] 
**isUnknown** | **String** | Value is null. The value for this parameter is an empty string. | [optional] 
**startsWith** | **String** | Value starts with the specified string. | [optional] 
**endsWith** | **String** | Value ends with the specified string. | [optional] 



## Enum: [InEnum]


* `campaign` (value: `"campaign"`)

* `product` (value: `"product"`)

* `sku` (value: `"sku"`)

* `voucher` (value: `"voucher"`)





## Enum: [NotInEnum]


* `campaign` (value: `"campaign"`)

* `product` (value: `"product"`)

* `sku` (value: `"sku"`)

* `voucher` (value: `"voucher"`)





## Enum: IsEnum


* `campaign` (value: `"campaign"`)

* `product` (value: `"product"`)

* `sku` (value: `"sku"`)

* `voucher` (value: `"voucher"`)





## Enum: IsNotEnum


* `campaign` (value: `"campaign"`)

* `product` (value: `"product"`)

* `sku` (value: `"sku"`)

* `voucher` (value: `"voucher"`)




