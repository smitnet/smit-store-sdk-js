const SmitStore = require('../dist/index.cjs').Build;

const sdk = SmitStore({});

describe('it can be instantiated', () => {
  test('it has correct configuration', () => {
    expect(sdk.config.protocol).toEqual('https');
    expect(sdk.config.hostname).toEqual('api.smit.store');
  });

  test('it has detected correct environment', () => {
    expect(sdk.config.sdk.environment).toEqual('node');
  });
});
