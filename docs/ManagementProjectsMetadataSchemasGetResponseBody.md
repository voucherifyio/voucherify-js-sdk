# Voucherify.ManagementProjectsMetadataSchemasGetResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the metadata schema. | [optional] 
**relatedObject** | **String** | The resource type. You can define custom metadata schemas, which have a custom &#x60;\&quot;related_object\&quot;&#x60; resource type. The standard metadata schemas are: &#x60;\&quot;campaign\&quot;&#x60;, &#x60;\&quot;customer\&quot;&#x60;, &#x60;\&quot;earning_rule\&quot;&#x60;, &#x60;\&quot;loyalty_tier\&quot;&#x60;, &#x60;\&quot;order\&quot;&#x60;, &#x60;\&quot;order_item\&quot;&#x60;, &#x60;\&quot;product\&quot;&#x60;, &#x60;\&quot;promotion_tier\&quot;&#x60;, &#x60;\&quot;publication\&quot;&#x60;, &#x60;\&quot;redemption\&quot;&#x60;, &#x60;\&quot;reward\&quot;&#x60;, &#x60;\&quot;voucher\&quot;&#x60;. | [optional] 
**properties** | [**{String: ManagementProjectsMetadataSchemaDefinition}**](ManagementProjectsMetadataSchemaDefinition.md) | Contains metadata definitions. | [optional] 
**allowDefinedOnly** | **Boolean** | Restricts the creation of metadata fields when set to &#x60;true&#x60;. It indicates whether or not you can create new metadata definitions, e.g. in the campaign or publication manager. If set to &#x60;true&#x60;, then only the defined fields are available for assigning values. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the metadata schema was created. The value for this parameter is shown in the ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the metadata schema was updated. The value for this parameter is shown in the ISO 8601 format. | [optional] 
**object** | **String** | The type of the object represented by the JSON. This object stores information about the metadata schema. | [optional] [default to &#39;metadata_schema&#39;]


