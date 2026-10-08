# Voucherify.MemberWithCards

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Identifies the member. | [optional] 
**customerId** | **String** | Identifies the enrolled customer. | [optional] 
**programId** | **String** | Identifies the loyalty program. | [optional] 
**status** | **String** | Current member status. Allowed values: &#x60;ACTIVE&#x60;, &#x60;INACTIVE&#x60;, &#x60;DELETED&#x60;. &#x60;INACTIVE&#x60; members cannot earn points or redeem rewards. | [optional] 
**metadata** | **Object** | Stores custom member metadata. Empty object when none is set. | [optional] 
**createdAt** | **Date** | Records when the member was created (ISO 8601). | [optional] 
**updatedAt** | **Date** | Records the last update (ISO 8601). &#x60;null&#x60; if the member has never been updated. | [optional] 
**object** | **String** | Object type. Always &#x60;member&#x60;. | [optional] [default to &#39;member&#39;]
**cards** | [**[MemberCard]**](MemberCard.md) | Member&#39;s loyalty cards - one per card definition assigned to the program. Card codes are generated asynchronously, so &#x60;card.code&#x60; may be &#x60;null&#x60; right after member creation. | [optional] 



## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `INACTIVE` (value: `"INACTIVE"`)

* `DELETED` (value: `"DELETED"`)





## Enum: ObjectEnum


* `member` (value: `"member"`)




