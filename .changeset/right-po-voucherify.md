---
'@voucherify/sdk': minor
---

Add support for few endpoints of Loyalties API.
- Added support for new endpoints: `POST /v1/qualifications`, `POST /client/v1/qualifications` [(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
- New exported types/interfaces: `InapplicableTo`, `ReferrerRequest`, `ReferrerResponse`, `CustomerResponse`, `CustomerSummary`, `CustomerSummaryRedemptions`, `CustomerSummaryOrders`, `CustomerLoyalty`, `CustomerReferrals`, `Discount`, `DiscountAmount_`, `DiscountUnit_`, `DiscountUnitBase_`, `DiscountUnitMultiple_`, `DiscountPercent_`, `DiscountFixed_`, `OrderRequest`, `OrderItemRequest`, `OrderResponse`, `OrderRedemptions`, `OrderItemResponse`, `QualificationsCheckEligibilityRequestBody`, `QualificationsCheckEligibilityResponseBody`, `QualificationsFiltersFields`, `QualificationsFiltersCondition`, `QualificationsFieldConditions`, `QualificationsRedeemablesResponse`, `QualificationsStackingRulesResponse`, `QualificationsRedeemable`, `QualificationsRedeemableBase`, `RedeemableSingleResultResponse`, `ValidationRulesAssignmentsList`,
- Added optional properties to `ApplicableTo`: `product_id`, `product_source_id`, `quantity_limit`, `aggregated_quantity_limit`, `amount_limit`, `aggregated_amount_limit`, `order_item_indices`
- Added required property: `data_ref: 'data'` to `ApplicableToResultList` // NOTE: as this type is only used in responses, this is not a breaking change.
- Added optional properties to `CustomerRequest`: `birthday` and `birthdate`
