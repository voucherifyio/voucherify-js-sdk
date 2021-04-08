import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { VoucherifyClientSide } from '@voucherify/sdk'

const voucherify = VoucherifyClientSide({
	clientApplicationId: '011240bf-d5fc-4ef1-9e82-11eb68c43bf5',
	clientSecretKey: '9e2230c5-71fb-460a-91c6-fbee64707a20',
	trackingId: 'gustav@purpleson.com', // or voucherify.setIdentity('gustav@purpleson.com')
})

function App() {
	const [code, setCode] = React.useState('gfct5ZWI1nL')
	const [amount, setAmount] = React.useState(1000)
	const [output, setOutput] = React.useState('')
	const [isSubmitting, setSubmitting] = React.useState(false)

	function handleSubmit() {
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
