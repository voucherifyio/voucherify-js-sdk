# Voucherify.ApplicationDetailsItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceIndex** | **Number** | Index number of the source item that is replaced. The enumeration starts from &#x60;0&#x60;, which represents the first item in the request, e.g., if the replaced item is passed as the second in the request, &#x60;source_index&#x60; equals &#x60;3&#x60;. | [optional] 
**sourceAppliedQuantity** | **Number** | Number of source units that are replaced. | [optional] 
**sourceAppliedQuantityAmount** | **Number** | Amount equal to the price of the units that are replaced. Determines the change of the amount of the source item quantity. | [optional] 
**targetIndex** | **Number** | Index number of the target item that is a replacement of the source item. The enumeration continues the values for the order items, e.g. if there are three items in the request, &#x60;target_index&#x60; equals &#x60;3&#x60;, as enumeration starts from &#x60;0&#x60;. | [optional] 
**targetAppliedQuantity** | **Number** | Number of added target units that are replacements. | [optional] 
**targetAppliedQuantityAmount** | **Number** | Amount equal to the price of the units that are replacements. Determines the change in the amount of the target item quantity. | [optional] 
**targetAppliedDiscountAmount** | **Number** | Discount amount applied to the target item with regard to the replacement. Equals the &#x60;target_applied_quantity_amount&#x60; minus &#x60;source_applied_quantity_amount&#x60;. | [optional] 


