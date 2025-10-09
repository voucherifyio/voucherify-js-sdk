# Voucherify.LoyaltiesListMembersResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **String** | The type of the object represented by JSON. This object stores information about members in a dictionary. | [optional] [default to &#39;list&#39;]
**dataRef** | **String** | Identifies the name of the attribute that contains the array of voucher objects. | [optional] [default to &#39;vouchers&#39;]
**vouchers** | [**[LoyaltyMember]**](LoyaltyMember.md) | Contains array of voucher objects representing loyalty cards, in other words, loyalty program members. | [optional] 
**total** | **Number** | Total number of voucher objects. | [optional] 



## Enum: DataRefEnum


* `vouchers` (value: `"vouchers"`)




