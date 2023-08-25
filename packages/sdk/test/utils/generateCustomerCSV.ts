import fs from 'fs'
import csv from 'csv-stringify'
export const generateCustomerCSV = async (sourceId: string) => {
	const data = [
		[
			'Name',
			'Email',
			'Phone',
			'Birthdate',
			'Source_id',
			'Address_line_1',
			'Address_line_2',
			'Postal_Code',
			'City',
			'State',
			'Country',
			'Description',
			'Metadata_name_1',
			'Metadata_name_2',
		],
		[
			'John Doe',
			`${sourceId}@example.com`,
			'+15123456789',
			'1987-01-01',
			sourceId,
			'4435 Oakridge',
			'Farm Lane',
			53151,
			'New Berlin',
			'Wisconsin',
			'United States',
			'Subscribed since 04-2019',
			'Metadata_1_value',
			'Metadata_2_value',
		],
	]
	const path = __dirname.split('/').slice(0, -1).join('/') + '/csv/customers.csv'
	return new Promise<void>((resolve, reject) => {
		csv.stringify(data, (error, output) => {
			if (error) {
				console.log(error)
				reject(error)
			}
			if (output) {
				fs.writeFileSync(path, output)
				resolve()
			}
		})
	})
}
