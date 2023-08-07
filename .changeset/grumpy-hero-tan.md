---
'@voucherify/sdk': major
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


**TypeScript types changes:**

- client.asyncActions.get(asyncActionId)
  - Returned value object `AsyncActionsGetResponse`:
    - Added optional key "progress"
    - Added optional key "processing_time"
    - Value of key `result` has been clarified, `object` -> `AsyncActionGetResult`
    - Value of key `type` has been clarified, `string` -> `AsyncActionsResponseTypes`
    - Replaced key `type` has been clarified, `string` -> `AsyncActionsResponseStatuses`

- client.asyncActions.list()
  - Returned value object `AsyncActionsListResponse`:
    - Added optional key `progress` to object `async_actions`

- client.vouchers.balance.create(code, params)
  - Request parameter `params`: `BalanceCreateParams`:
    - Added optional key `reason`
    - Added optional key `source_id`
  - Returned value object `BalanceCreateResponse`:
    - Value of key `type` has been clarified, `string` -> `gift_voucher`

- client.campaigns.qualifications.examine(body, params)
  - Request parameter `body`: `CampaignsQualificationsBody`:
    - Added optional keys `birthdate` and `birthday` to `customer` object
    - Added optional keys `source_id`, `id`, `items` and `referrer` to object `order`
    - **Removed** following optional keys from object `order`: `created_at`, `updated_at`, `status`, `initial_amount`, `discount_amount`, `items_discount_amount`, `total_discount_amount`, `applied_discount_amount`, `items_applied_discount_amount`, `total_amount`, `total_applied_discount_amount`
  - Request parameter `params`: `CampaignsQualificationsParams`:
    - Added more string options for `order` value: `-campaign`, `-category`, `-code`, `-type`, `campaign`, `category`, `code`, `type`
  - Returned value object `CampaignsQualificationsResponse`:
    - Added optional key `tracking_id`
    - Added optional keys `creation_status`, `category_id` and `categories` to object array `data`

- client.campaigns.create(campaign)
  - Request parameter `campaign`: `CampaignsCreateCampaign`:
    - Type object has been clarified, campaign must be one of `CreateCampaignDiscountVoucher`, `CreateCampaignLoyalty`, `CreateCampaignGift`, `CreateCampaignPromotion`, `CreateCampaignReferral`
  - Returned value object `CampaignsCreateCampaignResponse`:
    - Added optional keys: `categories`, `category_id`, `creation_status`, `loyalty_tiers_expiration`, `promotion`, `updated_at`

- client.campaigns.update(nameOrId, campaign)
  - Request parameter `campaign`: `CampaignsUpdateCampaign`:
    - Added optional keys: `activity_duration_after_publishing`, `auto_join`, `category`, `category_id`, `join_once`, `validity_day_of_week`, `validity_timeframe`
  - Returned value object `CampaignsUpdateCampaignResponse`:
    - Added optional keys: `categories`, `category_id`, `creation_status`, `loyalty_tiers_expiration`, `promotion`, `updated_at`

- client.campaigns.get(name)
  - Returned value object `CampaignsGetCampaignResponse`:
    - Added optional keys: `categories`, `category_id`, `creation_status`, `loyalty_tiers_expiration`, `promotion`, `updated_at`

- client.campaigns.addVoucher(name, body, params)
  - Request parameter `body`: `AddVouchersToCampaign`:
    - Added optional keys: `category_id`, `start_date`, `expiration_date`, `active`
  - Returned value `CampaignsAddVoucherResponse`:
    - Possible response with `AsyncActionCreateResponse` object
    - Added optional keys: `id`, `campaign_id`, `categories`, `loyalty_card`, `validity_timeframe`, `validity_day_of_week`, `is_referral_code`, `updated_at`, `holder_id`, `validation_rules_assignments`
    - Value of key `discount` has been clarified, `DiscountAmount | DiscountPercent | DiscountUnit | DiscountFixed` -> `VoucherObjectDiscountTypes`

