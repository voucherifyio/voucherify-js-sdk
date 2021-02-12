# Voucherify React Widget

<p>
  <a href="#"><img src="https://github.com/voucherifyio/voucherify-js-sdk/workflows/Release/badge.svg?branch=main" alt="Build Status"/></a>
  <a href="#"><img src="https://github.com/voucherifyio/voucherify-js-sdk/workflows/Lint/badge.svg?branch=main" alt="Lint Status"/></a>
  <a href="#"><img src="https://img.shields.io/npm/v/@voucherify/react-widget?label=React%20widget" alt="React Widget NPM Version"/></a>
  <a href="#"><img src="https://img.shields.io/npm/v/@voucherify/react-widget?label=React%20widget" alt="React Widget NPM Downloads"/></a>
</p>

Voucherify React Widget contains several client-side Voucherify methods, which are useful in integrating your promotion logic straight to your e-commerce store.

Voucherify React Widget uses Voucherify JS SDK which is fully consistent with restful API Voucherify provides and has fully integrated TypeScript support. It also combines together our previously maintained [Voucherify Node.js SDK](https://github.com/voucherifyio/voucherify-nodejs-sdk) and [Voucherify.js](https://github.com/rspective/voucherify.js/).

Learn more about Voucherify by visiting [our site](http://voucherify.io?utm_source=github&utm_medium=sdk&utm_campaign=acq).

# 🔖 Table of contents

- [Documentation](#documentation)
- [Installation](#installation)
- [Widgets](#widgets)
  - [Validate](#validate)
  - [Redeem](#redeem)
  - [Publish](#publish)
- [Typescript](#typescript)
- [Error handling](#error-handling)
- [Contributing](#contributing)
- [Changelog](#changelog)

# <a name="documentation"></a>📝 Documentation

You will find detailed description and example responses at our [official documentation](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq). Most method headers point to more detailed descriptions of arguments you can use.

You can also use our detailed documentation provided by our package [here://voucherifyio.github.io/voucherify-js-sdk/)

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
<head>
	<!-- Attach Voucherify React Widget styles in the head of your document --->

	<link
		type="text/css"
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/rspective/voucherify.js@latest/dist/voucherify.min.css"
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

Then, [login](http://app.voucherify.io/?utm_source=github&utm_medium=sdk&utm_campaign=acq#/login) to your Voucherify Dashboard and get your API keys from [Configuration](https://app.voucherify.io/?utm_source=github&utm_medium=sdk&utm_campaign=acq#/app/core/projects/current/general) and allow client requests from your domain.

If you want to use Redeem or Publish Widget, remember to allow client-side redemption and publication.

Each widget requires `clientApplicationId` and `clientSecretKey` to be passed as type of `string`.

# <a name="widgets"></a>🤖 Widgets

## <a name="validate"></a>Validate

```javascript
import * as React from 'react'

import * as ReactDOM from 'react-dom'

import { VoucherifyValidate } from '@voucherify/react-widgets'

const App = () => {
	const onValidateResponse = response => {
		console.log('Do something with response: ', response)
	}

	const onErrorResponse = error => {
		console.log('Do something with error: ', error)
	}

	return (
		<VoucherifyValidate
			clientApplicationId="011240bf-d5fc-4ef1-9e82-11eb68c43bf5"
			clientSecretKey="9e2230c5-71fb-460a-91c6-fbee64707a20"
			textPlaceholder="e.g. Testing7fjWdr"
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

## <a name="redeem"></a>Redeem

## <a name="publish"></a>Publish

# <a name="typescript"></a>🦸 TypeScript

Voucherify React Widget includes TypeScript declarations.

# <a name="error-handling"></a>😨 Error handling

Voucherify `error` object always has consistent structure, described in details in our [API reference](https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#errors).

# <a name="contributing"></a>🛠️ Contributing

Bug reports and pull requests are welcome through [GitHub Issues](https://github.com/voucherifyio/voucherify-nodejs-sdk/issues).

Read more about how to Contribute to Voucherify JS SDK by visiting [CONTRIBUTING.md](/CONTRIBUTING.md)

# <a name="changelog"></a>🗄️ Changelog

Visit [CHANGELOG](./CHANGELOG.md) to learn more about new changes.

Voucherify JS SDK CHANGELOG can be found [here](../sdk/CHANGELOG.md)
