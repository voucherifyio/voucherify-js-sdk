# Voucherify.MetadataSchemaDefinitionDeprecated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | [optional] 
**array** | **Boolean** | Indicates whether the definition is an array. | [optional] 
**optional** | **Boolean** | Indicates whether this definition is optional or not optional for the resource. | [optional] 
**objectType** | **String** | Returns the name of the custom resource if the resource was previously defined in the Dashboard as a custom (non-standard) Nested object. | [optional] 
**eq** | **[Object]** | Array of possible values when the setting for &#x60;is equal to any of&#x60; in the Dashboard is defined explicitly. | [optional] 
**ne** | **[Object]** | Array of values that are not allowed when the setting for &#x60;is not equal to any of&#x60; in the Dashboard is defined explicitly. | [optional] 
**lt** | **Number** | A property of &#x60;number&#x60; type must have &#x60;less than&#x60; this value. | [optional] 
**lte** | **Number** | A property of &#x60;number&#x60; type must be &#x60;less than or equal&#x60; to this value. | [optional] 
**gt** | **Number** | A property of &#x60;number&#x60; type must be &#x60;greater than&#x60; this value. | [optional] 
**gte** | **Number** | A property of &#x60;number&#x60; type must be &#x60;greater than or equal&#x60; to this value. | [optional] 
**deleted** | **Boolean** | Indicates whether the definition was deleted from the schema. | [optional] 
**maxLength** | **Number** | Value for maximum length when the setting for &#x60;has maximum length of&#x60; in the Dashboard is defined explicitly. | [optional] 
**minLength** | **Number** | Value indicating minimum length when the setting for &#x60;has minimum length of&#x60; in the Dashboard is defined explicitly. | [optional] 
**exactLength** | **Number** | Value indicating exact length when the setting for &#x60;has exact length of&#x60; in the Dashboard is defined explicitly. | [optional] 



## Enum: TypeEnum


* `string` (value: `"string"`)

* `number` (value: `"number"`)

* `object` (value: `"object"`)

* `date` (value: `"date"`)

* `datetime` (value: `"datetime"`)

* `geopoint` (value: `"geopoint"`)

* `boolean` (value: `"boolean"`)

* `image_url` (value: `"image_url"`)




