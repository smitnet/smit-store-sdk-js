import CrudResource from './extends/crud';

class ProductResource extends CrudResource {
  constructor(config) {
    super(config);

    this.resource = 'products';
  }

  Find(slugOrId = undefined) {
    if (slugOrId !== undefined) {
      return this.request
        .post(`${this.resource}/${slugOrId}`)
        .then((response) => response);
    }

    return null;
  }
}

export default ProductResource;
