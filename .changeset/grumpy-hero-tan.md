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
        - Modified optional `type` key - new predefined string: LOYALTY_CARD
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
            - `VouchersListParams` was used in ClientSide method: `listVouchers`, the method no longer exists on the ClientSide)
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
        - Modified optional `type` key - new predefined string: LOYALTY_CARD
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

