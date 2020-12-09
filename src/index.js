import Config from './config'
import SessionResource from './resources/sessions.js'
import ProductResource from './resources/products.js'

export default class SmitStore {
    constructor(config) {
        this.config = config

        this.Sessions = new SessionResource(config)
        this.Products = new ProductResource(config)
    }
}

const Build = config => new SmitStore(new Config(config))
export { Build }
