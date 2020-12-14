import Config from './config'
import SessionResource from './resources/sessions.js'
import ProductResource from './resources/products.js'

export default class SmitStore {
    constructor(config) {
        this.config = config

        this.Sessions = new SessionResource(config)
        this.Products = new ProductResource(config)

        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            this.config.sdk.environment = 'browser'
            this.__debug('environment', 'browser')
            return this.initBrowser()
        } else {
            this.config.sdk.environment = 'node'
            this.__debug('environment', 'node')
        }
    }

    /**
     * TODO: add debug toggle in configuration
     * @param  {...any} args
     */
    __debug(...args) {
        if (this.config.sdk.isDebug) {
            console.debug(args)
        }
    }

    /**
     * TODO: add exception toggle in configuraton
     * @param {*} msg
     */
    __error(msg) {
        if (this.config.sdk.exceptions) {
            throw Error(msg)
        }
    }

    setApiKey(apiKey) {
        // TODO: invalid api token should throw error

        this.config.sdk.apiKey = apiKey
    }

    getQueryParameter(name, url) {
        if (!url) url = location.href;
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        const rs = "[\\?&]" + name + "=([^&#]*)";
        const re = new RegExp(rs);
        const r = re.exec(url);
        return r == null ? null : r[1];
    }

    /**
     * TODO: This MUST be initiated upon browser identification.
     */
    initBrowser() {
        const products = document.getElementsByClassName(
            this.config.addCartClass
        )

        if (products.length) {
            for (let index = products.length - 1; index >= 0; index -= 1) {
                const product = products[index]
                const productData = product.dataset

                // Add to cart handler by listing for click event
                product.addEventListener('click', (evt) => {
                    if (evt.isTrusted) {
                        evt.preventDefault()

                        this.__debug('add product to cart:', productData.itemId)
                    }
                })

                if (!productData.itemId) {
                    this.__error('Missing required "data-item-id" attribute')
                } else if (!productData.itemName) {
                    this.__error('Missing required "data-item-name" attribute')
                } else if (!productData.itemPrice) {
                    this.__error('Missing required "data-item-price" attribute')
                } else if (!productData.itemUrl) {
                    this.__error('Missing required "data-item-url" attribute')
                }

                // TODO: send indexed products to API for indexing
            }
        }
    }
}

const Build = config => new SmitStore(new Config(config))
export { Build }

(function () {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const SmitStore = window.SmitStore = (typeof window.SmitStore === Object && Object.keys(window.SmitStore).length !== 0)
            ? window.SmitStore
            : Build({})

        // TODO: add cross browser support for `document loaded`
        document.addEventListener('DOMContentLoaded', (e) => {
            let self = null;
            let scripts = document.getElementsByTagName('script')
            for (var index = 0; index < scripts.length; ++index) {
                let source = scripts[index].getAttribute('src')
                if (source !== null && source.toLowerCase().indexOf(`/dist/${window.SmitStore.config.sdk.version}/sdk.js`.toLowerCase()) > -1) {
                    self = scripts[index];

                    // Set API key identifier...
                    const apiKey = SmitStore.getQueryParameter('api', source)
                    if (apiKey !== null) {
                        SmitStore.setApiKey(apiKey)
                    } else {
                        SmitStore.__error('Missing valid configuration "api"')
                    }
                }
            }

            // TODO: load frontend components
        })
    }
})()
