<p align="center" >
  <img src="https://vf-asset.s3-eu-west-1.amazonaws.com/voucherify-js-sdk/logo.png" />
</p>

<h3 align="center">Official <a href="https://www.voucherify.io">Voucherify</a> JS SDK</h3>

<p>
  <a href="#"><img src="https://github.com/voucherifyio/voucherify-js-sdk/workflows/Release/badge.svg?branch=main" alt="Build Status"/></a>
  <a href="#"><img src="https://img.shields.io/npm/v/@voucherify/sdk?label=SDK" alt="SDK NPM Version"/></a>
  <a href="#"><img src="https://img.shields.io/npm/dm/@voucherify/sdk?label=SDK%20downloads" alt="SDK NPM Downloads"/></a>
</p>
<hr/>

<p align="center">
<b><a href="#documentation">Documentation</a></b>
|
<b><a href="#installation">Installation</a></b>
|
<b><a href="#snippet">Marketer-ready Voucherify snippet</a></b>
|
<b><a href="#migration">Migration</a></b>
|
<b><a href="#typescript">Typescript</a></b>
|
<b><a href="#error-handling">Error handling</a></b>
|
<b><a href="#contributing">Contributing</a></b>
|
<b><a href="#changelog">Changelog</a></b>
</p>

<p align="center">
Server side:
<a href="#server-side-setup">Setup</a>
|
<a href="#server-side-methods">Methods</a>
|
<a href="#vouchers">Vouchers</a>
|
<a href="#campaigns">Campaigns</a>
|
<a href="#distributions">Distributions</a>
|
<a href="#validations">Validations</a>
|
<a href="#redemptions">Redemptions</a>
|
<a href="#customers">Customers</a>
|
<a href="#consents">Consents</a>
|
<a href="#orders">Orders</a>
|
<a href="#products">Products</a>
|
<a href="#rewards">Rewards</a>
|
<a href="#loyalties">Loyalties</a>
|
<a href="#segments">Segments</a>
|
<a href="#validation-rules">Validation Rules</a>
|
<a href="#promotions">Promotions</a>
|
<a href="#events">Events</a>
|
<a href="#async-actions">Async Actions</a>
|
<a href="#metadata-schemas">Metadata Schemas</a>
|
<a href="#api-limits-handler">Api Limits Handler</a>
</p>

<p align="center">
Client side:
<a href="#client-side-setup">Setup</a>
|
<a href="#client-side-methods">Methods</a>
</p>

