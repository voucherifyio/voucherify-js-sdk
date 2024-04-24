# @voucherify/sdk

## 2.7.2

### Patch Changes

- [`3d23881`](https://github.com/voucherifyio/voucherify-js-sdk/commit/3d23881738f317903dae3373642cc7151159ca26) [#268](https://github.com/voucherifyio/voucherify-js-sdk/pull/268) Thanks [@darekg11](https://github.com/darekg11)! - New endpoint support - `customer-redeemable`

## 2.7.1

### Patch Changes

- [`25c3f13`](https://github.com/voucherifyio/voucherify-js-sdk/commit/25c3f13d10cd8ed4a6eee50082f302efd18e1268) [#260](https://github.com/voucherifyio/voucherify-js-sdk/pull/260) Thanks [@jkaliszuk](https://github.com/jkaliszuk)! - Added `error` object in `VoucherifyError`. Added `validation_rules` in VouchersCreateParameters.

## 2.7.0

### Minor Changes

- [`32fa44a`](https://github.com/voucherifyio/voucherify-js-sdk/commit/32fa44ab17b21bda9daf953eaf4969d528c2d707) [#255](https://github.com/voucherifyio/voucherify-js-sdk/pull/255) Thanks [@awilczek](https://github.com/awilczek)! - Update axios to 1.6.5 in SDK package

* [`8df2fed`](https://github.com/voucherifyio/voucherify-js-sdk/commit/8df2fed2b4319f681d0ff17b9bb15e6bbf80dd7c) [#254](https://github.com/voucherifyio/voucherify-js-sdk/pull/254) Thanks [@p-zielinski](https://github.com/p-zielinski)! - Add support for few endpoints of Loyalties API.
  - Added support for new endpoints: `POST /v1/qualifications`, `POST /client/v1/qualifications` [(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
  - New exported types/interfaces: `InapplicableTo`, `Referrer`, `ReferrerWithSummaryLoyaltyReferrals`, `Customer`, `CustomerWithSummaryLoyaltyReferrals`, `CustomerSummary`, `CustomerSummaryRedemptions`, `CustomerSummaryOrders`, `CustomerLoyalty`, `CustomerReferrals`, `Discount`, `DiscountAmount_`, `DiscountUnit_`, `DiscountUnitBase_`, `DiscountUnitMultiple_`, `DiscountPercent_`, `DiscountFixed_`, `Order`, `OrderItem`, `OrderCalculated`, `OrderRedemptions`, `OrderItemCalculated`, `QualificationsCheckEligibilityRequestBody`, `QualificationsCheckEligibilityResponseBody`, `QualificationsFiltersFields`, `QualificationsFiltersCondition`, `QualificationsFieldConditions`, `QualificationsRedeemablesResponse`, `QualificationsStackingRulesResponse`, `QualificationsRedeemable`, `QualificationsRedeemableBase`, `RedeemableSingleResultResponse`, `ValidationRulesAssignmentsList`,
  - Added optional properties to `ApplicableTo`: `product_id`, `product_source_id`, `quantity_limit`, `aggregated_quantity_limit`, `amount_limit`, `aggregated_amount_limit`, `order_item_indices`
  - Added required property: `data_ref: 'data'` to `ApplicableToResultList` // NOTE: as this type is only used in responses, this is not a breaking change.
  - Added optional properties to `CustomerRequest`: `birthday` and `birthdate`

## 2.6.0

### Minor Changes

- [`8a3bead`](https://github.com/voucherifyio/voucherify-js-sdk/commit/8a3bead11809f676778d53dddd0ef49f6f17358d) [#252](https://github.com/voucherifyio/voucherify-js-sdk/pull/252) Thanks [@p-zielinski](https://github.com/p-zielinski)! - Added support for new endpoints and adding missing types in Rewards API.

  Added support for new endpoints:

  - `/loyalties/{campaignId}/rewards/{assignmentId}`,
  - `/loyalties/{campaignId}/tiers/{tierId}/rewards`,
  - `/rewards/{rewardId}/assignments/{assignmentId}` (example available in readme.md)

  New exported types/interfaces in `Loyalties.ts`:
  Domain types:

  - LoyaltyTierRewardItemParameters,
  - LoyaltyTierRewardItemCampaignParameters,
  - LoyaltyTierRewardItemCoinParameters,
  - LoyaltyTierRewardItemMaterialParameters,
  - LoyaltyTierRewardItemCampaignDiscountCoupons,
  - LoyaltyTierRewardItemCampaignGiftVouchersAndLoyaltyProgram

  0-level types:

  - LoyaltiesGetRewardAssignmentResponseBody,
  - LoyaltiesListLoyaltyTierRewardsResponseBody

  New exported types/interfaces in `Rewards.ts`:
  Domain types:

  - RewardAssignment (old `RewardsAssignmentObject`),
  - RewardsAssignmentCampaignOrMaterialReward,
  - RewardsAssignmentCoinReward
  -

  0-level types:

  - RewardsListAssignmentsRequestQuery (old `RewardsListAssignmentsParams`),
  - RewardsListAssignmentsResponseBody (old `RewardsListAssignmentsResponse`),
  - RewardsCreateAssignmentRequestBody (old `RewardsCreateAssignment`),
  - RewardsCreateAssignmentCoinRewardRequestBody,
  - RewardsCreateAssignmentCampaignOrMaterialRewardRequestBody,
  - RewardsCreateAssignmentResponseBody (old `RewardsCreateAssignmentResponse`),
  - RewardsUpdateAssignmentRequestBody (old `RewardsUpdateAssignment`),
  - RewardsUpdateAssignmentResponseBody (old `RewardsUpdateAssignmentResponse`)
  - RewardsGetAssignmentResponseBody (brand new)

  ***

  Added support for following endpoints:

  - GET /vouchers/{code}/transactions (client.vouchers.listTransactions(code, query))
  - POST /vouchers/{code}/transactions/export (client.vouchers.exportTransactions(code, body))
  - GET /validation-rules-assignments (client.client.validationRules.listRulesAssignments(validationRuleId))

  **New exported types/interfaces**
  Domain types:

  - GiftCardTransaction
  - GiftCardTransactionBase
    GiftCardTransactionDetails
  - GiftCardTransactionRedemptionDetails
  - GiftCardTransactionRefundDetails
  - GiftCardTransactionAdditionDetails
  - GiftCardTransactionRemovalDetails
  - VoucherTransaction
  - VoucherTransactionsExportFields
  - ValidationRulesAssignment

  0-level types:

  - VouchersListTransactionsRequestQuery
  - VouchersListTransactionsResponseBody
  - VouchersExportTransactionsRequestBody
  - VouchersExportTransactionsResponseBody
  - ValidationRulesListRulesAssignmentsRequestQuery
  - ValidationRulesListRulesAssignmentsResponseBody

  **Other changes**

  - Use `VouchersExportTransactionsRequestBody` as `LoyaltiesExportCardTransactionsRequestBody` (these types are identical, both related to the export of loyalty card transactions)
  - Use `VouchersExportTransactionsResponseBody` as `LoyaltiesExportCardTransactionsResponseBody` (these types are identical, both related to the export of loyalty card transactions)

  ***

  New exported types/interfaces in `Categories.ts`:

  - CategoriesListRequestQuery

  Added support for query parameters(CategoriesListRequestQuery) in `/categories` (categories.list method)

  ***

  Add support for few endpoints of Loyalties API:

  - Added support for new endpoints: `GET /promotions/{campaignId}/stacks`, `GET /promotions/{campaignId}/stacks`, `GET PUT DELETE /promotions/{campaignId}/stacks/{stackId}`, `GET /promotions/stacks` [(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
  - New exported types/interfaces: `PromotionsStacksListInCampaignResponseBody`, `PromotionsStacksListResponseBody`, `PromotionsStacksListRequestQuery`, `PromotionsStacksGetResponseBody`, `PromotionsStacksUpdateRequestBody`, `PromotionsStacksUpdateResponseBody`, `PromotionsStacksCreateInCampaignRequestBody`, `PromotionsStacksCreateInCampaignResponseBody`, `PromotionStackBase`, `PromotionStack`

## 2.5.0

### Minor Changes

- [`c33499d`](https://github.com/voucherifyio/voucherify-js-sdk/commit/c33499d1a75a882c2528c873f260633969eecbdd) [#246](https://github.com/voucherifyio/voucherify-js-sdk/pull/246) Thanks [@p-zielinski](https://github.com/p-zielinski)! - Add support for few endpoints of Loyalties API.
  - Added support for new endpoints: `GET /loyalties/{campaignId}/reward-assignments/{assignmentId}`, `GET /loyalties/{campaignId}/reward-assignments/{assignmentId}/reward`, `GET /loyalties/{campaignId}/tiers`, `GET /loyalties/{campaignId}/tiers/{tierId}`, `POST /loyalties/{campaignId}/tiers`, `GET /loyalties/{campaignId}/tiers/{tierId}/earning-rules`, `GET /loyalties/members/{memberId}/tiers` [(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
  - New exported types/interfaces: `LoyaltiesGetRewardAssignmentResponseBody`, `LoyaltiesGetRewardDetailsResponseBody`, `LoyaltiesListTiersRequestQuery`, `LoyaltiesListLoyaltyTierEarningRulesRequestQuery`, `LoyaltiesGetTierResponseBody`, `LoyaltiesCreateTiersRequestBody`, `LoyaltiesCreateTiersResponseBody`,`LoyaltiesListTiersResponseBody`, `LoyaltiesListMemberLoyaltyTiersResponseBody`, `LoyaltiesListLoyaltyTierEarningRulesResponseBody`, `EarningRule`, `LoyaltyTier`, `CreateLoyaltyTier`, MappingMultiply`,`MappingFixed`

* [`2d5b050`](https://github.com/voucherifyio/voucherify-js-sdk/commit/2d5b050a5f8c2df1e710b647b3a13a29d857a8e2) [#238](https://github.com/voucherifyio/voucherify-js-sdk/pull/238) Thanks [@p-zielinski](https://github.com/p-zielinski)! - Add support for few endpoints of Loyalties API.
  - Added support for new endpoints: `GET /loyalties/members/{memberId}`, `GET /loyalties/members/{memberId}/activities`, `GET /loyalties/members/{memberId}/rewards`, `POST /loyalties/{campaignId}/members/{memberId}/transfers`, `GET /loyalties/{campaignId}/members/{memberId}/points-expiration`, `GET /loyalties/members/{memberId}/transactions`, `GET /loyalties/{campaignId}/members/{memberId}/transactions`, `POST /loyalties/members/{memberId}/transactions/export` and `POST /loyalties/{campaignId}/members/{memberId}/transactions/export` [(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
  - New exported types/interfaces: `LoyaltiesTransferPointsResponseBody`, `LoyaltiesTransferPointsRequestBody`, `LoyaltiesListMemberRewardsRequestQuery`, `LoyaltiesListMemberRewardsResponseBody`, `LoyaltiesGetPointsExpirationRequestQuery`, `LoyaltiesGetPointsExpirationResponseBody`, `LoyaltiesListCardTransactionsRequestQuery`, `LoyaltiesListCardTransactionsResponseBody`, `LoyaltiesExportCardTransactionsRequestBody`, `LoyaltiesExportCardTransactionsResponseBody`, `LoyaltiesAddOrRemoveCardBalanceRequestBody`, `LoyaltiesAddOrRemoveCardBalanceResponseBody`, `LoyaltyCardTransaction`, `SimpleLoyaltyVoucher`, `LoyaltiesTransferPoints`, `LoyaltyCardTransactionsFields`, `LoyaltyCardTransactionsType`, `Reward`, `RewardTypeCampaign`, `RewardTypeCoin`, `RewardTypeMaterial`, `RewardType`, `RewardAssignment`

- [`e135b17`](https://github.com/voucherifyio/voucherify-js-sdk/commit/e135b1766ef73bb272629e2ce93a9878e3ec90fd) [#242](https://github.com/voucherifyio/voucherify-js-sdk/pull/242) Thanks [@weronika-kurczyna](https://github.com/weronika-kurczyna)! - Added missing methods covering Product Collections API.
  - Added support for new endpoints:
  - `GET POST /product-collections`,
  - `GET DELETE /product-collections/{productCollectionId}`,
  - `GET /product-collections/${productCollectionId}/products` [(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
  - New exported types/interfaces in `ProductCollections.ts`:
    - Domain types:
      - ProductIdentity
      - SkuIdentity
      - ProductBase
      - SkuBase
      - ProductSaved
      - SkuSaved
      - ProductOrSkuIdentity
      - ProductCollectionIdentity
      - ProductCollectionSaved
      - ProductCollectionBase
      - StaticProductCollectionBase
      - DynamicProductCollectionBase
      - Filter
      - Junction
      - AllowedFiltersKeys
      - FiltersCondition
    - 0-level types:
      - ProductCollectionsCreateRequestBody
      - ProductCollectionsCreateResponseBody
      - ProductCollectionsListRequestQuery
      - ProductCollectionsListResponseBody
      - ProductCollectionsGetResponseBody
      - ProductCollectionsListProductsRequestQuery
      - ProductCollectionsListProductsResponseBody

* [`841b6d5`](https://github.com/voucherifyio/voucherify-js-sdk/commit/841b6d57f33ff288666fde79c46a6945ed565659) [#244](https://github.com/voucherifyio/voucherify-js-sdk/pull/244) Thanks [@p-zielinski](https://github.com/p-zielinski)! - Add support for endpoint `GET /exports`.
  - New exported types/interfaces: `ExportsListRequestQuery`, `ExportsListResponseBody`, `ExportBase`, `ExportResourceResponse`, `FieldConditions`, `ExportVoucher`, `ExportVoucherFilters`, `ExportRedemption`, `ExportRedemptionFilters`, `ExportCustomer`, `ExportCustomerFilters`, `ExportPublication`, `ExportPublicationFilters`, `ExportOrder`, `ExportOrderFilters`, `ExportPointsExpiration`, `ExportPointsExpirationFilters`, `ExportVoucherTransactionsExpiration`, `ExportVoucherTransactionsFilters`, `Junction`, `FiltersCondition`, `ExportCustomerFields`, `ExportCustomerOrder`, `ExportPublicationFields`, `ExportPublicationOrder`, `ExportRedemptionFields`, `ExportRedemptionOrder`, `ExportVoucherFields`, `ExportVoucherOrder`, `ExportOrderFields`, `ExportOrderOrder`, `ExportPointsExpirationFields`, `ExportPointsExpirationOrder`, `ExportVoucherTransactionsFields`, `ExportVoucherTransactionsOrder`

## 2.4.0

### Minor Changes

- [`b11ce2c`](https://github.com/voucherifyio/voucherify-js-sdk/commit/b11ce2c6410c7441bd48fbbf33377b98c77af072) [#241](https://github.com/voucherifyio/voucherify-js-sdk/pull/241) Thanks [@p-zielinski](https://github.com/p-zielinski)! - Add support for 3 missing endpoints in loyalties api. Corrected a typo in one of loyalties api method.
  - Added support for new endpoints: `GET /loyalties/{campaignId}/earning-rules/{earningRuleId}`, `POST /loyalties/{campaignId}/earning-rules/{earningRuleId}/enable` and `POST /loyalties/{campaignId}/earning-rules/{earningRuleId}/disable` [(examples available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
  - New exported types/interfaces: `LoyaltiesGetEarningRuleResponseBody`, `LoyaltiesEnableEarningRulesResponseBody`, `LoyaltiesDisableEarningRulesResponseBody`, `EarningRuleEvent`, `EarningRuleBase`, `EarningRuleFixed`, `EarningRuleProportionalOrder`, `EarningRuleProportionalOrderAmount`, `EarningRuleProportionalOrderTotalAmount`, `EarningRuleProportionalOrderMetadata`, `EarningRuleProportionalOrderItems`, `EarningRuleProportionalOrderItemsQuantity`, `EarningRuleProportionalOrderItemsAmount`, `EarningRuleProportionalOrderItemsSubtotalAmount`, `EarningRuleProportionalCustomerMetadata`, `EarningRuleProportionalCustomEvent`, `EarningRuleProportional`
  - Added optional parameter `calculation_type` to `LoyaltyProportional`

* [`5bb69da`](https://github.com/voucherifyio/voucherify-js-sdk/commit/5bb69daf95c1e16c48eb5070149b88f11bfe1a30) [#229](https://github.com/voucherifyio/voucherify-js-sdk/pull/229) Thanks [@marcin-slezak](https://github.com/marcin-slezak)! - Add missing methods covering Customers API.
  - Added support for new endpoints:
    - `POST /customers/{customerId}/permanent-deletion`,
    - `POST /customers/bulk/async`,
    - `POST /customers/metadata/async` [(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
  - New domain types:
    - `CustomerBase`
    - `CustomerAddress`
  - New exported types/interfaces:
    - `CustomersUpdateInBulkRequestBody`,
    - `CustomersUpdateMetadataInBulkRequestBody`,
    - `CustomersDeletePermanentlyResponseBody`

## 2.3.0

### Minor Changes

- [`644aa84`](https://github.com/voucherifyio/voucherify-js-sdk/commit/644aa8479843b8625192aa295eb07aa19ba651d7) [#227](https://github.com/voucherifyio/voucherify-js-sdk/pull/227) Thanks [@marcin-slezak](https://github.com/marcin-slezak)! - Added support for missing CSV import endpoints ([(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)):
  - `POST /skus/importCSV`
  - `POST /products/importCSV`
  - `POST /vouchers/importCSV`
  - `POST /customers/importCSV`
  - `POST /campaigns/campaignId/importCSV`
  - Added form-data `4.0.0` to SDK package

* [`7720e31`](https://github.com/voucherifyio/voucherify-js-sdk/commit/7720e31baea0db19a7543ae12661fab77176e5ff) [#228](https://github.com/voucherifyio/voucherify-js-sdk/pull/228) Thanks [@marcin-slezak](https://github.com/marcin-slezak)! - Add missing methods covering Categories and Campaigns API.
  - Added support for new endpoints [(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md):
    - `POST /campaigns/campaignId/enable`,
    - `POST /campaigns/campaignId/disable`,
    - `GET, POST DELETE /categories`,
    - `GET PUT /categories/id`.
  - New exported types/interfaces in `Categories.ts`:
    - `ListCategories`,
    - `CategoryObject`,
    - `CreateCategory`,
    - `ResponseCreateCategory`,
    - `ResponseUpdateCategory`,
    - `UpdateCategoryRequest`.

- [`52e7f5e`](https://github.com/voucherifyio/voucherify-js-sdk/commit/52e7f5e8d4ea6be4ba1b9d0550cba3ec3d893672) [#221](https://github.com/voucherifyio/voucherify-js-sdk/pull/221) Thanks [@p-zielinski](https://github.com/p-zielinski)! - Implementing the following changes:
  - Update axios from `0.21.4` to `0.27.2` in SDK package
  - Added dotenv `16.3.1` to SDK package dev dependencies.
  - Added frame for integration tests [(more info available in README.md, section "🧪 SDK Tests")](..%2F..%2FREADME.md)

## 2.2.6

### Patch Changes

- [`a266c2a`](https://github.com/voucherifyio/voucherify-js-sdk/commit/a266c2a9a4a1942e2b6d8ef54021e04d36ddb02c) [#223](https://github.com/voucherifyio/voucherify-js-sdk/pull/223) Thanks [@darekg11](https://github.com/darekg11)! - Add optional timeoutMs option to VoucherifyServerSide and VoucherifyClientSide classes defiing timeout in miliseconds after which Axios is going to abort the request. By default this is equal to 0 meaining that there is no timeout beside default Voucherify's Load balancer timeout which is set to 3 minutes

## 2.2.5

### Patch Changes

- [`d5751ea`](https://github.com/voucherifyio/voucherify-js-sdk/commit/d5751ea57c46f32275c4630bd4d2b6d41f3506b2) [#216](https://github.com/voucherifyio/voucherify-js-sdk/pull/216) Thanks [@Davies-Owen](https://github.com/Davies-Owen)! - add amount_off_formula, percent_off_formula, unit_off_formula, and fixed_amount_formula fields to Voucher types: DiscountAmount, DiscountPercent, DiscountUnit, DiscountFixed, VoucherDiscount, and StackableRedeemableResultDiscount

## 2.2.4

### Patch Changes

- [`2899ae6`](https://github.com/voucherifyio/voucherify-js-sdk/commit/2899ae6a1044388f4a5426ef22b8b52e00b747a4) [#214](https://github.com/voucherifyio/voucherify-js-sdk/pull/214) Thanks [@darekg11](https://github.com/darekg11)! - Added 'metadata' property to 'order' object in 'ValidationsValidateVoucherResponse' inteface. Added 'session' property to 'ValidationsValidateVoucherResponse' interface

## 2.2.3

### Patch Changes

- [`312d4a8`](https://github.com/voucherifyio/voucherify-js-sdk/commit/312d4a891a9b5da7543aff1ae3294961043efb92) [#205](https://github.com/voucherifyio/voucherify-js-sdk/pull/205) Thanks [@p-zielinski](https://github.com/p-zielinski)! - Added support for get promotion tier endpoint

## 2.2.2

### Patch Changes

- [`dd1601d`](https://github.com/voucherifyio/voucherify-js-sdk/commit/dd1601d1f3f0651433f20cf2067d96bc1f5164dc) [#209](https://github.com/voucherifyio/voucherify-js-sdk/pull/209) Thanks [@ateev](https://github.com/ateev)! - Fixed minor typos in types for Order

## 2.2.1

### Patch Changes

- [`e7fab63`](https://github.com/voucherifyio/voucherify-js-sdk/commit/e7fab63274d1038b53a049888a6cada2a16265ca) [#207](https://github.com/voucherifyio/voucherify-js-sdk/pull/207) Thanks [@marcin-slezak](https://github.com/marcin-slezak)! - Added missing DiscountFixed type addressing issue #206. Affected types:
  - type `ClientSideValidateResponse` related to:
    - response for GET `/validate`
  - type `SimplePromotionTier` related to:
    - response GET `/promotions/validation`
  - type `PromotionsCreate` related to:
    - params for POST `/campaigns`
  - type `PromotionsValidateResponse` related to:
    - response for POST `/promotions/validation`
  - type `VouchersResponse` related to:
    - response for POST `/redeem`
    - response for POST `/vouchers/qualification`
    - params for POST and PUT `/vouchers/${encode(voucher.code)}`
    - response for GET `/vouchers/${encode(code)}`
    - response POST `loyalties/{campaignId}/members/{memberId}/redemption`
    - response POST `/vouchers/${encode(code)}/enable`
    - response POST `/vouchers/${encode(code)}/disable`
  - type `VouchersImport` related to:
    - params for POST `/vouchers/import`
  - type `PromotionTier` related to:
    - response for GET `/promotions/tiers`
    - response for GET `/promotions/${encode(promotionId)}/tiers`
    - response for POST `/promotions/tiers/${encode(promotionsTierId)}/redemption`
    - response for POST `/vouchers/${encode(code)}/redemption`
  - type `PromotionTiersCreateParams` related to:
    - params for POST `/promotions/${encode(promotionId)}/tiers`
  - type `ValidationsValidateVoucherResponse` related to:
    - response for POST `/vouchers/${encode(code)}/validate`
  - type `SimpleVoucher` related to:
    - response GET/PUT/POST `/campaigns/${encode(name)}`
    - response GET `/campaigns`
    - params POST `/campaigns`
    - response POST `/campaigns/qualification`

## 2.2.0

### Minor Changes

- [`4451288`](https://github.com/voucherifyio/voucherify-js-sdk/commit/4451288cbbef3e3c288a771ed52e767ecc7ed5ab) [#203](https://github.com/voucherifyio/voucherify-js-sdk/pull/203) Thanks [@darekg11](https://github.com/darekg11)! - Add 'CampaignsListResponse' type to return value of campaigns.list method

## 2.1.9

### Patch Changes

- [`d06989b`](https://github.com/voucherifyio/voucherify-js-sdk/commit/d06989b6b3476469719425f922cba930fb8b8f9d) [#198](https://github.com/voucherifyio/voucherify-js-sdk/pull/198) Thanks [@darekg11](https://github.com/darekg11)! - Add missing 'filters' property to 'VouchersListParams' interface to allow for advanced filters for fetching resources

## 2.1.8

### Patch Changes

- [`8e7bf47`](https://github.com/voucherifyio/voucherify-js-sdk/commit/8e7bf477d969942fd59ae2fb6444b13662a260f6) [#195](https://github.com/voucherifyio/voucherify-js-sdk/pull/195) Thanks [@darekg11](https://github.com/darekg11)! - Add 'active' field to 'PromotionTier' interface. Add 'PromotionTierRedeemDetailsSimple' and 'PromotionTierRedeemDetails' types and reuse them in 'RedemptionsRedeemResponse' so that 'RedemptionsRedeemStackableRedemptionResult' can return promotion_tier property

## 2.1.7

### Patch Changes

- [`92ab4fb`](https://github.com/voucherifyio/voucherify-js-sdk/commit/92ab4fb3577332b60846536204c9d3cc6955b22b) [#188](https://github.com/voucherifyio/voucherify-js-sdk/pull/188) Thanks [@darekg11](https://github.com/darekg11)! - Add explicit properties to VoucherifyError class to make it easier for TypeScript folks. Added examples of proper error handling for both classical Node.JS and for TypeScript. Examples includes different handling for networking and API errors

* [`48a46b9`](https://github.com/voucherifyio/voucherify-js-sdk/commit/48a46b9c3c3b64636fa8885919ca9311f2b497e5) [#190](https://github.com/voucherifyio/voucherify-js-sdk/pull/190) Thanks [@darekg11](https://github.com/darekg11)! - Add missing 'related_object_ids', 'related_object_type' and 'related_object_total' properties to 'VoucherifyError' class. Those properties are returned fmor API in case of 'resource_in_ise' error

## 2.1.6

### Patch Changes

- [`089c0be`](https://github.com/voucherifyio/voucherify-js-sdk/commit/089c0bef7983a5cd57e1c38780168482067ac743) [#183](https://github.com/voucherifyio/voucherify-js-sdk/pull/183) Thanks [@emreler](https://github.com/emreler)! - Update 'key' field in ValidationError interface

## 2.1.5

### Patch Changes

- [`f87ccb7`](https://github.com/voucherifyio/voucherify-js-sdk/commit/f87ccb7049ba5fb33cf2aee01c00fd3e09c54e2a) [#181](https://github.com/voucherifyio/voucherify-js-sdk/pull/181) Thanks [@emreler](https://github.com/emreler)! - Add 'assets' from VouchersResponse to CampaignsAddVoucherResponse type

## 2.1.4

### Patch Changes

- [`03fc326`](https://github.com/voucherifyio/voucherify-js-sdk/commit/03fc3261231a4263895f07a0bb578c5ffd15752a) [#179](https://github.com/voucherifyio/voucherify-js-sdk/pull/179) Thanks [@darekg11](https://github.com/darekg11)! - Add new 'ValidationError' type describing error that can be returned upon unsuccessful validation of single voucher or in case of stacked validations. Add this new interface to 'StackableRedeemableResultResponse' and 'ValidationsValidateVoucherResponse' types

## 2.1.3

### Patch Changes

- [`4c4ccf3`](https://github.com/voucherifyio/voucherify-js-sdk/commit/4c4ccf322e2f86c9921593edda3c22691904a19b) [#173](https://github.com/voucherifyio/voucherify-js-sdk/pull/173) Thanks [@darekg11](https://github.com/darekg11)! - Bump qs dependency to 6.9.7 version to fix CVE-2022-24999 / GHSA-hrpp-h998-j3pp

## 2.1.2

### Patch Changes

- [`6886582`](https://github.com/voucherifyio/voucherify-js-sdk/commit/6886582b27be73b7f0a2cfa1ab9cc4fd4d727e8a) [#171](https://github.com/voucherifyio/voucherify-js-sdk/pull/171) Thanks [@darekg11](https://github.com/darekg11)! - Update axios to 0.21.4 in SDK package

* [`3e5f2ee`](https://github.com/voucherifyio/voucherify-js-sdk/commit/3e5f2ee0bb9855e556c67049aa55f8f5a51b7fd0) [#165](https://github.com/voucherifyio/voucherify-js-sdk/pull/165) Thanks [@darekg11](https://github.com/darekg11)! - Bumping libraries to mitigiate some of HIGH and CRITICAL vulnerabilities

## 2.1.1

### Patch Changes

- [`59d7f8a`](https://github.com/voucherifyio/voucherify-js-sdk/commit/59d7f8aeb9fe724e3b9ed49049607c2b221e993c) [#161](https://github.com/voucherifyio/voucherify-js-sdk/pull/161) Thanks [@Davies-Owen](https://github.com/Davies-Owen)! - Add missing gift.balance property to VouchersResponse interface

## 2.1.0

### Minor Changes

- [`eb0f4b1`](https://github.com/voucherifyio/voucherify-js-sdk/commit/eb0f4b164b056018e4e3131c6f9df81fb20098bb) [#160](https://github.com/voucherifyio/voucherify-js-sdk/pull/160) Thanks [@Irene350](https://github.com/Irene350)! - VoucherType input correct enum value DISCOUNT_VOUCHER and GIFT_VOUCHER

## 2.0.17

### Patch Changes

- [`8bb9bb5`](https://github.com/voucherifyio/voucherify-js-sdk/commit/8bb9bb5f48ee2a9b00038c192c39431567f34309) [#156](https://github.com/voucherifyio/voucherify-js-sdk/pull/156) Thanks [@Davies-Owen](https://github.com/Davies-Owen)! - add missing created_at property to VouchersResponse, LoyaltiesRedeemRewardResponse, CampaignsAddVoucherResponse, and ClientSideVoucherListing interfaces

## 2.0.16

### Patch Changes

- [`0960598`](https://github.com/voucherifyio/voucherify-js-sdk/commit/09605985dfa33b5902ce1f4994a1cb17526a8407) [#154](https://github.com/voucherifyio/voucherify-js-sdk/pull/154) Thanks [@Davies-Owen](https://github.com/Davies-Owen)! - Add missing property to OrdersCreateResponse interface

## 2.0.15

### Patch Changes

- [`62525f3`](https://github.com/voucherifyio/voucherify-js-sdk/commit/62525f329bcfc8281d72bd953d8a0b5eeb9982e5) [#152](https://github.com/voucherifyio/voucherify-js-sdk/pull/152) Thanks [@darekg11](https://github.com/darekg11)! - Added missing properties to OrdersItem interface

## 2.0.14

### Patch Changes

- [`98629ca`](https://github.com/voucherifyio/voucherify-js-sdk/commit/98629ca596f1b475ca0ac43ece408738acfc9970) [#149](https://github.com/voucherifyio/voucherify-js-sdk/pull/149) Thanks [@darekg11](https://github.com/darekg11)! - Drop not required customer id property when running promotion validation. Add missing proeprties to promotion validation response

## 2.0.13

### Patch Changes

- [`ff07c8a`](https://github.com/voucherifyio/voucherify-js-sdk/commit/ff07c8adb204c575e656a48beea4a927d311b89a) [#144](https://github.com/voucherifyio/voucherify-js-sdk/pull/144) Thanks [@darekg11](https://github.com/darekg11)! - Add missing 'name', 'start_date' and 'expiration_date' properties to PromotionsValidateResponse interface

## 2.0.12

### Patch Changes

- [`df19c77`](https://github.com/voucherifyio/voucherify-js-sdk/commit/df19c7771be945b1d8708a8992f82e22ce098641) [#141](https://github.com/voucherifyio/voucherify-js-sdk/pull/141) Thanks [@darekg11](https://github.com/darekg11)! - Override SimpleCustomer type to make 'id' property not required in 'RedemptionsRedeemBody' interface since passing ID of customer when redeeming is not required by design

## 2.0.11

### Patch Changes

- [`ae6110b`](https://github.com/voucherifyio/voucherify-js-sdk/commit/ae6110b1ec8022c80a8f05f16e5c9de0e6cae180) [#137](https://github.com/voucherifyio/voucherify-js-sdk/pull/137) Thanks [@darekg11](https://github.com/darekg11)! - Added support for orders import API

## 2.0.10

### Patch Changes

- [`e03db27`](https://github.com/voucherifyio/voucherify-js-sdk/commit/e03db276226a579e7d886a8acb5db58b703a6989) [#136](https://github.com/voucherifyio/voucherify-js-sdk/pull/136) Thanks [@darekg11](https://github.com/darekg11)! - Added documentation links to MetadataSchemas API methods

* [`a8557d1`](https://github.com/voucherifyio/voucherify-js-sdk/commit/a8557d1c70f0732c6996175d3b1e917c29986cee) [#134](https://github.com/voucherifyio/voucherify-js-sdk/pull/134) Thanks [@salzhrani](https://github.com/salzhrani)! - add metadata property to ProductsCreateResponse

## 2.0.9

### Patch Changes

- [`e52b787`](https://github.com/voucherifyio/voucherify-js-sdk/commit/e52b787f48a5aa763d2aaa61b3d28a701548d3cc) [#131](https://github.com/voucherifyio/voucherify-js-sdk/pull/131) Thanks [@tomek-lochmanczyk-rspective](https://github.com/tomek-lochmanczyk-rspective)! - Add function which return "Retry-After" header from response. The purpose is to get information how long it's needed to wait until new requests can be made, when api limits are reached. This ddition is backward compatible so no changes are needed to be made in older code

## 2.0.8

### Patch Changes

- [`e965f61`](https://github.com/voucherifyio/voucherify-js-sdk/commit/e965f615ada65812553a0e5df4409ccf6e02dae1) [#129](https://github.com/voucherifyio/voucherify-js-sdk/pull/129) Thanks [@Irene350](https://github.com/Irene350)! - Adding missing discount amounts on order for validate voucher type response

## 2.0.7

### Patch Changes

- [`7913a06`](https://github.com/voucherifyio/voucherify-js-sdk/commit/7913a06bb3ab6c79bcbfae8ddbff0bcc8329dd73) [#127](https://github.com/voucherifyio/voucherify-js-sdk/pull/127) Thanks [@Irene350](https://github.com/Irene350)! - Improving Validate Voucher response type

## 2.0.6

### Patch Changes

- [`f8241b7`](https://github.com/voucherifyio/voucherify-js-sdk/commit/f8241b709097f53e29427ba4f4260073375ec91c) [#125](https://github.com/voucherifyio/voucherify-js-sdk/pull/125) Thanks [@darekg11](https://github.com/darekg11)! - Added support for metadata-schemas API. Allowing to list all metadata schemas in project or retrieve single one via get method by providing schema name

## 2.0.5

### Patch Changes

- [`a7811e7`](https://github.com/voucherifyio/voucherify-js-sdk/commit/a7811e7e2939efe7a4c59c004dbc9591fcd73030) [#121](https://github.com/voucherifyio/voucherify-js-sdk/pull/121) Thanks [@jkaliszuk](https://github.com/jkaliszuk)! - Added logic that allow to storage lastResponseHeaders data and get apiLimit through ApiLimitsHandler

## 2.0.4

### Patch Changes

- [`f411c1a`](https://github.com/voucherifyio/voucherify-js-sdk/commit/f411c1a56085d80560fdca634e5fdc059a556091) [#119](https://github.com/voucherifyio/voucherify-js-sdk/pull/119) Thanks [@darekg11](https://github.com/darekg11)! - Added support for stackable API methods - validation, redemptions, rollback for both Server Side and Client Side SDKs. Added some missing fields in already existing types definitions and cleaned up other definitions by reusing interfaces

## 2.0.3

### Patch Changes

- [`da9e103`](https://github.com/voucherifyio/voucherify-js-sdk/commit/da9e103a43590b55cb80d64e1743f7ede1e09946) [#117](https://github.com/voucherifyio/voucherify-js-sdk/pull/117) Thanks [@darekg11](https://github.com/darekg11)! - Added support for listing customer activities by customerId. Additionally user can pass query params allowing for better filtering. API Reference: https://docs.voucherify.io/reference/get-customer-activities

## 2.0.2

### Patch Changes

- [`b5f04fa`](https://github.com/voucherifyio/voucherify-js-sdk/commit/b5f04fa09db6849f514910747a5ac9a721f63891) [#112](https://github.com/voucherifyio/voucherify-js-sdk/pull/112) Thanks [@darekg11](https://github.com/darekg11)! - Query params passed to `this.client.post` method are now correctly stringified. Added possibility to pass query params to `voucherify.promotions.validate` method in order to allow developers using SDK to pass advanced filters to restrict possible range of promotion campaigns against which validation should be performed.

## 2.0.1

### Patch Changes

- [`532e82b`](https://github.com/voucherifyio/voucherify-js-sdk/commit/532e82b2bd3a5991a0fd83af2edc226c6c98c680) [#105](https://github.com/voucherifyio/voucherify-js-sdk/pull/105) Thanks [@jfougere](https://github.com/jfougere)! - Fix missing session attributes in client side validation request

## 2.0.0

### Major Changes

- [`c5c8b97`](https://github.com/voucherifyio/voucherify-js-sdk/commit/c5c8b97ac9aa230ed77012c2782643df7caf119b) [#93](https://github.com/voucherifyio/voucherify-js-sdk/pull/93) Thanks [@awilczek](https://github.com/awilczek)! - Support new async API methods

  Changes:

  - Campaign vouchers import
    - added CampaignsVouchersImportResponse
  - Vouchers import
    - added VouchersImportResponse
  - Vouchers bulkUpdate
    - using new API method
    - **BREAKING** change of VouchersBulkUpdateResponse
    - **BREAKING** obligatory 'metadata' field in VouchersBulkUpdateObject
  - Vouchers bulkUpdateMetadata
    - using new API method
    - **BREAKING** change of VouchersBulkUpdateMetadataResponse
    - **BREAKING** obligatory 'metadata' field in VouchersBulkUpdateMetadata
  - Products bulkUpdate
    - using [new API method](https://docs.voucherify.io/reference/post-products-in-bulk)
    - **BREAKING** change of ProductsBulkUpdateResponse
  - Products bulkUpdateMetadata
    - using [new API method](https://docs.voucherify.io/reference/async-update-products-metadata-in-bulk)
    - **BREAKING** change of method name
    - **BREAKING** change of ProductsBulkUpdateMetadataResponse
  - Products getSku
    - using [new API method](https://docs.voucherify.io/reference/get-sku-v20210726)
    - **BREAKING** change of method params
    - changed in CR fixes

## 1.3.1

### Patch Changes

- [`8ff9b8d`](https://github.com/voucherifyio/voucherify-js-sdk/commit/8ff9b8d6e2535b524b2d5707a69ffd3ced4b2254) [#95](https://github.com/voucherifyio/voucherify-js-sdk/pull/95) Thanks [@pannga](https://github.com/pannga)! - Version 1.3.0 enabled encoding in RequestController - it was used to fix encoding for both server side and client side SDKs. This introduced issue, as we did not notice that ClientSide get methods were explicitly encoding query params (toQueryParams function). That meant the query params were encoded twice and that lead to issues with characters such as %.

## 1.3.0

### Minor Changes

- [`bc0b14b`](https://github.com/voucherifyio/voucherify-js-sdk/commit/bc0b14b56c3b91896e0fbf50e040cee11b24bc4e) [#91](https://github.com/voucherifyio/voucherify-js-sdk/pull/91) Thanks [@pannga](https://github.com/pannga)! - Fixed wrong Qs arrayFormat

## 1.2.0

### Minor Changes

- [`0425e2b`](https://github.com/voucherifyio/voucherify-js-sdk/commit/0425e2b27b9bead05c828af9c6b4e369e6df2b21) [#88](https://github.com/voucherifyio/voucherify-js-sdk/pull/88) Thanks [@darekg11](https://github.com/darekg11)! - Allow to pass additional headers to requests made to Voucherify API. Custom headers can be passed via 'customHeaders' option available in VoucherifyServerSideOptions and VoucherifyClientSideOptions. Such option might prove to be useful when debugging

## 1.1.0

### Minor Changes

- [`16019cf`](https://github.com/voucherifyio/voucherify-js-sdk/commit/16019cf22b4604c609b3baac488b46a334279424) [#79](https://github.com/voucherifyio/voucherify-js-sdk/pull/79) Thanks [@mandraszyk](https://github.com/mandraszyk)! - Async Actions API support added

## 1.0.1

### Patch Changes

- [`39276e4`](https://github.com/voucherifyio/voucherify-js-sdk/commit/39276e4e5d199fe4a15e0a64f55b07949c23be30) [#74](https://github.com/voucherifyio/voucherify-js-sdk/pull/74) Thanks [@pannga](https://github.com/pannga)! - Updated changesets/cli to the latest version

* [`39276e4`](https://github.com/voucherifyio/voucherify-js-sdk/commit/39276e4e5d199fe4a15e0a64f55b07949c23be30) [#74](https://github.com/voucherifyio/voucherify-js-sdk/pull/74) Thanks [@pannga](https://github.com/pannga)! - Removed \$FixMe types

- [`0d5b2c0`](https://github.com/voucherifyio/voucherify-js-sdk/commit/0d5b2c06087f15d0bfcbd67d50ee4deaf5d9883e) [#70](https://github.com/voucherifyio/voucherify-js-sdk/pull/70) Thanks [@pannga](https://github.com/pannga)! - Updated examples and documentation.

## 1.0.0

### Major Changes

- [`2a00746`](https://github.com/voucherifyio/voucherify-js-sdk/commit/2a00746599004b6a649bc6d892e9adbd8f413f81) [#69](https://github.com/voucherifyio/voucherify-js-sdk/pull/69) Thanks [@pannga](https://github.com/pannga)! - The first major version combines previously maintained Voucherify Node.js SDK and Voucherify.js. See Migration Guide to see what is changed.

### Patch Changes

- [`7c491eb`](https://github.com/voucherifyio/voucherify-js-sdk/commit/7c491eb9a3a786e044a7f5e31c1a1529157d69e8) [#19](https://github.com/voucherifyio/voucherify-js-sdk/pull/19) Thanks [@pannga](https://github.com/pannga)! - Distributions types

  - Used FixMe convention for unknown types
  - Added Distributions types
  - Removed deprecated method
  - Updated Distribution types

* [`29f69e1`](https://github.com/voucherifyio/voucherify-js-sdk/commit/29f69e1a499c1576058e915bd683812b6c7a363c) [#28](https://github.com/voucherifyio/voucherify-js-sdk/pull/28) Thanks [@pannga](https://github.com/pannga)! - Added Rewards types

- [`dec48a0`](https://github.com/voucherifyio/voucherify-js-sdk/commit/dec48a08f5d3b2907a9533c95e3e15f3d2c10dd4) [#20](https://github.com/voucherifyio/voucherify-js-sdk/pull/20) Thanks [@pannga](https://github.com/pannga)! - Added Campaigns types

* [`4d01aad`](https://github.com/voucherifyio/voucherify-js-sdk/commit/4d01aad667312797c83e027d0d871afaeb7e4d12) [#18](https://github.com/voucherifyio/voucherify-js-sdk/pull/18) Thanks [@pannga](https://github.com/pannga)! - Updated Consents types

- [`0098874`](https://github.com/voucherifyio/voucherify-js-sdk/commit/0098874bb15c1b902fdb5f4ecff19d72beec0596) [#15](https://github.com/voucherifyio/voucherify-js-sdk/pull/15) Thanks [@pannga](https://github.com/pannga)! - Added ClientSide types

* [`1dec176`](https://github.com/voucherifyio/voucherify-js-sdk/commit/1dec176817f2d1b5e6a5c959f0cbca3c7ae63a6b) [#30](https://github.com/voucherifyio/voucherify-js-sdk/pull/30) Thanks [@pannga](https://github.com/pannga)! - Added Validation Rules types

- [`0098874`](https://github.com/voucherifyio/voucherify-js-sdk/commit/0098874bb15c1b902fdb5f4ecff19d72beec0596) [#15](https://github.com/voucherifyio/voucherify-js-sdk/pull/15) Thanks [@pannga](https://github.com/pannga)! - Updated types for client side publish method

* [`dec48a0`](https://github.com/voucherifyio/voucherify-js-sdk/commit/dec48a08f5d3b2907a9533c95e3e15f3d2c10dd4) [#20](https://github.com/voucherifyio/voucherify-js-sdk/pull/20) Thanks [@pannga](https://github.com/pannga)! - added missing method for publishing a ceratin voucher to selected campaign

- [`18bd006`](https://github.com/voucherifyio/voucherify-js-sdk/commit/18bd0061268a44b4cf00f431d55913df8b7087ce) [#25](https://github.com/voucherifyio/voucherify-js-sdk/pull/25) Thanks [@pannga](https://github.com/pannga)! - Added Promotions types

* [`3276101`](https://github.com/voucherifyio/voucherify-js-sdk/commit/32761019b9653ea00c9af8cd76b20e8736779ddf) [#29](https://github.com/voucherifyio/voucherify-js-sdk/pull/29) Thanks [@pannga](https://github.com/pannga)! - Added Segments types & missing Segment List method

- [`93adf99`](https://github.com/voucherifyio/voucherify-js-sdk/commit/93adf99c55cc43c09e0deaf8fae025676ac3b0a7) [#23](https://github.com/voucherifyio/voucherify-js-sdk/pull/23) Thanks [@pannga](https://github.com/pannga)! - Added Orders types

* [`c27f5b2`](https://github.com/voucherifyio/voucherify-js-sdk/commit/c27f5b28651602afc5800f71bba83c9aaf7bc7fe) [#24](https://github.com/voucherifyio/voucherify-js-sdk/pull/24) Thanks [@pannga](https://github.com/pannga)! - Added Products types

- [`2321908`](https://github.com/voucherifyio/voucherify-js-sdk/commit/2321908bf2f72ad696bc97e0ceff4d34c10f106d) [#31](https://github.com/voucherifyio/voucherify-js-sdk/pull/31) Thanks [@pannga](https://github.com/pannga)! - Added Validation types

* [`0098874`](https://github.com/voucherifyio/voucherify-js-sdk/commit/0098874bb15c1b902fdb5f4ecff19d72beec0596) [#15](https://github.com/voucherifyio/voucherify-js-sdk/pull/15) Thanks [@pannga](https://github.com/pannga)! - Used FixMe convention for unknown types

- [`e90cdec`](https://github.com/voucherifyio/voucherify-js-sdk/commit/e90cdec6a6d0f786d3a9cc5bbe7649ea5d2eec46) [#33](https://github.com/voucherifyio/voucherify-js-sdk/pull/33) Thanks [@pannga](https://github.com/pannga)! - Added Vouchers types

* [`4d01aad`](https://github.com/voucherifyio/voucherify-js-sdk/commit/4d01aad667312797c83e027d0d871afaeb7e4d12) [#18](https://github.com/voucherifyio/voucherify-js-sdk/pull/18) Thanks [@pannga](https://github.com/pannga)! - Added Consents type

- [`8628825`](https://github.com/voucherifyio/voucherify-js-sdk/commit/8628825df7e5a2ddfd746923277d162abd4ca516) [#27](https://github.com/voucherifyio/voucherify-js-sdk/pull/27) Thanks [@pannga](https://github.com/pannga)! - Added Redemptions types

* [`0098874`](https://github.com/voucherifyio/voucherify-js-sdk/commit/0098874bb15c1b902fdb5f4ecff19d72beec0596) [#15](https://github.com/voucherifyio/voucherify-js-sdk/pull/15) Thanks [@pannga](https://github.com/pannga)! - Added missing ClientSide types

- [`022b037`](https://github.com/voucherifyio/voucherify-js-sdk/commit/022b03753898801b083f45e6633a5ed97d22c2f6) [#17](https://github.com/voucherifyio/voucherify-js-sdk/pull/17) Thanks [@pannga](https://github.com/pannga)! - Added Events types

* [`022b037`](https://github.com/voucherifyio/voucherify-js-sdk/commit/022b03753898801b083f45e6633a5ed97d22c2f6) [#17](https://github.com/voucherifyio/voucherify-js-sdk/pull/17) Thanks [@pannga](https://github.com/pannga)! - Updated Events types

- [`920b5dd`](https://github.com/voucherifyio/voucherify-js-sdk/commit/920b5dd1c95bc7b3b3b85b60d4b8aa7ebbddcaa9) [#26](https://github.com/voucherifyio/voucherify-js-sdk/pull/26) Thanks [@pannga](https://github.com/pannga)! - Added Promotion Tiers types

* [`ed1de95`](https://github.com/voucherifyio/voucherify-js-sdk/commit/ed1de95e84282971c6f3fcc0875e67d2962194b6) [#21](https://github.com/voucherifyio/voucherify-js-sdk/pull/21) Thanks [@pannga](https://github.com/pannga)! - Added Loyalties types

- [`20752b9`](https://github.com/voucherifyio/voucherify-js-sdk/commit/20752b921f824c8bbbfc4b7197b0b87612eb760d) [#22](https://github.com/voucherifyio/voucherify-js-sdk/pull/22) Thanks [@pannga](https://github.com/pannga)! - Added Exports types

## 0.0.5

### Patch Changes

- [`1036e5d`](https://github.com/voucherifyio/voucherify-js-sdk/commit/1036e5d7507421faf4bea80bfe6bab9cf6a5f0b3) [#12](https://github.com/voucherifyio/voucherify-js-sdk/pull/12) Thanks [@eddyw](https://github.com/eddyw)! - Generate UMD bundle

## 0.0.4

### Patch Changes

- [`e3285c5`](https://github.com/voucherifyio/voucherify-js-sdk/commit/e3285c5c2f20d65a4b767c3d9eebdef9172259a1) [#10](https://github.com/voucherifyio/voucherify-js-sdk/pull/10) Thanks [@eddyw](https://github.com/eddyw)! - Export missing types

  - export missing type `CustomerRequest`
  - export missing type `CustomersCommonListRequest`

## 0.0.3

### Patch Changes

- [`ca8e470`](https://github.com/voucherifyio/voucherify-js-sdk/commit/ca8e470c1cb5bfb33d642069f40f3315d89b89d2) [#6](https://github.com/voucherifyio/voucherify-js-sdk/pull/6) Thanks [@eddyw](https://github.com/eddyw)! - - Add JSDoc comments to all namespaces with links to https://docs.voucherify.io/
  - setup typedoc to generate automatic documentation

## 0.0.2

### Patch Changes

- [`8e49408`](https://github.com/voucherifyio/voucherify-js-sdk/commit/8e494083837e8e932c26b3cad08479f4015ec2fc) [#5](https://github.com/voucherifyio/voucherify-js-sdk/pull/5) Thanks [@eddyw](https://github.com/eddyw)! - First SDK release
