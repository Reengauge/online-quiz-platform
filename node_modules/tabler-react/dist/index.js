'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var defaultOptions = {
  profile: { icon: "user", value: "Profile", to: "/profile" },
  settings: { icon: "settings", value: "Settings", to: "/settings" },
  mail: { icon: "mail", value: "Inbox", to: "/mail" },
  message: { icon: "send", value: "Message", to: "/message" },
  help: { icon: "help-circle", value: "Need help?", to: "/help" },
  logout: { icon: "log-out", value: "Sign out", to: "/logout" },
  divider: { isDivider: true }
};

var itemsFromDefaultOptions = function itemsFromDefaultOptions(options) {
  return options.map(function (opt) {
    return typeof opt === "string" ? defaultOptions[opt] : opt;
  });
};

/**
 * A component for fast creation of an account centric dropdown
 */
function AccountDropdown(_ref) {
  var avatarURL = _ref.avatarURL,
      name = _ref.name,
      description = _ref.description,
      _ref$options = _ref.options,
      options = _ref$options === undefined ? [] : _ref$options,
      optionsRootComponent = _ref.optionsRootComponent;

  var itemsObjects = itemsFromDefaultOptions(options);

  return React.createElement(Dropdown, {
    isNavLink: true,
    triggerClassName: "pr-0 leading-none",
    triggerContent: React.createElement(
      React.Fragment,
      null,
      avatarURL && React.createElement(Avatar, { imageURL: avatarURL }),
      React.createElement(
        "span",
        { className: "ml-2 d-none d-lg-block" },
        React.createElement(
          "span",
          { className: "text-default" },
          name
        ),
        React.createElement(
          "small",
          { className: "text-muted d-block mt-1" },
          description
        )
      )
    ),
    position: "bottom-end",
    arrow: true,
    arrowPosition: "right",
    toggle: false,
    itemsObject: itemsObjects,
    itemsRootComponent: optionsRootComponent
  });
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

/**
 * Renders a link that stands out more within Alerts
 */
function AlertLink(_ref) {
  var children = _ref.children,
      className = _ref.className,
      href = _ref.href;

  var classes = classnames("alert-link", className);
  return React.createElement(
    "a",
    { className: classes, href: href },
    children
  );
}

AlertLink.displayName = "Alert.Link";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var jsx = function () {
  var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;
  return function createRawReactElement(type, props, key, children) {
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;

    if (!props && childrenLength !== 0) {
      props = {};
    }

    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);

      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }

      props.children = childArray;
    }

    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null
    };
  };
}();

var asyncIterator = function (iterable) {
  if (typeof Symbol === "function") {
    if (Symbol.asyncIterator) {
      var method = iterable[Symbol.asyncIterator];
      if (method != null) return method.call(iterable);
    }

    if (Symbol.iterator) {
      return iterable[Symbol.iterator]();
    }
  }

  throw new TypeError("Object is not async iterable");
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

var asyncGeneratorDelegate = function (inner, awaitWrap) {
  var iter = {},
      waiting = false;

  function pump(key, value) {
    waiting = true;
    value = new Promise(function (resolve) {
      resolve(inner[key](value));
    });
    return {
      done: false,
      value: awaitWrap(value)
    };
  }

  if (typeof Symbol === "function" && Symbol.iterator) {
    iter[Symbol.iterator] = function () {
      return this;
    };
  }

  iter.next = function (value) {
    if (waiting) {
      waiting = false;
      return value;
    }

    return pump("next", value);
  };

  if (typeof inner.throw === "function") {
    iter.throw = function (value) {
      if (waiting) {
        waiting = false;
        throw value;
      }

      return pump("throw", value);
    };
  }

  if (typeof inner.return === "function") {
    iter.return = function (value) {
      return pump("return", value);
    };
  }

  return iter;
};

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
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
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineEnumerableProperties = function (obj, descs) {
  for (var key in descs) {
    var desc = descs[key];
    desc.configurable = desc.enumerable = true;
    if ("value" in desc) desc.writable = true;
    Object.defineProperty(obj, key, desc);
  }

  return obj;
};

var defaults = function (obj, defaults) {
  var keys = Object.getOwnPropertyNames(defaults);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = Object.getOwnPropertyDescriptor(defaults, key);

    if (value && value.configurable && obj[key] === undefined) {
      Object.defineProperty(obj, key, value);
    }
  }

  return obj;
};

var defineProperty = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var _instanceof = function (left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
};

var interopRequireDefault = function (obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
};

var interopRequireWildcard = function (obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
};

var newArrowCheck = function (innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
};

var objectDestructuringEmpty = function (obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var selfGlobal = typeof global === "undefined" ? self : global;

var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var slicedToArrayLoose = function (arr, i) {
  if (Array.isArray(arr)) {
    return arr;
  } else if (Symbol.iterator in Object(arr)) {
    var _arr = [];

    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);

      if (i && _arr.length === i) break;
    }

    return _arr;
  } else {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var taggedTemplateLiteralLoose = function (strings, raw) {
  strings.raw = raw;
  return strings;
};

var temporalRef = function (val, name, undef) {
  if (val === undef) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  } else {
    return val;
  }
};

var temporalUndefined = {};

var toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var babelHelpers = /*#__PURE__*/Object.freeze({
  jsx: jsx,
  asyncIterator: asyncIterator,
  asyncGenerator: asyncGenerator,
  asyncGeneratorDelegate: asyncGeneratorDelegate,
  asyncToGenerator: asyncToGenerator,
  classCallCheck: classCallCheck,
  createClass: createClass,
  defineEnumerableProperties: defineEnumerableProperties,
  defaults: defaults,
  defineProperty: defineProperty,
  get: get,
  inherits: inherits,
  interopRequireDefault: interopRequireDefault,
  interopRequireWildcard: interopRequireWildcard,
  newArrowCheck: newArrowCheck,
  objectDestructuringEmpty: objectDestructuringEmpty,
  objectWithoutProperties: objectWithoutProperties,
  possibleConstructorReturn: possibleConstructorReturn,
  selfGlobal: selfGlobal,
  set: set,
  slicedToArray: slicedToArray,
  slicedToArrayLoose: slicedToArrayLoose,
  taggedTemplateLiteral: taggedTemplateLiteral,
  taggedTemplateLiteralLoose: taggedTemplateLiteralLoose,
  temporalRef: temporalRef,
  temporalUndefined: temporalUndefined,
  toArray: toArray,
  toConsumableArray: toConsumableArray,
  'typeof': _typeof,
  'extends': _extends,
  'instanceof': _instanceof
});

var Alert = function (_React$Component) {
  inherits(Alert, _React$Component);

  function Alert() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Alert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Alert.__proto__ || Object.getPrototypeOf(Alert)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isDismissed: false
    }, _this._handleOnDismissClick = function () {
      if (_this.props.onDismissClick) _this.props.onDismissClick();
      _this.setState({ isDismissed: true });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Alert, [{
    key: "render",
    value: function render() {
      var isDismissed = this.state.isDismissed;
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          type = _props.type,
          icon = _props.icon,
          hasExtraSpace = _props.hasExtraSpace,
          isDismissible = _props.isDismissible,
          avatar = _props.avatar,
          onClick = _props.onClick,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          onPointerEnter = _props.onPointerEnter,
          onPointerLeave = _props.onPointerLeave;

      var classes = classnames("alert", "alert-" + type, {
        "alert-icon": !!icon,
        "mt-5 mb-6": hasExtraSpace,
        "alert-dismissible": isDismissible,
        "alert-avatar": !!avatar
      }, className);

      var events = {
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onPointerEnter: onPointerEnter,
        onPointerLeave: onPointerLeave
      };

      return !isDismissed && React.createElement(
        "div",
        _extends({}, events, { className: classes, role: "alert" }),
        isDismissible && React.createElement(Button, { className: "close", onClick: this._handleOnDismissClick }),
        avatar && React.createElement(Avatar, { imageURL: avatar }),
        icon && React.createElement(Icon, { name: icon, className: "mr-2", isAriaHidden: true }),
        children
      );
    }
  }]);
  return Alert;
}(React.Component);

Alert.Link = AlertLink;

/**
 * Renders a group of Icons
 */
function AvatarList(_ref) {
  var className = _ref.className,
      children = _ref.children,
      stacked = _ref.stacked;

  var classes = classnames({
    "avatar-list": true,
    "avatar-list-stacked": stacked
  }, className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

AvatarList.displayName = "Avatar.List";

/**
 * Renders a single circular avatar
 */
function Avatar(_ref) {
  var _cn;

  var className = _ref.className,
      children = _ref.children,
      imageURL = _ref.imageURL,
      style = _ref.style,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? "" : _ref$size,
      status = _ref.status,
      placeholder = _ref.placeholder,
      icon = _ref.icon,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? "" : _ref$color,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onPointerEnter = _ref.onPointerEnter,
      onPointerLeave = _ref.onPointerLeave;

  var classes = classnames((_cn = {
    avatar: true
  }, defineProperty(_cn, "avatar-" + size, !!size), defineProperty(_cn, "avatar-placeholder", placeholder), defineProperty(_cn, "avatar-" + color, !!color), _cn), className);
  return React.createElement(
    "span",
    {
      className: classes,
      style: imageURL ? Object.assign({
        backgroundImage: "url(" + imageURL + ")"
      }, style) : style,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onPointerEnter: onPointerEnter,
      onPointerLeave: onPointerLeave
    },
    icon && React.createElement(Icon, { name: icon }),
    status && React.createElement("span", { className: "avatar-status bg-" + status }),
    children
  );
}

Avatar.List = AvatarList;

/**
 * A small colored rectangle with rounded corners.
 */
function Badge(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? "primary" : _ref$color;

  var classes = classnames(defineProperty({
    badge: true
  }, "badge-" + color, color), className);
  return React.createElement(
    "span",
    { className: classes },
    children
  );
}

function CardHeader(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$backgroundURL = _ref.backgroundURL,
      backgroundURL = _ref$backgroundURL === undefined ? "" : _ref$backgroundURL;

  var classes = classnames("card-header", className);

  return React.createElement(
    "div",
    {
      className: classes,
      style: backgroundURL ? Object.assign({
        backgroundImage: "url(" + backgroundURL + ")"
      }) : null
    },
    children
  );
}

CardHeader.displayName = "Card.Header";

function CardTitle(_ref) {
  var className = _ref.className,
      children = _ref.children,
      RootComponent = _ref.RootComponent;

  var classes = classnames("card-title", className);
  var Component = RootComponent || "h3";
  return React.createElement(
    Component,
    { className: classes },
    children
  );
}

CardTitle.displayName = "Card.Title";

function CardBody(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("card-body", className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

CardBody.displayName = "Card.Body";

function CardOptions(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("card-options", className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

CardOptions.displayName = "Card.Options";

function CardOptionsItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      icon = _ref.icon,
      type = _ref.type,
      onClick = _ref.onClick;

  var classes = classnames({
    "card-options-collapse": type === "collapse",
    "card-options-remove": type === "close",
    "card-options-fullscreen": type === "fullscreen"
  }, className);

  var dataToggle = function () {
    switch (type) {
      case "collapse":
        return "card-collapse";
      case "close":
        return "card-remove";
      case "fullscreen":
        return "card-remove";
      default:
        return "";
    }
  }();

  var iconName = function () {
    if (icon) {
      return icon;
    }
    switch (type) {
      case "collapse":
        return "chevron-up";
      case "close":
        return "x";
      case "fullscreen":
        return "maximize";
      default:
        return "";
    }
  }();

  return React.createElement(
    "a",
    { className: classes, "data-toggle": dataToggle, onClick: onClick },
    React.createElement(Icon, { name: iconName })
  );
}

CardOptionsItem.displayName = "Card.OptionsItem";

function CardStatus(_ref) {
  var _cn;

  var className = _ref.className,
      children = _ref.children,
      color = _ref.color,
      side = _ref.side;

  var classes = classnames((_cn = {
    "card-status": true
  }, defineProperty(_cn, "bg-" + color, true), defineProperty(_cn, "card-status-left", side), _cn), className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

CardStatus.displayName = "Card.Status";

function CardAlert(_ref) {
  var className = _ref.className,
      children = _ref.children,
      color = _ref.color;

  var classes = classnames("card-alert alert alert-" + color + " mb-0", className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

CardAlert.displayName = "Card.Alert";

function CardFooter(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("card-footer", className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

CardFooter.displayName = "Card.Footer";

function CardMap(_ref) {
  var className = _ref.className,
      children = _ref.children,
      placeholder = _ref.placeholder;

  var classes = classnames("card-map", { "card-map-placeholder": placeholder }, className);
  return React.createElement(
    "div",
    {
      className: classes,
      style: placeholder && { backgroundImage: "url(" + placeholder + ")" }
    },
    children
  );
}

CardMap.displayName = "Card.Map";

var Card = function (_React$PureComponent) {
  inherits(Card, _React$PureComponent);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isClosed: _this.props.isClosed || false,
      isCollapsed: _this.props.isCollapsed || false,
      isFullscreen: false
    }, _this.handleCloseOnClick = function () {
      _this.setState(function (s) {
        return {
          isClosed: !s.isClosed
        };
      });
    }, _this.handleCollapseOnClick = function () {
      _this.setState(function (s) {
        return {
          isCollapsed: !s.isCollapsed
        };
      });
    }, _this.handleFullscreenOnClick = function () {
      _this.setState(function (s) {
        return {
          isFullscreen: !s.isFullscreen
        };
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Card, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          RootComponent = _props.RootComponent,
          title = _props.title,
          body = _props.body,
          options = _props.options,
          isCollapsible = _props.isCollapsible,
          isClosable = _props.isClosable,
          isFullscreenable = _props.isFullscreenable,
          aside = _props.aside,
          statusColor = _props.statusColor,
          statusSide = _props.statusSide,
          alert = _props.alert,
          alertColor = _props.alertColor,
          footer = _props.footer;
      var _state = this.state,
          isClosed = _state.isClosed,
          isCollapsed = _state.isCollapsed,
          isFullscreen = _state.isFullscreen;

      if (isClosed) {
        return null;
      }
      var classes = classnames({
        card: true,
        aside: aside,
        "card-collapsed": isCollapsed,
        "card-fullscreen": isFullscreen
      }, className);
      var Component = RootComponent || "div";

      var card_options = (options || isCollapsible || isClosable) && React.createElement(
        Card.Options,
        null,
        options,
        isCollapsible && React.createElement(Card.OptionsItem, {
          onClick: this.handleCollapseOnClick,
          type: "collapse"
        }),
        isFullscreenable && React.createElement(Card.OptionsItem, {
          type: "fullscreen",
          onClick: this.handleFullscreenOnClick
        }),
        isClosable && React.createElement(Card.OptionsItem, { type: "close", onClick: this.handleCloseOnClick })
      );

      var card_status = statusColor && React.createElement(Card.Status, { color: statusColor, side: statusSide });

      var card_alert = alert && alertColor && React.createElement(
        Card.Alert,
        { color: alertColor },
        alert
      );

      var card_header = title && React.createElement(
        Card.Header,
        null,
        React.createElement(
          Card.Title,
          null,
          title
        ),
        card_options
      );

      var card_body = body && React.createElement(
        Card.Body,
        null,
        body
      );

      var card_footer = footer && React.createElement(
        Card.Footer,
        null,
        footer
      );

      if (card_header !== null || card_body !== null) {
        return React.createElement(
          Component,
          { className: classes },
          card_status,
          card_header,
          card_alert,
          card_body || children,
          card_footer
        );
      } else {
        return React.createElement(
          Component,
          { className: classes },
          children
        );
      }
    }
  }]);
  return Card;
}(React.PureComponent);

/** @component */


Card.Header = CardHeader;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Options = CardOptions;
Card.OptionsItem = CardOptionsItem;
Card.Status = CardStatus;
Card.Alert = CardAlert;
Card.Footer = CardFooter;
Card.Map = CardMap;

/**
 * Display an icon.
 * Uses the included feathers icon set by default but you can add your own
 */
function Icon(_ref) {
  var _cn;

  var _ref$prefix = _ref.prefix,
      prefixFromProps = _ref$prefix === undefined ? "fe" : _ref$prefix,
      name = _ref.name,
      className = _ref.className,
      link = _ref.link,
      isAriaHidden = _ref.isAriaHidden,
      payment = _ref.payment,
      flag = _ref.flag,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onPointerEnter = _ref.onPointerEnter,
      onPointerLeave = _ref.onPointerLeave,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur;

  var prefix = payment && "payment" || flag && "flag" || prefixFromProps;
  var classes = classnames((_cn = {}, defineProperty(_cn, prefix, true), defineProperty(_cn, prefix + "-" + name, true), _cn), className);
  var extraProps = isAriaHidden ? {
    "aria-hidden": "true"
  } : null;

  var eventProps = {
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onPointerEnter: onPointerEnter,
    onPointerLeave: onPointerLeave,
    onFocus: onFocus,
    onBlur: onBlur
  };

  return !link ? React.createElement("i", _extends({ className: classes }, eventProps)) : React.createElement(
    "a",
    _extends({ className: "icon" }, extraProps, eventProps),
    React.createElement("i", { className: classes })
  );
}

Icon.displayName = "Icon";

function BlogCard(_ref) {
  var children = _ref.children,
      title = _ref.title,
      description = _ref.description,
      avatarUrl = _ref.avatarUrl,
      imgUrl = _ref.imgUrl,
      imgAlt = _ref.imgAlt,
      aside = _ref.aside,
      authorName = _ref.authorName,
      date = _ref.date,
      _ref$imgSrc = _ref.imgSrc,
      imgSrc = _ref$imgSrc === undefined ? "" : _ref$imgSrc,
      _ref$avatarImgSrc = _ref.avatarImgSrc,
      avatarImgSrc = _ref$avatarImgSrc === undefined ? "" : _ref$avatarImgSrc,
      iconName = _ref.iconName,
      iconHref = _ref.iconHref,
      postHref = _ref.postHref,
      profileHref = _ref.profileHref;

  return !aside ? React.createElement(
    Card,
    null,
    React.createElement(
      "a",
      { href: postHref },
      React.createElement("img", { className: "card-img-top", src: imgSrc, alt: imgAlt })
    ),
    React.createElement(
      Card.Body,
      { className: "d-flex flex-column" },
      React.createElement(
        "h4",
        null,
        React.createElement(
          "a",
          { href: postHref },
          title
        )
      ),
      React.createElement(
        "div",
        { className: "text-muted" },
        description
      ),
      React.createElement(
        "div",
        { className: "d-flex align-items-center pt-5 mt-auto" },
        React.createElement("div", {
          className: "avatar avatar-md mr-3",
          style: { backgroundImage: "url(" + avatarImgSrc }
        }),
        React.createElement(
          "div",
          null,
          React.createElement(
            "a",
            { href: profileHref, className: "text-default" },
            authorName
          ),
          React.createElement(
            "small",
            { className: "d-block text-muted" },
            date
          )
        ),
        React.createElement(
          "div",
          { className: "ml-auto text-muted" },
          React.createElement(
            "a",
            { href: iconHref, className: "icon d-none d-md-inline-block ml-3" },
            React.createElement(Icon, { prefix: "fe", name: iconName || "heart" })
          )
        )
      )
    )
  ) : React.createElement(
    Card,
    { className: "card-aside" },
    React.createElement(
      "a",
      {
        href: postHref,
        className: "card-aside-column",
        style: { backgroundImage: "url(" + imgSrc + ")" }
      },
      ""
    ),
    React.createElement(
      Card.Body,
      { className: "d-flex flex-column" },
      React.createElement(
        "h4",
        null,
        React.createElement(
          "a",
          { href: postHref },
          title
        )
      ),
      React.createElement(
        "div",
        { className: "text-muted" },
        description
      ),
      React.createElement(
        "div",
        { className: "d-flex align-items-center pt-5 mt-auto" },
        React.createElement("div", {
          className: "avatar avatar-md mr-3",
          style: { backgroundImage: "url(" + avatarImgSrc }
        }),
        React.createElement(
          "div",
          null,
          React.createElement(
            "a",
            { href: profileHref, className: "text-default" },
            authorName
          ),
          React.createElement(
            "small",
            { className: "d-block text-muted" },
            date
          )
        ),
        React.createElement(
          "div",
          { className: "ml-auto text-red" },
          React.createElement(
            "a",
            { href: iconHref, className: "icon d-none d-md-inline-block ml-3" },
            React.createElement(Icon, { prefix: "fe", name: iconName || "heart" })
          )
        )
      )
    )
  );
}

function ButtonList(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$align = _ref.align,
      align = _ref$align === undefined ? "" : _ref$align,
      props = objectWithoutProperties(_ref, ["className", "children", "align"]);

  var classes = classnames(defineProperty({ "btn-list": true }, "text-" + align, !!align), className);
  return React.createElement(
    "div",
    _extends({ className: classes }, props),
    children
  );
}

ButtonList.displayName = "Button.List";

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && _has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var _library = true;

var _shared = createCommonjsModule(function (module) {
var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: _core.version,
  mode: 'pure',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});
});

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var f$1 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$1
};

var f$2 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$2
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

// 19.1.2.1 Object.assign(target, source, ...)





var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

var assign = _core.Object.assign;

var assign$1 = createCommonjsModule(function (module) {
module.exports = { "default": assign, __esModule: true };
});

unwrapExports(assign$1);

var _extends$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _assign2 = _interopRequireDefault(assign$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
});

var _extends$2 = unwrapExports(_extends$1);

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$1 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$1)) return O[IE_PROTO$1];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

// most Object methods by ES6 should accept primitives



var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
};

// 19.1.2.9 Object.getPrototypeOf(O)



_objectSap('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return _objectGpo(_toObject(it));
  };
});

