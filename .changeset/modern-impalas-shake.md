---
'@voucherify/sdk': patch
---

Add optional timeoutMs option to VoucherifyServerSide and VoucherifyClientSide classes defiing timeout in miliseconds after which Axios is going to abort the request. By default this is equal to 0 meaining that there is no timeout beside default Voucherify's Load balancer timeout which is set to 3 minutes
