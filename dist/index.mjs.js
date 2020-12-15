import axios from 'axios';

var name = "@smitnet/smit-store-sdk";
var version = "1.0.21";
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
	build: "npm run test && npm run rollup",
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
	"core-js": "^3.8.1"
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
    } = options; // request

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
      exceptions: this.throwExceptions || true,
      isDebug: this.isDebug || false
    };

    if (!this.protocol) {
      throw new Error('Missing "protocol" from configuration options');
    }

    if (!this.hostname) {
      throw new Error('Missing "hostname" from configuration options');
    }

    this._baseUrl = `${this.protocol}://${this.hostname}/api/${this.version}`;
  }

}

class RequestHelper {
  constructor(config) {
    this.config = config;
  }

  async get(url) {
    try {
      const endpoint = url[0] === '/' ? url.substr(1) : url;
      const response = await axios.get(`${this.config._baseUrl}/${endpoint}`);

      if (response.status >= 200 && response.status <= 204) {
        return response.data;
      }
    } catch (err) {
      throw Error(err);
    }
  }

  async post(url, data) {
    try {
      const endpoint = url[0] === '/' ? url.substr(1) : url;
      const response = await axios.post(`${this.config._baseUrl}/${endpoint}`, data);

      if (response.status >= 200 && response.status <= 204) {
        let results = null;

        if (typeof response.data === Object && response.data.hasOwnProperty('data')) {
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

  All() {
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

class SessionResource extends BaseResource {
  constructor(config) {
    super(config);
    this.resource = 'session';
  }

  Guest() {
    return this.request.get(this.resource);
  }

  Login(username, password) {
    return this.request.post(this.resource, { ...username,
      ...password
    });
  }

}

class ProductResource extends BaseResource {
  constructor(config) {
    super(config);
    this.resource = 'products';
  }

}

class SmitStore {
  constructor(config) {
    this.config = config;
    this.Sessions = new SessionResource(config);
    this.Products = new ProductResource(config);

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      this.config.sdk.environment = 'browser';

      this.__debug('environment', 'browser');

      return this.initBrowser();
    } else {
      this.config.sdk.environment = 'node';

      this.__debug('environment', 'node');
    }
  }
  /**
   * TODO: add debug toggle in configuration
   * @param  {...any} args
   */


  __debug(...args) {
    if (this.config.sdk.isDebug) {
      console.debug(args);
    }
  }
  /**
   * TODO: add exception toggle in configuraton
   * @param {*} msg
   */


  __error(msg) {
    if (this.config.sdk.exceptions) {
      throw Error(msg);
    }
  }

  setApiKey(apiKey) {
    // TODO: invalid api token should throw error
    this.config.sdk.apiKey = apiKey;
  }

  getQueryParameter(name, url) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    const rs = "[\\?&]" + name + "=([^&#]*)";
    const re = new RegExp(rs);
    const r = re.exec(url);
    return r == null ? null : r[1];
  }
  /**
   * TODO: This MUST be initiated upon browser identification.
   */


  initBrowser() {
    const products = document.getElementsByClassName(this.config.addCartClass);

    if (products.length) {
      for (let index = products.length - 1; index >= 0; index -= 1) {
        const product = products[index];
        const productData = product.dataset; // Add to cart handler by listing for click event

        product.addEventListener('click', evt => {
          if (evt.isTrusted) {
            evt.preventDefault();

            this.__debug('add product to cart:', productData.itemId);
          }
        });

        if (!productData.itemId) {
          this.__error('Missing required "data-item-id" attribute');
        } else if (!productData.itemName) {
          this.__error('Missing required "data-item-name" attribute');
        } else if (!productData.itemPrice) {
          this.__error('Missing required "data-item-price" attribute');
        } else if (!productData.itemUrl) {
          this.__error('Missing required "data-item-url" attribute');
        } // TODO: send indexed products to API for indexing

      }
    }
  }

}

const Build = config => new SmitStore(new Config(config));
//     if (typeof window !== 'undefined' && typeof document !== 'undefined') {
//         const SmitStore = window.SmitStore = (typeof window.SmitStore === Object && Object.keys(window.SmitStore).length !== 0)
//             ? window.SmitStore
//             : Build({})
//         // TODO: add cross browser support for `document loaded`
//         document.addEventListener('DOMContentLoaded', (e) => {
//             let self = null;
//             let scripts = document.getElementsByTagName('script')
//             for (var index = 0; index < scripts.length; ++index) {
//                 let source = scripts[index].getAttribute('src')
//                 if (source !== null && source.toLowerCase().indexOf(`/dist/${window.SmitStore.config.sdk.version}/sdk.js`.toLowerCase()) > -1) {
//                     self = scripts[index];
//                     // Set API key identifier...
//                     const apiKey = SmitStore.getQueryParameter('api', source)
//                     if (apiKey !== null) {
//                         SmitStore.setApiKey(apiKey)
//                     } else {
//                         SmitStore.__error('Missing valid configuration "api"')
//                     }
//                 }
//             }
//             // TODO: load frontend components
//         })
//     }
// })()

export default SmitStore;
export { Build };
