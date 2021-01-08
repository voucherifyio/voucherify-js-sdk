const axios = jest.genMockFromModule('axios') as jest.Mocked<typeof import('axios')['default']>
axios.create = jest.fn(() => axios)

export default axios
