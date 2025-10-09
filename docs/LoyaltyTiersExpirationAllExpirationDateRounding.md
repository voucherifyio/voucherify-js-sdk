# Voucherify.LoyaltyTiersExpirationAllExpirationDateRounding

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | This mechanism describes a custom rounding for the expiration date. | [optional] 
**strategy** | **String** | This mechanism describes a rounding strategy for the expiration date. | [optional] 
**unit** | **String** | Defines the type of unit of time in which the rounding period is counted. | [optional] [default to &#39;MONTH&#39;]
**value** | **Number** | Value for the unit of time that the rounding applies to. Units for this parameter are defined by the &#x60;rounding.unit&#x60; parameter.     - &#x60;0&#x60;: January - &#x60;1&#x60;: February - &#x60;2&#x60;: March - &#x60;3&#x60;: April - &#x60;4&#x60;: May - &#x60;5&#x60;: June - &#x60;6&#x60;: July - &#x60;7&#x60;: August - &#x60;8&#x60;: September - &#x60;9&#x60;: October - &#x60;10&#x60;: November - &#x60;11&#x60;: December | [optional] 



## Enum: TypeEnum


* `MONTH` (value: `"MONTH"`)

* `QUARTER` (value: `"QUARTER"`)

* `HALF_YEAR` (value: `"HALF_YEAR"`)

* `YEAR` (value: `"YEAR"`)

* `CUSTOM` (value: `"CUSTOM"`)





## Enum: StrategyEnum


* `START` (value: `"START"`)

* `END` (value: `"END"`)





## Enum: UnitEnum


* `MONTH` (value: `"MONTH"`)




