import Config from './config';
import CartResource from './resources/carts';
import SessionResource from './resources/sessions';
import ProductResource from './resources/products';
import Browser from './browser';

export default class SmitStore {
  constructor(config) {
    this.config = config;

    this.Carts = new CartResource(config);
    this.Sessions = new SessionResource(config);
    this.Products = new ProductResource(config);
    // TODO: add `...` resource

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      this.config.sdk.environment = 'browser';

      return new Browser(config);
    }

    this.config.sdk.environment = 'node';
  }

  /**
   * Once `debug` is enabled, we'll allow `debug` console logs.
   *
   * @param  {...any} args
   */
  debug(...args) {
    if (this.config.sdk.isDebug) {
      console.debug(args); // eslint-disable-line
    }
  }

  /**
   * This will throw Exceptions if preferred.
   *
   * @param {*} msg
   */
  error(msg) {
    if (this.config.sdk.exceptions) {
      throw Error(msg);
    }
  }

  setApiKey(apiKey) {
    // TODO: invalid api token should throw error

    this.config.sdk.apiKey = apiKey;
  }
}

const Build = (config) => new SmitStore(new Config(config));
export { Build }; // TODO: possibly rename `Build` to: `Init` / `Setup` ?
