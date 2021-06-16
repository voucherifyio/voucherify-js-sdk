const axios = jest.genMockFromModule('axios') as jest.Mocked<typeof import('axios')['default']>
axios.create = jest.fn(() => axios)
export default axios

// eslint-disable-next-line import/no-anonymous-default-export
// export default {
// 	get: jest.fn(() => Promise.resolve({ data: null })),
// }
