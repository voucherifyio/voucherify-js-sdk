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


TypeScript types changes: 
    - client.asyncActions.get(asyncActionId)
        Returned value:
            - Added optional key "progress"
            - Added optional key "processing_time"
            - Replaced key "result" type "object" with object definitions
            - Replaced key "status" type "string" with string options
            - Replaced key "type" type "string" with string options
    - client.asyncActions.list()
        Returned value:
            - Added optional key "progress" to object async_actions
    - client.vouchers.balance.create(code, params)
        Request params:
            - Added optional key "reason" to params
            - Added optional key "source_id" to params
        Returned value:
            - Replaced key "type" type "string" with string option
    - client.campaigns.qualifications.examine(body, params)
        Request params:
            - Added optional keys "birthdate" and "birthday" to body object "customer"
            - Added optional keys "source_id", "id", "items" and "referrer" to body object "order", **removed** following optional keys from same object: "created_at", 
"updated_at", "status", "initial_amount", "discount_amount", "items_discount_amount", "total_discount_amount", "applied_discount_amount", "items_applied_discount_amount", 
"total_amount", "total_applied_discount_amount"
            - Added more string options for "order" key in params object such as "-campaign", "-category", "-code", "-type", "campaign", "category", "code", "type"
        Returned value:
            - Added optional key "tracking_id"
            - Added optional keys "creation_status", "category_id" and "categories" to object array "data"
    - client.campaigns.create(campaign)
        Request params:
            -