var getPrototypeOf = _core.Object.getPrototypeOf;

var getPrototypeOf$1 = createCommonjsModule(function (module) {
module.exports = { "default": getPrototypeOf, __esModule: true };
});

var _Object$getPrototypeOf = unwrapExports(getPrototypeOf$1);

var classCallCheck$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});

var _classCallCheck = unwrapExports(classCallCheck$1);

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

var $Object = _core.Object;
var defineProperty$1 = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

var defineProperty$2 = createCommonjsModule(function (module) {
module.exports = { "default": defineProperty$1, __esModule: true };
});

unwrapExports(defineProperty$2);

var createClass$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _defineProperty2 = _interopRequireDefault(defineProperty$2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
});

var _createClass = unwrapExports(createClass$1);

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _redefine = _hide;

var _iterators = {};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$2 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$2] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

var TO_STRING_TAG = _wks('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
  _iterators[NAME] = _iterators.Array;
}

var f$3 = _wks;

var _wksExt = {
	f: f$3
};

var iterator = _wksExt.f('iterator');

var iterator$1 = createCommonjsModule(function (module) {
module.exports = { "default": iterator, __esModule: true };
});

unwrapExports(iterator$1);

var _meta = createCommonjsModule(function (module) {
var META = _uid('meta');


var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});
var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

var defineProperty$3 = _objectDp.f;
var _wksDefine = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol = {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$3($Symbol, name, { value: _wksExt.f(name) });
};

// all enumerable object keys, includes symbols



var _enumKeys = function (it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$4
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$5 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
};

var _objectGopnExt = {
	f: f$5
};

var gOPD = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$6
};

// ECMAScript 6 symbols shim





var META = _meta.KEY;



















var gOPD$1 = _objectGopd.f;
var dP$1 = _objectDp.f;
var gOPN$1 = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto$1 = Object[PROTOTYPE$2];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP$1({}, 'a', {
    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD$1(ObjectProto$1, key);
  if (protoDesc) delete ObjectProto$1[key];
  dP$1(it, key, D);
  if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
} : dP$1;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$1(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD$1(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN$1(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$1) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!_isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

_wksDefine('asyncIterator');

_wksDefine('observable');

var symbol = _core.Symbol;

var symbol$1 = createCommonjsModule(function (module) {
module.exports = { "default": symbol, __esModule: true };
});

unwrapExports(symbol$1);

var _typeof_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _iterator2 = _interopRequireDefault(iterator$1);



var _symbol2 = _interopRequireDefault(symbol$1);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});

unwrapExports(_typeof_1);

var possibleConstructorReturn$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _typeof3 = _interopRequireDefault(_typeof_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
});

var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn$1);

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */


var check = function (O, proto) {
  _anObject(O);
  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

// 19.1.3.19 Object.setPrototypeOf(O, proto)

_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

var setPrototypeOf = _core.Object.setPrototypeOf;

var setPrototypeOf$1 = createCommonjsModule(function (module) {
module.exports = { "default": setPrototypeOf, __esModule: true };
});

unwrapExports(setPrototypeOf$1);

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
_export(_export.S, 'Object', { create: _objectCreate });

var $Object$1 = _core.Object;
var create = function create(P, D) {
  return $Object$1.create(P, D);
};

var create$1 = createCommonjsModule(function (module) {
module.exports = { "default": create, __esModule: true };
});

unwrapExports(create$1);

var inherits$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf$1);



var _create2 = _interopRequireDefault(create$1);



var _typeof3 = _interopRequireDefault(_typeof_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
});

var _inherits = unwrapExports(inherits$1);

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i$1 = 0; i$1 < longerTimeoutBrowsers.length; i$1 += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i$1]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck$2 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$2 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty$4 = function (obj, key, value) {
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
};