- client.campaigns.addCertainVoucher(name, code, body)
  - Request parameter `body`: `CampaignsAddCertainVoucherParams`:
    - Added optional keys: `category_id`, `start_date`, `expiration_date`, `active`
  - Returned value object `CampaignsAddVoucherResponse`:
    - Added optional keys: `id`, `campaign_id`, `categories`, `loyalty_card`, `validity_timeframe`, `validity_day_of_week`, `is_referral_code`, `updated_at`, `holder_id`, `validation_rules_assignments`
    - Value of key `discount` has been clarified, `DiscountAmount | DiscountPercent | DiscountUnit | DiscountFixed` -> `VoucherObjectDiscountTypes`

- client.campaigns.importVouchers(campaignName, vouchers)
  - Request parameter `vouchers`: `CampaignsImportVouchers`:
    - Added optional keys: `category`, `category_id`, `gift`, `loyalty_card`

- client.campaigns.list(params)
  - Request parameter `params`: `CampaignsListParams`:
    - Added optional key: `order`
    - Value of key `campaign_type` has been clarified, `'DISCOUNT_COUPONS' | 'PROMOTION' | 'GIFT_VOUCHERS' | 'REFERRAL_PROGRAM'` -> `'DISCOUNT_COUPONS' | 'PROMOTION' | 'GIFT_VOUCHERS' | 'REFERRAL_PROGRAM' | 'LOYALTY_PROGRAM' | 'LUCKY_DRAW'`
  - Returned value object `CampaignsListResponse`:
    - Added optional keys: `categories`, `loyalty_tiers_expiration`, `promotion`, `updated_at` to object key `campaigns` type **object**[]

- client.customers.create(customer)
  - Request parameter `customer`: `CustomersCreateBody`:
    - Added optional keys: `birthday` and `birthdate`
  - Returned value object `CustomersCreateResponse`:
    - Added optional keys: `birthday`, `birthdate`, `referrals`, `system_metadata`, `updated_at`, `assets`

- client.customers.get(customerId)
  - Returned value object `CustomersCreateResponse`:
    - Added optional keys: `birthday`, `birthdate`, `referrals`, `system_metadata`, `updated_at`, `assets`

- client.customers.list(params)
  - Request parameter `params`: `CustomersListParams`:
    - Value of key `order` has been clarified, `'created_at' | '-created_at'` -> `'created_at' | '-created_at' | 'updated_at' | '-updated_at' | 'source_id' | '-source_id'`
  - Returned value object `CustomersCommonListResponse`:
    - Added optional keys: `referrals`, `system_metadata`, `updated_at`, `assets` to object key `customers` type **object**[]

- client.customers.update(customer)
  - Request parameter `customer`: `CustomersUpdateParams`:
    - Added optional keys: `birthday` and `birthdate`
  - Returned value object `CustomersUpdateResponse`
    - Added optional keys: `birthday`, `birthdate`, `referrals`, `system_metadata`, `updated_at`, `assets`

- client.customers.listActivities(customerId, params)
  - Request parameter `params`: `CustomerActivitiesListQueryParams`:
    - Value of key `order` has been clarified, `'created_at' | '-created_at'` -> `'created_at' | '-created_at' | 'updated_at' | '-updated_at' | 'type' | '-type' | 'code' | '-code' | 'campaign' | '-campaign' | 'category' | '-category'`
  - Returned value object `CustomerActivitiesListResponse`
    - Value of key `data` has been clarified, `Record<string, any>[]` -> `CustomerActivitiesListResponseData[]`

- client.distributions.publications.list(params)
  - Returned value object `DistributionsPublicationsListResponse`:
    - Value of key `publications` type object[] has been clarified:
      - Value of key `customer` has been clarified, `object id(string) & object(string)` -> `Partial<SimpleCustomer>`
      - Value of key `channel` has been clarified, `string` -> `PublicationResponseChannel`
      - Value of key `voucher` has been clarified, `DistributionsPublicationsVoucher` -> `DistributionsPublicationsVoucherDiscount | DistributionsPublicationsVoucherLoyaltyCard | DistributionsPublicationsVoucherGiftCard`

