---
'@voucherify/sdk': patch
---

Override SimpleCustomer type to make 'id' property not required in 'RedemptionsRedeemBody' interface since passing ID of customer when redeeming is not required by design