var _extends$3 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends$3({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && parent.nodeName === 'HTML') {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends$3({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // Avoid blurry text by using full pixel integers.
  // For pixel-perfect positioning, top/bottom prefers rounded
  // values, while left/right prefers floored values.
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.round(popper.top),
    bottom: Math.round(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends$3({}, attributes, data.attributes);
  data.styles = _extends$3({}, styles, data.styles);
  data.arrowStyles = _extends$3({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$4(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$4(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends$3({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty$4({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty$4({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends$3({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty$4({}, side, reference[side]),
      end: defineProperty$4({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends$3({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck$2(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends$3({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends$3({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends$3({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends$3({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass$2(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var key = '__global_unique_id__';

var gud = function() {
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction$1 = function emptyFunction() {};

emptyFunction$1.thatReturns = makeEmptyFunction;
emptyFunction$1.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction$1.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction$1.thatReturnsNull = makeEmptyFunction(null);
emptyFunction$1.thatReturnsThis = function () {
  return this;
};
emptyFunction$1.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction$1;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

if (process.env.NODE_ENV !== 'production') {
  var printWarning$2 = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning$2.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1 = warning;

var implementation = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(propTypes);



var _gud2 = _interopRequireDefault(gud);



var _warning2 = _interopRequireDefault(warning_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (process.env.NODE_ENV !== 'production') {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(React__default.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(React__default.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];
});

unwrapExports(implementation);

var lib = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(React__default);



var _implementation2 = _interopRequireDefault(implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];
});

var createContext = unwrapExports(lib);

var ManagerContext = createContext({ getReferenceRef: undefined, referenceNode: undefined });

var Manager = function (_React$Component) {
  _inherits(Manager, _React$Component);

  function Manager() {
    _classCallCheck(this, Manager);

    var _this = _possibleConstructorReturn(this, (Manager.__proto__ || _Object$getPrototypeOf(Manager)).call(this));

    _this.getReferenceRef = function (referenceNode) {
      return _this.setState(function (_ref) {
        var context = _ref.context;
        return {
          context: _extends$2({}, context, { referenceNode: referenceNode })
        };
      });
    };

    _this.state = {
      context: {
        getReferenceRef: _this.getReferenceRef,
        referenceNode: undefined
      }
    };
    return _this;
  }

  _createClass(Manager, [{
    key: "render",
    value: function render() {
      return React.createElement(
        ManagerContext.Provider,
        { value: this.state.context },
        this.props.children
      );
    }
  }]);

  return Manager;
}(React.Component);

// call something on iterator step with safe closing on error

var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR$1 = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function (it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};

var _createProperty = function (object, index, value) {
  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
  else object[index] = value;
};

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG = _cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var ITERATOR$2 = _wks('iterator');

var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$2]
    || it['@@iterator']
    || _iterators[_classof(it)];
};

var ITERATOR$3 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function () { SAFE_CLOSING = true; };
} catch (e) { /* empty */ }

var _iterDetect = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$3]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$3] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

_export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = _toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = core_getIteratorMethod(O);
    var length, result, step, iterator;
    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = _toLength(O.length);
      for (result = new C(length); length > index; index++) {
        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

var from_1 = _core.Array.from;

var from_1$1 = createCommonjsModule(function (module) {
module.exports = { "default": from_1, __esModule: true };
});

unwrapExports(from_1$1);

var toConsumableArray$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _from2 = _interopRequireDefault(from_1$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
});

var _toConsumableArray = unwrapExports(toConsumableArray$1);

/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};

/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */
var safeInvoke = function safeInvoke(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (typeof fn === "function") {
    return fn.apply(undefined, _toConsumableArray(args));
  }
};

var initialStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: 'none'
};

var initialArrowStyle = {};

var InnerPopper = function (_React$Component) {
  _inherits(InnerPopper, _React$Component);

  function InnerPopper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InnerPopper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InnerPopper.__proto__ || _Object$getPrototypeOf(InnerPopper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      popperNode: undefined,
      arrowNode: undefined,
      popperInstance: undefined,
      data: undefined
    }, _this.setPopperNode = function (popperNode) {
      safeInvoke(_this.props.innerRef, popperNode);
      _this.setState({ popperNode: popperNode });
    }, _this.setArrowNode = function (arrowNode) {
      return _this.setState({ arrowNode: arrowNode });
    }, _this.updateStateModifier = {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        _this.setState({ data: data });
        return data;
      }
    }, _this.getOptions = function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: _extends$2({}, _this.props.modifiers, {
          arrow: {
            enabled: !!_this.state.arrowNode,
            element: _this.state.arrowNode
          },
          applyStyle: { enabled: false },
          updateStateModifier: _this.updateStateModifier
        })
      };
    }, _this.getPopperStyle = function () {
      return !_this.state.popperNode || !_this.state.data ? initialStyle : _extends$2({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    }, _this.getPopperPlacement = function () {
      return !_this.state.data ? undefined : _this.state.data.placement;
    }, _this.getArrowStyle = function () {
      return !_this.state.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    }, _this.getOutOfBoundariesState = function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    }, _this.initPopperInstance = function () {
      var referenceElement = _this.props.referenceElement;
      var _this$state = _this.state,
          popperNode = _this$state.popperNode,
          popperInstance = _this$state.popperInstance;

      if (referenceElement && popperNode && !popperInstance) {
        var _popperInstance = new Popper(referenceElement, popperNode, _this.getOptions());
        _this.setState({ popperInstance: _popperInstance });
        return true;
      }
      return false;
    }, _this.destroyPopperInstance = function (callback) {
      if (_this.state.popperInstance) {
        _this.state.popperInstance.destroy();
      }
      _this.setState({ popperInstance: undefined }, callback);
    }, _this.updatePopperInstance = function () {
      if (_this.state.popperInstance) {
        _this.destroyPopperInstance(function () {
          return _this.initPopperInstance();
        });
      }
    }, _this.scheduleUpdate = function () {
      if (_this.state.popperInstance) {
        _this.state.popperInstance.scheduleUpdate();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InnerPopper, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // If needed, initialize the Popper.js instance
      // it will return `true` if it initialized a new instance, or `false` otherwise
      // if it returns `false`, we make sure Popper props haven't changed, and update
      // the Popper.js instance if needed
      if (!this.initPopperInstance()) {
        // If the Popper.js options have changed, update the instance (destroy + create)
        if (this.props.placement !== prevProps.placement || this.props.eventsEnabled !== prevProps.eventsEnabled || this.state.arrowNode !== prevState.arrowNode || this.state.popperNode !== prevState.popperNode || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed) {
          this.updatePopperInstance();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.state.popperInstance) {
        this.state.popperInstance.destroy();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return unwrapArray(this.props.children)({
        ref: this.setPopperNode,
        style: this.getPopperStyle(),
        placement: this.getPopperPlacement(),
        outOfBoundaries: this.getOutOfBoundariesState(),
        scheduleUpdate: this.scheduleUpdate,
        arrowProps: {
          ref: this.setArrowNode,
          style: this.getArrowStyle()
        }
      });
    }
  }]);

  return InnerPopper;
}(React.Component);

InnerPopper.defaultProps = {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
};

function Popper$1(props) {
  return React.createElement(
    ManagerContext.Consumer,
    null,
    function (_ref2) {
      var referenceNode = _ref2.referenceNode;
      return React.createElement(InnerPopper, _extends$2({ referenceElement: referenceNode }, props));
    }
  );
}

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning$1 = function() {};

if (__DEV__) {
  warning$1 = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

var warning_1$1 = warning$1;

var InnerReference = function (_React$Component) {
  _inherits(InnerReference, _React$Component);

  function InnerReference() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InnerReference);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InnerReference.__proto__ || _Object$getPrototypeOf(InnerReference)).call.apply(_ref, [this].concat(args))), _this), _this.refHandler = function (node) {
      safeInvoke(_this.props.innerRef, node);
      safeInvoke(_this.props.getReferenceRef, node);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InnerReference, [{
    key: 'render',
    value: function render() {
      warning_1$1(this.props.getReferenceRef, '`Reference` should not be used outside of a `Manager` component.');
      return unwrapArray(this.props.children)({ ref: this.refHandler });
    }
  }]);

  return InnerReference;
}(React.Component);

function Reference(props) {
  return React.createElement(
    ManagerContext.Consumer,
    null,
    function (_ref2) {
      var getReferenceRef = _ref2.getReferenceRef;
      return React.createElement(InnerReference, _extends$2({ getReferenceRef: getReferenceRef }, props));
    }
  );
}

// Public types

var ButtonDropdown = function (_React$Component) {
  inherits(ButtonDropdown, _React$Component);

  function ButtonDropdown() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ButtonDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ButtonDropdown.__proto__ || Object.getPrototypeOf(ButtonDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isOpen: false }, _this._handleButtonOnClick = function (e) {
      e.preventDefault();
      _this.setState(function (s) {
        return { isOpen: !s.isOpen };
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ButtonDropdown, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          value = _props.value,
          dropdownProps = _props.dropdownProps,
          buttonProps = objectWithoutProperties(_props, ["children", "value", "dropdownProps"]);


      var propsForDropdownMenu = dropdownProps ? Object.assign(dropdownProps, { show: this.state.isOpen }) : {
        show: this.state.isOpen
      };

      var dropdownMenu = React.createElement(Dropdown.Menu, propsForDropdownMenu, children);

      return React.createElement(
        Manager,
        null,
        React.createElement(
          Reference,
          null,
          function (_ref2) {
            var ref = _ref2.ref;

            var propsForButton = Object.assign({
              onClick: _this2._handleButtonOnClick,
              rootRef: ref,
              isDropdownToggle: true
            }, buttonProps);
            var button = React.createElement(Button, propsForButton, value);
            return button;
          }
        ),
        dropdownMenu
      );
    }
  }]);
  return ButtonDropdown;
}(React.Component);

ButtonDropdown.displayName = "Button.Dropdown";

var Button = function Button(props) {
  var _cn;

  var _props$size = props.size,
      size = _props$size === undefined ? "" : _props$size,
      outline = props.outline,
      link = props.link,
      block = props.block,
      className = props.className,
      children = props.children,
      disabled = props.disabled,
      _props$color = props.color,
      color = _props$color === undefined ? "" : _props$color,
      square = props.square,
      pill = props.pill,
      icon = props.icon,
      _props$social = props.social,
      social = _props$social === undefined ? "" : _props$social,
      loading = props.loading,
      tabIndex = props.tabIndex,
      isDropdownToggle = props.isDropdownToggle,
      isOption = props.isOption,
      rootRef = props.rootRef,
      to = props.to,
      onClick = props.onClick,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onPointerEnter = props.onPointerEnter,
      onPointerLeave = props.onPointerLeave;


  var classes = classnames((_cn = {
    btn: true
  }, defineProperty(_cn, "btn-" + size, !!size), defineProperty(_cn, "btn-block", block), defineProperty(_cn, "btn-outline-" + color, outline && !!color), defineProperty(_cn, "btn-link", link), defineProperty(_cn, "disabled", disabled), defineProperty(_cn, "btn-" + color, !!color && !outline), defineProperty(_cn, "btn-" + social, !!social), defineProperty(_cn, "btn-square", square), defineProperty(_cn, "btn-pill", pill), defineProperty(_cn, "btn-icon", !children), defineProperty(_cn, "btn-loading", loading), defineProperty(_cn, "dropdown-toggle", isDropdownToggle), defineProperty(_cn, "btn-option", isOption), _cn), className);

  var propsForAll = {
    className: classes,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onPointerEnter: onPointerEnter,
    onPointerLeave: onPointerLeave,
    tabIndex: tabIndex
  };

  var childrenForAll = React.createElement(
    React.Fragment,
    null,
    social ? React.createElement(Icon, { name: social, prefix: "fa", className: children ? "mr-2" : "" }) : icon ? React.createElement(Icon, { name: icon, className: children ? "mr-2" : "" }) : null,
    children
  );

  if (!props.RootComponent || props.RootComponent === "button") {
    var _type = props.type,
        _value = props.value;

    return React.createElement(
      "button",
      _extends({}, propsForAll, { type: _type, value: _value, ref: rootRef }),
      childrenForAll
    );
  } else if (props.RootComponent === "input") {
    var _type2 = props.type,
        _value2 = props.value;

    return React.createElement("input", _extends({}, propsForAll, { type: _type2, value: _value2, ref: rootRef }));
  } else if (props.RootComponent === "a") {
    var _href = props.href,
        _target = props.target;

    return React.createElement(
      "a",
      _extends({}, propsForAll, { href: _href, target: _target, ref: rootRef }),
      childrenForAll
    );
  } else {
    var Component = props.RootComponent;
    return React.createElement(
      Component,
      _extends({}, propsForAll, { to: to }),
      childrenForAll
    );
  }
};

Button.List = ButtonList;
Button.Dropdown = ButtonDropdown;

Button.displayName = "Button";

function ListItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      inline = _ref.inline;

  var classes = classnames({ "list-inline-item": inline }, className);
  return React.createElement(
    "li",
    { className: classes },
    children
  );
}

ListItem.displayName = "List.Item";

function ListGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      transparent = _ref.transparent,
      isCardBody = _ref.isCardBody;

  var classes = classnames("list-group", "mb-0", {
    "list-group-transparent": transparent,
    "card-list-group": isCardBody
  }, className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

ListGroup.displayName = "List.Group";

function ListGroupItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      RootComponent = _ref.RootComponent,
      active = _ref.active,
      action = _ref.action,
      icon = _ref.icon,
      to = _ref.to;

  var classes = classnames("list-group-item", {
    "list-group-item-action": action
  }, {
    active: active
  }, className);
  // const Component = RootComponent || "a";
  return RootComponent ? React.createElement(
    RootComponent,
    { to: to, className: classes },
    icon && React.createElement(
      "span",
      { className: "mr-3 icon" },
      React.createElement(Icon, { prefix: "fe", name: icon }),
      " "
    ),
    children
  ) : React.createElement(
    "a",
    { className: classes, href: to },
    icon && React.createElement(
      "span",
      { className: "mr-3 icon" },
      React.createElement(Icon, { prefix: "fe", name: icon }),
      " "
    ),
    children
  );
}

ListGroupItem.displayName = "List.GroupItem";

function List(_ref) {
  var className = _ref.className,
      children = _ref.children,
      unstyled = _ref.unstyled,
      seperated = _ref.seperated,
      inline = _ref.inline;

  var classes = classnames({
    list: !unstyled,
    "list-unstyled": unstyled,
    "list-seperated": seperated,
    "list-inline": inline
  }, className);
  return React.createElement(
    "ul",
    { className: classes },
    children
  );
}

List.Item = ListItem;
List.Group = ListGroup;
List.GroupItem = ListGroupItem;

function MediaBody(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("media-body", className);

  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

function MediaHeading(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("media-heading", className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

function MediaList(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("media-list", className);
  return React.createElement(
    "ul",
    { className: classes },
    children
  );
}

function MediaObject(_ref) {
  var className = _ref.className,
      children = _ref.children,
      avatar = _ref.avatar,
      objectURL = _ref.objectURL,
      size = _ref.size,
      rounded = _ref.rounded,
      alt = _ref.alt;

  var classes = classnames("media-object", className);
  var imageClasses = classnames({ "d-flex": true, rounded: rounded });

  var mediaImage = avatar ? React.createElement(Avatar, { size: size, imageURL: objectURL }) : objectURL ? React.createElement("img", { className: imageClasses, src: objectURL, alt: alt }) : null;

  return React.createElement(
    "div",
    { className: classes },
    mediaImage,
    children
  );
}

function MediaBodySocial(_ref) {
  var className = _ref.className,
      children = _ref.children,
      name = _ref.name,
      workTitle = _ref.workTitle,
      _ref$facebook = _ref.facebook,
      facebook = _ref$facebook === undefined ? "" : _ref$facebook,
      _ref$twitter = _ref.twitter,
      twitter = _ref$twitter === undefined ? "" : _ref$twitter,
      _ref$phone = _ref.phone,
      phone = _ref$phone === undefined ? "" : _ref$phone,
      _ref$skype = _ref.skype,
      skype = _ref$skype === undefined ? "" : _ref$skype;

  var fbIcon = void 0;
  var twitterIcon = void 0;
  var phoneIcon = void 0;
  var skypeIcon = void 0;

  if (facebook) {
    fbIcon = React.createElement(
      List.Item,
      { inline: true },
      React.createElement(
        Tooltip,
        { content: "Facebook", placement: "top" },
        React.createElement(
          "a",
          { href: "/Profile" },
          React.createElement(Icon, { prefix: "fa", name: "facebook" })
        )
      )
    );
  }

  if (twitter) {
    twitterIcon = React.createElement(
      List.Item,
      { inline: true },
      React.createElement(
        Tooltip,
        { content: "Twitter", placement: "top" },
        React.createElement(
          "a",
          { href: "/Profile" },
          React.createElement(Icon, { prefix: "fa", name: "twitter" })
        )
      )
    );
  }

  if (phone) {
    phoneIcon = React.createElement(
      List.Item,
      { inline: true },
      React.createElement(
        Tooltip,
        { content: "+1 234-567-8901", placement: "top" },
        React.createElement(
          "a",
          { href: "/Profile" },
          React.createElement(Icon, { prefix: "fa", name: "phone" })
        )
      )
    );
  }

  if (skype) {
    skypeIcon = React.createElement(
      List.Item,
      { inline: true },
      React.createElement(
        Tooltip,
        { content: "@skypename", placement: "top" },
        React.createElement(
          "a",
          { href: "/Profile" },
          React.createElement(Icon, { prefix: "fa", name: "skype" })
        )
      )
    );
  }
  return React.createElement(
    Media.Body,
    null,
    React.createElement(
      "h4",
      { className: "m-0" },
      name
    ),
    React.createElement(
      "p",
      { className: "text-muted mb-0" },
      workTitle
    ),
    React.createElement(
      SocialNetworksList,
      { className: "mb-0 mt-2" },
      fbIcon,
      twitterIcon,
      phoneIcon,
      skypeIcon
    ),
    children
  );
}

function MediaListItem(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("media mt-4", className);
  return React.createElement(
    "li",
    { className: classes },
    children
  );
}

function Media(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("media", className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

Media.Body = MediaBody;
Media.BodySocial = MediaBodySocial;
Media.Heading = MediaHeading;
Media.List = MediaList;
Media.ListItem = MediaListItem;
Media.Object = MediaObject;

var TextSmall = function TextSmall(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? "" : _ref$color,
      wrap = _ref.wrap,
      muted = _ref.muted;

  return React.createElement(
    Text,
    {
      RootComponent: "small",
      color: color,
      size: "sm",
      wrap: wrap,
      className: className,
      muted: muted
    },
    children
  );
};

TextSmall.displayName = "Text.Small";

var Text = function Text(_ref) {
  var _cn;

  var className = _ref.className,
      children = _ref.children,
      RootComponent = _ref.RootComponent,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? "" : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? "" : _ref$size,
      wrap = _ref.wrap,
      muted = _ref.muted,
      props = objectWithoutProperties(_ref, ["className", "children", "RootComponent", "color", "size", "wrap", "muted"]);
  var alignFromProps = props.align,
      left = props.left,
      center = props.center,
      right = props.right,
      justify = props.justify;

  var align = alignFromProps || left && "left" || center && "center" || right && "right" || justify && "justify" || "";

  var transformFromProps = props.transform,
      lowercase = props.lowercase,
      uppercase = props.uppercase,
      capitalize = props.capitalize;

  var transform = transformFromProps || lowercase && "lowercase" || uppercase && "uppercase" || capitalize && "capitalize" || "";

  var trackingFromProps = props.tracking,
      trackingTight = props.trackingTight,
      trackingNormal = props.trackingNormal,
      trackingWide = props.trackingWide;

  var tracking = trackingFromProps || trackingTight && "tight" || trackingNormal && "normal" || trackingWide && "wide" || "";

  var leadingFromProps = props.leading,
      leadingNone = props.leadingNone,
      leadingTight = props.leadingTight,
      leadingNormal = props.leadingNormal,
      leadingLoose = props.leadingLoose;

  var leading = leadingFromProps || leadingNone && "none" || leadingTight && "tight" || leadingNormal && "normal" || leadingLoose && "loose" || "";

  var classes = classnames((_cn = {}, defineProperty(_cn, "text-wrap p-lg-6", wrap), defineProperty(_cn, "text-" + color, color), defineProperty(_cn, "" + size, size), defineProperty(_cn, "text-muted", muted), defineProperty(_cn, "text-" + align, align), defineProperty(_cn, "text-" + transform, transform), defineProperty(_cn, "tracking-" + tracking, tracking), defineProperty(_cn, "leading-" + leading, leading), _cn), className);
  var Component = RootComponent || "div";
  return React.createElement(
    Component,
    _extends({ className: classes }, props),
    children
  );
};

Text.displayName = "Text";

Text.Small = TextSmall;

function CommentList(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("card-list-group", className);
  return React.createElement(
    List.Group,
    { className: classes },
    children
  );
}

function CommentReply(_ref) {
  var className = _ref.className,
      children = _ref.children,
      avatarURL = _ref.avatarURL,
      name = _ref.name,
      date = _ref.date,
      text = _ref.text;

  return React.createElement(
    Media.ListItem,
    { className: className },
    React.createElement(Media.Object, { avatar: true, objectURL: avatarURL, className: "mr-4" }),
    React.createElement(
      Media.Body,
      null,
      React.createElement(
        "strong",
        null,
        name,
        ": "
      ),
      text
    )
  );
}

function Comment(_ref) {
  var className = _ref.className,
      children = _ref.children,
      avatarURL = _ref.avatarURL,
      name = _ref.name,
      date = _ref.date,
      text = _ref.text,
      replies = _ref.replies;

  var classes = classnames("py-5", className);

  return React.createElement(
    List.GroupItem,
    { className: classes },
    React.createElement(
      Media,
      null,
      React.createElement(Media.Object, { avatar: true, objectURL: avatarURL, size: "md", className: "mr-4" }),
      React.createElement(
        Media.Body,
        null,
        React.createElement(
          Media.Heading,
          null,
          React.createElement(
            "small",
            { className: "float-right text-muted" },
            date
          ),
          React.createElement(
            "h5",
            null,
            name
          )
        ),
        React.createElement(
          Text,
          null,
          text
        ),
        replies && React.createElement(
          Media.List,
          null,
          replies
        )
      )
    )
  );
}

Comment.List = CommentList;
Comment.Reply = CommentReply;

function FormLabel(_ref) {
  var className = _ref.className,
      aside = _ref.aside,
      children = _ref.children,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onPointerEnter = _ref.onPointerEnter,
      onPointerLeave = _ref.onPointerLeave;

  var classes = classnames("form-label", className);
  return React.createElement(
    "label",
    {
      className: classes,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onPointerEnter: onPointerEnter,
      onPointerLeave: onPointerLeave
    },
    aside && React.createElement(
      "span",
      { className: "form-label-small" },
      aside
    ),
    children
  );
}

FormLabel.displayName = "Form.Label";

/**
 * A an input field
 */
function FormInput(props) {
  var className = props.className,
      name = props.name,
      icon = props.icon,
      _props$position = props.position,
      position = _props$position === undefined ? "prepend" : _props$position,
      valid = props.valid,
      tick = props.tick,
      invalid = props.invalid,
      cross = props.cross,
      error = props.error,
      placeholder = props.placeholder,
      value = props.value,
      min = props.min,
      max = props.max,
      minLength = props.minLength,
      maxLength = props.maxLength,
      checked = props.checked,
      onChange = props.onChange,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onPointerEnter = props.onPointerEnter,
      onPointerLeave = props.onPointerLeave,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onKeyPress = props.onKeyPress,
      onKeyUp = props.onKeyUp,
      onKeyDown = props.onKeyDown,
      onCopy = props.onCopy,
      onCut = props.onCut,
      onPaste = props.onPaste,
      disabled = props.disabled,
      readOnly = props.readOnly,
      autoFocus = props.autoFocus,
      required = props.required,
      label = props.label,
      autoComplete = props.autoComplete;

  var type = props.type || "text";

  var classes = classnames({
    "form-control": type !== "checkbox" && type !== "radio",
    "custom-control-input": type === "checkbox" || type === "radio",
    "is-valid": valid,
    "state-valid": tick,
    "is-invalid": invalid || !!error,
    "state-invalid": cross || !!error
  }, className);

  var feedback = error || props.feedback;

  var allInputProps = {
    name: name,
    className: classes,
    type: type,
    placeholder: placeholder,
    value: value,
    min: min,
    max: max,
    minLength: minLength,
    maxLength: maxLength,
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus,
    required: required,
    onChange: onChange,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onPointerEnter: onPointerEnter,
    onPointerLeave: onPointerLeave,
    onFocus: onFocus,
    onBlur: onBlur,
    onKeyPress: onKeyPress,
    onKeyUp: onKeyUp,
    onKeyDown: onKeyDown,
    onCopy: onCopy,
    onCut: onCut,
    onPaste: onPaste,
    autoComplete: autoComplete
  };

  var contents = !icon ? React.createElement(
    React.Fragment,
    null,
    type === "checkbox" || type === "radio" ? React.createElement("input", _extends({}, allInputProps, { checked: checked })) : React.createElement("input", allInputProps),
    feedback && React.createElement(
      "span",
      { className: "invalid-feedback" },
      feedback
    )
  ) : React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "input-icon" },
      position === "prepend" && React.createElement(
        "span",
        { className: "input-icon-addon" },
        React.createElement(Icon, { name: icon })
      ),
      React.createElement("input", allInputProps),
      position === "append" && React.createElement(
        "span",
        { className: "input-icon-addon" },
        React.createElement(Icon, { name: icon })
      )
    ),
    feedback && React.createElement(
      "span",
      { className: "invalid-feedback" },
      feedback
    )
  );

  return label ? React.createElement(
    FormGroup,
    { label: label },
    contents
  ) : contents;
}

FormInput.displayName = "Form.Input";

function FormGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      label = _ref.label,
      isRequired = _ref.isRequired,
      inputProps = _ref.inputProps;

  var classes = classnames("form-group", className);
  var inputComponent = inputProps && React.createElement(FormInput, inputProps);
  return React.createElement(
    "div",
    { className: classes },
    !label ? null : typeof label === "string" ? React.createElement(
      FormLabel,
      null,
      label,
      isRequired && React.createElement(
        "span",
        { className: "form-required" },
        "*"
      )
    ) : label,
    inputComponent || children
  );
}

FormGroup.displayName = "Form.Group";

function FormStaticText(_ref) {
  var className = _ref.className,
      children = _ref.children,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onPointerEnter = _ref.onPointerEnter,
      onPointerLeave = _ref.onPointerLeave;

  var classes = classnames("form-control-plaintext", className);
  return React.createElement(
    "div",
    {
      className: classes,
      onChange: onChange,
      onBlur: onBlur,
      onClick: onClick,
      onFocus: onFocus,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onPointerEnter: onPointerEnter,
      onPointerLeave: onPointerLeave
    },
    children
  );
}

FormStaticText.displayName = "Form.StaticText";

function FormTextarea(props) {
  var className = props.className,
      name = props.name,
      valid = props.valid,
      tick = props.tick,
      invalid = props.invalid,
      cross = props.cross,
      error = props.error,
      placeholder = props.placeholder,
      defaultValue = props.defaultValue,
      value = props.value,
      disabled = props.disabled,
      rows = props.rows,
      children = props.children,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      onClick = props.onClick,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onPointerEnter = props.onPointerEnter,
      onPointerLeave = props.onPointerLeave,
      label = props.label;

  var classes = classnames("form-control", {
    "is-valid": valid,
    "state-valid": tick,
    "is-invalid": invalid || !!error,
    "state-invalid": cross || !!error
  }, className);
  var feedback = error || props.feedback;

  var contents = React.createElement(
    React.Fragment,
    null,
    React.createElement("textarea", {
      className: classes,
      name: name,
      placeholder: placeholder,
      defaultValue: defaultValue,
      value: value || children,
      disabled: disabled,
      rows: rows,
      onChange: onChange,
      onBlur: onBlur,
      onClick: onClick,
      onFocus: onFocus,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onPointerEnter: onPointerEnter,
      onPointerLeave: onPointerLeave
    }),
    feedback && React.createElement(
      "span",
      { className: "invalid-feedback" },
      feedback
    )
  );

  return label ? React.createElement(
    FormGroup,
    { label: label },
    contents
  ) : contents;
}

FormTextarea.displayName = "Form.Textarea";

function GridRow(_ref) {
  var _cn;

  var className = _ref.className,
      children = _ref.children,
      cards = _ref.cards,
      deck = _ref.deck,
      _ref$gutters = _ref.gutters,
      gutters = _ref$gutters === undefined ? "" : _ref$gutters,
      _ref$alignItems = _ref.alignItems,
      alignItems = _ref$alignItems === undefined ? "" : _ref$alignItems,
      _ref$justifyContent = _ref.justifyContent,
      justifyContent = _ref$justifyContent === undefined ? "" : _ref$justifyContent;

  var classes = classnames("row", (_cn = {
    row: true,
    "row-cards": cards,
    "row-deck": deck
  }, defineProperty(_cn, "gutters-" + gutters, gutters), defineProperty(_cn, "align-items-" + alignItems, alignItems), defineProperty(_cn, "justify-content-" + justifyContent, justifyContent), _cn), className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

GridRow.displayName = "Grid.Row";

function GridCol(_ref) {
  var _cn;

  var className = _ref.className,
      children = _ref.children,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 0 : _ref$width,
      _ref$xs = _ref.xs,
      xs = _ref$xs === undefined ? 0 : _ref$xs,
      _ref$sm = _ref.sm,
      sm = _ref$sm === undefined ? 0 : _ref$sm,
      _ref$md = _ref.md,
      md = _ref$md === undefined ? 0 : _ref$md,
      _ref$lg = _ref.lg,
      lg = _ref$lg === undefined ? 0 : _ref$lg,
      _ref$xl = _ref.xl,
      xl = _ref$xl === undefined ? 0 : _ref$xl,
      xsAuto = _ref.xsAuto,
      smAuto = _ref.smAuto,
      mdAuto = _ref.mdAuto,
      lgAuto = _ref.lgAuto,
      xlAuto = _ref.xlAuto,
      auto = _ref.auto,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? 0 : _ref$offset,
      _ref$offsetXs = _ref.offsetXs,
      offsetXs = _ref$offsetXs === undefined ? 0 : _ref$offsetXs,
      _ref$offsetSm = _ref.offsetSm,
      offsetSm = _ref$offsetSm === undefined ? 0 : _ref$offsetSm,
      _ref$offsetMd = _ref.offsetMd,
      offsetMd = _ref$offsetMd === undefined ? 0 : _ref$offsetMd,
      _ref$offsetLg = _ref.offsetLg,
      offsetLg = _ref$offsetLg === undefined ? 0 : _ref$offsetLg,
      _ref$offsetXl = _ref.offsetXl,
      offsetXl = _ref$offsetXl === undefined ? 0 : _ref$offsetXl,
      _ref$ignoreCol = _ref.ignoreCol,
      ignoreCol = _ref$ignoreCol === undefined ? false : _ref$ignoreCol;

  var classes = classnames((_cn = {
    col: !ignoreCol
  }, defineProperty(_cn, "col-" + width, width), defineProperty(_cn, "col-xs-" + xs, xs), defineProperty(_cn, "col-xs-auto", xsAuto), defineProperty(_cn, "col-sm-" + sm, sm), defineProperty(_cn, "col-sm-auto", smAuto), defineProperty(_cn, "col-md-" + md, md), defineProperty(_cn, "col-md-auto", mdAuto), defineProperty(_cn, "col-lg-" + lg, lg), defineProperty(_cn, "col-lg-auto", lgAuto), defineProperty(_cn, "col-xl-" + xl, xl), defineProperty(_cn, "col-xl-auto", xlAuto), defineProperty(_cn, "col-auto", auto), defineProperty(_cn, "offset-" + offset, offset), defineProperty(_cn, "offset-xs-" + offsetXs, offsetXs), defineProperty(_cn, "offset-sm-" + offsetSm, offsetSm), defineProperty(_cn, "offset-md-" + offsetMd, offsetMd), defineProperty(_cn, "offset-lg-" + offsetLg, offsetLg), defineProperty(_cn, "offset-xl-" + offsetXl, offsetXl), _cn), className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

GridCol.displayName = "Grid.Col";

function Grid(props) {
  return props.children;
}

Grid.Row = GridRow;
Grid.Col = GridCol;

Grid.displayName = "Grid";

function FormImageCheck(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("gutters-sm", className);
  return React.createElement(
    Grid.Row,
    { className: classes },
    children
  );
}

FormImageCheck.displayName = "Form.ImageCheck";

function FormImageCheckItem(_ref) {
  var className = _ref.className,
      _ref$col = _ref.col;
  _ref$col = _ref$col === undefined ? {} : _ref$col;
  var _ref$col$width = _ref$col.width,
      width = _ref$col$width === undefined ? 6 : _ref$col$width,
      _ref$col$sm = _ref$col.sm,
      sm = _ref$col$sm === undefined ? 4 : _ref$col$sm,
      _ref$col$md = _ref$col.md,
      md = _ref$col$md === undefined ? 0 : _ref$col$md,
      _ref$col$lg = _ref$col.lg,
      lg = _ref$col$lg === undefined ? 0 : _ref$col$lg,
      imageURL = _ref.imageURL,
      value = _ref.value,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onPointerEnter = _ref.onPointerEnter,
      onPointerLeave = _ref.onPointerLeave,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur;

  return React.createElement(
    Grid.Col,
    { width: width, sm: sm, md: md, lg: lg },
    React.createElement(
      "label",
      { className: "imagecheck mb-4" },
      React.createElement("input", {
        name: "imagecheck",
        type: "checkbox",
        value: value,
        className: "imagecheck-input",
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onPointerEnter: onPointerEnter,
        onPointerLeave: onPointerLeave,
        onFocus: onFocus,
        onBlur: onBlur
      }),
      React.createElement(
        "figure",
        { className: "imagecheck-figure" },
        React.createElement("img", { src: imageURL, alt: "Select", className: "imagecheck-image" })
      )
    )
  );
}

FormImageCheckItem.displayName = "Form.ImageCheckItem";

function FormColorCheck(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("gutters-xs", className);
  return React.createElement(
    Grid.Row,
    { className: classes },
    children
  );
}

FormColorCheck.displayName = "Form.ColorCheck";

function FormColorCheckItem(_ref) {
  var className = _ref.className,
      color = _ref.color,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onPointerEnter = _ref.onPointerEnter,
      onPointerLeave = _ref.onPointerLeave,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur;

  var classes = classnames(className);
  return React.createElement(
    Grid.Col,
    { auto: true, className: classes },
    React.createElement(
      "label",
      { className: "colorinput" },
      React.createElement("input", {
        name: "color",
        type: "checkbox",
        value: color,
        className: "colorinput-input",
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onPointerEnter: onPointerEnter,
        onPointerLeave: onPointerLeave,
        onFocus: onFocus,
        onBlur: onBlur
      }),
      React.createElement("span", { className: "colorinput-color bg-" + color })
    )
  );
}

FormColorCheckItem.displayName = "Form.ColorCheckItem";

function FormInputGroupAppend(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("input-group-append", className);
  return React.createElement(
    "span",
    { className: classes },
    children
  );
}

FormInputGroupAppend.displayName = "Form.InputGroupAppend";

function FormInputGroupPrepend(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("input-group-prepend", className);
  return React.createElement(
    "span",
    { className: classes },
    children
  );
}

FormInputGroupPrepend.displayName = "Form.InputGroupPrepend";

function FormInputGroup(props) {
  var className = props.className,
      append = props.append,
      prepend = props.prepend,
      RootComponent = props.RootComponent,
      inputProps = props.inputProps;

  var classes = classnames({
    "input-group": true
  }, className);
  var Component = RootComponent || "div";
  var children = inputProps ? React.createElement(Form.Input, inputProps) : props.children;

  if (prepend === true) {
    return React.createElement(
      FormInputGroupPrepend,
      null,
      children
    );
  }

  if (append === true) {
    return React.createElement(
      FormInputGroupAppend,
      null,
      children
    );
  }

  return React.createElement(
    Component,
    { className: classes },
    prepend && React.createElement(
      FormInputGroupPrepend,
      null,
      prepend
    ),
    children,
    append && React.createElement(
      FormInputGroupAppend,
      null,
      append
    )
  );
}

FormInputGroup.displayName = "Form.InputGroup";

function FormHelp(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$position = _ref.position,
      position = _ref$position === undefined ? "top" : _ref$position,
      message = _ref.message;

  var classes = classnames("form-help", className);
  return React.createElement(
    "span",
    {
      className: classes,
      dataContent: message,
      dataToggle: "popover",
      dataPlacement: position
    },
    children || "?"
  );
}

FormHelp.displayName = "Form.Help";

function FormSelect(props) {
  var className = props.className,
      children = props.children,
      valid = props.valid,
      tick = props.tick,
      invalid = props.invalid,
      cross = props.cross,
      error = props.error,
      label = props.label,
      disabled = props.disabled,
      readOnly = props.readOnly,
      name = props.name,
      value = props.value,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onPointerEnter = props.onPointerEnter,
      onPointerLeave = props.onPointerLeave,
      onClick = props.onClick,
      multiple = props.multiple;

  var classes = classnames({
    "form-control": true,
    "custom-select": true,
    "is-valid": valid,
    "state-valid": tick,
    "is-invalid": invalid || !!error,
    "state-invalid": cross || !!error
  }, className);

  var feedback = error || props.feedback;

  var contents = React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "select",
      {
        name: name,
        value: value,
        onChange: onChange,
        onBlur: onBlur,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onPointerEnter: onPointerEnter,
        onPointerLeave: onPointerLeave,
        onClick: onClick,
        className: classes,
        disabled: disabled,
        readOnly: readOnly,
        multiple: multiple
      },
      children
    ),
    feedback && React.createElement(
      "span",
      { className: "invalid-feedback" },
      feedback
    )
  );

  return label ? React.createElement(
    FormGroup,
    { label: label },
    contents
  ) : contents;
}

FormSelect.displayName = "Form.Select";

function FormFooter(props) {
  var classes = classnames("form-footer", props.className);
  return React.createElement(
    "div",
    { className: classes },
    props.children
  );
}

FormFooter.displayName = "Form.Footer";

// FormEvents not imported due to check on props utilization. Props typing do not use mandatory props.

var FormRatio = function (_React$PureComponent) {
  inherits(FormRatio, _React$PureComponent);

  function FormRatio() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, FormRatio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FormRatio.__proto__ || Object.getPrototypeOf(FormRatio)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      internalValue: !_this.props.onChange ? _this.props.defaultValue : 0
    }, _this.handleOnChange = function (e) {
      if (_this.props.onChange) {
        _this.props.onChange(e);
      } else {
        var _value = Number(e.target.value);
        _this.setState({ internalValue: _value });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(FormRatio, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          _props$step = _props.step,
          step = _props$step === undefined ? 1 : _props$step,
          _props$min = _props.min,
          min = _props$min === undefined ? 0 : _props$min,
          _props$max = _props.max,
          max = _props$max === undefined ? 0 : _props$max,
          onClick = _props.onClick,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          onPointerEnter = _props.onPointerEnter,
          onPointerLeave = _props.onPointerLeave,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur;

      var classes = classnames(className);

      var value = this.props.onChange ? this.props.value : this.state.internalValue;

      return React.createElement(
        Grid.Row,
        { className: classes, alignItems: "center" },
        React.createElement(
          Grid.Col,
          null,
          React.createElement("input", {
            type: "range",
            className: "form-control custom-range",
            step: step,
            min: min,
            max: max,
            onChange: this.handleOnChange,
            onClick: onClick,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            onPointerEnter: onPointerEnter,
            onPointerLeave: onPointerLeave,
            value: value
          })
        ),
        React.createElement(
          Grid.Col,
          { auto: true },
          React.createElement("input", {
            type: "number",
            className: "form-control w-8",
            value: value,
            onFocus: onFocus,
            onBlur: onBlur,
            readOnly: true
          })
        )
      );
    }
  }]);
  return FormRatio;
}(React.PureComponent);

FormRatio.displayName = "Form.Ratio";

function FormFieldSet(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("form-fieldset", className);
  return React.createElement(
    "fieldset",
    { className: classes },
    children
  );
}

FormFieldSet.displayName = "Form.FieldSet";

function FormRadio(_ref) {
  var className = _ref.className,
      label = _ref.label,
      value = _ref.value,
      name = _ref.name,
      checked = _ref.checked,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      onChange = _ref.onChange,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onPointerEnter = _ref.onPointerEnter,
      onPointerLeave = _ref.onPointerLeave,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onClick = _ref.onClick,
      isInline = _ref.isInline;

  var classes = classnames("custom-control custom-radio", { "custom-control-inline": isInline }, className);

  var events = {
    onChange: onChange,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onPointerEnter: onPointerEnter,
    onPointerLeave: onPointerLeave,
    onBlur: onBlur,
    onFocus: onFocus,
    onClick: onClick
  };

  var inputComponent = React.createElement(Form.Input, _extends({}, events, {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    className: classes,
    disabled: disabled,
    readOnly: readOnly,
    onChange: onChange
  }));

  return label ? React.createElement(
    "label",
    { className: classes },
    inputComponent,
    React.createElement(
      "span",
      { className: "custom-control-label" },
      label
    )
  ) : inputComponent;
}

FormRadio.displayName = "Form.Radio";

function FormCheckbox(_ref) {
  var className = _ref.className,
      label = _ref.label,
      value = _ref.value,
      name = _ref.name,
      checked = _ref.checked,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      isInline = _ref.isInline;

  var classes = classnames("custom-control custom-checkbox", { "custom-control-inline": isInline }, className);
  var inputComponent = React.createElement(Form.Input, {
    type: "checkbox",
    name: name,
    value: value,
    checked: checked,
    className: classes,
    disabled: disabled,
    readOnly: readOnly,
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus
  });

  return label ? React.createElement(
    "label",
    { className: classes },
    inputComponent,
    React.createElement(
      "span",
      { className: "custom-control-label" },
      label
    )
  ) : inputComponent;
}

FormCheckbox.displayName = "Form.Checkbox";

function FormSelectGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      pills = _ref.pills,
      canSelectMultiple = _ref.canSelectMultiple,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onPointerEnter = _ref.onPointerEnter,
      onPointerLeave = _ref.onPointerLeave;

  var classes = classnames({ selectgroup: true, "w-100": true, "selectgroup-pills": pills }, className);
  return React.createElement(
    "div",
    {
      className: classes,
      onChange: onChange,
      onClick: onClick,
      onFocus: onFocus,
      onBlur: onBlur,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onPointerEnter: onPointerEnter,
      onPointerLeave: onPointerLeave
    },
    canSelectMultiple ? children.map(function (itm) {
      return React.cloneElement(itm, { type: "checkbox" });
    }) : children
  );
}

FormSelectGroup.displayName = "Form.SelectGroup";

function FormSelectGroupItem(_ref) {
  var className = _ref.className,
      label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      checked = _ref.checked,
      icon = _ref.icon,
      type = _ref.type,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onPointerEnter = _ref.onPointerEnter,
      onPointerLeave = _ref.onPointerLeave;

  var classes = classnames({ "selectgroup-item": true }, className);
  var btnClasses = classnames("selectgroup-button", {
    "selectgroup-button-icon": icon
  });
  var outputLabel = icon ? React.createElement(Icon, { name: icon }) : label;
  return React.createElement(
    "label",
    { className: classes },
    type === "checkbox" ? React.createElement("input", {
      type: "checkbox",
      name: name,
      value: value,
      className: "selectgroup-input",
      checked: checked,
      onChange: onChange,
      onClick: onClick,
      onFocus: onFocus,
      onBlur: onBlur,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onPointerEnter: onPointerEnter,
      onPointerLeave: onPointerLeave
    }) : React.createElement("input", {
      type: "radio",
      name: name,
      value: value,
      className: "selectgroup-input",
      checked: checked,
      onChange: onChange,
      onClick: onClick,
      onFocus: onFocus,
      onBlur: onBlur,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onPointerEnter: onPointerEnter,
      onPointerLeave: onPointerLeave
    }),
    React.createElement(
      "span",
      { className: btnClasses },
      outputLabel
    )
  );
}

FormSelectGroupItem.displayName = "Form.SelectGroupItem";

var FormFileInput = function (_React$Component) {
  inherits(FormFileInput, _React$Component);

  function FormFileInput() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, FormFileInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FormFileInput.__proto__ || Object.getPrototypeOf(FormFileInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fileName: ""
    }, _this._handleOnChange = function (event) {
      _this.setState({ fileName: event.target.files[0].name });
      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(FormFileInput, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          value = _props.value,
          name = _props.name,
          _props$label = _props.label,
          labelFromProps = _props$label === undefined ? "Choose file" : _props$label,
          disabled = _props.disabled,
          readOnly = _props.readOnly,
          onClick = _props.onClick,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          onPointerEnter = _props.onPointerEnter,
          onPointerLeave = _props.onPointerLeave,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          accept = _props.accept;


      var classes = classnames("custom-file", className);
      var label = this.state.fileName || labelFromProps;
      return React.createElement(
        "div",
        { className: classes },
        React.createElement("input", {
          type: "file",
          className: "custom-file-input",
          name: name,
          value: value,
          disabled: disabled,
          readOnly: readOnly,
          onChange: this._handleOnChange,
          onClick: onClick,
          onMouseEnter: onMouseEnter,
          onMouseLeave: onMouseLeave,
          onPointerEnter: onPointerEnter,
          onPointerLeave: onPointerLeave,
          onFocus: onFocus,
          onBlur: onBlur,
          accept: accept
        }),
        React.createElement(
          "label",
          {
            className: "custom-file-label",
            style: {
              whiteSpace: "nowrap",
              display: "block",
              overflow: "hidden"
            }
          },
          label
        )
      );
    }
  }]);
  return FormFileInput;
}(React.Component);

FormFileInput.displayName = "Form.FileInput";

function FormToggleStack(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("custom-switches-stacked", className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

FormToggleStack.displayName = "Form.ToggleStack";

function FormToggle(_ref) {
  var className = _ref.className,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? "checkbox" : _ref$type,
      name = _ref.name,
      value = _ref.value,
      label = _ref.label,
      checked = _ref.checked,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onPointerEnter = _ref.onPointerEnter,
      onPointerLeave = _ref.onPointerLeave;

  var classes = classnames("custom-switch", className);
  return React.createElement(
    "label",
    { className: classes },
    React.createElement("input", {
      type: type,
      name: name,
      value: value,
      className: "custom-switch-input",
      checked: checked,
      onChange: onChange,
      onBlur: onBlur,
      onClick: onClick,
      onFocus: onFocus,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onPointerEnter: onPointerEnter,
      onPointerLeave: onPointerLeave
    }),
    React.createElement("span", { className: "custom-switch-indicator" }),
    React.createElement(
      "span",
      { className: "custom-switch-description" },
      label
    )
  );
}

FormToggle.displayName = "Form.Toggle";

function FormInputGroupText(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("input-group-text", className);
  return React.createElement(
    "span",
    { className: classes },
    children
  );
}

FormInputGroupText.displayName = "Form.InputGroupText";

var reactTextMask = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t(React__default);}(commonjsGlobal,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(3);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(f).default}});var c=r(11),p=n(c),d=r(9),h=n(d),v=r(5),y=n(v),m=r(2),b=function(e){function t(){var e;i(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var u=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return u.setRef=u.setRef.bind(u),u.onBlur=u.onBlur.bind(u),u.onChange=u.onChange.bind(u),u}return u(t,e),l(t,[{key:"setRef",value:function(e){this.inputElement=e;}},{key:"initTextMask",value:function(){var e=this.props,t=this.props.value;this.textMaskInputElement=(0, y.default)(s({inputElement:this.inputElement},e)),this.textMaskInputElement.update(t);}},{key:"componentDidMount",value:function(){this.initTextMask();}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.value,n=t.pipe,o=t.mask,i=t.guide,a=t.placeholderChar,u=t.showMask,s={guide:i,placeholderChar:a,showMask:u},l="function"==typeof n&&"function"==typeof e.pipe?n.toString()!==e.pipe.toString():(0, m.isNil)(n)&&!(0, m.isNil)(e.pipe)||!(0, m.isNil)(n)&&(0, m.isNil)(e.pipe),f=o.toString()!==e.mask.toString(),c=Object.keys(s).some(function(t){return s[t]!==e[t]})||f||l,p=r!==this.inputElement.value;(p||c)&&this.initTextMask();}},{key:"render",value:function e(){var t=this.props,e=t.render,r=o(t,["render"]);return delete r.mask,delete r.guide,delete r.pipe,delete r.placeholderChar,delete r.keepCharPositions,delete r.value,delete r.onBlur,delete r.onChange,delete r.showMask,e(this.setRef,s({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},r))}},{key:"onChange",value:function(e){this.textMaskInputElement.update(),"function"==typeof this.props.onChange&&this.props.onChange(e);}},{key:"onBlur",value:function(e){"function"==typeof this.props.onBlur&&this.props.onBlur(e);}}]),t}(p.default.PureComponent);t.default=b,b.propTypes={mask:h.default.oneOfType([h.default.array,h.default.func,h.default.bool,h.default.shape({mask:h.default.oneOfType([h.default.array,h.default.func]),pipe:h.default.func})]).isRequired,guide:h.default.bool,value:h.default.oneOfType([h.default.string,h.default.number]),pipe:h.default.func,placeholderChar:h.default.string,keepCharPositions:h.default.bool,showMask:h.default.bool},b.defaultProps={render:function(e,t){return p.default.createElement("input",s({ref:e},t))}};},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_",t.strFunction="function";},function(e,t,r){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.placeholderChar;if(!o(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(e.indexOf(t)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(t)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?t:e}).join("")}function o(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function i(e){return "string"==typeof e||e instanceof String}function a(e){return "number"==typeof e&&void 0===e.length&&!isNaN(e)}function u(e){return "undefined"==typeof e||null===e}function s(e){for(var t=[],r=void 0;r=e.indexOf(c),r!==-1;)t.push(r),e.splice(r,1);return {maskWithoutCaretTraps:e,indexes:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.isArray=o,t.isString=i,t.isNumber=a,t.isNil=u,t.processCaretTraps=s;var l=r(1),f=[],c="[]";},function(e,t,r){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0, i.isArray)(t)){if(("undefined"==typeof t?"undefined":o(t))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");t=t(e,r),t=(0, i.processCaretTraps)(t).maskWithoutCaretTraps;}var n=r.guide,l=void 0===n||n,f=r.previousConformedValue,c=void 0===f?s:f,p=r.placeholderChar,d=void 0===p?a.placeholderChar:p,h=r.placeholder,v=void 0===h?(0, i.convertMaskToPlaceholder)(t,d):h,y=r.currentCaretPosition,m=r.keepCharPositions,b=l===!1&&void 0!==c,g=e.length,k=c.length,C=v.length,O=t.length,T=g-k,P=T>0,x=y+(P?-T:0),w=x+Math.abs(T);if(m===!0&&!P){for(var S=s,_=x;_<w;_++)v[_]===d&&(S+=d);e=e.slice(0,x)+S+e.slice(x,g);}for(var M=e.split(s).map(function(e,t){return {char:e,isNew:t>=x&&t<w}}),j=g-1;j>=0;j--){var E=M[j].char;if(E!==d){var R=j>=x&&k===O;E===v[R?j-T:j]&&M.splice(j,1);}}var V=s,N=!1;e:for(var A=0;A<C;A++){var B=v[A];if(B===d){if(M.length>0)for(;M.length>0;){var I=M.shift(),F=I.char,q=I.isNew;if(F===d&&b!==!0){V+=d;continue e}if(t[A].test(F)){if(m===!0&&q!==!1&&c!==s&&l!==!1&&P){for(var D=M.length,L=null,W=0;W<D;W++){var J=M[W];if(J.char!==d&&J.isNew===!1)break;if(J.char===d){L=W;break}}null!==L?(V+=F,M.splice(L,1)):A--;}else V+=F;continue e}N=!0;}b===!1&&(V+=v.substr(A,C));break}V+=B;}if(b&&P===!1){for(var U=null,H=0;H<V.length;H++)v[H]===d&&(U=H);V=null!==U?V.substr(0,U+1):s;}return {conformedValue:V,meta:{someCharsRejected:N}}}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n;var i=r(2),a=r(1),u=[],s="";},function(e,t){function r(e){var t=e.previousConformedValue,r=void 0===t?o:t,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,s=void 0===u?0:u,l=e.conformedValue,f=e.rawValue,c=e.placeholderChar,p=e.placeholder,d=e.indexesOfPipedChars,h=void 0===d?n:d,v=e.caretTrapIndexes,y=void 0===v?n:v;if(0===s||!f.length)return 0;var m=f.length,b=r.length,g=p.length,k=l.length,C=m-b,O=C>0,T=0===b,P=C>1&&!O&&!T;if(P)return s;var x=O&&(r===l||l===p),w=0,S=void 0,_=void 0;if(x)w=s-C;else{var M=l.toLowerCase(),j=f.toLowerCase(),E=j.substr(0,s).split(o),R=E.filter(function(e){return M.indexOf(e)!==-1});_=R[R.length-1];var V=a.substr(0,R.length).split(o).filter(function(e){return e!==c}).length,N=p.substr(0,R.length).split(o).filter(function(e){return e!==c}).length,A=N!==V,B=void 0!==a[R.length-1]&&void 0!==p[R.length-2]&&a[R.length-1]!==c&&a[R.length-1]!==p[R.length-1]&&a[R.length-1]===p[R.length-2];!O&&(A||B)&&V>0&&p.indexOf(_)>-1&&void 0!==f[s]&&(S=!0,_=f[s]);for(var I=h.map(function(e){return M[e]}),F=I.filter(function(e){return e===_}).length,q=R.filter(function(e){return e===_}).length,D=p.substr(0,p.indexOf(c)).split(o).filter(function(e,t){return e===_&&f[t]!==e}).length,L=D+q+F+(S?1:0),W=0,J=0;J<k;J++){var U=M[J];if(w=J+1,U===_&&W++,W>=L)break}}if(O){for(var H=w,Y=w;Y<=g;Y++)if(p[Y]===c&&(H=Y),p[Y]===c||y.indexOf(Y)!==-1||Y===g)return H}else if(S){for(var z=w-1;z>=0;z--)if(l[z]===_||y.indexOf(z)!==-1||0===z)return z}else for(var G=w;G>=0;G--)if(p[G-1]===c||y.indexOf(G)!==-1||0===G)return G}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=[],o="";},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return {state:t,update:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,l=n.mask,c=n.guide,y=n.pipe,b=n.placeholderChar,g=void 0===b?h.placeholderChar:b,k=n.keepCharPositions,C=void 0!==k&&k,O=n.showMask,T=void 0!==O&&O;if("undefined"==typeof r&&(r=o.value),r!==t.previousConformedValue){("undefined"==typeof l?"undefined":s(l))===m&&void 0!==l.pipe&&void 0!==l.mask&&(y=l.pipe,l=l.mask);var P=void 0,x=void 0;if(l instanceof Array&&(P=(0, d.convertMaskToPlaceholder)(l,g)),l!==!1){var w=a(r),S=o.selectionEnd,_=t.previousConformedValue,M=t.previousPlaceholder,j=void 0;if(("undefined"==typeof l?"undefined":s(l))===h.strFunction){if(x=l(w,{currentCaretPosition:S,previousConformedValue:_,placeholderChar:g}),x===!1)return;var E=(0, d.processCaretTraps)(x),R=E.maskWithoutCaretTraps,V=E.indexes;x=R,j=V,P=(0, d.convertMaskToPlaceholder)(x,g);}else x=l;var N={previousConformedValue:_,guide:c,placeholderChar:g,pipe:y,placeholder:P,currentCaretPosition:S,keepCharPositions:C},A=(0, p.default)(w,x,N),B=A.conformedValue,I=("undefined"==typeof y?"undefined":s(y))===h.strFunction,F={};I&&(F=y(B,u({rawValue:w},N)),F===!1?F={value:_,rejected:!0}:(0, d.isString)(F)&&(F={value:F}));var q=I?F.value:B,D=(0, f.default)({previousConformedValue:_,previousPlaceholder:M,conformedValue:q,placeholder:P,rawValue:w,currentCaretPosition:S,placeholderChar:g,indexesOfPipedChars:F.indexesOfPipedChars,caretTrapIndexes:j}),L=q===P&&0===D,W=T?P:v,J=L?W:q;t.previousConformedValue=J,t.previousPlaceholder=P,o.value!==J&&(o.value=J,i(o,D));}}}}}function i(e,t){document.activeElement===e&&(b?g(function(){return e.setSelectionRange(t,t,y)},0):e.setSelectionRange(t,t,y));}function a(e){if((0, d.isString)(e))return e;if((0, d.isNumber)(e))return String(e);if(void 0===e||null===e)return v;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var l=r(4),f=n(l),c=r(3),p=n(c),d=r(2),h=r(1),v="",y="none",m="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),g="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout;},function(e,t){function r(e){return function(){return e}}var n=function(){};n.thatReturns=r,n.thatReturnsFalse=r(!1),n.thatReturnsTrue=r(!0),n.thatReturnsNull=r(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n;},function(e,t,r){function n(e,t,r,n,i,a,u,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,n,i,a,u,s],c=0;l=new Error(t.replace(/%s/g,function(){return f[c++]})),l.name="Invariant Violation";}throw l.framesToPop=1,l}}e.exports=n;},function(e,t,r){var n=r(6),o=r(7),i=r(10);e.exports=function(){function e(e,t,r,n,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r};},function(e,t,r){e.exports=r(8)();},function(e,t){var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r;},function(t,r){t.exports=e;}])});
});

var MaskedInput = unwrapExports(reactTextMask);
var reactTextMask_1 = reactTextMask.reactTextMask;

/**
 * A masked input field using react-text-mask
 */
function FormMaskedInput(props) {
  var valid = props.valid,
      tick = props.tick,
      invalid = props.invalid,
      cross = props.cross,
      feedback = props.feedback;

  var classes = classnames({
    "form-control": true,
    "is-valid": valid,
    "state-valid": tick,
    "is-invalid": invalid,
    "state-invalid": cross
  }, props.className);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(MaskedInput, _extends({ className: classes }, props)),
    feedback && (invalid || cross) && React.createElement(
      "span",
      { className: "invalid-feedback" },
      feedback
    )
  );
}