- client.distributions.publications.create(params,query)
  - Request parameter `params`: `DistributionsPublicationsCreateParams`:
    - Value of key `channel` has been clarified `string` -> `PublicationResponseChannel`:
    - Value of key `customer` has been clarified:
      - Added optional keys: `birthday`, `birthdate`,
  - Returned value object `DistributionsPublicationsCreateResponse`
    - Value of key `channel` has been clarified `string` -> `PublicationResponseChannel`:
    - Value of key `voucher` has been clarified:
      - Added optional keys: `category_id`, `categories`, `validation_rules_assignments`

- client.events.create(eventName, params)
  - Request parameter `params`: `EventsParams`:
    - Value of key `customer` has been clarified:
      - Added optional keys: `birthday`, `birthdate`,

- client.distributions.exports.create(exportObject)
  - Request parameter `exportObject`: `ExportResource`:
    - Value of key `exported_object` has been clarified `'voucher' | 'redemption' | 'publication' | 'customer'` -> `'order' | 'voucher' | 'publication' | 'redemption' | 'customer' | 'points_expiration' | 'voucher_transactions'`
    - Value of key `parameters` has been clarified `defined object` -> `ExportParameters`
  - Returned value object `ExportsCreateResponse`
    - Value of key `exported_object` has been clarified `'voucher' | 'redemption' | 'publication' | 'customer'` -> `'order' | 'voucher' | 'publication' | 'redemption' | 'customer' | 'points_expiration' | 'voucher_transactions'`
    - Value of key `parameters` has been clarified `defined object` -> `ExportParameters`

- client.distributions.exports.get(exportResourceId)
  - Returned value object `ExportsGetResponse`
    - Value of key `exported_object` has been clarified `'voucher' | 'redemption' | 'publication' | 'customer'` -> `'order' | 'voucher' | 'publication' | 'redemption' | 'customer' | 'points_expiration' | 'voucher_transactions'`
    - Value of key `parameters` has been clarified `defined object` -> `ExportParameters`

- client.loyalties.list(params)
  - Request parameter `params`: `LoyaltiesListParams`:
    - Added optional key: `order`
  - Returned value object `LoyaltiesListResponse`
    - Added optional keys: `updated_at`, `creation_status`, `category_id`, `categories`, `loyalty_tiers_expiration`
    - Value of key `voucher` has been clarified:
      - Value of key `type` has been clarified `string` -> `'LOYALTY_CARD'`
      - Value of key `loyalty_card` has been clarified:
        - Added optional key: `expiration_rules`

- client.loyalties.create(campaign)
  - Request parameter `campaign`: `LoyaltiesCreateCampaign`:
    - Value of ket `campaigns` type object[] has been clarified:
      - Added optional keys: `description`, `auto_join`, `join_once`, `use_voucher_metadata_schema`, `validity_timeframe`, `validity_day_of_week`, `activity_duration_after_publishing`, `loyalty_tiers_expiration`, `category_id`, `category`
      - Value of key `voucher` has been clarified:
        - Value of key `loyalty_card` has been clarified:
          - Added optional key: `expiration_rules`
  - Returned value object `LoyaltiesCreateCampaignResponse`
    - Added optional keys: `description`, `auto_join`, `join_once`, `use_voucher_metadata_schema`, `validity_timeframe`, `validity_day_of_week`, `activity_duration_after_publishing`, `loyalty_tiers_expiration`, `category_id`, `category`
    - Value of key `voucher` has been clarified:
      - Value of key `type` has been clarified `string` -> `'LOYALTY_CARD'`
      - Value of key `loyalty_card` has been clarified:
        - Added optional key: `expiration_rules`

- client.loyalties.get(campaignId)
  - Returned value object `LoyaltiesGetCampaignResponse`
    - Added optional keys: `updated_at`, `creation_status`, `category_id`, `categories`, `loyalty_tiers_expiration`
    - Value of key `voucher` has been clarified:
      - Value of key `type` has been clarified `string` -> `'LOYALTY_CARD'`
      - Value of key `loyalty_card` has been clarified:
        - Added optional key: `expiration_rules`

