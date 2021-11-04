# Voucherify JS SDK Migration guide

# 🔖 Table of contents

- [Migration to version 2.x](#voucherify-js-sdk-2)
- [Migration from Voucherify Node.js SDK](#voucherify-node-js)
- [Migration from Voucherify.js](#voucherify-js)

## <a name="voucherify-js-sdk-2"></a>Migration to version 2.x

Core change in version 2.x was using async methods instead of sync versions.
Sync API methods became deprecated, and will be removed in the future.
Therefore breaking changes were introduced in this SDK, so that new API methods are used instead of the old ones.

The following methods return now only the `async_action_id` field, instead of the response with the results:
- Vouchers bulkUpdate (additional breaking change: obligatory 'metadata' field in VouchersBulkUpdateObject)
- Vouchers bulkUpdateMetadata (additional breaking change: obligatory 'metadata' field in VouchersBulkUpdateMetadata)
- Products bulkUpdate
- Products bulkUpdateMetadata (additional breaking change of the method name)

In order to get the final results, one needs to fetch it using [the API method for getting the async-action result](https://docs.voucherify.io/reference/get-async-actions-1).
Using the SDK method it would look like:
```
voucherify.asyncActions.get(async_action_id)
	.then(response => {
		console.log('Status: ', response.status);
		if (result.status === "DONE") {
			console.log('Result: ', response.result);
		}
	})
```

<b>Additionally</b>, there is a breaking change in getSku method params.
New API method is used, where ID of the product is no longer required.

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