FormMaskedInput.displayName = "Form.MaskedInput";

var FormDatePicker = function (_React$PureComponent) {
  inherits(FormDatePicker, _React$PureComponent);

  function FormDatePicker() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, FormDatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FormDatePicker.__proto__ || Object.getPrototypeOf(FormDatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentDate: _this.props.defaultDate
    }, _this._handleOnChange = function (type, value) {
      var currentDate = _this.state.currentDate;
      var onChange = _this.props.onChange;

      var newDate = new Date(currentDate);

      // Change month
      if (type === "mm") {
        newDate.setMonth(value);
      }

      // Change day
      if (type === "dd") {
        newDate.setDate(value);
      }

      if (type === "yyyy") {
        newDate.setFullYear(value);
      }

      _this.setState({ currentDate: newDate }, function () {
        onChange && onChange(_this.state.currentDate);
      });
    }, _this._range = function (start, end) {
      return Array.from({ length: end + 1 - start }, function (v, k) {
        return k + start;
      });
    }, _this._renderMonths = function () {
      var currentDate = _this.state.currentDate;
      var monthLabels = _this.props.monthLabels;


      var onChangeMonths = function onChangeMonths(e) {
        return _this._handleOnChange("mm", Number(e.target.value));
      };

      return React.createElement(
        FormSelect,
        { onChange: onChangeMonths },
        monthLabels.map(function (name, index) {
          return React.createElement(
            "option",
            { value: index, selected: currentDate.getUTCMonth() === index },
            name
          );
        })
      );
    }, _this._renderDays = function () {
      var currentDate = _this.state.currentDate;

      var currentMonthDays = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth() + 1, 0).getDate();
      var daysRange = _this._range(1, currentMonthDays);
      var currentDay = currentDate.getUTCDate();

      var onChangeDays = function onChangeDays(e) {
        return _this._handleOnChange("dd", Number(e.target.value));
      };

      return React.createElement(
        FormSelect,
        { onChange: onChangeDays },
        daysRange.map(function (day) {
          return React.createElement(
            "option",
            { value: day, selected: currentDay === day },
            day
          );
        })
      );
    }, _this._renderYears = function () {
      var _this$props = _this.props,
          minYear = _this$props.minYear,
          maxYear = _this$props.maxYear;
      var currentDate = _this.state.currentDate;

      var yearsRange = _this._range(minYear, maxYear).reverse();
      var currentYear = currentDate.getUTCFullYear();

      var onChangeYears = function onChangeYears(e) {
        return _this._handleOnChange("yyyy", Number(e.target.value));
      };

      return React.createElement(
        FormSelect,
        { onChange: onChangeYears },
        yearsRange.map(function (year) {
          return React.createElement(
            "option",
            { value: year, selected: currentYear === year },
            year
          );
        })
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  // Handle date changes


  // Creates an array with numeric values from start to end


  // Renders the months select


  // Renders the days select


  // renderes the years select


  createClass(FormDatePicker, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          format = _props.format,
          className = _props.className;

      var formatSplit = format.split("/");
      var dateComponents = {
        mm: this._renderMonths(),
        dd: this._renderDays(),
        yyyy: this._renderYears()
      };

      return React.createElement(
        "div",
        { className: className },
        React.createElement(
          FormInputGroup,
          null,
          formatSplit.map(function (type) {
            return dateComponents[type];
          })
        )
      );
    }
  }]);
  return FormDatePicker;
}(React.PureComponent);

