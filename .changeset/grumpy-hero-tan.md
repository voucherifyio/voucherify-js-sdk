---
'@voucherify/sdk': minor
---

Added support for following endpoints:
  - campaigns
    - POST /campaigns/campaignId/enable
    - POST /campaigns/campaignId/disable
    - POST /campaigns/campaignId/importCSV
  - categories
    - GET, POST /categories
    - GET, PUT, DELETE /categories/categoryId
  - customers
    - POST /customers/customerId/permanent-deletion
    - POST /customers/bulk/async
    - POST /customers/metadata/async
    - POST /customers/importCSV
  - exports
    - GET /exports/exportResourceId
  - loyalties
    - GET /loyalties/campaignId/tiers/tierId/rewards
    - GET /loyalties/campaignId/rewards/assignmentId
    - GET /loyalties/campaignId/earning-rules/earningRuleId
    - POST /loyalties/campaignId/earning-rules/earningRuleId/enable
    - POST /loyalties/campaignId/earning-rules/earningRuleId/disable
    - GET /loyalties/members/memberId
    - GET /loyalties/members/memberId/activities
    - GET /loyalties/members/memberId/points-expiration
    - GET /loyalties/members/memberId/rewards
    - GET /loyalties/members/memberId/transactions
    - POST /loyalties/members/memberId/transactions/export
    - GET /loyalties/campaignId/members/memberId/transactions
    - POST /loyalties/campaignId/members/memberId/transactions/export
    - POST /loyalties/campaignId/members/memberId/transfers
    - POST /loyalties/campaignId/points-expiration/export
    - GET /loyalties/campaignId/reward-assignments/assignmentId
    - GET /loyalties/campaignId/reward-assignments/assignmentId/reward
    - GET /loyalties/campaignId/tiers
    - GET /loyalties/campaignId/tiers/tierId
    - GET /loyalties/campaignId/tiers/tierId/earning-rules
    - GET /loyalties/members/memberId/tiers
  - orders
    - POST /orders/export
  - product-collections
    - GET /product-collections
    - GET DELETE /product-collections/productCollectionId
    - GET /product-collections/productCollectionId/products
  - products
    - POST /skus/importCSV
    - POST /products/importCSV
  - promotions
    - GET, POST /promotions/campaignId/stacks
    - GET, PUT, DELETE /promotions/campaignId/stacks/stackId
    - GET /promotions/stacks
    - POST /promotions/tiers/promotionsTierId/validation
    - POST /promotions/tiers/promotionsTierId/disable
    - POST /promotions/tiers/promotionsTierId/enable
  - validation-rules
    - GET /validation-rules-assignments
  - vouchers
    - POST /vouchers/importCSV
    - GET /vouchers/code/transactions
    - POST /vouchers/code/transactions/export

Types of (server side) requests and responses were aligned with https://github.com/voucherifyio/voucherify-openapi

TypeScript types changes:

- client.vouchers.import(vouchers)
    - Request (body) params:
        - Request type object `VouchersImport` was replaced with 2 options: `VouchersImportGiftVoucherObject` or `VouchersImportGiftDiscountObject`
            - `VouchersImportGiftVoucherObject`:
                - Added optional key: `gift`
                - Removed optional key: `code_config`
            - `VouchersImportGiftDiscountObject`:
                - `discount` key has 6 options:
                    - VoucherObjectDiscountAmount
                    - VoucherDiscountPercentagePost
                    - VoucherObjectDiscountFixed
                    - VoucherObjectDiscountUnitOne
                    - VoucherObjectDiscountUnitMultiple
                    - VoucherObjectDiscountShipping
                - Removed optional key: `code_config`

- client.vouchers.disable(code), client.vouchers.enable(code)
    - Returned value (`VouchersResponse`):
        - Added optional keys: `campaign_id`, `category_id`, `categories`.
        - Modified optional `type` key - new predefined string: 'loyalty_card'
        - Modified optional `gift` key - new property: `effect`
        - Modified optional `loyalty_card` key - new properties: `balance`, `next_expiration_date`, `next_expiration_points`
        - Modified optional `publish` key - new properties: `data_ref`, `entries`, `total`
        - Modified optional `redemption` key - added new properties: `redeemed_amount`, `redeemed_points`, `total`, removed: `data_ref`, `redemption_entries`, `total`
        - Modified optional `validity_day_of_week` key - to be an array of predefined numbers.
        - Removed optional `referrer_id` key.


