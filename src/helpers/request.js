import axios from 'axios'

class RequestHelper {
    constructor(config) {
        this.config = config
    }

    async get(url) {
        try {
            const endpoint = url[0] === '/' ? url.substr(1) : url

            const response = await axios.get(`${this.config._baseUrl}/${endpoint}`)

            if (response.status >= 200 && response.status <= 204) {
                return response.data
            }
        } catch (err) {
            throw Error(err)
        }
    }

    async post(url, data) {
        try {
            const endpoint = url[0] === '/' ? url.substr(1) : url

            const response = await axios.post(`${this.config._baseUrl}/${endpoint}`, data)

            if (response.status >= 200 && response.status <= 204) {
                let results = null

                if (typeof response.data === Object && response.data.hasOwnProperty('data')) {
                    results = response.data.data
                } else {
                    results = response.data
                }

                return results
            }
        } catch (err) {
            throw Error(err)
        }
    }
}

export default RequestHelper
