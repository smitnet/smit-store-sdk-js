const { default: Config } = require("../src/config")
const { default: SmitStore } = require("../src/index")

describe('it can be instantiated', () => {
    const config = new Config({
        hostname: 'example.com'
    })

    const sdk = new SmitStore(config)

    test('it has correct configuration', () => {
        expect(sdk.config.protocol).toEqual('https')
        expect(sdk.config.hostname).toEqual(config.hostname)
    })

    test('it has detected correct environment', () => {
        expect(sdk.config.sdk.environment).toEqual('node')
    })
})