Voucherify JS SDK is a JavaScript SDK which is fully consistent with restful API Voucherify provides and has fully integrated TypeScript support. It also combines together our previously maintained [Voucherify Node.js SDK](https://github.com/voucherifyio/voucherify-nodejs-sdk) and [Voucherify.js](https://github.com/rspective/voucherify.js/).

Learn more about Voucherify by visiting [our site](https://www.voucherify.io).

# <a name="documentation"></a>📝 Documentation

You will find detailed description and example responses at our [official documentation](https://docs.voucherify.io/reference). Most method headers point to more detailed descriptions of arguments you can use.

You can also use our detailed documentation provided by our package [here](https://voucherifyio.github.io/voucherify-js-sdk/).

📚 Want to learn more? Visit our [official site](https://www.voucherify.io) or our [Success Portal](https://success.voucherify.io).

👽 Having troubles? Check our [Help center](https://support.voucherify.io/).

🧪 Looking for promotion ideas? Check our [Cookbook](https://cookbook.voucherify.io/) to get an inspiration.

# <a name="installation"></a>⚙️ Installation

Local installation:

```sh
npm install @voucherify/sdk --save
```

CDN installation:

```html
<script
	type="text/javascript"
	src="https://unpkg.com/@voucherify/sdk/dist/voucherifysdk.umd.production.min.js"
	crossorigin
></script>
```

Then, [login](https://app.voucherify.io/#/login) to your Voucherify Dashboard and get your API keys from [Configuration](https://app.voucherify.io/#/app/core/projects/current/general).

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
	customHeaders: { "MY_CUSTOM_HEADER": "my_value" }, // optional
	timeoutMs: 10000 // optional
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
- [Import Vouchers using CSV](#import-vouchers-using-csv)
- [List Voucher Transactions](#list-voucher-transactions)
- [Export Voucher Transactions](#export-voucher-transactions)

#### [Create Voucher](https://docs.voucherify.io/reference/create-voucher)

```javascript
client.vouchers.create(voucher)
```

Check [voucher object](https://docs.voucherify.io/reference/the-voucher-object).

#### [Get Voucher](https://docs.voucherify.io/reference/vouchers-get)

```javascript
client.vouchers.get(code)
```

#### [Update Voucher](https://docs.voucherify.io/reference/update-voucher)

```javascript
client.vouchers.update(voucher)
```

#### [Delete Voucher](https://docs.voucherify.io/reference/delete-voucher)

```javascript
client.vouchers.delete(code)
client.vouchers.delete(code, params)
```

#### [List Vouchers](https://docs.voucherify.io/reference/list-vouchers)

```javascript
client.vouchers.list()
client.vouchers.list(params)
```

#### [Enable Voucher](https://docs.voucherify.io/reference/enable-voucher)

```javascript
client.vouchers.enable(code)
```

#### [Disable Voucher](https://docs.voucherify.io/reference/disable-voucher)

```javascript
client.vouchers.disable(code)
```

#### [Add Gift Voucher Balance](https://docs.voucherify.io/reference/add-gift-voucher-balance)

```javascript
client.vouchers.balance.create(code, params)
```

#### [Import Vouchers](https://docs.voucherify.io/reference/import-vouchers-1)

```javascript
client.vouchers.import(vouchers)
```

#### [Examine Vouchers Qualification](https://docs.voucherify.io/reference/push-qualification-request)

```javascript
client.vouchers.qualifications.examine(body, params)
```

#### [Update Vouchers Metadata in bulk](https://docs.voucherify.io/reference/update-vouchers-metadata-in-bulk)

```javascript
client.vouchers.bulkUpdateMetadata(params)
```

#### [Update Vouchers in bulk](https://docs.voucherify.io/reference/update-vouchers-in-bulk)

```javascript
client.vouchers.bulkUpdate(vouchers)
```

#### [Release Validation Session](https://docs.voucherify.io/reference/release-validation-session)

```javascript
client.vouchers.releaseValidationSession(code, sessionKey)
```

#### [Import Vouchers using CSV](https://docs.voucherify.io/reference/import-vouchers-using-csv)

```javascript
client.vouchers.importCSV(filePath)
```

#### [List Voucher Transactions](https://docs.voucherify.io/reference/list-voucher-transactions)

```javascript
client.vouchers.listTransactions(code, query)
```

#### [Export Voucher Transactions](https://docs.voucherify.io/reference/export-voucher-transactions)

```javascript
client.vouchers.exportTransactions(code, body)
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
- [Import Vouchers using CSV](#import-vouchers-using-csv)
- [Examine Campaigns Qualification](#examine-campaigns-qualification)
- [Enable campaign](#enable-campaign)
- [Disable campaign](#disable-campaign)

#### [Create Campaign](https://docs.voucherify.io/reference/create-campaign)

```javascript
client.campaigns.create(campaign)
```

#### [Update Campaign](https://docs.voucherify.io/reference/update-campaign)

```javascript
client.campaigns.update(campaignId, campaign)
client.campaigns.update(campaignName, campaign)
```

Method will update only fields passed to `campaign` argument.

#### [Get Campaign](https://docs.voucherify.io/reference/get-campaign)

```javascript
client.campaigns.get(name)
```

#### [Delete Campaign](https://docs.voucherify.io/reference/delete-campaign)

```javascript
client.campaigns.delete(campaignName)
client.campaigns.delete(campaignName, params)
```

#### [Add Voucher to Campaign](https://docs.voucherify.io/reference/add-voucher-to-campaign)

```javascript
client.campaigns.addVoucher(campaignName)
client.campaigns.addVoucher(campaignName, body)
client.campaigns.addVoucher(campaignName, body, params)
```

#### [Add certain Voucher to Campaign](https://docs.voucherify.io/reference/add-voucher-with-certain-code-to-campaign)

```javascript
client.campaigns.addCertainVoucher(campaignName, code, codeParams)
client.campaigns.addCertainVoucher(campaignName, code)
```

#### [Import Vouchers to Campaign](https://docs.voucherify.io/reference/import-vouchers)

```javascript
client.campaigns.importVouchers(campaignName, vouchers)
```

#### [List Campaigns](https://docs.voucherify.io/reference/list-campaigns)

```javascript
client.campaigns.list()
client.campaigns.list(params)
```

#### [Import Vouchers to Campaign by CSV](https://docs.voucherify.io/reference/import-vouchers-to-campaign-using-csv)

```javascript
client.campaigns.importVouchersCSV(campaignId, filePath)
```

#### [Enable campaign](https://docs.voucherify.io/reference/enable-campaign)

```javascript
client.campaigns.enable(campaignId)
```

#### [Disable campaign](https://docs.voucherify.io/reference/disable-campaign)

```javascript
client.campaigns.disable(campaignId)
```

#### [Examine Campaigns Qualification](https://docs.voucherify.io/reference/create-qualification-request)

```javascript
client.campaigns.qualifications.examine(body)
client.campaigns.qualifications.examine(body, params)
```

---

### Distributions

Methods are provided within `client.distributions.*` namespace.

- [Create Export](#create-export)
- [List Exports](#list-exports)
- [Get Export](#get-export)
- [Delete Export](#delete-export)
- [List publications](#list-publications)
- [Create publication](#create-publication)

#### [Create Export](https://docs.voucherify.io/reference/create-export)

```javascript
client.distributions.exports.create(exportObject)
```

Check [the export object](https://docs.voucherify.io/v1/reference/the-export-object).

#### [List Exports](https://docs.voucherify.io/reference/list-exports)

```javascript
client.distributions.exports.list()
```

#### [Get Export](https://docs.voucherify.io/reference/get-export)

```javascript
client.distributions.exports.get(exportId)
```

#### [Delete Export](https://docs.voucherify.io/reference/delete-export)

```javascript
client.distributions.exports.delete(exportId)
```

#### [List publications](https://docs.voucherify.io/reference/list-publications)

```javascript
client.distributions.publications.list()
client.distributions.publications.list(params)
```

#### [Create publication](https://docs.voucherify.io/reference/create-publication)

```javascript
client.distributions.publications.create(params)
```

### Categories

Methods are provided within `client.categories.*` namespace.

- [Create Category](#create-category)
- [Update Category](#update-category)
- [Get Category](#get-category)
- [Delete Category](#delete-category)
- [List Categories](#list-categories)

#### [Create Category](https://docs.voucherify.io/reference/create-category)

```javascript
client.categories.create(params)
```

#### [Update Category](https://docs.voucherify.io/reference/update-category)

```javascript
client.categories.update(categoryId, params)
```

#### [Get Category](https://docs.voucherify.io/reference/get-category)

```javascript
client.categories.get(categoryId)
```

#### [Delete Category](https://docs.voucherify.io/reference/delete-category)

```javascript
client.categories.delete(categoryId)
```

#### [List Categories](https://docs.voucherify.io/reference/list-categories)

```javascript
client.categories.list()
```

---

### Qualifications

Methods are provided within `client.qualifications.*` or `client.promotions.*` namespace.

- [Check Eligibility](#Check-Eligibility)

#### [Check Eligibility](https://docs.voucherify.io/reference/check-eligibility)

```javascript
client.qualifications.checkEligibility(body)
```

---

### Validations

Methods are provided within `client.validations.*` or `client.promotions.*` namespace.

- [Validate Voucher](#validate-voucher)
- [Validate Promotion Campaign](#validate-promotion-campaign)
- [Validate Stackable](#validate-stackable)

#### [Validate Voucher](https://docs.voucherify.io/reference/validate-voucher)

```javascript
client.validations.validateVoucher(code)
client.validations.validateVoucher(code, params)
```

Other possibility

```javascript
client.validations.validate(code)
client.validations.validate(code, params)
```

#### [Validate Promotion Campaign](https://docs.voucherify.io/reference/validate-promotions-1)

```javascript
client.promotions.validate(params)
```

Other possibility

```javascript
client.validations.validate(params)
```

#### [Validate Stackable](https://docs.voucherify.io/reference/validate-stacked-discounts-1)
```javascript
client.validations.validateStackable(params)
```

---

### Redemptions

Methods are provided within `client.redemptions.*` namespace.

- [Redeem Voucher](#redeem-voucher)
- [Redeem Stackable](#redeem-stackable)
- [Get Redemption](#get-redemption)
- [Redeem Promotion's Tier](#redeem-promotions-tier)
- [Redeem Loyalty Card](#redeem-loyalty-card)
- [List Redemptions](#list-redemptions)
- [Get Voucher's Redemptions](#get-vouchers-redemptions)
- [Rollback Redemption](#rollback-redemption)
- [Rollback Stackable](#rollback-stackable)

#### [Redeem Voucher](https://docs.voucherify.io/reference/redeem-voucher)

```javascript
client.redemptions.redeem(code)
client.redemptions.redeem(code, params)
```

#### [Redeem Stackable](https://docs.voucherify.io/reference/redeem-stacked-discounts)
```javascript
client.redemptions.redeemStackable(params)
```

#### [Get Redemption](https://docs.voucherify.io/reference/get-redemption)

```javascript
client.redemptions.get(redemptionId)
```

#### [List Redemptions](https://docs.voucherify.io/reference/list-redemptions)

```javascript
client.redemptions.list()
client.redemptions.list(params)
```

#### [Get Voucher's Redemptions](https://docs.voucherify.io/reference/vouchers-redemptions)

```javascript
client.redemptions.getForVoucher(code)
```

#### [Rollback Redemption](https://docs.voucherify.io/reference/rollback-redemption)

```javascript
client.redemptions.rollback(redemptionId)
client.redemptions.rollback(redemptionId, params)
```

#### [Rollback Stackable](https://docs.voucherify.io/reference/rollback-stackable-redemptions)
```javascript
client.redemptions.rollbackStackable(parentRedemptionId)
client.redemptions.rollbackStackable(parentRedemptionId, params, queryParams)
```

Check [redemption rollback object](https://docs.voucherify.io/reference/the-redemption-rollback-object).

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

#### [Create Promotion Campaign](https://docs.voucherify.io/reference/create-promotion-campaign)

```javascript
client.promotions.create(promotionCampaign)
```

Check [promotion campaign object](https://docs.voucherify.io/reference/create-promotion-campaign).

#### [List Promotion's Tiers](https://docs.voucherify.io/reference/get-promotions)

```javascript
client.promotions.tiers.list(promotionCampaignId)
```

Check [promotion's tier object](https://docs.voucherify.io/reference/the-promotion-object)

#### [Get Promotion Tier](https://docs.voucherify.io/reference/get-promotion-tier)

```javascript
client.promotions.tiers.get(tierId)
```

Check [promotion's tier object](https://docs.voucherify.io/reference/the-promotion-object)

#### [List All Promotion Tiers](https://docs.voucherify.io/reference/list-promotion-tiers)

```javascript
client.promotions.tiers.listAll()
client.promotions.tiers.listAll(params)
```

#### [Add Promotion Tier to Campaign](https://docs.voucherify.io/reference/add-promotion-tier-to-campaign)

```javascript
client.promotions.tiers.create(promotionId, params)
```

#### [Redeem Promotion](https://docs.voucherify.io/reference/redeem-promotion)

```javascript
client.promotions.tiers.redeem(promotionsTierId, params)
```

#### [Update Promotion Tier](https://docs.voucherify.io/reference/update-promotion)

```javascript
client.promotions.tiers.update(promotionsTier)
```

#### [Delete Promotion Tier](https://docs.voucherify.io/reference/delete-promotion)

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
- [Delete Customer Permanently](#delete-customer-permanently)
- [List Customers](#list-customers)
- [Update Customer's Consents](#update-customers-consents)
- [List Customer's Activities](#list-customers-activities)
- [Update Customers in bulk](#update-customers-in-bulk)
- [Update Customers' Metadata in bulk](#update-customers-metadata-in-bulk)
- [Import and Update Customers using CSV](#import-and-update-customers-using-csv)
- [List Redeemables](#list-redeemables)

#### [Create Customer](https://docs.voucherify.io/reference/create-customer)

```javascript
client.customers.create(customer)
```

Check [customer object](https://docs.voucherify.io/reference/the-customer-object).

#### [Get Customer](https://docs.voucherify.io/reference/get-customer)

```javascript
client.customers.get(customerId)
```

#### [Update Customer](https://docs.voucherify.io/reference/update-customer)

```javascript
client.customers.update(customer)
```

`customer` object must contain `id` or `source_id`.

#### [Delete Customer](https://docs.voucherify.io/reference/delete-customer)

```javascript
client.customers.delete(customerId)
```

#### [Delete Customer Permanently](https://docs.voucherify.io/reference/delete-customer-permanently)

```javascript
client.customers.deletePermanently(customerId)
```

#### [List Customers](https://docs.voucherify.io/reference/list-customers)

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

#### [Update Customer's Consents](https://docs.voucherify.io/reference/update-customers-consents)

```javascript
client.customers.updateConsents(customer, consents)
```

#### [List Customers Activities](https://docs.voucherify.io/reference/get-customer-activities)

```javascript
client.customers.listActivities(customerId)
client.customers.listActivities(customerId, params)
```

#### [Import and Update Customers using CSV](https://docs.voucherify.io/reference/import-customers-using-csv)

```javascript
client.customers.importCSV(filePath)
```

#### [Update Customers in bulk](https://docs.voucherify.io/reference/update-customers-in-bulk)

```javascript
client.customers.updateInBulk(customers)
```

#### [Update Customers' Metadata in bulk](https://docs.voucherify.io/reference/update-customers-metadata-in-bulk)

```javascript
client.customers.updateMetadataInBulk(sourceIdsAndMetadata)
```

#### [List Redeemables](https://docs.voucherify.io/reference/list-customer-redeemables)

```javascript
client.customers.listRedeemables(id, params)
```

---

### Consents

Methods are provided within `client.consents.*` namespace.

- [Get Consents](#get-consents)

You can [update Customer's consents](#update-customers-consents) in `client.customer.*` namespace.

#### [Get Consents](https://docs.voucherify.io/reference/get-consents)

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
- [Import Orders](#import-orders)

#### [Create Order](https://docs.voucherify.io/reference/create-order)

```javascript
client.orders.create(order)
```

Check [the order object](https://docs.voucherify.io/reference/the-order-object).

#### [Get Order](https://docs.voucherify.io/reference/get-order)

```javascript
client.orders.get(orderId)
```

#### [Update Order](https://docs.voucherify.io/reference/update-order)

```javascript
client.orders.update(order)
```

`order` object must contain `id` or `source_id`.

#### [List Orders](https://docs.voucherify.io/reference/list-orders)

```javascript
client.orders.list()
client.orders.list(params)
```

#### [Import Orders](https://docs.voucherify.io/reference/import-orders)
```javascript
client.orders.import(orders)
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
- [Import SKUs using CSV](#import-skus-using-csv)
- [Import Products using CSV](#import-products-using-csv)

#### [Create Product](https://docs.voucherify.io/reference/create-product)

```javascript
client.products.create(product)
```

Check [product object](https://docs.voucherify.io/reference/the-product-object).

#### [Get Product](https://docs.voucherify.io/reference/get-product)

```javascript
client.products.get(productId)
```

#### [Update Product](https://docs.voucherify.io/reference/update-product)

```javascript
client.products.update(product)
```

#### [Delete Product](<(https://docs.voucherify.io/reference/delete-product)>)

```javascript
client.products.delete(productId)
client.products.delete(productId, { force: true })
```

#### [Update Products in Bulk](https://docs.voucherify.io/reference/update-products-in-bulk)

```javascript
client.products.bulkUpdate(products)
```

#### [List Products](https://docs.voucherify.io/reference/list-products)

```javascript
client.products.list()
client.products.list(params)
```

#### [Create SKU](https://docs.voucherify.io/reference/create-skus)

```javascript
client.products.createSku(productId, sku)
```

Check [SKU object](https://docs.voucherify.io/reference/the-sku-object).

#### [Get SKU](https://docs.voucherify.io/reference/get-skus)

```javascript
client.products.getSku(productId, skuId)
```

#### [Update SKU](https://docs.voucherify.io/reference/update-skus)

```javascript
client.products.updateSku(productId, sku)
```

#### [Delete SKU](https://docs.voucherify.io/reference/delete-skus)

```javascript
client.products.deleteSku(productId, skuId)
client.products.deleteSku(productId, skuId, { force: true })
```

#### [List all product SKUs](https://docs.voucherify.io/reference/list-skus)

```javascript
client.products.listSkus(productId)
```

#### [Import SKUs using CSV](https://docs.voucherify.io/reference/import-skus-using-csv)

```javascript
client.products.importSkusCSV(filePath)
```

#### [Import Products using CSV](https://docs.voucherify.io/reference/import-products-using-csv)

```javascript
client.products.importCSV(filePath)
```

### Product Collections

Methods are provided within `client.productCollections.*` namespace.

- [List Product Collections](#list-product-collections)
- [Create Product Collections](#create-product-collection)
- [Get Product Collection](#get-product-collection)
- [Delete Product Collection](#delete-product-collection)
- [List Products in Collection](#list-products-in-collection)

#### [List Product Collections](https://docs.voucherify.io/reference/list-product-collections)

```javascript
client.productCollections.list()
```

#### [Create Product Collection](https://docs.voucherify.io/reference/create-product-collection)

```javascript
client.productCollections.create(productCollection)
```

#### [Get Product Collection](https://docs.voucherify.io/reference/get-product-collection)

```javascript
client.productCollections.get(productCollectionId)
```

#### [Delete Product Collection](https://docs.voucherify.io/reference/delete-product-collection)

```javascript
client.productCollections.delete(productCollectionId)
```


#### [List Products in Collection](https://docs.voucherify.io/reference/list-products-in-collection)

```javascript
client.productCollections.listProducts(productCollectionId)
```

---

### Rewards

Methods are provided within `client.rewards.*` namespace.

- [Create Reward](#create-reward)
- [Get Reward](#get-reward)
- [Update Reward](#update-reward)
- [Delete Reward](#delete-reward)
- [List Rewards](#list-rewards)
- [Get Assignment](#get-reward-assignment)
- [Create Reward Assignment](#create-reward-assignment)
- [Update Reward Assignment](#update-reward-assignment)
- [Delete Reward Assignment](#delete-reward-assignment)
- [List Reward Assignments](#list-reward-assignments)

#### [Create Reward](https://docs.voucherify.io/reference/create-reward)

```javascript
client.rewards.create(reward)
```

Check [reward object](https://docs.voucherify.io/reference/the-reward-object).

#### [Get Reward](https://docs.voucherify.io/reference/get-reward)

```javascript
client.rewards.get(rewardId)
```

#### [Update Reward](https://docs.voucherify.io/reference/update-reward)

```javascript
client.rewards.update(reward)
```

#### [Delete Reward](https://docs.voucherify.io/reference/delete-reward)

```javascript
client.rewards.delete(rewardId)
```

#### [List Rewards](https://docs.voucherify.io/reference/list-rewards)

```javascript
client.rewards.list()
client.rewards.list(params)
```

#### [Get Reward Assignment](https://docs.voucherify.io/reference/get-reward-assignment)

```javascript
client.rewards.getAssignment(rewardId, assignment)
```

#### [Create Reward Assignment](https://docs.voucherify.io/reference/create-reward-assignment)

```javascript
client.rewards.createAssignment(rewardId, assignment)
```

Check [reward assignment object](https://docs.voucherify.io/reference/reward-assignment-object).

#### [Update Reward Assignment](https://docs.voucherify.io/reference/update-reward-assignment)

```javascript
client.rewards.updateAssignment(rewardId, assignment)
```

#### [Delete Reward Assignment](https://docs.voucherify.io/reference/delete-reward-assignment)

```javascript
client.rewards.deleteAssignment(rewardId, assignmentId)
```

#### [List Reward Assignments](https://docs.voucherify.io/reference/list-reward-assignments)

```javascript
client.rewards.listAssignments(rewardId)
client.rewards.listAssignments(rewardId, params)
```

---

### Loyalties

Methods are provided within `client.loyalties.*` namespace.

- [Create Loyalty Program](#create-loyalty-program)
- [Get Loyalty Program](#get-loyalty-program)
- [Update Loyalty Program](#update-loyalty-program)
- [Delete Loyalty Program](#delete-loyalty-program)
- [List Loyalty Programs](#list-loyalty-programs)
- [Create Loyalty Program Reward Assignment](#create-loyalty-program-reward-assignment)
- [Update Loyalty Program Reward Assignment](#update-loyalty-program-reward-assignment)
- [Delete Loyalty Program Reward Assignment](#delete-loyalty-program-reward-assignment)
- [Get Loyalty Program Reward Assignment](#get-loyalty-program-reward-assignment)
- [List Loyalty Program Reward Assignments](#list-loyalty-program-reward-assignments)
- [Create Loyalty Program Earning Rules](#create-loyalty-program-earning-rules)
- [Update Loyalty Program Earning Rule](#update-loyalty-program-earning-rule)
- [Delete Loyalty Program Earning Rule](#delete-loyalty-program-earning-rule)
- [Get Loyalty Program Earning Rule](#get-loyalty-program-earning-rule)
- [Enable Loyalty Program Earning Rule](#enable-loyalty-program-earning-rule)
- [Disable Loyalty Program Earning Rule](#disable-loyalty-program-earning-rule)
- [List Loyalty Program Earning Rules](#list-loyalty-program-earning-rules)
- [Create Loyalty Program Member](#create-loyalty-program-member)
- [Get Loyalty Program Member](#get-loyalty-program-member)
- [List Loyalty Program Members](#list-loyalty-program-members)
- [Get Loyalty Program Member Activities](#get-loyalty-program-member-activities)
- [Add Or Remove Loyalty Card Balance](#add-or-remove-loyalty-card-balance)
- [[Deprecated] Add Loyalty Card Balance](#add-loyalty-card-balance)
- [Transfer Loyalty Points](#transfer-loyalty-points)
- [Get Loyalty Points Expiration](#get-loyalty-points-expiration)
- [Redeem Loyalty Card](#redeem-loyalty-card)
- [List Loyalty Tier Rewards](#list-loyalty-tier-rewards)
- [List Loyalty Card Transactions](#list-loyalty-card-transactions)
- [[Export Loyalty Card Transactions](#export-loyalty-card-transactions)
- [Get Reward Assignment](#get-reward-assignment)
- [Get Reward Details](#get-reward-details)
- [List Loyalty Tiers](#list-loyalty-tiers)
- [Get Loyalty Tier](#get-loyalty-tier)
- [Create Loyalty Tiers](#create-loyalty-tiers)
- [List Loyalty Tier Earning Rules](#list-loyalty-tier-earning-rules)
- [List Member Loyalty Tiers](#list-member-loyalty-tiers)

#### [Create Loyalty Program](https://docs.voucherify.io/reference/create-loyalty-program)

```javascript
client.loyalties.create(campaign)
```

#### [Get Loyalty Program](https://docs.voucherify.io/reference/get-loyalty-program)

```javascript
client.loyalties.get(campaignId)
```

#### [Update Loyalty Program](https://docs.voucherify.io/reference/update-loyalty-program)

```javascript
client.loyalties.update(campaign)
```

#### [Delete Loyalty Program](https://docs.voucherify.io/reference/delete-loyalty-program)

```javascript
client.loyalties.delete(campaignId)
```

#### [List Loyalty Programs](https://docs.voucherify.io/reference/list-loyalty-programs)

```javascript
client.loyalties.list()
client.loyalties.list(params)
```

#### [Create Loyalty Program Reward Assignment](https://docs.voucherify.io/reference/create-reward-assignment-1)

```javascript
client.loyalties.createRewardAssignments(campaignId, assignment)
```

#### [Update Loyalty Program Reward Assignment](https://docs.voucherify.io/reference/update-reward-assignment-1)

```javascript
client.loyalties.updateRewardAssignment(campaignId, assignment)
```

#### [Delete Loyalty Program Reward Assignment](https://docs.voucherify.io/reference/delete-reward-assignment-1)

```javascript
client.loyalties.deleteRewardAssignment(campaignId, assignmentId)
```

#### [Get Loyalty Program Reward Assignment](https://docs.voucherify.io/reference/get-reward-assignment-2)

```javascript
client.loyalties.getRewardAssignment(campaignId, assignmentId)
```


#### [List Loyalty Program Reward Assignments](https://docs.voucherify.io/reference/list-reward-assignments-1)

```javascript
client.loyalties.listRewardAssignments(campaignId)
client.loyalties.listRewardAssignments(campaignId, params)
```

#### [Create Loyalty Program Earning Rules](https://docs.voucherify.io/reference/create-earning-rule)

```javascript
client.loyalties.createEarningRule(campaignId, earningRules)
```

#### [Update Loyalty Program Earning Rule](https://docs.voucherify.io/reference/update-earning-rule)

```javascript
client.loyalties.updateEarningRule(campaignId, earningRule)
```

#### [Delete Loyalty Program Earning Rule](https://docs.voucherify.io/reference/delete-earning-rule)

```javascript
client.loyalties.deleteEarningRule(campaignId, earningRuleId)
```

#### [Get Loyalty Program Earning Rule](https://docs.voucherify.io/reference/get-earning-rule)

```javascript
client.loyalties.getEarningRule(campaignId, earningRuleId)
```

#### [Enable Loyalty Program Earning Rule](https://docs.voucherify.io/reference/enable-earning-rule)

```javascript
client.loyalties.enableEarningRule(campaignId, earningRuleId)
```

#### [Disable Loyalty Program Earning Rule](https://docs.voucherify.io/reference/disable-earning-rule)

```javascript
client.loyalties.disableEarningRule(campaignId, earningRuleId)
```

#### [List Loyalty Program Earning Rules](https://docs.voucherify.io/reference/list-earning-rules)

```javascript
client.loyalties.listEarningRules(campaignId)
client.loyalties.listEarningRules(campaignId, params)
```

#### [Create Loyalty Program Member](https://docs.voucherify.io/reference/create-member)

```javascript
client.loyalties.createMember(campaignId, member)
```

#### [Get Loyalty Program Member](https://docs.voucherify.io/reference/get-member)

Depending on the parameters, this method sends requests to [v1/loyalties/members/{memberId}](https://docs.voucherify.io/reference/get-member) or [v1/loyalties/{campaignId}/members/{memberId}](https://docs.voucherify.io/reference/get-member-1) API endpoint

```javascript
client.loyalties.getMember(campaignId, memberId)
```

#### [List Loyalty Program Members](https://docs.voucherify.io/reference/list-members)

```javascript
client.loyalties.listMembers(campaignId)
client.loyalties.listMembers(campaignId, params)
```

#### [Get Loyalty Program Member Activities](https://docs.voucherify.io/reference#get-member-activities)

Depending on the parameters, this method sends requests to [v1/loyalties/members/{memberId}/activities](https://docs.voucherify.io/reference/get-member-activities) or [v1/loyalties/{campaignId}/members/{memberId}/activities](https://docs.voucherify.io/reference/get-member-activities-1) API endpoint

```javascript
client.loyalties.getMemberActivities(campaignId, memberId)
```

`memberId` referrers to Loyalty Card code.


#### [List Member Rewards](https://docs.voucherify.io/reference/list-member-rewards)

```javascript
client.loyalties.listMemberRewards(memberId, params)
```

`memberId` referrers to Loyalty Card code.

---

#### [Add Or Remove Loyalty Card Balance](https://docs.voucherify.io/reference/add-remove-loyalty-card-balance)

Depending on the parameters, this method sends requests to [v1/loyalties/members/{memberId}/balance](https://docs.voucherify.io/reference/add-remove-loyalty-card-balance) or [v1/loyalties/{campaignId}/members/{memberId}/balance](https://docs.voucherify.io/reference/add-remove-loyalty-card-balance-1) API endpoint

```javascript
client.loyalties.addOrRemoveCardBalance(memberId, balance, campaignId)
```

`memberId` referrers to Loyalty Card code.

#### [Add Loyalty Card Balance](https://docs.voucherify.io/reference/add-loyalty-card-balance-1)

```javascript
client.loyalties.addPoints(campaignId, memberId, balance)
```

`memberId` referrers to Loyalty Card code.

#### [Transfer Loyalty Points](https://docs.voucherify.io/reference/transfer-points)

```javascript
client.loyalties.transferPoints(campaignId, memberId, transferLoyaltyPoints)
```

`memberId` referrers to Loyalty Card code.

---

#### [Get Loyalty Points Expiration](https://docs.voucherify.io/reference/get-points-expiration)

```javascript
client.loyalties.getPointsExpiration(campaignId, memberId)
```

`memberId` referrers to Loyalty Card code.

---

#### [Redeem Loyalty Card]

```javascript
client.loyalties.redeemReward(campaignId, memberId, params)
```

`memberId` referrers to Loyalty Card code.

When redeeming reward with type `COIN` you need to provide additional `order` object in the `params`

#### [List Loyalty Tier Rewards](https://docs.voucherify.io/reference/list-loyalty-tier-rewards)

```javascript
client.loyalties.listLoyaltyTierRewards(campaignId, tierId)
```

---

#### [List Loyalty Card Transactions](https://docs.voucherify.io/reference/list-loyalty-card-transactions)

Depending on the parameters, this method sends requests to [v1/loyalties/members/{memberId}/transactions](https://docs.voucherify.io/reference/list-loyalty-card-transactions) or [v1/loyalties/{campaignId}/members/{memberId}/transactions](https://docs.voucherify.io/reference/list-loyalty-card-transactions-1) API endpoint

```javascript
client.loyalties.listCardTransactions(memberId, campaignId, params)
```

`memberId` referrers to Loyalty Card code.

---

#### [Export Loyalty Card Transactions](https://docs.voucherify.io/reference/export-loyalty-card-transactions)

Depending on the parameters, this method sends requests to [v1/loyalties/members/{memberId}/transactions/export](https://docs.voucherify.io/reference/export-loyalty-card-transactions) or [v1/loyalties/{campaignId}/members/{memberId}/transactions/export](https://docs.voucherify.io/reference/export-loyalty-card-transactions-1) API endpoint

```javascript
client.loyalties.exportCardTransactions(memberId, campaignId, params)
```

`memberId` referrers to Loyalty Card code.

---

#### [Get Reward Assignment](https://docs.voucherify.io/reference/get-reward-assignment-1)

```javascript
client.loyalties.getRewardAssignment(campaignId, assignmentId)
```

---

#### [Get Reward Details](https://docs.voucherify.io/reference/get-reward-details)

```javascript
client.loyalties.getRewardDetails(campaignId, assignmentId)
```

---

#### [List Loyalty Tiers](https://docs.voucherify.io/reference/list-loyalty-tiers)

```javascript
client.loyalties.listTiers(campaignId, params)
client.loyalties.listTiers(campaignId)
```

---

#### [Get Loyalty Tier](https://docs.voucherify.io/reference/get-loyalty-tier)

```javascript
client.loyalties.getTier(campaignId, tierId)
```

---

#### [Create Loyalty Tiers](https://docs.voucherify.io/reference/create-loyalty-tiers)

```javascript
client.loyalties.createTiers(campaignId, tiers)
```

---

#### [List Loyalty Tier Earning Rules](https://docs.voucherify.io/reference/list-loyalty-tier-earning-rules)

```javascript
client.loyalties.listLoyaltyTierEarningRules(campaignId, tierId, params)
client.loyalties.listLoyaltyTierEarningRules(campaignId, tierId)
```

---

#### [List Member Loyalty Tiers](https://docs.voucherify.io/reference/get-member-loyalty-tier)

```javascript
client.loyalties.listMemberLoyaltyTiers(memberId)
```

`memberId` referrers to Loyalty Card code.

---

### Segments

Methods are provided within `client.segments.*` namespace.

- [Create Segment](#create-segment)
- [Get Segment](#get-segment)
- [Delete Segment](#delete-segment)

#### [Create Segment](https://docs.voucherify.io/reference/create-segment)

```javascript
client.segments.create(segment)
```

Check [the segment object](https://docs.voucherify.io/reference/the-segment-object).

#### [Get Segment](https://docs.voucherify.io/reference/get-segment)

```javascript
client.segments.get(segmentId)
```

#### [Delete Segment](https://docs.voucherify.io/reference/delete-segment)

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
- [List Validation Rule Assignments](#list-validation-rule-assignments)
- [List Validation Rules Assignments](#list-validation-rules-assignments)

#### [Create Validation Rule](https://docs.voucherify.io/reference/create-validation-rules)

```javascript
client.validationRules.create(validationRule)
```

Check [validation rule object](https://docs.voucherify.io/reference/the-validation-rule-object).

#### [Get Validation Rule](https://docs.voucherify.io/reference/get-validation-rules)

```javascript
client.validationRules.get(validationRuleId)
```

#### [Update Validation Rule](https://docs.voucherify.io/reference/update-validation-rules)

```javascript
client.validationRules.update(validationRule)
```

#### [Delete Validation Rule](https://docs.voucherify.io/reference/delete-validation-rules)

```javascript
client.validationRules.delete(validationRuleId)
```

#### [Create Validation Rule Assignment](https://docs.voucherify.io/reference/create-validation-rules-assignment)

```javascript
client.validationRules.createAssignment(validationRuleId, assignment)
```

#### [Delete Validation Rule Assignment](https://docs.voucherify.io/reference/delete-validation-rules-assignment)

```javascript
client.validationRules.deleteAssignment(validationRuleId, assignmentId)
```

#### [List Validation Rules](https://docs.voucherify.io/reference/list-validation-rules)

```javascript
client.validationRules.list()
client.validationRules.list(params)
```

#### [List Validation Rule Assignments](https://docs.voucherify.io/reference/list-validation-rule-assignments)

```javascript
client.validationRules.listAssignments(validationRuleId)
client.validationRules.listAssignments(validationRuleId, params)
```

#### [List Validation Rules Assignments](https://docs.voucherify.io/reference/list-validation-rules-assignments)

```javascript
client.validationRules.listRulesAssignments(validationRuleId)
client.validationRules.listRulesAssignments(validationRuleId, params)
```

---

### Events

Methods are provided within `client.events.*` namespace.

- [Create Custom Event](#create-custom-event)

#### [Create Custom Event](https://docs.voucherify.io/reference/the-custom-event-object)

```javascript
client.events.create(eventName, { customer })
client.events.create(eventName, { customer, metadata })
client.events.create(eventName, { customer, referral, metadata })
client.events.create(eventName, { customer, referral, loyalty, metadata })
```

Check [customer object](https://docs.voucherify.io/v1/reference#the-customer-object).


### Async Actions

Methods are provided within `client.asyncActions.*` namespace.

- [Get Async Action](#get-async-action)
- [List Async Actions](#list-async-actions)

#### [Get Async Action](https://docs.voucherify.io/reference/get-async-actions-1)
```javascript
client.asyncActions.get(asyncActionId)
```

#### [List Async Actions](https://docs.voucherify.io/reference/list-async-actions)
```javascript
client.asyncActions.list()
client.asyncActions.list(params)
```

--- 

### Metadata Schemas

Methods are provided within `client.metadataSchemas.*` namespace.

- [List Metadata Schemas](#list-metadata-schemas)
- [Get Metadata Schema by schema name](#get-metadata-schema-by-schema-name)

#### List Metadata Schemas
```javascript
client.metadataSchemas.list()
```

#### Get Metadata Schema by schema name
```javascript
client.metadataSchemas.get(schemaName)
```

### Api Limits Handler

Methods are provided within `client.apiLimitsHandler.*` namespace.

- [Are Limits Available](#are-limits-available)
- [Get Rate Limit](#get-rate-limit)
- [Get Rate Limit Remaining](#get-rate-limit-remaining)
- [Get Retry After](#get-retry-after)

#### Are Limits Available
```javascript
client.apiLimitsHandler.areLimitsAvailable()
```

This method should be called each time beforehand [Get Rate Limit](#get-rate-limit) or [Get Rate Limit Remaining](#get-rate-limit-remaining) or [Get Retry After](#get-retry-after) to ensure limit data are available.

#### Get Rate Limit
```javascript
if(client.apiLimitsHandler.areLimitsAvailable()){
  client.apiLimitsHandler.getRateLimit()
}
```

#### Get Rate Limit Remaining
```javascript
if(client.apiLimitsHandler.areLimitsAvailable()){
  client.apiLimitsHandler.getRateLimitRemaining()
}
```

#### Get Retry After
```javascript
if(client.apiLimitsHandler.areLimitsAvailable()){
  client.apiLimitsHandler.getRetryAfter()
}
```

---

# 💅 Client Side

## <a name="client-side-setup"></a>Setup

```javascript
const { VoucherifyClientSide } = require('@voucherify/sdk')

const client = VoucherifyClientSide({
	clientApplicationId: 'YOUR-APPLICATION-ID',
	clientSecretKey: 'YOUR-CLIENT-SECRET-KEY',
	apiUrl: 'https://<region>.api.voucherify.io', // optional
	origin: 'example.com', // read more below
	customHeaders: { "MY_CUSTOM_HEADER": "my_value" } // optional
	timeoutMs: 10000 // optional
})
```

The `origin` property is required in Node.js, but when using in client-side environment (in browser) this option will be ignored.

We are tracking users which are validating vouchers with those who consume them by a tracking_id. For that we are setting up an identity for the user.

```javascript
client.setIdentity('gustav@purpleson.com')
```

## <a name="client-side-methods"></a>Methods

Methods are provided within `client.*` namespace.

- [Set Identity](#set-identity)
- [Validate](#validate)
- [Validate Stackable](#validate-stackable-client-side)
- [Redeem](#redeem)
- [Redeem Stackable](#redeem-stackable-client-side)
- [Publish](#publish)
- [List vouchers](#list-vouchers)
- [Create customer](#create-customer)
- [List consents](#list-consents)
- [Update consents](#update-consents)
- [Track custom events](#track-custom-events)
- [Qualifications](#Qualifications)

#### Set Identity

```javascript
client.setIdentity(trackingId)
```

#### [Validate](https://docs.voucherify.io/reference/vouchers-validate)

```javascript
client.validate(params)
```

#### [Validate Stackable Client Side](https://docs.voucherify.io/reference/validate-stackable-discounts-client-side)

```javascript
client.validateStackable(params)
```

#### [Redeem](https://docs.voucherify.io/reference/redeem-voucher-client-side)

```javascript
client.redeem(code, payload)
```

#### [Redeem Stackable Client Side](https://docs.voucherify.io/reference/redeem-stackable-discounts-client-side)

```javascript
client.redeemStackable(params)
```

#### Publish

```javascript
client.publish(campaignName, payload)
client.publish(campaignName, payload, queryParams)
```

#### [List vouchers](https://docs.voucherify.io/reference/list-vouchers)

```javascript
client.listVouchers()
client.listVouchers(params)
```

#### [Create customer](https://docs.voucherify.io/reference/create-customer)

```javascript
client.createCustomer(customer)
client.createCustomer(customer, enableDoubleOptIn)
```

`enableDoubleOptIn` sets request header to `{X-Voucherify-Double-Opt-In: true}`, which forces user to confirm registration / subscription.

#### [List consents](https://docs.voucherify.io/reference/get-consent-client-side)

```javascript
client.listConsents()
```

#### [Update consents](https://docs.voucherify.io/reference/update-customers-consents-client)

```javascript
client.updateConsents(idOrSourceId, consents)
```

#### [Track custom events](https://docs.voucherify.io/reference/track-custom-event-client-side)

```javascript
client.track(eventName, metadata, customer)
```

#### [Qualifications](https://docs.voucherify.io/reference/check-eligibility-client-side)

```javascript
client.qualifications(body)
```

# <a name="snippet"></a>🏎 Marketer-ready Voucherify snippet

Go [here](./examples/sdk/with-html) for more HTML-based examples

```
<body>
  <div id="voucher-validate"></div>

  <link rel="stylesheet" type="text/css" href="https://unpkg.com/@voucherify/react-widget@0.0.5/dist/voucherify.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qs/6.5.1/qs.min.js" crossorigin></script>
  <script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js" crossorigin></script>
  <script type="text/javascript" src="https://unpkg.com/@voucherify/sdk@0.0.5/dist/voucherifysdk.umd.production.min.js" crossorigin></script>
  <script type="text/javascript" src="https://unpkg.com/@voucherify/react-widget@0.0.5/dist/voucherifywidget.umd.production.min.js" crossorigin></script>

  <script type="text/javascript">
    window.ReactDOM.render(
      window.React.createElement(VoucherifyWidget.VoucherifyValidate, {
        clientApplicationId: 'CLIENT-APPLICATION-ID',
        clientSecretKey: 'CLIENT-SECRET-KEY',
        amount: true,
      }),
      document.querySelector('#voucher-validate'),
    )
  </script>
</body>
```

# <a name="migration"></a>↔️ Migration

Check our [MIGRATION GUIDE](./MIGRATION.md) to learn more about switching to our newest SDK.

# <a name="typescript"></a>🦸 TypeScript

Voucherify JS SDK includes TypeScript declarations for our latest API. We recommend using TypeScript Version 4.2.

You can find TS example in [examples/with-nodejs-typescript](/examples/with-nodejs).

# <a name="error-handling"></a>😨 Error handling

Voucherify `error` object always has consistent structure, described in details in our [API reference](https://docs.voucherify.io/reference/errors).

If you wish to see code examples for server-side error handling, you can check it here:
- [Error handling for Node.JS example without TypeScript](../../examples/sdk/with-nodejs/server-error-handling.js)
- [Error handling for Node.JS example with TypeScript](../../examples/sdk//with-nodejs-typescript/server-error-handling.ts)

Structure / typing for error returned from Voucherify API can be seen here:
- [VoucherifyError class](src/VoucherifyError.ts)

If you wish to receive original `AxiosError` when `VoucherifyError` is thrown then you need to explicitly set `exposeErrorCause` property to `true` when creating instance of `VouchierfyClient`, ie:

```
const voucherify = VoucherifyServerSide({
	applicationId: 'APPLICATION-ID',
	secretKey: 'SECRET-KEY',
	exposeErrorCause: true
})
```

Original `AxiosError` will be available under `cause` property of `VoucherifyError`

# <a name="legacy"></a>👴 Legacy Voucherify JS SDKs

Legacy client-side Voucherify JS SDK is available here: [voucherify.js](https://github.com/rspective/voucherify.js).

Legacy server-side Voucherify JS SDK is available here: [voucherify-nodejs-sdk](https://github.com/voucherifyio/voucherify-nodejs-sdk).

# <a name="contributing"></a>🛠️ Contributing

Bug reports and pull requests are welcome through [GitHub Issues](https://github.com/voucherifyio/voucherify-nodejs-sdk/issues).

Read more about how to Contribute to Voucherify JS SDK by visiting [CONTRIBUTING.md](/CONTRIBUTING.md)

# <a name="changelog"></a>🗄️ Changelog

Visit [CHANGELOG](./CHANGELOG.md) to learn more about new changes.

Voucherify React Widget CHANGELOG can be found [here](../react-widget/CHANGELOG.md)
