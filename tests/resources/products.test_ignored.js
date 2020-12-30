const SmitStore = require('../../dist/index.cjs').Build;

const sdk = SmitStore({
  apiKey: 'test_123',
});

describe('products resource', () => {
  test('should fetch all products', () => {
    return sdk.Products.All({ limit: false }).then((data) => {
      expect(data[0]).toHaveProperty('id');
      expect(data[0]).toHaveProperty('name');
      expect(data[0]).toHaveProperty('slug');
      expect(data[0]).toHaveProperty('ean');
    });
  });
});