- client.vouchers.list(params)
    - Query params:
        - `VouchersListParams`:
            - Added optional key: `campaign_id`
            - Deleted optional key: `filters`
            - Updated predefined values of optional key: `order`. Removed `type`, `-type`, `campaign`, `-campaign`, `category`, `-category`
                - `VouchersListParams` object has changed (added `campaign_id`, deleted `filters`).
            - `VouchersListParams` was used in ClientSide method: `listVouchers`, the method no longer exists on the ClientSide
    - Returned value:
        - `VouchersListResponse`:
            - Updated `vouchers` key - the `validation_rules_assignments` property is not required


- client.vouchers.update(voucher)
    - Request (body) params:
        - `VouchersUpdate`:
            - Removed `code` key.
            - Added optional keys: `category_id`, `loyalty_card`
            - Updated optional key: `gift` - new optional property: `effect`
    - Returned value (`VouchersUpdateResponse`):
        - Added optional keys: `campaign_id`, `category_id`, `categories`.
        - Modified optional `type` key - new predefined string: `loyalty_card`
        - Modified optional `gift` key - new property: `effect`
        - Modified optional `loyalty_card` key - new properties: `balance`, `next_expiration_date`, `next_expiration_points`
        - Modified optional `publish` key - new properties: `data_ref`, `entries`, `total`
        - Modified optional `redemption` key - added new properties: `redeemed_amount`, `redeemed_points`, `total`, removed: `data_ref`, `redemption_entries`, `total`
        - Modified optional `validity_day_of_week` key - to be an array of predefined numbers.
        - Removed optional `referrer_id` key.

- client.vouchers.create(voucher)
    - Request (body) params (VouchersCreateBody):
        - Added optional keys: `campaign`, `campaign_id`, `category_id`, `validity_timeframe`, `loyalty_card`, `validation_rules`, `validity_day_of_week`
    - Returned value (`VouchersCreateResponse`):
        - Added optional key: `validation_rules_assignments`

- client.vouchers.qualifications.examine(body, params)
- Request (body) params:
    - `VouchersQualificationExamineBody`:
        - Optional `customer` key:
            - Added optional keys:  `birthdate`, `phone`, `address` object
            - Removed optional `description` key``
        - Optional `order` key has 4 options: VouchersQualificationProductObject, VouchersQualificationSkuObject, VouchersQualificationProductUsingProductIdObject, VouchersQualificationProductUsingSourceIdObject
- Query params:
    - `VouchersQualificationExamineParams`:
        - Updated optional `order` key - added new predefined values: `code`, `-code`
- Returned value:
    - `VouchersQualificationExamineResponse`:
        - Added keys: `id`, `created_at`, `tracking_id`
        - Updated optional `data` (array ob objects)
            - Added optional properties: `applicable_to`, `inapplicable_to`

- client.validations.validateVoucher(code, params)
    - Request (body) params:
        - `ValidationsValidateVoucherParams` has 3 options: `ReqValidateVoucherDiscountCode`, `ReqValidateVoucherGiftCard`, `ReqValidateVoucherLoyaltyCard`
    - Returned value:
        - `ValidationsValidateVoucherResponse` has 4 options: `ResponseValidateVoucherDiscountCode`, `ResponseValidateVoucherGiftCard`, `ResponseValidateVoucherLoyaltyCard`, `ResponseValidateVoucherFalse`


