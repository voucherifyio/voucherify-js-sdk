<p align="center" >
  <img src="./voucherify-nodejs-sdk.png" />
</p>

<h3 align="center">Official Voucherify SDK for JavaScript</h3>

<p align="center">
  <a href="#"><img src="https://travis-ci.org/voucherifyio/voucherify-nodejs-sdk.svg?branch=master" alt="Build Status"/></a>
  <a href="#"><img src="https://img.shields.io/npm/v/voucherify.svg" alt="NPM Version"/></a>
  <a href="#"><img src="https://img.shields.io/npm/dm/voucherify.svg" alt="NPM Downloads"/></a>
</p>
<hr />

<p align="center">
<b><a href="#about">About</a></b>
|
<b><a href="#installation">Installation</a></b>
|
<b><a href="#migration">Migration</a></b>
|
<b><a href="#error-handling">Error handling</a></b>
|
<b><a href="#contributing">Contributing</a></b>
|
<b><a href="#changelog">Changelog</a></b>
</p>

<p align="center"><b>Server Side</b></p>
<p align="center">
<a href="#server-side-setup">Setup</a>
|
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
</p>
<p align="center"><b>Client Side</b></p>
<p align="center">
<a href="#client-side-setup">Setup</a>
|
<a href="#set-identity">Set Identity</a>
|
<a href="#validate">Validate</a>
|
<a href="#redeem">Redeem</a>
|
<a href="#publish">Publish</a>
|
<a href="#track-custom-events">Track custom events</a>
</p>

---

## About

Voucherify.js is a JavaScript SDK which is fully consistent with restful API Voucherify provides.

You will find detailed description and example responses at our [official documentation](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq). Method headers point to more detailed descriptions of arguments you can use.

