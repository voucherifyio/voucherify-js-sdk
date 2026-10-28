# Loyalty v2 e2e coverage (JS SDK)

This document describes what `test_12_loyalty_v2.js` exercises for Loyalty v2 in `@voucherify/sdk`.

It is **not** a full API contract suite. Coverage is a single happy-path flow against a live project: create resources, call published SDK methods, assert non-empty / expected status fields, then clean up.

## Files

| File | Role |
|------|------|
| `test_12_loyalty_v2.js` | Mocha suite (SDK runtime + light reports/examine) |
| `loyalty_v2_fixture.js` | Setup / teardown orchestration |
| `loyalty_v2_http.js` | Authenticated `fetch` helper for unpublished admin paths |
| `spec_utils.js` | Shared credentials, `ApiClient`, delays |

`npm run generate-sdk-js` moves `test/` aside and restores it, so these files survive regeneration.

## Client split

| Concern | Client | Why |
|---------|--------|-----|
| Program / card definition / earning rule / reward admin (create, activate, assign, deactivate, delete) | **HTTP** (`loyalty_v2_http.js`) | Not on the published JS SDK allowlist |
| Member lifecycle, points, payments, purchases, examine, selected reports | **SDK** (`LV2ProgramsApi`, `LV2ExamineApi`) | Allowlisted Loyalty v2 operations |
| Test customer + order for pay-with-points | **SDK** (`CustomersApi`, `OrdersApi`) | Existing v1 helpers |

## Depth legend

| Depth | Meaning |
|-------|---------|
| **Smoke** | Call succeeds (2xx); body is present; maybe id / array shape |
| **Basic** | Smoke + a few field checks (status, id prefix, list contains created id) |
| **Flow** | Multi-step scenario (create → mutate → list → optional reverse); still happy-path only |

No negative cases, pagination edge cases, filter matrices, or schema-exhaustive assertions.

---

## Covered via published SDK

### Members (`LV2ProgramsApi`)

| Method | HTTP | Depth | Notes |
|--------|------|-------|-------|
| `createProgramMember` | `POST .../members` | Flow | Customer id identification |
| `getProgramMember` | `GET .../members/{memberId}` | Basic | Id match; cards present |
| `listProgramMembers` | `GET .../members` | Basic | Created member appears in list |
| `getProgramMembership` | `GET .../memberships/{customerId}` | Smoke | Response present |
| `activateProgramMember` | `POST .../members/{memberId}/activate` | Basic | Status `ACTIVE` |
| `deactivateProgramMember` | `POST .../members/{memberId}/deactivate` | Basic | Status not `ACTIVE` |
| `deleteProgramMember` | `DELETE .../members/{memberId}` | Smoke | Cleanup only (`after`) |

Not covered: `batchCreateProgramMembers`, `updateProgramMember`, member activities.

### Cards / points (`LV2ProgramsApi`)

| Method | HTTP | Depth | Notes |
|--------|------|-------|-------|
| `adjustCardPoints` | `POST .../cards/{cardId}/points` | Flow | +100 `ADMIN_CREDIT`; waits for async balance |
| `listCardTransactions` | `GET .../cards/{cardId}/transactions` | Basic | Non-empty list after adjust |

Not covered: pending points list/activate/cancel, expiring points, expire bucket, card activities.

### Order payments (`LV2ProgramsApi` + `OrdersApi`)

| Method | HTTP | Depth | Notes |
|--------|------|-------|-------|
| `OrdersApi.createOrder` | `POST /v1/orders` | Smoke | Fixture order for payment |
| `createMemberOrderPayment` | `POST .../orders/payments` | Flow | `mode: DRY_RUN` only; `payment_limit: CARD_BALANCE` |
| `listMemberOrderPayments` | `GET .../orders/payments` | Smoke | Response present (list may be empty for dry-run) |

Not covered: `TRANSACTION` (real) pay-with-points, payment limits other than `CARD_BALANCE`.

Requires spend card definition with `pay_with_points.type = EXCHANGE_RATIO` (set in fixture).

### Reward purchases (`LV2ProgramsApi`)

| Method | HTTP | Depth | Notes |
|--------|------|-------|-------|
| `purchaseMemberReward` | `POST .../rewards/purchases` | Flow | Dry-run then `TRANSACTION` |
| `listMemberRewardPurchases` | `GET .../rewards/purchases` | Basic | Poll until purchase `APPROVED` |
| `refundRewardPurchase` | `POST .../rewards/purchases/{id}/refund` | Flow | `policies.refund = ALLOW` via SDK opts body key |