FormDatePicker.defaultProps = {
  monthLabels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  minYear: 1897,
  maxYear: new Date().getFullYear(),
  format: "mm/dd/yyyy",
  defaultDate: new Date()
};


FormDatePicker.displayName = "Form.DatePicker";

function Form(_ref) {
  var className = _ref.className,
      children = _ref.children,
      action = _ref.action,
      method = _ref.method,
      onSubmit = _ref.onSubmit,
      autoComplete = _ref.autoComplete;

  return React.createElement(
    "form",
    {
      className: className,
      onSubmit: onSubmit,
      action: action,
      method: method,
      autoComplete: autoComplete
    },
    children
  );
}

Form.defaultProps = {
  autoComplete: "off"
};

Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Input = FormInput;
Form.StaticText = FormStaticText;
Form.Textarea = FormTextarea;
Form.ImageCheck = FormImageCheck;
Form.ImageCheckItem = FormImageCheckItem;
Form.ColorCheck = FormColorCheck;
Form.ColorCheckItem = FormColorCheckItem;
Form.InputGroup = FormInputGroup;
Form.Help = FormHelp;
Form.Select = FormSelect;
Form.Footer = FormFooter;
Form.Ratio = FormRatio;
Form.FieldSet = FormFieldSet;
Form.SelectGroup = FormSelectGroup;
Form.SelectGroupItem = FormSelectGroupItem;
Form.Radio = FormRadio;
Form.Checkbox = FormCheckbox;
Form.FileInput = FormFileInput;
Form.SwitchStack = FormToggleStack;
Form.Switch = FormToggle;
Form.InputGroupAppend = FormInputGroupAppend;
Form.InputGroupPrepend = FormInputGroupPrepend;
Form.InputGroupText = FormInputGroupText;
Form.MaskedInput = FormMaskedInput;
Form.DatePicker = FormDatePicker;

/**
 * A form containing a single input field with an appended Button
 */
function FormWithSingleInputAndButton(_ref) {
  var formProps = _ref.formProps,
      inputProps = _ref.inputProps,
      buttonProps = _ref.buttonProps;

  var button = React.createElement(Button, buttonProps);
  return React.createElement(
    Form,
    formProps,
    React.createElement(Form.InputGroup, { inputProps: inputProps, append: button })
  );
}

function CommentsCard(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames(className);
  return React.createElement(
    Card,
    { className: classes },
    React.createElement(
      Card.Header,
      null,
      React.createElement(FormWithSingleInputAndButton, {
        inputProps: { placeholder: "Message" },
        buttonProps: { icon: "camera", color: "secondary" }
      }),
      React.createElement(
        Comment,
        null,
        children
      )
    )
  );
}

/**
 * Renders a Card designed for displaying details of a person or business
 */
function ContactCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      cardTitle = _ref.cardTitle,
      map = _ref.map,
      mapPlaceholder = _ref.mapPlaceholder,
      rounded = _ref.rounded,
      avatar = _ref.avatar,
      objectURL = _ref.objectURL,
      alt = _ref.alt,
      name = _ref.name,
      address = _ref.address,
      details = _ref.details,
      description = _ref.description;

  var cardClassName = classnames(className);
  return React.createElement(
    Card,
    { className: cardClassName, title: cardTitle },
    (mapPlaceholder || map) && React.createElement(
      Card.Map,
      { placeholder: mapPlaceholder },
      map
    ),
    React.createElement(
      Card.Body,
      null,
      React.createElement(
        Media,
        { className: "mb-5" },
        React.createElement(Media.Object, {
          size: "md",
          className: "mr-4",
          avatar: avatar,
          rounded: rounded,
          objectURL: objectURL,
          alt: alt
        }),
        React.createElement(
          Media.Body,
          null,
          name && React.createElement(
            Header.H5,
            null,
            name
          ),
          address && React.createElement(
            "address",
            { "class": "text-muted small" },
            address.line1,
            address.line2 && React.createElement("br", null),
            address.line2
          )
        )
      ),
      details && React.createElement(
        Grid.Row,
        null,
        details.map(function (d, i) {
          return React.createElement(
            Grid.Col,
            { width: 6, key: i },
            React.createElement(
              Header.H6,
              null,
              d.title
            ),
            React.createElement(
              "p",
              null,
              d.content
            )
          );
        })
      ),
      description && React.createElement(
        React.Fragment,
        null,
        React.createElement(
          Header.H6,
          null,
          typeof description === "string" ? "Description" : description.title
        ),
        React.createElement(
          "p",
          null,
          typeof description === "string" ? description : description.content
        )
      ),
      children
    )
  );
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "@charset \"UTF-8\";\n/**\nContainer customization\n */\n\n.container.center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n";
styleInject(css);