- client.loyalties.update(campaign)
  - Request parameter `campaign`: `LoyaltiesUpdateCampaign`:
    - Added optional keys: `loyalty_card`, `loyalty_tiers_expiration`, `auto_join`, `join_once`, `validity_timeframe`, `validity_day_of_week`, `activity_duration_after_publishing`, `category_id`, `category`, `voucher`
  - Returned value object `LoyaltiesUpdateCampaignResponse`
    - Added optional keys: `updated_at`, `creation_status`, `category_id`, `categories`, `loyalty_tiers_expiration`

- client.loyalties.listRewardAssignments(campaignId, params)
  - Request parameter `params`: `LoyaltiesListRewardAssignmentsParams`:
    - Added optional key `assignment_id`

- client.loyalties.createEarningRule(campaignId, earningRules)
  - Request parameter `earningRules`: `LoyaltiesCreateEarningRule[]`:
    - Object has changed to `Partial<EarningRuleObject>` for example:
      - Added optional keys: `active`, `start_date`, `expiration_date`, `validity_timeframe`, `validity_day_of_week`, `object`, `automation_id`, `metadata`
  - Returned value object `LoyaltiesCreateEarningRuleResponse[]`
    - Response object has changed to Partial<EarningRuleObject> for example: 
      - Added optional keys: `active`, `start_date`, `expiration_date`, `validity_timeframe`, `validity_day_of_week`, `metadata`

- client.loyalties.updateEarningRule(campaignId, earningRule)
  - Request parameter `earningRule`: `LoyaltiesUpdateEarningRule`:
    - Object has been changed to `Partial<UpdateEarningRuleObjectOrderPaid | UpdateEarningRuleObjectCustomEvent | UpdateEarningRuleObjectEnteredSegment | UpdateEarningRuleObjectTier> & { id: string }` for example:
      - Added optional keys: `active`, `start_date`, `expiration_date`, `validity_timeframe`, `validity_day_of_week`, `metadata`
  - Returned value object `LoyaltiesUpdateEarningRuleResponse`
    - Response object has changed to `EarningRuleObject` for example:
      - Added optional keys: `active`, `start_date`, `expiration_date`, `validity_timeframe`, `validity_day_of_week`, `metadata`

- client.loyalties.listMembers(campaignId, params)
  - Request parameter `params`: `LoyaltiesListMembersParams`
    - Added optional key: `order`
  - Returned value object `LoyaltiesListMembersResponse`
    - Value of key `vouchers` type `object[]` has been clarified:
      - Added optional keys: `category_id`, `categories`, `discount`, `gift`, `assets`, `created_at`, `object`

- client.loyalties.createMember(campaignId, member)
  - Request parameter `member`: `LoyaltiesCreateMember`
    - Value of key `customer` been clarified:
      - Can be a `string`
      - Added optional keys: `address`, `phone`, `birthday`, `birthdate`

- client.loyalties.getMember(campaignId, memberId)
  - Returned value object `LoyaltiesGetMemberResponse`
    - Added optional keys: `category_id`, `categories`, `discount`, `gift`, `assets`, `created_at`, `object`

- client.loyalties.addPoints(campaignId, memberId, balance)
  - Request parameter `balance`: `LoyaltiesAddPoints`
    - Added optional keys: `expiration_date`, `expiration_type`, `reason`, `source_id`
  - Returned value object `LoyaltiesAddPointsResponse`
    - Value of key `type` has been clarified, `string` -> `'loyalty_card'`
    - Value of key `related_object` has been clarified:
      - Value of key `type` has been clarified, `string` -> `'voucher'`

- client.loyalties.redeemReward(campaignId, memberId, params)
  - Request parameter `params`: `LoyaltiesRedeemRewardParams`
    - Value of key `reward` has been clarified:
      - Added optional key: `points`
    - Value of key `order` has been clarified:
      - Added optional keys: `status`, `referrer`

