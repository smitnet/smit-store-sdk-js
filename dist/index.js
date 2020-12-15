(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('core-js/modules/es.regexp.constructor'), require('core-js/modules/es.regexp.exec'), require('core-js/modules/es.regexp.to-string'), require('core-js/modules/es.string.replace'), require('core-js/modules/es.array.concat'), require('axios')) :
  typeof define === 'function' && define.amd ? define(['exports', 'core-js/modules/es.regexp.constructor', 'core-js/modules/es.regexp.exec', 'core-js/modules/es.regexp.to-string', 'core-js/modules/es.string.replace', 'core-js/modules/es.array.concat', 'axios'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.SmitStore = {}, null, null, null, null, null, global.axios));
}(this, (function (exports, es_regexp_constructor, es_regexp_exec, es_regexp_toString, es_string_replace, es_array_concat, axios) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

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

  var createClass = _createClass;

  var name = "@smitnet/smit-store-sdk";
  var version = "1.0.15";
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
  	axios: "^0.21.0"
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

  var Config = function Config(options) {
    classCallCheck(this, Config);

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

  var defineProperty = _defineProperty;

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

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
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var runtime = (function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }
    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      "GeneratorFunction"
    );

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;

      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;

          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);

          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    define(Gp, toStringTagSymbol, "Generator");

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
      return this;
    };

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;

  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
     module.exports 
  ));

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
  });

  var regenerator = runtime_1;

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

  var asyncToGenerator = _asyncToGenerator;

  var RequestHelper = /*#__PURE__*/function () {
    function RequestHelper(config) {
      classCallCheck(this, RequestHelper);

      this.config = config;
    }

    createClass(RequestHelper, [{
      key: "get",
      value: function () {
        var _get = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(url) {
          var endpoint, response;
          return regenerator.wrap(function _callee$(_context) {
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
        var _post = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(url, data) {
          var endpoint, response, results;
          return regenerator.wrap(function _callee2$(_context2) {
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

                  if (_typeof_1(response.data) === Object && response.data.hasOwnProperty('data')) {
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
      classCallCheck(this, BaseResource);

      this.request = new RequestHelper(config);
      this.config = config;
      this.resource = null;
      this.metadata = {};
    }

    createClass(BaseResource, [{
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
          if (_typeof_1(response.data) === 'object') {
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
          return _typeof_1(response.data) === 'object' && response.data.hasOwnProperty('data') ? response.data.data : response.data;
        });
      }
    }]);

    return BaseResource;
  }();

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var SessionResource = /*#__PURE__*/function (_BaseResource) {
    inherits(SessionResource, _BaseResource);

    var _super = _createSuper(SessionResource);

    function SessionResource(config) {
      var _this;

      classCallCheck(this, SessionResource);

      _this = _super.call(this, config);
      _this.resource = 'session';
      return _this;
    }

    createClass(SessionResource, [{
      key: "Guest",
      value: function Guest() {
        return this.request.get(this.resource);
      }
    }, {
      key: "Login",
      value: function Login(username, password) {
        return this.request.post(this.resource, _objectSpread(_objectSpread({}, username), password));
      }
    }]);

    return SessionResource;
  }(BaseResource);

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var ProductResource = /*#__PURE__*/function (_BaseResource) {
    inherits(ProductResource, _BaseResource);

    var _super = _createSuper$1(ProductResource);

    function ProductResource(config) {
      var _this;

      classCallCheck(this, ProductResource);

      _this = _super.call(this, config);
      _this.resource = 'products';
      return _this;
    }

    return ProductResource;
  }(BaseResource);

  var SmitStore = /*#__PURE__*/function () {
    function SmitStore(config) {
      classCallCheck(this, SmitStore);

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


    createClass(SmitStore, [{
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

  Object.defineProperty(exports, '__esModule', { value: true });

})));
