import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { VoucherifyClientSide } from '@voucherify/sdk'

const voucherify = VoucherifyClientSide({
	clientApplicationId: '39f0d4d7-ca5b-4e49-bd5b-730a4d9dce99',
	clientSecretKey: '9ec904dc-7cfe-457e-89ca-e54e5aae1d1b',
})

function App() {
	const [code, setCode] = React.useState('gfct5ZWI1nL')
	const [amount, setAmount] = React.useState(1000)
	const [output, setOutput] = React.useState('')
	const [isSubmitting, setSubmitting] = React.useState(false)

	function handleSubmit() {
		voucherify.setIdentity('gustav@purpleson.com')
		setSubmitting(true)
		setOutput('')
		voucherify
			.redeem(code, { order: { amount: parseInt(amount, 10) } })
			.then(setOutput)
			.catch(err => setOutput(JSON.stringify(err, null, 2)))
			.finally(() => setSubmitting(false))
	}

	return (
		<section>
			<h1>Redeem Voucher</h1>
			<label htmlFor="redeem-code">
				Voucher Code:{' '}
				<input
					type="text"
					name="redeem-code"
					value={code}
					onChange={e => setCode(e.target.value)}
					disabled={isSubmitting}
				/>
			</label>
			<label htmlFor="amount">
				Voucher Amount:{' '}
				<input
					type="text"
					name="amount"
					value={amount}
					onChange={e => setAmount(e.target.value)}
					disabled={isSubmitting}
				/>
			</label>
			<button onClick={handleSubmit} disabled={isSubmitting}>
				Submit
			</button>
			<output style={{ display: 'block', marginTop: 10 }}>
				<pre>
					<code>{output}</code>
				</pre>
			</output>
		</section>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