- client.metadataSchemas.list()
  - Returned value object `MetadataSchemasListResponse`
    - Value of key `schemas` type object[] has been clarified:
      - Value of key `related_object` has been clarified, `string` -> `'campaign' | 'customer' | 'earning_rule' | 'loyalty_tier' | 'order' | 'order_item' | 'product' | 'promotion_tier' | 'publication' | 'redemption' | 'reward' | 'voucher'`

- client.metadataSchemas.get(schemaName)
  - Returned value object `MetadataSchemasGetResponse`
    - Value of key `related_object` has been clarified, `string` -> `'campaign' | 'customer' | 'earning_rule' | 'loyalty_tier' | 'order' | 'order_item' | 'product' | 'promotion_tier' | 'publication' | 'redemption' | 'reward' | 'voucher'`

- client.orders.create(order)
  - Request parameter `order`: `OrdersCreate`
    - Added optional key: `referrer`

- client.orders.update(order)
  - Request parameter `order`: `OrdersUpdate`
    - Added optional keys: `referrer`, `referrer_id`, `customer_id`

- client.orders.list(params)
  - Request parameter `params`: `OrdersListParams`
    - Added optional key: `order`

- client.orders.import(orders)
  - Request parameter `orders`: `OrdersCreate`(array)
    - Added optional key: `referrer`

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

- client.validationRules.createAssignment(validationRuleId, assignment)
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

- client.validationRules.list(params)
  - Query params:
    - Added optional `order` key  with 6 predefined values: 'created_at' | '-created_at' | '-name' | 'name' | 'updated_at' | '-updated_at'
  - Returned value:
    - `ValidationRulesListResponse`
      - `data` key is `ValidationRulesObject`
        - Added optional `applicable_to`, `type`, `context_type` keys.
        - Deleted optional `assignments_count` key.

  
- client.validationRules.listAssignments(validationRuleId, params)
  - Query params:
    - `ValidationRulesListAssignmentsParams`:
      - Added optional `order` key with 2 predefined values: '-created_at' | 'created_at'
    - new property: order ('-created_at' | 'created_at')
  - Returned value:
    - `ValidationRulesCreateAssignmentObject`
      - Updated optional `related_object_type` key with 6 predefined values
      - Deleted `updated_at` key.


- client.segments.create(segment)
  - Request (body) params:
    - `SegmentsCreate` has 2 options: `SegmentsCreateStatic` or `SegmentsCreateAutoUpdate`
  - Returned value:
    - `SegmentsCreateResponse`:
      - Updated optional `filter`, `type` keys
      - Added optional `initial_sync_status` key with 2 predefined values: 'DONE' | 'IN_PROGRESS'
      - Removed optional `metadata` key

- client.segments.get(segmentId)
  - Returned value:
    - `SegmentsCreateResponse`:
      - Updated optional `filter`, `type` keys
      - Added optional `initial_sync_status` key with 2 predefined values: 'DONE' | 'IN_PROGRESS'
      - Removed optional `metadata` key

- client.rewards.list(params)
  - Query params:
    - `RewardsListParams`:
    -  Added optional `assignment_id` key
  - Returned value:
    - `RewardsListResponse`
      - Replaced `RewardsResponse` and `RewardsTypeResponse` with a `RewardObject`.

- client.rewards.create(reward)
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

- client.rewards.get(rewardId)
  - Returned value:
    - `RewardObject`:
      - Added optional `metadata` key


- client.rewards.update(reward)
  - Request (body) params:
    - `RewardsUpdateBody` has 3 options:
      - `CreateRewardCampaign` without `type` property
      - `CreateRewardCoin` without `type` property
      - `CreateRewardMaterial` without `type` property
  - Returned value:
    - `RewardObject`:
      - Added optional `metadata` key

- client.rewards.updateAssignment(rewardId, assignment)
  - Request (body) params:
    - `RewardsUpdateAssignment`:
      -  Added optional `parameters` key (with optional `loyalty` object that includes `points` property)

