---
'@voucherify/sdk': minor
---

Added support for following endpoints:
- GET /vouchers/{code}/transactions (client.vouchers.listTransactions(code, query))
- POST /vouchers/{code}/transactions/export (client.vouchers.exportTransactions(code, body))
- GET /validation-rules-assignments (client.client.validationRules.listRulesAssignments(validationRuleId))

**New exported types/interfaces**
Domain types:
- GiftCardTransaction
- GiftCardTransactionBase
  GiftCardTransactionDetails
- GiftCardTransactionRedemptionDetails
- GiftCardTransactionRefundDetails
- GiftCardTransactionAdditionDetails
- GiftCardTransactionRemovalDetails
- VoucherTransaction
- VoucherTransactionsExportFields
- ValidationRulesAssignment

0-level types:
- VouchersListTransactionsRequestQuery
- VouchersListTransactionsResponseBody 
- VouchersExportTransactionsRequestBody
- VouchersExportTransactionsResponseBody
- ValidationRulesListRulesAssignmentsRequestQuery
- ValidationRulesListRulesAssignmentsResponseBody

**Other changes**
- Use `VouchersExportTransactionsRequestBody` as `LoyaltiesExportCardTransactionsRequestBody` (these types are identical, both related to the export of loyalty card transactions)
- Use `VouchersExportTransactionsResponseBody` as `LoyaltiesExportCardTransactionsResponseBody` ((these types are identical, both related to the export of loyalty card transactions))

