import axios from 'axios';

class Products {
  static All() {
    return axios.get('products.json').then((response) => response);
  }

  static Get(id = undefined) {
    return axios.get('product.json').then((response) => response);
  }
}

export default Products;