- client.validations.validateStackable(params)
    - Request (body) params:
        - `ValidationsValidateStackableParams`:
            - Updated `redeemables` array - has 3 options: `RedeemablesDiscountReferralPromotionTierPromotionStack`, `RedeemablesGiftCard`, `RedeemablesLoyaltyCard`
            - Updated `order` key -  new property: `id`, optional property: `referrer`
            - Updated `customer` key - new properties: `birthday` and `birthdate`
    - Returned value:
        - `ValidationValidateStackableResponse` has 2 options: `ResponseValidationsTrue` or `ResponseValidationsFalse`
            - `ResponseValidationsTrue`:
                - Updated default value of `valid` key: `true`
                - Updated optional `redeemables` key - it has 5 options:
                    - `ResponseValidationsRedeemablesDiscountVoucher`,
                    - `ResponseValidationsRedeemablesGiftCard`,
                    - `ResponseValidationsRedeemablesLoyaltyCard`,
                    - `ResponseValidationsRedeemablesPromotionTier`,
                    - `ResponseValidationsRedeemablesPromotionStack`
            - Updated optional `order` key:
                - Removed property `id`, `created_at`,
                - Removed optional properties: `source_id`, `updated_at`, `status`, `initial_amount`, `customer`
                - Added optional properties: `customer_id`, `referrer_id`
            - `ResponseValidationsFalse`:
                - Updated default value of `valid` key: `false`
                - Updated optional `redeemables` key - it has 5 options:
                    - `ResponseValidationsRedeemablesDiscountVoucher`,
                    - `ResponseValidationsRedeemablesGiftCard`,
                    - `ResponseValidationsRedeemablesLoyaltyCard`,
                    - `ResponseValidationsRedeemablesPromotionTier`,
                    - `ResponseValidationsRedeemablesPromotionStack`
            - Updated optional `redeemables` key:
                - Removed optional `order`, `applicable_to`, `inapplicable_to` key
                - Updated optional `result` key: removed optional keys: `discount`, `gift`, `loyalty_card`
                - Added optional `category` key (CategoryObject)


- client.validationRules.create(validationRule)
    - Request (body) params:
        - `ValidationRulesCreate`:
            - Added optional `applicable_to` key (`ApplicableToObject`)
            - Updated optional `rules` key - Record definition has been extended.
                - Previously: `[rule: string]: any`
                - Now: Record of key type: `number` and optional properties: `name`, `property`, `conditions`, `rules`, `error`
    - Returned value:
      `ValidationRulesCreateResponse`:
        - Updated optional `rules` key - Record definition has been extended.
            - Previously: `[rule: string]: any`
            - Now: Record of key type: `number` and optional properties: `name`, `property`, `conditions`, `rules`, `error`
        - Added optional `applicable_to` key.
        - Added optional `context_type` key with predefined values of type: `ValidationRulesObjectContextType`
        - Added optional `type` key with predefined values of type: `ValidationRulesObjectType`

- client.validationRules.get(validationRuleId)
    - Returned value:
        - `ValidationRulesGetResponse`:
            - Updated optional `rules` key - Record definition has been extended.
                - Previously: `[rule: string]: any`
                - Now: Record of key type: `number` and optional properties: `name`, `property`, `conditions`, `rules`, `error`
            - Removed optional `assignments_count` key.
            - Added optional `applicable_to`, `type`, `context_type` keys.

- client.validationRules.update(validationRule)
    - Returned value:
        - also ValidationRulesObject
    - Body params type:
        - All parameters from ValidationRulesCreate (optional) and required `id` property

client.validationRules.createAssignment(validationRuleId, assignment)
- Request (body) params:
    - The ValidationRulesCreateAssignment that previously contained 3 properties: voucher, campaign, promotion_tier now has 6 options:
        - `ValidationRuleAssignmentsVoucher` (property: `voucher`)
        - `ValidationRuleAssignmentsCampaign` (property: `campaign`)
        - `ValidationRuleAssignmentsPromotionTier` (property: `promotion_tier`)
        - `ValidationRuleAssignmentsEarningRule` (property: `earning_rule`)
        - `ValidationRuleAssignmentsReward` (properties: `related_object_id`, `related_object_type`)
        - `ValidationRuleAssignmentsDistribution` (property: `distribution`)
- Returned value:
    - `ValidationRulesCreateAssignmentObject`
        - Updated optional `related_object_type` key with 6 predefined values
        - Deleted `updated_at` key.

client.validationRules.list()
client.validationRules.list(params)
- Query params:
    - Added optional `order` key  with 6 predefined values: 'created_at' | '-created_at' | '-name' | 'name' | 'updated_at' | '-updated_at'
- Returned value:
    - `ValidationRulesListResponse`
        - `data` key is `ValidationRulesObject`
            - Added optional `applicable_to`, `type`, `context_type` keys.
            - Deleted optional `assignments_count` key.


client.validationRules.listAssignments(validationRuleId)
client.validationRules.listAssignments(validationRuleId, params)
- Query params:
    - `ValidationRulesListAssignmentsParams`:
        - Added optional `order` key with 2 predefined values: '-created_at' | 'created_at'
    - new property: order ('-created_at' | 'created_at')
