import { VoucherifyServerSide } from '@voucherify/sdk'

const voucherify = VoucherifyServerSide({
	applicationId: '5452e923-810c-4880-83fb-65202fab8e28',
	secretKey: '6a0f56de-b5a8-4893-bedd-79711134108b',
})

const campaignId = 'campaignId',
	earningRuleId = 'earningRuleId'

;(async () => {
	const earningRule = await voucherify.loyalties.getEarningRule(campaignId, earningRuleId)
	//If we want to know structure of earningRule's loyalty key, we will need to do some checkings to know which union type will apply
	//We need to  check first if this is `FIXED` or `PROPORTIONAL`
	if (earningRule.loyalty.type === 'FIXED') {
		console.log(earningRule.loyalty.points)
		return
	}
	//Now simply check the calculation_type
	switch (earningRule.loyalty.calculation_type) {
		case 'ORDER_AMOUNT': {
			//do something with it...
			console.log(earningRule.loyalty.order.amount.every)
			console.log(earningRule.loyalty.order.amount.points)
			return
		}
		case 'ORDER_TOTAL_AMOUNT': {
			console.log(earningRule.loyalty.order.total_amount.every)
			console.log(earningRule.loyalty.order.total_amount.points)
			return
		}
		case 'ORDER_METADATA': {
			console.log(earningRule.loyalty.order.metadata.every)
			console.log(earningRule.loyalty.order.metadata.points)
			console.log(earningRule.loyalty.order.metadata.property)
			return
		}
		//...more options
	}
	return
})()
