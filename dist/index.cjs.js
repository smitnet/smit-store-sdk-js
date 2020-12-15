'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var name = "@smitnet/smit-store-sdk";
var version = "1.0.19";
var description = "SMIT.STORE JAVASCRIPT SDK";
var publishConfig = {
	access: "public"
};
var main = "dist/index.cjs.js";
var browser = "dist/index.js";
var module$1 = "dist/index.mjs.js";
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
	module: module$1,
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

var Config = function Config(options) {
  _classCallCheck(this, Config);

  var apiKey = options.apiKey,
      hostname = options.hostname,
      protocol = options.protocol,
      currency = options.currency,
      language = options.language,
      version = options.version,
      headers = options.headers,
      addCartClass = options.addCartClass,
      throwExceptions = options.throwExceptions,
      isDebug = options.isDebug; // request

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

  this._baseUrl = "".concat(this.protocol, "://").concat(this.hostname, "/api/").concat(this.version);
};

var RequestHelper = /*#__PURE__*/function () {
  function RequestHelper(config) {
    _classCallCheck(this, RequestHelper);

    this.config = config;
  }

  _createClass(RequestHelper, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
        var endpoint, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                endpoint = url[0] === '/' ? url.substr(1) : url;
                _context.next = 4;
                return axios__default['default'].get("".concat(this.config._baseUrl, "/").concat(endpoint));

              case 4:
                response = _context.sent;

                if (!(response.status >= 200 && response.status <= 204)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", response.data);

              case 7:
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                throw Error(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "post",
    value: function () {
      var _post = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, data) {
        var endpoint, response, results;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                endpoint = url[0] === '/' ? url.substr(1) : url;
                _context2.next = 4;
                return axios__default['default'].post("".concat(this.config._baseUrl, "/").concat(endpoint), data);

              case 4:
                response = _context2.sent;

                if (!(response.status >= 200 && response.status <= 204)) {
                  _context2.next = 9;
                  break;
                }

                results = null;

                if (_typeof(response.data) === Object && response.data.hasOwnProperty('data')) {
                  results = response.data.data;
                } else {
                  results = response.data;
                }

                return _context2.abrupt("return", results);

              case 9:
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                throw Error(_context2.t0);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 11]]);
      }));

      function post(_x2, _x3) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
  }]);

  return RequestHelper;
}();

var BaseResource = /*#__PURE__*/function () {
  function BaseResource(config) {
    _classCallCheck(this, BaseResource);

    this.request = new RequestHelper(config);
    this.config = config;
    this.resource = null;
    this.metadata = {};
  }

  _createClass(BaseResource, [{
    key: "Metadata",
    value: function Metadata() {
      this.Meta();
    }
  }, {
    key: "Meta",
    value: function Meta() {
      return this.metadata;
    }
  }, {
    key: "All",
    value: function All() {
      var _this = this;

      return this.request.get(this.resource).then(function (response) {
        if (_typeof(response.data) === 'object') {
          var json = response.data;

          if (json.hasOwnProperty('meta')) {
            _this.metadata = json.meta;
          }

          return json.hasOwnProperty('data') ? json.data : json;
        }

        return response.data;
      });
    }
  }, {
    key: "Get",
    value: function Get() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      if (id === undefined) {
        throw Error('Missing "id" from request');
      }

      return this.request.get("".concat(this.resource, "/").concat(id)).then(function (response) {
        return _typeof(response.data) === 'object' && response.data.hasOwnProperty('data') ? response.data.data : response.data;
      });
    }
  }]);

  return BaseResource;
}();

var SessionResource = /*#__PURE__*/function (_BaseResource) {
  _inherits(SessionResource, _BaseResource);

  var _super = _createSuper(SessionResource);

  function SessionResource(config) {
    var _this;

    _classCallCheck(this, SessionResource);

    _this = _super.call(this, config);
    _this.resource = 'session';
    return _this;
  }

  _createClass(SessionResource, [{
    key: "Guest",
    value: function Guest() {
      return this.request.get(this.resource);
    }
  }, {
    key: "Login",
    value: function Login(username, password) {
      return this.request.post(this.resource, _objectSpread2(_objectSpread2({}, username), password));
    }
  }]);

  return SessionResource;
}(BaseResource);

var ProductResource = /*#__PURE__*/function (_BaseResource) {
  _inherits(ProductResource, _BaseResource);

  var _super = _createSuper(ProductResource);

  function ProductResource(config) {
    var _this;

    _classCallCheck(this, ProductResource);

    _this = _super.call(this, config);
    _this.resource = 'products';
    return _this;
  }

  return ProductResource;
}(BaseResource);

var SmitStore = /*#__PURE__*/function () {
  function SmitStore(config) {
    _classCallCheck(this, SmitStore);

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


  _createClass(SmitStore, [{
    key: "__debug",
    value: function __debug() {
      if (this.config.sdk.isDebug) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        console.debug(args);
      }
    }
    /**
     * TODO: add exception toggle in configuraton
     * @param {*} msg
     */

  }, {
    key: "__error",
    value: function __error(msg) {
      if (this.config.sdk.exceptions) {
        throw Error(msg);
      }
    }
  }, {
    key: "setApiKey",
    value: function setApiKey(apiKey) {
      // TODO: invalid api token should throw error
      this.config.sdk.apiKey = apiKey;
    }
  }, {
    key: "getQueryParameter",
    value: function getQueryParameter(name, url) {
      if (!url) url = location.href;
      name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      var rs = "[\\?&]" + name + "=([^&#]*)";
      var re = new RegExp(rs);
      var r = re.exec(url);
      return r == null ? null : r[1];
    }
    /**
     * TODO: This MUST be initiated upon browser identification.
     */

  }, {
    key: "initBrowser",
    value: function initBrowser() {
      var _this = this;

      var products = document.getElementsByClassName(this.config.addCartClass);

      if (products.length) {
        var _loop = function _loop(index) {
          var product = products[index];
          var productData = product.dataset; // Add to cart handler by listing for click event

          product.addEventListener('click', function (evt) {
            if (evt.isTrusted) {
              evt.preventDefault();

              _this.__debug('add product to cart:', productData.itemId);
            }
          });

          if (!productData.itemId) {
            _this.__error('Missing required "data-item-id" attribute');
          } else if (!productData.itemName) {
            _this.__error('Missing required "data-item-name" attribute');
          } else if (!productData.itemPrice) {
            _this.__error('Missing required "data-item-price" attribute');
          } else if (!productData.itemUrl) {
            _this.__error('Missing required "data-item-url" attribute');
          } // TODO: send indexed products to API for indexing

        };

        for (var index = products.length - 1; index >= 0; index -= 1) {
          _loop(index);
        }
      }
    }
  }]);

  return SmitStore;
}();

var Build = function Build(config) {
  return new SmitStore(new Config(config));
};
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

exports.Build = Build;
exports.default = SmitStore;
