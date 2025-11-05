# Voucherify.VouchersRedemptionGetResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **Number** | The maximum number of times a voucher can be redeemed. | [optional] 
**redeemedQuantity** | **Number** | The number of times the voucher was redeemed successfully. | [optional] 
**object** | **String** | The type of the object represented by JSON. This object stores information about redemptions in a dictionary. | [optional] [default to &#39;list&#39;]
**url** | **String** | URL | [optional] 
**dataRef** | **String** | Identifies the name of the attribute that contains the array of &#x60;redemption_entries&#x60;. | [optional] [default to &#39;redemption_entries&#39;]
**total** | **Number** | Total number of redemption objects. | [optional] 
**redemptionEntries** | [**[RedemptionEntry]**](RedemptionEntry.md) | Contains the array of successful and failed redemption objects. | 


