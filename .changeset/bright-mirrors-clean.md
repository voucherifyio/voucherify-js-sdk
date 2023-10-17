---
'@voucherify/sdk': major
---

Added support for following endpoints:
- GET /vouchers/{code}/transactions (client.vouchers.listTransactions(code, query))
- POST /vouchers/{code}/transactions/export (client.vouchers.exportGiftCardTransactions(code, body))

**New exported types/interfaces**
- VouchersListTransactionsRequestQuery
- VouchersListGiftCardTransactionsResponseBody
- VouchersListGiftCardTransactionsType
- VouchersListGiftCardTransactionsData
- VouchersExportGiftCardTransactionsRequestBody
- VouchersExportGiftCardTransactionsResponseBody
- VouchersExportGiftCardTransactionsParams
- VouchersExportGiftCardTransactionsFields
- VouchersExportGiftCardTransactionsParamsFilters

