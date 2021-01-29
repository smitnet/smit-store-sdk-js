import axios from 'axios';

var name = "@smitnet/smit-store-sdk";
var version = "1.0.29";
var description = "SMIT.STORE JAVASCRIPT SDK";
var publishConfig = {
	access: "public"
};
var main = "dist/index.cjs.js";
var browser = "dist/index.js";
var module = "dist/index.mjs.js";
var scripts = {
	test: "jest",
	rollup: "rollup -c",
	build: "npm run rollup && npm run test",
	start: "SERVE=true rollup -c -w",
	watch: "npm run start",
	lint: "eslint --ext .js src"
};
var repository = {
	type: "git",
	url: "git+https://github.com/smitnet/smit-store-sdk-js.git"
};
var keywords = [
	"smit",
	"store",
	"sdk",
	"js"
];
var author = "SMIT. Digitaal vakmanschap B.V.";
var license = "MIT";
var bugs = {
	url: "https://github.com/smitnet/smit-store-sdk-js/issues"
};
var homepage = "https://github.com/smitnet/smit-store-sdk-js#readme";
var devDependencies = {
	"@babel/plugin-proposal-class-properties": "^7.12.1",
	"@babel/plugin-transform-runtime": "^7.12.1",
	"@babel/preset-env": "^7.12.7",
	"@babel/preset-stage-3": "^7.8.3",
	"@babel/runtime": "^7.12.5",
	"@rollup/plugin-node-resolve": "^11.0.0",
	"babel-core": "^6.26.3",
	"babel-loader": "^8.2.2",
	"babel-plugin-inline-json-import": "^0.3.2",
	"babel-plugin-transform-class-properties": "^6.24.1",
	"babel-polyfill": "^6.26.0",
	"babel-preset-env": "^1.7.0",
	cypress: "^6.1.0",
	eslint: "^7.15.0",
	"eslint-config-airbnb-base": "^14.2.1",
	"eslint-loader": "^4.0.2",
	"eslint-plugin-import": "^2.22.1",
	jest: "^26.6.3",
	"regenerator-runtime": "^0.13.7",
	rollup: "^2.34.2",
	"rollup-plugin-auto-external": "^2.0.0",
	"rollup-plugin-babel": "^4.4.0",
	"rollup-plugin-commonjs": "^10.1.0",
	"rollup-plugin-filesize": "^9.1.0",
	"rollup-plugin-ignore": "^1.0.9",
	"rollup-plugin-json": "^4.0.0",
	"rollup-plugin-livereload": "^2.0.0",
	"rollup-plugin-node-polyfills": "^0.2.1",
	"rollup-plugin-serve": "^1.1.0",
	"rollup-plugin-sourcemaps": "^0.6.3",
	"rollup-plugin-terser": "^7.0.2"
};
var dependencies = {
	axios: "^0.21.0",
	"core-js": "^3.8.1",
	"js-cookie": "^2.2.1",
	jsonwebtoken: "^8.5.1",
	"node-localstorage": "^2.1.6"
};
var directories = {
	example: "examples",
	test: "tests"
};
var pkg = {
	name: name,
	version: version,
	description: description,
	publishConfig: publishConfig,
	main: main,
	browser: browser,
	module: module,
	"cjs:main": "dist/index.cjs.js",
	scripts: scripts,
	repository: repository,
	keywords: keywords,
	author: author,
	license: license,
	bugs: bugs,
	homepage: homepage,
	devDependencies: devDependencies,
	dependencies: dependencies,
	directories: directories
};

class Config {
  constructor(options) {
    const {
      // storage,
      apiKey,
      hostname,
      protocol,
      currency,
      language,
      version,
      headers,
      addCartClass,
      throwExceptions,
      isDebug
    } = options; // storage
    // this.storage = storage || new LocalStorageAdapter();
    // request

    this.apiKey = apiKey || null;
    this.headers = headers || {};
    this.protocol = protocol || 'https';
    this.hostname = hostname || 'api.smit.store';
    this.version = version || 'v1';
    this.resource = null; // localization

    this.currency = currency || 'EUR';
    this.language = language || 'nl'; // browser

    this.addCartClass = addCartClass || 'add-cart'; // metadata

    this.sdk = {
      version: pkg.version,
      language: 'JS',
      environment: 'none',
      exceptions: throwExceptions || true,
      isDebug: isDebug || false
    };

    if (!this.protocol) {
      throw new Error('Missing "protocol" from configuration options');
    }

    if (!this.hostname) {
      throw new Error('Missing "hostname" from configuration options');
    }

    this.requestBaseUrl = `${this.protocol}://${this.hostname}/api/${this.version}`;
  }

}

class RequestHelper {
  constructor(config) {
    this.config = config;
  }

  async get(url, data, headers = undefined) {
    try {
      const endpoint = url[0] === '/' ? url.substr(1) : url;
      const defaultHeaders = {
        Accept: 'application/json',
        'X-Store-ID': this.config.apiKey
      };
      const response = await axios.get(`${this.config.requestBaseUrl}/${endpoint}`, {
        headers: { ...headers,
          ...defaultHeaders
        }
      });

      if (response.status >= 200 && response.status <= 204) {
        return response.data;
      }
    } catch (err) {
      throw Error(err);
    }
  }

