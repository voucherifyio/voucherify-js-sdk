# Voucherify JS SDK

<p>
  <a href="#"><img src="https://github.com/voucherifyio/voucherify-js-sdk/workflows/Release/badge.svg?branch=main" alt="Build Status"/></a>
  <a href="#"><img src="https://github.com/voucherifyio/voucherify-js-sdk/workflows/Lint/badge.svg?branch=main" alt="Lint Status"/></a>
  <a href="#"><img src="https://img.shields.io/npm/v/@voucherify/sdk?label=SDK" alt="SDK NPM Version"/></a>
  <a href="#"><img src="https://img.shields.io/npm/dm/@voucherify/sdk?label=SDK%20downloads" alt="SDK NPM Downloads"/></a>
</p>

Voucherify JS SDK is a JavaScript SDK which is fully consistent with restful API Voucherify provides and has fully integrated TypeScript support. It also combines together our previously maintained [Voucherify Node.js SDK](https://github.com/voucherifyio/voucherify-nodejs-sdk) and [Voucherify.js](https://github.com/rspective/voucherify.js/).

Learn more about Voucherify by visiting [our site](http://voucherify.io?utm_source=github&utm_medium=sdk&utm_campaign=acq).

# 🔖 Table of contents

- [Documentation](#documentation)
- [Installation](#installation)
- [Server side](#server-side)
  - [Setup](#server-side-setup")
  - [Methods](#server-side-methods)
    - [Vouchers](#vouchers-api)
    - [Campaigns](#campaigns-api)
    - [Validations](#distributions-api)
    - [Distributions](#validations-api)
    - [Redemptions](#redemptions-api)
    - [Customers](#customers-api)
    - [Consents](#consents-api)
    - [Orders](#orders-api)
    - [Products](#products-api)
    - [Rewards](#rewards-api)
    - [Loyalties](#loyalties-api)
    - [Segments](#segments-api)
    - [Validation Rules](#validation-rules-api)
    - [Promotions](#promotions-api)
    - [Events](#events-api)
- [Client side](#client-side)
  - [Setup](#client-side-setup)
  - [Methods](#client-side-methods)
- [Migration](#migration)
- [Typescript](#typescript)
- [Error handling](#error-handling)
- [Contributing](#contributing)
- [Changelog](#changelog)

# <a name="documentation"></a>📝 Documentation

You will find detailed description and example responses at our [official documentation](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq). Most method headers point to more detailed descriptions of arguments you can use.

You can also use our detailed documentation provided by our package [here](https://voucherifyio.github.io/voucherify-js-sdk/).

📚 Want to learn more? Visit our [official site](https://voucherify.io) or our [Success Portal](https://success.voucherify.io).

👽 Having troubles? Check our [Help center](https://support.voucherify.io/).

🧪 Looking for promotion ideas? Check our [Cookbook](https://cookbook.voucherify.io/) to get an inspiration.

# <a name="installation"></a>⚙️ Installation

Local installation:

```sh
npm install voucherify --save
```

CDN installation:

```html
<script
	type="text/javascript"
	src="https://unpkg.com/@voucherify/sdk/dist/voucherifysdk.umd.production.min.js"
	crossorigin
></script>
```

Then, [login](http://app.voucherify.io/?utm_source=github&utm_medium=sdk&utm_campaign=acq#/login) to your Voucherify Dashboard and get your API keys from [Configuration](https://app.voucherify.io/?utm_source=github&utm_medium=sdk&utm_campaign=acq#/app/core/projects/current/general).

# <a name="server-side"></a>🤖 Server Side

## <a name="server-side-setup"></a>Setup

```javascript
const { VoucherifyServerSide } = require('@voucherify/sdk')

// import { VoucherifyServerSide } from '@voucherify/sdk' ES6 compatible

const client = VoucherifyServerSide({
	applicationId: 'YOUR-APPLICATION-ID',
	secretKey: 'YOUR-SECRET-KEY',
	apiUrl: 'https://<region>.api.voucherify.io', // optional
	apiVersion: 'v2018-08-01', // optional
	channel: 'e-commerce', // optional
})
```

## <a name="server-side-methods"></a>Methods

### Vouchers

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
- [Update Vouchers Metadata in bulk](#update-vouchers-metadata-in-bulk)
- [Update Vouchers in bulk](#update-vouchers-in-bulk)
- [Release Validation Session](#release-validation-session)

#### [Create Voucher](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-voucher)

```javascript
client.vouchers.create(voucher)
```

Check [voucher object](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-voucher-object).

#### [Get Voucher](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#vouchers-get)

```javascript
client.vouchers.get(code)
```

#### [Update Voucher](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-voucher)

```javascript
client.vouchers.update(voucher)
```

#### [Delete Voucher](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-voucher)

```javascript
client.vouchers.delete(code)
client.vouchers.delete(code, params)
```

#### [List Vouchers](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-vouchers)

```javascript
client.vouchers.list()
client.vouchers.list(params)
```

#### [Enable Voucher](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#enable-voucher)

```javascript
client.vouchers.enable(code)
```

#### [Disable Voucher](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#disable-voucher)

```javascript
client.vouchers.disable(code)
```

#### [Add Gift Voucher Balance](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#add-gift-voucher-balance)

```javascript
client.vouchers.balance.create(code, params)
```

#### [Import Vouchers](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#import-vouchers-1)

```javascript
client.vouchers.import(vouchers)
```

#### [Examine Vouchers Qualification](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#push-qualification-request)

```javascript
client.vouchers.qualifications.examine(body, params)
```

#### [Update Vouchers Metadata in bulk](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-vouchers-metadata-in-bulk)

```javascript
client.vouchers.bulkUpdateMetadata(params)
```

#### [Update Vouchers in bulk](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-vouchers-in-bulk)

```javascript
client.vouchers.bulkUpdate(vouchers)
```

#### [Release Validation Session](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#release-validation-session)

```javascript
client.vouchers.releaseValidationSession(code, sessionKey)
```

---

### Campaigns

Methods are provided within `client.campaigns.*` namespace.

- [Create Campaign](#create-campaign)
- [Update Campaign](#update-campaign)
- [Get Campaign](#get-campaign)
- [Add Voucher to Campaign](#add-voucher-to-campaign)
- [Import Vouchers to Campaign](#import-vouchers-to-campaign)
- [List Campaigns](#list-campaigns)
- [Examine Campaigns Qualification](#examine-campaigns-qualification)

#### [Create Campaign](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-campaign)

```javascript
client.campaigns.create(campaign)
```

#### [Update Campaign](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-campaign)

```javascript
client.campaigns.update(campaignId, campaign)
client.campaigns.update(campaignName, campaign)
```

Method will update only fields passed to `campaign` argument.

#### [Get Campaign](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-campaign)

```javascript
client.campaigns.get(name)
```

#### [Delete Campaign](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-campaign)

```javascript
client.campaigns.delete(campaignName)
client.campaigns.delete(campaignName, params)
```

#### [Add Voucher to Campaign](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#add-voucher-to-campaign)

```javascript
client.campaigns.addVoucher(campaignName)
client.campaigns.addVoucher(campaignName, body)
client.campaigns.addVoucher(campaignName, body, params)
```

#### [Add certain Voucher to Campaign](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#add-voucher-with-certain-code-to-campaign)

```javascript
client.campaigns.addCertainVoucher(campaignName, code, codeParams)
client.campaigns.addCertainVoucher(campaignName, code)
```

#### [Import Vouchers to Campaign](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#import-vouchers)

```javascript
client.campaigns.importVouchers(campaignName, vouchers)
```

#### [List Campaigns](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-campaigns)

```javascript
client.campaigns.list()
client.campaigns.list(params)
```

#### [Examine Campaigns Qualification](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-qualification-request)

```javascript
client.campaigns.qualifications.examine(body)
client.campaigns.qualifications.examine(body, params)
```

---

### Distributions

Methods are provided within `client.distributions.*` namespace.

- [Create Export](#create-export)
- [Get Export](#get-export)
- [Delete Export](#delete-export)
- [List publications](#list-publications)
- [Create publication](#create-publication)

#### [Create Export](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-export)

```javascript
client.distributions.exports.create(exportObject)
```

Check [the export object](https://docs.voucherify.io/v1/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-export-object).

#### [Get Export](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-export)

```javascript
client.distributions.exports.get(exportId)
```

#### [Delete Export](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-export)

```javascript
client.distributions.exports.delete(exportId)
```

#### [List publications](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-publications)

```javascript
client.distributions.publications.list()
client.distributions.publications.list(params)
```

#### [Create publication](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-publication)

```javascript
client.distributions.publications.create(params)
```

---

### Validations

Methods are provided within `client.validations.*` or `client.promotions.*` namespace.

- [Validate Voucher](#validate-voucher)
- [Validate Promotion Campaign](#validate-promotion-campaign)

#### [Validate Voucher](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#validate-voucher)

```javascript
client.validations.validateVoucher(code)
client.validations.validateVoucher(code, params)
```

Other possibility

```javascript
client.validations.validate(code)
client.validations.validate(code, params)
```

#### [Validate Promotion Campaign](http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#validate-promotions-1)

```javascript
client.promotions.validate(params)
```

Other possibility

```javascript
client.validations.validate(params)
```

---

### Redemption

Methods are provided within `client.redemptions.*` namespace.

- [Redeem Voucher](#redeem-voucher)
- [Get Redemption](#get-redemption)
- [Redeem Promotion's Tier](#redeem-promotions-tier)
- [Redeem Loyalty Card](#redeem-loyalty-card)
- [List Redemptions](#list-redemptions)
- [Get Voucher's Redemptions](#get-vouchers-redemptions)
- [Rollback Redemption](#rollback-redemption)

#### [Redeem Voucher](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#redeem-voucher)

```javascript
client.redemptions.redeem(code)
client.redemptions.redeem(code, params)
```

#### [Get Redemption](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-redemption)

```javascript
client.redemptions.get(redemptionId)
```

#### [List Redemptions](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-redemptions)

```javascript
client.redemptions.list()
client.redemptions.list(params)
```

#### [Get Voucher's Redemptions](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#vouchers-redemptions)

```javascript
client.redemptions.getForVoucher(code)
```

#### [Rollback Redemption](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#rollback-redemption)

```javascript
client.redemptions.rollback(redemptionId)
client.redemptions.rollback(redemptionId, params)
```

Check [redemption rollback object](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-redemption-rollback-object).

---

### Promotions

Methods are provided within `client.promotions.*` namespace.

- [Create Promotion Campaign](#create-promotion-campaign)
- [Validate Promotion Campaign](#validate-promotion-campaign)
- [List Promotion's Tiers](#list-promotions-tiers)
- [List All Promotion Tiers](#list-all-promotion-tiers)
- [Add Promotion Tier to Campaign](#create-promotions-tier)
- [Redeem Promotion](#redeem-promotion)
- [Update Promotion Tier](#update-promotions-tier)
- [Delete Promotion Tier](#delete-promotions-tier)

Read how to [Validate Promotion Campaign](#validate-promotion-campaign) in Validations section

#### [Create Promotion Campaign](http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-promotion-campaign)

```javascript
client.promotions.create(promotionCampaign)
```

Check [promotion campaign object](http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-promotion-campaign).

#### [List Promotion's Tiers](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-promotions)

```javascript
client.promotions.tiers.list(promotionCampaignId)
```

Check [promotion's tier object](http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-promotion-object)

#### [List All Promotion Tiers](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-promotion-tiers)

```javascript
client.promotions.tiers.listAll()
client.promotions.tiers.listAll(params})
```

#### [Add Promotion Tier to Campaign](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#add-promotion-tier-to-campaign)

```javascript
client.promotions.tiers.create(promotionId, params)
```

#### [Redeem Promotion](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#redeem-promotion)

```javascript
client.promotions.tiers.redeem(promotionsTierId, params)
```

#### [Update Promotion Tier](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-promotion)

```javascript
client.promotions.tiers.update(promotionsTier)
```

#### [Delete Promotion Tier](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-promotion)

```javascript
client.promotions.tiers.delete(promotionsTierId)
```

---

### Customers

Methods are provided within `client.customers.*` namespace.

- [Create Customer](#create-customer)
- [Get Customer](#get-customer)
- [Update Customer](#update-customer)
- [Delete Customer](#delete-customer)
- [List Customers](#list-customers)
- [Update Customer's Consents](#update-customers-consents)

#### [Create Customer](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-customer)

```javascript
client.customers.create(customer)
```

Check [customer object](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-customer-object).

#### [Get Customer](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-customer)

```javascript
client.customers.get(customerId)
```

#### [Update Customer](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-customer)

```javascript
client.customers.update(customer)
```

`customer` object must contain `id` or `source_id`.

#### [Delete Customer](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-customer)

```javascript
client.customers.delete(customerId)
```

#### [List Customers](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-customers)

```javascript
client.customers.list()
client.customers.list(params)
```

Standard list customers API has limitation of available pages to be shown equal to 100. To cover cases when you would like to fetch more, you must use scroll capabilities as shown below.

#### Scroll through customers

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

#### [Update Customer's Consents](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-customers-consents)

```javascript
client.customers.updateConsents(customer, consents)
```

---

### Consents

Methods are provided within `client.consents.*` namespace.

- [Get Consents](#get-consents)

You can [update Customer's consents](#update-customers-consents) in `client.customer.*` namespace.

#### [Get Consents](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-consents)

```javascript
client.consents.list()
```

---

### Orders

Methods are provided within `client.orders.*` namespace.

- [Create Order](#create-order)
- [Get Order](#get-order)
- [Update Order](#update-order)
- [List Orders](#list-orders)

#### [Create Order](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-order)

```javascript
client.orders.create(order)
```

Check [the order object](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-order-object).

#### [Get Order](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-order)

```javascript
client.orders.get(orderId)
```

#### [Update Order](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-order)

```javascript
client.orders.update(order)
```

`order` object must contain `id` or `source_id`.

#### [List Orders](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-orders)

```javascript
client.orders.list()
client.orders.list(params)
```

---

### Products

Methods are provided within `client.products.*` namespace.

- [Create Product](#create-product)
- [Get Product](#get-product)
- [Update Product](#update-product)
- [Delete Product](#delete-product)
- [Update Products in Bulk](#update-products-in-bulk)
- [List Products](#list-products)
- [Create SKU](#create-sku)
- [Get SKU](#get-sku)
- [Update SKU](#update-sku)
- [Delete SKU](#delete-sku)
- [List all product SKUs](#list-all-product-skus)

#### [Create Product](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-product)

```javascript
client.products.create(product)
```

Check [product object](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-product-object).

#### [Get Product](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-product)

```javascript
client.products.get(productId)
```

#### [Update Product](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-product)

```javascript
client.products.update(product)
```

#### [Delete Product](<(https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-product)>)

```javascript
client.products.delete(productId)
client.products.delete(productId, { force: true })
```

#### [Update Products in Bulk](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-products-in-bulk)

```javascript
client.products.bulkUpdate(products)
```

#### [List Products](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-products)

```javascript
client.products.list()
client.products.list(params)
```

#### [Create SKU](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-skus)

```javascript
client.products.createSku(productId, sku)
```

Check [SKU object](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-sku-object).

#### [Get SKU](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-skus)

```javascript
client.products.getSku(productId, skuId)
```

#### [Update SKU](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-skus)

```javascript
client.products.updateSku(productId, sku)
```

#### [Delete SKU](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-skus)

```javascript
client.products.deleteSku(productId, skuId)
client.products.deleteSku(productId, skuId, { force: true })
```

#### [List all product SKUs](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-skus)

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

#### [Create Reward](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-reward)

```javascript
client.rewards.create(reward)
```

Check [reward object](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-reward-object).

#### [Get Reward](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-reward)

```javascript
client.rewards.get(rewardId)
```

#### [Update Reward](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-reward)

```javascript
client.rewards.update(reward)
```

#### [Delete Reward](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-reward)

```javascript
client.rewards.delete(rewardId)
```

#### [List Rewards](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-rewards)

```javascript
client.rewards.list()
client.rewards.list(params)
```

#### [Create Reward Assignment](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-reward-assignment)

```javascript
client.rewards.createAssignment(rewardId, assignment)
```

Check [reward assignment object](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-reward-assignment-object).

#### [Update Reward Assignment](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-reward-assignment)

```javascript
client.rewards.updateAssignment(rewardId, assignment)
```

#### [Delete Reward Assignment](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-reward-assignment)

```javascript
client.rewards.deleteAssignment(rewardId, assignmentId)
```

#### [List Reward Assignments](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-reward-assignments)

```javascript
client.rewards.listAssignments(rewardId)
client.rewards.listAssignments(rewardId, params)
```

---

### Loyalties API

Methods are provided within `client.loyalties.*` namespace.

- [Create Loyalty Program](#create-loyalty-program)
- [Get Loyalty Program](#get-loyalty-program)
- [Update Loyalty Program](#update-loyalty-program)
- [Delete Loyalty Program](#delete-loyalty-program)
- [List Loyalty Programs](#list-loyalty-programs)
- [Create Loyalty Program Reward Assignment](#create-loyalty-program-reward-assignment)
- [Update Loyalty Program Reward Assignment](#update-loyalty-program-reward-assignment)
- [Delete Loyalty Program Reward Assignment](#delete-loyalty-program-reward-assignment)
- [List Loyalty Program Reward Assignments](#list-loyalty-program-reward-assignments)
- [Create Loyalty Program Earning Rules](#create-loyalty-program-earning-rules)
- [Update Loyalty Program Earning Rule](#update-loyalty-program-earning-rule)
- [Delete Loyalty Program Earning Rule](#delete-loyalty-program-earning-rule)
- [List Loyalty Program Earning Rules](#list-loyalty-program-earning-rules)
- [Create Loyalty Program Member](#create-loyalty-program-member)
- [Get Loyalty Program Member](#get-loyalty-program-member)
- [List Loyalty Program Members](#list-loyalty-members)
- [Get Loyalty Program Member Activities](#get-loyalty-program-member-activities)
- [Add Loyalty Card Balance](#add-loyalty-card-balance)
- [Redeem Loyalty Card](#redeem-loyalty-card)

#### [Create Loyalty Program](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-loyalty-program)

```javascript
client.loyalties.create(campaign)
```

#### [Get Loyalty Program](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-loyalty-program)

```javascript
client.loyalties.get(campaignId)
```

#### [Update Loyalty Program](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-loyalty-program)

```javascript
client.loyalties.update(campaign)
```

#### [Delete Loyalty Program](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-loyalty-program)

```javascript
client.loyalties.delete(campaignId)
```

#### [List Loyalty Programs](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-loyalty-programs)

```javascript
client.loyalties.list()
client.loyalties.list(params)
```

#### [Create Loyalty Program Reward Assignment](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-reward-assignment-1)

```javascript
client.loyalties.createRewardAssignments(campaignId, assignment)
```

#### [Update Loyalty Program Reward Assignment](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-reward-assignment-1)

```javascript
client.loyalties.updateRewardAssignment(campaignId, assignment)
```

#### [Delete Loyalty Program Reward Assignment](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-reward-assignment-1)

```javascript
client.loyalties.deleteRewardAssignment(campaignId, assignmentId)
```

#### [List Loyalty Program Reward Assignments](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-reward-assignments-1)

```javascript
client.loyalties.listRewardAssignments(campaignId)
client.loyalties.listRewardAssignments(campaignId, params)
```

#### [Create Loyalty Program Earning Rules](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-earning-rule)

```javascript
client.loyalties.createEarningRule(campaignId, earningRules)
```

#### [Update Loyalty Program Earning Rule](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-earning-rule)

```javascript
client.loyalties.updateEarningRule(campaignId, earningRule)
```

#### [Delete Loyalty Program Earning Rule](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-earning-rule)

```javascript
client.loyalties.deleteEarningRule(campaignId, earningRuleId)
```

#### [List Loyalty Program Earning Rules](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-earning-rules)

```javascript
client.loyalties.listEarningRules(campaignId)
client.loyalties.listEarningRules(campaignId, params)
```

#### [Create Loyalty Program Member](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-member)

```javascript
client.loyalties.createMember(campaignId, member)
```

#### [Get Loyalty Program Member](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-member)

```javascript
client.loyalties.getMember(campaignId, memberId)
```

#### [List Loyalty Program Members](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-members)

```javascript
client.loyalties.listMembers(campaignId)
client.loyalties.listMembers(campaignId, params)
```

#### [Get Loyalty Program Member Activities](https://docs.voucherify.io/reference#get-member-activities)

```javascript
client.loyalties.getMemberActivities(campaignId, memberId)
```

`memberId` referrers to Loyalty Card code.

#### [Add Loyalty Card Balance](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#add-loyalty-card-balance)

```javascript
client.loyalties.addPoints(campaignId, memberId, balance)
```

`memberId` referrers to Loyalty Card code.

#### [Redeem Loyalty Card]

```javascript
client.loyalties.redeemReward(campaignId, memberId, params)
```

`memberId` referrers to Loyalty Card code.

When redeeming reward with type `COIN` you need to provide additional `order` object in the `params`

---

### Segments API

Methods are provided within `client.segments.*` namespace.

- [Create Segment](#create-segment)
- [Get Segment](#get-segment)
- [Delete Segment](#delete-segment)

#### [Create Segment](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-segment)

```javascript
client.segments.create(segment)
```

Check [the segment object](https://docs.voucherify.io/v1/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-segment-object).

#### [Get Segment](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-segment)

```javascript
client.segments.get(segmentId)
```

#### [Delete Segment](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-segment)

```javascript
client.segments.delete(segmentId)
```

---

### Validation Rules

Methods are provided within `client.validationRules.*` namespace.

- [Create Rule](#create-validation-rule)
- [Get Rule](#get-validation-rule)
- [Update Rule](#update-validation-rule)
- [Delete Rule](#delete-validation-rule)
- [Create Rule Assignment](#create-validation-rule-assignment)
- [Delete Rule Assignment](#delete-validation-rule-assignment)
- [List Rules](#list-validation-rules)
- [List Rule Assignments](#list-validation-rule-assignments)

#### [Create Validation Rule](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-validation-rules)

```javascript
client.validationRules.create(validationRule)
```

Check [validation rule object](https://docs.voucherify.io/v1/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-validation-rule-object).

#### [Get Validation Rule](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-validation-rules)

```javascript
client.validationRules.get(validationRuleId)
```

#### [Update Validation Rule](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-validation-rules)

```javascript
client.validationRules.update(validationRule)
```

#### [Delete Validation Rule](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-validation-rules)

```javascript
client.validationRules.delete(validationRuleId)
```

#### [Create Validation Rule Assignment](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-validation-rules-assignment)

```javascript
client.validationRules.createAssignment(validationRuleId, assignment)
```

#### [Delete Validation Rule Assignment](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-validation-rules-assignment)

```javascript
client.validationRules.deleteAssignment(validationRuleId, assignmentId)
```

#### [List Validation Rules](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-validation-rules)

```javascript
client.validationRules.list()
client.validationRules.list(params)
```

#### [List Validation Rule Assignments](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-validation-rule-assignments)

```javascript
client.validationRules.listAssignments(validationRuleId)
client.validationRules.listAssignments(validationRuleId, params)
```

---

### Events

Methods are provided within `client.events.*` namespace.

- [Create Custom Event](#create-custom-event)

#### [Create Custom Event](http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#the-custom-event-object)

```javascript
client.events.create(eventName, { customer })
client.events.create(eventName, { customer, metadata })
client.events.create(eventName, { customer, referral, metadata })
client.events.create(eventName, { customer, referral, loyalty, metadata })
```

Check [customer object](https://docs.voucherify.io/v1/reference#the-customer-object).

# 💅 Client Side

## <a name="client-side-setup"></a>Setup

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

## <a name="client-side-methods"></a>Methods

Methods are provided within `client.*` namespace.

- [Set Identity](#set-identity)
- [Validate](#validate)
- [Redeem](#redeem)
- [Publish](#publish)
- [List vouchers](#list-vouchers)
- [Create customer](#create-customer)
- [List consents](#list-consents)
- [Update consents](#update-consents)
- [Track custom events](#track-custom-events)

#### Set Identity

```javascript
client.setIdentity(trackingId)
```

#### [Validate](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#vouchers-validate)

```javascript
client.validate(params)
```

#### [Redeem](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#redeem-voucher-client-side)

```javascript
client.redeem(code, payload)
```

#### Publish

```javascript
client.publish(campaignName, payload)
client.publish(campaignName, payload, queryParams)
```

#### [List vouchers](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-vouchers)

```javascript
client.listVouchers()
client.listVouchers(params)
```

#### [Create customer](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-customer)

```javascript
client.createCustomer(customer)
client.createCustomer(customer, enableDoubleOptIn)
```

`enableDoubleOptIn` sets request header to `{X-Voucherify-Double-Opt-In: true}`, which forces user to confirm registration / subscription.

#### [List consents](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-consent-client-side)

```javascript
client.listConsents()
```

#### [Update consents](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-customers-consents-client)

```javascript
client.updateConsents(idOrSourceId, consents)
```

#### [Track custom events](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#track-custom-event-client-side)

```javascript
client.track(eventName, metadata, customer)
```

# <a name="migration"></a>↔️ Migration

Check our [MIGRATION GUIDE](./MIGRATION.md) to learn more about switching to our newest SDK.

# <a name="typescript"></a>🦸 TypeScript

Voucherify JS SDK includes TypeScript declarations for our latest API.

You can find TS example in [examples/with-nodejs-typescript](/examples/with-nodejs).

# <a name="error-handling"></a>😨 Error handling

Voucherify `error` object always has consistent structure, described in details in our [API reference](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#errors).

# <a name="legacy"></a>👴 Legacy Voucherify JS SDKs

Legacy client-side Voucherify JS SDK is available here: [voucherify.js](https://github.com/rspective/voucherify.js).

Legacy server-side Voucherify JS SDK is available here: [voucherify-nodejs-sdk](https://github.com/voucherifyio/voucherify-nodejs-sdk).

# <a name="contributing"></a>🛠️ Contributing

Bug reports and pull requests are welcome through [GitHub Issues](https://github.com/voucherifyio/voucherify-nodejs-sdk/issues).

Read more about how to Contribute to Voucherify JS SDK by visiting [CONTRIBUTING.md](/CONTRIBUTING.md)

# <a name="changelog"></a>🗄️ Changelog

Visit [CHANGELOG](./CHANGELOG.md) to learn more about new changes.

Voucherify React Widget CHANGELOG can be found [here](../react-widget/CHANGELOG.md)