- client.redemptions.redeem(code, params)
  - Returned value:
    - `RedeemResponse` has 3 options: `RedemptionObjectDiscountVoucherExtended`, `RedemptionObjectLoyaltyCardExtended`, `RedemptionObjectGiftCardExtended`
      - Added optional `channel` key which includes 2 optional properties: `channel_id`, `channel_type`

- client.redemptions.getForVoucher(code)
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

- client.redemptions.rollback(redemptionId, params)
  - Returned value:
    - `RedemptionsRollbackResponse` has 4 options: `RollbackRedemptionObjectDiscountVoucherExtended`, `RollbackRedemptionObjectLoyaltyCardExtended`, `RollbackRedemptionObjectGiftCardExtended`, `RollbackRedemptionObjectPromotionTierExtended`
      - Added optional `channel` key, which includes 2 optional properties: `channel_id`, `channel_type`.
      - Added `related_object_type`, `related_object_id` keys.

- client.redemptions.rollbackStackable(parentRedemptionId, params, queryParams)
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

- client.promotions.tiers.listAll(params)
  - Query params:
    - `PromotionTiersListAllParams`:
      - Added optional `order` key with 4 predefined values: 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
  - Returned value:
    - Added `total` key
    - Removed `has_more` key.
    - Updated `tiers` key.
      - Added `created_at`, `summary` keys.
      - Added optional `start_date`, `updated_at`, `campaign_id`, `expiration_date`, `validity_timeframe`, `validity_day_of_week`, `category_id`, `categories` keys.

- client.promotions.tiers.list(promotionCampaignId)
  - Returned value:
    - `PromotionTiersListResponse`:
      - Added `total` key.
      - Updated `tiers` key.
        - Added `created_at`, `summary` keys.
        - Added optional `start_date`, `updated_at`, `campaign_id`, `expiration_date`, `validity_timeframe`, `validity_day_of_week`, `category_id`, `categories` keys.

- client.promotions.tiers.get(tierId)
  - Returned value:
    - `PromotionTierGetResponse`:
      - Added `created_at`, `summary` keys.
      - Added optional `start_date`, `updated_at`, `campaign_id`, `expiration_date`, `validity_timeframe`, `validity_day_of_week`, `category_id`, `categories` keys.

- client.promotions.tiers.redeem(promotionsTierId, params)
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

- client.promotions.tiers.update(promotionsTier)
  - Request (body) params:
    - `UpdatePromotionTierRequest`:
    - Added optional `start_date`, `expiration_date`, `validity_timeframe`, `validity_day_of_week`, `hierarchy`, `category`, `category_id` keys.
  - Returned value:
    - `PromotionTierUpdateResponse`:
      - Added `created_at`, `summary` keys.
      - Added optional `start_date`, `updated_at`, `campaign_id`, `expiration_date`, `validity_timeframe`, `validity_day_of_week`, `category_id`, `categories` keys.

- client.promotions.validate(params)
  - Request (body) params:
    - `PromotionsValidateParams`:
      - Added `options` key (which includes `expand` property)
      - Updated `customer`, `order` keys.
  - Returned value:
    - `PromotionsValidateResponse`:
      - Added optional `category_id`, `category` keys

- client.products.create(product)
  - Returned value:
    - `ProductsCreateResponse`:
      - Added optional `skus`, `updated_at` keys

- client.products.get(productId)
  - Returned value:
    `ProductsCreateResponse`:
    - Updated optional `skus` property - added `data_ref` key.
    - Added optional `updated_at` key.

- client.products.list(params)
  - Query params:
    - `ProductsListParams`:
      - Added optional `order` key with 4 predefined values: 'created_at', '-created_at', 'updated_at', '-updated_at'

- client.products.createSku(productId, sku)
  - Returned value:
    - `ProductsCreateSkuResponse`:
      - Added optional `product_id`, `image_url` keys.

- client.products.listSkus(productId)
  - New query params: `ListSkusParams`
  - Returned value:
    - `ProductsListSkus`:
      - Added `data_ref` key.
      - Updated `skus` key:
        - Added optional `product_id`, `image_url` keys.

