---
'@voucherify/sdk': patch
'@voucherify/react-widget': patch
---

Version 1.3.0 enabled encoding in RequestController - it was used to fix encoding for both server side and client side SDKs. This introduced issue, as we did not notice that ClientSide get methods were explicitly encoding query params (toQueryParams function). That meant the query params were encoded twice and that lead to issues with characters such as %.