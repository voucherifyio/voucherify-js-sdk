# Voucherify.RewardPurchaseDigitalGiftVoucher

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Voucher identifier of the gift voucher. | [optional] 
**code** | **String** | Gift voucher code. | [optional] 
**amount** | **Number** | Amount added to (or, for refunds, subtracted from) the gift voucher balance. | [optional] 
**balance** | **Number** | Gift voucher balance after the operation. | [optional] 
**result** | **String** | Refund handling result for this gift voucher (present in refund results):  - &#x60;CREDITS_SUBTRACTED&#x60;: The credited balance was subtracted.  - &#x60;SKIPPED&#x60;: The voucher was left intact. | [optional] 



## Enum: ResultEnum


* `SKIPPED` (value: `"SKIPPED"`)

* `CREDITS_SUBTRACTED` (value: `"CREDITS_SUBTRACTED"`)




