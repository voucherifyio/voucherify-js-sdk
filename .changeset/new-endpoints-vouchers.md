---
'@voucherify/sdk': minor
---

**New exported types/interfaces**
- ListGiftCardTransactionsResponse
- ListGiftCardTransactionsType
- ListGiftCardTransactionsTypeDataObject
- ExportGiftCardTransactionsBody
- ExportGiftCardTransactionsResponse
- ExportGiftCardTransactionsParams
- ExportGiftCardTransactionsFields
- ExportGiftCardTransactionsParamsFilters

Added support for following endpoints:

- vouchers
    - GET /vouchers/{code}/transactions (client.vouchers.listGiftCardTransactions(code, query))
    - POST /vouchers/{code}/transactions/export (client.vouchers.exportGiftCardTransactions(code, body))

