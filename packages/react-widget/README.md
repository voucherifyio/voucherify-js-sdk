<p align="center" >
  <img src="https://vf-asset.s3-eu-west-1.amazonaws.com/voucherify-js-sdk/logo_react.png" />
</p>

<h3 align="center">Official <a href="https://www.voucherify.io">Voucherify</a> React Widget</h3>

<p>
  <a href="#"><img src="https://github.com/voucherifyio/voucherify-js-sdk/workflows/Release/badge.svg?branch=main" alt="Build Status"/></a>
  <a href="#"><img src="https://img.shields.io/npm/v/@voucherify/react-widget?label=React%20widget" alt="React Widget NPM Version"/></a>
  <a href="#"><img src="https://img.shields.io/npm/dm/@voucherify/react-widget?label=React%20widget%20downloads" alt="React Widget NPM Downloads"/></a>
</p>
<hr/>

<p align="center">
<b><a href="#documentation">Documentation</a></b>
|
<b><a href="#installation">Installation and requirements</a></b>
|
<b><a href="#tracking">Tracking</a></b>
|
<b><a href="#typescript">Typescript</a></b>
|
<b><a href="#error-handling">Error handling</a></b>
|
<b><a href="#contributing">Contributing</a></b>
|
<b><a href="#alternatives">Alternatives - iframe</a></b>
|
<b><a href="#changelog">Changelog</a></b>
</p>

<p align="center">
Widgets:
<a href="#validate">Validate</a>
|
<a href="#redeem">Redeem</a>
|
<a href="#publish">Publish</a>
|
<a href="#subscribe">Subscribe</a>
</p>

Voucherify React Widget contains several client-side Voucherify methods, which are useful in integrating your promotion logic straight to your e-commerce store.

