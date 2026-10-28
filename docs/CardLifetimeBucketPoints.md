# Voucherify.CardLifetimeBucketPoints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **Number** | Total accumulated points, including points added manually, earned by fulfilling earning rules and activated from pending points (excluding returned points). | [optional] [default to 0]
**earned** | **Number** | Total points earned by fulfilling earning rules (does not include activated pending points or points added manually). | [optional] [default to 0]
**added** | **Number** | Total manually added points. | [optional] [default to 0]
**purchased** | **Number** | Total points purchased via a &#x60;LOYALTY_CARD_POINTS&#x60; reward (credited to the target card). | [optional] [default to 0]
**purchasedReversed** | **Number** | Total purchased points reversed via reward refund. | [optional] [default to 0]
**subtracted** | **Number** | Total manually subtracted points. | [optional] [default to 0]
**expired** | **Number** | Total expired points. | [optional] [default to 0]
**spent** | **Number** | Total points spent on rewards. | [optional] [default to 0]
**refunded** | **Number** | Total refunded points (points that were earned by products which were later returned). | [optional] [default to 0]
**returned** | **Number** | Total returned points (by returning a purchased reward). | [optional] [default to 0]
**locked** | **Number** | Total locked points (by locking a purchased reward). | [optional] [default to 0]
**unlocked** | **Number** | Total unlocked points (by unlocking a purchased reward). | [optional] [default to 0]


