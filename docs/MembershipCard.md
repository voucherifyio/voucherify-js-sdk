# Voucherify.MembershipCard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memberRole** | **String** | Role of the member on this card. Currently, loyalty program members can have only the &#x60;OWNER&#x60; role. | [optional] 
**createdAt** | **Date** | Timestamp when the card was assigned to the member (ISO 8601). | [optional] 
**card** | [**CardSimple**](CardSimple.md) |  | [optional] 
**object** | **String** | Object type marker, always &#x60;member_card&#x60;. | [optional] [default to &#39;member_card&#39;]
**tierProgress** | [**MemberTierProgress**](MemberTierProgress.md) |  | [optional] 



## Enum: MemberRoleEnum


* `OWNER` (value: `"OWNER"`)

* `MEMBER` (value: `"MEMBER"`)





## Enum: ObjectEnum


* `member_card` (value: `"member_card"`)