function Container(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("container", className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

function Loader(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames({ loader: true }, className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

Loader.displayName = "Loader";

function DimmerContent(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames({ "dimmer-content": true }, className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

DimmerContent.displayName = "Dimmer.Content";

function Dimmer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      active = _ref.active,
      loader = _ref.loader;

  var classes = classnames({ dimmer: true, active: active }, className);
  return React.createElement(
    "div",
    { className: classes },
    React.createElement(
      React.Fragment,
      null,
      loader && React.createElement(Loader, null),
      React.createElement(
        DimmerContent,
        null,
        children
      )
    )
  );
}

Dimmer.displayName = "Dimmer";

Dimmer.Content = DimmerContent;

/**
 * Provides the trigger element for a Dropdown
 */
function DropdownTrigger(_ref) {
  var className = _ref.className,
      _ref$toggle = _ref.toggle,
      toggle = _ref$toggle === undefined ? true : _ref$toggle,
      value = _ref.value,
      children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? "link" : _ref$type,
      icon = _ref.icon,
      color = _ref.color,
      isNavLink = _ref.isNavLink,
      isOption = _ref.isOption,
      onClick = _ref.onClick,
      rootRef = _ref.rootRef;

  var classes = classnames({ "dropdown-toggle": toggle, "nav-link": isNavLink }, className);

  var childrenFragment = React.createElement(
    React.Fragment,
    null,
    icon && React.createElement(
      React.Fragment,
      null,
      React.createElement(Icon, { name: icon }),
      " "
    ),
    value,
    children
  );

  return type === "link" ? React.createElement(
    Reference,
    null,
    function (_ref2) {
      var ref = _ref2.ref;
      return React.createElement(
        "a",
        { className: classes, onClick: onClick, ref: ref },
        childrenFragment
      );
    }
  ) : React.createElement(
    Reference,
    null,
    function (_ref3) {
      var ref = _ref3.ref;
      return React.createElement(
        Button,
        {
          className: classes,
          color: color,
          isDropdownToggle: true,
          isOption: isOption,
          onClick: onClick,
          rootRef: ref
        },
        childrenFragment
      );
    }
  );
}

DropdownTrigger.displayName = "Dropdown.Trigger";

/**
 * The wrapper element for a Dropdowns Items
 */
function DropdownMenu(_ref) {
  var _cn;

  var className = _ref.className,
      children = _ref.children,
      _ref$position = _ref.position,
      position = _ref$position === undefined ? "bottom" : _ref$position,
      arrow = _ref.arrow,
      _ref$arrowPosition = _ref.arrowPosition,
      arrowPosition = _ref$arrowPosition === undefined ? "left" : _ref$arrowPosition,
      style = _ref.style,
      rootRef = _ref.rootRef,
      _ref$show = _ref.show,
      show = _ref$show === undefined ? false : _ref$show;

  var classes = classnames((_cn = {
    "dropdown-menu": true
  }, defineProperty(_cn, "dropdown-menu-" + arrowPosition, arrowPosition), defineProperty(_cn, "dropdown-menu-arrow", arrow), defineProperty(_cn, "show", show), _cn), className);
  return show && React.createElement(
    Popper$1,
    { placement: position, eventsEnabled: true, positionFixed: false },
    function (_ref2) {
      var ref = _ref2.ref,
          style = _ref2.style,
          placement = _ref2.placement;

      return React.createElement(
        "div",
        {
          className: classes,
          "data-placement": placement,
          style: style,
          ref: ref
        },
        children
      );
    }
  );
}

DropdownMenu.displayName = "Dropdown.Menu";

/**
 * An individual item that should be contained within a Dropdown.Menu
 */
function DropdownItem(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      value = _ref.value,
      children = _ref.children,
      badge = _ref.badge,
      badgeType = _ref.badgeType,
      to = _ref.to,
      RootComponent = _ref.RootComponent,
      onClick = _ref.onClick,
      useExact = _ref.useExact;

  var classes = classnames({ "dropdown-item": true }, className);
  var childrenForAll = React.createElement(
    React.Fragment,
    null,
    badge && React.createElement(
      "span",
      { className: "float-right" },
      React.createElement(
        Badge,
        { color: badgeType },
        badge
      )
    ),
    icon && React.createElement(
      React.Fragment,
      null,
      React.createElement(Icon, { name: icon, className: "dropdown-icon" }),
      " "
    ),
    value,
    children
  );
  return RootComponent ? React.createElement(
    RootComponent,
    { className: classes, to: to, onClick: onClick, exact: useExact },
    childrenForAll
  ) : React.createElement(
    "a",
    { className: classes, href: to, onClick: onClick },
    childrenForAll
  );
}

DropdownItem.displayName = "Dropdown.Item";

/**
 * Used to seperate items within a Dropdown with a horizontal line
 */
function DropdownItemDivider(props) {
  return React.createElement(
    "div",
    { className: "dropdown-divider" },
    props.children
  );
}

DropdownItemDivider.displayName = "Dropdown.ItemDivider";

/**
 * A helper to help you do something when a user clicks outside of a component
 */
var ClickOutside = function (_React$PureComponent) {
  inherits(ClickOutside, _React$PureComponent);

  function ClickOutside() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ClickOutside);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ClickOutside.__proto__ || Object.getPrototypeOf(ClickOutside)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      document.addEventListener("mousedown", _this.handleOutsideOnClick, false);
    }, _this.componentWillUnmount = function () {
      document.removeEventListener("mousedown", _this.handleOutsideOnClick, false);
    }, _this.setElementRef = function (el) {
      if (el) _this.elementRef = el;
    }, _this.isOutsideClick = function (target) {
      return _this.elementRef && target instanceof Node && !_this.elementRef.contains(target);
    }, _this.handleOutsideOnClick = function (_ref2) {
      var target = _ref2.target;

      if (_this.isOutsideClick(target)) _this.props.onOutsideClick();
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ClickOutside, [{
    key: "render",
    value: function render() {
      var children = this.props.children;

      return children({ setElementRef: this.setElementRef });
    }
  }]);
  return ClickOutside;
}(React.PureComponent);

var Dropdown = function (_React$Component) {
  inherits(Dropdown, _React$Component);

  function Dropdown() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isOpen: false }, _this._handleTriggerOnClick = function (e, o) {
      e.preventDefault();
      _this.setState(function (s) {
        return { isOpen: !s.isOpen };
      });
      if (o && o.onClick) {
        o.onClick(e);
      }
    }, _this._handleItemClick = function (e, callback) {
      _this.setState({ isOpen: false });
      if (callback) {
        callback(e);
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Dropdown, [{
    key: "render",
    value: function render() {
      var _cn,
          _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          desktopOnly = _props.desktopOnly,
          isOption = _props.isOption,
          _props$flex = _props.flex,
          flex = _props$flex === undefined ? false : _props$flex,
          props = objectWithoutProperties(_props, ["className", "children", "desktopOnly", "isOption", "flex"]);


      var classes = classnames((_cn = {
        dropdown: true,
        "d-none": desktopOnly,
        "d-md-flex": desktopOnly || flex === "md"
      }, defineProperty(_cn, "d-{flex}-flex", ["xs", "sm", "lg", "xl"].includes(flex)), defineProperty(_cn, "d-flex", flex === true), defineProperty(_cn, "card-options-dropdown", isOption), defineProperty(_cn, "show", this.state.isOpen), _cn), className);

      var trigger = function () {
        if (props.trigger) {
          return React.cloneElement(props.trigger, {
            onClick: function onClick(e) {
              return _this2._handleTriggerOnClick(e, props.trigger);
            }
          });
          // return props.trigger;
        }
        if (props.icon || props.triggerContent || props.toggle) {
          var _icon = props.icon,
              _triggerContent = props.triggerContent,
              _isNavLink = props.isNavLink,
              _type = props.type,
              _triggerClassName = props.triggerClassName,
              _color = props.color,
              _toggle = props.toggle;


          return React.createElement(
            DropdownTrigger,
            {
              isNavLink: _isNavLink,
              icon: _icon,
              type: _type,
              className: _triggerClassName,
              isOption: isOption,
              color: _color,
              toggle: _toggle,
              onClick: _this2._handleTriggerOnClick
            },
            _triggerContent
          );
        }
        return null;
      }();

      var items = function () {
        if (props.items) return props.items;
        if (props.itemsObject) {
          var _itemsObject = props.itemsObject,
              _itemsRootComponent = props.itemsRootComponent;

          return _itemsObject.map(function (item, i) {
            return item.isDivider ? React.createElement(Dropdown.ItemDivider, { key: i }) : React.createElement(Dropdown.Item, {
              icon: item.icon,
              badge: item.badge,
              badgeType: item.badgeType,
              value: item.value,
              key: i,
              to: item.to,
              RootComponent: item.RootComponent || _itemsRootComponent,
              onClick: function onClick(e) {
                return _this2._handleItemClick(e, item.onClick);
              }
            });
          });
        }
        return null;
      }();

      var menu = function () {
        if (props.items || props.itemsObject) {
          var _position = props.position,
              _arrow = props.arrow,
              _arrowPosition = props.arrowPosition,
              _dropdownMenuClassName = props.dropdownMenuClassName;

          return React.createElement(
            DropdownMenu,
            {
              position: _position,
              arrow: _arrow,
              arrowPosition: _arrowPosition,
              className: _dropdownMenuClassName,
              show: _this2.state.isOpen
            },
            items
          );
        }
        return null;
      }();

      return React.createElement(
        Manager,
        null,
        React.createElement(
          ClickOutside,
          { onOutsideClick: function onOutsideClick() {
              return _this2.setState({ isOpen: false });
            } },
          function (_ref2) {
            var setElementRef = _ref2.setElementRef;
            return React.createElement(
              "div",
              { className: classes, ref: setElementRef },
              trigger,
              menu || children
            );
          }
        )
      );
    }
  }]);
  return Dropdown;
}(React.Component);

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.ItemDivider = DropdownItemDivider;

function GalleryCardDetails(_ref) {
  var className = _ref.className,
      children = _ref.children,
      avatarURL = _ref.avatarURL,
      fullName = _ref.fullName,
      dateString = _ref.dateString;

  //classes

  var avatarClasses = classnames("mr-3");
  var dateStringClasses = classnames("d-block text-muted");

  //conditions
  var hasOtherDetails = fullName !== null || dateString !== null;

  //components
  var avatar = React.createElement(Avatar, { imageURL: avatarURL, size: "md", className: avatarClasses });
  // TODO: The following could be a seperate component
  var otherDetails = React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      fullName
    ),
    React.createElement(
      "small",
      { className: dateStringClasses },
      " ",
      dateString
    ),
    " "
  );

  return React.createElement(
    React.Fragment,
    null,
    avatarURL && avatar,
    hasOtherDetails && otherDetails,
    children
  );
}

GalleryCardDetails.displayName = "GalleryCard.Details";

function GalleryCardFooter(_ref) {
  var children = _ref.children;

  var classes = classnames("d-flex", "align-items-center", "px-2");

  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

GalleryCardFooter.displayName = "GalleryCard.Footer";

function GalleryCardIconGroup(_ref) {
  var children = _ref.children,
      className = _ref.className;

  var classes = classnames("ml-auto", "text-muted", className);

  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

GalleryCardIconGroup.displayName = "GalleryCard.IconGroup";

function GalleryCardIconItem(_ref) {
  var className = _ref.className,
      label = _ref.label,
      name = _ref.name,
      href = _ref.href,
      right = _ref.right,
      to = _ref.to,
      RootComponent = _ref.RootComponent;

  var positionRightClasses = "d-none d-md-inline-block ml-3";
  var componentClasses = !right ? classnames("icon", className) : classnames("icon", positionRightClasses, className);

  var iconClasses = classnames("mr-1");

  var childrenForAll = React.createElement(
    React.Fragment,
    null,
    React.createElement(Icon, { name: name, className: iconClasses }),
    label
  );

  var extraProps = {};

  if (href) {
    extraProps.href = href;
  }

  return RootComponent ? React.createElement(
    RootComponent,
    { className: componentClasses, to: to },
    childrenForAll
  ) : React.createElement(
    "a",
    _extends({ className: componentClasses }, extraProps),
    childrenForAll
  );
}

GalleryCardIconItem.displayName = "GalleryCard.IconItem";

function GalleryCardImage(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      href = _ref.href,
      _ref$rounded = _ref.rounded,
      rounded = _ref$rounded === undefined ? true : _ref$rounded,
      className = _ref.className,
      to = _ref.to,
      RootComponent = _ref.RootComponent;

  var componentClasses = classnames("mb-3");

  var imageClasses = classnames({
    rounded: rounded
  }, className);

  var componentOptionalProps = {};

  if (href) {
    componentOptionalProps.href = href;
  }

  var image = React.createElement("img", { src: src, alt: alt, className: imageClasses });
  return RootComponent ? React.createElement(
    RootComponent,
    { className: componentClasses, to: to },
    image
  ) : React.createElement(
    "a",
    _extends({ className: componentClasses }, componentOptionalProps),
    image
  );
}

GalleryCardImage.displayName = "GalleryCard.Image";

function GalleryCard(_ref) {
  var children = _ref.children,
      className = _ref.className;

  var cardClassName = classnames("p-3", className);
  return React.createElement(
    Card,
    { className: cardClassName },
    children
  );
}

GalleryCard.Details = GalleryCardDetails;
GalleryCard.Footer = GalleryCardFooter;
GalleryCard.IconGroup = GalleryCardIconGroup;
GalleryCard.IconItem = GalleryCardIconItem;
GalleryCard.Image = GalleryCardImage;

/**
 * A Header component rendered as a h1 HTML element with a margin below
 */
function H1(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("mt-0 mb-4", className);
  return React.createElement(
    Header,
    { RootComponent: "h1", className: classes, size: 1 },
    children
  );
}

H1.displayName = "Header.H1";

/**
 * A Header component rendered as a h2 HTML element with a margin below
 */
function H2(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("mt-0 mb-4", className);
  return React.createElement(
    Header,
    { RootComponent: "h2", className: classes, size: 2 },
    children
  );
}

H2.displayName = "Header.H2";

/**
 * A Header component rendered as a h3 HTML element with a margin below
 */
function H3(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("mt-0 mb-4", className);
  return React.createElement(
    Header,
    { RootComponent: "h3", className: classes, size: 3 },
    children
  );
}

H3.displayName = "Header.H3";

/**
 * A Header component rendered as a h4 HTML element with a margin below
 */
function H4(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("mt-0 mb-4", className);
  return React.createElement(
    Header,
    { RootComponent: "h4", className: classes, size: 4 },
    children
  );
}

H4.displayName = "Header.H4";

/**
 * A Header component rendered as a h5 HTML element with a margin below
 */
function H5(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("mt-0 mb-4", className);
  return React.createElement(
    Header,
    { RootComponent: "h5", className: classes, size: 5 },
    children
  );
}

H5.displayName = "Header.H5";

/**
 * A Header component rendered as a h6 HTML element with a margin below
 */
function H6(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("mt-0 mb-4", className);
  return React.createElement(
    Header,
    { RootComponent: "h6", className: classes, size: 6 },
    children
  );
}

H6.displayName = "Header.H6";

/**
 * A header
 * By default renders a div not a <hX> tag and has no additional spacing classes applied
 */
function Header(_ref) {
  var RootComponent = _ref.RootComponent,
      className = _ref.className,
      children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 1 : _ref$size;

  var classes = classnames("h" + size, className);
  var Component = RootComponent || "div";
  return React.createElement(
    Component,
    { className: classes },
    children
  );
}

Header.H1 = H1;
Header.H2 = H2;
Header.H3 = H3;
Header.H4 = H4;
Header.H5 = H5;
Header.H6 = H6;

/**
 * A NavItem with react-popper powered subIems Dropdowns
 */
var NavItem = function (_React$Component) {
  inherits(NavItem, _React$Component);

  function NavItem() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, NavItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = NavItem.__proto__ || Object.getPrototypeOf(NavItem)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = "Nav.Item", _this.state = {
      isOpen: false
    }, _this._handleOnClick = function () {
      if (_this.props.hasSubNav) {
        _this.setState(function (s) {
          return { isOpen: !s.isOpen };
        });
      }
      if (_this.props.onClick) _this.props.onClick();
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(NavItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          LinkComponent = _props.LinkComponent,
          value = _props.value,
          className = _props.className,
          to = _props.to,
          _props$type = _props.type,
          type = _props$type === undefined ? "li" : _props$type,
          icon = _props.icon,
          forcedHasSubNav = _props.hasSubNav,
          active = _props.active,
          subItems = _props.subItems,
          subItemsObjects = _props.subItemsObjects,
          useExact = _props.useExact,
          _props$position = _props.position,
          position = _props$position === undefined ? "bottom-start" : _props$position;


      var hasSubNav = forcedHasSubNav || !!subItems || !!subItemsObjects;

      var navLink = (typeof children === "string" || value) && hasSubNav ? React.createElement(
        Reference,
        null,
        function (_ref2) {
          var ref = _ref2.ref;
          return React.createElement(
            Nav.Link,
            {
              className: className,
              to: to,
              icon: icon,
              RootComponent: LinkComponent,
              hasSubNav: hasSubNav,
              active: active,
              rootRef: ref,
              useExact: useExact
            },
            !hasSubNav && typeof children === "string" ? children : value
          );
        }
      ) : React.createElement(
        Nav.Link,
        {
          className: className,
          to: to,
          icon: icon,
          RootComponent: LinkComponent,
          hasSubNav: hasSubNav,
          active: active,
          useExact: useExact
        },
        !hasSubNav && typeof children === "string" ? children : value
      );

      var childrenForAll = React.createElement(
        React.Fragment,
        null,
        navLink,
        typeof children !== "string" && !hasSubNav && children,
        hasSubNav && React.createElement(
          Dropdown.Menu,
          { arrow: true, show: this.state.isOpen, position: position },
          subItems || subItemsObjects && subItemsObjects.map(function (a, i) {
            return React.createElement(Nav.SubItem, {
              key: i,
              value: a.value,
              to: a.to,
              icon: a.icon,
              LinkComponent: a.LinkComponent,
              useExact: a.useExact
            });
          }) || children
        )
      );

      var wrapperClasses = classnames({
        "nav-item": true,
        show: this.state.isOpen
      });

      var wrappedChildren = type === "div" ? React.createElement(
        ClickOutside,
        { onOutsideClick: function onOutsideClick() {
            return _this2.setState({ isOpen: false });
          } },
        function (_ref3) {
          var setElementRef = _ref3.setElementRef;
          return React.createElement(
            "div",
            {
              className: wrapperClasses,
              onClick: _this2._handleOnClick,
              ref: setElementRef
            },
            childrenForAll
          );
        }
      ) : React.createElement(
        ClickOutside,
        { onOutsideClick: function onOutsideClick() {
            return _this2.setState({ isOpen: false });
          } },
        function (_ref4) {
          var setElementRef = _ref4.setElementRef;
          return React.createElement(
            "li",
            {
              className: wrapperClasses,
              onClick: _this2._handleOnClick,
              ref: setElementRef
            },
            childrenForAll
          );
        }
      );

      return hasSubNav ? React.createElement(
        Manager,
        null,
        wrappedChildren
      ) : wrappedChildren;
    }
  }]);
  return NavItem;
}(React.Component);

function NavLink(_ref) {
  var children = _ref.children,
      className = _ref.className,
      RootComponent = _ref.RootComponent,
      icon = _ref.icon,
      _ref$active = _ref.active,
      active = _ref$active === undefined ? false : _ref$active,
      to = _ref.to,
      hasSubNav = _ref.hasSubNav,
      rootRef = _ref.rootRef,
      useExact = _ref.useExact;

  var classes = classnames({ "nav-link": true, active: active }, className);

  var childrenForAll = React.createElement(
    React.Fragment,
    null,
    icon && React.createElement(
      React.Fragment,
      null,
      React.createElement(Icon, { name: icon }),
      " "
    ),
    children
  );
  return RootComponent ? React.createElement(
    RootComponent,
    { exact: useExact || false, className: classes, to: to },
    childrenForAll
  ) : React.createElement(
    "a",
    { className: classes, href: to, ref: rootRef },
    childrenForAll
  );
}

NavLink.displayName = "Nav.Link";

function NavSubItem(_ref) {
  var children = _ref.children,
      LinkComponent = _ref.LinkComponent,
      className = _ref.className,
      to = _ref.to,
      icon = _ref.icon,
      hasSubNav = _ref.hasSubNav,
      value = _ref.value,
      useExact = _ref.useExact;

  return React.createElement(
    Dropdown.Item,
    { to: to, icon: icon, RootComponent: LinkComponent, useExact: useExact || false },
    value || children
  );
}

NavSubItem.displayName = "Nav.SubItem";

function NavSubmenu(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames({ nav: true, "nav-submenu": true }, className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

NavSubmenu.displayName = "Nav.Submenu";

function NavSubmenuItem(_ref) {
  var className = _ref.className,
      RootComponent = _ref.RootComponent,
      icon = _ref.icon,
      children = _ref.children,
      _ref$active = _ref.active,
      active = _ref$active === undefined ? false : _ref$active,
      to = _ref.to;

  var classes = classnames({ "nav-item": true, active: active }, className);
  var Component = RootComponent || "a";
  return React.createElement(
    Component,
    { className: classes, to: to },
    icon && React.createElement(
      React.Fragment,
      null,
      React.createElement(Icon, { name: icon }),
      " "
    ),
    children
  );
}

NavSubmenuItem.displayName = "Nav.SubmenuItem";

var Nav = function (_React$Component) {
  inherits(Nav, _React$Component);

  function Nav() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Nav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Nav.__proto__ || Object.getPrototypeOf(Nav)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      pathName: null
    }, _this.routerCallback = function (location) {
      _this.setState({ pathName: location.pathname });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Nav, [{
    key: "computeActive",
    value: function computeActive(initialValue, to, subItems) {
      var pathName = this.state.pathName;


      if (initialValue !== null && initialValue !== undefined && initialValue === true) {
        return true;
      }

      if (to !== null && to !== undefined && to === pathName) {
        return true;
      }

      if (subItems !== null && subItems !== undefined) {
        if (subItems.find(function (item) {
          return item.to !== null && item.to !== undefined && item.to === pathName;
        })) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          _props$tabbed = _props.tabbed,
          tabbed = _props$tabbed === undefined ? true : _props$tabbed,
          items = _props.items,
          itemsObjects = _props.itemsObjects,
          routerContextComponentType = _props.routerContextComponentType;

      var classes = classnames({ nav: true, "nav-tabs": tabbed }, className);

      var element = null;
      if (routerContextComponentType) {
        var routerContextComponentFactory = React.createFactory(routerContextComponentType);
        element = routerContextComponentFactory({
          callback: this.routerCallback
        });
      }

      return React.createElement(
        React.Fragment,
        null,
        element,
        React.createElement(
          "ul",
          { className: classes },
          items || itemsObjects && itemsObjects.map(function (a, i) {
            return React.createElement(Nav.Item, {
              key: i,
              icon: a.icon,
              value: a.value,
              to: a.to,
              hasSubNav: !!a.subItems,
              LinkComponent: a.LinkComponent,
              subItemsObjects: a.subItems,
              active: _this2.computeActive(a.active, a.to, a.subItems),
              useExact: a.useExact
            });
          }) || children
        )
      );
    }
  }]);
  return Nav;
}(React.Component);

//Nav.Item = NavItem;

Nav.Item = NavItem;
Nav.SubItem = NavSubItem;
Nav.Link = NavLink;
Nav.Submenu = NavSubmenu;
Nav.SubmenuItem = NavSubmenuItem;

/**
 * An Icon triggered Dropdown containing Notifications
 */
function NotificationTray(props) {
  var children = props.children,
      unread = props.unread,
      notificationsObjects = props.notificationsObjects,
      markAllAsRead = props.markAllAsRead;

  var notifications = children && React.Children.toArray(children);
  return React.createElement(Dropdown, {
    triggerContent: unread && React.createElement("span", { className: "nav-unread" }),
    toggle: false,
    icon: "bell",
    isNavLink: true,
    position: "bottom-end",
    arrow: true,
    arrowPosition: "right",
    flex: true,
    items: React.createElement(
      React.Fragment,
      null,
      notifications && notifications.map(function (n, i) {
        return React.createElement(
          Dropdown.Item,
          { className: "d-flex", key: i },
          n
        );
      }) || notificationsObjects && notificationsObjects.map(function (n, i) {
        return React.createElement(
          Dropdown.Item,
          {
            className: "d-flex " + (n.unread ? "bg-light" : ""),
            key: i
          },
          React.createElement(Notification, {
            unread: n.unread,
            avatarURL: n.avatarURL,
            message: n.message,
            time: n.time
          })
        );
      }),
      markAllAsRead && unread && React.createElement(
        React.Fragment,
        null,
        React.createElement(Dropdown.ItemDivider, null),
        React.createElement(
          Dropdown.Item,
          {
            className: "text-center text-muted-dark",
            onClick: function onClick() {
              return markAllAsRead();
            }
          },
          "Mark all as read"
        )
      )
    )
  });
}

/**
 * An individual Notification made up of an Avatar alongside some text and the time
 */
function Notification(_ref) {
  var avatarURL = _ref.avatarURL,
      message = _ref.message,
      time = _ref.time,
      unread = _ref.unread;

  return React.createElement(
    React.Fragment,
    null,
    avatarURL && React.createElement(Avatar, { className: "mr-3 align-self-center", imageURL: avatarURL }),
    React.createElement(
      "div",
      null,
      message,
      time && React.createElement(
        Text,
        { color: "muted", size: "small" },
        time
      )
    )
  );
}

Notification.Tray = NotificationTray;

function PageMain(_ref) {
  var children = _ref.children;

  return React.createElement(
    "div",
    { className: "page-main" },
    children
  );
}

PageMain.displayName = "Page.Main";

function PageTitle(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("page-title", className);
  return React.createElement(
    "h1",
    { className: classes },
    children
  );
}

PageTitle.displayName = "Page.Title";

function PageSubTitle(_ref) {
  var children = _ref.children;

  return React.createElement(
    "div",
    { className: "page-subtitle" },
    children
  );
}

PageSubTitle.displayName = "Page.SubTitle";

function PageOptions(_ref) {
  var children = _ref.children;

  return React.createElement(
    "div",
    { className: "page-options d-flex" },
    children
  );
}

PageOptions.displayName = "Page.Options";

function PageHeader(_ref) {
  var children = _ref.children,
      title = _ref.title,
      subTitle = _ref.subTitle,
      options = _ref.options;

  return React.createElement(
    "div",
    { className: "page-header" },
    title && React.createElement(
      PageTitle,
      null,
      title
    ),
    subTitle && React.createElement(
      PageSubTitle,
      null,
      subTitle
    ),
    options && React.createElement(
      PageOptions,
      null,
      options
    ),
    children
  );
}

PageHeader.displayName = "Page.Header";

function PageContent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      title = _ref.title,
      subTitle = _ref.subTitle,
      options = _ref.options;

  var classes = classnames("page-content", className);
  return React.createElement(
    "div",
    { className: classes },
    React.createElement(
      Container,
      null,
      (title || subTitle || options) && React.createElement(PageHeader, { title: title, subTitle: subTitle, options: options }),
      children
    )
  );
}

PageContent.displayName = "Page.Content";

function PageContentWithSidebar(_ref) {
  var children = _ref.children,
      header = _ref.header,
      sidebar = _ref.sidebar;

  return React.createElement(
    Page.Content,
    null,
    header,
    React.createElement(
      Grid.Row,
      null,
      React.createElement(
        Grid.Col,
        { lg: 3, className: "order-lg-1 mb-4" },
        sidebar
      ),
      React.createElement(
        Grid.Col,
        { lg: 9 },
        children
      )
    )
  );
}

PageContentWithSidebar.displayName = "Page.ContentWithSidebar";

function PageCard(_ref) {
  var children = _ref.children,
      title = _ref.title,
      header = _ref.header,
      footer = _ref.footer,
      RootComponent = _ref.RootComponent;

  return React.createElement(
    "div",
    { className: "my-3 my-md-5" },
    React.createElement(
      Container,
      null,
      React.createElement(
        Grid.Row,
        null,
        React.createElement(
          Grid.Col,
          { width: 12 },
          React.createElement(
            Card,
            { RootComponent: RootComponent },
            title && React.createElement(
              Card.Header,
              null,
              React.createElement(
                Card.Title,
                null,
                title
              )
            ),
            header,
            React.createElement(
              Card.Body,
              null,
              children
            ),
            footer
          )
        )
      )
    )
  );
}

PageCard.displayName = "Page.Card";

function PageMapHeader(_ref) {
  var children = _ref.children;

  return React.createElement(
    "div",
    { className: "map-header" },
    children
  );
}

PageMapHeader.displayName = "Page.MapHeader";

function Page(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("page", className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

Page.Main = PageMain;
Page.Content = PageContent;
Page.Header = PageHeader;
Page.ContentWithSidebar = PageContentWithSidebar;
Page.Card = PageCard;
Page.Title = PageTitle;
Page.MapHeader = PageMapHeader;

function PricingCardCategory(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("card-category", className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

PricingCardCategory.displayName = "PricingCard.Category";

// TODO:Add size options


function PricingCardPrice(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("display-3 my-4", className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

PricingCardPrice.displayName = "PricingCard.Price";

function PricingCardAttributeList(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames("list-unstyled", "leading-loose", className);
  return React.createElement(
    "ul",
    { className: classes },
    children
  );
}

PricingCardAttributeList.displayName = "PricingCard.AttributeList";

// TODO: Add RootComponent prop


function PricingCardAttributeItem(_ref) {
  var children = _ref.children,
      available = _ref.available,
      hasIcon = _ref.hasIcon;

  var iconClasses = available ? classnames("text-success", "mr-2") : classnames("text-danger", "mr-2");

  return hasIcon ? React.createElement(
    "li",
    null,
    " ",
    React.createElement(Icon, {
      prefix: "fe",
      name: available ? "check" : "x",
      className: iconClasses,
      isAriaHidden: true
    }),
    children
  ) : React.createElement(
    "li",
    null,
    " ",
    children,
    " "
  );
}

PricingCardAttributeItem.displayName = "PricingCard.AttributeItem";

// TODO: Add onClick Event Handler
// TODO : Add  color prop


function PricingCardButton(_ref) {
  var className = _ref.className,
      children = _ref.children,
      RootComponent = _ref.RootComponent,
      active = _ref.active,
      href = _ref.href,
      to = _ref.to,
      onClick = _ref.onClick;

  var classes = classnames("text-center", "mt-6");
  var Component = RootComponent || "a";
  var componentClasses = classnames("btn", active ? "btn-green" : "btn-secondary", "btn-block", className);

  var otherProps = {};

  if (href) {
    otherProps.href = href;
  }

  if (to) {
    otherProps.to = to;
  }

  if (onClick) {
    otherProps.role = "button";
    otherProps.onClick = onClick;
  }

  return React.createElement(
    "div",
    { className: classes },
    React.createElement(
      Component,
      _extends({ className: componentClasses }, otherProps),
      children
    )
  );
}

PricingCardButton.displayName = "PricingCard.Button";

function PricingCard(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$active = _ref.active,
      active = _ref$active === undefined ? false : _ref$active,
      category = _ref.category;

  var cardBodyClassName = classnames("text-center");
  var cardStatusClassName = classnames("card-status", "bg-green");
  var cardStatus = React.createElement("div", { className: cardStatusClassName });
  var cardCategory = React.createElement(
    PricingCardCategory,
    null,
    category
  );
  // TODO: Add component logic.
  return React.createElement(
    Card,
    null,
    active && cardStatus,
    React.createElement(
      Card.Body,
      { className: cardBodyClassName },
      category && cardCategory,
      children
    )
  );
}

PricingCard.Category = PricingCardCategory;
PricingCard.Price = PricingCardPrice;
PricingCard.AttributeList = PricingCardAttributeList;
PricingCard.AttributeItem = PricingCardAttributeItem;
PricingCard.Button = PricingCardButton;

function ProfileImage(_ref) {
  var avatarURL = _ref.avatarURL;

  return React.createElement("img", { className: "card-profile-img", alt: "Profile", src: avatarURL });
}

function Profile(_ref) {
  var className = _ref.className,
      children = _ref.children,
      name = _ref.name,
      _ref$avatarURL = _ref.avatarURL,
      avatarURL = _ref$avatarURL === undefined ? "" : _ref$avatarURL,
      _ref$twitterURL = _ref.twitterURL,
      _ref$backgroundURL = _ref.backgroundURL,
      backgroundURL = _ref$backgroundURL === undefined ? "" : _ref$backgroundURL,
      bio = _ref.bio;

  var classes = classnames("card-profile", className);
  return React.createElement(
    Card,
    { className: classes },
    React.createElement(Card.Header, { backgroundURL: backgroundURL }),
    React.createElement(
      Card.Body,
      { className: "text-center" },
      React.createElement(ProfileImage, { avatarURL: avatarURL }),
      React.createElement(
        Header.H3,
        { className: "mb-3" },
        name
      ),
      React.createElement(
        "p",
        { className: "mb-4" },
        bio || children
      ),
      React.createElement(SocialNetworksList, {
        itemsObjects: [{ name: "twitter", label: "Follow" }],
        prefix: "fa",
        asButtons: true
      })
    )
  );
}

Profile.Image = ProfileImage;

function ProgressBar(_ref) {
  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? "" : _ref$color,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 0 : _ref$width;

  var classes = classnames("progress-bar", defineProperty({}, "bg-" + color, !!color), className);
  return React.createElement("div", { className: classes, style: { width: width + "%" } });
}

ProgressBar.displayName = "Progress.Bar";

function Progress(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? "" : _ref$size;

  var classes = classnames("progress", defineProperty({}, "progress-" + size, !!size), className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

Progress.Bar = ProgressBar;

function ProgressCard(_ref) {
  var className = _ref.className,
      header = _ref.header,
      content = _ref.content,
      progressColor = _ref.progressColor,
      progressWidth = _ref.progressWidth;

  var classes = classnames(className);
  return React.createElement(
    Card,
    { className: classes },
    React.createElement(
      Card.Body,
      { className: "text-center" },
      React.createElement(
        Header,
        { size: 5 },
        header
      ),
      React.createElement(
        "div",
        { className: "display-4 font-weight-bold mb-4" },
        content
      ),
      React.createElement(
        Progress,
        { size: "sm" },
        React.createElement(Progress.Bar, { color: progressColor, width: progressWidth })
      )
    )
  );
}

ProgressCard.displayName = "ProgressCard";

/**
 * The very top header bar of your website, containing the logo and some optional
 * action components, such as a NotificationTray or an AccountDropdown on the right hand side
 */
var SiteHeader = function SiteHeader(_ref) {
  var children = _ref.children,
      href = _ref.href,
      align = _ref.align,
      imageURL = _ref.imageURL,
      alt = _ref.alt,
      notificationsTrayFromProps = _ref.notificationsTray,
      accountDropdownFromProps = _ref.accountDropdown,
      navItems = _ref.navItems,
      onMenuToggleClick = _ref.onMenuToggleClick;

  var notificationsTray = notificationsTrayFromProps && React.createElement(Notification.Tray, notificationsTrayFromProps);

  var accountDropdown = accountDropdownFromProps && React.createElement(AccountDropdown, accountDropdownFromProps);

  return React.createElement(
    "div",
    { className: "header py-4" },
    React.createElement(
      Container,
      { className: align },
      React.createElement(
        "div",
        { className: "d-flex" },
        children || React.createElement(
          React.Fragment,
          null,
          React.createElement(Site.Logo, { href: href, alt: alt, src: imageURL }),
          React.createElement(
            "div",
            { className: "d-flex order-lg-2 ml-auto" },
            navItems,
            notificationsTray,
            accountDropdown
          ),
          React.createElement(
            "a",
            {
              className: "header-toggler d-lg-none ml-3 ml-lg-0",
              onClick: onMenuToggleClick
            },
            React.createElement("span", { className: "header-toggler-icon" })
          )
        )
      )
    )
  );
};

SiteHeader.displayName = "Site.Header";

/**
 * The footer of your website
 */
var SiteFooter = function SiteFooter(_ref) {
  var links = _ref.links,
      note = _ref.note,
      copyright = _ref.copyright,
      nav = _ref.nav;
  return React.createElement(
    React.Fragment,
    null,
    (links || note) && React.createElement(
      "div",
      { className: "footer" },
      React.createElement(
        Container,
        null,
        React.createElement(
          Grid.Row,
          null,
          React.createElement(
            Grid.Col,
            { lg: 8 },
            React.createElement(
              Grid.Row,
              null,
              links && React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  Grid.Col,
                  { width: 6, md: 3 },
                  React.createElement(
                    List,
                    { unstyled: true, className: "mb-0" },
                    React.createElement(
                      List.Item,
                      null,
                      links[0]
                    ),
                    React.createElement(
                      List.Item,
                      null,
                      links[1]
                    )
                  )
                ),
                React.createElement(
                  Grid.Col,
                  { width: 6, md: 3 },
                  React.createElement(
                    List,
                    { unstyled: true, className: "mb-0" },
                    React.createElement(
                      List.Item,
                      null,
                      links[2]
                    ),
                    React.createElement(
                      List.Item,
                      null,
                      links[3]
                    )
                  )
                ),
                React.createElement(
                  Grid.Col,
                  { width: 6, md: 3 },
                  React.createElement(
                    List,
                    { unstyled: true, className: "mb-0" },
                    React.createElement(
                      List.Item,
                      null,
                      links[4]
                    ),
                    React.createElement(
                      List.Item,
                      null,
                      links[5]
                    )
                  )
                ),
                React.createElement(
                  Grid.Col,
                  { width: 6, md: 3 },
                  React.createElement(
                    List,
                    { unstyled: true, className: "mb-0" },
                    React.createElement(
                      List.Item,
                      null,
                      links[6]
                    ),
                    React.createElement(
                      List.Item,
                      null,
                      links[7]
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            Grid.Col,
            { lg: 4, className: "mt-4 mt-lg-0" },
            note
          )
        )
      )
    ),
    (nav || copyright) && React.createElement(
      "footer",
      { className: "footer" },
      React.createElement(
        Container,
        null,
        React.createElement(
          Grid.Row,
          { className: "align-items-center flex-row-reverse" },
          React.createElement(
            Grid.Col,
            { auto: true, className: "ml-auto" },
            React.createElement(
              Grid.Row,
              { className: "align-items-center" },
              nav
            )
          ),
          React.createElement(
            Grid.Col,
            { width: 12, lgAuto: true, className: "mt-3 mt-lg-0 text-center" },
            copyright
          )
        )
      )
    )
  );
};

SiteFooter.displayName = "Site.Footer";

var SiteNav = function SiteNav(_ref) {
  var children = _ref.children,
      items = _ref.items,
      itemsObjects = _ref.itemsObjects,
      _ref$withSearchForm = _ref.withSearchForm,
      rightColumnComponent = _ref.rightColumnComponent,
      _ref$collapse = _ref.collapse,
      collapse = _ref$collapse === undefined ? true : _ref$collapse,
      routerContextComponentType = _ref.routerContextComponentType;

  var classes = classnames("header d-lg-flex p-0", { collapse: collapse });
  return React.createElement(
    "div",
    { className: classes },
    React.createElement(
      Container,
      null,
      children || React.createElement(
        Grid.Row,
        { className: "align-items-center" },
        React.createElement(
          Grid.Col,
          { lg: 3, className: "ml-auto", ignoreCol: true },
          rightColumnComponent
        ),
        React.createElement(
          Grid.Col,
          { className: "col-lg order-lg-first" },
          React.createElement(Nav, {
            tabbed: true,
            className: "border-0 flex-column flex-lg-row",
            items: items,
            itemsObjects: itemsObjects,
            routerContextComponentType: routerContextComponentType
          })
        )
      )
    )
  );
};

SiteNav.displayName = "Site.Nav";

var SiteLogo = function SiteLogo(props) {
  return React.createElement(
    "a",
    { className: "header-brand", href: props.href },
    React.createElement("img", { src: props.src, className: "header-brand-img", alt: props.alt })
  );
};

SiteLogo.displayName = "Site.Logo";

var SiteWrapper = function (_React$PureComponent) {
  inherits(SiteWrapper, _React$PureComponent);

  function SiteWrapper() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, SiteWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = SiteWrapper.__proto__ || Object.getPrototypeOf(SiteWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      collapseMobileMenu: true
    }, _this.handleCollapseMobileMenu = function () {
      _this.setState(function (s) {
        return { collapseMobileMenu: !s.collapseMobileMenu };
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(SiteWrapper, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          headerProps = _props.headerProps,
          navProps = _props.navProps,
          footerProps = _props.footerProps,
          children = _props.children,
          routerContextComponentType = _props.routerContextComponentType;


      var headerPropsWithToggleClick = _extends({}, headerProps, {
        onMenuToggleClick: this.handleCollapseMobileMenu
      });
      var header = React.createElement(Site.Header, headerPropsWithToggleClick);
      var navPropsWithCollapse = _extends({}, navProps, {
        collapse: this.state.collapseMobileMenu,
        routerContextComponentType: routerContextComponentType
      });
      var nav = React.createElement(Site.Nav, navPropsWithCollapse);
      var footer = React.createElement(Site.Footer, footerProps);

      return React.createElement(
        Page,
        null,
        React.createElement(
          Page.Main,
          null,
          header,
          nav,
          children
        ),
        footer
      );
    }
  }]);
  return SiteWrapper;
}(React.PureComponent);

SiteWrapper.displayName = "Site.Wrapper";

/**
 * Components for building the base of your website, such as a header, footer and nav bar
 */
function Site(props) {
  return props.children;
}

Site.Header = SiteHeader;
Site.Footer = SiteFooter;
Site.Nav = SiteNav;
Site.Logo = SiteLogo;
Site.Wrapper = SiteWrapper;

Site.displayName = "Site";

function listItemFromObjectFactory() {
  var asButtons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var iconPrefix = arguments[1];

  return function (item) {
    var itemContent = asButtons ? React.createElement(
      Button,
      { to: item.to, social: item.name, color: item.color, size: "sm" },
      item.label
    ) : React.createElement(
      "a",
      { href: item.to, "data-original-title": item.tooltip },
      React.createElement(Icon, { prefix: iconPrefix, name: item.name })
    );
    return React.createElement(
      List.Item,
      { inline: true },
      itemContent
    );
  };
}

function SocialNetworksList(props) {
  var children = props.children,
      className = props.className,
      asButtons = props.asButtons,
      _props$prefix = props.prefix,
      prefix = _props$prefix === undefined ? "fe" : _props$prefix,
      items = props.items,
      itemsObjects = props.itemsObjects;

  var classes = classnames("social-links", className);

  var getObjectListItem = listItemFromObjectFactory(asButtons, prefix);

  var contents = itemsObjects && itemsObjects.map(getObjectListItem) || items && items.map(function (item) {
    return React.createElement(
      List.Item,
      { inline: true },
      item
    );
  }) || children;

  return React.createElement(
    List,
    { inline: true, className: classes },
    contents
  );
}

SocialNetworksList.displayName = "SocialNetworksList";

function Stamp(_ref) {
  var _cn;

  var children = _ref.children,
      className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? "md" : _ref$size,
      icon = _ref.icon,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? "" : _ref$color;

  var classes = classnames((_cn = { stamp: true }, defineProperty(_cn, "stamp-" + size, size), defineProperty(_cn, "bg-" + color, color), _cn), className);
  return React.createElement(
    "span",
    { className: classes },
    icon && React.createElement(Icon, { name: icon }),
    children
  );
}

Stamp.displayName = "Stamp";

function StampCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? "" : _ref$color,
      header = _ref.header,
      footer = _ref.footer;

  var classes = classnames("p-3", className);
  return React.createElement(
    Card,
    { className: classes },
    React.createElement(
      "div",
      { className: "d-flex align-items-center" },
      React.createElement(Stamp, { color: color, icon: icon, className: "mr-3" }),
      React.createElement(
        "div",
        null,
        header && React.createElement(
          Header,
          { size: 4, className: "m-0" },
          header
        ),
        children,
        footer && React.createElement(
          Text.Small,
          { muted: true },
          footer
        )
      )
    )
  );
}

StampCard.displayName = "StampCard";

/**
 * Used for dispaying an individual statistic/number with 2 potential layouts
 */
function StatsCard(_ref) {
  var className = _ref.className,
      movement = _ref.movement,
      total = _ref.total,
      label = _ref.label,
      _ref$layout = _ref.layout,
      layout = _ref$layout === undefined ? 1 : _ref$layout,
      chart = _ref.chart;

  var classes = classnames(className);
  var movementString = "" + (movement > 0 ? "+" : "") + movement + "%";
  var movementColor = !movement ? "yellow" : movement > 0 ? "green" : "red";
  if (layout === 2) {
    return React.createElement(
      Card,
      { className: classes },
      React.createElement(
        Card.Body,
        null,
        React.createElement(
          "div",
          { className: "card-value float-right text-" + movementColor },
          movementString
        ),
        React.createElement(
          Header.H3,
          { className: "mb-1" },
          total
        ),
        React.createElement(
          Text,
          { muted: true },
          label
        )
      ),
      chart && React.createElement(
        "div",
        { className: "card-chart-bg" },
        chart
      )
    );
  }

  return React.createElement(
    Card,
    { className: classes },
    React.createElement(
      Card.Body,
      { className: "p-3 text-center" },
      React.createElement(
        Text,
        { color: movementColor, className: "text-right" },
        movementString,
        React.createElement(Icon, {
          name: !movement ? "minus" : movement > 0 ? "chevron-up" : "chevron-down"
        })
      ),
      React.createElement(
        Header,
        { className: "m-0" },
        total
      ),
      React.createElement(
        Text,
        { color: "muted", className: " mb-4" },
        label
      )
    )
  );
}

StatsCard.displayName = "StatsCard";

function StoreCard(_ref) {
  var children = _ref.children,
      title = _ref.title,
      subtitle = _ref.subtitle,
      price = _ref.price,
      imgUrl = _ref.imgUrl,
      imgAlt = _ref.imgAlt;

  return React.createElement(
    Card,
    null,
    React.createElement(
      Card.Body,
      null,
      React.createElement(
        "div",
        { className: "mb-4 text-center" },
        React.createElement("img", { src: imgUrl, alt: imgAlt })
      ),
      React.createElement(
        Card.Title,
        null,
        title
      ),
      React.createElement(
        Text,
        { className: "card-subtitle" },
        subtitle
      ),
      React.createElement(
        "div",
        { className: "mt-5 d-flex align-items-center" },
        React.createElement(
          "div",
          { className: "product-price" },
          React.createElement(
            "strong",
            null,
            price
          )
        ),
        React.createElement(
          "div",
          { className: "ml-auto" },
          React.createElement(
            Button,
            { color: "primary" },
            React.createElement(Icon, { prefix: "fe", name: "plus" }),
            "Add to cart"
          )
        )
      )
    )
  );
}

var Tab = function (_React$PureComponent) {
  inherits(Tab, _React$PureComponent);

  function Tab() {
    classCallCheck(this, Tab);
    return possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
  }

  createClass(Tab, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Tab;
}(React.PureComponent);

function TabbedContainer(props) {
  var tabs = React.Children.toArray(props.children);
  return tabs.filter(function (tab) {
    return tab.props.title === props.selectedTitle;
  });
}

function TabbedHeader(props) {
  var children = props.children,
      stateCallback = props.stateCallback;

  var tabs = React.Children.toArray(children);
  return React.createElement(
    "ul",
    { className: "nav nav-tabs Tab_header_tabs" },
    tabs.map(function (tab, index) {
      var title = tab.props.title;
      return React.createElement(Nav.Item, {
        key: index,
        value: title,
        onClick: function onClick() {
          return stateCallback(title);
        },
        active: title === props.selectedTitle
      });
    })
  );
}

var css$1 = ".margin-bottom-24 {\n  margin-bottom: 24px !important;\n}\n";
styleInject(css$1);

var Tabs = function (_React$PureComponent) {
  inherits(Tabs, _React$PureComponent);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedTitle: _this.props.initialTab
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Tabs, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var selectedTitle = this.state.selectedTitle;

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          TabbedHeader,
          {
            selectedTitle: selectedTitle,
            stateCallback: function stateCallback(newTitle) {
              return _this2.setState({ selectedTitle: newTitle });
            }
          },
          children
        ),
        React.createElement("div", { className: "margin-bottom-24" }),
        React.createElement(
          TabbedContainer,
          { selectedTitle: selectedTitle },
          children
        )
      );
    }
  }]);
  return Tabs;
}(React.PureComponent);

var TabbedCard = function (_React$PureComponent) {
  inherits(TabbedCard, _React$PureComponent);

  function TabbedCard() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TabbedCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TabbedCard.__proto__ || Object.getPrototypeOf(TabbedCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedTitle: _this.props.initialTab
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TabbedCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var selectedTitle = this.state.selectedTitle;

      return React.createElement(
        Card,
        null,
        React.createElement(
          Card.Header,
          null,
          React.createElement(
            TabbedHeader,
            {
              selectedTitle: selectedTitle,
              stateCallback: function stateCallback(newTitle) {
                return _this2.setState({ selectedTitle: newTitle });
              }
            },
            children
          )
        ),
        React.createElement(
          Card.Body,
          null,
          React.createElement(
            TabbedContainer,
            { selectedTitle: selectedTitle },
            children
          )
        )
      );
    }
  }]);
  return TabbedCard;
}(React.PureComponent);

function TableHeader(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames(className);
  return React.createElement(
    "thead",
    _extends({ className: classes }, props),
    children
  );
}

TableHeader.displayName = "Table.Header";

function TableBody(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames(className);
  return React.createElement(
    "tbody",
    _extends({ className: classes }, props),
    children
  );
}

TableBody.displayName = "Table.Body";

function TableRow(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames(className);
  return React.createElement(
    "tr",
    _extends({ className: classes }, props),
    children
  );
}

TableRow.displayName = "Table.Row";

function TableCol(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$alignContent = _ref.alignContent,
      alignContent = _ref$alignContent === undefined ? "" : _ref$alignContent,
      colSpan = _ref.colSpan;

  var classes = classnames(defineProperty({}, "text-" + alignContent, alignContent), className);
  return React.createElement(
    "td",
    { className: classes, colSpan: colSpan },
    children
  );
}

TableCol.displayName = "Table.Col";

function TableColHeader(_ref) {
  var className = _ref.className,
      children = _ref.children,
      colSpan = _ref.colSpan,
      _ref$alignContent = _ref.alignContent,
      alignContent = _ref$alignContent === undefined ? "" : _ref$alignContent;

  var classes = classnames(defineProperty({}, "text-" + alignContent, alignContent), className);
  return React.createElement(
    "th",
    { className: classes, colSpan: colSpan },
    children
  );
}

TableColHeader.displayName = "Table.ColHeader";

function Table(_ref) {
  var className = _ref.className,
      children = _ref.children,
      cards = _ref.cards,
      striped = _ref.striped,
      responsive = _ref.responsive,
      highlightRowOnHover = _ref.highlightRowOnHover,
      hasOutline = _ref.hasOutline,
      verticalAlign = _ref.verticalAlign,
      props = objectWithoutProperties(_ref, ["className", "children", "cards", "striped", "responsive", "highlightRowOnHover", "hasOutline", "verticalAlign"]);

  var classes = classnames("table", {
    "card-table": cards,
    "table-striped": striped,
    "table-hover": highlightRowOnHover,
    "table-outline": hasOutline,
    "table-vcenter": verticalAlign === "center"
  }, className);

  var header = props.headerItems && React.createElement(
    Table.Header,
    null,
    React.createElement(
      Table.Row,
      null,
      props.headerItems.map(function (item, i) {
        return React.createElement(
          Table.ColHeader,
          { key: i, className: item.className },
          item.content
        );
      })
    )
  );

  var body = props.bodyItems && React.createElement(
    Table.Body,
    null,
    props.bodyItems.map(function (row, i) {
      return React.createElement(
        Table.Row,
        { key: row.key },
        row.item.map(function (col, i) {
          return React.createElement(
            Table.Col,
            {
              className: col.className,
              alignContent: col.alignContent,
              key: i
            },
            col.content
          );
        })
      );
    })
  );

  var table = React.createElement(
    "table",
    _extends({ className: classes }, props),
    header,
    body || children
  );

  return !responsive ? table : React.createElement(
    "div",
    { className: "table-responsive" },
    table
  );
}

Table.defaultProps = {
  cards: false,
  striped: false,
  responsive: false
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Col = TableCol;
Table.ColHeader = TableColHeader;

/**
 * Adds a space between its child Tags
 */
function TagList(props) {
  var children = props.children,
      className = props.className;

  var classes = classnames("tags", className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

TagList.displayName = "Tag.List";

function TagAddOn(props) {
  var children = props.children,
      className = props.className,
      icon = props.icon,
      _props$color = props.color,
      color = _props$color === undefined ? "" : _props$color,
      onClick = props.onClick,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onPointerEnter = props.onPointerEnter,
      onPointerLeave = props.onPointerLeave,
      onFocus = props.onFocus,
      onBlur = props.onBlur;


  var classes = classnames("tag-addon", defineProperty({}, "tag-" + color, color), className);

  var eventProps = {
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onPointerEnter: onPointerEnter,
    onPointerLeave: onPointerLeave,
    onFocus: onFocus,
    onBlur: onBlur
  };

  var childrenForAll = React.createElement(
    React.Fragment,
    null,
    icon && React.createElement(Icon, { name: icon }),
    children
  );

  if (props.link) {
    var _href = props.href;

    return React.createElement(
      "a",
      _extends({ className: classes, href: _href }, eventProps),
      childrenForAll
    );
  }

  if (props.RootComponent) {
    var Component = props.RootComponent,
        _to = props.to;

    return React.createElement(
      Component,
      _extends({ to: _to }, eventProps),
      childrenForAll
    );
  }

  return React.createElement(
    "span",
    _extends({ className: classes }, eventProps),
    childrenForAll
  );
}

TagAddOn.displayName = "Tag.AddOn";

var Tag = function (_React$Component) {
  inherits(Tag, _React$Component);

  function Tag() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Tag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Tag.__proto__ || Object.getPrototypeOf(Tag)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isDeleted: false
    }, _this.handleOnRemoveClick = function () {
      _this.setState(function (s) {
        return {
          isDeleted: true
        };
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Tag, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          rounded = _props.rounded,
          _props$color = _props.color,
          color = _props$color === undefined ? "" : _props$color,
          avatar = _props.avatar,
          remove = _props.remove,
          addOn = _props.addOn,
          addOnIcon = _props.addOnIcon,
          addOnColor = _props.addOnColor,
          onClick = _props.onClick,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          onPointerEnter = _props.onPointerEnter,
          onPointerLeave = _props.onPointerLeave,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          onRemoveClick = _props.onRemoveClick,
          onAddOnClick = _props.onAddOnClick;


      var classes = classnames(defineProperty({
        tag: true,
        expanded: true,
        "tag-rounded": rounded
      }, "tag-" + color, color), className);

      var eventProps = {
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onPointerEnter: onPointerEnter,
        onPointerLeave: onPointerLeave,
        onFocus: onFocus,
        onBlur: onBlur
      };

      if (this.state.isDeleted) {
        return null;
      }

      var childrenForAll = React.createElement(
        React.Fragment,
        null,
        avatar && React.createElement("span", {
          "class": "tag-avatar avatar",
          style: { backgroundImage: "url(" + avatar + ")" }
        }),
        children,
        (addOn || addOnIcon) && React.createElement(
          TagAddOn,
          { icon: addOnIcon, color: addOnColor, onClick: onAddOnClick },
          addOn
        ),
        remove && onRemoveClick ? React.createElement(TagAddOn, { onClick: onRemoveClick, link: true, icon: "x" }) : remove && React.createElement(TagAddOn, { onClick: this.handleOnRemoveClick, link: true, icon: "x" })
      );

      if (this.props.RootComponent) {
        var _to = this.props.to;

        return React.createElement(
          React.Component,
          _extends({ className: classes, to: _to }, eventProps),
          childrenForAll
        );
      }

      if (this.props.link) {
        var _href = this.props.href;

        return React.createElement(
          "a",
          _extends({ className: classes, href: _href }, eventProps),
          childrenForAll
        );
      }

      return React.createElement(
        "span",
        _extends({ className: classes }, eventProps),
        childrenForAll
      );
    }
  }]);
  return Tag;
}(React.Component);

Tag.List = TagList;
Tag.AddOn = TagAddOn;

function TimelineItemBadge(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? "" : _ref$color;

  var classes = classnames(defineProperty({
    "timeline-badge": true
  }, "bg-" + color, color), className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

TimelineItemBadge.displayName = "Timeline.ItemBadge";

function TimelineItemTime(_ref) {
  var className = _ref.className,
      children = _ref.children,
      active = _ref.active;

  var classes = classnames({
    "timeline-time": true,
    "text-muted-black": active
  }, className);
  return React.createElement(
    "div",
    { className: classes },
    children
  );
}

TimelineItemTime.displayName = "Timeline.ItemTime";

function TimelineItemTitle(_ref) {
  var children = _ref.children,
      active = _ref.active;

  if (children) {
    return active ? React.createElement(
      "strong",
      null,
      children
    ) : children;
  } else {
    return null;
  }
}

TimelineItemTitle.displayName = "Timeline.ItemTitle";

function TimelineItemDescription(_ref) {
  var children = _ref.children;

  return React.createElement(
    "small",
    { className: "d-block text-muted" },
    children
  );
}

TimelineItemDescription.displayName = "Timeline.ItemDescription";

function TimelineItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      titleFromProps = _ref.title,
      description = _ref.description,
      badge = _ref.badge,
      badgeColor = _ref.badgeColor,
      time = _ref.time,
      active = _ref.active;

  var classes = classnames({
    "timeline-item": true
  }, className);

  var titleString = titleFromProps || typeof children === "string" && children;

  var title = titleString && React.createElement(
    TimelineItemTitle,
    { active: active },
    titleString
  );

  var titleAndDescription = title && React.createElement(
    React.Fragment,
    null,
    title,
    description && React.createElement(
      TimelineItemDescription,
      null,
      description
    )
  );

  return React.createElement(
    "li",
    { className: classes },
    (badge || badgeColor) && React.createElement(TimelineItemBadge, { color: badgeColor }),
    active ? React.createElement(
      "div",
      null,
      titleAndDescription
    ) : titleAndDescription,
    children,
    time && React.createElement(
      TimelineItemTime,
      { active: active },
      time
    )
  );
}

TimelineItem.displayName = "Timeline.Item";

function Timeline(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = classnames({
    timeline: true
  }, className);
  return React.createElement(
    "ul",
    { className: classes },
    children
  );
}

Timeline.Item = TimelineItem;
Timeline.ItemTime = TimelineItemTime;
Timeline.ItemBadge = TimelineItemBadge;
Timeline.ItemTitle = TimelineItemTitle;
Timeline.ItemDescription = TimelineItemDescription;

var css$2 = "/* Tooltip-specific Stylesheet */\n\n.tbr-arrow-vertical {\n  left: calc(50% - 0.4rem);\n}\n\n.tbr-arrow-horizontal {\n  top: calc(50% - 0.4rem);\n}\n";
styleInject(css$2);

var Tooltip = function (_React$Component) {
  inherits(Tooltip, _React$Component);

  function Tooltip() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isShown: false }, _this._handleTriggerOnMouseEnter = function (e) {
      e.preventDefault();
      _this.setState({ isShown: true });
    }, _this._handleTriggerOnMouseLeave = function (e) {
      e.preventDefault();
      _this.setState({ isShown: false });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Tooltip, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          placement = _props.placement,
          content = _props.content;


      var classes = classnames("tooltip", placement && "bs-tooltip-" + placement, "show", className);

      var arrowClasses = classnames("arrow", placement === "top" || placement === "bottom" ? "tbr-arrow-vertical" : "tbr-arrow-horizontal");

      return React.createElement(
        Manager,
        null,
        React.createElement(
          Reference,
          null,
          function (_ref2) {
            var ref = _ref2.ref;
            return typeof children !== "undefined" && React.cloneElement(children, {
              ref: ref,
              onMouseEnter: _this2._handleTriggerOnMouseEnter,
              onMouseLeave: _this2._handleTriggerOnMouseLeave
            });
          }
        ),
        this.state.isShown && React.createElement(
          Popper$1,
          { placement: placement },
          function (_ref3) {
            var ref = _ref3.ref,
                style = _ref3.style,
                placement = _ref3.placement;

            return React.createElement(
              "div",
              {
                className: classes,
                "data-placement": placement,
                style: style,
                ref: ref
              },
              React.createElement("div", { className: arrowClasses }),
              React.createElement(
                "div",
                { className: "tooltip-inner" },
                content
              )
            );
          }
        )
      );
    }
  }]);
  return Tooltip;
}(React.Component);

var RouterContextProvider = function (_React$Component) {
  inherits(RouterContextProvider, _React$Component);

  function RouterContextProvider() {
    classCallCheck(this, RouterContextProvider);
    return possibleConstructorReturn(this, (RouterContextProvider.__proto__ || Object.getPrototypeOf(RouterContextProvider)).apply(this, arguments));
  }

  createClass(RouterContextProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          callback = _props.callback,
          location = _props.location;

      callback(location);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return RouterContextProvider;
}(React.Component);

function StandaloneFormPage(props) {
  return React.createElement(
    "div",
    { className: "page" },
    React.createElement(
      "div",
      { className: "page-single" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col col-login mx-auto" },
            React.createElement(
              "div",
              { className: "text-center mb-6" },
              React.createElement("img", { src: props.imageURL, className: "h-6", alt: "logo" })
            ),
            props.children
          )
        )
      )
    )
  );
}

function DefaultErrorPage(props) {
  var _onBackClick = function _onBackClick(event) {
    window.history.back();
    event.preventDefault();
    return true;
  };

  var _props$title = props.title,
      title = _props$title === undefined ? "Error" : _props$title,
      _props$subtitle = props.subtitle,
      subtitle = _props$subtitle === undefined ? "Sorry an unkown error occurred" : _props$subtitle,
      details = props.details,
      _props$action = props.action,
      action = _props$action === undefined ? "Go back" : _props$action;

  return React.createElement(
    Page,
    { className: "text-center" },
    React.createElement(
      Container,
      null,
      React.createElement(
        Header.H1,
        { className: "display-1 text-muted mb-5" },
        title
      ),
      React.createElement(
        Header.H2,
        null,
        subtitle
      ),
      details && React.createElement(
        Header.H4,
        { className: "text-muted font-weight-normal mb-7" },
        details
      ),
      React.createElement(
        Button,
        { onClick: _onBackClick, className: "btn-primary" },
        React.createElement(Icon, { className: "mr-2", name: "arrow-left" }),
        action
      )
    )
  );
}

function Error400Page(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? "400" : _ref$title,
      _ref$subtitle = _ref.subtitle,
      subtitle = _ref$subtitle === undefined ? "Oops... You just found an error page..." : _ref$subtitle,
      _ref$details = _ref.details,
      details = _ref$details === undefined ? "We are sorry but your request contains bad syntax and cannot be fulfilled..." : _ref$details,
      action = _ref.action;

  return React.createElement(DefaultErrorPage, {
    title: title,
    subtitle: subtitle,
    details: details,
    action: action
  });
}

function Error401Page(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? "401" : _ref$title,
      _ref$subtitle = _ref.subtitle,
      subtitle = _ref$subtitle === undefined ? "Oops... You just found an error page..." : _ref$subtitle,
      _ref$details = _ref.details,
      details = _ref$details === undefined ? "We are sorry but you are not authorized to access this page..." : _ref$details,
      action = _ref.action;

  return React.createElement(DefaultErrorPage, {
    title: title,
    subtitle: subtitle,
    details: details,
    action: action
  });
}

function Error403Page(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? "403" : _ref$title,
      _ref$subtitle = _ref.subtitle,
      subtitle = _ref$subtitle === undefined ? "Oops... You just found an error page..." : _ref$subtitle,
      _ref$details = _ref.details,
      details = _ref$details === undefined ? "We are sorry but you do not have permission to access this page..." : _ref$details,
      action = _ref.action;

  return React.createElement(DefaultErrorPage, {
    title: title,
    subtitle: subtitle,
    details: details,
    action: action
  });
}

function Error404Page(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? "404" : _ref$title,
      _ref$subtitle = _ref.subtitle,
      subtitle = _ref$subtitle === undefined ? "Oops... You just found an error page..." : _ref$subtitle,
      _ref$details = _ref.details,
      details = _ref$details === undefined ? "We are sorry but the page you have requested can not be found..." : _ref$details,
      action = _ref.action;

  return React.createElement(DefaultErrorPage, {
    title: title,
    subtitle: subtitle,
    details: details,
    action: action
  });
}

function Error500Page(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? "500" : _ref$title,
      _ref$subtitle = _ref.subtitle,
      subtitle = _ref$subtitle === undefined ? "Oops... You just found an error page..." : _ref$subtitle,
      _ref$details = _ref.details,
      details = _ref$details === undefined ? "We are sorry but your request contains bad syntax and cannot be fulfilled..." : _ref$details,
      action = _ref.action;

  return React.createElement(DefaultErrorPage, {
    title: title,
    subtitle: subtitle,
    details: details,
    action: action
  });
}

function Error503Page(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? "503" : _ref$title,
      _ref$subtitle = _ref.subtitle,
      subtitle = _ref$subtitle === undefined ? "Oops... You just found an error page..." : _ref$subtitle,
      _ref$details = _ref.details,
      details = _ref$details === undefined ? "This page is temporarily unavailable.  Please reload your browser..." : _ref$details,
      action = _ref.action;

  return React.createElement(DefaultErrorPage, {
    title: title,
    subtitle: subtitle,
    details: details,
    action: action
  });
}

function FormCard(_ref) {
  var children = _ref.children,
      action = _ref.action,
      method = _ref.method,
      onSubmit = _ref.onSubmit,
      title = _ref.title,
      buttonText = _ref.buttonText;

  return React.createElement(
    Form,
    { className: "card", onSubmit: onSubmit, action: action, method: method },
    React.createElement(
      Card.Body,
      { className: "p-6" },
      React.createElement(
        Card.Title,
        { RootComponent: "div" },
        title
      ),
      children,
      React.createElement(
        Form.Footer,
        null,
        React.createElement(
          Button,
          { type: "submit", color: "primary", block: true },
          buttonText
        )
      )
    )
  );
}

function FormTextInput(props) {
  var label = props.label,
      propsForInput = objectWithoutProperties(props, ["label"]);


  var formInputComponent = React.createElement(Form.Input, propsForInput);

  return React.createElement(
    Form.Group,
    { label: label },
    formInputComponent
  );
}

function FormCheckboxInput(props) {
  var formCheckboxComponent = React.createElement(Form.Checkbox, props);

  return React.createElement(
    Form.Group,
    null,
    formCheckboxComponent
  );
}

// @ flow
var colors = {
  blue: "#467fcf",
  "blue-darkest": "#0e1929",
  "blue-darker": "#1c3353",
  "blue-dark": "#3866a6",
  "blue-light": "#7ea5dd",
  "blue-lighter": "#c8d9f1",
  "blue-lightest": "#edf2fa",
  azure: "#45aaf2",
  "azure-darkest": "#0e2230",
  "azure-darker": "#1c4461",
  "azure-dark": "#3788c2",
  "azure-light": "#7dc4f6",
  "azure-lighter": "#c7e6fb",
  "azure-lightest": "#ecf7fe",
  indigo: "#6574cd",
  "indigo-darkest": "#141729",
  "indigo-darker": "#282e52",
  "indigo-dark": "#515da4",
  "indigo-light": "#939edc",
  "indigo-lighter": "#d1d5f0",
  "indigo-lightest": "#f0f1fa",
  purple: "#a55eea",
  "purple-darkest": "#21132f",
  "purple-darker": "#42265e",
  "purple-dark": "#844bbb",
  "purple-light": "#c08ef0",
  "purple-lighter": "#e4cff9",
  "purple-lightest": "#f6effd",
  pink: "#f66d9b",
  "pink-darkest": "#31161f",
  "pink-darker": "#622c3e",
  "pink-dark": "#c5577c",
  "pink-light": "#f999b9",
  "pink-lighter": "#fcd3e1",
  "pink-lightest": "#fef0f5",
  red: "#e74c3c",
  "red-darkest": "#2e0f0c",
  "red-darker": "#5c1e18",
  "red-dark": "#b93d30",
  "red-light": "#ee8277",
  "red-lighter": "#f8c9c5",
  "red-lightest": "#fdedec",
  orange: "#fd9644",
  "orange-darkest": "#331e0e",
  "orange-darker": "#653c1b",
  "orange-dark": "#ca7836",
  "orange-light": "#feb67c",
  "orange-lighter": "#fee0c7",
  "orange-lightest": "#fff5ec",
  yellow: "#f1c40f",
  "yellow-darkest": "#302703",
  "yellow-darker": "#604e06",
  "yellow-dark": "#c19d0c",
  "yellow-light": "#f5d657",
  "yellow-lighter": "#fbedb7",
  "yellow-lightest": "#fef9e7",
  lime: "#7bd235",
  "lime-darkest": "#192a0b",
  "lime-darker": "#315415",
  "lime-dark": "#62a82a",
  "lime-light": "#a3e072",
  "lime-lighter": "#d7f2c2",
  "lime-lightest": "#f2fbeb",
  green: "#5eba00",
  "green-darkest": "#132500",
  "green-darker": "#264a00",
  "green-dark": "#4b9500",
  "green-light": "#8ecf4d",
  "green-lighter": "#cfeab3",
  "green-lightest": "#eff8e6",
  teal: "#2bcbba",
  "teal-darkest": "#092925",
  "teal-darker": "#11514a",
  "teal-dark": "#22a295",
  "teal-light": "#6bdbcf",
  "teal-lighter": "#bfefea",
  "teal-lightest": "#eafaf8",
  cyan: "#17a2b8",
  "cyan-darkest": "#052025",
  "cyan-darker": "#09414a",
  "cyan-dark": "#128293",
  "cyan-light": "#5dbecd",
  "cyan-lighter": "#b9e3ea",
  "cyan-lightest": "#e8f6f8",
  gray: "#868e96",
  "gray-darkest": "#1b1c1e",
  "gray-darker": "#36393c",
  "gray-light": "#aab0b6",
  "gray-lighter": "#dbdde0",
  "gray-lightest": "#f3f4f5",
  "gray-dark": "#343a40",
  "gray-dark-darkest": "#0a0c0d",
  "gray-dark-darker": "#15171a",
  "gray-dark-dark": "#2a2e33",
  "gray-dark-light": "#717579",
  "gray-dark-lighter": "#c2c4c6",
  "gray-dark-lightest": "#ebebec"
};

/**
 * Returns an object of fields with values set based on the touched and error values
 * If a value is both touched and has a non-empty error string it is returned as the fields value
 */
function touchedErrors() {
  var touched = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var errors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  return fields.reduce(function (acc, cur) {
    return Object.assign(acc, defineProperty({}, cur, touched && touched[cur] && errors ? errors[cur] : ""));
  }, {});
}

/**
 * A HOC that modifies the errors propso that it only returns errors if the the field
 * has also been touched
 * First takes an array of the field names, followed by the component
 */
function withTouchedErrors() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  return function withComponent(Component) {
    return function WithTouchedErrors(props) {
      var errors = touchedErrors(props.touched, props.errors, fields);
      return React.createElement(Component, _extends({}, props, { errors: errors }));
    };
  };
}

