---
'@voucherify/sdk': minor
---

#### Dependencies:
`Axios` version was updated from `0.21.4` to `0.27.2`.
Added `"dotenv": "16.3.1"` to `devDependencies`

----------

#### This minor update changes the way SDK tests are written.
Please note **sdk** tests are located in `packages/sdk/tests` and uses **real** calls to voucherify API via `client.ts`.
```js
import { voucherifyClient as client } from './client'
```

----------

#### .env file:
In order to run **sdk tests** you need to copy `packages/sdk/.env.example` to `packages/sdk/.env` and fill the file with your credentials.

In order **to run** sdk tests please go to `packages/sdk` folder and run `yarn test`

----------

#### Workflow changes
- Required version of node in `package.json` (root folder) was changed from `14.15` to `^14.15 || ^16`. - This is not related to SDK usage, but rather to further contribution to the SDK.


