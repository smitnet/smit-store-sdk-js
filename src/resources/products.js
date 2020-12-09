import BaseResource from './extends/base'

class ProductResource extends BaseResource {
    constructor(config) {
        super(config)

        this.resource = 'products'
    }
}

export default ProductResource
