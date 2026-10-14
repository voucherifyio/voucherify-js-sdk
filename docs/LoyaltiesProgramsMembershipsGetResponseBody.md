# Voucherify.LoyaltiesProgramsMembershipsGetResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**member** | [**Member**](Member.md) |  | 
**program** | [**ProgramSimple**](ProgramSimple.md) |  | 
**cards** | [**[MembershipCard]**](MembershipCard.md) | Member&#39;s loyalty cards, one per card definition assigned to the program. &#x60;tier_progress&#x60; is present when that card definition has a tier structure and the member has a tier on the card. Otherwise it is omitted. &#x60;card.code&#x60; can be &#x60;null&#x60; right after member creation, while code generation is still running. | [optional] 
**object** | **String** | Object type marker, always &#x60;membership&#x60;. | [optional] [default to &#39;membership&#39;]



## Enum: ObjectEnum


* `membership` (value: `"membership"`)