Learn more about Voucherify by visiting [our site](http://voucherify.io?utm_source=github&utm_medium=sdk&utm_campaign=acq).

---

## Installation

```sh
npm install voucherify --save
```

Then, [login](http://app.voucherify.io/?utm_source=github&utm_medium=sdk&utm_campaign=acq#/login) to your Voucherify Dashboard and get your API keys from [Configuration](https://app.voucherify.io/?utm_source=github&utm_medium=sdk&utm_campaign=acq#/app/core/projects/current/general).

---

## Server Side

### <a name="server-side-setup"></a>Setup

```javascript
const { VoucherifyServerSide } = require('@voucherify/sdk')

const client = VoucherifyServerSide({
	applicationId: 'YOUR-APPLICATION-ID',
	secretKey: 'YOUR-CLIENT-SECRET-KEY',
	apiUrl: 'https://<region>.api.voucherify.io', // optional
	apiVersion: 'v2018-08-01', // optional
	channel: 'e-commerce', // optional
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
client.vouchers.enable(code)
client.vouchers.enable({ code: 'TEST-VOUCHER' })
```

#### [Disable Voucher]

```javascript
client.vouchers.disable(code)
client.vouchers.disable({ code: 'TEST-VOUCHER' })
```

#### [Add Gift Voucher Balance]

```javascript
client.vouchers.balance.create(code, { amount: 2000 })
```

#### [Import Vouchers]

```javascript
client.vouchers.import(vouchers)
```

#### [Examine Vouchers Qualification]

```javascript
client.vouchers.qualifications.examine(body, params)
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

#### [Get Campaign]

```javascript
client.campaigns.get(name)
```

#### [Delete Campaign]

```javascript
client.campaigns.delete(campaignName)
client.campaigns.delete(campaignName, { force: true })
```

#### [Add Voucher to Campaign]

```javascript
client.campaigns.addVoucher(campaignName)
client.campaigns.addVoucher(campaignName, params)
```

#### [Import Vouchers to Campaign]

```javascript
client.campaigns.importVouchers(campaignName, vouchers)
```

#### [List Campaigns]

```javascript
client.campaigns.list()
client.campaigns.list(params)
```

#### [Examine Campaigns Qualification]

```javascript
client.campaigns.qualifications.examine(body)
client.campaigns.qualifications.examine(body, params)
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
```

Other possibility

```
client.validations.validate(code)
client.validations.validate(code, params)
```

#### [Validate Promotion Campaign]

```javascript
client.validations.promotions.validate(params)
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
client.validations.promotions.validate(params)
```

#### [List Promotion's Tiers]

```javascript
client.promotions.tiers.list(promotionCampaignId)
```

Check [promotion's tier object](http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-promotion-object)

#### [List All Promotion Tiers]

```javascript
client.promotions.tiers.listAll()
client.promotions.tiers.listAll(params})
```

#### [Create Promotion's Tier]

```javascript
client.promotions.tiers.create(promotionId, params)
```

#### [Redeem Promotion's Tier]

```javascript
client.promotions.tiers.redeem(promotionsTierId, params)
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

#### Scroll through customers

Standard list customers API has limitation of available pages to be shown equal to 100.
To cover cases when you would like to fetch more, you must use scroll capabilities.

```javascript
async function () {
  for await (const customer of client.customers.scroll(params)) {
    console.log('Customer', customer)
  }
}
```

With optional arguments

```javascript
async function () {
  for await (const customer of client.customers.scroll({
    starting_after: "2020-01-01", // optional
    order: "created_at" // default: "-created_at"
    ...params})
  ) {
    console.log('Customer', customer)
  }
}
```

`params` argument is consistent with `client.customers.list()` method.

You can optionally define scrolling cursor based on customer creation date using property `starting_after`. By default returned customers are in descending order, if you want to change it to ascending define `order` equal to `created_at`.

Keep in mind this operation may drain your API call limits fairly quickly - each api call fetches 100 customers. So if you have 100.000 customers, you will use 1000 API calls.

#### [Update Customer's Consents]

```javascript
client.customers.updateConsents(customer, consents)
```

---

### Consents API

Methods are provided within `client.consents.*` namespace.

- [List Consents](#list-consents)

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

`order` object must contain `id` or `source_id`.

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

## Client Side

### <a name="client-side-setup"></a>Setup

```javascript
const { VoucherifyClientSide } = require('@voucherify/sdk')

const client = VoucherifyClientSide({
	clientApplicationId: 'YOUR-APPLICATION-ID',
	clientSecretKey: 'YOUR-CLIENT-SECRET-KEY',
	apiUrl: 'https://<region>.api.voucherify.io', // optional
	trackingId: 'gustav@purpleson.com', // or client.setIdentity('gustav@purpleson.com')
	origin: 'example.com', // read more below
})
```

The `origin` property is required in Node.js, but when using in client-side environment (in browser) this option will be ignored.

We are tracking users which are validating vouchers with those who consume them by a tracking_id. For that we are setting up an identity for the user. This method will generate a tracking_id on the server side unless you specify it on your own using `client.setIdentity` method. In both cases you will receive it in the validation response.

### Client Side API

Methods are provided within `client.*` namespace.

- [Set Identity](#set-identity)
- [Validate](#validate)
- [Redeem](#redeem)
- [Publish](#publish)
- [Track custom events](#track-custom-events)

#### Set Identity

```javascript
client.setIdentity(trackingId)
```

#### [Validate](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#vouchers-validate)

Check [params object](https://docs.voucherify.io/v1/reference#the-customer-object).

```javascript
client.validate(params)
```

#### [Redeem](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#redeem-voucher-client-side)

Check [payload object](https://docs.voucherify.io/v1/reference#the-customer-object).

```javascript
client.redeem(code, payload)
```

#### Publish

Check [context object](https://docs.voucherify.io/v1/reference#the-customer-object).

```javascript
client.publish(campaignName, payload)
```

#### [Track custom events](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#track-custom-event-client-side)

Check [context object](https://docs.voucherify.io/v1/reference#the-customer-object).

```javascript
client.track(eventName, metadata, customer)
```

---

## Migration

### From Voucherify Nodejs SDK

<table>
<tr>
  <th>
    Method
  </th>
  <th>
    Previously
  </th>
  <th>
    Currently
  </th>
  </tr>
<tr>
  <td>
    Initialization
  </td>
  <td>

```javascript
const client = VoucherifyServerSide({
	apiUrl: 'https://<region>.api.voucherify.io',
	applicationId: 'YOUR-APPLICATION-ID',
	secretKey: 'YOUR-CLIENT-SECRET-KEY',
	apiVersion: 'v2017-04-05',
	channel: 'e-commerce',
})
```

  </td>
  <td>

```javascript
const client = VoucherifyServerSide({
	apiUrl: 'https://<region>.api.voucherify.io',
	applicationId: 'YOUR-APPLICATION-ID',
	secretKey: 'YOUR-CLIENT-SECRET-KEY',
	apiVersion: 'v2017-04-05',
	channel: 'e-commerce',
})
```

  </td>
</tr>
</table>

### From Voucherify.js

<table>
<tr>
  <th>
    Method
  </th>
  <th>
    Previously
  </th>
  <th>
    Currently
  </th>
  </tr>
<tr>
  <td>
    Initialization
  </td>
  <td>

```javascript
const client = VoucherifyServerSide({
	apiUrl: 'https://<region>.api.voucherify.io',
	applicationId: 'YOUR-APPLICATION-ID',
	secretKey: 'YOUR-CLIENT-SECRET-KEY',
	apiVersion: 'v2017-04-05',
	channel: 'e-commerce',
})
```

  </td>
  <td>

```javascript
const client = VoucherifyServerSide({
	apiUrl: 'https://<region>.api.voucherify.io',
	applicationId: 'YOUR-APPLICATION-ID',
	secretKey: 'YOUR-CLIENT-SECRET-KEY',
	apiVersion: 'v2017-04-05',
	channel: 'e-commerce',
})
```

  </td>
</tr>
</table>

---

## Error handling

Voucherify `error` object always has consistent structure, described in details in our [API reference](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#errors).

---

## Contributing

Bug reports and pull requests are welcome through [GitHub Issues](https://github.com/voucherifyio/voucherify-nodejs-sdk/issues). Read more about how to Contribute to Voucherify.js by visiting [CONTRIBUTING.md](/contributing.md)

[create voucher]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-voucher
[get voucher]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#vouchers-get
[update voucher]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-voucher
[delete voucher]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-voucher
[list vouchers]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-vouchers
[enable voucher]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#enable-voucher
[disable voucher]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#disable-voucher
[import vouchers]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#import-vouchers-1
[examine vouchers qualification]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#push-qualification-request
[add gift voucher balance]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#add-gift-voucher-balance
[create campaign]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-campaign
[update campaign]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-campaign
[delete campaign]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-campaign
[create publication]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-publication
[get campaign]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-campaign
[add voucher to campaign]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#add-voucher-to-campaign
[import vouchers to campaign]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#import-vouchers
[list campaigns]: https://docs.voucherify.io/v2017-04-20/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-campaigns
[examine campaigns qualification]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-qualification-request
[delete reward assignment]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq##delete-reward-assignment
[create loyalty program]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-loyalty-program
[get loyalty program]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-loyalty-program
[update loyalty program]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-loyalty-program
[delete loyalty program]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-loyalty-program
[list loyalty programs]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-loyalty-programs
[create loyalty reward assignment]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-reward-assignment-1
[update loyalty reward assignment]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-reward-assignment-1
[delete loyalty reward assignment]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-reward-assignment-1
[list loyalty reward assignments]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-reward-assignments-1
[create loyalty earning rules]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-earning-rule
[update loyalty earning rule]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-earning-rule
[delete loyalty earning rule]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-earning-rule
[list loyalty earning rules]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-earning-rules
[create loyalty member]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-member
[get loyalty member]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-member
[list loyalty members]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-members
[get member activities]: https://docs.voucherify.io/reference#get-member-activities
[add loyalty card balance]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#add-loyalty-card-balance
[redeem loyalty card]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#redeem-loyalty-card
[publish voucher]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#publish-voucher
[create export]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-export
[get export]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-export
[delete export]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-export
[list publications]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-publications
[validate voucher]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#validate-voucher
[redeem voucher]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#redeem-voucher
[list redemptions]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-redemptions
[get voucher's redemptions]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#vouchers-redemptions
[rollback redemption]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#rollback-redemption
[create promotion campaign]: http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-promotion-campaign
[validate promotion campaign]: http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#validate-promotions-1
[list promotion's tiers]: http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-promotions
[list all promotion tiers]: http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-promotion-tiers
[create promotion's tier]: http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#add-promotion-tier-to-campaign
[redeem promotion's tier]: http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#redeem-promotion
[update promotion's tier]: http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-promotion
[delete promotion's tier]: http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-promotion
[create customer]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-customer
[get customer]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#read-customer
[update customer]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-customer
[delete customer]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-customer
[list customers]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-customers
[update customer's consents]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-customers-consents
[list consents]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-consents
[create order]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-order
[get order]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-order
[update order]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-order
[list orders]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-orders
[create product]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-product
[get product]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-product
[update product]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-product
[bulk update products]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-products-in-bulk
[delete product]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-product
[list products]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-products
[create sku]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-sku
[get sku]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-sku
[update sku]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-sku
[delete sku]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-sku
[list all product skus]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-skus
[create reward]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-reward
[get reward]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-reward
[update reward]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-reward
[delete reward]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-reward
[list rewards]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-rewards
[create reward assignment]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-reward-assignment
[update reward assignment]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-reward-assignment
[list reward assignments]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-reward-assignments
[create validation rule]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-validation-rules
[get validation rule]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-validation-rules
[update validation rule]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-validation-rules
[delete validation rule]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-validation-rules
[list rules]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-validation-rules
[create rule assignment]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-validation-rules-assignment
[delete rule assignment]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-validation-rules-assignment
[list rule assignments]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-validation-rule-assignments
[create segment]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-segment
[get segment]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-segment
[delete segment]: https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-segment
[create custom event]: http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-custom-event-object
