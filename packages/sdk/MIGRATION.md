# Voucherify JS SDK Migration guide

# 🔖 Table of contents

- [Migration from Voucherify Node.js SDK](#voucherify-node-js)
- [Migration from Voucherify.js](#voucherify-js)

## <a name="voucherify-node-js"></a>Migration from [Voucherify Node.js SDK](https://github.com/voucherifyio/voucherify-nodejs-sdk)

<table>
<thead>
  <tr>
    <th>Case</th>
    <th>Previously</th>
    <th>Currently</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Initialization</td>
    <td>

```javascript
const voucherifyClient = require('voucherify')

const client = voucherifyClient({
	applicationId: 'YOUR-APPLICATION-ID',
	clientSecretKey: 'YOUR-CLIENT-SECRET-KEY',
})
```

</td>
    <td>

```javascript
const { VoucherifyServerSide } = require('@voucherify/sdk')

const client = VoucherifyServerSide({
	applicationId: 'YOUR-APPLICATION-ID',
	secretKey: 'YOUR-SECRET-KEY',
})
```

</td>

  </tr>
  <tr>
    <td>Callbacks</td>
    <td>

```javascript
client.vouchers.get('v1GiJYuuS', (error, result) => {
	if (error) {
		// handle error
		return
	}

	// do the work
})
```

</td>
    <td>
Dropped support for callbacks, use promises instead
    
</td>
  </tr>
  <tr>
    <td>Validate Validation Rules</td>
    <td>

```javascript
client.validationRules.validate(validationRuleId)
```

</td>
    <td>
Dropped support
    
</td>
  </tr>
  <tr>
    <td>Loyalties Redeem Reward</td>
    <td>

```javascript
client.loyalties.redeemReward(campaignId, memberId, reward)
```

</td>
    <td>

Order required

```javascript
client.loyalties.redeemReward(campaignId, memberId, reward, order)
```

</td>
  </tr>
</tbody>
</table>

## <a name="voucherify-js"></a>From [Voucherify.js](https://github.com/rspective/voucherify.js/)

<table>
<thead>
  <tr>
    <th>Case</th>
    <th>Previously</th>
    <th>Currently</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Initialization</td>
    <td>

```javascript
$(function () {
	Voucherify.initialize('CLIENT-APPLICATION-ID', 'CLIENT-SECRET-KEY')
})
```

</td>
    <td>

```javascript
const { VoucherifyClientSide } = require('@voucherify/sdk')

const client = VoucherifyClientSide({
	clientApplicationId: 'CLIENT-APPLICATION-ID',
	clientSecretKey: 'CLIENT-SECRET-KEY',
})
```

</td>

  </tr>
  <tr>
    <td>Initialization - Base URL</td>
    <td>

```javascript
$(function () {
	Voucherify.setBaseUrl('https://<region1>.api.voucherify.io')
})
```

</td>
    <td>

```javascript
const client = VoucherifyClientSide({
	clientApplicationId: 'CLIENT-APPLICATION-ID',
	clientSecretKey: 'CLIENT-SECRET-KEY',
	apiUrl: 'https://<region1>.api.voucherify.io',
})
```

</td>

  </tr>
  <tr>
    <td>Callbacks</td>
    <td>

```javascript
client.validate(params, function callback(response) {})
```

</td>
    <td>
Dropped support for callbacks for all client-side methods, use promises instead

```javascript
client.validate(params).then(console.log).catch(console.log)
```

</td>
  </tr>
  
  
  
</tbody>
</table>
