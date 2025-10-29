# Voucherify.Session

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | The session unique ID assigned by Voucherify or your own unique session ID. Sending an existing ID will result in overwriting an existing session. If no session key is provided, then a new ID will be generated. | [optional] 
**type** | **String** | This parameter is required to establish a new session. | [optional] [default to &#39;LOCK&#39;]
**ttl** | **Number** | Value for the period of time that the session is active. Units for this parameter are defined by the session.ttl_unit parameter. | [optional] 
**ttlUnit** | **String** | Defines the type of unit in which the session time is counted. | [optional] 



## Enum: TypeEnum


* `LOCK` (value: `"LOCK"`)





## Enum: TtlUnitEnum


* `DAYS` (value: `"DAYS"`)

* `HOURS` (value: `"HOURS"`)

* `MICROSECONDS` (value: `"MICROSECONDS"`)

* `MILLISECONDS` (value: `"MILLISECONDS"`)

* `MINUTES` (value: `"MINUTES"`)

* `NANOSECONDS` (value: `"NANOSECONDS"`)

* `SECONDS` (value: `"SECONDS"`)




