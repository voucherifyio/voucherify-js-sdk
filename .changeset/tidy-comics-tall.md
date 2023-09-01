---
'@voucherify/sdk': major
---

**New exported types/interfaces**
- LoyaltyProportionalOrder
- LoyaltyProportionalOrderItems
- LoyaltyProportionalCustomer
- LoyaltyProportionalCustomEvent
- LoyaltiesEarningRulesResponseCommon
- LoyaltiesEarningRulesResponse
- LoyaltiesEnableEarningRulesResponse
- LoyaltiesDisableEarningRulesResponse
- LoyaltiesUpdateEarningRuleResponse
- LoyaltiesCreateEarningRuleResponse

**Breaking changes:**
- Interface `LoyaltyProportional` was replaced with type of Union of interfaces `LoyaltyProportionalOrder | LoyaltyProportionalOrderItems | LoyaltyProportionalCustomer | LoyaltyProportionalCustomEvent`
- Method name `client.loyalties.createEarningRule` has changed to `client.loyalties.createEarningRules` - notice `s` as this method requires array of earning rules.

**Example of usage (related to breaking changes):**
```js
const earningRule = await client.loyalties.getEarningRule(campaignId, earningRuleId)
//If we want to know structure of earningRule's loyalty key, we will need to do some checkings to know which union type will apply
//We need to  check first if this is `FIXED` or `PROPORTIONAL`
if(earningRule.loyalty.type === "FIXED"){
  console.log(earningRule.loyalty.points)
  return
}
//loyalty.type === "PROPORTIONAL"
//Here we must check if earningRule.loyalty contains `order`, `order_items`, `customer` or `custom_event`
if ('order' in earningRule.loyalty) {
  //Here we must check if earningRule.loyalty.order contains `amount`, `total_amount` or `metadata`
  if ('amount' in earningRule.loyalty.order) {
    console.log(earningRule.loyalty.order.amount.every)
    console.log(earningRule.loyalty.order.amount.points)
  }
  if ('total_amount' in earningRule.loyalty.order) {
    console.log(earningRule.loyalty.order.total_amount.every)
    console.log(earningRule.loyalty.order.total_amount.points)
  }
  if ('metadata' in earningRule.loyalty.order) {
    console.log(earningRule.loyalty.order.metadata.every)
    console.log(earningRule.loyalty.order.metadata.points)
    console.log(earningRule.loyalty.order.metadata.property)
  }
  return
}
if ('order_items' in earningRule.loyalty) {
  //...
  return
}
if ('customer' in earningRule.loyalty) {
  //...
  return
}
if ('custom_event' in earningRule.loyalty) {
  //...
  return
}
```


