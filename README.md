<p align="center" >
  <img src="https://vf-asset.s3-eu-west-1.amazonaws.com/voucherify-js-sdk/logo.png" />
</p>

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

Learn more about Voucherify by visiting [our site](https://www.voucherify.io).

# <a name="documentation"></a>📝 Documentation

You will find detailed description and example responses at our [official documentation](https://docs.voucherify.io/reference). Most method headers point to more detailed descriptions of arguments you can use.

You can also use our detailed documentation provided by our package [here](https://voucherifyio.github.io/voucherify-js-sdk/).

📚 Want to learn more? Visit our [official site](https://www.voucherify.io) or our [Success Portal](https://success.voucherify.io).

👽 Having troubles? Check our [Help center](https://support.voucherify.io/).

🧪 Looking for promotion ideas? Check our [Cookbook](https://cookbook.voucherify.io/) to get an inspiration.

# <a name="installation"></a>⚙️ Installation

## <a name="sdk"></a> Voucherify JS SDK

Voucherify JS SDK is a JavaScript SDK which is fully consistent with restful API Voucherify provides and has fully integrated TypeScript support. It also combines together our previously maintained [Voucherify Node.js SDK](https://github.com/voucherifyio/voucherify-nodejs-sdk) and [Voucherify.js](https://github.com/rspective/voucherify.js/).

[Go here](/packages/sdk/README.md) to learn more about Voucherify JS SDK installation.

## <a name="widget"></a> Voucherify React Widget

Voucherify React Widget contains several client-side Voucherify methods, which are useful in integrating your promotion logic straight to your e-commerce store.

[Go here](/packages/react-widget/README.md) to learn more about Voucherify React Widget installation.

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

## Alternative way - iframe and jQuery

In case you're looking for something plain and simple, you're used to working with iframes and jQuery on your website, and for whatever technical reason the aforementioned React-based snippet doesn't work for you, then you might want to stick with our legacy [voucherify.js](https://github.com/rspective/voucherify.js) SDK for the time being. In such case, please refer to the [widget section](https://github.com/rspective/voucherify.js#validation-widget) in the documentation.

# <a name="migration"></a>↔️ Migration

Check out [MIGRATION GUIDE](/packages/sdk/MIGRATION.md) to learn more about switching to the newest Voucherify JS SDK.

# <a name="typescript"></a>🦸 TypeScript

Both Voucherify JS SDK and Voucherify React Widget support TypeScript declarations. We recommend using TypeScript Version 4.2.

You can find TS example in [examples/sdk/with-nodejs-typescript](/examples/sdk/with-nodejs-typescript).

# <a name="error-handling"></a>😨 Error handling

Voucherify `error` object always has consistent structure, described in details in our [API reference](https://docs.voucherify.io/reference/errors).

If you wish to see code examples for server-side error handling, you can check it here:
- [Error handling for Node.JS example without TypeScript](/examples/sdk/with-nodejs/server-error-handling.js)
- [Error handling for Node.JS example with TypeScript](/examples/sdk//with-nodejs-typescript/server-error-handling.ts)

Structure / typing for error returned from Voucherify API can be seen here:
- [VoucherifyError class](/packages/sdk/src/VoucherifyError.ts)

If you wish to receive original `AxiosError` when `VoucherifyError` is thrown then you need to explicitly set `exposeAxiosError` property to `true` when creating instance of `VouchierfyClient`, ie:

```
const voucherify = VoucherifyServerSide({
	applicationId: 'APPLICATION-ID',
	secretKey: 'SECRET-KEY',
	exposeAxiosError: true
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

Voucherify React Widget CHANGELOG can be found [here](/packages/react-widget/CHANGELOG.md).

Voucherify JS SDK CHANGELOG can be found [here](/packages/sdk/CHANGELOG.md).
