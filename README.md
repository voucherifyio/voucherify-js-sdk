<p align="center" >
  <img src="https://vf-asset.s3-eu-west-1.amazonaws.com/voucherify-js-sdk/logo.png" />
</p>

```diff
- ! THIS IS THE README OF THE MONOREPO ! -
```

### [Go to JS SDK package readme](/packages/sdk/README.md "JS SDK package readme") 
### [Go to React Widget readme](/packages/react-widget/README.md "React widget readme")

------------------

<h3 align="center">Official <a href="https://www.voucherify.io">Voucherify</a> JS SDK and React Widget</h3>

<p>
  <a href="#"><img src="https://github.com/voucherifyio/voucherify-js-sdk/workflows/Release/badge.svg?branch=main" alt="Build Status"/></a>
  <a href="#"><img src="https://img.shields.io/npm/v/@voucherify/sdk?label=SDK" alt="SDK NPM Version"/></a>
  <a href="#"><img src="https://img.shields.io/npm/dm/@voucherify/sdk?label=SDK%20downloads" alt="SDK NPM Downloads"/></a>
  <a href="#"><img src="https://img.shields.io/npm/v/@voucherify/react-widget?label=React%20widget" alt="React Widget NPM Version"/></a>
  <a href="#"><img src="https://img.shields.io/npm/dm/@voucherify/react-widget?label=React%20widget%20downloads" alt="React Widget NPM Downloads"/></a>
</p>
<hr/>

<p align="center">
<b><a href="#documentation">Documentation</a></b>
|
<b><a href="#snippet">Marketer-ready Voucherify snippet</a></b>
|
<b><a href="#migration">Migration</a></b>
|
<b><a href="#typescript">Typescript</a></b>
|
<b><a href="#error-handling">Error handling</a></b>
|
<b><a href="#legacy">Legacy SDKs</a></b>
|
<b><a href="#contributing">Contributing</a></b>
|
<b><a href="#changelog">Changelog</a></b>
</p>

<p align="center">
Packages:
<a href="#sdk">Voucherify JS SDK</a>
|
<a href="#widget">Voucherify React Widget</a>
</p>

Voucherify empowers marketers and developers with flexible building blocks to come up with, implement, and track targeted promotional campaigns.

