---
'@voucherify/sdk': minor
---

Added support for following endpoints:
- GET /vouchers/{code}/transactions (client.vouchers.listTransactions(code, query))
- POST /vouchers/{code}/transactions/export (client.vouchers.exportTransactions(code, body))

**New exported types/interfaces**
Domain types:
- GiftCardTransaction
- GiftCardTransactionIdentity
- GiftCardTransactionBase
- GiftCardTransactionResponseData
  GiftCardTransactionDetails
- GiftCardTransactionRedemptionDetails
- GiftCardTransactionRefundDetails
- GiftCardTransactionAdditionDetails
- GiftCardTransactionRemovalDetails
- VoucherTransaction
- VoucherTransactionsExport
- VoucherTransactionExportIdentity
- VoucherTransactionExportBase
- VoucherTransactionExportResponseData
- VoucherTransactionsExportFields

0-level types:
- VouchersListTransactionsRequestQuery
- VouchersListTransactionsResponseBody 
- VouchersExportTransactionsRequestBody
- VouchersExportTransactionsResponseBody

**Other changes**
- Use `VouchersExportTransactionsRequestBody` as `LoyaltiesExportCardTransactionsRequestBody` (these types are identical, both related to the export of loyalty card transactions)
- Use `VouchersExportTransactionsResponseBody` as `LoyaltiesExportCardTransactionsResponseBody` ((these types are identical, both related to the export of loyalty card transactions))

