class Browser {
  Init() {
    const products = document.getElementsByClassName(this.config.addCartClass);

    if (products.length) {
      for (let index = products.length - 1; index >= 0; index -= 1) {
        const product = products[index];
        const productData = product.dataset;

        // Add to cart handler by listing for click event
        product.addEventListener('click', (evt) => {
          if (evt.isTrusted) {
            evt.preventDefault();

            this.debug('add product to cart:', productData.itemId);
          }
        });

        if (!productData.itemId) {
          this.error('Missing required "data-item-id" attribute');
        } else if (!productData.itemName) {
          this.error('Missing required "data-item-name" attribute');
        } else if (!productData.itemPrice) {
          this.error('Missing required "data-item-price" attribute');
        } else if (!productData.itemUrl) {
          this.error('Missing required "data-item-url" attribute');
        }

        // TODO: send indexed products to API for indexing
      }
    }
  }
}

export default Browser;
