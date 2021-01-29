<p align="center" >
  <img src="./voucherify-nodejs-sdk.png" />
</p>

<h3 align="center">Official <a href="http://voucherify.io?utm_source=github&utm_medium=sdk&utm_campaign=acq">Voucherify</a> SDK for Node.js</h3>

<p align="center">
  <a href="https://travis-ci.org/voucherifyio/voucherify-nodejs-sdk"><img src="https://travis-ci.org/voucherifyio/voucherify-nodejs-sdk.svg?branch=master" alt="Build Status"/></a>
  <a href="https://www.npmjs.com/package/voucherify"><img src="https://img.shields.io/npm/v/voucherify.svg" alt="NPM Version"/></a>
  <a href="https://www.npmjs.com/package/voucherify"><img src="https://img.shields.io/npm/dm/voucherify.svg" alt="NPM Downloads"/></a>
</p>
<hr />

<p align="center">
<b><a href="#migration-to-5x">Migration to 5.x</a></b>
|
<b><a href="#setup">Setup</a></b>
|
<b><a href="#error-handling">Error handling</a></b>
|
<b><a href="#contributing">Contributing</a></b>
|
<b><a href="#changelog">Changelog</a></b>
</p>

<p align="center">Server Side</p>
<p align="center">
<a href="#vouchers-api">Vouchers</a>
|
<a href="#campaigns-api">Campaigns</a>
|
<a href="#distributions-api">Distributions</a>
|
<a href="#validations-api">Validations</a>
|
<a href="#redemptions-api">Redemptions</a>
|
<a href="#customers-api">Customers</a>
|
<a href="#consents-api">Consents</a>
|
<a href="#orders-api">Orders</a>
|
<a href="#products-api">Products</a>
|
<a href="#rewards-api">Rewards</a>
|
<a href="#loyalties-api">Loyalties</a>
|
<a href="#segments-api">Segments</a>
|
<a href="#validation-rules-api">Validation Rules</a>
|
<a href="#promotions-api">Promotions</a>
|
<a href="#events-api">Events</a>
|
<a href="#utils">Utils</a>
</p>
<p align="center">Client Side</p>
<p align="center">
<a href="#vouchers-api">Vouchers</a>
|
<a href="#campaigns-api">Campaigns</a>
|
<a href="#distributions-api">Distributions</a>
|
<a href="#validations-api">Validations</a>
|
<a href="#redemptions-api">Redemptions</a>
|
<a href="#customers-api">Customers</a>
|
<a href="#consents-api">Consents</a>
|
<a href="#orders-api">Orders</a>
|
<a href="#products-api">Products</a>
|
<a href="#rewards-api">Rewards</a>
|
<a href="#loyalties-api">Loyalties</a>
|
<a href="#segments-api">Segments</a>
|
<a href="#validation-rules-api">Validation Rules</a>
|
<a href="#promotions-api">Promotions</a>
|
<a href="#events-api">Events</a>
|
<a href="#utils">Utils</a>
</p>

---

## About

This SDK is fully consistent with restful API Voucherify provides.
You will find detailed description and example responses at [official docs](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq).
Method headers point to more detailed descriptions of params you can use.

## Setup

```sh
npm install voucherify --save
```