var strings = {
  title: "Login to your Account",
  buttonText: "Login",
  emailLabel: "Email Address",
  emailPlaceholder: "Enter email",
  passwordLabel: "Password",
  passwordPlaceholder: "Password"
};

/**
 * A login page
 * Can be easily wrapped with form libraries like formik and redux-form
 */
function LoginPage(props) {
  var action = props.action,
      method = props.method,
      onSubmit = props.onSubmit,
      onChange = props.onChange,
      onBlur = props.onBlur,
      values = props.values,
      _props$strings = props.strings,
      strings$1 = _props$strings === undefined ? {} : _props$strings,
      errors = props.errors;


  return React.createElement(
    StandaloneFormPage,
    { imageURL: "./demo/logo.svg" },
    React.createElement(
      FormCard,
      {
        buttonText: strings$1.buttonText || strings.buttonText,
        title: strings$1.title || strings.title,
        onSubmit: onSubmit,
        action: action,
        method: method
      },
      React.createElement(FormTextInput, {
        name: "email",
        label: strings$1.emailLabel || strings.emailLabel,
        placeholder: strings$1.emailPlaceholder || strings.emailPlaceholder,
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.email,
        error: errors && errors.email
      }),
      React.createElement(FormTextInput, {
        name: "password",
        type: "password",
        label: strings$1.passwordLabel || strings.passwordLabel,
        placeholder: strings$1.passwordPlaceholder || strings.passwordPlaceholder,
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.password,
        error: errors && errors.password
      })
    )
  );
}

