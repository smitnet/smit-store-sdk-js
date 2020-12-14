import BaseResource from './extends/base'

class CartResource extends BaseResource {
    constructor(config) {
        super(config)

        this.resource = 'cart'
    }

    Add(id = undefined, qty = 1) {
        console.log('carts.add', id, qty)
    }

    Remove(id = undefined, qty = 1) {
        console.log('carts.remove', id, qty)
    }

    Clear() {
        console.log('carts.clear')
    }
}

export default CartResource