Reward type exercised: digital `LOYALTY_CARD_POINTS` with a separate credit card definition.

### Examine (`LV2ExamineApi`)

| Method | HTTP | Depth | Notes |
|--------|------|-------|-------|
| `examineEarningRules` | `POST /v2/loyalties/examine/earning-rules` | Smoke | `SPECIFIC` / `customer.order.paid` + member id |
| `examineRewards` | `POST /v2/loyalties/examine/rewards` | Smoke | Member id only |

Not covered: all-triggers examine, custom-event / segment contexts, deep availability assertions.

### Reports (`LV2ProgramsApi`) — subset only

| Method | HTTP | Depth | Notes |
|--------|------|-------|-------|
| `listProgramMembersSummaryReports` | `GET .../reports/members/summary` | Smoke | `data` is an array (may be empty) |
| `listProgramRewardsSummaryReports` | `GET .../reports/rewards/summary` | Smoke | Same |
| `listProgramMembersDailyReports` | `GET .../reports/members/daily` | Smoke | `start_date` &lt; `end_date`, resolution `day` |
| `listMemberCardDailyReports` | `GET .../members/.../cards/.../reports/daily` | Smoke | Same date rule |

Not covered: earning-rules / points-earnings / spending / rewards-spendings / tiers reports (daily or summary), member earning-rule daily report, filters on summary reports.

### Customers (setup)

| Method | Depth | Notes |
|--------|-------|-------|
| `CustomersApi.createCustomer` | Smoke | Unique `source_id` |
| `CustomersApi.deleteCustomer` | Smoke | Cleanup |

---

## Covered via HTTP helper (not in published SDK)

Used only to build and tear down the Loyalty v2 program. Success is required for the suite to run; there are no dedicated Mocha assertions per admin call beyond “setup ids exist”.

### Setup (`setupLoyaltyV2Program`)

| Helper | HTTP | Purpose |
|--------|------|---------|
| `createProgram` | `POST /v2/loyalties/programs` | Draft program |
| `createCardDefinition` ×2 | `POST /v2/loyalties/card-definitions` | Spend card (`EXCHANGE_RATIO`) + reward credit card |
| `activateCardDefinition` ×2 | `POST .../card-definitions/{id}/activate` | Activate both |
| `createEarningRule` | `POST /v2/loyalties/earning-rules` | `customer.order.paid` → 100 points |
| `activateEarningRule` | `POST .../earning-rules/{id}/activate` | |
| `createReward` | `POST /v2/loyalties/rewards` | Digital loyalty-card-points + cost on spend card |
| `activateReward` | `POST .../rewards/{id}/activate` | |
| `batchAssignCardDefinitions` | `POST .../programs/{id}/card-definitions/batch` | Assign both cards |
| `batchAssignEarningRules` | `POST .../programs/{id}/earning-rules/batch` | |
| `batchAssignRewards` | `POST .../programs/{id}/rewards/batch` | Unlimited stock |
| `activateProgram` | `POST .../programs/{id}/activate` | |

Helpers present but unused in the happy path: `getProgram`, `updateProgram`, `draftCardDefinition`.

### Teardown (`teardownLoyaltyV2Program` + suite `after`)

| Step | Client | Notes |
|------|--------|-------|
| Deactivate / delete member | SDK | Ignore 404 |
| Delete customer | SDK | Ignore empty/404 responses |
| Deactivate / delete program | HTTP | Delete clears assignments |
| Deactivate / delete earning rule & reward | HTTP | Reward before card defs |
| Delete card definitions | HTTP | No draft step (draft fails while linked to non-draft program/reward) |

---

## Explicitly out of scope

- Most allowlisted Loyalty v2 report endpoints (see above)
- Pending / expiring points, benefit/tier transactions, member/card activities
- Batch member create, member update
- `LV2EarningRulesApi` / `LV2RewardsApi` / `LV2BenefitsApi` GET-by-id helpers
- Real (non–dry-run) order payment
- Error-path / validation / concurrency tests
- Other SDK languages

## How to run

From the JS SDK repo (or `sdks/js` submodule), with app credentials in `.env`:

```bash
npx mocha --require @babel/register --timeout 180000 test/test_12_loyalty_v2.js
```

Or the full suite / Docker image via the OpenAPI repo’s `npm run test-js-sdk`.
