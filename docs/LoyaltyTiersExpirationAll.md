# Voucherify.LoyaltyTiersExpirationAll

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qualificationType** | **String** | Tier qualification.     &#x60;BALANCE&#x60;: Points balance is based on the customer&#39;s current points balance. Customers qualify for the tier if their points balance is in the points range of the tier.   &#x60;POINTS_IN_PERIOD&#x60;: A customer qualifies for the tier only if the sum of the accumulated points in a **defined time interval** reaches the tier threshold. | [optional] 
**qualificationPeriod** | **String** | Customers can qualify for the tier if they collected enough points in a given time period. So, in addition to the customer having to reach a points range, they also need to have collected the points within a set time period.      | **Period** | **Definition** | |:---|:---| | **Calendar Month** | Points collected in one calendar month&lt;br /&gt;January, February, March, etc. | | **Calendar Quarter** | Points collected in the quarter&lt;br /&gt;- January - March&lt;br /&gt;- April - June&lt;br /&gt;- July - September&lt;br /&gt;- October - December | | **Calendar Half-year** | Points collected in the half-year&lt;br /&gt;- January - June&lt;br /&gt;- July - December | | **Calendar Year** | Points collected in one calendar year&lt;br /&gt;January - December | | [optional] 
**startDate** | [**LoyaltyTiersExpirationAllStartDate**](LoyaltyTiersExpirationAllStartDate.md) |  | [optional] 
**expirationDate** | [**LoyaltyTiersExpirationAllExpirationDate**](LoyaltyTiersExpirationAllExpirationDate.md) |  | [optional] 



## Enum: QualificationTypeEnum


* `BALANCE` (value: `"BALANCE"`)

* `POINTS_IN_PERIOD` (value: `"POINTS_IN_PERIOD"`)





## Enum: QualificationPeriodEnum


* `MONTH` (value: `"MONTH"`)

* `QUARTER` (value: `"QUARTER"`)

* `HALF_YEAR` (value: `"HALF_YEAR"`)

* `YEAR` (value: `"YEAR"`)




