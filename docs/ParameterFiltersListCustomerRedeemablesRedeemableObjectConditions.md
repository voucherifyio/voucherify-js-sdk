# Voucherify.ParameterFiltersListCustomerRedeemablesRedeemableObjectConditions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_in** | **[String]** | Array of resource values that should be included in the results (multiple values). | [optional] 
**notIn** | **[String]** | Array of resource values that should be included in the results (multiple values). | [optional] 
**is** | **String** | Value is exactly this value (single value). | [optional] [default to &#39;voucher&#39;]
**isNot** | **String** | Results omit this value (single value). | [optional] [default to &#39;voucher&#39;]
**hasValue** | **String** | Value is NOT null. The value for this parameter is an empty string. | [optional] 
**isUnknown** | **String** | Value is null. The value for this parameter is an empty string. | [optional] 
**startsWith** | **String** | Value starts with the specified string. | [optional] 
**endsWith** | **String** | Value ends with the specified string. | [optional] 



## Enum: [InEnum]


* `voucher` (value: `"voucher"`)





## Enum: [NotInEnum]


* `voucher` (value: `"voucher"`)





## Enum: IsEnum


* `voucher` (value: `"voucher"`)





## Enum: IsNotEnum


* `voucher` (value: `"voucher"`)