Visit [Voucherify](https://www.voucherify.io) to learn more.

# <a name="documentation"></a>📝 Documentation

Find detailed description and example responses at [Voucherify developer documentation](https://docs.voucherify.io/reference "Voucherify API documentation"). Most method headers point to more detailed descriptions of arguments you can use.

You can also use the detailed [JS SDK documentation](https://voucherifyio.github.io/voucherify-js-sdk/ "JS SDK documentation").

📚 Want to learn more? Visit [Voucherify official site](https://www.voucherify.io "Voucherify home page") or [Success Portal](https://success.voucherify.io "Voucherify success portal").

👽 Having troubles? Check out [the Help center](https://support.voucherify.io/ "Voucherify support center").

# <a name="installation"></a>⚙️ Installation

## <a name="sdk"></a> Voucherify JS SDK

Voucherify JS SDK is a JavaScript SDK and it is fully consistent with the restful API Voucherify provides and it has a fully integrated TypeScript support. It also combines together the previously maintained [Voucherify Node.js SDK](https://github.com/voucherifyio/voucherify-nodejs-sdk "Deprecated Voucherify Node.js SDK") and [Voucherify.js SDK](https://github.com/rspective/voucherify.js/ "Deprecated Voucherify JS SDK").

Learn more about Voucherify JS SDK [installation](/packages/sdk/README.md#installation "JS SDK installation guide").

## <a name="widget"></a> Voucherify React Widget

Voucherify React Widget contains several client-side Voucherify methods, which are useful in integrating your promotion logic straight to your e-commerce store.

Learn more about Voucherify [React Widget installation](/packages/react-widget/README.md#installation "React Widget installation guide").

# <a name="snippet"></a>🏎 Marketer-ready Voucherify snippet

[More HTML-based examples](./examples/sdk/with-html "HTML-based examples")

```html
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

## Alternative Ways – iframe and jQuery

If you're looking for something plain and simple, you're used to working with iframe and jQuery on your website, and for whatever technical reason the React-based snippet doesn't work for you, you may want to stick with the legacy [voucherify.js](https://github.com/rspective/voucherify.js "Deprecated Voucherify JS SDK") SDK for the time being. In this case, refer to the [widget section](https://github.com/rspective/voucherify.js#validation-widget "Deprecated validation widget documentation") in the documentation.

# <a name="migration"></a>↔️ Migration

Check out the [MIGRATION GUIDE](/packages/sdk/MIGRATION.md "Voucherify migration guide") to learn more about switching to the newest Voucherify JS SDK.

# <a name="typescript"></a>🦸 TypeScript

Both the Voucherify JS SDK and Voucherify React Widget support TypeScript declarations. It's recommended to use TypeScript Version 4.2.

Explore also [Voucherify TS examples](/examples/sdk/with-nodejs-typescript "TypeScript examples").

# <a name="error-handling"></a>😨 Error Handling

A Voucherify `error` object always has a consistent structure, described in details in [the API reference](https://docs.voucherify.io/reference/errors "API error objects").

Check out code examples for server-side error handling:
- [Error handling for Node.JS example without TypeScript](/examples/sdk/with-nodejs/server-error-handling.js "Server error handling without TypeScript")
- [Error handling for Node.JS example with TypeScript](/examples/sdk//with-nodejs-typescript/server-error-handling.ts "Server error handling with TypeScript")

Also, see the structure / typing for error returned from Voucherify API:
- [VoucherifyError class](/packages/sdk/src/VoucherifyError.ts)

If you want to receive an original `AxiosError` when a `VoucherifyError` is thrown, you need to explicitly set the `exposeErrorCause` property to `true` when creating the instance of `VouchierfyClient`:

```javascript
const voucherify = VoucherifyServerSide({
	applicationId: 'APPLICATION-ID',
	secretKey: 'SECRET-KEY',
	exposeErrorCause: true
})
```

The original `AxiosError` will be available under `cause` property of `VoucherifyError`.

# <a name="legacy"></a>👴 Legacy Voucherify JS SDKs

You can always visit legacy Voucherify JS SDKs:
- Client-side Voucherify JS SDK: [voucherify.js](https://github.com/rspective/voucherify.js "Deprecated client-side Voucherify JS SDK").
- Server-side Voucherify JS SDK: [voucherify-nodejs-sdk](https://github.com/voucherifyio/voucherify-nodejs-sdk "Deprecated server-side Voucherify JS SDK").

# <a name="contributing"></a>🛠️ Contributing

Bug reports and pull requests are welcome through [GitHub Issues](https://github.com/voucherifyio/voucherify-js-sdk/issues "Add issue to Voucherify JS SDK").

Read more about how to Contribute to Voucherify JS SDK by visiting [CONTRIBUTING.md](/CONTRIBUTING.md "Learn how to contribute").

# <a name="changelog"></a>🗄️ Changelog

[Voucherify JS SDK CHANGELOG](/packages/sdk/CHANGELOG.md "Voucherify JS SDK Changelog").

[Voucherify React Widget CHANGELOG](/packages/react-widget/CHANGELOG.md "Voucherify React Widget CHANGELOG").

# <a name="tests"></a>🧪 SDK Tests

**SDK** tests are located in [a test folder](/packages/sdk/test/) and use **real** calls to Voucherify API via `client.ts`.
```javascript
// add this to your test
import { voucherifyClient as client } from './client'
```

In order to run **SDK tests**, you need to copy `packages/sdk/.env.example` to `packages/sdk/.env` and fill the file with your credentials.

In order **to run** SDK tests, go to the `packages/sdk` folder and run `yarn test`.