- Returned value:
    - `ValidationRulesCreateAssignmentObject`
        - Updated optional `related_object_type` key with 6 predefined values
        - Deleted `updated_at` key.


client.segments.create(segment)
- Request (body) params:
    - `SegmentsCreate` has 2 options: `SegmentsCreateStatic` or `SegmentsCreateAutoUpdate`
- Returned value:
    - `SegmentsCreateResponse`:
        - Updated optional `filter`, `type` keys
        - Added optional `initial_sync_status` key with 2 predefined values: 'DONE' | 'IN_PROGRESS'
        - Removed optional `metadata` key

client.segments.get(segmentId)
- Returned value:
    - `SegmentsCreateResponse`:
        - Updated optional `filter`, `type` keys
        - Added optional `initial_sync_status` key with 2 predefined values: 'DONE' | 'IN_PROGRESS'
        - Removed optional `metadata` key

client.rewards.list()
client.rewards.list(params)
- Query params:
    - `RewardsListParams`:
    -  Added optional `assignment_id` key
- Returned value:
    - `RewardsListResponse`
        - Replaced `RewardsResponse` and `RewardsTypeResponse` with a `RewardObject`.

client.rewards.create(reward)
- Request (body) params:
    - `RewardsCreate` has 3 options: `CreateRewardCampaign`, `CreateRewardMaterial`, `CreateRewardCoin`
        -  `CreateRewardCampaign`:
        - Added `name`, `parameters` keys.
        - Added optional `type`, `metadata` keys.
        - `parameters` key - it has one optional property: `campaign`. `campaign` has 3 options: `RewardParametersCampaignLoyaltyProgram`, `RewardParametersCampaignGiftVouchers`, `RewardParametersCampaignDiscountCoupons`
        - `CreateRewardMaterial`:
            - Added optional `name`, `type`, `parameters`, `stock`, `attributes` (with optional `image_url`, `description`) and `metadata` keys.
            - `parameters` object - it has one optional property: `product`. `product` has 2 optional properties: `id` and `sku_id`.
        - `CreateRewardCoin`:
            - Added `name`, `parameters` keys.
            - Added optional `type`, `metadata` keys
            - `parameters` key - it has one optional property: `coin`. `coin` has two optional properties: `exchange_ratio` and `points_ratio`.
- Returned value:
    - `RewardObject`
        - Added optional `metadata` key

client.rewards.get(rewardId)
- Returned value:
    - `RewardObject`:
        - Added optional `metadata` key


client.rewards.update(reward)
- Request (body) params:
    - `RewardsUpdateBody` has 3 options:
        - `CreateRewardCampaign` without `type` property
        - `CreateRewardCoin` without `type` property
        - `CreateRewardMaterial` without `type` property
- Returned value:
    - `RewardObject`:
        - Added optional `metadata` key

client.rewards.updateAssignment(rewardId, assignment)
- Request (body) params:
    - `RewardsUpdateAssignment`:
        -  Added optional `parameters` key (with optional `loyalty` object that includes `points` property)

client.redemptions.redeem(code)
client.redemptions.redeem(code, params)
- Returned value:
    - `RedeemResponse` has 3 options: `RedemptionObjectDiscountVoucherExtended`, `RedemptionObjectLoyaltyCardExtended`, `RedemptionObjectGiftCardExtended`
        - Added optional `channel` key which includes 2 optional properties: `channel_id`, `channel_type`

client.redemptions.getForVoucher(code)
- Returned value:
    - `RedemptionsGetForVoucherResponse`:
        -  Updated `data_ref` key - changed from string to default value: 'redemption_entries'
        - Removed optional `redeemed_amount`
    - `redemption_entries` has 8 options:
        - `RedemptionObjectVoucherDiscount`
        - `RedemptionObjectLoyaltyCard`
        - `RedemptionObjectGiftCard`
        - `RedemptionObjectVoucherFail`
        - `RedemptionRollbackObjectVoucherDiscount`
        - `RedemptionRollbackObjectGiftCard`
        - `RedemptionRollbackObjectLoyaltyCard`
        - `RedemptionRollbackObjectVoucherFail`

client.redemptions.rollback(redemptionId)
client.redemptions.rollback(redemptionId, params)
- Returned value:
    - `RedemptionsRollbackResponse` has 4 options: `RollbackRedemptionObjectDiscountVoucherExtended`, `RollbackRedemptionObjectLoyaltyCardExtended`, `RollbackRedemptionObjectGiftCardExtended`, `RollbackRedemptionObjectPromotionTierExtended`
        - Added optional `channel` key, which includes 2 optional properties: `channel_id`, `channel_type`.
        - Added `related_object_type`, `related_object_id` keys.

