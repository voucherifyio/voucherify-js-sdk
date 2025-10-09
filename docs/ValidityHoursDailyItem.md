# Voucherify.ValidityHoursDailyItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startTime** | **String** | Defines the starting hour of validity in the HH:mm format. The resource is *inactive before* this time. | [optional] 
**daysOfWeek** | **[Number]** | Integer array corresponding to the particular days of the week in which the resource is valid.  - &#x60;0&#x60; Sunday - &#x60;1&#x60; Monday - &#x60;2&#x60; Tuesday - &#x60;3&#x60;  Wednesday - &#x60;4&#x60; Thursday - &#x60;5&#x60; Friday - &#x60;6&#x60; Saturday | [optional] 
**expirationTime** | **String** | Defines the ending hour of validity in the HH:mm format. The resource is *inactive after* this time. | [optional] 



## Enum: [DaysOfWeekEnum]


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)

* `5` (value: `5`)

* `6` (value: `6`)




