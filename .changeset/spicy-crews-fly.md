---
'@voucherify/sdk': patch
---

Add 'active' field to 'PromotionTier' interface. Add 'PromotionTierRedeemDetailsSimple' and 'PromotionTierRedeemDetails' types and reuse them in 'RedemptionsRedeemResponse' so that 'RedemptionsRedeemStackableRedemptionResult' can return promotion_tier property
