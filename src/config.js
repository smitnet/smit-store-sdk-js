import pkg from '../package.json'

class Config {
    constructor(options) {
        const {
            currency,
            language,
            headers
        } = options

        this.currency = currency || 'EUR'
        this.language = language || 'nl'
        this.headers = headers || {}
        this.protocol = 'https'
        this.hostname = 'api.smit.store'
        this.version = 'v1'
        this.resource = null
        this.sdk = {
            version: pkg.version,
            language: 'JS'
        }

        this._baseUrl = `${this.protocol}://${this.hostname}`

        // if (!this.host) {
        //     throw new Error('Missing "host" from configuration options')
        // }
    }
}

export default Config
