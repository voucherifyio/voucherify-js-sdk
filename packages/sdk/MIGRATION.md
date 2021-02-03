# Voucherify JS SDK Migration guide

## From [Voucherify Node.js SDK](https://github.com/voucherifyio/voucherify-nodejs-sdk)

### Initialization

#### Previously

```javascript
const voucherifyClient = require('voucherify')

const client = voucherifyClient({
	applicationId: 'YOUR-APPLICATION-ID',
	clientSecretKey: 'YOUR-CLIENT-SECRET-KEY',
})
```

#### Currently

```javascript
const { VoucherifyServerSide } = require('@voucherify/sdk')

const client = VoucherifyServerSide({
	applicationId: 'YOUR-APPLICATION-ID',
	secretKey: 'YOUR-SECRET-KEY',
})
```

### Callbacks

#### Previously

```javascript
client.vouchers.get('v1GiJYuuS', (error, result) => {
	if (error) {
		// handle error
		return
	}

	// do the work
})
```

#### Currently

Dropped support for callbacks, use promises instead

### Validate Validation Rules

#### Previously

```javascript
client.validationRules.validate(validationRuleId)
```

#### Currently

Dropped support

## From [Voucherify.js](https://github.com/rspective/voucherify.js/)

### Initialization

#### Previously

```javascript
$(function () {
	Voucherify.initialize('CLIENT-APPLICATION-ID', 'CLIENT-SECRET-KEY')
})
```

#### Currently

```javascript
const { VoucherifyClientSide } = require('@voucherify/sdk')

const client = VoucherifyClientSide({
	clientApplicationId: 'CLIENT-APPLICATION-ID',
	clientSecretKey: 'CLIENT-SECRET-KEY',
})
```

### Callbacks

#### Previously

```javascript
client.validate(params, function callback(response) {})
```

#### Currently

Dropped support for callbacks for all client-side methods, use promises instead

```javascript
client.validate(params).then(console.log).catch(console.log)
```

### List Vouchers

#### Previously

```javascript
Voucherify.listVouchers(filters, function callback(response) {})
```

#### Currently

Dropped support
