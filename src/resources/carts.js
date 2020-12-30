import BaseResource from './extends/base';

class CartResource extends BaseResource {
  constructor(config) {
    super(config);

    this.resource = 'cart';
  }

  Get() {
    return this.request.get(this.resource);
  }

  Update() {
    return this.request.put(this.resource);
  }

  Clear() {
    // TODO: ensure that user has confirmed clearing their cart

    return this.request.delete(this.resource);
  }

  Convert() {
    // TODO: ensure request was successful

    // TODO: clear cart remotely by calling internal function

    // TODO: get current cart (this should be a new cart)

    return this.request.post(this.resource);
  }
}

export default CartResource;