Voucherify React Widget uses Voucherify JS SDK which is fully consistent with restful API Voucherify provides and has fully integrated TypeScript support. It also combines together our previously maintained [Voucherify Node.js SDK](https://github.com/voucherifyio/voucherify-nodejs-sdk) and [Voucherify.js](https://github.com/rspective/voucherify.js/).

Learn more about Voucherify by visiting [our site](https://www.voucherify.io).

# <a name="documentation"></a>📝 Documentation

You will find detailed description and example responses at our [official documentation](https://docs.voucherify.io/reference). Most method headers point to more detailed descriptions of arguments you can use.

You can also use our detailed documentation provided by our package [here](https://voucherifyio.github.io/voucherify-js-sdk/).

📚 Want to learn more? Visit our [official site](https://www.voucherify.io) or our [Success Portal](https://success.voucherify.io).

👽 Having troubles? Check our [Help center](https://support.voucherify.io/).

🧪 Looking for promotion ideas? Check our [Cookbook](https://cookbook.voucherify.io/) to get an inspiration.

# <a name="installation"></a>⚙️ Installation and requirements

React Widgets require `React` and `React-DOM` version at least `17.0.0`

Local installation:

```sh
npm install @voucherify/react-widget --save
```

CDN installation:

```html
<head>
	<!-- Attach Voucherify React Widget styles in the head of your document --->

	<link
		type="text/css"
		rel="stylesheet"
		href="https://unpkg.com/@voucherify/react-widget/dist/voucherify.css"
	/>
</head>

<body>
	<!-- Attach Voucherify React Widget script in the bottom of your document --->

	<script
		type="text/javascript"
		src="https://unpkg.com/@voucherify/sdk/dist/voucherifysdk.umd.production.min.js"
		crossorigin
	></script>
</body>
```

Then, [login](https://app.voucherify.io/#/login) to your Voucherify Dashboard and get your API keys from [Configuration](https://app.voucherify.io/#/app/core/projects/current/general) and allow client requests from your domain.

If you want to use Redeem or Publish Widget, remember to allow client-side redemption and publication.

Each widget requires `clientApplicationId` and `clientSecretKey` to be passed as type of `string`.

# <a name="tracking"></a>📍 Tracking

We are tracking users by a tracking_id. For that we are setting up an identity for the user during widget initialization:

```javascript
<VoucherifyValidate
	clientApplicationId="39f0d4d7-ca5b-4e49-bd5b-730a4d9dce99"
	clientSecretKey="9ec904dc-7cfe-457e-89ca-e54e5aae1d1b"
	trackingId="gustav@purpleson.com"
/>
```

or

This method will generate a tracking_id on the server side unless you specify it on your own using `client.setIdentity` method. In both cases you will receive it in the validation response.

# <a name="widgets"></a>🤖 Widgets

## Validate

```javascript
import * as React from 'react'

import * as ReactDOM from 'react-dom'

import '@voucherify/react-widget/dist/voucherify.css'
import { VoucherifyValidate } from '@voucherify/react-widget'

const App = () => {
	const onValidatedResponse = response => {
		console.log('Do something with response: ', response)
	}

	const onErrorResponse = error => {
		console.log('Do something with error: ', error)
	}

	return (
		<VoucherifyValidate
			clientApplicationId="39f0d4d7-ca5b-4e49-bd5b-730a4d9dce99"
			clientSecretKey="9ec904dc-7cfe-457e-89ca-e54e5aae1d1b"
			textPlaceholder="e.g. Testing7fjWdr"
			trackingId="gustav@purpleson.com"
			amount
			onValidated={onValidatedResponse}
			onError={onErrorResponse}
		/>
	)
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
```

Additional props for Validate Voucherify React Widget

| Prop                  | Type       | Description                                                                                                 |
| --------------------- | ---------- | ----------------------------------------------------------------------------------------------------------- |
| classInvalid          | `string`   | CSS class applied to the input when entered code is invalid                                                 |
| classInvalidAnimation | `string`   | CSS class describing animation of the input field when entered code is invalid                              |
| classValid            | `string`   | CSS class applied to the input when entered code is valid                                                   |
| classValidAnimation   | `string`   | CSS class describing animation of the input field when entered code is valid                                |
| logoSrc               | `string`   | source of the image appearing in the circle at the top                                                      |
| logoAlt               | `string`   | alt message of the image appearing in the circle at the top                                                 |
| onValidated           | `function` | a callback function invoked when the entered code is valid, it takes the validation response as a parameter |
| onError               | `function` | a callback function invoked when there is an error                                                          |
| amount                | `boolean`  | flag enables the amount input field                                                                         |
| textPlaceholder       | `string`   | text displayed as a placeholder in the code input field                                                     |
| amountPlaceholder     | `string`   | text displayed as a placeholder in the amount input field (`amount: true` is required)                      |
| textValidate          | `string`   | a text displayed on the button (default: "Validate")                                                        |

## Redeem

```javascript
import * as React from 'react'

import * as ReactDOM from 'react-dom'

import '@voucherify/react-widget/dist/voucherify.css'
import { VoucherifyRedeem } from '@voucherify/react-widget'

const App = () => {
	const onRedeemResponse = response => {
		console.log('Do something with response: ', response)
	}

	const onErrorResponse = error => {
		console.log('Do something with error: ', error)
	}

	return (
		<VoucherifyRedeem
			clientApplicationId="39f0d4d7-ca5b-4e49-bd5b-730a4d9dce99"
			clientSecretKey="9ec904dc-7cfe-457e-89ca-e54e5aae1d1b"
			trackingId="gustav@purpleson.com"
			textPlaceholder="e.g. Testing7fjWdr"
			amount
			onRedeem={onRedeemResponse}
			onError={onErrorResponse}
		/>
	)
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
```

Additional props for Redeem Voucherify React Widget

| Prop                  | Type       | Description                                                                                                 |
| --------------------- | ---------- | ----------------------------------------------------------------------------------------------------------- |
| classInvalid          | `string`   | CSS class applied to the input when entered code is invalid                                                 |
| classInvalidAnimation | `string`   | CSS class describing animation of the input field when entered code is invalid                              |
| classValid            | `string`   | CSS class applied to the input when entered code is valid                                                   |
| classValidAnimation   | `string`   | CSS class describing animation of the input field when entered code is valid                                |
| logoSrc               | `string`   | source of the image appearing in the circle at the top                                                      |
| logoAlt               | `string`   | alt message of the image appearing in the circle at the top                                                 |
| onRedeemed            | `function` | a callback function invoked when the entered code is valid, it takes the redemption response as a parameter |
| onError               | `function` | a callback function invoked when there is an error                                                          |
| amount                | `boolean`  | flag enables the amount input field                                                                         |
| textPlaceholder       | `string`   | text displayed as a placeholder in the code input field                                                     |
| amountPlaceholder     | `string`   | text displayed as a placeholder in the amount input field (`amount: true` is required)                      |
| textRedeem            | `string`   | a text displayed on the button (default: "Redeem")                                                          |

## Publish

```javascript
import * as React from 'react'

import * as ReactDOM from 'react-dom'

import '@voucherify/react-widget/dist/voucherify.css'
import { VoucherifyPublish } from '@voucherify/react-widget'

const App = () => {
	const onPublishedResponse = response => {
		console.log('Do something with response: ', response)
	}

	const onErrorResponse = error => {
		console.log('Do something with error: ', error)
	}

	return (
		<VoucherifyPublish
			clientApplicationId="39f0d4d7-ca5b-4e49-bd5b-730a4d9dce99"
			clientSecretKey="9ec904dc-7cfe-457e-89ca-e54e5aae1d1b"
			trackingId="gustav@purpleson.com"
			textPublish="Get your voucher!"
			onPublished={onPublishedResponse}
			onError={onErrorResponse}
			campaignName="Test Campaign"
			customerFields={[
				{ name: 'name', required: true },
				{ name: 'email', required: false },
			]}
		/>
	)
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
```

Additional props for Publish Voucherify React Widget

| Prop                          | Type       | Description                                                                                                 |
| ----------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------- |
| classInvalid                  | `string`   | CSS class applied to the input when entered data is invalid                                                 |
| classInvalidAnimation         | `string`   | CSS class describing animation of the input field when entered data is invalid                              |
| classValid                    | `string`   | CSS class applied to the input when entered data is valid                                                   |
| classValidAnimation           | `string`   | CSS class describing animation of the input field when entered data is valid                                |
| logoSrc                       | `string`   | source of the image appearing in the circle at the top                                                      |
| logoAlt                       | `string`   | alt message of the image appearing in the circle at the top                                                 |
| onPublished                   | `function` | a callback function invoked after the voucher publication, it takes the publication response as a parameter |
| onError                       | `function` | a callback function invoked when there is an error                                                          |
| campaignName                  | `string`   | `required field` Name of the campaign to which voucher will be published                                    |
| customerFields                | `array`    | array containing [customerFields objects](#customerFields-object)                                           |
| customerNamePlaceholder       | `string`   | Placeholder for name input field                                                                            |
| customerEmailPlaceholder      | `string`   | Placeholder for email input field                                                                           |
| customerPhonePlaceholder      | `string`   | Placeholder for phone input field                                                                           |
| customerLine1Placeholder      | `string`   | Placeholder for name input field                                                                            |
| customerLine2Placeholder      | `string`   | Placeholder for address line 1 input field                                                                  |
| customerPostalCodePlaceholder | `string`   | Placeholder for address line 2 input field                                                                  |
| customerCityPlaceholder       | `string`   | Placeholder for address city input field                                                                    |
| customerStatePlaceholder      | `string`   | Placeholder for address state input field                                                                   |
| customerCountryPlaceholder    | `string`   | Placeholder for address country input field                                                                 |
| textPublish                   | `string`   | a text displayed on the button (default: "Get voucher")                                                     |

<a name="#customerFields-object"></a>customerFields object

| Key      | Type      | Value                                                                                   |
| -------- | --------- | --------------------------------------------------------------------------------------- |
| name     | `string`  | 'name', 'email', 'phone', 'line_1', 'line_2', 'city', 'postal_code', 'state', 'country' |
| required | `boolean` |

## Subscribe

```javascript
import * as React from 'react'

import * as ReactDOM from 'react-dom'

import '@voucherify/react-widget/dist/voucherify.css'
import { VoucherifySubscribe } from '@voucherify/react-widget'

const App = () => {
	const onSubscribedResponse = response => {
		console.log('Do something with response: ', response)
	}

	const onErrorResponse = error => {
		console.log('Do something with error: ', error)
	}

	return (
		<VoucherifySubscribe
			clientApplicationId="39f0d4d7-ca5b-4e49-bd5b-730a4d9dce99"
			clientSecretKey="9ec904dc-7cfe-457e-89ca-e54e5aae1d1b"
			trackingId="gustav@purpleson.com"
			textSubscribe="Subscribe now!"
			onSubscribed={onSubscribedResponse}
			onError={onErrorResponse}
			consents={[{ id: 'cnst_Dfzhg69KrRPGHffXK9EwUaOL', required: true }, { id: 'cnst_KIcC6Gmff1HxGPR3Y0V3x8Lr' }]}
			customerFields={[
				{ name: 'name', required: true },
				{ name: 'email', required: false },
			]}
		/>
	)
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
```

Additional props for Subscribe Voucherify React Widget

| Prop                  | Type       | Description                                                                                                          |
| --------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------- |
| classInvalid          | `string`   | CSS class applied to the input when entered data is invalid                                                          |
| classInvalidAnimation | `string`   | CSS class describing animation of the input field when entered data is invalid                                       |
| classValid            | `string`   | CSS class applied to the input when entered data is valid                                                            |
| classValidAnimation   | `string`   | CSS class describing animation of the input field when entered data is valid                                         |
| logoSrc               | `string`   | source of the image appearing in the circle at the top                                                               |
| logoAlt               | `string`   | alt message of the image appearing in the circle at the top                                                          |
| onSubscribed          | `function` | a callback function invoked after the successful subscription, it takes the updated consents response as a parameter |
| onError               | `function` | a callback function invoked when there is an error                                                                   |
| enableDoubleOptIn     | `boolean`  | require customer to confirm subscription by email                                                                    |
| customerFields        | `array`    | array containing [customerFields subscribe objects](#customerFields-object-subscribe)                                |
| emailPlaceholder      | `string`   | a placeholder text to displayed on required 'email' field                                                            |
| consents              | `array`    | array containing [consents objects](#consents-object)                                                                |
| textSubscribe         | `string`   | aa text displayed on the button (default: "Subscribe")                                                               |
| textSubscribeSuccess  | `string`   | a text displayed after successful subscription (default: "Thank you for subscribing")                                |

<a name="#customerFields-object-subscribe"></a>customerFields subscribe object

| Key         | Type      | Value                                                                          |
| ----------- | --------- | ------------------------------------------------------------------------------ |
| name        | `string`  | 'name', 'phone', 'line_1', 'line_2', 'city', 'postal_code', 'state', 'country' |
| required    | `boolean` |
| placeholder | `string   |

<a name="#consents-object"></a>consents object

| Key      | Type      |
| -------- | --------- |
| id       | `string`  |
| required | `boolean` |

# <a name="typescript"></a>🦸 TypeScript

Voucherify React Widget includes TypeScript declarations.

# <a name="error-handling"></a>😨 Error handling

Voucherify `error` object always has consistent structure, described in details in our [API reference](https://docs.voucherify.io/reference/errors).

# <a name="alternatives"></a>🖼️ Alternatives - iframe

In case you're looking for something plain and simple, you're used to working with iframes and jQuery on your website, and for whatever technical reason the React-based snippet doesn't work for you, then you might want to stick with our legacy [voucherify.js](https://github.com/rspective/voucherify.js) SDK for the time being. In such case, please refer to the [widget section](https://github.com/rspective/voucherify.js#validation-widget) in the documentation.

# <a name="contributing"></a>🛠️ Contributing

Bug reports and pull requests are welcome through [GitHub Issues](https://github.com/voucherifyio/voucherify-nodejs-sdk/issues).

Read more about how to Contribute to Voucherify JS SDK by visiting [CONTRIBUTING.md](/CONTRIBUTING.md)

# <a name="changelog"></a>🗄️ Changelog

Visit [CHANGELOG](./CHANGELOG.md) to learn more about new changes.

Voucherify JS SDK CHANGELOG can be found [here](../sdk/CHANGELOG.md)