client.redemptions.rollbackStackable(parentRedemptionId)
client.redemptions.rollbackStackable(parentRedemptionId, params, queryParams)
- Returned value:
    - `RedemptionsRollbackStackableResponse`:
        - `rollbacks` property has 4 options:
            - `RedemptionRollbackDiscountVoucherStacked`,
            - `RedemptionRollbackLoyaltyCardStacked`,
            - `RedemptionRollbackGiftCardStacked`,
            - `RedemptionRollbackPromotionTierStacked`
        - `parent_rollback` property was updated:
            - Added `object` key
            - Updated optional `order` object

client.promotions.tiers.listAll()
client.promotions.tiers.listAll(params)
- Query params:
    - `PromotionTiersListAllParams`:
        - Added optional `order` key with 4 predefined values: 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
- Returned value:
    - Added `total` key
    - Removed `has_more` key.
    - Updated `tiers` key.
        - Added `created_at`, `summary` keys.
        - Added optional `start_date`, `updated_at`, `campaign_id`, `expiration_date`, `validity_timeframe`, `validity_day_of_week`, `category_id`, `categories` keys.

client.promotions.tiers.list(promotionCampaignId)
- Returned value:
    - `PromotionTiersListResponse`:
        - Added `total` key.
        - Updated `tiers` key.
            - Added `created_at`, `summary` keys.
            - Added optional `start_date`, `updated_at`, `campaign_id`, `expiration_date`, `validity_timeframe`, `validity_day_of_week`, `category_id`, `categories` keys.

client.promotions.tiers.get(tierId)
- Returned value:
    - `PromotionTierGetResponse`:
        - Added `created_at`, `summary` keys.
        - Added optional `start_date`, `updated_at`, `campaign_id`, `expiration_date`, `validity_timeframe`, `validity_day_of_week`, `category_id`, `categories` keys.

client.promotions.tiers.redeem(promotionsTierId, params)
- Request (body) params:
    - `PromotionTiersRedeemParams`:
        - Removed optional `session` key
        - Updated optional `customer`, `order` keys.
- Returned value:
    - `PromotionTiersRedeemResponse`:
        - Updated optional `result` key - has 2 predefined values.
        - Added optional `customer`, `channel` keys.
        - Added `related_object_type`, `related_object_id`, `voucher` keys.
        - Updated `order`, `promotion_tier` keys.

client.promotions.tiers.update(promotionsTier)
- Request (body) params:
    - `UpdatePromotionTierRequest`:
    - Added optional `start_date`, `expiration_date`, `validity_timeframe`, `validity_day_of_week`, `hierarchy`, `category`, `category_id` keys.
- Returned value:
    - `PromotionTierUpdateResponse`:
        - Added `created_at`, `summary` keys.
        - Added optional `start_date`, `updated_at`, `campaign_id`, `expiration_date`, `validity_timeframe`, `validity_day_of_week`, `category_id`, `categories` keys.

client.promotions.validate(params)
- Request (body) params:
    - `PromotionsValidateParams`:
        - Added `options` key (which includes `expand` property)
        - Updated `customer`, `order` keys.
- Returned value:
    - `PromotionsValidateResponse`:
        - Added optional `category_id`, `category` keys

client.products.create(product)
- Returned value:
    - `ProductsCreateResponse`:
        - Added optional `skus`, `updated_at` keys

client.products.get(productId)
- Returned value:
  `ProductsCreateResponse`:
    - Updated optional `skus` property - added `data_ref` key.
    - Added optional `updated_at` key.

client.products.list()
client.products.list(params)
- Query params:
    - `ProductsListParams`:
        - Added optional `order` key with 4 predefined values: 'created_at', '-created_at', 'updated_at', '-updated_at'

client.products.createSku(productId, sku)
- Returned value:
    - `ProductsCreateSkuResponse`:
        - Added optional `product_id`, `image_url` keys.


client.products.listSkus(productId)
- New query params: `ListSkusParams`
- Returned value:
    - `ProductsListSkus`:
        - Added `data_ref` key.
        - Updated `skus` key:
            - Added optional `product_id`, `image_url` keys.

