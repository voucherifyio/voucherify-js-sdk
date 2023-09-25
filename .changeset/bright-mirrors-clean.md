---
'@voucherify/sdk': major
---

Added support for following endpoints:
- GET /vouchers/{code}/transactions (client.vouchers.listGiftCardTransactions(code, query))
- POST /vouchers/{code}/transactions/export (client.vouchers.exportGiftCardTransactions(code, body))

**New exported types/interfaces**
- VouchersListGiftCardTransactionsResponseBody
- VouchersListGiftCardTransactionsType
- VouchersListGiftCardTransactionsData
- VouchersExportGiftCardTransactionsRequestBody
- VouchersExportGiftCardTransactionsResponseBody
- VouchersExportGiftCardTransactionsParams
- VouchersExportGiftCardTransactionsFields
- VouchersExportGiftCardTransactionsParamsFilters