var LoginPageWithTouchedErrors = withTouchedErrors(["email", "password"])(LoginPage);

var strings$1 = {
  title: "Create New Account",
  buttonText: "Create Account",
  nameLabel: "Name",
  namePlaceholder: "Enter name",
  emailLabel: "Email Address",
  emailPlaceholder: "Enter email",
  passwordLabel: "Password",
  passwordPlaceholder: "Password",
  termsLabel: "Agree to the terms and policy"
};

/**
 * A register page
 * Can be easily wrapped with form libraries like formik and redux-form
 */
function RegisterPage(props) {
  var action = props.action,
      method = props.method,
      onSubmit = props.onSubmit,
      onChange = props.onChange,
      onBlur = props.onBlur,
      values = props.values,
      _props$strings = props.strings,
      strings = _props$strings === undefined ? {} : _props$strings,
      errors = props.errors;


  return React.createElement(
    StandaloneFormPage,
    { imageURL: "./demo/logo.svg" },
    React.createElement(
      FormCard,
      {
        buttonText: strings.buttonText || strings$1.buttonText,
        title: strings.title || strings$1.title,
        onSubmit: onSubmit,
        action: action,
        method: method
      },
      React.createElement(FormTextInput, {
        name: "name",
        label: strings.nameLabel || strings$1.nameLabel,
        placeholder: strings.namePlaceholder || strings$1.namePlaceholder,
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.name,
        error: errors && errors.name
      }),
      React.createElement(FormTextInput, {
        name: "email",
        label: strings.emailLabel || strings$1.emailLabel,
        placeholder: strings.emailPlaceholder || strings$1.emailPlaceholder,
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.email,
        error: errors && errors.email
      }),
      React.createElement(FormTextInput, {
        name: "password",
        type: "password",
        label: strings.passwordLabel || strings$1.passwordLabel,
        placeholder: strings.passwordPlaceholder || strings$1.passwordPlaceholder,
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.password,
        error: errors && errors.password
      }),
      React.createElement(FormCheckboxInput, {
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.terms,
        name: "terms",
        label: strings.termsLabel || strings$1.termsLabel
      })
    )
  );
}

var RegisterPageWithTouchedErrors = withTouchedErrors(["name", "email", "password", "terms"])(RegisterPage);

var strings$2 = {
  title: "Forgot Password",
  buttonText: "Request Password Change",
  emailLabel: "Email Address",
  emailPlaceholder: "Enter email",
  instructions: "Enter your email address and your password will be reset and emailed to you."
};

/**
 * A forgot password page
 * Can be easily wrapped with form libraries like formik and redux-form
 */
function ForgotPasswordPage(props) {
  var action = props.action,
      method = props.method,
      onSubmit = props.onSubmit,
      onChange = props.onChange,
      onBlur = props.onBlur,
      values = props.values,
      _props$strings = props.strings,
      strings = _props$strings === undefined ? {} : _props$strings,
      errors = props.errors;


  return React.createElement(
    StandaloneFormPage,
    { imageURL: "./demo/logo.svg" },
    React.createElement(
      FormCard,
      {
        buttonText: strings.buttonText || strings$2.buttonText,
        title: strings.title || strings$2.title,
        onSubmit: onSubmit,
        action: action,
        method: method
      },
      React.createElement(
        "p",
        { className: "text-muted" },
        strings.instructions || strings$2.instructions
      ),
      React.createElement(FormTextInput, {
        name: "email",
        label: strings.emailLabel || strings$2.emailLabel,
        placeholder: strings.emailPlaceholder || strings$2.emailPlaceholder,
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.email,
        error: errors && errors.email
      })
    )
  );
}

var ForgotPasswordPageWithTouchedErrors = withTouchedErrors(["email"])(ForgotPasswordPage);

exports.AccountDropdown = AccountDropdown;
exports.Alert = Alert;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.BlogCard = BlogCard;
exports.Button = Button;
exports.Card = Card;
exports.Comment = Comment;
exports.CommentsCard = CommentsCard;
exports.ContactCard = ContactCard;
exports.Container = Container;
exports.DefaultErrorPage = DefaultErrorPage;
exports.Dimmer = Dimmer;
exports.Dropdown = Dropdown;
exports.Error400Page = Error400Page;
exports.Error401Page = Error401Page;
exports.Error403Page = Error403Page;
exports.Error404Page = Error404Page;
exports.Error500Page = Error500Page;
exports.Error503Page = Error503Page;
exports.ForgotPasswordPage = ForgotPasswordPageWithTouchedErrors;
exports.Form = Form;
exports.FormCard = FormCard;
exports.FormCheckboxInput = FormCheckboxInput;
exports.FormTextInput = FormTextInput;
exports.GalleryCard = GalleryCard;
exports.Grid = Grid;
exports.Header = Header;
exports.Icon = Icon;
exports.List = List;
exports.Loader = Loader;
exports.LoginPage = LoginPageWithTouchedErrors;
exports.Media = Media;
exports.Nav = Nav;
exports.Notification = Notification;
exports.Page = Page;
exports.PricingCard = PricingCard;
exports.Profile = Profile;
exports.Progress = Progress;
exports.ProgressCard = ProgressCard;
exports.RegisterPage = RegisterPageWithTouchedErrors;
exports.RouterContextProvider = RouterContextProvider;
exports.Site = Site;
exports.SocialNetworksList = SocialNetworksList;
exports.Stamp = Stamp;
exports.StampCard = StampCard;
exports.StandaloneFormPage = StandaloneFormPage;
exports.StatsCard = StatsCard;
exports.StoreCard = StoreCard;
exports.Tab = Tab;
exports.TabbedCard = TabbedCard;
exports.TabbedContainer = TabbedContainer;
exports.TabbedHeader = TabbedHeader;
exports.Table = Table;
exports.Tabs = Tabs;
exports.Tag = Tag;
exports.Text = Text;
exports.Timeline = Timeline;
exports.Tooltip = Tooltip;
exports.colors = colors;