  async post(url, data, headers = undefined) {
    try {
      const endpoint = url[0] === '/' ? url.substr(1) : url;
      const defaultHeaders = {
        Accept: 'application/json',
        'X-Store-ID': this.config.apiKey
      };
      const response = await axios.post(`${this.config.requestBaseUrl}/${endpoint}`, data, {
        headers: { ...headers,
          ...defaultHeaders
        }
      });

      if (response.status >= 200 && response.status <= 204) {
        let results = null;

        if (typeof response.data === 'object' && response.data.hasOwnProperty('data')) {
          results = response.data.data;
        } else {
          results = response.data;
        }

        return results;
      }
    } catch (err) {
      throw Error(err);
    }
  }

  async put(url, data, headers = undefined) {
    try {
      const endpoint = url[0] === '/' ? url.substr(1) : url;
      const defaultHeaders = {
        Accept: 'application/json',
        'X-Store-ID': this.config.apiKey
      };
      const response = await axios.put(`${this.config.requestBaseUrl}/${endpoint}`, data, {
        headers: { ...headers,
          ...defaultHeaders
        }
      });

      if (response.status >= 200 && response.status <= 204) {
        let results = null;

        if (typeof response.data === 'object' && response.data.hasOwnProperty('data')) {
          results = response.data.data;
        } else {
          results = response.data;
        }

        return results;
      }
    } catch (err) {
      throw Error(err);
    }
  }

  async delete(url, data, headers = undefined) {
    try {
      const endpoint = url[0] === '/' ? url.substr(1) : url;
      const defaultHeaders = {
        Accept: 'application/json',
        'X-Store-ID': this.config.apiKey
      };
      const response = await axios.delete(`${this.config.requestBaseUrl}/${endpoint}`, data, {
        headers: { ...headers,
          ...defaultHeaders
        }
      });

      if (response.status >= 200 && response.status <= 204) {
        let results = null;

        if (typeof response.data === 'object' && response.data.hasOwnProperty('data')) {
          results = response.data.data;
        } else {
          results = response.data;
        }

        return results;
      }
    } catch (err) {
      throw Error(err);
    }
  }

}

class BaseResource {
  constructor(config) {
    this.request = new RequestHelper(config);
    this.config = config;
    this.resource = null;
    this.metadata = {};
  }

  Metadata() {
    this.Meta();
  }

  Meta() {
    return this.metadata;
  }

}

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

class SessionResource extends BaseResource {
  constructor(config) {
    super(config); // TODO: decide usage `cookie storage` or `localStorage` and override

    this.resource = 'session';
  }

  Guest() {
    return this.request.post(this.resource).then(response => {
      // this.config.storage.set('access_token', response);
      return response;
    });
  }

  Refresh(token = undefined) {

    return this.request.post(`${this.resource}/refresh`, null, {
      Authorization: `Bearer ${token}`
    }).then(response => {
      // this.config.storage.set('access_token', response);
      return response;
    });
  }

  Login(username = undefined, password = undefined) {

    return this.request.post(this.resource, {
      username,
      password
    }).then(response => {
      // this.config.storage.set('access_token', response);
      return response;
    });
  }

  Logout(token = undefined) {

    return this.request.post(`${this.resource}/logout`, null, {
      Authorization: `Bearer ${token}`
    });
  }

}

class CrudResource extends BaseResource {
  constructor(config) {
    super(config);
    this.request = new RequestHelper(config);
    this.config = config;
    this.resource = null;
    this.metadata = {};
  }

  Metadata() {
    this.Meta();
  }

  Meta() {
    return this.metadata;
  }

  All(args = undefined) {
    return this.request.get(this.resource).then(response => {
      if (typeof response.data === 'object') {
        const json = response.data;

        if (json.hasOwnProperty('meta')) {
          this.metadata = json.meta;
        }

        return json.hasOwnProperty('data') ? json.data : json;
      }

      return response.data;
    });
  }

  Get(id = undefined) {
    if (id === undefined) {
      throw Error('Missing "id" from request');
    }

    return this.request.get(`${this.resource}/${id}`).then(response => {
      return typeof response.data === 'object' && response.data.hasOwnProperty('data') ? response.data.data : response.data;
    });
  }

}

class ProductResource extends CrudResource {
  constructor(config) {
    super(config);
    this.resource = 'products';
  }

  Find(slugOrId = undefined) {
    if (slugOrId !== undefined) {
      return this.request.get(`${this.resource}/${slugOrId}`).then(response => response);
    }

    return null;
  }

}

class Browser {
  Init() {
    const products = document.getElementsByClassName(this.config.addCartClass);

    if (products.length) {
      for (let index = products.length - 1; index >= 0; index -= 1) {
        const product = products[index];
        const productData = product.dataset; // Add to cart handler by listing for click event

        product.addEventListener('click', evt => {
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
        } // TODO: send indexed products to API for indexing

      }
    }
  }

}

class SmitStore {
  constructor(config) {
    this.config = config;
    this.Carts = new CartResource(config);
    this.Sessions = new SessionResource(config);
    this.Products = new ProductResource(config); // TODO: add `...` resource

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

const Build = config => new SmitStore(new Config(config));
 // TODO: possibly rename `Build` to: `Init` / `Setup` ?

export default SmitStore;
export { Build };
