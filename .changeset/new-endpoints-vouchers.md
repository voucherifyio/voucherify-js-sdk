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

Added support for following endpoints:

- vouchers
    - GET /vouchers/{code}/transactions
    - POST /vouchers/{code}/transactions/export

- New methods
    - client.vouchers.listGiftCardTransactions(code, query)
    - client.vouchers.exportGiftCardTransactions(code, body)
