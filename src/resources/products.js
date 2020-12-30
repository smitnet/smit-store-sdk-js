import CrudResource from './extends/crud';

class ProductResource extends CrudResource {
  constructor(config) {
    super(config);

    this.resource = 'products';
  }
}

export default ProductResource;
