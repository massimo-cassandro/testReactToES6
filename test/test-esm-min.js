(function () {
  'use strict';

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function getAugmentedNamespace(n) {
    var f = n.default;
  	if (typeof f == "function") {
  		var a = function a () {
  			if (this instanceof a) {
  				var args = [null];
  				args.push.apply(args, arguments);
  				var Ctor = Function.bind.apply(f, args);
  				return new Ctor();
  			}
  			return f.apply(this, arguments);
  		};
  		a.prototype = f.prototype;
    } else a = {};
    Object.defineProperty(a, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  var react = {exports: {}};

  var react_production_min = {};

  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var l$2 = Symbol.for("react.element"),
    n$1 = Symbol.for("react.portal"),
    p = Symbol.for("react.fragment"),
    q$2 = Symbol.for("react.strict_mode"),
    r$2 = Symbol.for("react.profiler"),
    t$2 = Symbol.for("react.provider"),
    u$2 = Symbol.for("react.context"),
    v$2 = Symbol.for("react.forward_ref"),
    w$2 = Symbol.for("react.suspense"),
    x$2 = Symbol.for("react.memo"),
    y$1 = Symbol.for("react.lazy"),
    z$2 = Symbol.iterator;
  function A$2(a) {
    if (null === a || "object" !== typeof a) return null;
    a = z$2 && a[z$2] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var B$1 = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    C = Object.assign,
    D$1 = {};
  function E$1(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D$1;
    this.updater = e || B$1;
  }
  E$1.prototype.isReactComponent = {};
  E$1.prototype.setState = function (a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  E$1.prototype.forceUpdate = function (a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function F$2() {}
  F$2.prototype = E$1.prototype;
  function G$2(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D$1;
    this.updater = e || B$1;
  }
  var H$2 = G$2.prototype = new F$2();
  H$2.constructor = G$2;
  C(H$2, E$1.prototype);
  H$2.isPureReactComponent = !0;
  var I$2 = Array.isArray,
    J$2 = Object.prototype.hasOwnProperty,
    K$2 = {
      current: null
    },
    L$2 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };
  function M$2(a, b, e) {
    var d,
      c = {},
      k = null,
      h = null;
    if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J$2.call(b, d) && !L$2.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;else if (1 < g) {
      for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
      c.children = f;
    }
    if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
    return {
      $$typeof: l$2,
      type: a,
      key: k,
      ref: h,
      props: c,
      _owner: K$2.current
    };
  }
  function N$2(a, b) {
    return {
      $$typeof: l$2,
      type: a.type,
      key: b,
      ref: a.ref,
      props: a.props,
      _owner: a._owner
    };
  }
  function O$2(a) {
    return "object" === typeof a && null !== a && a.$$typeof === l$2;
  }
  function escape(a) {
    var b = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function (a) {
      return b[a];
    });
  }
  var P$2 = /\/+/g;
  function Q$2(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
  }
  function R$2(a, b, e, d, c) {
    var k = typeof a;
    if ("undefined" === k || "boolean" === k) a = null;
    var h = !1;
    if (null === a) h = !0;else switch (k) {
      case "string":
      case "number":
        h = !0;
        break;
      case "object":
        switch (a.$$typeof) {
          case l$2:
          case n$1:
            h = !0;
        }
    }
    if (h) return h = a, c = c(h), a = "" === d ? "." + Q$2(h, 0) : d, I$2(c) ? (e = "", null != a && (e = a.replace(P$2, "$&/") + "/"), R$2(c, b, e, "", function (a) {
      return a;
    })) : null != c && (O$2(c) && (c = N$2(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$2, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if (I$2(a)) for (var g = 0; g < a.length; g++) {
      k = a[g];
      var f = d + Q$2(k, g);
      h += R$2(k, b, e, f, c);
    } else if (f = A$2(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q$2(k, g++), h += R$2(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
  }
  function S$2(a, b, e) {
    if (null == a) return a;
    var d = [],
      c = 0;
    R$2(a, d, "", "", function (a) {
      return b.call(e, a, c++);
    });
    return d;
  }
  function T$2(a) {
    if (-1 === a._status) {
      var b = a._result;
      b = b();
      b.then(function (b) {
        if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
      }, function (b) {
        if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
      });
      -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
  }
  var U$2 = {
      current: null
    },
    V$2 = {
      transition: null
    },
    W$2 = {
      ReactCurrentDispatcher: U$2,
      ReactCurrentBatchConfig: V$2,
      ReactCurrentOwner: K$2
    };
  react_production_min.Children = {
    map: S$2,
    forEach: function (a, b, e) {
      S$2(a, function () {
        b.apply(this, arguments);
      }, e);
    },
    count: function (a) {
      var b = 0;
      S$2(a, function () {
        b++;
      });
      return b;
    },
    toArray: function (a) {
      return S$2(a, function (a) {
        return a;
      }) || [];
    },
    only: function (a) {
      if (!O$2(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    }
  };
  react_production_min.Component = E$1;
  react_production_min.Fragment = p;
  react_production_min.Profiler = r$2;
  react_production_min.PureComponent = G$2;
  react_production_min.StrictMode = q$2;
  react_production_min.Suspense = w$2;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
  react_production_min.cloneElement = function (a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = C({}, a.props),
      c = a.key,
      k = a.ref,
      h = a._owner;
    if (null != b) {
      void 0 !== b.ref && (k = b.ref, h = K$2.current);
      void 0 !== b.key && (c = "" + b.key);
      if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
      for (f in b) J$2.call(b, f) && !L$2.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;else if (1 < f) {
      g = Array(f);
      for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
      d.children = g;
    }
    return {
      $$typeof: l$2,
      type: a.type,
      key: c,
      ref: k,
      props: d,
      _owner: h
    };
  };
  react_production_min.createContext = function (a) {
    a = {
      $$typeof: u$2,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    };
    a.Provider = {
      $$typeof: t$2,
      _context: a
    };
    return a.Consumer = a;
  };
  react_production_min.createElement = M$2;
  react_production_min.createFactory = function (a) {
    var b = M$2.bind(null, a);
    b.type = a;
    return b;
  };
  react_production_min.createRef = function () {
    return {
      current: null
    };
  };
  react_production_min.forwardRef = function (a) {
    return {
      $$typeof: v$2,
      render: a
    };
  };
  react_production_min.isValidElement = O$2;
  react_production_min.lazy = function (a) {
    return {
      $$typeof: y$1,
      _payload: {
        _status: -1,
        _result: a
      },
      _init: T$2
    };
  };
  react_production_min.memo = function (a, b) {
    return {
      $$typeof: x$2,
      type: a,
      compare: void 0 === b ? null : b
    };
  };
  react_production_min.startTransition = function (a) {
    var b = V$2.transition;
    V$2.transition = {};
    try {
      a();
    } finally {
      V$2.transition = b;
    }
  };
  react_production_min.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  };
  react_production_min.useCallback = function (a, b) {
    return U$2.current.useCallback(a, b);
  };
  react_production_min.useContext = function (a) {
    return U$2.current.useContext(a);
  };
  react_production_min.useDebugValue = function () {};
  react_production_min.useDeferredValue = function (a) {
    return U$2.current.useDeferredValue(a);
  };
  react_production_min.useEffect = function (a, b) {
    return U$2.current.useEffect(a, b);
  };
  react_production_min.useId = function () {
    return U$2.current.useId();
  };
  react_production_min.useImperativeHandle = function (a, b, e) {
    return U$2.current.useImperativeHandle(a, b, e);
  };
  react_production_min.useInsertionEffect = function (a, b) {
    return U$2.current.useInsertionEffect(a, b);
  };
  react_production_min.useLayoutEffect = function (a, b) {
    return U$2.current.useLayoutEffect(a, b);
  };
  react_production_min.useMemo = function (a, b) {
    return U$2.current.useMemo(a, b);
  };
  react_production_min.useReducer = function (a, b, e) {
    return U$2.current.useReducer(a, b, e);
  };
  react_production_min.useRef = function (a) {
    return U$2.current.useRef(a);
  };
  react_production_min.useState = function (a) {
    return U$2.current.useState(a);
  };
  react_production_min.useSyncExternalStore = function (a, b, e) {
    return U$2.current.useSyncExternalStore(a, b, e);
  };
  react_production_min.useTransition = function () {
    return U$2.current.useTransition();
  };
  react_production_min.version = "18.2.0";

  (function (module) {

  	{
  	  module.exports = react_production_min;
  	}
  } (react));

  var React = /*@__PURE__*/getDefaultExportFromCjs(react.exports);

  var reactDomServerLegacy_node_production_min = {};

  var domain;

  // This constructor is used to store event handlers. Instantiating this is
  // faster than explicitly calling `Object.create(null)` to get a "clean" empty
  // object (tested with v8 v4.9).
  function EventHandlers() {}
  EventHandlers.prototype = Object.create(null);

  function EventEmitter() {
    EventEmitter.init.call(this);
  }

  // nodejs oddity
  // require('events') === require('events').EventEmitter
  EventEmitter.EventEmitter = EventEmitter;

  EventEmitter.usingDomains = false;

  EventEmitter.prototype.domain = undefined;
  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;

  // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.
  EventEmitter.defaultMaxListeners = 10;

  EventEmitter.init = function() {
    this.domain = null;
    if (EventEmitter.usingDomains) {
      // if there is an active domain, then attach to it.
      if (domain.active ) ;
    }

    if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
      this._events = new EventHandlers();
      this._eventsCount = 0;
    }

    this._maxListeners = this._maxListeners || undefined;
  };

  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || isNaN(n))
      throw new TypeError('"n" argument must be a positive number');
    this._maxListeners = n;
    return this;
  };

  function $getMaxListeners(that) {
    if (that._maxListeners === undefined)
      return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
  }

  EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return $getMaxListeners(this);
  };

  // These standalone emit* functions are used to optimize calling of event
  // handlers for fast cases because emit() itself often has a variable number of
  // arguments and can be deoptimized because of that. These functions always have
  // the same number of arguments and thus do not get deoptimized, so the code
  // inside them can execute faster.
  function emitNone(handler, isFn, self) {
    if (isFn)
      handler.call(self);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self);
    }
  }
  function emitOne(handler, isFn, self, arg1) {
    if (isFn)
      handler.call(self, arg1);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self, arg1);
    }
  }
  function emitTwo(handler, isFn, self, arg1, arg2) {
    if (isFn)
      handler.call(self, arg1, arg2);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self, arg1, arg2);
    }
  }
  function emitThree(handler, isFn, self, arg1, arg2, arg3) {
    if (isFn)
      handler.call(self, arg1, arg2, arg3);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self, arg1, arg2, arg3);
    }
  }

  function emitMany(handler, isFn, self, args) {
    if (isFn)
      handler.apply(self, args);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].apply(self, args);
    }
  }

  EventEmitter.prototype.emit = function emit(type) {
    var er, handler, len, args, i, events, domain;
    var doError = (type === 'error');

    events = this._events;
    if (events)
      doError = (doError && events.error == null);
    else if (!doError)
      return false;

    domain = this.domain;

    // If there is no 'error' event listener then throw.
    if (doError) {
      er = arguments[1];
      if (domain) {
        if (!er)
          er = new Error('Uncaught, unspecified "error" event');
        er.domainEmitter = this;
        er.domain = domain;
        er.domainThrown = false;
        domain.emit('error', er);
      } else if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
      return false;
    }

    handler = events[type];

    if (!handler)
      return false;

    var isFn = typeof handler === 'function';
    len = arguments.length;
    switch (len) {
      // fast cases
      case 1:
        emitNone(handler, isFn, this);
        break;
      case 2:
        emitOne(handler, isFn, this, arguments[1]);
        break;
      case 3:
        emitTwo(handler, isFn, this, arguments[1], arguments[2]);
        break;
      case 4:
        emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
        break;
      // slower
      default:
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        emitMany(handler, isFn, this, args);
    }

    return true;
  };

  function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;

    if (typeof listener !== 'function')
      throw new TypeError('"listener" argument must be a function');

    events = target._events;
    if (!events) {
      events = target._events = new EventHandlers();
      target._eventsCount = 0;
    } else {
      // To avoid recursion in the case that type === "newListener"! Before
      // adding it to the listeners, first emit "newListener".
      if (events.newListener) {
        target.emit('newListener', type,
                    listener.listener ? listener.listener : listener);

        // Re-assign `events` because a newListener handler could have caused the
        // this._events to be assigned to a new object
        events = target._events;
      }
      existing = events[type];
    }

    if (!existing) {
      // Optimize the case of one listener. Don't need the extra array object.
      existing = events[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === 'function') {
        // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [listener, existing] :
                                            [existing, listener];
      } else {
        // If we've already got an array, just append.
        if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
      }

      // Check for listener leak
      if (!existing.warned) {
        m = $getMaxListeners(target);
        if (m && m > 0 && existing.length > m) {
          existing.warned = true;
          var w = new Error('Possible EventEmitter memory leak detected. ' +
                              existing.length + ' ' + type + ' listeners added. ' +
                              'Use emitter.setMaxListeners() to increase limit');
          w.name = 'MaxListenersExceededWarning';
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          emitWarning(w);
        }
      }
    }

    return target;
  }
  function emitWarning(e) {
    typeof console.warn === 'function' ? console.warn(e) : console.log(e);
  }
  EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };

  EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  EventEmitter.prototype.prependListener =
      function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      };

  function _onceWrap(target, type, listener) {
    var fired = false;
    function g() {
      target.removeListener(type, g);
      if (!fired) {
        fired = true;
        listener.apply(target, arguments);
      }
    }
    g.listener = listener;
    return g;
  }

  EventEmitter.prototype.once = function once(type, listener) {
    if (typeof listener !== 'function')
      throw new TypeError('"listener" argument must be a function');
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };

  EventEmitter.prototype.prependOnceListener =
      function prependOnceListener(type, listener) {
        if (typeof listener !== 'function')
          throw new TypeError('"listener" argument must be a function');
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      };

  // emits a 'removeListener' event iff the listener was removed
  EventEmitter.prototype.removeListener =
      function removeListener(type, listener) {
        var list, events, position, i, originalListener;

        if (typeof listener !== 'function')
          throw new TypeError('"listener" argument must be a function');

        events = this._events;
        if (!events)
          return this;

        list = events[type];
        if (!list)
          return this;

        if (list === listener || (list.listener && list.listener === listener)) {
          if (--this._eventsCount === 0)
            this._events = new EventHandlers();
          else {
            delete events[type];
            if (events.removeListener)
              this.emit('removeListener', type, list.listener || listener);
          }
        } else if (typeof list !== 'function') {
          position = -1;

          for (i = list.length; i-- > 0;) {
            if (list[i] === listener ||
                (list[i].listener && list[i].listener === listener)) {
              originalListener = list[i].listener;
              position = i;
              break;
            }
          }

          if (position < 0)
            return this;

          if (list.length === 1) {
            list[0] = undefined;
            if (--this._eventsCount === 0) {
              this._events = new EventHandlers();
              return this;
            } else {
              delete events[type];
            }
          } else {
            spliceOne(list, position);
          }

          if (events.removeListener)
            this.emit('removeListener', type, originalListener || listener);
        }

        return this;
      };
      
  // Alias for removeListener added in NodeJS 10.0
  // https://nodejs.org/api/events.html#events_emitter_off_eventname_listener
  EventEmitter.prototype.off = function(type, listener){
      return this.removeListener(type, listener);
  };

  EventEmitter.prototype.removeAllListeners =
      function removeAllListeners(type) {
        var listeners, events;

        events = this._events;
        if (!events)
          return this;

        // not listening for removeListener, no need to emit
        if (!events.removeListener) {
          if (arguments.length === 0) {
            this._events = new EventHandlers();
            this._eventsCount = 0;
          } else if (events[type]) {
            if (--this._eventsCount === 0)
              this._events = new EventHandlers();
            else
              delete events[type];
          }
          return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
          var keys = Object.keys(events);
          for (var i = 0, key; i < keys.length; ++i) {
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners('removeListener');
          this._events = new EventHandlers();
          this._eventsCount = 0;
          return this;
        }

        listeners = events[type];

        if (typeof listeners === 'function') {
          this.removeListener(type, listeners);
        } else if (listeners) {
          // LIFO order
          do {
            this.removeListener(type, listeners[listeners.length - 1]);
          } while (listeners[0]);
        }

        return this;
      };

  EventEmitter.prototype.listeners = function listeners(type) {
    var evlistener;
    var ret;
    var events = this._events;

    if (!events)
      ret = [];
    else {
      evlistener = events[type];
      if (!evlistener)
        ret = [];
      else if (typeof evlistener === 'function')
        ret = [evlistener.listener || evlistener];
      else
        ret = unwrapListeners(evlistener);
    }

    return ret;
  };

  EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') {
      return emitter.listenerCount(type);
    } else {
      return listenerCount$1.call(emitter, type);
    }
  };

  EventEmitter.prototype.listenerCount = listenerCount$1;
  function listenerCount$1(type) {
    var events = this._events;

    if (events) {
      var evlistener = events[type];

      if (typeof evlistener === 'function') {
        return 1;
      } else if (evlistener) {
        return evlistener.length;
      }
    }

    return 0;
  }

  EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
  };

  // About 1.5x faster than the two-arg version of Array#splice().
  function spliceOne(list, index) {
    for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
      list[i] = list[k];
    list.pop();
  }

  function arrayClone(arr, i) {
    var copy = new Array(i);
    while (i--)
      copy[i] = arr[i];
    return copy;
  }

  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
      ret[i] = arr[i].listener || arr[i];
    }
    return ret;
  }

  var global$1 = (typeof global !== "undefined" ? global :
    typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window : {});

  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
  var inited = false;
  function init () {
    inited = true;
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }

    revLookup['-'.charCodeAt(0)] = 62;
    revLookup['_'.charCodeAt(0)] = 63;
  }

  function toByteArray (b64) {
    if (!inited) {
      init();
    }
    var i, j, l, tmp, placeHolders, arr;
    var len = b64.length;

    if (len % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4')
    }

    // the number of equal signs (place holders)
    // if there are two placeholders, than the two characters before it
    // represent one byte
    // if there is only one, then the three characters before it represent 2 bytes
    // this is just a cheap hack to not do indexOf twice
    placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

    // base64 is 4/3 + up to two characters of the original data
    arr = new Arr(len * 3 / 4 - placeHolders);

    // if there are placeholders, only get up to the last complete 4 chars
    l = placeHolders > 0 ? len - 4 : len;

    var L = 0;

    for (i = 0, j = 0; i < l; i += 4, j += 3) {
      tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
      arr[L++] = (tmp >> 16) & 0xFF;
      arr[L++] = (tmp >> 8) & 0xFF;
      arr[L++] = tmp & 0xFF;
    }

    if (placeHolders === 2) {
      tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
      arr[L++] = tmp & 0xFF;
    } else if (placeHolders === 1) {
      tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
      arr[L++] = (tmp >> 8) & 0xFF;
      arr[L++] = tmp & 0xFF;
    }

    return arr
  }

  function tripletToBase64 (num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
  }

  function encodeChunk (uint8, start, end) {
    var tmp;
    var output = [];
    for (var i = start; i < end; i += 3) {
      tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
      output.push(tripletToBase64(tmp));
    }
    return output.join('')
  }

  function fromByteArray (uint8) {
    if (!inited) {
      init();
    }
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
    var output = '';
    var parts = [];
    var maxChunkLength = 16383; // must be multiple of 3

    // go through the array every three bytes, we'll deal with trailing stuff later
    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
      parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
    }

    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
      tmp = uint8[len - 1];
      output += lookup[tmp >> 2];
      output += lookup[(tmp << 4) & 0x3F];
      output += '==';
    } else if (extraBytes === 2) {
      tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
      output += lookup[tmp >> 10];
      output += lookup[(tmp >> 4) & 0x3F];
      output += lookup[(tmp << 2) & 0x3F];
      output += '=';
    }

    parts.push(output);

    return parts.join('')
  }

  function read (buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? (nBytes - 1) : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];

    i += d;

    e = s & ((1 << (-nBits)) - 1);
    s >>= (-nBits);
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    m = e & ((1 << (-nBits)) - 1);
    e >>= (-nBits);
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : ((s ? -1 : 1) * Infinity)
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
  }

  function write (buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
    var i = isLE ? 0 : (nBytes - 1);
    var d = isLE ? 1 : -1;
    var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

    value = Math.abs(value);

    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }

      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }

    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

    e = (e << mLen) | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

    buffer[offset + i - d] |= s * 128;
  }

  var toString = {}.toString;

  var isArray$1 = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
  };

  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */

  var INSPECT_MAX_BYTES = 50;

  /**
   * If `Buffer.TYPED_ARRAY_SUPPORT`:
   *   === true    Use Uint8Array implementation (fastest)
   *   === false   Use Object implementation (most compatible, even IE6)
   *
   * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
   * Opera 11.6+, iOS 4.2+.
   *
   * Due to various browser bugs, sometimes the Object implementation will be used even
   * when the browser supports typed arrays.
   *
   * Note:
   *
   *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
   *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
   *
   *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
   *
   *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
   *     incorrect length in some situations.

   * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
   * get the Object implementation, which is slower but behaves correctly.
   */
  Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
    ? global$1.TYPED_ARRAY_SUPPORT
    : true;

  /*
   * Export kMaxLength after typed array support is determined.
   */
  kMaxLength();

  function kMaxLength () {
    return Buffer.TYPED_ARRAY_SUPPORT
      ? 0x7fffffff
      : 0x3fffffff
  }

  function createBuffer (that, length) {
    if (kMaxLength() < length) {
      throw new RangeError('Invalid typed array length')
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      that = new Uint8Array(length);
      that.__proto__ = Buffer.prototype;
    } else {
      // Fallback: Return an object instance of the Buffer class
      if (that === null) {
        that = new Buffer(length);
      }
      that.length = length;
    }

    return that
  }

  /**
   * The Buffer constructor returns instances of `Uint8Array` that have their
   * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
   * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
   * and the `Uint8Array` methods. Square bracket notation works as expected -- it
   * returns a single octet.
   *
   * The `Uint8Array` prototype remains unmodified.
   */

  function Buffer (arg, encodingOrOffset, length) {
    if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
      return new Buffer(arg, encodingOrOffset, length)
    }

    // Common case.
    if (typeof arg === 'number') {
      if (typeof encodingOrOffset === 'string') {
        throw new Error(
          'If encoding is specified then the first argument must be a string'
        )
      }
      return allocUnsafe(this, arg)
    }
    return from(this, arg, encodingOrOffset, length)
  }

  Buffer.poolSize = 8192; // not used by this implementation

  // TODO: Legacy, not needed anymore. Remove in next major version.
  Buffer._augment = function (arr) {
    arr.__proto__ = Buffer.prototype;
    return arr
  };

  function from (that, value, encodingOrOffset, length) {
    if (typeof value === 'number') {
      throw new TypeError('"value" argument must not be a number')
    }

    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
      return fromArrayBuffer(that, value, encodingOrOffset, length)
    }

    if (typeof value === 'string') {
      return fromString(that, value, encodingOrOffset)
    }

    return fromObject(that, value)
  }

  /**
   * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
   * if value is a number.
   * Buffer.from(str[, encoding])
   * Buffer.from(array)
   * Buffer.from(buffer)
   * Buffer.from(arrayBuffer[, byteOffset[, length]])
   **/
  Buffer.from = function (value, encodingOrOffset, length) {
    return from(null, value, encodingOrOffset, length)
  };

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype;
    Buffer.__proto__ = Uint8Array;
    if (typeof Symbol !== 'undefined' && Symbol.species &&
        Buffer[Symbol.species] === Buffer) ;
  }

  function assertSize (size) {
    if (typeof size !== 'number') {
      throw new TypeError('"size" argument must be a number')
    } else if (size < 0) {
      throw new RangeError('"size" argument must not be negative')
    }
  }

  function alloc (that, size, fill, encoding) {
    assertSize(size);
    if (size <= 0) {
      return createBuffer(that, size)
    }
    if (fill !== undefined) {
      // Only pay attention to encoding if it's a string. This
      // prevents accidentally sending in a number that would
      // be interpretted as a start offset.
      return typeof encoding === 'string'
        ? createBuffer(that, size).fill(fill, encoding)
        : createBuffer(that, size).fill(fill)
    }
    return createBuffer(that, size)
  }

  /**
   * Creates a new filled Buffer instance.
   * alloc(size[, fill[, encoding]])
   **/
  Buffer.alloc = function (size, fill, encoding) {
    return alloc(null, size, fill, encoding)
  };

  function allocUnsafe (that, size) {
    assertSize(size);
    that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < size; ++i) {
        that[i] = 0;
      }
    }
    return that
  }

  /**
   * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
   * */
  Buffer.allocUnsafe = function (size) {
    return allocUnsafe(null, size)
  };
  /**
   * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
   */
  Buffer.allocUnsafeSlow = function (size) {
    return allocUnsafe(null, size)
  };

  function fromString (that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
      encoding = 'utf8';
    }

    if (!Buffer.isEncoding(encoding)) {
      throw new TypeError('"encoding" must be a valid string encoding')
    }

    var length = byteLength(string, encoding) | 0;
    that = createBuffer(that, length);

    var actual = that.write(string, encoding);

    if (actual !== length) {
      // Writing a hex string, for example, that contains invalid characters will
      // cause everything after the first invalid character to be ignored. (e.g.
      // 'abxxcd' will be treated as 'ab')
      that = that.slice(0, actual);
    }

    return that
  }

  function fromArrayLike (that, array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    that = createBuffer(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that
  }

  function fromArrayBuffer (that, array, byteOffset, length) {
    array.byteLength; // this throws if `array` is not a valid ArrayBuffer

    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('\'offset\' is out of bounds')
    }

    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('\'length\' is out of bounds')
    }

    if (byteOffset === undefined && length === undefined) {
      array = new Uint8Array(array);
    } else if (length === undefined) {
      array = new Uint8Array(array, byteOffset);
    } else {
      array = new Uint8Array(array, byteOffset, length);
    }

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      that = array;
      that.__proto__ = Buffer.prototype;
    } else {
      // Fallback: Return an object instance of the Buffer class
      that = fromArrayLike(that, array);
    }
    return that
  }

  function fromObject (that, obj) {
    if (internalIsBuffer(obj)) {
      var len = checked(obj.length) | 0;
      that = createBuffer(that, len);

      if (that.length === 0) {
        return that
      }

      obj.copy(that, 0, 0, len);
      return that
    }

    if (obj) {
      if ((typeof ArrayBuffer !== 'undefined' &&
          obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
        if (typeof obj.length !== 'number' || isnan(obj.length)) {
          return createBuffer(that, 0)
        }
        return fromArrayLike(that, obj)
      }

      if (obj.type === 'Buffer' && isArray$1(obj.data)) {
        return fromArrayLike(that, obj.data)
      }
    }

    throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
  }

  function checked (length) {
    // Note: cannot use `length < kMaxLength()` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= kMaxLength()) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                           'size: 0x' + kMaxLength().toString(16) + ' bytes')
    }
    return length | 0
  }
  Buffer.isBuffer = isBuffer$1;
  function internalIsBuffer (b) {
    return !!(b != null && b._isBuffer)
  }

  Buffer.compare = function compare (a, b) {
    if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
      throw new TypeError('Arguments must be Buffers')
    }

    if (a === b) return 0

    var x = a.length;
    var y = b.length;

    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break
      }
    }

    if (x < y) return -1
    if (y < x) return 1
    return 0
  };

  Buffer.isEncoding = function isEncoding (encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true
      default:
        return false
    }
  };

  Buffer.concat = function concat (list, length) {
    if (!isArray$1(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }

    if (list.length === 0) {
      return Buffer.alloc(0)
    }

    var i;
    if (length === undefined) {
      length = 0;
      for (i = 0; i < list.length; ++i) {
        length += list[i].length;
      }
    }

    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for (i = 0; i < list.length; ++i) {
      var buf = list[i];
      if (!internalIsBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }
      buf.copy(buffer, pos);
      pos += buf.length;
    }
    return buffer
  };

  function byteLength (string, encoding) {
    if (internalIsBuffer(string)) {
      return string.length
    }
    if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
        (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
      return string.byteLength
    }
    if (typeof string !== 'string') {
      string = '' + string;
    }

    var len = string.length;
    if (len === 0) return 0

    // Use a for loop to avoid recursion
    var loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return len
        case 'utf8':
        case 'utf-8':
        case undefined:
          return utf8ToBytes(string).length
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2
        case 'hex':
          return len >>> 1
        case 'base64':
          return base64ToBytes(string).length
        default:
          if (loweredCase) return utf8ToBytes(string).length // assume utf8
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.byteLength = byteLength;

  function slowToString (encoding, start, end) {
    var loweredCase = false;

    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.

    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) {
      start = 0;
    }
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) {
      return ''
    }

    if (end === undefined || end > this.length) {
      end = this.length;
    }

    if (end <= 0) {
      return ''
    }

    // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;

    if (end <= start) {
      return ''
    }

    if (!encoding) encoding = 'utf8';

    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end)

        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end)

        case 'ascii':
          return asciiSlice(this, start, end)

        case 'latin1':
        case 'binary':
          return latin1Slice(this, start, end)

        case 'base64':
          return base64Slice(this, start, end)

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end)

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  }

  // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
  // Buffer instances.
  Buffer.prototype._isBuffer = true;

  function swap (b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
  }

  Buffer.prototype.swap16 = function swap16 () {
    var len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 16-bits')
    }
    for (var i = 0; i < len; i += 2) {
      swap(this, i, i + 1);
    }
    return this
  };

  Buffer.prototype.swap32 = function swap32 () {
    var len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 32-bits')
    }
    for (var i = 0; i < len; i += 4) {
      swap(this, i, i + 3);
      swap(this, i + 1, i + 2);
    }
    return this
  };

  Buffer.prototype.swap64 = function swap64 () {
    var len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 64-bits')
    }
    for (var i = 0; i < len; i += 8) {
      swap(this, i, i + 7);
      swap(this, i + 1, i + 6);
      swap(this, i + 2, i + 5);
      swap(this, i + 3, i + 4);
    }
    return this
  };

  Buffer.prototype.toString = function toString () {
    var length = this.length | 0;
    if (length === 0) return ''
    if (arguments.length === 0) return utf8Slice(this, 0, length)
    return slowToString.apply(this, arguments)
  };

  Buffer.prototype.equals = function equals (b) {
    if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
    if (this === b) return true
    return Buffer.compare(this, b) === 0
  };

  Buffer.prototype.inspect = function inspect () {
    var str = '';
    var max = INSPECT_MAX_BYTES;
    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
      if (this.length > max) str += ' ... ';
    }
    return '<Buffer ' + str + '>'
  };

  Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
    if (!internalIsBuffer(target)) {
      throw new TypeError('Argument must be a Buffer')
    }

    if (start === undefined) {
      start = 0;
    }
    if (end === undefined) {
      end = target ? target.length : 0;
    }
    if (thisStart === undefined) {
      thisStart = 0;
    }
    if (thisEnd === undefined) {
      thisEnd = this.length;
    }

    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError('out of range index')
    }

    if (thisStart >= thisEnd && start >= end) {
      return 0
    }
    if (thisStart >= thisEnd) {
      return -1
    }
    if (start >= end) {
      return 1
    }

    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;

    if (this === target) return 0

    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);

    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);

    for (var i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break
      }
    }

    if (x < y) return -1
    if (y < x) return 1
    return 0
  };

  // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
  // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
  //
  // Arguments:
  // - buffer - a Buffer to search
  // - val - a string, Buffer, or number
  // - byteOffset - an index into `buffer`; will be clamped to an int32
  // - encoding - an optional encoding, relevant is val is a string
  // - dir - true for indexOf, false for lastIndexOf
  function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1

    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) {
      byteOffset = 0x7fffffff;
    } else if (byteOffset < -0x80000000) {
      byteOffset = -0x80000000;
    }
    byteOffset = +byteOffset;  // Coerce to Number.
    if (isNaN(byteOffset)) {
      // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
      byteOffset = dir ? 0 : (buffer.length - 1);
    }

    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
      if (dir) return -1
      else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
      if (dir) byteOffset = 0;
      else return -1
    }

    // Normalize val
    if (typeof val === 'string') {
      val = Buffer.from(val, encoding);
    }

    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (internalIsBuffer(val)) {
      // Special case: looking for empty string/buffer always fails
      if (val.length === 0) {
        return -1
      }
      return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
    } else if (typeof val === 'number') {
      val = val & 0xFF; // Search for a byte value [0-255]
      if (Buffer.TYPED_ARRAY_SUPPORT &&
          typeof Uint8Array.prototype.indexOf === 'function') {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
        }
      }
      return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
    }

    throw new TypeError('val must be string, number or Buffer')
  }

  function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;

    if (encoding !== undefined) {
      encoding = String(encoding).toLowerCase();
      if (encoding === 'ucs2' || encoding === 'ucs-2' ||
          encoding === 'utf16le' || encoding === 'utf-16le') {
        if (arr.length < 2 || val.length < 2) {
          return -1
        }
        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }

    function read (buf, i) {
      if (indexSize === 1) {
        return buf[i]
      } else {
        return buf.readUInt16BE(i * indexSize)
      }
    }

    var i;
    if (dir) {
      var foundIndex = -1;
      for (i = byteOffset; i < arrLength; i++) {
        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1) foundIndex = i;
          if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
        } else {
          if (foundIndex !== -1) i -= i - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
      for (i = byteOffset; i >= 0; i--) {
        var found = true;
        for (var j = 0; j < valLength; j++) {
          if (read(arr, i + j) !== read(val, j)) {
            found = false;
            break
          }
        }
        if (found) return i
      }
    }

    return -1
  }

  Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1
  };

  Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
  };

  Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
  };

  function hexWrite (buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }

    // must be an even number of digits
    var strLen = string.length;
    if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

    if (length > strLen / 2) {
      length = strLen / 2;
    }
    for (var i = 0; i < length; ++i) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if (isNaN(parsed)) return i
      buf[offset + i] = parsed;
    }
    return i
  }

  function utf8Write (buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
  }

  function asciiWrite (buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length)
  }

  function latin1Write (buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length)
  }

  function base64Write (buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length)
  }

  function ucs2Write (buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
  }

  Buffer.prototype.write = function write (string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
      offset = offset | 0;
      if (isFinite(length)) {
        length = length | 0;
        if (encoding === undefined) encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      }
    // legacy write(string, encoding, offset, length) - remove in v0.13
    } else {
      throw new Error(
        'Buffer.write(string, encoding, offset[, length]) is no longer supported'
      )
    }

    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;

    if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
      throw new RangeError('Attempt to write outside buffer bounds')
    }

    if (!encoding) encoding = 'utf8';

    var loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length)

        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length)

        case 'ascii':
          return asciiWrite(this, string, offset, length)

        case 'latin1':
        case 'binary':
          return latin1Write(this, string, offset, length)

        case 'base64':
          // Warning: maxLength not taken into account in base64Write
          return base64Write(this, string, offset, length)

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length)

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };

  Buffer.prototype.toJSON = function toJSON () {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    }
  };

  function base64Slice (buf, start, end) {
    if (start === 0 && end === buf.length) {
      return fromByteArray(buf)
    } else {
      return fromByteArray(buf.slice(start, end))
    }
  }

  function utf8Slice (buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];

    var i = start;
    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = (firstByte > 0xEF) ? 4
        : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
        : 1;

      if (i + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint;

        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }
            break
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }
            break
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }
            break
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }
        }
      }

      if (codePoint === null) {
        // we did not generate a valid codePoint so insert a
        // replacement char (U+FFFD) and advance only 1 byte
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        // encode to utf16 (surrogate pair dance)
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }

      res.push(codePoint);
      i += bytesPerSequence;
    }

    return decodeCodePointsArray(res)
  }

  // Based on http://stackoverflow.com/a/22747272/680742, the browser with
  // the lowest limit is Chrome, with 0x10000 args.
  // We go 1 magnitude less, for safety
  var MAX_ARGUMENTS_LENGTH = 0x1000;

  function decodeCodePointsArray (codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    }

    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(
        String,
        codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
      );
    }
    return res
  }

  function asciiSlice (buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret
  }

  function latin1Slice (buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret
  }

  function hexSlice (buf, start, end) {
    var len = buf.length;

    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;

    var out = '';
    for (var i = start; i < end; ++i) {
      out += toHex(buf[i]);
    }
    return out
  }

  function utf16leSlice (buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res
  }

  Buffer.prototype.slice = function slice (start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;

    if (start < 0) {
      start += len;
      if (start < 0) start = 0;
    } else if (start > len) {
      start = len;
    }

    if (end < 0) {
      end += len;
      if (end < 0) end = 0;
    } else if (end > len) {
      end = len;
    }

    if (end < start) end = start;

    var newBuf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      newBuf = this.subarray(start, end);
      newBuf.__proto__ = Buffer.prototype;
    } else {
      var sliceLen = end - start;
      newBuf = new Buffer(sliceLen, undefined);
      for (var i = 0; i < sliceLen; ++i) {
        newBuf[i] = this[i + start];
      }
    }

    return newBuf
  };

  /*
   * Need to make sure that buffer isn't trying to write out of bounds.
   */
  function checkOffset (offset, ext, length) {
    if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
  }

  Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }

    return val
  };

  Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length);
    }

    var val = this[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }

    return val
  };

  Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset]
  };

  Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | (this[offset + 1] << 8)
  };

  Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return (this[offset] << 8) | this[offset + 1]
  };

  Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return ((this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16)) +
        (this[offset + 3] * 0x1000000)
  };

  Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return (this[offset] * 0x1000000) +
      ((this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      this[offset + 3])
  };

  Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) val -= Math.pow(2, 8 * byteLength);

    return val
  };

  Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) val -= Math.pow(2, 8 * byteLength);

    return val
  };

  Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return (this[offset])
    return ((0xff - this[offset] + 1) * -1)
  };

  Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | (this[offset + 1] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val
  };

  Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | (this[offset] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val
  };

  Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return (this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16) |
      (this[offset + 3] << 24)
  };

  Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return (this[offset] << 24) |
      (this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      (this[offset + 3])
  };

  Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return read(this, offset, true, 23, 4)
  };

  Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return read(this, offset, false, 23, 4)
  };

  Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return read(this, offset, true, 52, 8)
  };

  Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return read(this, offset, false, 52, 8)
  };

  function checkInt (buf, value, offset, ext, max, min) {
    if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
    if (offset + ext > buf.length) throw new RangeError('Index out of range')
  }

  Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }

    return offset + byteLength
  };

  Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }

    return offset + byteLength
  };

  Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    this[offset] = (value & 0xff);
    return offset + 1
  };

  function objectWriteUInt16 (buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffff + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
      buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
        (littleEndian ? i : 1 - i) * 8;
    }
  }

  Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2
  };

  Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2
  };

  function objectWriteUInt32 (buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffffffff + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
      buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
    }
  }

  Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset + 3] = (value >>> 24);
      this[offset + 2] = (value >>> 16);
      this[offset + 1] = (value >>> 8);
      this[offset] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4
  };

  Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4
  };

  Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);

      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }

    return offset + byteLength
  };

  Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);

      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }

    return offset + byteLength
  };

  Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = (value & 0xff);
    return offset + 1
  };

  Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2
  };

  Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2
  };

  Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
      this[offset + 2] = (value >>> 16);
      this[offset + 3] = (value >>> 24);
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4
  };

  Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0) value = 0xffffffff + value + 1;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4
  };

  function checkIEEE754 (buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range')
    if (offset < 0) throw new RangeError('Index out of range')
  }

  function writeFloat (buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4);
    }
    write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4
  }

  Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert)
  };

  Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert)
  };

  function writeDouble (buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8);
    }
    write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8
  }

  Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert)
  };

  Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert)
  };

  // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
  Buffer.prototype.copy = function copy (target, targetStart, start, end) {
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;

    // Copy 0 bytes; we're done
    if (end === start) return 0
    if (target.length === 0 || this.length === 0) return 0

    // Fatal error conditions
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds')
    }
    if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
    if (end < 0) throw new RangeError('sourceEnd out of bounds')

    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }

    var len = end - start;
    var i;

    if (this === target && start < targetStart && targetStart < end) {
      // descending copy from end
      for (i = len - 1; i >= 0; --i) {
        target[i + targetStart] = this[i + start];
      }
    } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
      // ascending copy from start
      for (i = 0; i < len; ++i) {
        target[i + targetStart] = this[i + start];
      }
    } else {
      Uint8Array.prototype.set.call(
        target,
        this.subarray(start, start + len),
        targetStart
      );
    }

    return len
  };

  // Usage:
  //    buffer.fill(number[, offset[, end]])
  //    buffer.fill(buffer[, offset[, end]])
  //    buffer.fill(string[, offset[, end]][, encoding])
  Buffer.prototype.fill = function fill (val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
      if (typeof start === 'string') {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === 'string') {
        encoding = end;
        end = this.length;
      }
      if (val.length === 1) {
        var code = val.charCodeAt(0);
        if (code < 256) {
          val = code;
        }
      }
      if (encoding !== undefined && typeof encoding !== 'string') {
        throw new TypeError('encoding must be a string')
      }
      if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding)
      }
    } else if (typeof val === 'number') {
      val = val & 255;
    }

    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError('Out of range index')
    }

    if (end <= start) {
      return this
    }

    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;

    if (!val) val = 0;

    var i;
    if (typeof val === 'number') {
      for (i = start; i < end; ++i) {
        this[i] = val;
      }
    } else {
      var bytes = internalIsBuffer(val)
        ? val
        : utf8ToBytes(new Buffer(val, encoding).toString());
      var len = bytes.length;
      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len];
      }
    }

    return this
  };

  // HELPER FUNCTIONS
  // ================

  var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

  function base64clean (str) {
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = stringtrim(str).replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return ''
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while (str.length % 4 !== 0) {
      str = str + '=';
    }
    return str
  }

  function stringtrim (str) {
    if (str.trim) return str.trim()
    return str.replace(/^\s+|\s+$/g, '')
  }

  function toHex (n) {
    if (n < 16) return '0' + n.toString(16)
    return n.toString(16)
  }

  function utf8ToBytes (string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];

    for (var i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i);

      // is surrogate component
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        // last char was a lead
        if (!leadSurrogate) {
          // no lead yet
          if (codePoint > 0xDBFF) {
            // unexpected trail
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue
          } else if (i + 1 === length) {
            // unpaired lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue
          }

          // valid lead
          leadSurrogate = codePoint;

          continue
        }

        // 2 leads in a row
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue
        }

        // valid surrogate pair
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        // valid bmp char, but last char was a lead
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
      }

      leadSurrogate = null;

      // encode utf8
      if (codePoint < 0x80) {
        if ((units -= 1) < 0) break
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0) break
        bytes.push(
          codePoint >> 0x6 | 0xC0,
          codePoint & 0x3F | 0x80
        );
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0) break
        bytes.push(
          codePoint >> 0xC | 0xE0,
          codePoint >> 0x6 & 0x3F | 0x80,
          codePoint & 0x3F | 0x80
        );
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0) break
        bytes.push(
          codePoint >> 0x12 | 0xF0,
          codePoint >> 0xC & 0x3F | 0x80,
          codePoint >> 0x6 & 0x3F | 0x80,
          codePoint & 0x3F | 0x80
        );
      } else {
        throw new Error('Invalid code point')
      }
    }

    return bytes
  }

  function asciiToBytes (str) {
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
      // Node's code seems to be doing this and not & 0x7F..
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray
  }

  function utf16leToBytes (str, units) {
    var c, hi, lo;
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0) break

      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }

    return byteArray
  }


  function base64ToBytes (str) {
    return toByteArray(base64clean(str))
  }

  function blitBuffer (src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
      if ((i + offset >= dst.length) || (i >= src.length)) break
      dst[i + offset] = src[i];
    }
    return i
  }

  function isnan (val) {
    return val !== val // eslint-disable-line no-self-compare
  }


  // the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
  // The _isBuffer check is for Safari 5-7 support, because it's missing
  // Object.prototype.constructor. Remove this eventually
  function isBuffer$1(obj) {
    return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
  }

  function isFastBuffer (obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
  }

  // For Node v0.10 support. Remove this eventually.
  function isSlowBuffer (obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
  }

  // shim for using process in browser
  // based off https://github.com/defunctzombie/node-process/blob/master/browser.js

  function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout () {
      throw new Error('clearTimeout has not been defined');
  }
  var cachedSetTimeout = defaultSetTimout;
  var cachedClearTimeout = defaultClearTimeout;
  if (typeof global$1.setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
  }
  if (typeof global$1.clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
  }

  function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
      }
      // if setTimeout wasn't available but was latter defined
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
      } catch(e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
          } catch(e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
          }
      }


  }
  function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
      }
      // if clearTimeout wasn't available but was latter defined
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
      } catch (e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
          } catch (e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
          }
      }



  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;

  function cleanUpNextTick() {
      if (!draining || !currentQueue) {
          return;
      }
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }

  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;

      var len = queue.length;
      while(len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
              if (currentQueue) {
                  currentQueue[queueIndex].run();
              }
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
  }
  function nextTick(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
      }
  }
  // v8 likes predictible objects
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  var title = 'browser';
  var platform = 'browser';
  var browser = true;
  var env = {};
  var argv = [];
  var version = ''; // empty string to avoid regexp issues
  var versions = {};
  var release = {};
  var config = {};

  function noop() {}

  var on = noop;
  var addListener = noop;
  var once = noop;
  var off = noop;
  var removeListener = noop;
  var removeAllListeners = noop;
  var emit = noop;

  function binding(name) {
      throw new Error('process.binding is not supported');
  }

  function cwd () { return '/' }
  function chdir (dir) {
      throw new Error('process.chdir is not supported');
  }function umask() { return 0; }

  // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
  var performance = global$1.performance || {};
  var performanceNow =
    performance.now        ||
    performance.mozNow     ||
    performance.msNow      ||
    performance.oNow       ||
    performance.webkitNow  ||
    function(){ return (new Date()).getTime() };

  // generate timestamp or delta
  // see http://nodejs.org/api/process.html#process_process_hrtime
  function hrtime(previousTimestamp){
    var clocktime = performanceNow.call(performance)*1e-3;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor((clocktime%1)*1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds<0) {
        seconds--;
        nanoseconds += 1e9;
      }
    }
    return [seconds,nanoseconds]
  }

  var startTime = new Date();
  function uptime() {
    var currentTime = new Date();
    var dif = currentTime - startTime;
    return dif / 1000;
  }

  var browser$1 = {
    nextTick: nextTick,
    title: title,
    browser: browser,
    env: env,
    argv: argv,
    version: version,
    versions: versions,
    on: on,
    addListener: addListener,
    once: once,
    off: off,
    removeListener: removeListener,
    removeAllListeners: removeAllListeners,
    emit: emit,
    binding: binding,
    cwd: cwd,
    chdir: chdir,
    umask: umask,
    hrtime: hrtime,
    platform: platform,
    release: release,
    config: config,
    uptime: uptime
  };

  var inherits;
  if (typeof Object.create === 'function'){
    inherits = function inherits(ctor, superCtor) {
      // implementation from standard node.js 'util' module
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    };
  } else {
    inherits = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function () {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }
  var inherits$1 = inherits;

  var formatRegExp = /%[sdj%]/g;
  function format(f) {
    if (!isString(f)) {
      var objects = [];
      for (var i = 0; i < arguments.length; i++) {
        objects.push(inspect(arguments[i]));
      }
      return objects.join(' ');
    }

    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x) {
      if (x === '%%') return '%';
      if (i >= len) return x;
      switch (x) {
        case '%s': return String(args[i++]);
        case '%d': return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
        default:
          return x;
      }
    });
    for (var x = args[i]; i < len; x = args[++i]) {
      if (isNull(x) || !isObject(x)) {
        str += ' ' + x;
      } else {
        str += ' ' + inspect(x);
      }
    }
    return str;
  }

  // Mark that a method should not be used.
  // Returns a modified function which warns once by default.
  // If --no-deprecation is set, then it is a no-op.
  function deprecate(fn, msg) {
    // Allow for deprecating things in the process of starting up.
    if (isUndefined(global$1.process)) {
      return function() {
        return deprecate(fn, msg).apply(this, arguments);
      };
    }

    if (browser$1.noDeprecation === true) {
      return fn;
    }

    var warned = false;
    function deprecated() {
      if (!warned) {
        if (browser$1.throwDeprecation) {
          throw new Error(msg);
        } else if (browser$1.traceDeprecation) {
          console.trace(msg);
        } else {
          console.error(msg);
        }
        warned = true;
      }
      return fn.apply(this, arguments);
    }

    return deprecated;
  }

  var debugs = {};
  var debugEnviron;
  function debuglog(set) {
    if (isUndefined(debugEnviron))
      debugEnviron = browser$1.env.NODE_DEBUG || '';
    set = set.toUpperCase();
    if (!debugs[set]) {
      if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
        var pid = 0;
        debugs[set] = function() {
          var msg = format.apply(null, arguments);
          console.error('%s %d: %s', set, pid, msg);
        };
      } else {
        debugs[set] = function() {};
      }
    }
    return debugs[set];
  }

  /**
   * Echos the value of a value. Trys to print the value out
   * in the best way possible given the different types.
   *
   * @param {Object} obj The object to print out.
   * @param {Object} opts Optional options object that alters the output.
   */
  /* legacy: obj, showHidden, depth, colors*/
  function inspect(obj, opts) {
    // default options
    var ctx = {
      seen: [],
      stylize: stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if (isBoolean(opts)) {
      // legacy...
      ctx.showHidden = opts;
    } else if (opts) {
      // got an "options" object
      _extend(ctx, opts);
    }
    // set default options
    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
  }

  // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
  inspect.colors = {
    'bold' : [1, 22],
    'italic' : [3, 23],
    'underline' : [4, 24],
    'inverse' : [7, 27],
    'white' : [37, 39],
    'grey' : [90, 39],
    'black' : [30, 39],
    'blue' : [34, 39],
    'cyan' : [36, 39],
    'green' : [32, 39],
    'magenta' : [35, 39],
    'red' : [31, 39],
    'yellow' : [33, 39]
  };

  // Don't use 'blue' not visible on cmd.exe
  inspect.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    // "name": intentionally not styling
    'regexp': 'red'
  };


  function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];

    if (style) {
      return '\u001b[' + inspect.colors[style][0] + 'm' + str +
             '\u001b[' + inspect.colors[style][1] + 'm';
    } else {
      return str;
    }
  }


  function stylizeNoColor(str, styleType) {
    return str;
  }


  function arrayToHash(array) {
    var hash = {};

    array.forEach(function(val, idx) {
      hash[val] = true;
    });

    return hash;
  }


  function formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect &&
        value &&
        isFunction(value.inspect) &&
        // Filter out the util module, it's inspect function is special
        value.inspect !== inspect &&
        // Also filter out any prototype objects using the circular check.
        !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);
      if (!isString(ret)) {
        ret = formatValue(ctx, ret, recurseTimes);
      }
      return ret;
    }

    // Primitive types cannot have properties
    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
      return primitive;
    }

    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);

    if (ctx.showHidden) {
      keys = Object.getOwnPropertyNames(value);
    }

    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if (isError(value)
        && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
      return formatError(value);
    }

    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
      if (isFunction(value)) {
        var name = value.name ? ': ' + value.name : '';
        return ctx.stylize('[Function' + name + ']', 'special');
      }
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      }
      if (isDate(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), 'date');
      }
      if (isError(value)) {
        return formatError(value);
      }
    }

    var base = '', array = false, braces = ['{', '}'];

    // Make Array say that they are Array
    if (isArray(value)) {
      array = true;
      braces = ['[', ']'];
    }

    // Make functions say that they are functions
    if (isFunction(value)) {
      var n = value.name ? ': ' + value.name : '';
      base = ' [Function' + n + ']';
    }

    // Make RegExps say that they are RegExps
    if (isRegExp(value)) {
      base = ' ' + RegExp.prototype.toString.call(value);
    }

    // Make dates with properties first say the date
    if (isDate(value)) {
      base = ' ' + Date.prototype.toUTCString.call(value);
    }

    // Make error with message first say the error
    if (isError(value)) {
      base = ' ' + formatError(value);
    }

    if (keys.length === 0 && (!array || value.length == 0)) {
      return braces[0] + base + braces[1];
    }

    if (recurseTimes < 0) {
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      } else {
        return ctx.stylize('[Object]', 'special');
      }
    }

    ctx.seen.push(value);

    var output;
    if (array) {
      output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    } else {
      output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
      });
    }

    ctx.seen.pop();

    return reduceToSingleString(output, base, braces);
  }


  function formatPrimitive(ctx, value) {
    if (isUndefined(value))
      return ctx.stylize('undefined', 'undefined');
    if (isString(value)) {
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                               .replace(/'/g, "\\'")
                                               .replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');
    }
    if (isNumber(value))
      return ctx.stylize('' + value, 'number');
    if (isBoolean(value))
      return ctx.stylize('' + value, 'boolean');
    // For some reason typeof null is "object", so special case here.
    if (isNull(value))
      return ctx.stylize('null', 'null');
  }


  function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
  }


  function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for (var i = 0, l = value.length; i < l; ++i) {
      if (hasOwnProperty(value, String(i))) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
            String(i), true));
      } else {
        output.push('');
      }
    }
    keys.forEach(function(key) {
      if (!key.match(/^\d+$/)) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
            key, true));
      }
    });
    return output;
  }


  function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (desc.set) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }
    if (!hasOwnProperty(visibleKeys, key)) {
      name = '[' + key + ']';
    }
    if (!str) {
      if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull(recurseTimes)) {
          str = formatValue(ctx, desc.value, null);
        } else {
          str = formatValue(ctx, desc.value, recurseTimes - 1);
        }
        if (str.indexOf('\n') > -1) {
          if (array) {
            str = str.split('\n').map(function(line) {
              return '  ' + line;
            }).join('\n').substr(2);
          } else {
            str = '\n' + str.split('\n').map(function(line) {
              return '   ' + line;
            }).join('\n');
          }
        }
      } else {
        str = ctx.stylize('[Circular]', 'special');
      }
    }
    if (isUndefined(name)) {
      if (array && key.match(/^\d+$/)) {
        return str;
      }
      name = JSON.stringify('' + key);
      if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name = name.substr(1, name.length - 2);
        name = ctx.stylize(name, 'name');
      } else {
        name = name.replace(/'/g, "\\'")
                   .replace(/\\"/g, '"')
                   .replace(/(^"|"$)/g, "'");
        name = ctx.stylize(name, 'string');
      }
    }

    return name + ': ' + str;
  }


  function reduceToSingleString(output, base, braces) {
    var length = output.reduce(function(prev, cur) {
      if (cur.indexOf('\n') >= 0) ;
      return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);

    if (length > 60) {
      return braces[0] +
             (base === '' ? '' : base + '\n ') +
             ' ' +
             output.join(',\n  ') +
             ' ' +
             braces[1];
    }

    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
  }


  // NOTE: These type checking functions intentionally don't use `instanceof`
  // because it is fragile and can be easily faked with `Object.create()`.
  function isArray(ar) {
    return Array.isArray(ar);
  }

  function isBoolean(arg) {
    return typeof arg === 'boolean';
  }

  function isNull(arg) {
    return arg === null;
  }

  function isNullOrUndefined(arg) {
    return arg == null;
  }

  function isNumber(arg) {
    return typeof arg === 'number';
  }

  function isString(arg) {
    return typeof arg === 'string';
  }

  function isSymbol(arg) {
    return typeof arg === 'symbol';
  }

  function isUndefined(arg) {
    return arg === void 0;
  }

  function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
  }

  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }

  function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
  }

  function isError(e) {
    return isObject(e) &&
        (objectToString(e) === '[object Error]' || e instanceof Error);
  }

  function isFunction(arg) {
    return typeof arg === 'function';
  }

  function isPrimitive(arg) {
    return arg === null ||
           typeof arg === 'boolean' ||
           typeof arg === 'number' ||
           typeof arg === 'string' ||
           typeof arg === 'symbol' ||  // ES6 symbol
           typeof arg === 'undefined';
  }

  function isBuffer(maybeBuf) {
    return Buffer.isBuffer(maybeBuf);
  }

  function objectToString(o) {
    return Object.prototype.toString.call(o);
  }


  function pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
  }


  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'];

  // 26 Feb 16:19:34
  function timestamp() {
    var d = new Date();
    var time = [pad(d.getHours()),
                pad(d.getMinutes()),
                pad(d.getSeconds())].join(':');
    return [d.getDate(), months[d.getMonth()], time].join(' ');
  }


  // log is just a thin wrapper to console.log that prepends a timestamp
  function log() {
    console.log('%s - %s', timestamp(), format.apply(null, arguments));
  }

  function _extend(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !isObject(add)) return origin;

    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }
    return origin;
  }
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  var _polyfillNode_util = {
    inherits: inherits$1,
    _extend: _extend,
    log: log,
    isBuffer: isBuffer,
    isPrimitive: isPrimitive,
    isFunction: isFunction,
    isError: isError,
    isDate: isDate,
    isObject: isObject,
    isRegExp: isRegExp,
    isUndefined: isUndefined,
    isSymbol: isSymbol,
    isString: isString,
    isNumber: isNumber,
    isNullOrUndefined: isNullOrUndefined,
    isNull: isNull,
    isBoolean: isBoolean,
    isArray: isArray,
    inspect: inspect,
    deprecate: deprecate,
    format: format,
    debuglog: debuglog
  };

  var _polyfillNode_util$1 = /*#__PURE__*/Object.freeze({
  	__proto__: null,
  	format: format,
  	deprecate: deprecate,
  	debuglog: debuglog,
  	inspect: inspect,
  	isArray: isArray,
  	isBoolean: isBoolean,
  	isNull: isNull,
  	isNullOrUndefined: isNullOrUndefined,
  	isNumber: isNumber,
  	isString: isString,
  	isSymbol: isSymbol,
  	isUndefined: isUndefined,
  	isRegExp: isRegExp,
  	isObject: isObject,
  	isDate: isDate,
  	isError: isError,
  	isFunction: isFunction,
  	isPrimitive: isPrimitive,
  	isBuffer: isBuffer,
  	log: log,
  	inherits: inherits$1,
  	_extend: _extend,
  	'default': _polyfillNode_util
  });

  function BufferList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function (v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function (v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function () {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function () {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function (s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function (n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      p.data.copy(ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  // Copyright Joyent, Inc. and other Node contributors.
  var isBufferEncoding = Buffer.isEncoding
    || function(encoding) {
         switch (encoding && encoding.toLowerCase()) {
           case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
           default: return false;
         }
       };


  function assertEncoding(encoding) {
    if (encoding && !isBufferEncoding(encoding)) {
      throw new Error('Unknown encoding: ' + encoding);
    }
  }

  // StringDecoder provides an interface for efficiently splitting a series of
  // buffers into a series of JS strings without breaking apart multi-byte
  // characters. CESU-8 is handled as part of the UTF-8 encoding.
  //
  // @TODO Handling all encodings inside a single object makes it very difficult
  // to reason about this code, so it should be split up in the future.
  // @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
  // points as used by CESU-8.
  function StringDecoder(encoding) {
    this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
    assertEncoding(encoding);
    switch (this.encoding) {
      case 'utf8':
        // CESU-8 represents each of Surrogate Pair by 3-bytes
        this.surrogateSize = 3;
        break;
      case 'ucs2':
      case 'utf16le':
        // UTF-16 represents each of Surrogate Pair by 2-bytes
        this.surrogateSize = 2;
        this.detectIncompleteChar = utf16DetectIncompleteChar;
        break;
      case 'base64':
        // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
        this.surrogateSize = 3;
        this.detectIncompleteChar = base64DetectIncompleteChar;
        break;
      default:
        this.write = passThroughWrite;
        return;
    }

    // Enough space to store all bytes of a single character. UTF-8 needs 4
    // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
    this.charBuffer = new Buffer(6);
    // Number of bytes received for the current incomplete multi-byte character.
    this.charReceived = 0;
    // Number of bytes expected for the current incomplete multi-byte character.
    this.charLength = 0;
  }

  // write decodes the given buffer and returns it as JS string that is
  // guaranteed to not contain any partial multi-byte characters. Any partial
  // character found at the end of the buffer is buffered up, and will be
  // returned when calling write again with the remaining bytes.
  //
  // Note: Converting a Buffer containing an orphan surrogate to a String
  // currently works, but converting a String to a Buffer (via `new Buffer`, or
  // Buffer#write) will replace incomplete surrogates with the unicode
  // replacement character. See https://codereview.chromium.org/121173009/ .
  StringDecoder.prototype.write = function(buffer) {
    var charStr = '';
    // if our last write ended with an incomplete multibyte character
    while (this.charLength) {
      // determine how many remaining bytes this buffer has to offer for this char
      var available = (buffer.length >= this.charLength - this.charReceived) ?
          this.charLength - this.charReceived :
          buffer.length;

      // add the new bytes to the char buffer
      buffer.copy(this.charBuffer, this.charReceived, 0, available);
      this.charReceived += available;

      if (this.charReceived < this.charLength) {
        // still not enough chars in this buffer? wait for more ...
        return '';
      }

      // remove bytes belonging to the current character from the buffer
      buffer = buffer.slice(available, buffer.length);

      // get the character that was split
      charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

      // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
      var charCode = charStr.charCodeAt(charStr.length - 1);
      if (charCode >= 0xD800 && charCode <= 0xDBFF) {
        this.charLength += this.surrogateSize;
        charStr = '';
        continue;
      }
      this.charReceived = this.charLength = 0;

      // if there are no more bytes in this buffer, just emit our char
      if (buffer.length === 0) {
        return charStr;
      }
      break;
    }

    // determine and set charLength / charReceived
    this.detectIncompleteChar(buffer);

    var end = buffer.length;
    if (this.charLength) {
      // buffer the incomplete character bytes we got
      buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
      end -= this.charReceived;
    }

    charStr += buffer.toString(this.encoding, 0, end);

    var end = charStr.length - 1;
    var charCode = charStr.charCodeAt(end);
    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      var size = this.surrogateSize;
      this.charLength += size;
      this.charReceived += size;
      this.charBuffer.copy(this.charBuffer, size, 0, size);
      buffer.copy(this.charBuffer, 0, 0, size);
      return charStr.substring(0, end);
    }

    // or just emit the charStr
    return charStr;
  };

  // detectIncompleteChar determines if there is an incomplete UTF-8 character at
  // the end of the given buffer. If so, it sets this.charLength to the byte
  // length that character, and sets this.charReceived to the number of bytes
  // that are available for this character.
  StringDecoder.prototype.detectIncompleteChar = function(buffer) {
    // determine how many bytes we have to check at the end of this buffer
    var i = (buffer.length >= 3) ? 3 : buffer.length;

    // Figure out if one of the last i bytes of our buffer announces an
    // incomplete char.
    for (; i > 0; i--) {
      var c = buffer[buffer.length - i];

      // See http://en.wikipedia.org/wiki/UTF-8#Description

      // 110XXXXX
      if (i == 1 && c >> 5 == 0x06) {
        this.charLength = 2;
        break;
      }

      // 1110XXXX
      if (i <= 2 && c >> 4 == 0x0E) {
        this.charLength = 3;
        break;
      }

      // 11110XXX
      if (i <= 3 && c >> 3 == 0x1E) {
        this.charLength = 4;
        break;
      }
    }
    this.charReceived = i;
  };

  StringDecoder.prototype.end = function(buffer) {
    var res = '';
    if (buffer && buffer.length)
      res = this.write(buffer);

    if (this.charReceived) {
      var cr = this.charReceived;
      var buf = this.charBuffer;
      var enc = this.encoding;
      res += buf.slice(0, cr).toString(enc);
    }

    return res;
  };

  function passThroughWrite(buffer) {
    return buffer.toString(this.encoding);
  }

  function utf16DetectIncompleteChar(buffer) {
    this.charReceived = buffer.length % 2;
    this.charLength = this.charReceived ? 2 : 0;
  }

  function base64DetectIncompleteChar(buffer) {
    this.charReceived = buffer.length % 3;
    this.charLength = this.charReceived ? 3 : 0;
  }

  Readable.ReadableState = ReadableState;

  var debug = debuglog('stream');
  inherits$1(Readable, EventEmitter);

  function prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === 'function') {
      return emitter.prependListener(event, fn);
    } else {
      // This is a hack to make sure that our error handler is attached before any
      // userland ones.  NEVER DO THIS. This is here only because this code needs
      // to continue to work with older versions of Node.js that do not include
      // the prependListener() method. The goal is to eventually remove this hack.
      if (!emitter._events || !emitter._events[event])
        emitter.on(event, fn);
      else if (Array.isArray(emitter._events[event]))
        emitter._events[event].unshift(fn);
      else
        emitter._events[event] = [fn, emitter._events[event]];
    }
  }
  function listenerCount (emitter, type) {
    return emitter.listeners(type).length;
  }
  function ReadableState(options, stream) {

    options = options || {};

    // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;

    if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

    // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    var hwm = options.highWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

    // cast to ints.
    this.highWaterMark = ~ ~this.highWaterMark;

    // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;

    // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true;

    // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;

    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8';

    // when piping, we only care about 'readable' events that happen
    // after read()ing all the bytes and not getting any pushback.
    this.ranOut = false;

    // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0;

    // if true, a maybeReadMore has been scheduled
    this.readingMore = false;

    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
      this.decoder = new StringDecoder(options.encoding);
      this.encoding = options.encoding;
    }
  }
  function Readable(options) {

    if (!(this instanceof Readable)) return new Readable(options);

    this._readableState = new ReadableState(options, this);

    // legacy
    this.readable = true;

    if (options && typeof options.read === 'function') this._read = options.read;

    EventEmitter.call(this);
  }

  // Manually shove something into the read() buffer.
  // This returns true if the highWaterMark has not been hit yet,
  // similar to how Writable.write() returns true if you should
  // write() some more.
  Readable.prototype.push = function (chunk, encoding) {
    var state = this._readableState;

    if (!state.objectMode && typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
    }

    return readableAddChunk(this, state, chunk, encoding, false);
  };

  // Unshift should *always* be something directly out of read()
  Readable.prototype.unshift = function (chunk) {
    var state = this._readableState;
    return readableAddChunk(this, state, chunk, '', true);
  };

  Readable.prototype.isPaused = function () {
    return this._readableState.flowing === false;
  };

  function readableAddChunk(stream, state, chunk, encoding, addToFront) {
    var er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (chunk === null) {
      state.reading = false;
      onEofChunk(stream, state);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (state.ended && !addToFront) {
        var e = new Error('stream.push() after EOF');
        stream.emit('error', e);
      } else if (state.endEmitted && addToFront) {
        var _e = new Error('stream.unshift() after end event');
        stream.emit('error', _e);
      } else {
        var skipAdd;
        if (state.decoder && !addToFront && !encoding) {
          chunk = state.decoder.write(chunk);
          skipAdd = !state.objectMode && chunk.length === 0;
        }

        if (!addToFront) state.reading = false;

        // Don't add to the buffer if we've decoded to an empty string chunk and
        // we're not in object mode
        if (!skipAdd) {
          // if we want the data now, just emit it.
          if (state.flowing && state.length === 0 && !state.sync) {
            stream.emit('data', chunk);
            stream.read(0);
          } else {
            // update the buffer info.
            state.length += state.objectMode ? 1 : chunk.length;
            if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

            if (state.needReadable) emitReadable(stream);
          }
        }

        maybeReadMore(stream, state);
      }
    } else if (!addToFront) {
      state.reading = false;
    }

    return needMoreData(state);
  }

  // if it's past the high water mark, we can push in some more.
  // Also, if we have no data yet, we can stand some
  // more bytes.  This is to work around cases where hwm=0,
  // such as the repl.  Also, if the push() triggered a
  // readable event, and the user called read(largeNumber) such that
  // needReadable was set, then we ought to push more, so that another
  // 'readable' event will be triggered.
  function needMoreData(state) {
    return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
  }

  // backwards compatibility.
  Readable.prototype.setEncoding = function (enc) {
    this._readableState.decoder = new StringDecoder(enc);
    this._readableState.encoding = enc;
    return this;
  };

  // Don't raise the hwm > 8MB
  var MAX_HWM = 0x800000;
  function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) {
      n = MAX_HWM;
    } else {
      // Get the next highest power of 2 to prevent increasing hwm excessively in
      // tiny amounts
      n--;
      n |= n >>> 1;
      n |= n >>> 2;
      n |= n >>> 4;
      n |= n >>> 8;
      n |= n >>> 16;
      n++;
    }
    return n;
  }

  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.
  function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
      // Only flow one buffer at a time
      if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
    }
    // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length) return n;
    // Don't have enough
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    }
    return state.length;
  }

  // you can override either this method, or the async _read(n) below.
  Readable.prototype.read = function (n) {
    debug('read', n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;

    if (n !== 0) state.emittedReadable = false;

    // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
      debug('read: emitReadable', state.length, state.ended);
      if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
      return null;
    }

    n = howMuchToRead(n, state);

    // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
      if (state.length === 0) endReadable(this);
      return null;
    }

    // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.

    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    debug('need readable', doRead);

    // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
      doRead = true;
      debug('length less than watermark', doRead);
    }

    // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
      doRead = false;
      debug('reading or ended', doRead);
    } else if (doRead) {
      debug('do read');
      state.reading = true;
      state.sync = true;
      // if the length is currently zero, then we *need* a readable event.
      if (state.length === 0) state.needReadable = true;
      // call internal read method
      this._read(state.highWaterMark);
      state.sync = false;
      // If _read pushed data synchronously, then `reading` will be false,
      // and we need to re-evaluate how much data we can return to the user.
      if (!state.reading) n = howMuchToRead(nOrig, state);
    }

    var ret;
    if (n > 0) ret = fromList(n, state);else ret = null;

    if (ret === null) {
      state.needReadable = true;
      n = 0;
    } else {
      state.length -= n;
    }

    if (state.length === 0) {
      // If we have nothing in the buffer, then we want to know
      // as soon as we *do* get something into the buffer.
      if (!state.ended) state.needReadable = true;

      // If we tried to read() past the EOF, then emit end on the next tick.
      if (nOrig !== n && state.ended) endReadable(this);
    }

    if (ret !== null) this.emit('data', ret);

    return ret;
  };

  function chunkInvalid(state, chunk) {
    var er = null;
    if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
      er = new TypeError('Invalid non-string/buffer chunk');
    }
    return er;
  }

  function onEofChunk(stream, state) {
    if (state.ended) return;
    if (state.decoder) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) {
        state.buffer.push(chunk);
        state.length += state.objectMode ? 1 : chunk.length;
      }
    }
    state.ended = true;

    // emit 'readable' now to make sure it gets picked up.
    emitReadable(stream);
  }

  // Don't emit readable right away in sync mode, because this can trigger
  // another read() call => stack overflow.  This way, it might trigger
  // a nextTick recursion warning, but that's not so bad.
  function emitReadable(stream) {
    var state = stream._readableState;
    state.needReadable = false;
    if (!state.emittedReadable) {
      debug('emitReadable', state.flowing);
      state.emittedReadable = true;
      if (state.sync) nextTick(emitReadable_, stream);else emitReadable_(stream);
    }
  }

  function emitReadable_(stream) {
    debug('emit readable');
    stream.emit('readable');
    flow(stream);
  }

  // at this point, the user has presumably seen the 'readable' event,
  // and called read() to consume some data.  that may have triggered
  // in turn another _read(n) call, in which case reading = true if
  // it's in progress.
  // However, if we're not ended, or reading, and the length < hwm,
  // then go ahead and try to read some more preemptively.
  function maybeReadMore(stream, state) {
    if (!state.readingMore) {
      state.readingMore = true;
      nextTick(maybeReadMore_, stream, state);
    }
  }

  function maybeReadMore_(stream, state) {
    var len = state.length;
    while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
      debug('maybeReadMore read 0');
      stream.read(0);
      if (len === state.length)
        // didn't get any data, stop spinning.
        break;else len = state.length;
    }
    state.readingMore = false;
  }

  // abstract method.  to be overridden in specific implementation classes.
  // call cb(er, data) where data is <= n in length.
  // for virtual (non-string, non-buffer) streams, "length" is somewhat
  // arbitrary, and perhaps not very meaningful.
  Readable.prototype._read = function (n) {
    this.emit('error', new Error('not implemented'));
  };

  Readable.prototype.pipe = function (dest, pipeOpts) {
    var src = this;
    var state = this._readableState;

    switch (state.pipesCount) {
      case 0:
        state.pipes = dest;
        break;
      case 1:
        state.pipes = [state.pipes, dest];
        break;
      default:
        state.pipes.push(dest);
        break;
    }
    state.pipesCount += 1;
    debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

    var doEnd = (!pipeOpts || pipeOpts.end !== false);

    var endFn = doEnd ? onend : cleanup;
    if (state.endEmitted) nextTick(endFn);else src.once('end', endFn);

    dest.on('unpipe', onunpipe);
    function onunpipe(readable) {
      debug('onunpipe');
      if (readable === src) {
        cleanup();
      }
    }

    function onend() {
      debug('onend');
      dest.end();
    }

    // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = pipeOnDrain(src);
    dest.on('drain', ondrain);

    var cleanedUp = false;
    function cleanup() {
      debug('cleanup');
      // cleanup event handlers once the pipe is broken
      dest.removeListener('close', onclose);
      dest.removeListener('finish', onfinish);
      dest.removeListener('drain', ondrain);
      dest.removeListener('error', onerror);
      dest.removeListener('unpipe', onunpipe);
      src.removeListener('end', onend);
      src.removeListener('end', cleanup);
      src.removeListener('data', ondata);

      cleanedUp = true;

      // if the reader is waiting for a drain event from this
      // specific writer, then it would cause it to never start
      // flowing again.
      // So, if this is awaiting a drain, then we just call it now.
      // If we don't know, then assume that we are waiting for one.
      if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }

    // If the user pushes more data while we're writing to dest then we'll end up
    // in ondata again. However, we only want to increase awaitDrain once because
    // dest will only emit one 'drain' event for the multiple writes.
    // => Introduce a guard on increasing awaitDrain.
    var increasedAwaitDrain = false;
    src.on('data', ondata);
    function ondata(chunk) {
      debug('ondata');
      increasedAwaitDrain = false;
      var ret = dest.write(chunk);
      if (false === ret && !increasedAwaitDrain) {
        // If the user unpiped during `dest.write()`, it is possible
        // to get stuck in a permanently paused state if that write
        // also returned false.
        // => Check whether `dest` is still a piping destination.
        if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
          debug('false write response, pause', src._readableState.awaitDrain);
          src._readableState.awaitDrain++;
          increasedAwaitDrain = true;
        }
        src.pause();
      }
    }

    // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
      debug('onerror', er);
      unpipe();
      dest.removeListener('error', onerror);
      if (listenerCount(dest, 'error') === 0) dest.emit('error', er);
    }

    // Make sure our error handler is attached before userland ones.
    prependListener(dest, 'error', onerror);

    // Both close and finish should trigger unpipe, but only once.
    function onclose() {
      dest.removeListener('finish', onfinish);
      unpipe();
    }
    dest.once('close', onclose);
    function onfinish() {
      debug('onfinish');
      dest.removeListener('close', onclose);
      unpipe();
    }
    dest.once('finish', onfinish);

    function unpipe() {
      debug('unpipe');
      src.unpipe(dest);
    }

    // tell the dest that it's being piped to
    dest.emit('pipe', src);

    // start the flow if it hasn't been started already.
    if (!state.flowing) {
      debug('pipe resume');
      src.resume();
    }

    return dest;
  };

  function pipeOnDrain(src) {
    return function () {
      var state = src._readableState;
      debug('pipeOnDrain', state.awaitDrain);
      if (state.awaitDrain) state.awaitDrain--;
      if (state.awaitDrain === 0 && src.listeners('data').length) {
        state.flowing = true;
        flow(src);
      }
    };
  }

  Readable.prototype.unpipe = function (dest) {
    var state = this._readableState;

    // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this;

    // just one destination.  most common case.
    if (state.pipesCount === 1) {
      // passed in one, but it's not the right one.
      if (dest && dest !== state.pipes) return this;

      if (!dest) dest = state.pipes;

      // got a match.
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      if (dest) dest.emit('unpipe', this);
      return this;
    }

    // slow case. multiple pipe destinations.

    if (!dest) {
      // remove all.
      var dests = state.pipes;
      var len = state.pipesCount;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;

      for (var _i = 0; _i < len; _i++) {
        dests[_i].emit('unpipe', this);
      }return this;
    }

    // try to find the right one.
    var i = indexOf(state.pipes, dest);
    if (i === -1) return this;

    state.pipes.splice(i, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];

    dest.emit('unpipe', this);

    return this;
  };

  // set up data events if they are asked for
  // Ensure readable listeners eventually get something
  Readable.prototype.on = function (ev, fn) {
    var res = EventEmitter.prototype.on.call(this, ev, fn);

    if (ev === 'data') {
      // Start flowing on next tick if stream isn't explicitly paused
      if (this._readableState.flowing !== false) this.resume();
    } else if (ev === 'readable') {
      var state = this._readableState;
      if (!state.endEmitted && !state.readableListening) {
        state.readableListening = state.needReadable = true;
        state.emittedReadable = false;
        if (!state.reading) {
          nextTick(nReadingNextTick, this);
        } else if (state.length) {
          emitReadable(this);
        }
      }
    }

    return res;
  };
  Readable.prototype.addListener = Readable.prototype.on;

  function nReadingNextTick(self) {
    debug('readable nexttick read 0');
    self.read(0);
  }

  // pause() and resume() are remnants of the legacy readable stream API
  // If the user uses them, then switch into old mode.
  Readable.prototype.resume = function () {
    var state = this._readableState;
    if (!state.flowing) {
      debug('resume');
      state.flowing = true;
      resume(this, state);
    }
    return this;
  };

  function resume(stream, state) {
    if (!state.resumeScheduled) {
      state.resumeScheduled = true;
      nextTick(resume_, stream, state);
    }
  }

  function resume_(stream, state) {
    if (!state.reading) {
      debug('resume read 0');
      stream.read(0);
    }

    state.resumeScheduled = false;
    state.awaitDrain = 0;
    stream.emit('resume');
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
  }

  Readable.prototype.pause = function () {
    debug('call pause flowing=%j', this._readableState.flowing);
    if (false !== this._readableState.flowing) {
      debug('pause');
      this._readableState.flowing = false;
      this.emit('pause');
    }
    return this;
  };

  function flow(stream) {
    var state = stream._readableState;
    debug('flow', state.flowing);
    while (state.flowing && stream.read() !== null) {}
  }

  // wrap an old-style stream as the async data source.
  // This is *not* part of the readable stream interface.
  // It is an ugly unfortunate mess of history.
  Readable.prototype.wrap = function (stream) {
    var state = this._readableState;
    var paused = false;

    var self = this;
    stream.on('end', function () {
      debug('wrapped end');
      if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) self.push(chunk);
      }

      self.push(null);
    });

    stream.on('data', function (chunk) {
      debug('wrapped data');
      if (state.decoder) chunk = state.decoder.write(chunk);

      // don't skip over falsy values in objectMode
      if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

      var ret = self.push(chunk);
      if (!ret) {
        paused = true;
        stream.pause();
      }
    });

    // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for (var i in stream) {
      if (this[i] === undefined && typeof stream[i] === 'function') {
        this[i] = function (method) {
          return function () {
            return stream[method].apply(stream, arguments);
          };
        }(i);
      }
    }

    // proxy certain important events.
    var events = ['error', 'close', 'destroy', 'pause', 'resume'];
    forEach(events, function (ev) {
      stream.on(ev, self.emit.bind(self, ev));
    });

    // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    self._read = function (n) {
      debug('wrapped _read', n);
      if (paused) {
        paused = false;
        stream.resume();
      }
    };

    return self;
  };

  // exposed for testing purposes only.
  Readable._fromList = fromList;

  // Pluck off n bytes from an array of buffers.
  // Length is the combined lengths of all the buffers in the list.
  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.
  function fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;

    var ret;
    if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
      // read it all, truncate the list
      if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
      state.buffer.clear();
    } else {
      // read part of list
      ret = fromListPartial(n, state.buffer, state.decoder);
    }

    return ret;
  }

  // Extracts only enough buffered data to satisfy the amount requested.
  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.
  function fromListPartial(n, list, hasStrings) {
    var ret;
    if (n < list.head.data.length) {
      // slice is the same for buffers and strings
      ret = list.head.data.slice(0, n);
      list.head.data = list.head.data.slice(n);
    } else if (n === list.head.data.length) {
      // first chunk is a perfect match
      ret = list.shift();
    } else {
      // result spans more than one buffer
      ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
    }
    return ret;
  }

  // Copies a specified amount of characters from the list of buffered data
  // chunks.
  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.
  function copyFromBufferString(n, list) {
    var p = list.head;
    var c = 1;
    var ret = p.data;
    n -= ret.length;
    while (p = p.next) {
      var str = p.data;
      var nb = n > str.length ? str.length : n;
      if (nb === str.length) ret += str;else ret += str.slice(0, n);
      n -= nb;
      if (n === 0) {
        if (nb === str.length) {
          ++c;
          if (p.next) list.head = p.next;else list.head = list.tail = null;
        } else {
          list.head = p;
          p.data = str.slice(nb);
        }
        break;
      }
      ++c;
    }
    list.length -= c;
    return ret;
  }

  // Copies a specified amount of bytes from the list of buffered data chunks.
  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.
  function copyFromBuffer(n, list) {
    var ret = Buffer.allocUnsafe(n);
    var p = list.head;
    var c = 1;
    p.data.copy(ret);
    n -= p.data.length;
    while (p = p.next) {
      var buf = p.data;
      var nb = n > buf.length ? buf.length : n;
      buf.copy(ret, ret.length - n, 0, nb);
      n -= nb;
      if (n === 0) {
        if (nb === buf.length) {
          ++c;
          if (p.next) list.head = p.next;else list.head = list.tail = null;
        } else {
          list.head = p;
          p.data = buf.slice(nb);
        }
        break;
      }
      ++c;
    }
    list.length -= c;
    return ret;
  }

  function endReadable(stream) {
    var state = stream._readableState;

    // If we get here before consuming all the bytes, then that is a
    // bug in node.  Should never happen.
    if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

    if (!state.endEmitted) {
      state.ended = true;
      nextTick(endReadableNT, state, stream);
    }
  }

  function endReadableNT(state, stream) {
    // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
      state.endEmitted = true;
      stream.readable = false;
      stream.emit('end');
    }
  }

  function forEach(xs, f) {
    for (var i = 0, l = xs.length; i < l; i++) {
      f(xs[i], i);
    }
  }

  function indexOf(xs, x) {
    for (var i = 0, l = xs.length; i < l; i++) {
      if (xs[i] === x) return i;
    }
    return -1;
  }

  // A bit simpler than readable streams.
  Writable.WritableState = WritableState;
  inherits$1(Writable, EventEmitter);

  function nop() {}

  function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
  }

  function WritableState(options, stream) {
    Object.defineProperty(this, 'buffer', {
      get: deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
    });
    options = options || {};

    // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;

    if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

    // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    var hwm = options.highWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

    // cast to ints.
    this.highWaterMark = ~ ~this.highWaterMark;

    this.needDrain = false;
    // at the start of calling end()
    this.ending = false;
    // when end() has been called, and returned
    this.ended = false;
    // when 'finish' is emitted
    this.finished = false;

    // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;

    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8';

    // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0;

    // a flag to see when we're in the middle of a write.
    this.writing = false;

    // when true all writes will be buffered until .uncork() call
    this.corked = 0;

    // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true;

    // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false;

    // the callback that's passed to _write(chunk,cb)
    this.onwrite = function (er) {
      onwrite(stream, er);
    };

    // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null;

    // the amount that is being written when _write is called.
    this.writelen = 0;

    this.bufferedRequest = null;
    this.lastBufferedRequest = null;

    // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0;

    // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false;

    // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false;

    // count buffered requests
    this.bufferedRequestCount = 0;

    // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new CorkedRequest(this);
  }

  WritableState.prototype.getBuffer = function writableStateGetBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while (current) {
      out.push(current);
      current = current.next;
    }
    return out;
  };
  function Writable(options) {

    // Writable ctor is applied to Duplexes, though they're not
    // instanceof Writable, they're instanceof Readable.
    if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

    this._writableState = new WritableState(options, this);

    // legacy.
    this.writable = true;

    if (options) {
      if (typeof options.write === 'function') this._write = options.write;

      if (typeof options.writev === 'function') this._writev = options.writev;
    }

    EventEmitter.call(this);
  }

  // Otherwise people can pipe Writable streams, which is just wrong.
  Writable.prototype.pipe = function () {
    this.emit('error', new Error('Cannot pipe, not readable'));
  };

  function writeAfterEnd(stream, cb) {
    var er = new Error('write after end');
    // TODO: defer error events consistently everywhere, not just the cb
    stream.emit('error', er);
    nextTick(cb, er);
  }

  // If we get something that is not a buffer, string, null, or undefined,
  // and we're not in objectMode, then that's an error.
  // Otherwise stream chunks are all considered to be of length=1, and the
  // watermarks determine how many objects to keep in the buffer, rather than
  // how many bytes or characters.
  function validChunk(stream, state, chunk, cb) {
    var valid = true;
    var er = false;
    // Always throw error if a null is written
    // if we are not in object mode then throw
    // if it is not a buffer, string, or undefined.
    if (chunk === null) {
      er = new TypeError('May not write null values to stream');
    } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
      er = new TypeError('Invalid non-string/buffer chunk');
    }
    if (er) {
      stream.emit('error', er);
      nextTick(cb, er);
      valid = false;
    }
    return valid;
  }

  Writable.prototype.write = function (chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;

    if (typeof encoding === 'function') {
      cb = encoding;
      encoding = null;
    }

    if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

    if (typeof cb !== 'function') cb = nop;

    if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
      state.pendingcb++;
      ret = writeOrBuffer(this, state, chunk, encoding, cb);
    }

    return ret;
  };

  Writable.prototype.cork = function () {
    var state = this._writableState;

    state.corked++;
  };

  Writable.prototype.uncork = function () {
    var state = this._writableState;

    if (state.corked) {
      state.corked--;

      if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
    }
  };

  Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === 'string') encoding = encoding.toLowerCase();
    if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
  };

  function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
      chunk = Buffer.from(chunk, encoding);
    }
    return chunk;
  }

  // if we're already writing something, then just put this
  // in the queue, and wait our turn.  Otherwise, call _write
  // If we return false, then we need a drain event, so set that flag.
  function writeOrBuffer(stream, state, chunk, encoding, cb) {
    chunk = decodeChunk(state, chunk, encoding);

    if (Buffer.isBuffer(chunk)) encoding = 'buffer';
    var len = state.objectMode ? 1 : chunk.length;

    state.length += len;

    var ret = state.length < state.highWaterMark;
    // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;

    if (state.writing || state.corked) {
      var last = state.lastBufferedRequest;
      state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
      if (last) {
        last.next = state.lastBufferedRequest;
      } else {
        state.bufferedRequest = state.lastBufferedRequest;
      }
      state.bufferedRequestCount += 1;
    } else {
      doWrite(stream, state, false, len, chunk, encoding, cb);
    }

    return ret;
  }

  function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
  }

  function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) nextTick(cb, er);else cb(er);

    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  }

  function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
  }

  function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;

    onwriteStateUpdate(state);

    if (er) onwriteError(stream, state, sync, er, cb);else {
      // Check if we're actually ready to finish, but don't emit yet
      var finished = needFinish(state);

      if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
        clearBuffer(stream, state);
      }

      if (sync) {
        /*<replacement>*/
          nextTick(afterWrite, stream, state, finished, cb);
        /*</replacement>*/
      } else {
          afterWrite(stream, state, finished, cb);
        }
    }
  }

  function afterWrite(stream, state, finished, cb) {
    if (!finished) onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
  }

  // Must force callback to be called on nextTick, so that we don't
  // emit 'drain' before the write() consumer gets the 'false' return
  // value, and has a chance to attach a 'drain' listener.
  function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
      state.needDrain = false;
      stream.emit('drain');
    }
  }

  // if there's something in the buffer waiting, then process it
  function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;

    if (stream._writev && entry && entry.next) {
      // Fast case, write everything using _writev()
      var l = state.bufferedRequestCount;
      var buffer = new Array(l);
      var holder = state.corkedRequestsFree;
      holder.entry = entry;

      var count = 0;
      while (entry) {
        buffer[count] = entry;
        entry = entry.next;
        count += 1;
      }

      doWrite(stream, state, true, state.length, buffer, '', holder.finish);

      // doWrite is almost always async, defer these to save a bit of time
      // as the hot path ends with doWrite
      state.pendingcb++;
      state.lastBufferedRequest = null;
      if (holder.next) {
        state.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        state.corkedRequestsFree = new CorkedRequest(state);
      }
    } else {
      // Slow case, write chunks one-by-one
      while (entry) {
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state.objectMode ? 1 : chunk.length;

        doWrite(stream, state, false, len, chunk, encoding, cb);
        entry = entry.next;
        // if we didn't call the onwrite immediately, then
        // it means that we need to wait until it does.
        // also, that means that the chunk and cb are currently
        // being processed, so move the buffer counter past them.
        if (state.writing) {
          break;
        }
      }

      if (entry === null) state.lastBufferedRequest = null;
    }

    state.bufferedRequestCount = 0;
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
  }

  Writable.prototype._write = function (chunk, encoding, cb) {
    cb(new Error('not implemented'));
  };

  Writable.prototype._writev = null;

  Writable.prototype.end = function (chunk, encoding, cb) {
    var state = this._writableState;

    if (typeof chunk === 'function') {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === 'function') {
      cb = encoding;
      encoding = null;
    }

    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

    // .end() fully uncorks
    if (state.corked) {
      state.corked = 1;
      this.uncork();
    }

    // ignore unnecessary end() calls.
    if (!state.ending && !state.finished) endWritable(this, state, cb);
  };

  function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
  }

  function prefinish(stream, state) {
    if (!state.prefinished) {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }

  function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
      if (state.pendingcb === 0) {
        prefinish(stream, state);
        state.finished = true;
        stream.emit('finish');
      } else {
        prefinish(stream, state);
      }
    }
    return need;
  }

  function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
      if (state.finished) nextTick(cb);else stream.once('finish', cb);
    }
    state.ended = true;
    stream.writable = false;
  }

  // It seems a linked list but it is not
  // there will be only 2 of these for each stream
  function CorkedRequest(state) {
    var _this = this;

    this.next = null;
    this.entry = null;

    this.finish = function (err) {
      var entry = _this.entry;
      _this.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      if (state.corkedRequestsFree) {
        state.corkedRequestsFree.next = _this;
      } else {
        state.corkedRequestsFree = _this;
      }
    };
  }

  inherits$1(Duplex, Readable);

  var keys = Object.keys(Writable.prototype);
  for (var v$1 = 0; v$1 < keys.length; v$1++) {
    var method = keys[v$1];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
  function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);

    Readable.call(this, options);
    Writable.call(this, options);

    if (options && options.readable === false) this.readable = false;

    if (options && options.writable === false) this.writable = false;

    this.allowHalfOpen = true;
    if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

    this.once('end', onend);
  }

  // the no-half-open enforcer
  function onend() {
    // if we allow half-open state, or if the writable side ended,
    // then we're ok.
    if (this.allowHalfOpen || this._writableState.ended) return;

    // no more data can be written.
    // But allow more writes to happen in this tick.
    nextTick(onEndNT, this);
  }

  function onEndNT(self) {
    self.end();
  }

  // a transform stream is a readable/writable stream where you do
  inherits$1(Transform, Duplex);

  function TransformState(stream) {
    this.afterTransform = function (er, data) {
      return afterTransform(stream, er, data);
    };

    this.needTransform = false;
    this.transforming = false;
    this.writecb = null;
    this.writechunk = null;
    this.writeencoding = null;
  }

  function afterTransform(stream, er, data) {
    var ts = stream._transformState;
    ts.transforming = false;

    var cb = ts.writecb;

    if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

    ts.writechunk = null;
    ts.writecb = null;

    if (data !== null && data !== undefined) stream.push(data);

    cb(er);

    var rs = stream._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
      stream._read(rs.highWaterMark);
    }
  }
  function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);

    Duplex.call(this, options);

    this._transformState = new TransformState(this);

    // when the writable side finishes, then flush out anything remaining.
    var stream = this;

    // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true;

    // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;

    if (options) {
      if (typeof options.transform === 'function') this._transform = options.transform;

      if (typeof options.flush === 'function') this._flush = options.flush;
    }

    this.once('prefinish', function () {
      if (typeof this._flush === 'function') this._flush(function (er) {
        done(stream, er);
      });else done(stream);
    });
  }

  Transform.prototype.push = function (chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
  };

  // This is the part where you do stuff!
  // override this function in implementation classes.
  // 'chunk' is an input chunk.
  //
  // Call `push(newChunk)` to pass along transformed output
  // to the readable side.  You may call 'push' zero or more times.
  //
  // Call `cb(err)` when you are done with this chunk.  If you pass
  // an error, then that'll put the hurt on the whole operation.  If you
  // never call cb(), then you'll never get another chunk.
  Transform.prototype._transform = function (chunk, encoding, cb) {
    throw new Error('Not implemented');
  };

  Transform.prototype._write = function (chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
      var rs = this._readableState;
      if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
  };

  // Doesn't matter what the args are here.
  // _transform does all the work.
  // That we got here means that the readable side wants more data.
  Transform.prototype._read = function (n) {
    var ts = this._transformState;

    if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
      ts.transforming = true;
      this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
      // mark that we need a transform, so that any data that comes in
      // will get processed, now that we've asked for it.
      ts.needTransform = true;
    }
  };

  function done(stream, er) {
    if (er) return stream.emit('error', er);

    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    var ws = stream._writableState;
    var ts = stream._transformState;

    if (ws.length) throw new Error('Calling transform done when ws.length != 0');

    if (ts.transforming) throw new Error('Calling transform done when still transforming');

    return stream.push(null);
  }

  inherits$1(PassThrough, Transform);
  function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);

    Transform.call(this, options);
  }

  PassThrough.prototype._transform = function (chunk, encoding, cb) {
    cb(null, chunk);
  };

  inherits$1(Stream, EventEmitter);
  Stream.Readable = Readable;
  Stream.Writable = Writable;
  Stream.Duplex = Duplex;
  Stream.Transform = Transform;
  Stream.PassThrough = PassThrough;

  // Backwards-compat with node 0.4.x
  Stream.Stream = Stream;

  // old-style streams.  Note that the pipe method (the only relevant
  // part of this class) is overridden in the Readable class.

  function Stream() {
    EventEmitter.call(this);
  }

  Stream.prototype.pipe = function(dest, options) {
    var source = this;

    function ondata(chunk) {
      if (dest.writable) {
        if (false === dest.write(chunk) && source.pause) {
          source.pause();
        }
      }
    }

    source.on('data', ondata);

    function ondrain() {
      if (source.readable && source.resume) {
        source.resume();
      }
    }

    dest.on('drain', ondrain);

    // If the 'end' option is not supplied, dest.end() will be called when
    // source gets the 'end' or 'close' events.  Only dest.end() once.
    if (!dest._isStdio && (!options || options.end !== false)) {
      source.on('end', onend);
      source.on('close', onclose);
    }

    var didOnEnd = false;
    function onend() {
      if (didOnEnd) return;
      didOnEnd = true;

      dest.end();
    }


    function onclose() {
      if (didOnEnd) return;
      didOnEnd = true;

      if (typeof dest.destroy === 'function') dest.destroy();
    }

    // don't leave dangling pipes when there are errors.
    function onerror(er) {
      cleanup();
      if (EventEmitter.listenerCount(this, 'error') === 0) {
        throw er; // Unhandled stream error in pipe.
      }
    }

    source.on('error', onerror);
    dest.on('error', onerror);

    // remove all the event listeners that were added.
    function cleanup() {
      source.removeListener('data', ondata);
      dest.removeListener('drain', ondrain);

      source.removeListener('end', onend);
      source.removeListener('close', onclose);

      source.removeListener('error', onerror);
      dest.removeListener('error', onerror);

      source.removeListener('end', cleanup);
      source.removeListener('close', cleanup);

      dest.removeListener('close', cleanup);
    }

    source.on('end', cleanup);
    source.on('close', cleanup);

    dest.on('close', cleanup);

    dest.emit('pipe', source);

    // Allow for unix-like usage: A.pipe(B).pipe(C)
    return dest;
  };

  var _polyfillNode_stream = /*#__PURE__*/Object.freeze({
  	__proto__: null,
  	'default': Stream,
  	Readable: Readable,
  	Writable: Writable,
  	Duplex: Duplex,
  	Transform: Transform,
  	PassThrough: PassThrough,
  	Stream: Stream
  });

  var require$$1 = /*@__PURE__*/getAugmentedNamespace(_polyfillNode_stream);

  /**
   * @license React
   * react-dom-server-legacy.node.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ea$1 = react.exports,
    fa$1 = require$$1,
    n = Object.prototype.hasOwnProperty,
    ha$1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ia$1 = {},
    ja$1 = {};
  function ka$1(a) {
    if (n.call(ja$1, a)) return !0;
    if (n.call(ia$1, a)) return !1;
    if (ha$1.test(a)) return ja$1[a] = !0;
    ia$1[a] = !0;
    return !1;
  }
  function q$1(a, b, c, d, f, e, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = f;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = e;
    this.removeEmptyString = g;
  }
  var r$1 = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
    r$1[a] = new q$1(a, 0, !1, a, null, !1, !1);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
    var b = a[0];
    r$1[b] = new q$1(b, 1, !1, a[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
    r$1[a] = new q$1(a, 2, !1, a.toLowerCase(), null, !1, !1);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
    r$1[a] = new q$1(a, 2, !1, a, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
    r$1[a] = new q$1(a, 3, !1, a.toLowerCase(), null, !1, !1);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function (a) {
    r$1[a] = new q$1(a, 3, !0, a, null, !1, !1);
  });
  ["capture", "download"].forEach(function (a) {
    r$1[a] = new q$1(a, 4, !1, a, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (a) {
    r$1[a] = new q$1(a, 6, !1, a, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (a) {
    r$1[a] = new q$1(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var la$1 = /[\-:]([a-z])/g;
  function ma$1(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
    var b = a.replace(la$1, ma$1);
    r$1[b] = new q$1(b, 1, !1, a, null, !1, !1);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
    var b = a.replace(la$1, ma$1);
    r$1[b] = new q$1(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
    var b = a.replace(la$1, ma$1);
    r$1[b] = new q$1(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (a) {
    r$1[a] = new q$1(a, 1, !1, a.toLowerCase(), null, !1, !1);
  });
  r$1.xlinkHref = new q$1("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
  ["src", "href", "action", "formAction"].forEach(function (a) {
    r$1[a] = new q$1(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  var t$1 = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    },
    na = ["Webkit", "ms", "Moz", "O"];
  Object.keys(t$1).forEach(function (a) {
    na.forEach(function (b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      t$1[b] = t$1[a];
    });
  });
  var oa = /["'&<>]/;
  function u$1(a) {
    if ("boolean" === typeof a || "number" === typeof a) return "" + a;
    a = "" + a;
    var b = oa.exec(a);
    if (b) {
      var c = "",
        d,
        f = 0;
      for (d = b.index; d < a.length; d++) {
        switch (a.charCodeAt(d)) {
          case 34:
            b = "&quot;";
            break;
          case 38:
            b = "&amp;";
            break;
          case 39:
            b = "&#x27;";
            break;
          case 60:
            b = "&lt;";
            break;
          case 62:
            b = "&gt;";
            break;
          default:
            continue;
        }
        f !== d && (c += a.substring(f, d));
        f = d + 1;
        c += b;
      }
      a = f !== d ? c + a.substring(f, d) : c;
    }
    return a;
  }
  var pa$1 = /([A-Z])/g,
    qa$1 = /^ms-/,
    ra$1 = Array.isArray;
  function v(a, b) {
    return {
      insertionMode: a,
      selectedValue: b
    };
  }
  function sa$1(a, b, c) {
    switch (b) {
      case "select":
        return v(1, null != c.value ? c.value : c.defaultValue);
      case "svg":
        return v(2, null);
      case "math":
        return v(3, null);
      case "foreignObject":
        return v(1, null);
      case "table":
        return v(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return v(5, null);
      case "colgroup":
        return v(7, null);
      case "tr":
        return v(6, null);
    }
    return 4 <= a.insertionMode || 0 === a.insertionMode ? v(1, null) : a;
  }
  var ta$1 = new Map();
  function ua$1(a, b, c) {
    if ("object" !== typeof c) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    b = !0;
    for (var d in c) if (n.call(c, d)) {
      var f = c[d];
      if (null != f && "boolean" !== typeof f && "" !== f) {
        if (0 === d.indexOf("--")) {
          var e = u$1(d);
          f = u$1(("" + f).trim());
        } else {
          e = d;
          var g = ta$1.get(e);
          void 0 !== g ? e = g : (g = u$1(e.replace(pa$1, "-$1").toLowerCase().replace(qa$1, "-ms-")), ta$1.set(e, g), e = g);
          f = "number" === typeof f ? 0 === f || n.call(t$1, d) ? "" + f : f + "px" : u$1(("" + f).trim());
        }
        b ? (b = !1, a.push(' style="', e, ":", f)) : a.push(";", e, ":", f);
      }
    }
    b || a.push('"');
  }
  function w$1(a, b, c, d) {
    switch (c) {
      case "style":
        ua$1(a, b, d);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1]) if (b = r$1.hasOwnProperty(c) ? r$1[c] : null, null !== b) {
      switch (typeof d) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!b.acceptsBooleans) return;
      }
      c = b.attributeName;
      switch (b.type) {
        case 3:
          d && a.push(" ", c, '=""');
          break;
        case 4:
          !0 === d ? a.push(" ", c, '=""') : !1 !== d && a.push(" ", c, '="', u$1(d), '"');
          break;
        case 5:
          isNaN(d) || a.push(" ", c, '="', u$1(d), '"');
          break;
        case 6:
          !isNaN(d) && 1 <= d && a.push(" ", c, '="', u$1(d), '"');
          break;
        default:
          b.sanitizeURL && (d = "" + d), a.push(" ", c, '="', u$1(d), '"');
      }
    } else if (ka$1(c)) {
      switch (typeof d) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (b = c.toLowerCase().slice(0, 5), "data-" !== b && "aria-" !== b) return;
      }
      a.push(" ", c, '="', u$1(d), '"');
    }
  }
  function x$1(a, b, c) {
    if (null != b) {
      if (null != c) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
      if ("object" !== typeof b || !("__html" in b)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      b = b.__html;
      null !== b && void 0 !== b && a.push("" + b);
    }
  }
  function va$1(a) {
    var b = "";
    ea$1.Children.forEach(a, function (a) {
      null != a && (b += a);
    });
    return b;
  }
  function wa$1(a, b, c, d) {
    a.push(z$1(c));
    var f = c = null,
      e;
    for (e in b) if (n.call(b, e)) {
      var g = b[e];
      if (null != g) switch (e) {
        case "children":
          c = g;
          break;
        case "dangerouslySetInnerHTML":
          f = g;
          break;
        default:
          w$1(a, d, e, g);
      }
    }
    a.push(">");
    x$1(a, f, c);
    return "string" === typeof c ? (a.push(u$1(c)), null) : c;
  }
  var xa$1 = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    ya$1 = new Map();
  function z$1(a) {
    var b = ya$1.get(a);
    if (void 0 === b) {
      if (!xa$1.test(a)) throw Error("Invalid tag: " + a);
      b = "<" + a;
      ya$1.set(a, b);
    }
    return b;
  }
  function za$1(a, b, c, d, f) {
    switch (b) {
      case "select":
        a.push(z$1("select"));
        var e = null,
          g = null;
        for (l in c) if (n.call(c, l)) {
          var h = c[l];
          if (null != h) switch (l) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              w$1(a, d, l, h);
          }
        }
        a.push(">");
        x$1(a, g, e);
        return e;
      case "option":
        g = f.selectedValue;
        a.push(z$1("option"));
        var k = h = null,
          m = null;
        var l = null;
        for (e in c) if (n.call(c, e)) {
          var p = c[e];
          if (null != p) switch (e) {
            case "children":
              h = p;
              break;
            case "selected":
              m = p;
              break;
            case "dangerouslySetInnerHTML":
              l = p;
              break;
            case "value":
              k = p;
            default:
              w$1(a, d, e, p);
          }
        }
        if (null != g) {
          if (c = null !== k ? "" + k : va$1(h), ra$1(g)) for (d = 0; d < g.length; d++) {
            if ("" + g[d] === c) {
              a.push(' selected=""');
              break;
            }
          } else "" + g === c && a.push(' selected=""');
        } else m && a.push(' selected=""');
        a.push(">");
        x$1(a, l, h);
        return h;
      case "textarea":
        a.push(z$1("textarea"));
        l = g = e = null;
        for (h in c) if (n.call(c, h) && (k = c[h], null != k)) switch (h) {
          case "children":
            l = k;
            break;
          case "value":
            e = k;
            break;
          case "defaultValue":
            g = k;
            break;
          case "dangerouslySetInnerHTML":
            throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
          default:
            w$1(a, d, h, k);
        }
        null === e && null !== g && (e = g);
        a.push(">");
        if (null != l) {
          if (null != e) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          if (ra$1(l) && 1 < l.length) throw Error("<textarea> can only have at most one child.");
          e = "" + l;
        }
        "string" === typeof e && "\n" === e[0] && a.push("\n");
        null !== e && a.push(u$1("" + e));
        return null;
      case "input":
        a.push(z$1("input"));
        k = l = h = e = null;
        for (g in c) if (n.call(c, g) && (m = c[g], null != m)) switch (g) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          case "defaultChecked":
            k = m;
            break;
          case "defaultValue":
            h = m;
            break;
          case "checked":
            l = m;
            break;
          case "value":
            e = m;
            break;
          default:
            w$1(a, d, g, m);
        }
        null !== l ? w$1(a, d, "checked", l) : null !== k && w$1(a, d, "checked", k);
        null !== e ? w$1(a, d, "value", e) : null !== h && w$1(a, d, "value", h);
        a.push("/>");
        return null;
      case "menuitem":
        a.push(z$1("menuitem"));
        for (var B in c) if (n.call(c, B) && (e = c[B], null != e)) switch (B) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
          default:
            w$1(a, d, B, e);
        }
        a.push(">");
        return null;
      case "title":
        a.push(z$1("title"));
        e = null;
        for (p in c) if (n.call(c, p) && (g = c[p], null != g)) switch (p) {
          case "children":
            e = g;
            break;
          case "dangerouslySetInnerHTML":
            throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
          default:
            w$1(a, d, p, g);
        }
        a.push(">");
        return e;
      case "listing":
      case "pre":
        a.push(z$1(b));
        g = e = null;
        for (k in c) if (n.call(c, k) && (h = c[k], null != h)) switch (k) {
          case "children":
            e = h;
            break;
          case "dangerouslySetInnerHTML":
            g = h;
            break;
          default:
            w$1(a, d, k, h);
        }
        a.push(">");
        if (null != g) {
          if (null != e) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if ("object" !== typeof g || !("__html" in g)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
          c = g.__html;
          null !== c && void 0 !== c && ("string" === typeof c && 0 < c.length && "\n" === c[0] ? a.push("\n", c) : a.push("" + c));
        }
        "string" === typeof e && "\n" === e[0] && a.push("\n");
        return e;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        a.push(z$1(b));
        for (var C in c) if (n.call(c, C) && (e = c[C], null != e)) switch (C) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(b + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          default:
            w$1(a, d, C, e);
        }
        a.push("/>");
        return null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return wa$1(a, c, b, d);
      case "html":
        return 0 === f.insertionMode && a.push("<!DOCTYPE html>"), wa$1(a, c, b, d);
      default:
        if (-1 === b.indexOf("-") && "string" !== typeof c.is) return wa$1(a, c, b, d);
        a.push(z$1(b));
        g = e = null;
        for (m in c) if (n.call(c, m) && (h = c[m], null != h)) switch (m) {
          case "children":
            e = h;
            break;
          case "dangerouslySetInnerHTML":
            g = h;
            break;
          case "style":
            ua$1(a, d, h);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            ka$1(m) && "function" !== typeof h && "symbol" !== typeof h && a.push(" ", m, '="', u$1(h), '"');
        }
        a.push(">");
        x$1(a, g, e);
        return e;
    }
  }
  function Aa$1(a, b, c) {
    a.push('\x3c!--$?--\x3e<template id="');
    if (null === c) throw Error("An ID must have been assigned before we can complete the boundary.");
    a.push(c);
    return a.push('"></template>');
  }
  function Ba$1(a, b, c, d) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return a.push('<div hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
      case 2:
        return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
      case 3:
        return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
      case 4:
        return a.push('<table hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
      case 5:
        return a.push('<table hidden><tbody id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
      case 6:
        return a.push('<table hidden><tr id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
      case 7:
        return a.push('<table hidden><colgroup id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  function Ca$1(a, b) {
    switch (b.insertionMode) {
      case 0:
      case 1:
        return a.push("</div>");
      case 2:
        return a.push("</svg>");
      case 3:
        return a.push("</math>");
      case 4:
        return a.push("</table>");
      case 5:
        return a.push("</tbody></table>");
      case 6:
        return a.push("</tr></table>");
      case 7:
        return a.push("</colgroup></table>");
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  var Da$1 = /[<\u2028\u2029]/g;
  function Ea$1(a) {
    return JSON.stringify(a).replace(Da$1, function (a) {
      switch (a) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function Fa$1(a, b) {
    b = void 0 === b ? "" : b;
    return {
      bootstrapChunks: [],
      startInlineScript: "<script>",
      placeholderPrefix: b + "P:",
      segmentPrefix: b + "S:",
      boundaryPrefix: b + "B:",
      idPrefix: b,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1,
      generateStaticMarkup: a
    };
  }
  function Ga$1() {
    return {
      insertionMode: 1,
      selectedValue: null
    };
  }
  function Ha$1(a, b, c, d) {
    if (c.generateStaticMarkup) return a.push(u$1(b)), !1;
    "" === b ? a = d : (d && a.push("\x3c!-- --\x3e"), a.push(u$1(b)), a = !0);
    return a;
  }
  var A$1 = Object.assign,
    Ia$1 = Symbol.for("react.element"),
    Ja$1 = Symbol.for("react.portal"),
    Ka$1 = Symbol.for("react.fragment"),
    La$1 = Symbol.for("react.strict_mode"),
    Ma$1 = Symbol.for("react.profiler"),
    Na$1 = Symbol.for("react.provider"),
    Oa$1 = Symbol.for("react.context"),
    Pa$1 = Symbol.for("react.forward_ref"),
    Qa$1 = Symbol.for("react.suspense"),
    Ra$1 = Symbol.for("react.suspense_list"),
    Sa$1 = Symbol.for("react.memo"),
    Ta$1 = Symbol.for("react.lazy"),
    Ua$1 = Symbol.for("react.scope"),
    Va$1 = Symbol.for("react.debug_trace_mode"),
    Wa$1 = Symbol.for("react.legacy_hidden"),
    Xa$1 = Symbol.for("react.default_value"),
    Ya$1 = Symbol.iterator;
  function Za$1(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch (a) {
      case Ka$1:
        return "Fragment";
      case Ja$1:
        return "Portal";
      case Ma$1:
        return "Profiler";
      case La$1:
        return "StrictMode";
      case Qa$1:
        return "Suspense";
      case Ra$1:
        return "SuspenseList";
    }
    if ("object" === typeof a) switch (a.$$typeof) {
      case Oa$1:
        return (a.displayName || "Context") + ".Consumer";
      case Na$1:
        return (a._context.displayName || "Context") + ".Provider";
      case Pa$1:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Sa$1:
        return b = a.displayName || null, null !== b ? b : Za$1(a.type) || "Memo";
      case Ta$1:
        b = a._payload;
        a = a._init;
        try {
          return Za$1(a(b));
        } catch (c) {}
    }
    return null;
  }
  var $a$1 = {};
  function ab$1(a, b) {
    a = a.contextTypes;
    if (!a) return $a$1;
    var c = {},
      d;
    for (d in a) c[d] = b[d];
    return c;
  }
  var D = null;
  function E(a, b) {
    if (a !== b) {
      a.context._currentValue2 = a.parentValue;
      a = a.parent;
      var c = b.parent;
      if (null === a) {
        if (null !== c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
      } else {
        if (null === c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        E(a, c);
      }
      b.context._currentValue2 = b.value;
    }
  }
  function bb$1(a) {
    a.context._currentValue2 = a.parentValue;
    a = a.parent;
    null !== a && bb$1(a);
  }
  function cb$1(a) {
    var b = a.parent;
    null !== b && cb$1(b);
    a.context._currentValue2 = a.value;
  }
  function db$1(a, b) {
    a.context._currentValue2 = a.parentValue;
    a = a.parent;
    if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === b.depth ? E(a, b) : db$1(a, b);
  }
  function eb$1(a, b) {
    var c = b.parent;
    if (null === c) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === c.depth ? E(a, c) : eb$1(a, c);
    b.context._currentValue2 = b.value;
  }
  function F$1(a) {
    var b = D;
    b !== a && (null === b ? cb$1(a) : null === a ? bb$1(b) : b.depth === a.depth ? E(b, a) : b.depth > a.depth ? db$1(b, a) : eb$1(b, a), D = a);
  }
  var fb$1 = {
    isMounted: function () {
      return !1;
    },
    enqueueSetState: function (a, b) {
      a = a._reactInternals;
      null !== a.queue && a.queue.push(b);
    },
    enqueueReplaceState: function (a, b) {
      a = a._reactInternals;
      a.replace = !0;
      a.queue = [b];
    },
    enqueueForceUpdate: function () {}
  };
  function gb$1(a, b, c, d) {
    var f = void 0 !== a.state ? a.state : null;
    a.updater = fb$1;
    a.props = c;
    a.state = f;
    var e = {
      queue: [],
      replace: !1
    };
    a._reactInternals = e;
    var g = b.contextType;
    a.context = "object" === typeof g && null !== g ? g._currentValue2 : d;
    g = b.getDerivedStateFromProps;
    "function" === typeof g && (g = g(c, f), f = null === g || void 0 === g ? f : A$1({}, f, g), a.state = f);
    if ("function" !== typeof b.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)) if (b = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b !== a.state && fb$1.enqueueReplaceState(a, a.state, null), null !== e.queue && 0 < e.queue.length) {
      if (b = e.queue, g = e.replace, e.queue = null, e.replace = !1, g && 1 === b.length) a.state = b[0];else {
        e = g ? b[0] : a.state;
        f = !0;
        for (g = g ? 1 : 0; g < b.length; g++) {
          var h = b[g];
          h = "function" === typeof h ? h.call(a, e, c, d) : h;
          null != h && (f ? (f = !1, e = A$1({}, e, h)) : A$1(e, h));
        }
        a.state = e;
      }
    } else e.queue = null;
  }
  var hb$1 = {
    id: 1,
    overflow: ""
  };
  function ib$1(a, b, c) {
    var d = a.id;
    a = a.overflow;
    var f = 32 - G$1(d) - 1;
    d &= ~(1 << f);
    c += 1;
    var e = 32 - G$1(b) + f;
    if (30 < e) {
      var g = f - f % 5;
      e = (d & (1 << g) - 1).toString(32);
      d >>= g;
      f -= g;
      return {
        id: 1 << 32 - G$1(b) + f | c << f | d,
        overflow: e + a
      };
    }
    return {
      id: 1 << e | c << f | d,
      overflow: a
    };
  }
  var G$1 = Math.clz32 ? Math.clz32 : jb$1,
    kb$1 = Math.log,
    lb$1 = Math.LN2;
  function jb$1(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (kb$1(a) / lb$1 | 0) | 0;
  }
  function mb$1(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var nb$1 = "function" === typeof Object.is ? Object.is : mb$1,
    H$1 = null,
    ob$1 = null,
    I$1 = null,
    J$1 = null,
    K$1 = !1,
    L$1 = !1,
    M$1 = 0,
    N$1 = null,
    O$1 = 0;
  function P$1() {
    if (null === H$1) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
    return H$1;
  }
  function rb$1() {
    if (0 < O$1) throw Error("Rendered more hooks than during the previous render");
    return {
      memoizedState: null,
      queue: null,
      next: null
    };
  }
  function sb$1() {
    null === J$1 ? null === I$1 ? (K$1 = !1, I$1 = J$1 = rb$1()) : (K$1 = !0, J$1 = I$1) : null === J$1.next ? (K$1 = !1, J$1 = J$1.next = rb$1()) : (K$1 = !0, J$1 = J$1.next);
    return J$1;
  }
  function tb$1() {
    ob$1 = H$1 = null;
    L$1 = !1;
    I$1 = null;
    O$1 = 0;
    J$1 = N$1 = null;
  }
  function ub$1(a, b) {
    return "function" === typeof b ? b(a) : b;
  }
  function vb$1(a, b, c) {
    H$1 = P$1();
    J$1 = sb$1();
    if (K$1) {
      var d = J$1.queue;
      b = d.dispatch;
      if (null !== N$1 && (c = N$1.get(d), void 0 !== c)) {
        N$1.delete(d);
        d = J$1.memoizedState;
        do d = a(d, c.action), c = c.next; while (null !== c);
        J$1.memoizedState = d;
        return [d, b];
      }
      return [J$1.memoizedState, b];
    }
    a = a === ub$1 ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
    J$1.memoizedState = a;
    a = J$1.queue = {
      last: null,
      dispatch: null
    };
    a = a.dispatch = wb$1.bind(null, H$1, a);
    return [J$1.memoizedState, a];
  }
  function xb$1(a, b) {
    H$1 = P$1();
    J$1 = sb$1();
    b = void 0 === b ? null : b;
    if (null !== J$1) {
      var c = J$1.memoizedState;
      if (null !== c && null !== b) {
        var d = c[1];
        a: if (null === d) d = !1;else {
          for (var f = 0; f < d.length && f < b.length; f++) if (!nb$1(b[f], d[f])) {
            d = !1;
            break a;
          }
          d = !0;
        }
        if (d) return c[0];
      }
    }
    a = a();
    J$1.memoizedState = [a, b];
    return a;
  }
  function wb$1(a, b, c) {
    if (25 <= O$1) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
    if (a === H$1) if (L$1 = !0, a = {
      action: c,
      next: null
    }, null === N$1 && (N$1 = new Map()), c = N$1.get(b), void 0 === c) N$1.set(b, a);else {
      for (b = c; null !== b.next;) b = b.next;
      b.next = a;
    }
  }
  function yb$1() {
    throw Error("startTransition cannot be called during server rendering.");
  }
  function Q$1() {}
  var zb$1 = {
      readContext: function (a) {
        return a._currentValue2;
      },
      useContext: function (a) {
        P$1();
        return a._currentValue2;
      },
      useMemo: xb$1,
      useReducer: vb$1,
      useRef: function (a) {
        H$1 = P$1();
        J$1 = sb$1();
        var b = J$1.memoizedState;
        return null === b ? (a = {
          current: a
        }, J$1.memoizedState = a) : b;
      },
      useState: function (a) {
        return vb$1(ub$1, a);
      },
      useInsertionEffect: Q$1,
      useLayoutEffect: function () {},
      useCallback: function (a, b) {
        return xb$1(function () {
          return a;
        }, b);
      },
      useImperativeHandle: Q$1,
      useEffect: Q$1,
      useDebugValue: Q$1,
      useDeferredValue: function (a) {
        P$1();
        return a;
      },
      useTransition: function () {
        P$1();
        return [!1, yb$1];
      },
      useId: function () {
        var a = ob$1.treeContext;
        var b = a.overflow;
        a = a.id;
        a = (a & ~(1 << 32 - G$1(a) - 1)).toString(32) + b;
        var c = R$1;
        if (null === c) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
        b = M$1++;
        a = ":" + c.idPrefix + "R" + a;
        0 < b && (a += "H" + b.toString(32));
        return a + ":";
      },
      useMutableSource: function (a, b) {
        P$1();
        return b(a._source);
      },
      useSyncExternalStore: function (a, b, c) {
        if (void 0 === c) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        return c();
      }
    },
    R$1 = null,
    Ab$1 = ea$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Bb$1(a) {
    console.error(a);
    return null;
  }
  function S$1() {}
  function Cb$1(a, b, c, d, f, e, g, h, k) {
    var m = [],
      l = new Set();
    b = {
      destination: null,
      responseState: b,
      progressiveChunkSize: void 0 === d ? 12800 : d,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: l,
      pingedTasks: m,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: void 0 === f ? Bb$1 : f,
      onAllReady: void 0 === e ? S$1 : e,
      onShellReady: void 0 === g ? S$1 : g,
      onShellError: void 0 === h ? S$1 : h,
      onFatalError: void 0 === k ? S$1 : k
    };
    c = T$1(b, 0, null, c, !1, !1);
    c.parentFlushed = !0;
    a = Db$1(b, a, null, c, l, $a$1, null, hb$1);
    m.push(a);
    return b;
  }
  function Db$1(a, b, c, d, f, e, g, h) {
    a.allPendingTasks++;
    null === c ? a.pendingRootTasks++ : c.pendingTasks++;
    var k = {
      node: b,
      ping: function () {
        var b = a.pingedTasks;
        b.push(k);
        1 === b.length && Eb(a);
      },
      blockedBoundary: c,
      blockedSegment: d,
      abortSet: f,
      legacyContext: e,
      context: g,
      treeContext: h
    };
    f.add(k);
    return k;
  }
  function T$1(a, b, c, d, f, e) {
    return {
      status: 0,
      id: -1,
      index: b,
      parentFlushed: !1,
      chunks: [],
      children: [],
      formatContext: d,
      boundary: c,
      lastPushedText: f,
      textEmbedded: e
    };
  }
  function U$1(a, b) {
    a = a.onError(b);
    if (null != a && "string" !== typeof a) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function V$1(a, b) {
    var c = a.onShellError;
    c(b);
    c = a.onFatalError;
    c(b);
    null !== a.destination ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
  }
  function Fb$1(a, b, c, d, f) {
    H$1 = {};
    ob$1 = b;
    M$1 = 0;
    for (a = c(d, f); L$1;) L$1 = !1, M$1 = 0, O$1 += 1, J$1 = null, a = c(d, f);
    tb$1();
    return a;
  }
  function Gb$1(a, b, c, d) {
    var f = c.render(),
      e = d.childContextTypes;
    if (null !== e && void 0 !== e) {
      var g = b.legacyContext;
      if ("function" !== typeof c.getChildContext) d = g;else {
        c = c.getChildContext();
        for (var h in c) if (!(h in e)) throw Error((Za$1(d) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        d = A$1({}, g, c);
      }
      b.legacyContext = d;
      W$1(a, b, f);
      b.legacyContext = g;
    } else W$1(a, b, f);
  }
  function Hb$1(a, b) {
    if (a && a.defaultProps) {
      b = A$1({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  function Ib$1(a, b, c, d, f) {
    if ("function" === typeof c) {
      if (c.prototype && c.prototype.isReactComponent) {
        f = ab$1(c, b.legacyContext);
        var e = c.contextType;
        e = new c(d, "object" === typeof e && null !== e ? e._currentValue2 : f);
        gb$1(e, c, d, f);
        Gb$1(a, b, e, c);
      } else {
        e = ab$1(c, b.legacyContext);
        f = Fb$1(a, b, c, d, e);
        var g = 0 !== M$1;
        if ("object" === typeof f && null !== f && "function" === typeof f.render && void 0 === f.$$typeof) gb$1(f, c, d, e), Gb$1(a, b, f, c);else if (g) {
          d = b.treeContext;
          b.treeContext = ib$1(d, 1, 0);
          try {
            W$1(a, b, f);
          } finally {
            b.treeContext = d;
          }
        } else W$1(a, b, f);
      }
    } else if ("string" === typeof c) {
      f = b.blockedSegment;
      e = za$1(f.chunks, c, d, a.responseState, f.formatContext);
      f.lastPushedText = !1;
      g = f.formatContext;
      f.formatContext = sa$1(g, c, d);
      Jb$1(a, b, e);
      f.formatContext = g;
      switch (c) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          f.chunks.push("</", c, ">");
      }
      f.lastPushedText = !1;
    } else {
      switch (c) {
        case Wa$1:
        case Va$1:
        case La$1:
        case Ma$1:
        case Ka$1:
          W$1(a, b, d.children);
          return;
        case Ra$1:
          W$1(a, b, d.children);
          return;
        case Ua$1:
          throw Error("ReactDOMServer does not yet support scope components.");
        case Qa$1:
          a: {
            c = b.blockedBoundary;
            f = b.blockedSegment;
            e = d.fallback;
            d = d.children;
            g = new Set();
            var h = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: g,
                errorDigest: null
              },
              k = T$1(a, f.chunks.length, h, f.formatContext, !1, !1);
            f.children.push(k);
            f.lastPushedText = !1;
            var m = T$1(a, 0, null, f.formatContext, !1, !1);
            m.parentFlushed = !0;
            b.blockedBoundary = h;
            b.blockedSegment = m;
            try {
              if (Jb$1(a, b, d), a.responseState.generateStaticMarkup || m.lastPushedText && m.textEmbedded && m.chunks.push("\x3c!-- --\x3e"), m.status = 1, X$1(h, m), 0 === h.pendingTasks) break a;
            } catch (l) {
              m.status = 4, h.forceClientRender = !0, h.errorDigest = U$1(a, l);
            } finally {
              b.blockedBoundary = c, b.blockedSegment = f;
            }
            b = Db$1(a, e, c, k, g, b.legacyContext, b.context, b.treeContext);
            a.pingedTasks.push(b);
          }
          return;
      }
      if ("object" === typeof c && null !== c) switch (c.$$typeof) {
        case Pa$1:
          d = Fb$1(a, b, c.render, d, f);
          if (0 !== M$1) {
            c = b.treeContext;
            b.treeContext = ib$1(c, 1, 0);
            try {
              W$1(a, b, d);
            } finally {
              b.treeContext = c;
            }
          } else W$1(a, b, d);
          return;
        case Sa$1:
          c = c.type;
          d = Hb$1(c, d);
          Ib$1(a, b, c, d, f);
          return;
        case Na$1:
          f = d.children;
          c = c._context;
          d = d.value;
          e = c._currentValue2;
          c._currentValue2 = d;
          g = D;
          D = d = {
            parent: g,
            depth: null === g ? 0 : g.depth + 1,
            context: c,
            parentValue: e,
            value: d
          };
          b.context = d;
          W$1(a, b, f);
          a = D;
          if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
          d = a.parentValue;
          a.context._currentValue2 = d === Xa$1 ? a.context._defaultValue : d;
          a = D = a.parent;
          b.context = a;
          return;
        case Oa$1:
          d = d.children;
          d = d(c._currentValue2);
          W$1(a, b, d);
          return;
        case Ta$1:
          f = c._init;
          c = f(c._payload);
          d = Hb$1(c, d);
          Ib$1(a, b, c, d, void 0);
          return;
      }
      throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == c ? c : typeof c) + "."));
    }
  }
  function W$1(a, b, c) {
    b.node = c;
    if ("object" === typeof c && null !== c) {
      switch (c.$$typeof) {
        case Ia$1:
          Ib$1(a, b, c.type, c.props, c.ref);
          return;
        case Ja$1:
          throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
        case Ta$1:
          var d = c._init;
          c = d(c._payload);
          W$1(a, b, c);
          return;
      }
      if (ra$1(c)) {
        Kb$1(a, b, c);
        return;
      }
      null === c || "object" !== typeof c ? d = null : (d = Ya$1 && c[Ya$1] || c["@@iterator"], d = "function" === typeof d ? d : null);
      if (d && (d = d.call(c))) {
        c = d.next();
        if (!c.done) {
          var f = [];
          do f.push(c.value), c = d.next(); while (!c.done);
          Kb$1(a, b, f);
        }
        return;
      }
      a = Object.prototype.toString.call(c);
      throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === a ? "object with keys {" + Object.keys(c).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    "string" === typeof c ? (d = b.blockedSegment, d.lastPushedText = Ha$1(b.blockedSegment.chunks, c, a.responseState, d.lastPushedText)) : "number" === typeof c && (d = b.blockedSegment, d.lastPushedText = Ha$1(b.blockedSegment.chunks, "" + c, a.responseState, d.lastPushedText));
  }
  function Kb$1(a, b, c) {
    for (var d = c.length, f = 0; f < d; f++) {
      var e = b.treeContext;
      b.treeContext = ib$1(e, d, f);
      try {
        Jb$1(a, b, c[f]);
      } finally {
        b.treeContext = e;
      }
    }
  }
  function Jb$1(a, b, c) {
    var d = b.blockedSegment.formatContext,
      f = b.legacyContext,
      e = b.context;
    try {
      return W$1(a, b, c);
    } catch (k) {
      if (tb$1(), "object" === typeof k && null !== k && "function" === typeof k.then) {
        c = k;
        var g = b.blockedSegment,
          h = T$1(a, g.chunks.length, null, g.formatContext, g.lastPushedText, !0);
        g.children.push(h);
        g.lastPushedText = !1;
        a = Db$1(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
        c.then(a, a);
        b.blockedSegment.formatContext = d;
        b.legacyContext = f;
        b.context = e;
        F$1(e);
      } else throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, F$1(e), k;
    }
  }
  function Lb$1(a) {
    var b = a.blockedBoundary;
    a = a.blockedSegment;
    a.status = 3;
    Mb$1(this, b, a);
  }
  function Nb$1(a, b, c) {
    var d = a.blockedBoundary;
    a.blockedSegment.status = 3;
    null === d ? (b.allPendingTasks--, 2 !== b.status && (b.status = 2, null !== b.destination && b.destination.push(null))) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = !0, d.errorDigest = b.onError(void 0 === c ? Error("The render was aborted by the server without a reason.") : c), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function (a) {
      return Nb$1(a, b, c);
    }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, 0 === b.allPendingTasks && (a = b.onAllReady, a()));
  }
  function X$1(a, b) {
    if (0 === b.chunks.length && 1 === b.children.length && null === b.children[0].boundary) {
      var c = b.children[0];
      c.id = b.id;
      c.parentFlushed = !0;
      1 === c.status && X$1(a, c);
    } else a.completedSegments.push(b);
  }
  function Mb$1(a, b, c) {
    if (null === b) {
      if (c.parentFlushed) {
        if (null !== a.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
        a.completedRootSegment = c;
      }
      a.pendingRootTasks--;
      0 === a.pendingRootTasks && (a.onShellError = S$1, b = a.onShellReady, b());
    } else b.pendingTasks--, b.forceClientRender || (0 === b.pendingTasks ? (c.parentFlushed && 1 === c.status && X$1(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(Lb$1, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && 1 === c.status && (X$1(b, c), 1 === b.completedSegments.length && b.parentFlushed && a.partialBoundaries.push(b)));
    a.allPendingTasks--;
    0 === a.allPendingTasks && (a = a.onAllReady, a());
  }
  function Eb(a) {
    if (2 !== a.status) {
      var b = D,
        c = Ab$1.current;
      Ab$1.current = zb$1;
      var d = R$1;
      R$1 = a.responseState;
      try {
        var f = a.pingedTasks,
          e;
        for (e = 0; e < f.length; e++) {
          var g = f[e];
          var h = a,
            k = g.blockedSegment;
          if (0 === k.status) {
            F$1(g.context);
            try {
              W$1(h, g, g.node), h.responseState.generateStaticMarkup || k.lastPushedText && k.textEmbedded && k.chunks.push("\x3c!-- --\x3e"), g.abortSet.delete(g), k.status = 1, Mb$1(h, g.blockedBoundary, k);
            } catch (y) {
              if (tb$1(), "object" === typeof y && null !== y && "function" === typeof y.then) {
                var m = g.ping;
                y.then(m, m);
              } else {
                g.abortSet.delete(g);
                k.status = 4;
                var l = g.blockedBoundary,
                  p = y,
                  B = U$1(h, p);
                null === l ? V$1(h, p) : (l.pendingTasks--, l.forceClientRender || (l.forceClientRender = !0, l.errorDigest = B, l.parentFlushed && h.clientRenderedBoundaries.push(l)));
                h.allPendingTasks--;
                if (0 === h.allPendingTasks) {
                  var C = h.onAllReady;
                  C();
                }
              }
            } finally {}
          }
        }
        f.splice(0, e);
        null !== a.destination && Ob$1(a, a.destination);
      } catch (y) {
        U$1(a, y), V$1(a, y);
      } finally {
        R$1 = d, Ab$1.current = c, c === zb$1 && F$1(b);
      }
    }
  }
  function Y$1(a, b, c) {
    c.parentFlushed = !0;
    switch (c.status) {
      case 0:
        var d = c.id = a.nextSegmentId++;
        c.lastPushedText = !1;
        c.textEmbedded = !1;
        a = a.responseState;
        b.push('<template id="');
        b.push(a.placeholderPrefix);
        a = d.toString(16);
        b.push(a);
        return b.push('"></template>');
      case 1:
        c.status = 2;
        var f = !0;
        d = c.chunks;
        var e = 0;
        c = c.children;
        for (var g = 0; g < c.length; g++) {
          for (f = c[g]; e < f.index; e++) b.push(d[e]);
          f = Z$1(a, b, f);
        }
        for (; e < d.length - 1; e++) b.push(d[e]);
        e < d.length && (f = b.push(d[e]));
        return f;
      default:
        throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
    }
  }
  function Z$1(a, b, c) {
    var d = c.boundary;
    if (null === d) return Y$1(a, b, c);
    d.parentFlushed = !0;
    if (d.forceClientRender) return a.responseState.generateStaticMarkup || (d = d.errorDigest, b.push("\x3c!--$!--\x3e"), b.push("<template"), d && (b.push(' data-dgst="'), d = u$1(d), b.push(d), b.push('"')), b.push("></template>")), Y$1(a, b, c), a = a.responseState.generateStaticMarkup ? !0 : b.push("\x3c!--/$--\x3e"), a;
    if (0 < d.pendingTasks) {
      d.rootSegmentID = a.nextSegmentId++;
      0 < d.completedSegments.length && a.partialBoundaries.push(d);
      var f = a.responseState;
      var e = f.nextSuspenseID++;
      f = f.boundaryPrefix + e.toString(16);
      d = d.id = f;
      Aa$1(b, a.responseState, d);
      Y$1(a, b, c);
      return b.push("\x3c!--/$--\x3e");
    }
    if (d.byteSize > a.progressiveChunkSize) return d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), Aa$1(b, a.responseState, d.id), Y$1(a, b, c), b.push("\x3c!--/$--\x3e");
    a.responseState.generateStaticMarkup || b.push("\x3c!--$--\x3e");
    c = d.completedSegments;
    if (1 !== c.length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
    Z$1(a, b, c[0]);
    a = a.responseState.generateStaticMarkup ? !0 : b.push("\x3c!--/$--\x3e");
    return a;
  }
  function Pb$1(a, b, c) {
    Ba$1(b, a.responseState, c.formatContext, c.id);
    Z$1(a, b, c);
    return Ca$1(b, c.formatContext);
  }
  function Qb$1(a, b, c) {
    for (var d = c.completedSegments, f = 0; f < d.length; f++) Rb$1(a, b, c, d[f]);
    d.length = 0;
    a = a.responseState;
    d = c.id;
    c = c.rootSegmentID;
    b.push(a.startInlineScript);
    a.sentCompleteBoundaryFunction ? b.push('$RC("') : (a.sentCompleteBoundaryFunction = !0, b.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));
    if (null === d) throw Error("An ID must have been assigned before we can complete the boundary.");
    c = c.toString(16);
    b.push(d);
    b.push('","');
    b.push(a.segmentPrefix);
    b.push(c);
    return b.push('")\x3c/script>');
  }
  function Rb$1(a, b, c, d) {
    if (2 === d.status) return !0;
    var f = d.id;
    if (-1 === f) {
      if (-1 === (d.id = c.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
      return Pb$1(a, b, d);
    }
    Pb$1(a, b, d);
    a = a.responseState;
    b.push(a.startInlineScript);
    a.sentCompleteSegmentFunction ? b.push('$RS("') : (a.sentCompleteSegmentFunction = !0, b.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));
    b.push(a.segmentPrefix);
    f = f.toString(16);
    b.push(f);
    b.push('","');
    b.push(a.placeholderPrefix);
    b.push(f);
    return b.push('")\x3c/script>');
  }
  function Ob$1(a, b) {
    try {
      var c = a.completedRootSegment;
      if (null !== c && 0 === a.pendingRootTasks) {
        Z$1(a, b, c);
        a.completedRootSegment = null;
        var d = a.responseState.bootstrapChunks;
        for (c = 0; c < d.length - 1; c++) b.push(d[c]);
        c < d.length && b.push(d[c]);
      }
      var f = a.clientRenderedBoundaries,
        e;
      for (e = 0; e < f.length; e++) {
        var g = f[e];
        d = b;
        var h = a.responseState,
          k = g.id,
          m = g.errorDigest,
          l = g.errorMessage,
          p = g.errorComponentStack;
        d.push(h.startInlineScript);
        h.sentClientRenderFunction ? d.push('$RX("') : (h.sentClientRenderFunction = !0, d.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'));
        if (null === k) throw Error("An ID must have been assigned before we can complete the boundary.");
        d.push(k);
        d.push('"');
        if (m || l || p) {
          d.push(",");
          var B = Ea$1(m || "");
          d.push(B);
        }
        if (l || p) {
          d.push(",");
          var C = Ea$1(l || "");
          d.push(C);
        }
        if (p) {
          d.push(",");
          var y = Ea$1(p);
          d.push(y);
        }
        if (!d.push(")\x3c/script>")) {
          a.destination = null;
          e++;
          f.splice(0, e);
          return;
        }
      }
      f.splice(0, e);
      var aa = a.completedBoundaries;
      for (e = 0; e < aa.length; e++) if (!Qb$1(a, b, aa[e])) {
        a.destination = null;
        e++;
        aa.splice(0, e);
        return;
      }
      aa.splice(0, e);
      var ba = a.partialBoundaries;
      for (e = 0; e < ba.length; e++) {
        var pb = ba[e];
        a: {
          f = a;
          g = b;
          var ca = pb.completedSegments;
          for (h = 0; h < ca.length; h++) if (!Rb$1(f, g, pb, ca[h])) {
            h++;
            ca.splice(0, h);
            var qb = !1;
            break a;
          }
          ca.splice(0, h);
          qb = !0;
        }
        if (!qb) {
          a.destination = null;
          e++;
          ba.splice(0, e);
          return;
        }
      }
      ba.splice(0, e);
      var da = a.completedBoundaries;
      for (e = 0; e < da.length; e++) if (!Qb$1(a, b, da[e])) {
        a.destination = null;
        e++;
        da.splice(0, e);
        return;
      }
      da.splice(0, e);
    } finally {
      0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length && b.push(null);
    }
  }
  function Sb$1(a, b) {
    if (1 === a.status) a.status = 2, b.destroy(a.fatalError);else if (2 !== a.status && null === a.destination) {
      a.destination = b;
      try {
        Ob$1(a, b);
      } catch (c) {
        U$1(a, c), V$1(a, c);
      }
    }
  }
  function Tb$1(a, b) {
    try {
      var c = a.abortableTasks;
      c.forEach(function (c) {
        return Nb$1(c, a, b);
      });
      c.clear();
      null !== a.destination && Ob$1(a, a.destination);
    } catch (d) {
      U$1(a, d), V$1(a, d);
    }
  }
  function Ub$1() {}
  function Vb$1(a, b, c, d) {
    var f = !1,
      e = null,
      g = "",
      h = !1;
    a = Cb$1(a, Fa$1(c, b ? b.identifierPrefix : void 0), Ga$1(), Infinity, Ub$1, void 0, function () {
      h = !0;
    }, void 0, void 0);
    Eb(a);
    Tb$1(a, d);
    Sb$1(a, {
      push: function (a) {
        null !== a && (g += a);
        return !0;
      },
      destroy: function (a) {
        f = !0;
        e = a;
      }
    });
    if (f) throw e;
    if (!h) throw Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
    return g;
  }
  function Wb$1(a, b) {
    a.prototype = Object.create(b.prototype);
    a.prototype.constructor = a;
    a.__proto__ = b;
  }
  var Xb$1 = function (a) {
    function b() {
      var b = a.call(this, {}) || this;
      b.request = null;
      b.startedFlowing = !1;
      return b;
    }
    Wb$1(b, a);
    var c = b.prototype;
    c._destroy = function (a, b) {
      Tb$1(this.request);
      b(a);
    };
    c._read = function () {
      this.startedFlowing && Sb$1(this.request, this);
    };
    return b;
  }(fa$1.Readable);
  function Yb$1() {}
  function Zb$1(a, b) {
    var c = new Xb$1(),
      d = Cb$1(a, Fa$1(!1, b ? b.identifierPrefix : void 0), Ga$1(), Infinity, Yb$1, function () {
        c.startedFlowing = !0;
        Sb$1(d, c);
      }, void 0, void 0);
    c.request = d;
    Eb(d);
    return c;
  }
  reactDomServerLegacy_node_production_min.renderToNodeStream = function (a, b) {
    return Zb$1(a, b);
  };
  reactDomServerLegacy_node_production_min.renderToStaticMarkup = function (a, b) {
    return Vb$1(a, b, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
  };
  reactDomServerLegacy_node_production_min.renderToStaticNodeStream = function (a, b) {
    return Zb$1(a, b);
  };
  reactDomServerLegacy_node_production_min.renderToString = function (a, b) {
    return Vb$1(a, b, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
  };
  reactDomServerLegacy_node_production_min.version = "18.2.0";

  var reactDomServer_node_production_min = {};

  var require$$0 = /*@__PURE__*/getAugmentedNamespace(_polyfillNode_util$1);

  /**
   * @license React
   * react-dom-server.node.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var aa = require$$0,
    ba = react.exports,
    k = null,
    l$1 = 0,
    q = !0;
  function r(a, b) {
    if ("string" === typeof b) {
      if (0 !== b.length) if (2048 < 3 * b.length) 0 < l$1 && (t(a, k.subarray(0, l$1)), k = new Uint8Array(2048), l$1 = 0), t(a, u.encode(b));else {
        var c = k;
        0 < l$1 && (c = k.subarray(l$1));
        c = u.encodeInto(b, c);
        var d = c.read;
        l$1 += c.written;
        d < b.length && (t(a, k), k = new Uint8Array(2048), l$1 = u.encodeInto(b.slice(d), k).written);
        2048 === l$1 && (t(a, k), k = new Uint8Array(2048), l$1 = 0);
      }
    } else 0 !== b.byteLength && (2048 < b.byteLength ? (0 < l$1 && (t(a, k.subarray(0, l$1)), k = new Uint8Array(2048), l$1 = 0), t(a, b)) : (c = k.length - l$1, c < b.byteLength && (0 === c ? t(a, k) : (k.set(b.subarray(0, c), l$1), l$1 += c, t(a, k), b = b.subarray(c)), k = new Uint8Array(2048), l$1 = 0), k.set(b, l$1), l$1 += b.byteLength, 2048 === l$1 && (t(a, k), k = new Uint8Array(2048), l$1 = 0)));
  }
  function t(a, b) {
    a = a.write(b);
    q = q && a;
  }
  function w(a, b) {
    r(a, b);
    return q;
  }
  function ca(a) {
    k && 0 < l$1 && a.write(k.subarray(0, l$1));
    k = null;
    l$1 = 0;
    q = !0;
  }
  var u = new aa.TextEncoder();
  function x(a) {
    return u.encode(a);
  }
  var y = Object.prototype.hasOwnProperty,
    da = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ea = {},
    fa = {};
  function ha(a) {
    if (y.call(fa, a)) return !0;
    if (y.call(ea, a)) return !1;
    if (da.test(a)) return fa[a] = !0;
    ea[a] = !0;
    return !1;
  }
  function z(a, b, c, d, f, e, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = f;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = e;
    this.removeEmptyString = g;
  }
  var A = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
    A[a] = new z(a, 0, !1, a, null, !1, !1);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
    var b = a[0];
    A[b] = new z(b, 1, !1, a[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
    A[a] = new z(a, 2, !1, a.toLowerCase(), null, !1, !1);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
    A[a] = new z(a, 2, !1, a, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
    A[a] = new z(a, 3, !1, a.toLowerCase(), null, !1, !1);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function (a) {
    A[a] = new z(a, 3, !0, a, null, !1, !1);
  });
  ["capture", "download"].forEach(function (a) {
    A[a] = new z(a, 4, !1, a, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (a) {
    A[a] = new z(a, 6, !1, a, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (a) {
    A[a] = new z(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var ia = /[\-:]([a-z])/g;
  function ja(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
    var b = a.replace(ia, ja);
    A[b] = new z(b, 1, !1, a, null, !1, !1);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
    var b = a.replace(ia, ja);
    A[b] = new z(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
    var b = a.replace(ia, ja);
    A[b] = new z(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (a) {
    A[a] = new z(a, 1, !1, a.toLowerCase(), null, !1, !1);
  });
  A.xlinkHref = new z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
  ["src", "href", "action", "formAction"].forEach(function (a) {
    A[a] = new z(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  var B = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    },
    ka = ["Webkit", "ms", "Moz", "O"];
  Object.keys(B).forEach(function (a) {
    ka.forEach(function (b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      B[b] = B[a];
    });
  });
  var la = /["'&<>]/;
  function F(a) {
    if ("boolean" === typeof a || "number" === typeof a) return "" + a;
    a = "" + a;
    var b = la.exec(a);
    if (b) {
      var c = "",
        d,
        f = 0;
      for (d = b.index; d < a.length; d++) {
        switch (a.charCodeAt(d)) {
          case 34:
            b = "&quot;";
            break;
          case 38:
            b = "&amp;";
            break;
          case 39:
            b = "&#x27;";
            break;
          case 60:
            b = "&lt;";
            break;
          case 62:
            b = "&gt;";
            break;
          default:
            continue;
        }
        f !== d && (c += a.substring(f, d));
        f = d + 1;
        c += b;
      }
      a = f !== d ? c + a.substring(f, d) : c;
    }
    return a;
  }
  var ma = /([A-Z])/g,
    pa = /^ms-/,
    qa = Array.isArray,
    ra = x("<script>"),
    sa = x("\x3c/script>"),
    ta = x('<script src="'),
    ua = x('<script type="module" src="'),
    va = x('" async="">\x3c/script>'),
    wa = /(<\/|<)(s)(cript)/gi;
  function xa(a, b, c, d) {
    return "" + b + ("s" === c ? "\\u0073" : "\\u0053") + d;
  }
  function G(a, b) {
    return {
      insertionMode: a,
      selectedValue: b
    };
  }
  function ya(a, b, c) {
    switch (b) {
      case "select":
        return G(1, null != c.value ? c.value : c.defaultValue);
      case "svg":
        return G(2, null);
      case "math":
        return G(3, null);
      case "foreignObject":
        return G(1, null);
      case "table":
        return G(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return G(5, null);
      case "colgroup":
        return G(7, null);
      case "tr":
        return G(6, null);
    }
    return 4 <= a.insertionMode || 0 === a.insertionMode ? G(1, null) : a;
  }
  var za = x("\x3c!-- --\x3e");
  function Aa(a, b, c, d) {
    if ("" === b) return d;
    d && a.push(za);
    a.push(F(b));
    return !0;
  }
  var Ba = new Map(),
    Ca = x(' style="'),
    Da = x(":"),
    Ea = x(";");
  function Fa(a, b, c) {
    if ("object" !== typeof c) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    b = !0;
    for (var d in c) if (y.call(c, d)) {
      var f = c[d];
      if (null != f && "boolean" !== typeof f && "" !== f) {
        if (0 === d.indexOf("--")) {
          var e = F(d);
          f = F(("" + f).trim());
        } else {
          e = d;
          var g = Ba.get(e);
          void 0 !== g ? e = g : (g = x(F(e.replace(ma, "-$1").toLowerCase().replace(pa, "-ms-"))), Ba.set(e, g), e = g);
          f = "number" === typeof f ? 0 === f || y.call(B, d) ? "" + f : f + "px" : F(("" + f).trim());
        }
        b ? (b = !1, a.push(Ca, e, Da, f)) : a.push(Ea, e, Da, f);
      }
    }
    b || a.push(H);
  }
  var I = x(" "),
    J = x('="'),
    H = x('"'),
    Ga = x('=""');
  function K(a, b, c, d) {
    switch (c) {
      case "style":
        Fa(a, b, d);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1]) if (b = A.hasOwnProperty(c) ? A[c] : null, null !== b) {
      switch (typeof d) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!b.acceptsBooleans) return;
      }
      c = b.attributeName;
      switch (b.type) {
        case 3:
          d && a.push(I, c, Ga);
          break;
        case 4:
          !0 === d ? a.push(I, c, Ga) : !1 !== d && a.push(I, c, J, F(d), H);
          break;
        case 5:
          isNaN(d) || a.push(I, c, J, F(d), H);
          break;
        case 6:
          !isNaN(d) && 1 <= d && a.push(I, c, J, F(d), H);
          break;
        default:
          b.sanitizeURL && (d = "" + d), a.push(I, c, J, F(d), H);
      }
    } else if (ha(c)) {
      switch (typeof d) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (b = c.toLowerCase().slice(0, 5), "data-" !== b && "aria-" !== b) return;
      }
      a.push(I, c, J, F(d), H);
    }
  }
  var L = x(">"),
    Ha = x("/>");
  function M(a, b, c) {
    if (null != b) {
      if (null != c) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
      if ("object" !== typeof b || !("__html" in b)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      b = b.__html;
      null !== b && void 0 !== b && a.push("" + b);
    }
  }
  function Ia(a) {
    var b = "";
    ba.Children.forEach(a, function (a) {
      null != a && (b += a);
    });
    return b;
  }
  var Ja = x(' selected=""');
  function Ka(a, b, c, d) {
    a.push(N(c));
    var f = c = null,
      e;
    for (e in b) if (y.call(b, e)) {
      var g = b[e];
      if (null != g) switch (e) {
        case "children":
          c = g;
          break;
        case "dangerouslySetInnerHTML":
          f = g;
          break;
        default:
          K(a, d, e, g);
      }
    }
    a.push(L);
    M(a, f, c);
    return "string" === typeof c ? (a.push(F(c)), null) : c;
  }
  var La = x("\n"),
    Ma = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    Na = new Map();
  function N(a) {
    var b = Na.get(a);
    if (void 0 === b) {
      if (!Ma.test(a)) throw Error("Invalid tag: " + a);
      b = x("<" + a);
      Na.set(a, b);
    }
    return b;
  }
  var Oa = x("<!DOCTYPE html>");
  function Pa(a, b, c, d, f) {
    switch (b) {
      case "select":
        a.push(N("select"));
        var e = null,
          g = null;
        for (p in c) if (y.call(c, p)) {
          var h = c[p];
          if (null != h) switch (p) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              K(a, d, p, h);
          }
        }
        a.push(L);
        M(a, g, e);
        return e;
      case "option":
        g = f.selectedValue;
        a.push(N("option"));
        var m = h = null,
          n = null;
        var p = null;
        for (e in c) if (y.call(c, e)) {
          var v = c[e];
          if (null != v) switch (e) {
            case "children":
              h = v;
              break;
            case "selected":
              n = v;
              break;
            case "dangerouslySetInnerHTML":
              p = v;
              break;
            case "value":
              m = v;
            default:
              K(a, d, e, v);
          }
        }
        if (null != g) {
          if (c = null !== m ? "" + m : Ia(h), qa(g)) for (d = 0; d < g.length; d++) {
            if ("" + g[d] === c) {
              a.push(Ja);
              break;
            }
          } else "" + g === c && a.push(Ja);
        } else n && a.push(Ja);
        a.push(L);
        M(a, p, h);
        return h;
      case "textarea":
        a.push(N("textarea"));
        p = g = e = null;
        for (h in c) if (y.call(c, h) && (m = c[h], null != m)) switch (h) {
          case "children":
            p = m;
            break;
          case "value":
            e = m;
            break;
          case "defaultValue":
            g = m;
            break;
          case "dangerouslySetInnerHTML":
            throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
          default:
            K(a, d, h, m);
        }
        null === e && null !== g && (e = g);
        a.push(L);
        if (null != p) {
          if (null != e) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          if (qa(p) && 1 < p.length) throw Error("<textarea> can only have at most one child.");
          e = "" + p;
        }
        "string" === typeof e && "\n" === e[0] && a.push(La);
        null !== e && a.push(F("" + e));
        return null;
      case "input":
        a.push(N("input"));
        m = p = h = e = null;
        for (g in c) if (y.call(c, g) && (n = c[g], null != n)) switch (g) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          case "defaultChecked":
            m = n;
            break;
          case "defaultValue":
            h = n;
            break;
          case "checked":
            p = n;
            break;
          case "value":
            e = n;
            break;
          default:
            K(a, d, g, n);
        }
        null !== p ? K(a, d, "checked", p) : null !== m && K(a, d, "checked", m);
        null !== e ? K(a, d, "value", e) : null !== h && K(a, d, "value", h);
        a.push(Ha);
        return null;
      case "menuitem":
        a.push(N("menuitem"));
        for (var C in c) if (y.call(c, C) && (e = c[C], null != e)) switch (C) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
          default:
            K(a, d, C, e);
        }
        a.push(L);
        return null;
      case "title":
        a.push(N("title"));
        e = null;
        for (v in c) if (y.call(c, v) && (g = c[v], null != g)) switch (v) {
          case "children":
            e = g;
            break;
          case "dangerouslySetInnerHTML":
            throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
          default:
            K(a, d, v, g);
        }
        a.push(L);
        return e;
      case "listing":
      case "pre":
        a.push(N(b));
        g = e = null;
        for (m in c) if (y.call(c, m) && (h = c[m], null != h)) switch (m) {
          case "children":
            e = h;
            break;
          case "dangerouslySetInnerHTML":
            g = h;
            break;
          default:
            K(a, d, m, h);
        }
        a.push(L);
        if (null != g) {
          if (null != e) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if ("object" !== typeof g || !("__html" in g)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
          c = g.__html;
          null !== c && void 0 !== c && ("string" === typeof c && 0 < c.length && "\n" === c[0] ? a.push(La, c) : a.push("" + c));
        }
        "string" === typeof e && "\n" === e[0] && a.push(La);
        return e;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        a.push(N(b));
        for (var D in c) if (y.call(c, D) && (e = c[D], null != e)) switch (D) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(b + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          default:
            K(a, d, D, e);
        }
        a.push(Ha);
        return null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ka(a, c, b, d);
      case "html":
        return 0 === f.insertionMode && a.push(Oa), Ka(a, c, b, d);
      default:
        if (-1 === b.indexOf("-") && "string" !== typeof c.is) return Ka(a, c, b, d);
        a.push(N(b));
        g = e = null;
        for (n in c) if (y.call(c, n) && (h = c[n], null != h)) switch (n) {
          case "children":
            e = h;
            break;
          case "dangerouslySetInnerHTML":
            g = h;
            break;
          case "style":
            Fa(a, d, h);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            ha(n) && "function" !== typeof h && "symbol" !== typeof h && a.push(I, n, J, F(h), H);
        }
        a.push(L);
        M(a, g, e);
        return e;
    }
  }
  var Qa = x("</"),
    Ra = x(">"),
    Sa = x('<template id="'),
    Ta = x('"></template>'),
    Ua = x("\x3c!--$--\x3e"),
    Va = x('\x3c!--$?--\x3e<template id="'),
    Wa = x('"></template>'),
    Xa = x("\x3c!--$!--\x3e"),
    Ya = x("\x3c!--/$--\x3e"),
    Za = x("<template"),
    $a = x('"'),
    ab = x(' data-dgst="');
  x(' data-msg="');
  x(' data-stck="');
  var bb = x("></template>");
  function cb(a, b, c) {
    r(a, Va);
    if (null === c) throw Error("An ID must have been assigned before we can complete the boundary.");
    r(a, c);
    return w(a, Wa);
  }
  var db = x('<div hidden id="'),
    eb = x('">'),
    fb = x("</div>"),
    gb = x('<svg aria-hidden="true" style="display:none" id="'),
    hb = x('">'),
    ib = x("</svg>"),
    jb = x('<math aria-hidden="true" style="display:none" id="'),
    kb = x('">'),
    lb = x("</math>"),
    mb = x('<table hidden id="'),
    nb = x('">'),
    ob = x("</table>"),
    pb = x('<table hidden><tbody id="'),
    qb = x('">'),
    rb = x("</tbody></table>"),
    sb = x('<table hidden><tr id="'),
    tb = x('">'),
    ub = x("</tr></table>"),
    vb = x('<table hidden><colgroup id="'),
    wb = x('">'),
    xb = x("</colgroup></table>");
  function yb(a, b, c, d) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return r(a, db), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, eb);
      case 2:
        return r(a, gb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, hb);
      case 3:
        return r(a, jb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, kb);
      case 4:
        return r(a, mb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, nb);
      case 5:
        return r(a, pb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, qb);
      case 6:
        return r(a, sb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, tb);
      case 7:
        return r(a, vb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, wb);
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  function zb(a, b) {
    switch (b.insertionMode) {
      case 0:
      case 1:
        return w(a, fb);
      case 2:
        return w(a, ib);
      case 3:
        return w(a, lb);
      case 4:
        return w(a, ob);
      case 5:
        return w(a, rb);
      case 6:
        return w(a, ub);
      case 7:
        return w(a, xb);
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  var Ab = x('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),
    Bb = x('$RS("'),
    Cb = x('","'),
    Db = x('")\x3c/script>'),
    Fb = x('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),
    Gb = x('$RC("'),
    Hb = x('","'),
    Ib = x('")\x3c/script>'),
    Jb = x('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),
    Kb = x('$RX("'),
    Lb = x('"'),
    Mb = x(")\x3c/script>"),
    Nb = x(","),
    Ob = /[<\u2028\u2029]/g;
  function Pb(a) {
    return JSON.stringify(a).replace(Ob, function (a) {
      switch (a) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var O = Object.assign,
    Qb = Symbol.for("react.element"),
    Rb = Symbol.for("react.portal"),
    Sb = Symbol.for("react.fragment"),
    Tb = Symbol.for("react.strict_mode"),
    Ub = Symbol.for("react.profiler"),
    Vb = Symbol.for("react.provider"),
    Wb = Symbol.for("react.context"),
    Xb = Symbol.for("react.forward_ref"),
    Yb = Symbol.for("react.suspense"),
    Zb = Symbol.for("react.suspense_list"),
    $b = Symbol.for("react.memo"),
    ac = Symbol.for("react.lazy"),
    bc = Symbol.for("react.scope"),
    cc = Symbol.for("react.debug_trace_mode"),
    dc = Symbol.for("react.legacy_hidden"),
    ec = Symbol.for("react.default_value"),
    fc = Symbol.iterator;
  function gc(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch (a) {
      case Sb:
        return "Fragment";
      case Rb:
        return "Portal";
      case Ub:
        return "Profiler";
      case Tb:
        return "StrictMode";
      case Yb:
        return "Suspense";
      case Zb:
        return "SuspenseList";
    }
    if ("object" === typeof a) switch (a.$$typeof) {
      case Wb:
        return (a.displayName || "Context") + ".Consumer";
      case Vb:
        return (a._context.displayName || "Context") + ".Provider";
      case Xb:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case $b:
        return b = a.displayName || null, null !== b ? b : gc(a.type) || "Memo";
      case ac:
        b = a._payload;
        a = a._init;
        try {
          return gc(a(b));
        } catch (c) {}
    }
    return null;
  }
  var hc = {};
  function ic(a, b) {
    a = a.contextTypes;
    if (!a) return hc;
    var c = {},
      d;
    for (d in a) c[d] = b[d];
    return c;
  }
  var P = null;
  function Q(a, b) {
    if (a !== b) {
      a.context._currentValue = a.parentValue;
      a = a.parent;
      var c = b.parent;
      if (null === a) {
        if (null !== c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
      } else {
        if (null === c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        Q(a, c);
      }
      b.context._currentValue = b.value;
    }
  }
  function jc(a) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    null !== a && jc(a);
  }
  function kc(a) {
    var b = a.parent;
    null !== b && kc(b);
    a.context._currentValue = a.value;
  }
  function lc(a, b) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === b.depth ? Q(a, b) : lc(a, b);
  }
  function mc(a, b) {
    var c = b.parent;
    if (null === c) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === c.depth ? Q(a, c) : mc(a, c);
    b.context._currentValue = b.value;
  }
  function nc(a) {
    var b = P;
    b !== a && (null === b ? kc(a) : null === a ? jc(b) : b.depth === a.depth ? Q(b, a) : b.depth > a.depth ? lc(b, a) : mc(b, a), P = a);
  }
  var oc = {
    isMounted: function () {
      return !1;
    },
    enqueueSetState: function (a, b) {
      a = a._reactInternals;
      null !== a.queue && a.queue.push(b);
    },
    enqueueReplaceState: function (a, b) {
      a = a._reactInternals;
      a.replace = !0;
      a.queue = [b];
    },
    enqueueForceUpdate: function () {}
  };
  function pc(a, b, c, d) {
    var f = void 0 !== a.state ? a.state : null;
    a.updater = oc;
    a.props = c;
    a.state = f;
    var e = {
      queue: [],
      replace: !1
    };
    a._reactInternals = e;
    var g = b.contextType;
    a.context = "object" === typeof g && null !== g ? g._currentValue : d;
    g = b.getDerivedStateFromProps;
    "function" === typeof g && (g = g(c, f), f = null === g || void 0 === g ? f : O({}, f, g), a.state = f);
    if ("function" !== typeof b.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)) if (b = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b !== a.state && oc.enqueueReplaceState(a, a.state, null), null !== e.queue && 0 < e.queue.length) {
      if (b = e.queue, g = e.replace, e.queue = null, e.replace = !1, g && 1 === b.length) a.state = b[0];else {
        e = g ? b[0] : a.state;
        f = !0;
        for (g = g ? 1 : 0; g < b.length; g++) {
          var h = b[g];
          h = "function" === typeof h ? h.call(a, e, c, d) : h;
          null != h && (f ? (f = !1, e = O({}, e, h)) : O(e, h));
        }
        a.state = e;
      }
    } else e.queue = null;
  }
  var qc = {
    id: 1,
    overflow: ""
  };
  function rc(a, b, c) {
    var d = a.id;
    a = a.overflow;
    var f = 32 - sc(d) - 1;
    d &= ~(1 << f);
    c += 1;
    var e = 32 - sc(b) + f;
    if (30 < e) {
      var g = f - f % 5;
      e = (d & (1 << g) - 1).toString(32);
      d >>= g;
      f -= g;
      return {
        id: 1 << 32 - sc(b) + f | c << f | d,
        overflow: e + a
      };
    }
    return {
      id: 1 << e | c << f | d,
      overflow: a
    };
  }
  var sc = Math.clz32 ? Math.clz32 : tc,
    uc = Math.log,
    vc = Math.LN2;
  function tc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (uc(a) / vc | 0) | 0;
  }
  function wc(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var xc = "function" === typeof Object.is ? Object.is : wc,
    R = null,
    yc = null,
    zc = null,
    S = null,
    T = !1,
    Ac = !1,
    U = 0,
    V = null,
    Bc = 0;
  function W() {
    if (null === R) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
    return R;
  }
  function Cc() {
    if (0 < Bc) throw Error("Rendered more hooks than during the previous render");
    return {
      memoizedState: null,
      queue: null,
      next: null
    };
  }
  function Dc() {
    null === S ? null === zc ? (T = !1, zc = S = Cc()) : (T = !0, S = zc) : null === S.next ? (T = !1, S = S.next = Cc()) : (T = !0, S = S.next);
    return S;
  }
  function Ec() {
    yc = R = null;
    Ac = !1;
    zc = null;
    Bc = 0;
    S = V = null;
  }
  function Fc(a, b) {
    return "function" === typeof b ? b(a) : b;
  }
  function Gc(a, b, c) {
    R = W();
    S = Dc();
    if (T) {
      var d = S.queue;
      b = d.dispatch;
      if (null !== V && (c = V.get(d), void 0 !== c)) {
        V.delete(d);
        d = S.memoizedState;
        do d = a(d, c.action), c = c.next; while (null !== c);
        S.memoizedState = d;
        return [d, b];
      }
      return [S.memoizedState, b];
    }
    a = a === Fc ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
    S.memoizedState = a;
    a = S.queue = {
      last: null,
      dispatch: null
    };
    a = a.dispatch = Hc.bind(null, R, a);
    return [S.memoizedState, a];
  }
  function Ic(a, b) {
    R = W();
    S = Dc();
    b = void 0 === b ? null : b;
    if (null !== S) {
      var c = S.memoizedState;
      if (null !== c && null !== b) {
        var d = c[1];
        a: if (null === d) d = !1;else {
          for (var f = 0; f < d.length && f < b.length; f++) if (!xc(b[f], d[f])) {
            d = !1;
            break a;
          }
          d = !0;
        }
        if (d) return c[0];
      }
    }
    a = a();
    S.memoizedState = [a, b];
    return a;
  }
  function Hc(a, b, c) {
    if (25 <= Bc) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
    if (a === R) if (Ac = !0, a = {
      action: c,
      next: null
    }, null === V && (V = new Map()), c = V.get(b), void 0 === c) V.set(b, a);else {
      for (b = c; null !== b.next;) b = b.next;
      b.next = a;
    }
  }
  function Jc() {
    throw Error("startTransition cannot be called during server rendering.");
  }
  function Kc() {}
  var Mc = {
      readContext: function (a) {
        return a._currentValue;
      },
      useContext: function (a) {
        W();
        return a._currentValue;
      },
      useMemo: Ic,
      useReducer: Gc,
      useRef: function (a) {
        R = W();
        S = Dc();
        var b = S.memoizedState;
        return null === b ? (a = {
          current: a
        }, S.memoizedState = a) : b;
      },
      useState: function (a) {
        return Gc(Fc, a);
      },
      useInsertionEffect: Kc,
      useLayoutEffect: function () {},
      useCallback: function (a, b) {
        return Ic(function () {
          return a;
        }, b);
      },
      useImperativeHandle: Kc,
      useEffect: Kc,
      useDebugValue: Kc,
      useDeferredValue: function (a) {
        W();
        return a;
      },
      useTransition: function () {
        W();
        return [!1, Jc];
      },
      useId: function () {
        var a = yc.treeContext;
        var b = a.overflow;
        a = a.id;
        a = (a & ~(1 << 32 - sc(a) - 1)).toString(32) + b;
        var c = Lc;
        if (null === c) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
        b = U++;
        a = ":" + c.idPrefix + "R" + a;
        0 < b && (a += "H" + b.toString(32));
        return a + ":";
      },
      useMutableSource: function (a, b) {
        W();
        return b(a._source);
      },
      useSyncExternalStore: function (a, b, c) {
        if (void 0 === c) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        return c();
      }
    },
    Lc = null,
    Nc = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Oc(a) {
    console.error(a);
    return null;
  }
  function X() {}
  function Pc(a, b) {
    var c = a.pingedTasks;
    c.push(b);
    1 === c.length && setImmediate(function () {
      return Qc(a);
    });
  }
  function Rc(a, b, c, d, f, e, g, h) {
    a.allPendingTasks++;
    null === c ? a.pendingRootTasks++ : c.pendingTasks++;
    var m = {
      node: b,
      ping: function () {
        return Pc(a, m);
      },
      blockedBoundary: c,
      blockedSegment: d,
      abortSet: f,
      legacyContext: e,
      context: g,
      treeContext: h
    };
    f.add(m);
    return m;
  }
  function Sc(a, b, c, d, f, e) {
    return {
      status: 0,
      id: -1,
      index: b,
      parentFlushed: !1,
      chunks: [],
      children: [],
      formatContext: d,
      boundary: c,
      lastPushedText: f,
      textEmbedded: e
    };
  }
  function Y(a, b) {
    a = a.onError(b);
    if (null != a && "string" !== typeof a) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function Tc(a, b) {
    var c = a.onShellError;
    c(b);
    c = a.onFatalError;
    c(b);
    null !== a.destination ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
  }
  function Uc(a, b, c, d, f) {
    R = {};
    yc = b;
    U = 0;
    for (a = c(d, f); Ac;) Ac = !1, U = 0, Bc += 1, S = null, a = c(d, f);
    Ec();
    return a;
  }
  function Vc(a, b, c, d) {
    var f = c.render(),
      e = d.childContextTypes;
    if (null !== e && void 0 !== e) {
      var g = b.legacyContext;
      if ("function" !== typeof c.getChildContext) d = g;else {
        c = c.getChildContext();
        for (var h in c) if (!(h in e)) throw Error((gc(d) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        d = O({}, g, c);
      }
      b.legacyContext = d;
      Z(a, b, f);
      b.legacyContext = g;
    } else Z(a, b, f);
  }
  function Wc(a, b) {
    if (a && a.defaultProps) {
      b = O({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  function Xc(a, b, c, d, f) {
    if ("function" === typeof c) {
      if (c.prototype && c.prototype.isReactComponent) {
        f = ic(c, b.legacyContext);
        var e = c.contextType;
        e = new c(d, "object" === typeof e && null !== e ? e._currentValue : f);
        pc(e, c, d, f);
        Vc(a, b, e, c);
      } else {
        e = ic(c, b.legacyContext);
        f = Uc(a, b, c, d, e);
        var g = 0 !== U;
        if ("object" === typeof f && null !== f && "function" === typeof f.render && void 0 === f.$$typeof) pc(f, c, d, e), Vc(a, b, f, c);else if (g) {
          d = b.treeContext;
          b.treeContext = rc(d, 1, 0);
          try {
            Z(a, b, f);
          } finally {
            b.treeContext = d;
          }
        } else Z(a, b, f);
      }
    } else if ("string" === typeof c) {
      f = b.blockedSegment;
      e = Pa(f.chunks, c, d, a.responseState, f.formatContext);
      f.lastPushedText = !1;
      g = f.formatContext;
      f.formatContext = ya(g, c, d);
      Yc(a, b, e);
      f.formatContext = g;
      switch (c) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          f.chunks.push(Qa, c, Ra);
      }
      f.lastPushedText = !1;
    } else {
      switch (c) {
        case dc:
        case cc:
        case Tb:
        case Ub:
        case Sb:
          Z(a, b, d.children);
          return;
        case Zb:
          Z(a, b, d.children);
          return;
        case bc:
          throw Error("ReactDOMServer does not yet support scope components.");
        case Yb:
          a: {
            c = b.blockedBoundary;
            f = b.blockedSegment;
            e = d.fallback;
            d = d.children;
            g = new Set();
            var h = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: g,
                errorDigest: null
              },
              m = Sc(a, f.chunks.length, h, f.formatContext, !1, !1);
            f.children.push(m);
            f.lastPushedText = !1;
            var n = Sc(a, 0, null, f.formatContext, !1, !1);
            n.parentFlushed = !0;
            b.blockedBoundary = h;
            b.blockedSegment = n;
            try {
              if (Yc(a, b, d), n.lastPushedText && n.textEmbedded && n.chunks.push(za), n.status = 1, Zc(h, n), 0 === h.pendingTasks) break a;
            } catch (p) {
              n.status = 4, h.forceClientRender = !0, h.errorDigest = Y(a, p);
            } finally {
              b.blockedBoundary = c, b.blockedSegment = f;
            }
            b = Rc(a, e, c, m, g, b.legacyContext, b.context, b.treeContext);
            a.pingedTasks.push(b);
          }
          return;
      }
      if ("object" === typeof c && null !== c) switch (c.$$typeof) {
        case Xb:
          d = Uc(a, b, c.render, d, f);
          if (0 !== U) {
            c = b.treeContext;
            b.treeContext = rc(c, 1, 0);
            try {
              Z(a, b, d);
            } finally {
              b.treeContext = c;
            }
          } else Z(a, b, d);
          return;
        case $b:
          c = c.type;
          d = Wc(c, d);
          Xc(a, b, c, d, f);
          return;
        case Vb:
          f = d.children;
          c = c._context;
          d = d.value;
          e = c._currentValue;
          c._currentValue = d;
          g = P;
          P = d = {
            parent: g,
            depth: null === g ? 0 : g.depth + 1,
            context: c,
            parentValue: e,
            value: d
          };
          b.context = d;
          Z(a, b, f);
          a = P;
          if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
          d = a.parentValue;
          a.context._currentValue = d === ec ? a.context._defaultValue : d;
          a = P = a.parent;
          b.context = a;
          return;
        case Wb:
          d = d.children;
          d = d(c._currentValue);
          Z(a, b, d);
          return;
        case ac:
          f = c._init;
          c = f(c._payload);
          d = Wc(c, d);
          Xc(a, b, c, d, void 0);
          return;
      }
      throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == c ? c : typeof c) + "."));
    }
  }
  function Z(a, b, c) {
    b.node = c;
    if ("object" === typeof c && null !== c) {
      switch (c.$$typeof) {
        case Qb:
          Xc(a, b, c.type, c.props, c.ref);
          return;
        case Rb:
          throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
        case ac:
          var d = c._init;
          c = d(c._payload);
          Z(a, b, c);
          return;
      }
      if (qa(c)) {
        $c(a, b, c);
        return;
      }
      null === c || "object" !== typeof c ? d = null : (d = fc && c[fc] || c["@@iterator"], d = "function" === typeof d ? d : null);
      if (d && (d = d.call(c))) {
        c = d.next();
        if (!c.done) {
          var f = [];
          do f.push(c.value), c = d.next(); while (!c.done);
          $c(a, b, f);
        }
        return;
      }
      a = Object.prototype.toString.call(c);
      throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === a ? "object with keys {" + Object.keys(c).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    "string" === typeof c ? (d = b.blockedSegment, d.lastPushedText = Aa(b.blockedSegment.chunks, c, a.responseState, d.lastPushedText)) : "number" === typeof c && (d = b.blockedSegment, d.lastPushedText = Aa(b.blockedSegment.chunks, "" + c, a.responseState, d.lastPushedText));
  }
  function $c(a, b, c) {
    for (var d = c.length, f = 0; f < d; f++) {
      var e = b.treeContext;
      b.treeContext = rc(e, d, f);
      try {
        Yc(a, b, c[f]);
      } finally {
        b.treeContext = e;
      }
    }
  }
  function Yc(a, b, c) {
    var d = b.blockedSegment.formatContext,
      f = b.legacyContext,
      e = b.context;
    try {
      return Z(a, b, c);
    } catch (m) {
      if (Ec(), "object" === typeof m && null !== m && "function" === typeof m.then) {
        c = m;
        var g = b.blockedSegment,
          h = Sc(a, g.chunks.length, null, g.formatContext, g.lastPushedText, !0);
        g.children.push(h);
        g.lastPushedText = !1;
        a = Rc(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
        c.then(a, a);
        b.blockedSegment.formatContext = d;
        b.legacyContext = f;
        b.context = e;
        nc(e);
      } else throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, nc(e), m;
    }
  }
  function ad(a) {
    var b = a.blockedBoundary;
    a = a.blockedSegment;
    a.status = 3;
    bd(this, b, a);
  }
  function cd(a, b, c) {
    var d = a.blockedBoundary;
    a.blockedSegment.status = 3;
    null === d ? (b.allPendingTasks--, 2 !== b.status && (b.status = 2, null !== b.destination && b.destination.end())) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = !0, d.errorDigest = b.onError(void 0 === c ? Error("The render was aborted by the server without a reason.") : c), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function (a) {
      return cd(a, b, c);
    }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, 0 === b.allPendingTasks && (a = b.onAllReady, a()));
  }
  function Zc(a, b) {
    if (0 === b.chunks.length && 1 === b.children.length && null === b.children[0].boundary) {
      var c = b.children[0];
      c.id = b.id;
      c.parentFlushed = !0;
      1 === c.status && Zc(a, c);
    } else a.completedSegments.push(b);
  }
  function bd(a, b, c) {
    if (null === b) {
      if (c.parentFlushed) {
        if (null !== a.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
        a.completedRootSegment = c;
      }
      a.pendingRootTasks--;
      0 === a.pendingRootTasks && (a.onShellError = X, b = a.onShellReady, b());
    } else b.pendingTasks--, b.forceClientRender || (0 === b.pendingTasks ? (c.parentFlushed && 1 === c.status && Zc(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(ad, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && 1 === c.status && (Zc(b, c), 1 === b.completedSegments.length && b.parentFlushed && a.partialBoundaries.push(b)));
    a.allPendingTasks--;
    0 === a.allPendingTasks && (a = a.onAllReady, a());
  }
  function Qc(a) {
    if (2 !== a.status) {
      var b = P,
        c = Nc.current;
      Nc.current = Mc;
      var d = Lc;
      Lc = a.responseState;
      try {
        var f = a.pingedTasks,
          e;
        for (e = 0; e < f.length; e++) {
          var g = f[e];
          var h = a,
            m = g.blockedSegment;
          if (0 === m.status) {
            nc(g.context);
            try {
              Z(h, g, g.node), m.lastPushedText && m.textEmbedded && m.chunks.push(za), g.abortSet.delete(g), m.status = 1, bd(h, g.blockedBoundary, m);
            } catch (E) {
              if (Ec(), "object" === typeof E && null !== E && "function" === typeof E.then) {
                var n = g.ping;
                E.then(n, n);
              } else {
                g.abortSet.delete(g);
                m.status = 4;
                var p = g.blockedBoundary,
                  v = E,
                  C = Y(h, v);
                null === p ? Tc(h, v) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = !0, p.errorDigest = C, p.parentFlushed && h.clientRenderedBoundaries.push(p)));
                h.allPendingTasks--;
                if (0 === h.allPendingTasks) {
                  var D = h.onAllReady;
                  D();
                }
              }
            } finally {}
          }
        }
        f.splice(0, e);
        null !== a.destination && dd(a, a.destination);
      } catch (E) {
        Y(a, E), Tc(a, E);
      } finally {
        Lc = d, Nc.current = c, c === Mc && nc(b);
      }
    }
  }
  function ed(a, b, c) {
    c.parentFlushed = !0;
    switch (c.status) {
      case 0:
        var d = c.id = a.nextSegmentId++;
        c.lastPushedText = !1;
        c.textEmbedded = !1;
        a = a.responseState;
        r(b, Sa);
        r(b, a.placeholderPrefix);
        a = d.toString(16);
        r(b, a);
        return w(b, Ta);
      case 1:
        c.status = 2;
        var f = !0;
        d = c.chunks;
        var e = 0;
        c = c.children;
        for (var g = 0; g < c.length; g++) {
          for (f = c[g]; e < f.index; e++) r(b, d[e]);
          f = fd(a, b, f);
        }
        for (; e < d.length - 1; e++) r(b, d[e]);
        e < d.length && (f = w(b, d[e]));
        return f;
      default:
        throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
    }
  }
  function fd(a, b, c) {
    var d = c.boundary;
    if (null === d) return ed(a, b, c);
    d.parentFlushed = !0;
    if (d.forceClientRender) d = d.errorDigest, w(b, Xa), r(b, Za), d && (r(b, ab), r(b, F(d)), r(b, $a)), w(b, bb), ed(a, b, c);else if (0 < d.pendingTasks) {
      d.rootSegmentID = a.nextSegmentId++;
      0 < d.completedSegments.length && a.partialBoundaries.push(d);
      var f = a.responseState;
      var e = f.nextSuspenseID++;
      f = x(f.boundaryPrefix + e.toString(16));
      d = d.id = f;
      cb(b, a.responseState, d);
      ed(a, b, c);
    } else if (d.byteSize > a.progressiveChunkSize) d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), cb(b, a.responseState, d.id), ed(a, b, c);else {
      w(b, Ua);
      c = d.completedSegments;
      if (1 !== c.length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
      fd(a, b, c[0]);
    }
    return w(b, Ya);
  }
  function gd(a, b, c) {
    yb(b, a.responseState, c.formatContext, c.id);
    fd(a, b, c);
    return zb(b, c.formatContext);
  }
  function hd(a, b, c) {
    for (var d = c.completedSegments, f = 0; f < d.length; f++) id(a, b, c, d[f]);
    d.length = 0;
    a = a.responseState;
    d = c.id;
    c = c.rootSegmentID;
    r(b, a.startInlineScript);
    a.sentCompleteBoundaryFunction ? r(b, Gb) : (a.sentCompleteBoundaryFunction = !0, r(b, Fb));
    if (null === d) throw Error("An ID must have been assigned before we can complete the boundary.");
    c = c.toString(16);
    r(b, d);
    r(b, Hb);
    r(b, a.segmentPrefix);
    r(b, c);
    return w(b, Ib);
  }
  function id(a, b, c, d) {
    if (2 === d.status) return !0;
    var f = d.id;
    if (-1 === f) {
      if (-1 === (d.id = c.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
      return gd(a, b, d);
    }
    gd(a, b, d);
    a = a.responseState;
    r(b, a.startInlineScript);
    a.sentCompleteSegmentFunction ? r(b, Bb) : (a.sentCompleteSegmentFunction = !0, r(b, Ab));
    r(b, a.segmentPrefix);
    f = f.toString(16);
    r(b, f);
    r(b, Cb);
    r(b, a.placeholderPrefix);
    r(b, f);
    return w(b, Db);
  }
  function dd(a, b) {
    k = new Uint8Array(2048);
    l$1 = 0;
    q = !0;
    try {
      var c = a.completedRootSegment;
      if (null !== c && 0 === a.pendingRootTasks) {
        fd(a, b, c);
        a.completedRootSegment = null;
        var d = a.responseState.bootstrapChunks;
        for (c = 0; c < d.length - 1; c++) r(b, d[c]);
        c < d.length && w(b, d[c]);
      }
      var f = a.clientRenderedBoundaries,
        e;
      for (e = 0; e < f.length; e++) {
        var g = f[e];
        d = b;
        var h = a.responseState,
          m = g.id,
          n = g.errorDigest,
          p = g.errorMessage,
          v = g.errorComponentStack;
        r(d, h.startInlineScript);
        h.sentClientRenderFunction ? r(d, Kb) : (h.sentClientRenderFunction = !0, r(d, Jb));
        if (null === m) throw Error("An ID must have been assigned before we can complete the boundary.");
        r(d, m);
        r(d, Lb);
        if (n || p || v) r(d, Nb), r(d, Pb(n || ""));
        if (p || v) r(d, Nb), r(d, Pb(p || ""));
        v && (r(d, Nb), r(d, Pb(v)));
        if (!w(d, Mb)) {
          a.destination = null;
          e++;
          f.splice(0, e);
          return;
        }
      }
      f.splice(0, e);
      var C = a.completedBoundaries;
      for (e = 0; e < C.length; e++) if (!hd(a, b, C[e])) {
        a.destination = null;
        e++;
        C.splice(0, e);
        return;
      }
      C.splice(0, e);
      ca(b);
      k = new Uint8Array(2048);
      l$1 = 0;
      q = !0;
      var D = a.partialBoundaries;
      for (e = 0; e < D.length; e++) {
        var E = D[e];
        a: {
          f = a;
          g = b;
          var na = E.completedSegments;
          for (h = 0; h < na.length; h++) if (!id(f, g, E, na[h])) {
            h++;
            na.splice(0, h);
            var Eb = !1;
            break a;
          }
          na.splice(0, h);
          Eb = !0;
        }
        if (!Eb) {
          a.destination = null;
          e++;
          D.splice(0, e);
          return;
        }
      }
      D.splice(0, e);
      var oa = a.completedBoundaries;
      for (e = 0; e < oa.length; e++) if (!hd(a, b, oa[e])) {
        a.destination = null;
        e++;
        oa.splice(0, e);
        return;
      }
      oa.splice(0, e);
    } finally {
      ca(b), "function" === typeof b.flush && b.flush(), 0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length && b.end();
    }
  }
  function jd(a) {
    setImmediate(function () {
      return Qc(a);
    });
  }
  function kd(a, b) {
    if (1 === a.status) a.status = 2, b.destroy(a.fatalError);else if (2 !== a.status && null === a.destination) {
      a.destination = b;
      try {
        dd(a, b);
      } catch (c) {
        Y(a, c), Tc(a, c);
      }
    }
  }
  function ld(a, b) {
    try {
      var c = a.abortableTasks;
      c.forEach(function (c) {
        return cd(c, a, b);
      });
      c.clear();
      null !== a.destination && dd(a, a.destination);
    } catch (d) {
      Y(a, d), Tc(a, d);
    }
  }
  function md(a, b) {
    return function () {
      return kd(b, a);
    };
  }
  function nd(a, b) {
    return function () {
      return ld(a, b);
    };
  }
  function od(a, b) {
    var c = b ? b.identifierPrefix : void 0,
      d = b ? b.nonce : void 0,
      f = b ? b.bootstrapScriptContent : void 0,
      e = b ? b.bootstrapScripts : void 0;
    var g = b ? b.bootstrapModules : void 0;
    c = void 0 === c ? "" : c;
    d = void 0 === d ? ra : x('<script nonce="' + F(d) + '">');
    var h = [];
    void 0 !== f && h.push(d, ("" + f).replace(wa, xa), sa);
    if (void 0 !== e) for (f = 0; f < e.length; f++) h.push(ta, F(e[f]), va);
    if (void 0 !== g) for (e = 0; e < g.length; e++) h.push(ua, F(g[e]), va);
    g = {
      bootstrapChunks: h,
      startInlineScript: d,
      placeholderPrefix: x(c + "P:"),
      segmentPrefix: x(c + "S:"),
      boundaryPrefix: c + "B:",
      idPrefix: c,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1
    };
    e = b ? b.namespaceURI : void 0;
    e = G("http://www.w3.org/2000/svg" === e ? 2 : "http://www.w3.org/1998/Math/MathML" === e ? 3 : 0, null);
    f = b ? b.progressiveChunkSize : void 0;
    d = b ? b.onError : void 0;
    h = b ? b.onAllReady : void 0;
    var m = b ? b.onShellReady : void 0,
      n = b ? b.onShellError : void 0;
    b = [];
    c = new Set();
    g = {
      destination: null,
      responseState: g,
      progressiveChunkSize: void 0 === f ? 12800 : f,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: c,
      pingedTasks: b,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: void 0 === d ? Oc : d,
      onAllReady: void 0 === h ? X : h,
      onShellReady: void 0 === m ? X : m,
      onShellError: void 0 === n ? X : n,
      onFatalError: X
    };
    e = Sc(g, 0, null, e, !1, !1);
    e.parentFlushed = !0;
    a = Rc(g, a, null, e, c, hc, null, qc);
    b.push(a);
    return g;
  }
  reactDomServer_node_production_min.renderToPipeableStream = function (a, b) {
    var c = od(a, b),
      d = !1;
    jd(c);
    return {
      pipe: function (a) {
        if (d) throw Error("React currently only supports piping to one writable stream.");
        d = !0;
        kd(c, a);
        a.on("drain", md(a, c));
        a.on("error", nd(c, Error("The destination stream errored while writing data.")));
        a.on("close", nd(c, Error("The destination stream closed early.")));
        return a;
      },
      abort: function (a) {
        ld(c, a);
      }
    };
  };
  reactDomServer_node_production_min.version = "18.2.0";

  var l, s;
  {
    l = reactDomServerLegacy_node_production_min;
    s = reactDomServer_node_production_min;
  }
  l.version;
  l.renderToString;
  var renderToStaticMarkup = l.renderToStaticMarkup;
  l.renderToNodeStream;
  l.renderToStaticNodeStream;
  s.renderToPipeableStream;

  var propTypes = {exports: {}};

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  var factoryWithThrowingShims = function () {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
      err.name = 'Invariant Violation';
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    propTypes.exports = factoryWithThrowingShims();
  }

  /**
   * StaticTable per react
   * @param {object} columns - elenco delle colonne.
   * @author Massimo Cassandro
   */
  // import uniqid from '@massimo-cassandro/m-utilities/js-utilities/unique-id';

  function StaticTable(props) {
    // formattazioni std per i vari tipi di dati
    // la classe std viene sovrascitta se presente come parametro nella colonna
    const data_types = {
        // string: {}
        // element: {},
        date: {
          className: props.centerAlignClassName,
          render: d => new Date(d).toLocaleString('it-IT', {
            year: 'numeric',
            // '2-digit'
            month: '2-digit',
            // 'short'
            day: '2-digit' // 'numeric
          })
        },

        num: {
          className: props.rightAlignClassName,
          render: d => (d ? +d : 0).toLocaleString('it-IT', {
            maximumFractionDigits: 2
          })
        },
        perc: {
          className: props.rightAlignClassName,
          formatClassName: props.percClassName,
          render: d => (d ? +d : 0).toLocaleString('it-IT', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          })
        },
        percDecimal: {
          className: props.rightAlignClassName,
          formatClassName: props.percClassName,
          render: d => ((d ? +d : 0) * 100).toLocaleString('it-IT', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          })
        },
        euro: {
          className: props.rightAlignClassName,
          formatClassName: props.euroClassName,
          render: d => (d ? +d : 0).toLocaleString('it-IT', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })
        }
      },
      setClassName = (col, addFormatClass = true) => {
        if (col.className) {
          return col.className;
        }
        if (col.dataType) {
          return [...(data_types[col.dataType]?.className ? [data_types[col.dataType]?.className] : []), ...(addFormatClass ? [data_types[col.dataType]?.formatClassName] : [])].join(' ');
        } else {
          return null;
        }
      };
    const TableHeadings = () => {
      return props.columns.map((col, idx) => {
        return /*#__PURE__*/React.createElement("th", {
          className: setClassName(col, false),
          key: idx,
          scope: "col"
        }, col.title);
      });
    };
    const tableRows = data => {
      return data.map((row, idx) => {
        return /*#__PURE__*/React.createElement("tr", {
          key: idx
        }, props.columns.map((col, i) => {
          let content,
            addFormatClass = true;
          if (col.parse && typeof col.parse === 'function') {
            content = col.parse(row);
          } else {
            content = row[col.key];
          }
          if (content === null) {
            content = '';
            addFormatClass = false;
          } else if (content === 0 && !props.showZero) {
            content = props.zeroValuesChar;
            addFormatClass = false;
          } else if (col.render && typeof col.render === 'function') {
            content = col.render(content);
          } else if (col.dataType && data_types[col.dataType]?.render) {
            content = data_types[col.dataType].render(content);
          }
          const isTh = col.rowHeading && i === 0,
            CellTag = isTh ? 'th' : 'td';
          return /*#__PURE__*/React.createElement(CellTag, {
            scope: isTh ? 'row' : null,
            key: i,
            className: setClassName(col, addFormatClass)
          }, content);
        }));
      });
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: props.wrapperClassName
    }, /*#__PURE__*/React.createElement("table", {
      className: props.tableClassName
    }, props.caption && /*#__PURE__*/React.createElement("caption", null, props.caption), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(TableHeadings, null))), /*#__PURE__*/React.createElement("tbody", null, tableRows(props.data)), props.footerData && /*#__PURE__*/React.createElement("tfoot", null, tableRows(props.footerData)))), props.showDownloadBtn && /*#__PURE__*/React.createElement("div", {
      className: "d-flex"
    }, props.footerInfo && /*#__PURE__*/React.createElement("div", null, props.footerInfo), /*#__PURE__*/React.createElement("div", {
      className: `flex-grow-1 ${props.rightAlignClassName}`
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: props.downloadBtnClassName,
      onClick: () => {
        alert('click');
      }
    }, props.downloadBtnLabel))));
  }

  // https://it.reactjs.org/docs/typechecking-with-proptypes.html

  StaticTable.propTypes = {
    caption: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.element]),
    tableClassName: propTypes.exports.string,
    wrapperClassName: propTypes.exports.string,
    centerAlignClassName: propTypes.exports.string,
    rightAlignClassName: propTypes.exports.string,
    percClassName: propTypes.exports.string,
    euroClassName: propTypes.exports.string,
    showZero: propTypes.exports.bool,
    zeroValuesChar: propTypes.exports.string,
    columns: propTypes.exports.arrayOf(propTypes.exports.shape({
      title: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.element, propTypes.exports.node]).isRequired,
      key: propTypes.exports.string,
      dataType: propTypes.exports.string,
      className: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.func]),
      render: propTypes.exports.func,
      parse: propTypes.exports.func,
      rowHeading: propTypes.exports.bool
    })).isRequired,
    data: propTypes.exports.array.isRequired,
    footerData: propTypes.exports.array,
    showDownloadBtn: propTypes.exports.bool,
    downloadBtnLabel: propTypes.exports.string,
    downloadBtnClassName: propTypes.exports.string,
    downloadFilename: propTypes.exports.string,
    footerInfo: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.element])
  };
  StaticTable.defaultProps = {
    tableClassName: 'table',
    wrapperClassName: 'table-responsive',
    centerAlignClassName: 'text-center',
    rightAlignClassName: 'text-right',
    percClassName: 'perc',
    euroClassName: 'euro',
    showZero: false,
    zeroValuesChar: '\u2014',
    showDownloadBtn: false,
    downloadBtnLabel: 'Download',
    downloadBtnClassName: 'btn btn-outline-secondary btn-sm',
    downloadFilename: 'download.csv'
  };

  function StaticTable_esm (props) {
    return renderToStaticMarkup( /*#__PURE__*/React.createElement(StaticTable, props));
  }

  const table = StaticTable_esm({
    showZero: false,
    data: [
      {
        "id": 350,
        "isActive": true,
        "number1": 1081.55,
        "number2": 4411.51,
        "date": "2017-06-20",
        "datetime": "2015-02-21T01:23:49",
        "text": "sit officia in",
        "perc": 42.33,
        "percDecimal": 0.19,
        "euro": 879.21
      },
      {
        "id": 1197,
        "isActive": true,
        "number1": 1955.62,
        "number2": 4670.17,
        "date": "2016-09-18",
        "datetime": "2016-10-29T02:05:34",
        "text": "deserunt velit",
        "perc": 8,
        "percDecimal": 0.22,
        "euro": 215.68
      },
      {
        "id": 859,
        "isActive": true,
        "number1": 1228.38,
        "number2": 4113.09,
        "date": "2018-05-16",
        "datetime": "2017-11-12T11:09:41",
        "text": "tempor excepteur aliqua anim",
        "perc": 95.48,
        "percDecimal": 0.24,
        "euro": 683.96
      }
    ],
    addRowIndex: true,
    showDownloadBtn: true,
    downloadBtnLabel: 'Scarica Excel',
    downloadFilename: 'Download',
    separateDownloadBtn: false,
    tableClassName: 'table table-striped table-hover table-bordered',
    // trCallback: row => ` data-method="${row.Method}" data-adv="${encodeURIComponent(row.AgencyName)}"`,
    caption:'table-caption',
    columns: [
      {
        key         : 'id',
        title       : '#',
        dataType    : 'num',
        rowHeading  : true
      },
      {
        key         : 'isActive',
        title       : 'Bool (to do)',
        dataType    : 'bool'
      },
      {
        title       : 'parsed',
        parse       : row => row.number2 - row.number1,
        dataType    : 'num'
      },
      {
        key         : 'date',
        title       : 'Date',
        dataType    : 'date'
      },
      {
        key         : 'datetime',
        title       : 'Datetime (todo)',
        dataType    : 'datetime'
      },
      {
        key         : 'perc',
        title       : 'Perc.',
        dataType    : 'perc'
      },
      {
        key         : 'percDecimal',
        title       : 'Perc. (decimal)',
        dataType    : 'percDecimal'
      },
      {
        key         : 'euro',
        title       : 'Euro',
        dataType    : 'euro'
      }

    ]
  });

  console.log(table);
  document.getElementById('root').innerHTML = table;

})();
//# sourceMappingURL=test-esm-min.js.map