Mext, [log-in](http://app.voucherify.io/?utm_source=github&utm_medium=sdk&utm_campaign=acq#/login) to your Voucherify Dashboard and get your API keys from [Configuration](https://app.voucherify.io/?utm_source=github&utm_medium=sdk&utm_campaign=acq#/app/core/projects/current/general):

## Server Side

### Setup

```javascript
const { VoucherifyServerSide } = require('@voucherify/sdk')

const client = VoucherifyServerSide({
	applicationId: 'YOUR-APPLICATION-ID',
	clientSecretKey: 'YOUR-CLIENT-SECRET-KEY',
	apiVersion: 'v2017-04-05', // optional
	apiUrl: 'https://<region>.api.voucherify.io', // optional
})
```

### Vouchers API

Methods are provided within `client.vouchers.*` namespace.

- [Create Voucher](#create-voucher)
- [Get Voucher](#get-voucher)
- [Update Voucher](#update-voucher)
- [Delete Voucher](#delete-voucher)
- [Add Gift Voucher Balance](#add-gift-voucher-balance)
- [List Vouchers](#list-vouchers)
- [Enable Voucher](#enable-voucher)
- [Disable Voucher](#disable-voucher)
- [Import Vouchers](#import-vouchers)
- [Examine Vouchers Qualification](#examine-vouchers-qualification)

#### [Create Voucher]

```javascript
client.vouchers.create(voucher)
```

Check [voucher object](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-voucher-object).

#### [Get Voucher]

```javascript
client.vouchers.get(code)
```

#### [Update Voucher]

```javascript
client.vouchers.update(voucher)
```

#### [Delete Voucher]

```javascript
client.vouchers.delete(code)
client.vouchers.delete(code, { force: true })
```

#### [List Vouchers]

```javascript
client.vouchers.list()
client.vouchers.list(params)
```

#### [Enable Voucher]

```javascript
client.vouchers.enable()
client.vouchers.enable(code)
```

#### [Disable Voucher]

```javascript
client.vouchers.disable()
client.vouchers.disable(code)
```

#### [Import Vouchers]

```javascript
client.vouchers.import(vouchers)
```

#### [Add Gift Voucher Balance]

```javascript
client.vouchers.balance.create(code, { amount })
```

#### [Examine Vouchers Qualification]

```javascript
client.vouchers.qualifications.examine(bodyParams)
client.vouchers.qualifications.examine(bodyParams, queryParams)
// Example
client.vouchers.qualifications.examine({}, { audienceRulesOnly: true, limit: 10 })
```

---

### Campaigns API

Methods are provided within `client.campaigns.*` namespace.

- [Create Campaign](#create-campaign)
- [Update Campaign](#update-campaign)
- [Get Campaign](#get-campaign)
- [Add Voucher to Campaign](#add-voucher-to-campaign)
- [Import Vouchers to Campaign](#import-vouchers-to-campaign)
- [List Campaigns](#list-campaigns)
- [Examine Campaigns Qualification](#examine-campaigns-qualification)

#### [Create Campaign]

```javascript
client.campaigns.create(campaign)
```

#### [Update Campaign]

Method will update only fields passed to `campaign` argument.

```javascript
client.campaigns.update(campaignId, campaign)
client.campaigns.update(campaignName, campaign)
```

#### [Delete Campaign]

```javascript
client.campaigns.delete(campaignName)
client.campaigns.delete(campaignName, { force: true })
```

#### [Get Campaign]

```javascript
client.campaigns.get(name)
```

#### [Add Voucher to Campaign]

```javascript
client.campaigns.addVoucher(campaignName)
client.campaigns.addVoucher(campaignName, params)
```

#### [Import Vouchers to Campaign]

```javascript
client.campaigns.importVouchers(campaignName, vouchers, callback)
```

#### [List Campaigns]

Since API version: `v2017-04-20`.

```javascript
client.campaigns.list()
client.campaigns.list(params)
```

#### [Examine Campaigns Qualification]

```javascript
client.campaigns.qualifications.examine(bodyParams)
client.campaigns.qualifications.examine(bodyParams, queryParams)
// Example
client.campaigns.qualifications.examine({}, { audienceRulesOnly: true, limit: 10 })
```

---

### Distributions API

Methods are provided within `client.distributions.*` namespace.

- [Publish Voucher](#publish-voucher)
- [Create Export](#create-export)
- [Get Export](#get-export)
- [Delete Export](#delete-export)
- [List publications](#list-publications)
- [Create publication](#create-publication)

#### [Publish Voucher]

```javascript
client.distributions.publish(params)
```

#### [Create Export]

```javascript
client.distributions.exports.create(exportObject)
```

Check [the export object](https://docs.voucherify.io/v1/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-export-object).

#### [Get Export]

```javascript
client.distributions.exports.get(exportId)
```

#### [Delete Export]

```javascript
client.distributions.exports.delete(exportId)
```

#### [List publications]

```javascript
client.distributions.publications.list()
client.distributions.publications.list(params)
```

#### [Create publication]

```javascript
client.distributions.publications.create(params)
```

---

### Validations API

Methods are provided within `client.validations.*` namespace.

- [Validate Voucher](#validate-voucher)
- [Validate Promotion Campaign](#validate-promotion-campaign)

#### [Validate Voucher]

```javascript
client.validations.validateVoucher(code)
client.validations.validateVoucher(code, params)

// or

client.validations.validate(code)
client.validations.validate(code, params)
```

#### [Validate Promotion Campaign](#validate-promotion-campaign)

```javascript
client.validations.validate(params)
```

---

### Redemptions API

Methods are provided within `client.redemptions.*` namespace.

- [Redeem Voucher](#redeem-voucher)
- [Redeem Promotion's Tier](#redeem-promotions-tier)
- [Redeem Loyalty Card](#redeem-loyalty-card)
- [List Redemptions](#list-redemptions)
- [Get Voucher's Redemptions](#get-vouchers-redemptions)
- [Rollback Redemption](#rollback-redemption)

#### [Redeem Voucher]

```javascript
client.redemptions.redeem(code)
client.redemptions.redeem(code, params)

// Deprecated!
client.redemptions.redeem({ code, ...params })
client.redemptions.redeem({ code, ...params }, tracking_id)
client.redemptions.redeem(code, tracking_id) // use: client.redemptions.redeem(code, {customer: {source_id}})
```

#### [Redeem Loyalty Card]

```javascript
client.redemptions.redeem(loyaltyCardId, params)
```

#### [List Redemptions]

```javascript
client.redemptions.list()
client.redemptions.list(params)
```

#### [Get Voucher's Redemptions]

```javascript
client.redemptions.getForVoucher(code)
```

#### [Rollback Redemption]

```javascript
client.redemptions.rollback(redemptionId)
client.redemptions.rollback(redemptionId, params)
client.redemptions.rollback(redemptionId, reason)
```

Check [redemption rollback object](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-redemption-rollback-object).

---

### Promotions API

Methods are provided within `client.promotions.*` namespace.

- [Create Promotion Campaign](#create-promotion-campaign)
- [Validate Promotion Campaign](#validate-promotion-campaign)
- [List Promotion's Tiers](#list-promotions-tiers)
- [List All Promotion Tiers](#list-all-promotion-tiers)
- [Create Promotion's Tier](#create-promotions-tier)
- [Redeem Promotion's Tier](#redeem-promotions-tier)
- [Update Promotion's Tier](#update-promotions-tier)
- [Delete Promotion's Tier](#delete-promotions-tier)

Check [promotion campaign object](http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-promotion-campaign).

#### [Create Promotion Campaign]

```javascript
client.promotions.create(promotionCampaign)
```

#### [Validate Promotion Campaign]

```javascript
client.promotions.validate(validationContext)
```

#### [List Promotion's Tiers]

```javascript
client.promotions.tiers.list(promotionCampaignId)
```

Check [promotion's tier object](http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-promotion-object)

#### [List All Promotion Tiers]

```javascript
client.promotions.tiers.listAll()
client.promotions.tiers.listAll({ is_available: true })
client.promotions.tiers.listAll({ page: 2, limit: 10 })
```

You can list all currently available promotions by specifying `is_available` flag.

#### [Create Promotion's Tier]

```javascript
client.promotions.tiers.create(promotionId, promotionsTier)
```

#### [Redeem Promotion's Tier]

```javascript
client.promotions.tiers.redeem(promotionsTierId, redemptionContext)
```

#### [Update Promotion's Tier]

```javascript
client.promotions.tiers.update(promotionsTier)
```

#### [Delete Promotion's Tier]

```javascript
client.promotions.tiers.delete(promotionsTierId)
```

---

### Customers API

Methods are provided within `client.customers.*` namespace.

- [Create Customer](#create-customer)
- [Get Customer](#get-customer)
- [Update Customer](#update-customer)
- [Delete Customer](#delete-customer)
- [List Customers](#list-customers)
- [Update Customer's Consents](#update-customers-consents)

#### [Create Customer]

```javascript
client.customers.create(customer)
```

Check [customer object](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-customer-object).

#### [Get Customer]

```javascript
client.customers.get(customerId)
```

#### [Update Customer]

`customer` object must contain `id` or `source_id`.

```javascript
client.customers.update(customer)
```

#### [Delete Customer]

```javascript
client.customers.delete(customerId)
```

#### [List Customers]

```javascript
client.customers.list()
client.customers.list(params)
```

#### [Scroll through customers]

Standard list customers API has limitation of available pages to be shown equal to 100.
To cover cases when you would like to fetch more, you must use scroll capabilities.

```javascript
async function () {
  for await (const customer of client.customers.scroll(params)) {
    console.log('Customer', customer)
  }
}
```

`params` argument is consistent with `list` method.
Keep in mind `scroll` doesn't support callback version.

You can optionally define scrolling cursor based on customer creation date using property `starting_after`.
By default returned customers are in descending order, if you want to change it to ascending define `order` equal to `create_at`.

```javascript
async function () {
  for await (const customer of client.customers.scroll({
    starting_after: "2020-01-01", // optional
    order: "create_at" // optional (by default order is "-create_at" which corresponds to descending).
    ...params})
  ) {
    console.log('Customer', customer)
  }
}
```

Keep in mind this operation may drain your API call limits fairly quickly.
In the hood it fetches customers in max possible batches of 100.
So in example if you have 100'000 customers scroll over all of them, you will use 1000 API calls.

#### [Update Customer's Consents]

```javascript
client.customers.updateConsents(customer, consents)
```

---

### Consents API

Methods are provided within `client.consents.*` namespace.

- [List Customers](#list-customers)

You can [update Customer's consents](#update-customers-consents) in Customer namespace.

#### [List Consents]

```javascript
client.consents.list()
```

---

### Orders API

Methods are provided within `client.orders.*` namespace.

- [Create Order](#create-order)
- [Get Order](#get-order)
- [Update Order](#update-order)
- [List Orders](#list-orders)

#### [Create Order]

```javascript
client.orders.create(order)
```

Check [the order object](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-order-object).

#### [Get Order]

```javascript
client.orders.get(orderId)
```

#### [Update Order]

```javascript
client.orders.update(order)
```

#### [List Orders]

```javascript
client.orders.list()
client.orders.list(params)
```

---

### Products API

Methods are provided within `client.products.*` namespace.

- [Create Product](#create-product)
- [Get Product](#get-product)
- [Update Product](#update-product)
- [Bulk Update Products](#bulk-update-products)
- [Delete Product](#delete-product)
- [List Products](#list-products)
- [Create SKU](#create-sku)
- [Get SKU](#get-sku)
- [Update SKU](#update-sku)
- [Delete SKU](#delete-sku)
- [List all product SKUs](#list-all-product-skus)

#### [Create Product]

```javascript
client.products.create(product)
```

Check [product object](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-product-object).

#### [Get Product]

```javascript
client.products.get(productId)
```

#### [Update Product]

```javascript
client.products.update(product)
```

#### [Bulk Update Products]

```javascript
client.products.bulkUpdate(products)
```

#### [Delete Product]

```javascript
client.products.delete(productId)
client.products.delete(productId, { force: true })
```

#### [List Products]

```javascript
client.products.list()
client.products.list(params)
```

#### [Create SKU]

```javascript
client.products.createSku(productId, sku)
```

Check [SKU object](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-sku-object).

#### [Get SKU]

```javascript
client.products.getSku(productId, skuId)
```

#### [Update SKU]

```javascript
client.products.updateSku(productId, sku)
```

#### [Delete SKU]

```javascript
client.products.deleteSku(productId, skuId)
client.products.deleteSku(productId, skuId, { force: true })
```

#### [List all product SKUs]

```javascript
client.products.listSkus(productId)
```

---

### Rewards API

Methods are provided within `client.rewards.*` namespace.

- [Create Reward](#create-reward)
- [Get Reward](#get-reward)
- [Update Reward](#update-reward)
- [Delete Reward](#delete-reward)
- [List Rewards](#list-rewards)
- [Create Reward Assignment](#create-reward-assignment)
- [Update Reward Assignment](#update-reward-assignment)
- [Delete Reward Assignment](#delete-reward-assignment)
- [List Reward Assignments](#list-reward-assignments)

#### [Create Reward]

```javascript
client.rewards.create(reward)
```

Check [reward object](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-reward-object).

#### [Get Reward]

```javascript
client.rewards.get(rewardId)
```

#### [Update Reward]

```javascript
client.rewards.update(reward)
```

#### [Delete Reward]

```javascript
client.rewards.delete(rewardId)
```

#### [List Rewards]

```javascript
client.rewards.list()
client.rewards.list(params)
```

#### [Create Reward Assignment]

```javascript
client.rewards.createAssignment(rewardId, assignment)
```

Check [reward assignment object](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-reward-assignment-object).

#### [Update Reward Assignment]

```javascript
client.rewards.updateAssignment(rewardId, assignment)
```

#### [Delete Reward Assignment]

```javascript
client.rewards.deleteAssignment(rewardId, assignmentId)
```

#### [List Reward Assignments]

```javascript
client.rewards.listAssignments(rewardId)
client.rewards.listAssignments(rewardId, params)
```

---

### Loyalties API

Methods are provided within `client.loyalties.*` namespace.

- [Create Loyalty](#create-loyalty-program)
- [Get Loyalty](#get-loyalty-program)
- [Update Loyalty](#update-loyalty-program)
- [Delete Loyalty](#delete-loyalty-program)
- [List Loyalties](#list-loyalty-programs)
- [Create Loyalty Reward Assignment](#create-loyalty-reward-assignment)
- [Update Loyalty Reward Assignment](#update-loyalty-reward-assignment)
- [Delete Loyalty Reward Assignment](#delete-loyalty-reward-assignment)
- [List Loyalty Reward Assignments](#list-loyalty-reward-assignments)
- [Create Loyalty Earning Rules](#create-loyalty-earning-rules)
- [Update Loyalty Earning Rule](#update-loyalty-earning-rule)
- [Delete Loyalty Earning Rule](#delete-loyalty-earning-rule)
- [List Loyalty Earning Rules](#list-loyalty-earning-rules)
- [Create Loyalty Member](#create-loyalty-member)
- [Get Loyalty Member](#get-loyalty-member)
- [List Loyalty Members](#list-loyalty-members)
- [Get Member Activites](#get-member-activities)
- [Add Points](#add-loyalty-card-balance)
- [Redeem reward](#redeem-loyalty-card)

#### [Create Loyalty]

```javascript
client.loyalties.create(campaign)
```

#### [Get Loyalty]

```javascript
client.loyalties.get(campaignId)
```

#### [Update Loyalty]

```javascript
client.loyalties.update(campaign)
```

#### [Delete Loyalty]

```javascript
client.loyalties.delete(campaignId)
```

#### [List Loyalties]

```javascript
client.loyalties.list()
client.loyalties.list(params)
```

#### [Create Loyalty Reward Assignment]

```javascript
client.loyalties.createRewardAssignments(campaignId, assignment)
```

#### [Update Loyalty Reward Assignment]

```javascript
client.loyalties.updateRewardAssignment(campaignId, assignment)
```

#### [Delete Loyalty Reward Assignment]

```javascript
client.loyalties.deleteRewardAssignment(campaignId, assignmentId)
```

#### [List Loyalty Reward Assignments]

```javascript
client.loyalties.listRewardAssignments(campaignId)
client.loyalties.listRewardAssignments(campaignId, params)
```

#### [Create Loyalty Earning Rules]

```javascript
client.loyalties.createEarningRule(campaignId, earningRules)
```

#### [Update Loyalty Earning Rule]

```javascript
client.loyalties.updateEarningRule(campaignId, earningRule)
```

#### [Delete Loyalty Earning Rule]

```javascript
client.loyalties.deleteEarningRule(campaignId, earningRuleId)
```

#### [List Loyalty Earning Rules]

```javascript
client.loyalties.listEarningRules(campaignId)
client.loyalties.listEarningRules(campaignId, params)
```

#### [Create Loyalty Member]

```javascript
client.loyalties.createMember(campaignId, member)
```

#### [Get Loyalty Member]

```javascript
client.loyalties.getMember(campaignId, memberId)
```

#### [List Loyalty Members]

```javascript
client.loyalties.listMembers(campaignId)
client.loyalties.listMembers(campaignId, params)
```

#### [Get Member Activities]

```javascript
client.loyalties.getMemberActivities(campaignId, memberId)
```

#### [Add Loyalty Card Balance]

```javascript
client.loyalties.addPoints(campaignId, memberId, balance)
```

#### [Redeem Loyalty Card]

```javascript
client.loyalties.redeemReward(campaignId, memberId, reward)
```

---

### Segments API

Methods are provided within `client.segments.*` namespace.

- [Create Segment](#create-segment)
- [Get Segment](#get-segment)
- [Delete Segment](#delete-segment)

#### [Create Segment]

```javascript
client.segments.create(segment)
```

Check [the segment object](https://docs.voucherify.io/v1/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-segment-object).

#### [Get Segment]

```javascript
client.segments.get(segmentId)
```

#### [Delete Segment]

```javascript
client.segments.delete(segmentId)
```

---

### Validation Rules API

Methods are provided within `client.validationRules.*` namespace.

- [Create Rule](#create-validation-rule)
- [Get Rule](#get-validation-rule)
- [Update Rule](#update-validation-rule)
- [Delete Rule](#delete-validation-rule)
- [Create Rule Assignment](#create-rule-assignment)
- [Delete Rule Assignment](#delete-rule-assignment)
- [List Rules](#list-rules)
- [List Rule Assignments](#list-rule-assignments)
- [Validate Validation Rule](#validate-validation-rule)

#### [Create Validation Rule]

```javascript
client.validationRules.create(validationRule)
```

Check [validation rule object](https://docs.voucherify.io/v1/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-validation-rule-object).

#### [Get Validation Rule]

```javascript
client.validationRules.get(validationRuleId)
```

#### [Update Validation Rule]

```javascript
client.validationRules.update(validationRule)
```

#### [Delete Validation Rule]

```javascript
client.validationRules.delete(validationRuleId)
```

#### [Create Rule Assignment]

```javascript
client.validationRules.createAssignment(validationRuleId, assignment)
```

#### [Delete Rule Assignment]

```javascript
client.validationRules.deleteAssignment(validationRuleId, assignmentId)
```

#### [List Rules]

```javascript
client.validationRules.list()
client.validationRules.list(params)
```

#### [List Rule Assignments]

```javascript
client.validationRules.listAssignments(validationRuleId)
client.validationRules.listAssignments(validationRuleId, params)
```

#### [Validate Validation Rule]

```javascript
client.validationRules.validate(validationRuleId)
client.validationRules.validate(validationRuleId, params)
```

---

### Events API

Methods are provided within `client.events.*` namespace.

- [Create Event](#create-custom-event)

#### [Create event]

Check [customer object](https://docs.voucherify.io/v1/reference#the-customer-object).

```javascript
client.events.create(eventName, { customer })
client.events.create(eventName, { customer, metadata })
client.events.create(eventName, { customer, referral, metadata })
client.events.create(eventName, { customer, referral, loyalty, metadata })
```

---

## Client Side

### Setup

```javascript
const { VoucherifyClientSide } = require('@voucherify/sdk')

const client = VoucherifyClientSide({
	clientApplicationId: 'YOUR-APPLICATION-ID',
	clientSecretKey: 'YOUR-CLIENT-SECRET-KEY',
	trackingId: 'gustav@purpleson.com', // or client.setIldentity('gustav@purpleson.com')
	origin: 'example.com',
})
```

---

### Migration from old Node js SDK

---

## Error handling

Depending what you have choose `error` object of rejected Promise or first argument of provided callback has
consistent structure, described in details in our [API reference](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#errors).

## Contributing

Bug reports and pull requests are welcome through [GitHub Issues](https://github.com/voucherifyio/voucherify-nodejs-sdk/issues).
