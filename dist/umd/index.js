(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('moment-jalaali'), require('react'), require('prop-types'), require('react-tether'), require('classnames'), require('react-onclickoutside'), require('lodash.range'), require('rc-trigger'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'moment-jalaali', 'react', 'prop-types', 'react-tether', 'classnames', 'react-onclickoutside', 'lodash.range', 'rc-trigger', 'react-dom'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.DatePicker = {}, global.momentJalaali, global.React, global.PropTypes, global.TetherComponent, global.classnames, global.onClickOutside, global.range, global.Trigger, global.ReactDom));
})(this, (function (exports, momentJalaali, React, PropTypes, TetherComponent, classnames, onClickOutside, range, Trigger, ReactDom) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var momentJalaali__default = /*#__PURE__*/_interopDefaultLegacy(momentJalaali);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
  var TetherComponent__default = /*#__PURE__*/_interopDefaultLegacy(TetherComponent);
  var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);
  var onClickOutside__default = /*#__PURE__*/_interopDefaultLegacy(onClickOutside);
  var range__default = /*#__PURE__*/_interopDefaultLegacy(range);
  var Trigger__default = /*#__PURE__*/_interopDefaultLegacy(Trigger);
  var ReactDom__default = /*#__PURE__*/_interopDefaultLegacy(ReactDom);

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

  var css_248z = ".calendarContainer{position:relative;border-radius:4px;-webkit-box-shadow:0 3px 15px rgba(0,0,0,.2);box-shadow:0 3px 15px rgba(0,0,0,.2);width:320px;margin:auto;text-align:center;padding:15px;background-color:#fff}.calendarContainer *{-webkit-box-sizing:border-box;box-sizing:border-box}.calendarContainer .dayPickerContainer:after,.calendarContainer .daysOfWeek:after,.calendarContainer .monthsList:after{content:'';display:block;clear:both}.datepicker-input{-webkit-box-sizing:border-box;box-sizing:border-box}.calendarContainer .heading{height:auto;font-weight:700;margin-bottom:10px}.calendarContainer .heading>button{background:0 0;margin:5px 0;border:none;text-align:center;line-height:30px;width:36px;height:32px;cursor:pointer}.calendarContainer .heading>button:hover{background-color:#f2f2f2}.calendarContainer .heading svg{width:10px;fill:#777}.calendarContainer .heading .next,.calendarContainer .heading .prev{width:42px;height:42px;border-radius:50%;margin:0}.calendarContainer .heading .prev{float:right}.calendarContainer .heading .next{float:left}.calendarContainer .heading .title{height:auto;border-radius:4px;width:auto;margin:0 5px;border:1px solid #f7f7f7;text-align:center;display:inline-block;font-weight:400;padding:4px 15px 5px 15px;line-height:1.5;font-size:1.2em;max-height:none}.jalaali.calendarContainer .heading .title{padding:4px 15px 7px 15px}.calendarContainer .dayWrapper{float:left;width:14.28571429%;margin-top:5px;position:relative}.calendarContainer .dayWrapper button{border:none;background:0 0;outline:0;width:100%;cursor:pointer;width:40px;height:40px;border-radius:50%;font-size:1.1em;padding:0;line-height:1.5;padding:0 0 1px 0}.jalaali.calendarContainer .dayWrapper button{padding:0 0 1px 0}.calendarContainer .dayWrapper:not(.selected) button:hover{background-color:#d6f1ff}.calendarContainer .dayWrapper button[disabled]{color:#aaa;cursor:not-allowed;background-color:#ebebeb}.calendarContainer .dayWrapper button.selected{background-color:#337ab7;color:#fff}.calendarContainer .dayWrapper:not(.currentMonth) button{opacity:.5}.calendarContainer .daysOfWeek{margin-bottom:5px;padding-bottom:5px;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;color:#919191}.calendarContainer .daysOfWeek>div{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:42px}.calendarContainer .monthsList{clear:both;width:100%}.calendarContainer .monthsList button{width:33.33333332%;height:25%;float:right;border:1px solid #f9f9f9;outline:0;font-size:1em;background:#fff;padding:10px 0;cursor:pointer}.calendarContainer .monthsList button:hover{background:#eee;cursor:pointer}.calendarContainer .yearsList{clear:both;width:100%;max-height:200px;overflow-y:scroll}.calendarContainer .yearsList button{width:20%;height:25%;float:right;border:1px solid #f9f9f9;outline:0;font-size:1em;background:#fff;padding:10px 0;cursor:pointer}.calendarContainer .yearsList button:hover{background:#eee;cursor:pointer}.calendarContainer .selected button,.calendarContainer .selected button:active,.calendarContainer .selected button:focus,.calendarContainer .selected button:hover :not([disabled]){background-color:#4285f4;color:#fff}.calendarContainer.jalaali{direction:rtl}.calendarContainer.jalaali .dayWrapper{float:right}.time-picker-container{margin-bottom:10}.time-picker-container>.time-label{float:left;line-height:30px;width:50%;text-align:center}.time-picker-container>.time-picker-panel{float:right;width:50%}.time-picker-container.jalaali>.time-label{float:right}.time-picker-container.jalaali>.time-picker-panel{float:left}.rc-time-picker{border-radius:4px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:110px;border:1px solid #f7f7f7;font-size:1.2em}.rc-time-picker *{-webkit-box-sizing:border-box;box-sizing:border-box}.rc-time-picker-input{margin:4px 0;padding:0 15px 1px 15px;direction:ltr;text-align:center;width:100%;position:relative;display:inline-block;cursor:pointer;font-size:1em;line-height:1.5;border:none;background-image:none;background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.jalaali.calendarContainer .rc-time-picker-input{padding:0 15px 3px 15px}.rc-time-picker-input:focus{-webkit-box-shadow:none;box-shadow:none;border:none;background-color:#f2f2f2}.rc-time-picker:hover{background-color:#f2f2f2}.rc-time-picker-panel{z-index:2001;width:170px;position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box}.rc-time-picker-panel *{-webkit-box-sizing:border-box;box-sizing:border-box}.rc-time-picker-panel-inner{display:inline-block;position:relative;outline:0;list-style:none;font-size:12px;text-align:left;background-color:#fff;border-radius:3px;-webkit-box-shadow:0 1px 5px #ccc;box-shadow:0 1px 5px #ccc;background-clip:padding-box;border:1px solid #ccc;line-height:1.5}.rc-time-picker-panel-input{margin:0;padding:0;width:100%;cursor:default;line-height:1.5;outline:0;border:1px solid transparent;padding:4px 0;font-size:1.4em;text-align:center;font-family:inherit}.rc-time-picker-panel-input,.rc-time-picker-panel-input:hover{-webkit-box-shadow:none;box-shadow:none;border:none}.rc-time-picker-panel-input-wrap{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;padding:6px;border-bottom:1px solid #e9e9e9}.rc-time-picker-panel-input-invalid{border-color:red}.rc-time-picker-panel-clear-btn{position:absolute;right:6px;cursor:pointer;overflow:hidden;width:20px;height:20px;text-align:center;line-height:20px;top:6px;margin:0}.rc-time-picker-panel-clear-btn:after{content:'x';font-size:12px;color:#aaa;display:inline-block;line-height:1;width:20px;-webkit-transition:color .3s ease;transition:color .3s ease}.rc-time-picker-panel-clear-btn:hover:after{color:#666}.rc-time-picker-panel-select{float:left;font-size:12px;border:1px solid #e9e9e9;border-width:0 1px;margin-left:-1px;-webkit-box-sizing:border-box;box-sizing:border-box;width:56px;overflow:hidden;position:relative}.rc-time-picker-panel-select-active{overflow-y:auto}.rc-time-picker-panel-select:first-child{border-left:0;margin-left:0}.rc-time-picker-panel-select:last-child{border-right:0}.rc-time-picker-panel-select ul{list-style:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;width:100%;max-height:144px;overflow-x:hidden;overflow-y:scroll}.rc-time-picker-panel-select li{list-style:none;-webkit-box-sizing:content-box;box-sizing:content-box;margin:0;padding:0 0 0 16px;width:100%;height:24px;line-height:24px;text-align:left;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rc-time-picker-panel-select li:hover{background:#edfaff}li.rc-time-picker-panel-select-option-selected{background:#edfaff;color:#2db7f5}li.rc-time-picker-panel-select-option-disabled{color:#bfbfbf}li.rc-time-picker-panel-select-option-disabled:hover{background:0 0;cursor:not-allowed}.tether-element.tether-element-attached-top.tether-element-attached-center.tether-target-attached-bottom.tether-target-attached-center.tether-enabled{z-index:2000}.calendarContainer *,.datepicker-input{font-family:inherit}.today button{border:3px solid #4285f4}.highlighted{background-color:#e7f1f2}.highlighted.rangestart{background:-webkit-gradient(linear,left top,right top,color-stop(50%,#e7f1f2),color-stop(50%,transparent));background:linear-gradient(90deg,#e7f1f2 50%,transparent 50%)}.highlighted.rangeend{background:-webkit-gradient(linear,left top,right top,color-stop(50%,transparent),color-stop(50%,#e7f1f2));background:linear-gradient(90deg,transparent 50%,#e7f1f2 50%)}.highlighted.rangeend button{background:#fff!important;border:1px solid #4285f4!important}.jalaali.calendarContainer .selectToday{padding:4px 0 6px 0}.calendarButton{display:block;width:100%;background:#4285f4;color:#fff;outline:0;border-radius:5px;border:0;cursor:pointer;padding:5px 0 7px 0;-webkit-transition:.2s all ease-in-out;transition:.2s all ease-in-out;-webkit-transition-property:background;transition-property:background}.calendarButton:hover{background:#1266f1}.toggleButton{margin-bottom:1rem}.selectToday{margin-top:1rem}.highLightDot-container{text-align:center;bottom:0;width:100%;position:absolute;cursor:pointer;direction:ltr}.highLightDot-container .highLightDot{border:1px solid #fff;display:inline-block;width:7px;height:7px;border-radius:50%}.highLightDot-container .highLightDot:not(:first-child){margin-left:2px}.disabled{cursor:not-allowed}button[disabled],button[disabled]:hover{color:#aaa;cursor:not-allowed;background-color:#ebebeb}.schedule.calendarContainer{width:100%}.schedule.calendarContainer .dayPickerContainer{border:1px solid #eaecf0;border-width:0 0 1px 1px}.schedule.calendarContainer .dayPickerContainer .dayWrapper{margin:0;border:1px solid #eaecf0;border-width:1px 1px 0 0;position:relative}.schedule.calendarContainer .dayPickerContainer .dayWrapper button.day-button{width:100%;border-radius:0;height:0;padding-top:100%;position:relative}.schedule.calendarContainer .dayPickerContainer .dayWrapper button.day-button .day-number{position:absolute;top:0;right:0;left:0;margin:5px;width:25px;height:25px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:50%}.schedule.calendarContainer .dayPickerContainer .dayWrapper button.day-button ul.notes{position:absolute;top:30px;right:0;font-size:12px;list-style:none;margin:0;width:100%;text-align:start;padding:0 6px}.schedule.calendarContainer .dayPickerContainer .dayWrapper button.day-button ul.notes li::before{content:'';background-color:#12b76a;font-weight:700;display:inline-block;width:8px;height:8px;border-radius:50%;font-size:20px;margin:0 8px}.schedule.calendarContainer .dayPickerContainer .dayWrapper .highLightDot-container{position:absolute;bottom:0;right:0}.schedule.calendarContainer .selected button.day-button,.schedule.calendarContainer .selected button.day-button:active,.schedule.calendarContainer .selected button.day-button:focus,.schedule.calendarContainer .selected button.day-button:hover :not([disabled]){background-color:unset;color:unset}.schedule.calendarContainer .selected button.day-button .day-number,.schedule.calendarContainer .selected button.day-button:active .day-number,.schedule.calendarContainer .selected button.day-button:focus .day-number,.schedule.calendarContainer .selected button.day-button:hover :not([disabled]) .day-number{background-color:#4285f4!important;color:#fff!important}";
  styleInject(css_248z);

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var classCallCheck = createCommonjsModule(function (module) {
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var _classCallCheck = unwrapExports(classCallCheck);

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
  }
  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  unwrapExports(_typeof_1);

  var toPrimitive = createCommonjsModule(function (module) {
  var _typeof = _typeof_1["default"];
  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  unwrapExports(toPrimitive);

  var toPropertyKey = createCommonjsModule(function (module) {
  var _typeof = _typeof_1["default"];

  function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }
  module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  unwrapExports(toPropertyKey);

  var createClass = createCommonjsModule(function (module) {
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var _createClass = unwrapExports(createClass);

  var assertThisInitialized = createCommonjsModule(function (module) {
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var _assertThisInitialized = unwrapExports(assertThisInitialized);

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _setPrototypeOf(o, p);
  }
  module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  unwrapExports(setPrototypeOf);

  var inherits = createCommonjsModule(function (module) {
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
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }
  module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var _inherits = unwrapExports(inherits);

  var possibleConstructorReturn = createCommonjsModule(function (module) {
  var _typeof = _typeof_1["default"];

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return assertThisInitialized(self);
  }
  module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _getPrototypeOf(o);
  }
  module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var _getPrototypeOf = unwrapExports(getPrototypeOf);

  var defineProperty = createCommonjsModule(function (module) {
  function _defineProperty(obj, key, value) {
    key = toPropertyKey(key);
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
  module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var _defineProperty = unwrapExports(defineProperty);

  var latinToPersianMap = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
  var latinNumbers = [/1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g, /0/g];
  function prepareNumber(input) {
    var string;
    if (typeof input === 'number') {
      string = input.toString();
    } else if (typeof input === 'undefined') {
      string = '';
    } else {
      string = input;
    }
    return string;
  }
  function latinToPersian(string) {
    var result = string;
    for (var index = 0; index < 10; index++) {
      result = result.replace(latinNumbers[index], latinToPersianMap[index]);
    }
    return result;
  }
  function persianNumber(input) {
    return latinToPersian(prepareNumber(input));
  }

  var leftArrow = {
    __html: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 314.5 314.5" style="enable-background:new 0 0 314.5 314.5;" xml:space="preserve"><g><path class="arrow-icon" d="M125,157.5l116-116c10-10,10-24,0-34s-25-10-35,0l-133,133c-5,5-7,10-7,17s2,12,7,17l133,133c5,5,11,7,17,7s13-2,18-7c10-10,10-24,0-34L125,157.5z"/></g></svg>'
  };
  var rightArrow = {
    __html: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 315.5 315.5" style="enable-background:new 0 0 315.5 315.5;" xml:space="preserve"><g><path class="arrow-icon" d="M242,141L109,8c-5-5-12-8-18-8S79,3,74,8c-10,10-10,24,0,34l116,116L74,274c-10,10-10,24,0,34s25,10,35,0l133-133c5-5,7-11,7-17C249,151,247,146,242,141z"/></g></svg>'
  };

  function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Heading = /*#__PURE__*/function (_Component) {
    _inherits(Heading, _Component);
    var _super = _createSuper$d(Heading);
    function Heading() {
      _classCallCheck(this, Heading);
      return _super.apply(this, arguments);
    }
    _createClass(Heading, [{
      key: "handleMonthClick",
      value: function handleMonthClick(event) {
        var setCalendarMode = this.context.setCalendarMode;
        event.preventDefault();
        setCalendarMode('monthSelector');
      }
    }, {
      key: "render",
      value: function render() {
        var _this$context = this.context,
          nextMonth = _this$context.nextMonth,
          prevMonth = _this$context.prevMonth;
        var _this$props = this.props,
          month = _this$props.month,
          styles = _this$props.styles;
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: styles.heading
        }, /*#__PURE__*/React__default["default"].createElement("button", {
          className: styles.title,
          onClick: this.handleMonthClick.bind(this)
        }, this.props.isGregorian ? month.locale('en').format('MMMM YYYY') : persianNumber(month.locale('fa').format('jMMMM jYYYY'))), this.props.timePicker, !this.props.isGregorian && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("button", {
          type: "button",
          title: "\u0645\u0627\u0647 \u0642\u0628\u0644",
          className: styles.prev,
          onClick: prevMonth,
          dangerouslySetInnerHTML: rightArrow
        }), /*#__PURE__*/React__default["default"].createElement("button", {
          type: "button",
          title: "\u0645\u0627\u0647 \u0628\u0639\u062F",
          className: styles.next,
          onClick: nextMonth,
          dangerouslySetInnerHTML: leftArrow
        })), this.props.isGregorian && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("button", {
          type: "button",
          title: "previous month",
          className: styles.next,
          onClick: prevMonth,
          dangerouslySetInnerHTML: leftArrow
        }), /*#__PURE__*/React__default["default"].createElement("button", {
          type: "button",
          title: "next month",
          className: styles.prev,
          onClick: nextMonth,
          dangerouslySetInnerHTML: rightArrow
        })));
      }
    }]);
    return Heading;
  }(React.Component);
  _defineProperty(Heading, "propTypes", {
    month: PropTypes__default["default"].object.isRequired,
    isGregorian: PropTypes__default["default"].bool
  });
  _defineProperty(Heading, "contextTypes", {
    styles: PropTypes__default["default"].object,
    nextMonth: PropTypes__default["default"].func.isRequired,
    prevMonth: PropTypes__default["default"].func.isRequired,
    setCalendarMode: PropTypes__default["default"].func.isRequired
  });

  function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  // Day of week names for use in date-picker heading
  var dayOfWeekNamesJalaali = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
  var dayOfWeekNamesGregorian = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  var DaysOfWeek = /*#__PURE__*/function (_Component) {
    _inherits(DaysOfWeek, _Component);
    var _super = _createSuper$c(DaysOfWeek);
    function DaysOfWeek() {
      _classCallCheck(this, DaysOfWeek);
      return _super.apply(this, arguments);
    }
    _createClass(DaysOfWeek, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
          styles = _this$props.styles,
          isGregorian = _this$props.isGregorian;
        var dayOfWeekNames = isGregorian ? dayOfWeekNamesGregorian : dayOfWeekNamesJalaali;
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: styles.daysOfWeek
        }, dayOfWeekNames.map(function (name, key) {
          return /*#__PURE__*/React__default["default"].createElement("div", {
            key: key
          }, name);
        }));
      }
    }]);
    return DaysOfWeek;
  }(React.Component);
  _defineProperty(DaysOfWeek, "propTypes", {
    styles: PropTypes__default["default"].object,
    isGregorian: PropTypes__default["default"].bool
  });

  function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var MonthsViewHeading = /*#__PURE__*/function (_Component) {
    _inherits(MonthsViewHeading, _Component);
    var _super = _createSuper$b(MonthsViewHeading);
    function MonthsViewHeading() {
      _classCallCheck(this, MonthsViewHeading);
      return _super.apply(this, arguments);
    }
    _createClass(MonthsViewHeading, [{
      key: "handleYearClick",
      value: function handleYearClick(event) {
        var setCalendarMode = this.context.setCalendarMode;
        event.preventDefault();
        setCalendarMode('yearSelector');
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          year = _this$props.year,
          styles = _this$props.styles;
          _this$props.type;
          var isGregorian = _this$props.isGregorian,
          disableYearSelector = _this$props.disableYearSelector;
        var yearFormat = isGregorian ? 'YYYY' : 'jYYYY';
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: styles.heading
        }, /*#__PURE__*/React__default["default"].createElement("button", {
          disabled: disableYearSelector,
          className: styles.title,
          onClick: this.handleYearClick.bind(this)
        }, isGregorian ? year.format(yearFormat) : persianNumber(year.format(yearFormat))), /*#__PURE__*/React__default["default"].createElement("button", {
          type: "button",
          title: isGregorian ? 'next year' : 'سال قبل',
          style: styles.navButton,
          className: styles.prev,
          onClick: isGregorian ? this.props.onNextYear : this.props.onPrevYear,
          dangerouslySetInnerHTML: rightArrow
        }), /*#__PURE__*/React__default["default"].createElement("button", {
          type: "button",
          title: isGregorian ? 'previous year' : 'سال بعد',
          style: styles.navButton,
          className: styles.next,
          onClick: isGregorian ? this.props.onPrevYear : this.props.onNextYear,
          dangerouslySetInnerHTML: leftArrow
        }));
      }
    }]);
    return MonthsViewHeading;
  }(React.Component);
  _defineProperty(MonthsViewHeading, "propTypes", {
    year: PropTypes__default["default"].object.isRequired,
    onNextYear: PropTypes__default["default"].func.isRequired,
    onPrevYear: PropTypes__default["default"].func.isRequired,
    isGregorian: PropTypes__default["default"].bool,
    disableYearSelector: PropTypes__default["default"].bool
  });
  _defineProperty(MonthsViewHeading, "contextTypes", {
    styles: PropTypes__default["default"].object,
    type: PropTypes__default["default"].number,
    setCalendarMode: PropTypes__default["default"].func.isRequired
  });

  function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  // List of months
  var monthsJalaali = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
  var monthsGregorian = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var MonthSelector = /*#__PURE__*/function (_Component) {
    _inherits(MonthSelector, _Component);
    var _super = _createSuper$a(MonthSelector);
    function MonthSelector() {
      var _this;
      _classCallCheck(this, MonthSelector);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "state", {
        year: _this.props.selectedMonth
      });
      return _this;
    }
    _createClass(MonthSelector, [{
      key: "nextYear",
      value: function nextYear() {
        this.setState({
          year: this.state.year.clone().add(1, 'year')
        });
      }
    }, {
      key: "prevYear",
      value: function prevYear() {
        this.setState({
          year: this.state.year.clone().subtract(1, 'year')
        });
      }
    }, {
      key: "handleClick",
      value: function handleClick(key) {
        var _this$context = this.context,
          setMonth = _this$context.setMonth,
          setCalendarMode = _this$context.setCalendarMode;
        var isGregorian = this.props.isGregorian;
        var monthYearFormat = isGregorian ? 'M-YYYY' : 'jM-jYYYY';
        // console.log('monthselector', key, momentJalaali(key, monthYearFormat))
        setMonth(momentJalaali__default["default"](key, monthYearFormat));
        setCalendarMode('days');
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;
        var year = this.state.year;
        var _this$props = this.props,
          selectedMonth = _this$props.selectedMonth,
          styles = _this$props.styles,
          isGregorian = _this$props.isGregorian,
          disableYearSelector = _this$props.disableYearSelector;
        var yearFormat = isGregorian ? 'YYYY' : 'jYYYY';
        var monthYearFormat = isGregorian ? 'M-YYYY' : 'jM-jYYYY';
        var months = isGregorian ? monthsGregorian : monthsJalaali;
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: "month-selector"
        }, /*#__PURE__*/React__default["default"].createElement(MonthsViewHeading, {
          isGregorian: isGregorian,
          styles: styles,
          year: year,
          onNextYear: this.nextYear.bind(this),
          onPrevYear: this.prevYear.bind(this),
          disableYearSelector: disableYearSelector
        }), /*#__PURE__*/React__default["default"].createElement("div", {
          className: styles.monthsList
        }, months.map(function (name, key) {
          var buttonFingerprint = "".concat(key + 1, "-").concat(year.locale('en').format(yearFormat));
          var selectedMonthFingerprint = selectedMonth.format(monthYearFormat);
          var isCurrent = selectedMonthFingerprint === buttonFingerprint;
          var className = classnames__default["default"](styles.monthWrapper, _defineProperty({}, styles.selected, isCurrent));
          return /*#__PURE__*/React__default["default"].createElement("div", {
            key: key,
            className: className
          }, /*#__PURE__*/React__default["default"].createElement("button", {
            onClick: _this2.handleClick.bind(_this2, buttonFingerprint)
          }, name));
        })));
      }
    }]);
    return MonthSelector;
  }(React.Component);
  _defineProperty(MonthSelector, "propTypes", {
    styles: PropTypes__default["default"].object,
    selectedMonth: PropTypes__default["default"].object.isRequired,
    isGregorian: PropTypes__default["default"].bool,
    disableYearSelector: PropTypes__default["default"].bool
  });
  _defineProperty(MonthSelector, "contextTypes", {
    setCalendarMode: PropTypes__default["default"].func.isRequired,
    setMonth: PropTypes__default["default"].func.isRequired
  });

  function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  // List of months
  var yearsJalaali = range__default["default"](momentJalaali__default["default"](new Date()).jYear() + 100, 1300);
  var yearsGregorian = range__default["default"](momentJalaali__default["default"](new Date()).year() + 100, 1920);
  var YearSelector = /*#__PURE__*/function (_Component) {
    _inherits(YearSelector, _Component);
    var _super = _createSuper$9(YearSelector);
    function YearSelector(props) {
      var _this;
      _classCallCheck(this, YearSelector);
      _this = _super.call(this, props);
      _defineProperty(_assertThisInitialized(_this), "state", {
        year: _this.props.selectedYear,
        month: _this.props.selectedMonth
      });
      _defineProperty(_assertThisInitialized(_this), "getOffsetTop", function (element) {
        var offsetTop = 0;
        while (element) {
          console.log(element.scrollTop);
          offsetTop += element.offsetTop;
          element = element.offsetParent;
        }
        return offsetTop;
      });
      _defineProperty(_assertThisInitialized(_this), "scrollToCurrentYearPositionRef", function () {
        var marginTop = 160;
        _this.yearsContainerRef.current.scrollTo({
          top: _this.getOffsetTop(_this.currentYearPositionRef.current) - marginTop,
          behavior: 'smooth' // optional
        });
      });
      _this.currentYearPositionRef = /*#__PURE__*/React__default["default"].createRef();
      _this.yearsContainerRef = /*#__PURE__*/React__default["default"].createRef();
      return _this;
    }
    _createClass(YearSelector, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.scrollToCurrentYearPositionRef();
      }
    }, {
      key: "nextYear",
      value: function nextYear() {
        this.setState({
          year: this.state.year.clone().add(1, 'year')
        });
      }
    }, {
      key: "prevYear",
      value: function prevYear() {
        this.setState({
          year: this.state.year.clone().subtract(1, 'year')
        });
      }
    }, {
      key: "handleClick",
      value: function handleClick(key) {
        var _this$context = this.context,
          setMonth = _this$context.setMonth,
          setCalendarMode = _this$context.setCalendarMode;
        var isGregorian = this.props.isGregorian;
        var monthYearFormat = isGregorian ? 'M-YYYY' : 'jM-jYYYY';
        setMonth(momentJalaali__default["default"](key, monthYearFormat));
        setCalendarMode('days');
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;
        var _this$state = this.state,
          year = _this$state.year,
          month = _this$state.month;
        var _this$props = this.props,
          styles = _this$props.styles,
          isGregorian = _this$props.isGregorian;
        var yearFormat = isGregorian ? 'YYYY' : 'jYYYY';
        var monthFormat = isGregorian ? 'M' : 'jM';
        var years = isGregorian ? yearsGregorian : yearsJalaali;
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: "month-selector"
        }, /*#__PURE__*/React__default["default"].createElement(MonthsViewHeading, {
          isGregorian: isGregorian,
          styles: styles,
          year: year,
          onNextYear: this.nextYear.bind(this),
          onPrevYear: this.prevYear.bind(this)
        }), /*#__PURE__*/React__default["default"].createElement("div", {
          ref: this.yearsContainerRef,
          className: styles.yearsList
        }, years.map(function (yearItem, key) {
          var buttonFingerprint = "".concat(month.format(monthFormat), "-").concat(years[key]);
          var isCurrent = Number(year.format(yearFormat)) === years[key];
          var isCurrentYearPosition = Number(year.format(yearFormat)) === years[key];
          var currentYearClass = classnames__default["default"](styles.yearWrapper, _defineProperty({}, styles.selected, isCurrent));
          return /*#__PURE__*/React__default["default"].createElement("div", {
            key: key,
            className: currentYearClass
          }, /*#__PURE__*/React__default["default"].createElement("button", {
            ref: isCurrentYearPosition && _this2.currentYearPositionRef,
            onClick: _this2.handleClick.bind(_this2, buttonFingerprint)
          }, yearItem));
        })));
      }
    }]);
    return YearSelector;
  }(React.Component);
  _defineProperty(YearSelector, "propTypes", {
    styles: PropTypes__default["default"].object,
    selectedYear: PropTypes__default["default"].object.isRequired,
    selectedMonth: PropTypes__default["default"].object.isRequired,
    isGregorian: PropTypes__default["default"].bool
  });
  _defineProperty(YearSelector, "contextTypes", {
    setCalendarMode: PropTypes__default["default"].func.isRequired,
    setMonth: PropTypes__default["default"].func.isRequired
  });

  var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _extends.apply(this, arguments);
  }
  module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var _extends = unwrapExports(_extends_1);

  var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  unwrapExports(objectWithoutPropertiesLoose);

  var objectWithoutProperties = createCommonjsModule(function (module) {
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var _objectWithoutProperties = unwrapExports(objectWithoutProperties);

  var _excluded = ["day", "disabled", "selected", "isCurrentMonth", "onClick", "styles", "isGregorian", "isToday", "colors", "highlighted", "isRangeEnd", "isRangeStart", "notes"];
  function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Day = /*#__PURE__*/function (_Component) {
    _inherits(Day, _Component);
    var _super = _createSuper$8(Day);
    function Day() {
      _classCallCheck(this, Day);
      return _super.apply(this, arguments);
    }
    _createClass(Day, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        return nextProps.selected !== this.props.selected || nextProps.disabled !== this.props.disabled || nextProps.isCurrentMonth !== this.props.isCurrentMonth || nextProps.highlighted !== this.props.highlighted || nextProps.isRangeEnd !== this.props.isRangeEnd || nextProps.isRangeStart !== this.props.isRangeStart || nextProps.notes !== this.props.notes;
      }
    }, {
      key: "handleClick",
      value: function handleClick(event) {
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        var _this$props = this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          day = _this$props.day;
        if (disabled) return;
        if (onClick) {
          onClick(day);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _classnames, _classnames2;
        var _this$props2 = this.props,
          day = _this$props2.day,
          disabled = _this$props2.disabled,
          selected = _this$props2.selected,
          isCurrentMonth = _this$props2.isCurrentMonth;
          _this$props2.onClick;
          var styles = _this$props2.styles,
          isGregorian = _this$props2.isGregorian,
          isToday = _this$props2.isToday,
          colors = _this$props2.colors,
          highlighted = _this$props2.highlighted,
          isRangeEnd = _this$props2.isRangeEnd,
          isRangeStart = _this$props2.isRangeStart,
          notes = _this$props2.notes,
          rest = _objectWithoutProperties(_this$props2, _excluded);
        var className = classnames__default["default"](styles.dayWrapper, (_classnames = {}, _defineProperty(_classnames, styles.selected, selected), _defineProperty(_classnames, styles.currentMonth, isCurrentMonth), _defineProperty(_classnames, styles.today, isToday), _defineProperty(_classnames, styles.disabled, disabled), _classnames));
        var highlightContainer = classnames__default["default"]((_classnames2 = {}, _defineProperty(_classnames2, styles.highlighted, highlighted), _defineProperty(_classnames2, styles.rangeend, isRangeEnd), _defineProperty(_classnames2, styles.rangestart, isRangeStart), _classnames2));
        var highlightDotContainer = classnames__default["default"]('highLightDot-container', _defineProperty({}, styles.disabled, disabled));
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: className
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: highlightContainer
        }, /*#__PURE__*/React__default["default"].createElement("button", _extends({
          type: "button",
          className: "day-button",
          onClick: this.handleClick.bind(this),
          disabled: disabled
        }, rest), /*#__PURE__*/React__default["default"].createElement("span", {
          className: "day-number"
        }, isGregorian ? day.format('D') : persianNumber(day.format('jD'))), notes && /*#__PURE__*/React__default["default"].createElement("ul", {
          className: "notes"
        }, notes.map(function (note, index) {
          return /*#__PURE__*/React__default["default"].createElement("li", {
            key: "note-".concat(index)
          }, note);
        })))), /*#__PURE__*/React__default["default"].createElement("div", {
          className: highlightDotContainer,
          onClick: this.handleClick.bind(this)
        }, colors.map(function (x, i) {
          return /*#__PURE__*/React__default["default"].createElement("span", {
            key: i,
            className: "highLightDot",
            style: {
              backgroundColor: x
            }
          });
        })));
      }
    }]);
    return Day;
  }(React.Component);
  _defineProperty(Day, "propTypes", {
    day: PropTypes__default["default"].object.isRequired,
    isCurrentMonth: PropTypes__default["default"].bool,
    disabled: PropTypes__default["default"].bool,
    selected: PropTypes__default["default"].bool,
    onClick: PropTypes__default["default"].func,
    isGregorian: PropTypes__default["default"].bool,
    notes: PropTypes__default["default"].array
  });

  /**
   * Get days of a month that should be shown on a month page
   *
   * @param month A moment object
   * @returns {Array}
   */
  function getDaysOfMonth(month, isGregorian) {
    var days = [];
    var monthFormat = isGregorian ? 'Month' : 'jMonth';
    var dayOffset = isGregorian ? 0 : 1;
    var current = month.clone().startOf(monthFormat);
    var end = month.clone().endOf(monthFormat);

    // Set start to the first day of week in the last month
    current.subtract((current.day() + dayOffset) % 7, 'days');

    // Set end to the last day of week in the next month
    end.add(6 - (end.day() + dayOffset) % 7, 'days');
    while (current.isBefore(end)) {
      days.push(current.clone());
      current.add(1, 'days');
    }
    return days;
  }
  function addZero(val) {
    val = Number(val);
    if (val < 10) return "0".concat(val);
    return val;
  }
  function checkToday(compare) {
    var today = new Date();
    var todayString = String(today.getFullYear()) + addZero(String(today.getMonth() + 1)) + addZero(String(today.getDate()));
    return compare === todayString;
  }

  var defaultStyles = {
    calendarContainer: 'calendarContainer',
    heading: 'heading',
    prev: 'prev',
    next: 'next',
    title: 'title',
    dayWrapper: 'dayWrapper',
    currentMonth: 'currentMonth',
    daysOfWeek: 'daysOfWeek',
    yearsList: 'yearsList',
    monthsList: 'monthsList',
    selected: 'selected',
    today: 'today',
    dayPickerContainer: 'dayPickerContainer',
    disabled: 'disabled',
    highlighted: 'highlighted',
    rangeend: 'rangeend',
    rangestart: 'rangestart'
  };

  var MomentRange = require('moment-range');
  var extendedMoment = MomentRange.extendMoment(momentJalaali__default["default"]);
  var RangesList = /*#__PURE__*/function () {
    function RangesList(ranges) {
      var _this = this;
      _classCallCheck(this, RangesList);
      this.ranges = [];
      if (ranges) {
        ranges.forEach(function (item) {
          _this.validateRangeObject(item);
          var range = extendedMoment.range(item.start, item.end);

          // include start
          range.start.add(-1, 'days');
          _this.ranges.push({
            color: item.color,
            range: range,
            disabled: !!item.disabled,
            enabled: !!item.enabled
          });
        });
      }
    }
    _createClass(RangesList, [{
      key: "getDayState",
      value: function getDayState(day) {
        var enabled = this.ranges.some(function (x) {
          return x.enabled;
        });
        var disabled = this.ranges.some(function (x) {
          return x.disabled && x.range.contains(day) || enabled && x.range.contains(day);
        });
        var colors = this.ranges.filter(function (x) {
          return x.color && x.range.contains(day);
        }).map(function (x) {
          return x.color;
        });
        return {
          disabled: enabled ? !disabled : disabled,
          colors: colors
        };
      }
    }, {
      key: "validateRangeObject",
      value: function validateRangeObject(range) {
        if (!('start' in range)) throw "'start' property is a required property of 'range' object.\n            range object: ".concat(JSON.stringify(range));
        if (!('end' in range)) throw "'end' property is a required property of 'range' object.\n            range object: ".concat(JSON.stringify(range));
      }
    }]);
    return RangesList;
  }();

  function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Calendar = /*#__PURE__*/function (_Component) {
    _inherits(Calendar, _Component);
    var _super = _createSuper$7(Calendar);
    function Calendar() {
      var _this;
      _classCallCheck(this, Calendar);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "state", {
        year: _this.props.defaultYear || _this.props.selectedDay || momentJalaali__default["default"](_this.props.min),
        month: _this.props.defaultMonth || _this.props.selectedDay || momentJalaali__default["default"](_this.props.min),
        selectedDay: _this.props.selectedDay || !_this.props.isRangeSelector && _this.props.value || momentJalaali__default["default"](),
        startDay: _this.props.value && _this.props.value.startDay,
        endDay: _this.props.value && _this.props.value.endDay,
        mode: 'days',
        rangeStart: true,
        isGregorian: _this.props.isGregorian,
        ranges: new RangesList(_this.props.ranges),
        schedule: _this.props.schedule
      });
      _defineProperty(_assertThisInitialized(_this), "setMode", function (mode) {
        _this.setState({
          mode: mode
        });
      });
      _defineProperty(_assertThisInitialized(_this), "setYear", function (year) {
        var onYearChange = _this.props.onYearChange;
        _this.setState({
          year: year
        });
        if (onYearChange) {
          onYearChange(year);
        }
      });
      _defineProperty(_assertThisInitialized(_this), "setMonth", function (month) {
        var onMonthChange = _this.props.onMonthChange;
        _this.setState({
          month: month
        });
        if (onMonthChange) {
          onMonthChange(month);
        }
      });
      _defineProperty(_assertThisInitialized(_this), "setType", function (type) {
        _this.setState({
          type: type
        });
      });
      _defineProperty(_assertThisInitialized(_this), "nextMonth", function () {
        var isGregorian = _this.state.isGregorian;
        var monthFormat = isGregorian ? 'Month' : 'jMonth';
        _this.setState({
          month: _this.state.month.clone().add(1, monthFormat)
        }, function () {
          return _this.props.onMonthChange && _this.props.onMonthChange(_this.state.month);
        });
      });
      _defineProperty(_assertThisInitialized(_this), "prevMonth", function () {
        var isGregorian = _this.state.isGregorian;
        var monthFormat = isGregorian ? 'Month' : 'jMonth';
        _this.setState({
          month: _this.state.month.clone().subtract(1, monthFormat)
        }, function () {
          return _this.props.onMonthChange && _this.props.onMonthChange(_this.state.month);
        });
      });
      _defineProperty(_assertThisInitialized(_this), "selectDay", function (selectedDay, isRangeSelector) {
        var _this$state = _this.state,
          month = _this$state.month,
          isGregorian = _this$state.isGregorian;
          _this$state.rangeStart;
          _this$state.startDay;
          _this$state.endDay;
        var yearMonthFormat = isGregorian ? 'YYYYMM' : 'jYYYYjMM';
        if (!selectedDay) {
          _this.setState({
            year: _this.props.defaultYear || _this.props.selectedDay || momentJalaali__default["default"](_this.props.min),
            month: _this.props.defaultMonth || _this.props.selectedDay || momentJalaali__default["default"](_this.props.min),
            selectedDay: null
          });
          return;
        }

        // Because there's no `m1.isSame(m2, 'jMonth')`
        if (selectedDay.format(yearMonthFormat) !== month.format(yearMonthFormat)) {
          _this.setState({
            month: selectedDay
          });
        }
        if (isRangeSelector) {
          if (_this.state.rangeStart) {
            _this.setState({
              selectedDay: selectedDay,
              rangeStart: !_this.state.rangeStart,
              startDay: selectedDay,
              endDay: undefined
            });
          } else {
            _this.setState({
              rangeStart: !_this.state.rangeStart,
              endDay: selectedDay
            });
          }
        } else {
          _this.setState({
            selectedDay: selectedDay
          });
        }
      });
      _defineProperty(_assertThisInitialized(_this), "handleClickOnDay", function (selectedDay) {
        var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          onChange = _this$props.onChange,
          isRangeSelector = _this$props.isRangeSelector;
        var _this$state2 = _this.state,
          startDay = _this$state2.startDay,
          rangeStart = _this$state2.rangeStart;
        _this.selectDay(selectedDay, isRangeSelector);
        if (isRangeSelector) {
          if (onSelect && startDay && !rangeStart) {
            onSelect({
              startDay: startDay,
              endDay: selectedDay
            });
          }
          if (onChange && startDay && !rangeStart) onChange({
            startDay: startDay,
            endDay: selectedDay
          });
        } else {
          if (onSelect) {
            onSelect(selectedDay);
          }
          if (onChange) onChange(selectedDay);
        }
      });
      _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (event) {
        if (_this.props.onClickOutside) {
          _this.props.onClickOutside(event);
        }
      });
      _defineProperty(_assertThisInitialized(_this), "days", null);
      _defineProperty(_assertThisInitialized(_this), "lastRenderedMonth", null);
      _defineProperty(_assertThisInitialized(_this), "renderMonthSelector", function () {
        var _this$state3 = _this.state,
          month = _this$state3.month,
          isGregorian = _this$state3.isGregorian;
        var _this$props2 = _this.props,
          styles = _this$props2.styles,
          disableYearSelector = _this$props2.disableYearSelector;
        return /*#__PURE__*/React__default["default"].createElement(MonthSelector, {
          disableYearSelector: disableYearSelector,
          styles: styles,
          isGregorian: isGregorian,
          selectedMonth: month
        });
      });
      _defineProperty(_assertThisInitialized(_this), "renderYearSelector", function () {
        var _this$state4 = _this.state,
          year = _this$state4.year,
          month = _this$state4.month,
          isGregorian = _this$state4.isGregorian;
        var styles = _this.props.styles;
        return /*#__PURE__*/React__default["default"].createElement(YearSelector, {
          styles: styles,
          isGregorian: isGregorian,
          selectedYear: year,
          selectedMonth: month
        });
      });
      _defineProperty(_assertThisInitialized(_this), "groupSchedule", function (schedule) {
        return schedule !== null && schedule !== void 0 && schedule.length ? schedule.reduce(function (r, a) {
          r[momentJalaali__default["default"](a.time).format('YYYYMMDD')] = r[momentJalaali__default["default"](a.time).format('YYYYMMDD')] || [];
          r[momentJalaali__default["default"](a.time).format('YYYYMMDD')].push(a.note);
          return r;
        }, Object.create(null)) : null;
      });
      _defineProperty(_assertThisInitialized(_this), "renderDays", function () {
        var _this$state5 = _this.state,
          month = _this$state5.month,
          selectedDay = _this$state5.selectedDay,
          isGregorian = _this$state5.isGregorian,
          startDay = _this$state5.startDay,
          endDay = _this$state5.endDay;
        var _this$props3 = _this.props,
          children = _this$props3.children,
          min = _this$props3.min,
          max = _this$props3.max,
          styles = _this$props3.styles;
          _this$props3.outsideClickIgnoreClass;
          _this$props3.schedule;
        var days;
        if (_this.lastRenderedMonth === month) {
          days = _this.days;
        } else {
          days = getDaysOfMonth(month, isGregorian);
          _this.days = days;
          _this.lastRenderedMonth = month;
        }
        var monthFormat = isGregorian ? 'MM' : 'jMM';
        var dateFormat = isGregorian ? 'YYYYMMDD' : 'jYYYYjMMjDD';
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: _this.props.calendarClass
        }, children, /*#__PURE__*/React__default["default"].createElement(Heading, {
          timePicker: _this.props.timePicker,
          isGregorian: isGregorian,
          styles: styles,
          month: month
        }), /*#__PURE__*/React__default["default"].createElement(DaysOfWeek, {
          styles: styles,
          isGregorian: isGregorian
        }), /*#__PURE__*/React__default["default"].createElement("div", {
          className: styles.dayPickerContainer
        }, days.map(function (day) {
          var isCurrentMonth = day.format(monthFormat) === month.format(monthFormat);
          var selected = selectedDay ? selectedDay.isSame(day, 'day') : false;
          var key = day.format(dateFormat);
          var isToday = checkToday(day.format('YYYYMMDD'));
          var isRangeStart = startDay && startDay.isSame(day, 'day');
          var isRangeEnd = endDay && endDay.isSame(day, 'day');
          var highlighted = startDay && endDay && (day.isBetween(startDay, endDay) || isRangeStart || isRangeEnd);

          // disabling by old min-max props
          var disabled = (min ? day.isBefore(min) : false) || (max ? day.isAfter(max) : false) || startDay && !endDay && day.isSameOrBefore(startDay);

          // new method for disabling and highlighting the ranges of days
          var dayState = _this.state.ranges.getDayState(day);
          var groupedSchedule = _this.groupSchedule(_this.state.schedule);
          return /*#__PURE__*/React__default["default"].createElement(Day, {
            isGregorian: isGregorian,
            key: key,
            onClick: _this.handleClickOnDay,
            day: day,
            isToday: isToday,
            isRangeEnd: isRangeEnd,
            isRangeStart: isRangeStart,
            colors: dayState.colors,
            disabled: disabled || dayState.disabled // disabled by old method or new range method
            ,
            selected: selected,
            isCurrentMonth: isCurrentMonth,
            styles: styles,
            highlighted: highlighted,
            notes: groupedSchedule && groupedSchedule[day.format('YYYYMMDD')]
          });
        })));
      });
      return _this;
    }
    _createClass(Calendar, [{
      key: "getChildContext",
      value: function getChildContext() {
        return {
          nextMonth: this.nextMonth.bind(this),
          prevMonth: this.prevMonth.bind(this),
          setCalendarMode: this.setMode.bind(this),
          setYear: this.setYear.bind(this),
          setMonth: this.setMonth.bind(this),
          setType: this.setMonth.bind(this)
        };
      }
    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(_ref) {
        var selectedDay = _ref.selectedDay,
          defaultYear = _ref.defaultYear,
          defaultMonth = _ref.defaultMonth,
          min = _ref.min,
          isGregorian = _ref.isGregorian,
          ranges = _ref.ranges,
          schedule = _ref.schedule;
        if (typeof isGregorian !== 'undefined' && isGregorian !== this.state.isGregorian) {
          this.setState({
            isGregorian: isGregorian
          });
        }
        if (this.props.selectedDay !== selectedDay) {
          this.selectDay(selectedDay || momentJalaali__default["default"]());
        } else if (defaultYear && this.props.defaultYear !== defaultYear && this.state.year === this.props.defaultYear) {
          this.setYear(defaultYear);
        } else if (defaultMonth && this.props.defaultMonth !== defaultMonth && this.state.month === this.props.defaultMonth) {
          this.setMonth(defaultMonth);
        } else if (min && this.props.min !== min && this.state.month.isSame(this.props.min)) {
          this.setMonth(min.clone());
        }
        if (JSON.stringify(this.props.ranges) !== JSON.stringify(ranges)) {
          this.setState({
            ranges: new RangesList(ranges)
          });
        }
        if (this.props.schedule !== schedule) {
          this.setState({
            schedule: schedule
          });
        }
      }
    }, {
      key: "changeCalendarMode",
      value: function changeCalendarMode() {
        this.props.toggleMode();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;
        var _this$props4 = this.props;
          _this$props4.selectedDay;
          var min = _this$props4.min,
          max = _this$props4.max;
          _this$props4.onClickOutside;
          _this$props4.outsideClickIgnoreClass;
          var styles = _this$props4.styles,
          className = _this$props4.className,
          showTodayButton = _this$props4.showTodayButton,
          schedule = _this$props4.schedule;
        var _this$state6 = this.state,
          mode = _this$state6.mode,
          isGregorian = _this$state6.isGregorian;
        var jalaaliClassName = isGregorian ? '' : 'jalaali ';
        var today = momentJalaali__default["default"]();
        today.set({
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0
        });

        // check today state -----------

        // disabling by old min-max props
        var disabled = (min ? today.isBefore(min) : false) || (max ? today.isAfter(max) : false);
        // new method for disabling and highlighting the ranges of days
        var dayState = this.state.ranges.getDayState(today);
        var isTodayDisabled = disabled || dayState.disabled;

        // ------------------------------

        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: "".concat(styles.calendarContainer, " ").concat(jalaaliClassName).concat(className).concat(schedule !== null && schedule !== void 0 && schedule.length ? ' schedule' : '')
        }, this.props.showToggleButton && /*#__PURE__*/React__default["default"].createElement("button", {
          className: "calendarButton toggleButton",
          type: "button",
          onClick: this.changeCalendarMode.bind(this)
        }, isGregorian ? this.props.toggleButtonText[0] : this.props.toggleButtonText[1]), mode === 'days' && this.renderDays(), mode === 'monthSelector' && this.renderMonthSelector(), mode === 'yearSelector' && this.renderYearSelector(), showTodayButton && /*#__PURE__*/React__default["default"].createElement("button", {
          type: "button",
          className: "calendarButton selectToday",
          onClick: function onClick() {
            return _this2.handleClickOnDay(today);
          },
          disabled: isTodayDisabled
        }, isGregorian ? 'today' : 'امروز'));
      }
    }]);
    return Calendar;
  }(React.Component);
  _defineProperty(Calendar, "propTypes", {
    min: PropTypes__default["default"].object,
    max: PropTypes__default["default"].object,
    styles: PropTypes__default["default"].object,
    selectedDay: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string]),
    defaultYear: PropTypes__default["default"].object,
    defaultMonth: PropTypes__default["default"].object,
    onSelect: PropTypes__default["default"].func,
    onYearChange: PropTypes__default["default"].func,
    onMonthChange: PropTypes__default["default"].func,
    onClickOutside: PropTypes__default["default"].func,
    containerProps: PropTypes__default["default"].object,
    isGregorian: PropTypes__default["default"].bool,
    calendarClass: PropTypes__default["default"].string,
    showToggleButton: PropTypes__default["default"].bool,
    toggleButtonText: PropTypes__default["default"].any,
    showTodayButton: PropTypes__default["default"].bool,
    disableYearSelector: PropTypes__default["default"].bool,
    isRangeSelector: PropTypes__default["default"].bool,
    schedule: PropTypes__default["default"].array
  });
  _defineProperty(Calendar, "childContextTypes", {
    nextMonth: PropTypes__default["default"].func.isRequired,
    prevMonth: PropTypes__default["default"].func.isRequired,
    setCalendarMode: PropTypes__default["default"].func.isRequired,
    setYear: PropTypes__default["default"].func.isRequired,
    setMonth: PropTypes__default["default"].func.isRequired,
    setType: PropTypes__default["default"].func.isRequired
  });
  _defineProperty(Calendar, "defaultProps", {
    styles: defaultStyles,
    containerProps: {},
    isGregorian: true,
    showToggleButton: false,
    showTodayButton: true,
    toggleButtonText: ['تاریخ شمسی', 'تاریخ میلادی']
  });
  var Calendar$1 = onClickOutside__default["default"](Calendar);

  var arrayLikeToArray = createCommonjsModule(function (module) {
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  unwrapExports(arrayLikeToArray);

  var arrayWithoutHoles = createCommonjsModule(function (module) {
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }
  module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  unwrapExports(arrayWithoutHoles);

  var iterableToArray = createCommonjsModule(function (module) {
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  unwrapExports(iterableToArray);

  var unsupportedIterableToArray = createCommonjsModule(function (module) {
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
  }
  module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  unwrapExports(unsupportedIterableToArray);

  var nonIterableSpread = createCommonjsModule(function (module) {
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  unwrapExports(nonIterableSpread);

  var toConsumableArray = createCommonjsModule(function (module) {
  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
  }
  module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var _toConsumableArray = unwrapExports(toConsumableArray);

  function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Header = /*#__PURE__*/function (_React$Component) {
    _inherits(Header, _React$Component);
    var _super = _createSuper$6(Header);
    function Header(props) {
      var _this;
      _classCallCheck(this, Header);
      _this = _super.call(this, props);
      var _this$props = _this.props,
        value = _this$props.value,
        format = _this$props.format;
      _this.state = {
        str: value && value.format(format) || '',
        invalid: false
      };
      _this.onClear = _this.onClear.bind(_assertThisInitialized(_this));
      _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
      _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
      return _this;
    }
    _createClass(Header, [{
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var value = nextProps.value,
          format = nextProps.format;
        this.setState({
          str: value && value.format(format) || '',
          invalid: false
        });
      }
    }, {
      key: "onInputChange",
      value: function onInputChange(event) {
        var str = event.target.value;
        this.setState({
          str: str
        });
        var _this$props2 = this.props,
          format = _this$props2.format,
          hourOptions = _this$props2.hourOptions,
          minuteOptions = _this$props2.minuteOptions,
          secondOptions = _this$props2.secondOptions,
          disabledHours = _this$props2.disabledHours,
          disabledMinutes = _this$props2.disabledMinutes,
          disabledSeconds = _this$props2.disabledSeconds,
          onChange = _this$props2.onChange,
          allowEmpty = _this$props2.allowEmpty;
        if (str) {
          var originalValue = this.props.value;
          var value = this.getProtoValue().clone();
          var parsed = momentJalaali__default["default"](str, format, true);
          if (!parsed.isValid()) {
            this.setState({
              invalid: true
            });
            return;
          }
          value.hour(parsed.hour()).minute(parsed.minute()).second(parsed.second());

          // if time value not allowed, response warning.
          if (hourOptions.indexOf(value.hour()) < 0 || minuteOptions.indexOf(value.minute()) < 0 || secondOptions.indexOf(value.second()) < 0) {
            this.setState({
              invalid: true
            });
            return;
          }

          // if time value is disabled, response warning.
          var disabledHourOptions = disabledHours();
          var disabledMinuteOptions = disabledMinutes(value.hour());
          var disabledSecondOptions = disabledSeconds(value.hour(), value.minute());
          if (disabledHourOptions && disabledHourOptions.indexOf(value.hour()) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf(value.minute()) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf(value.second()) >= 0) {
            this.setState({
              invalid: true
            });
            return;
          }
          if (originalValue) {
            if (originalValue.hour() !== value.hour() || originalValue.minute() !== value.minute() || originalValue.second() !== value.second()) {
              // keep other fields for rc-calendar
              var changedValue = originalValue.clone();
              changedValue.hour(value.hour());
              changedValue.minute(value.minute());
              changedValue.second(value.second());
              onChange(changedValue);
            }
          } else if (originalValue !== value) {
            onChange(value);
          }
        } else if (allowEmpty) {
          onChange(null);
        } else {
          this.setState({
            invalid: true
          });
          return;
        }
        this.setState({
          invalid: false
        });
      }
    }, {
      key: "onKeyDown",
      value: function onKeyDown(e) {
        if (e.keyCode === 27) {
          this.props.onEsc();
        }
      }
    }, {
      key: "onClear",
      value: function onClear() {
        this.setState({
          str: ''
        });
        this.props.onClear();
      }
    }, {
      key: "getClearButton",
      value: function getClearButton() {
        var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          allowEmpty = _this$props3.allowEmpty;
        if (!allowEmpty) {
          return null;
        }
        return /*#__PURE__*/React__default["default"].createElement("a", {
          className: "".concat(prefixCls, "-clear-btn"),
          role: "button",
          title: this.props.clearText,
          onMouseDown: this.onClear
        });
      }
    }, {
      key: "getProtoValue",
      value: function getProtoValue() {
        return this.props.value || this.props.defaultOpenValue;
      }
    }, {
      key: "getInput",
      value: function getInput() {
        var _this2 = this;
        var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          placeholder = _this$props4.placeholder,
          name = _this$props4.name;
        var _this$state = this.state,
          invalid = _this$state.invalid,
          str = _this$state.str;
        var invalidClass = invalid ? "".concat(prefixCls, "-input-invalid") : '';
        return /*#__PURE__*/React__default["default"].createElement("input", {
          className: "".concat(prefixCls, "-input  ").concat(invalidClass),
          ref: function ref(inst) {
            _this2.input = inst;
          },
          onKeyDown: this.onKeyDown,
          value: str,
          placeholder: placeholder,
          name: name,
          onChange: this.onInputChange
        });
      }
    }, {
      key: "render",
      value: function render() {
        var prefixCls = this.props.prefixCls;
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: "".concat(prefixCls, "-input-wrap")
        }, this.getInput(), this.getClearButton());
      }
    }]);
    return Header;
  }(React__default["default"].Component);
  _defineProperty(Header, "propTypes", {
    format: PropTypes__default["default"].string,
    prefixCls: PropTypes__default["default"].string,
    disabledDate: PropTypes__default["default"].func,
    placeholder: PropTypes__default["default"].string,
    name: PropTypes__default["default"].string,
    clearText: PropTypes__default["default"].string,
    value: PropTypes__default["default"].object,
    hourOptions: PropTypes__default["default"].array,
    minuteOptions: PropTypes__default["default"].array,
    secondOptions: PropTypes__default["default"].array,
    disabledHours: PropTypes__default["default"].func,
    disabledMinutes: PropTypes__default["default"].func,
    disabledSeconds: PropTypes__default["default"].func,
    onChange: PropTypes__default["default"].func,
    onClear: PropTypes__default["default"].func,
    onEsc: PropTypes__default["default"].func,
    allowEmpty: PropTypes__default["default"].bool,
    defaultOpenValue: PropTypes__default["default"].object,
    currentSelectPanel: PropTypes__default["default"].string
  });

  function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var scrollTo = function scrollTo(element, to, duration) {
    var requestAnimationFrame = window.requestAnimationFrame || function requestAnimationFrameTimeout() {
      return setTimeout(arguments[0], 10);
    };
    // jump to target if duration zero
    if (duration <= 0) {
      element.scrollTop = to;
      return;
    }
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;
    requestAnimationFrame(function () {
      element.scrollTop += perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
    });
  };
  var Select = /*#__PURE__*/function (_React$Component) {
    _inherits(Select, _React$Component);
    var _super = _createSuper$5(Select);
    function Select() {
      var _this;
      _classCallCheck(this, Select);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "onSelect", function (value) {
        var _this$props = _this.props;
          _this$props.onSelect;
          var type = _this$props.type;
        _this.props.onSelect(type, value);
      });
      _defineProperty(_assertThisInitialized(_this), "getOptions", function () {
        var _this$props2 = _this.props,
          options = _this$props2.options,
          selectedIndex = _this$props2.selectedIndex,
          prefixCls = _this$props2.prefixCls;
        return options.map(function (item, index) {
          var _classnames;
          var cls = classnames__default["default"]((_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-select-option-selected"), selectedIndex === index), _defineProperty(_classnames, "".concat(prefixCls, "-select-option-disabled"), item.disabled), _classnames));
          var onclick = null;
          if (!item.disabled) {
            var value = +item.value;
            if (Number.isNaN(value)) {
              value = item.value;
            }
            onclick = _this.onSelect.bind(_assertThisInitialized(_this), value);
          }
          return /*#__PURE__*/React__default["default"].createElement("li", {
            className: cls,
            key: index,
            onClick: onclick,
            disabled: item.disabled
          }, typeof item.label !== 'undefined' ? item.label : item.value);
        });
      });
      _defineProperty(_assertThisInitialized(_this), "scrollToSelected", function (duration) {
        // move to selected item
        var select = ReactDom__default["default"].findDOMNode(_assertThisInitialized(_this));
        var list = ReactDom__default["default"].findDOMNode(_this.list);
        var index = _this.props.selectedIndex;
        if (index < 0) {
          index = 0;
        }
        var topOption = list.children[index];
        var to = topOption.offsetTop;
        scrollTo(select, to, duration);
      });
      return _this;
    }
    _createClass(Select, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // jump to selected option
        this.scrollToSelected(0);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        // smooth scroll to selected option
        if (prevProps.selectedIndex !== this.props.selectedIndex) {
          this.scrollToSelected(120);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;
        if (this.props.options.length === 0) {
          return null;
        }
        var prefixCls = this.props.prefixCls;
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: "".concat(prefixCls, "-select"),
          onMouseEnter: this.props.onMouseEnter
        }, /*#__PURE__*/React__default["default"].createElement("ul", {
          ref: function ref(inst) {
            _this2.list = inst;
          }
        }, this.getOptions()));
      }
    }]);
    return Select;
  }(React__default["default"].Component);
  _defineProperty(Select, "propTypes", {
    prefixCls: PropTypes__default["default"].string,
    options: PropTypes__default["default"].array,
    selectedIndex: PropTypes__default["default"].number,
    type: PropTypes__default["default"].string,
    onSelect: PropTypes__default["default"].func,
    onMouseEnter: PropTypes__default["default"].func
  });

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var pad = function pad(value) {
    return value < 10 ? "0".concat(value) : "".concat(value);
  };
  var formatOption = function formatOption(option, disabledOptions) {
    var value = pad(option);
    var disabled = false;
    if (disabledOptions && disabledOptions.indexOf(option) >= 0) {
      disabled = true;
    }
    return {
      value: value,
      disabled: disabled
    };
  };
  var Combobox = /*#__PURE__*/function (_React$Component) {
    _inherits(Combobox, _React$Component);
    var _super = _createSuper$4(Combobox);
    function Combobox() {
      var _this;
      _classCallCheck(this, Combobox);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "onItemChange", function (type, itemValue) {
        var _this$props = _this.props,
          onChange = _this$props.onChange,
          defaultOpenValue = _this$props.defaultOpenValue;
        var value = (_this.props.value || defaultOpenValue).clone();
        if (type === 'hour') {
          value.hour(itemValue);
        } else if (type === 'minute') {
          value.minute(itemValue);
        } else if (type === 'second') {
          value.second(itemValue);
        } else {
          var actualPeriod = value.format('A');
          if (actualPeriod !== itemValue) {
            var hour24style = value.hour();
            var hour12style = hour24style < 12 ? hour24style : hour24style - 12;
            if (itemValue === 'PM') {
              value.hour(hour12style + 12);
            } else {
              value.hour(hour12style);
            }
          }
        }
        onChange(value);
      });
      _defineProperty(_assertThisInitialized(_this), "onEnterSelectPanel", function (range) {
        _this.props.onCurrentSelectPanelChange(range);
      });
      _defineProperty(_assertThisInitialized(_this), "getHourSelect", function (hour) {
        var _this$props2 = _this.props,
          prefixCls = _this$props2.prefixCls,
          showAMPM = _this$props2.showAMPM,
          disabledHours = _this$props2.disabledHours,
          showHour = _this$props2.showHour;
        if (!showHour) {
          return null;
        }
        var disabledOptions = disabledHours();
        var hourOptions = _this.props.hourOptions;
        var formattedOptions = hourOptions.map(function (option) {
          return formatOption(option, disabledOptions);
        });
        if (showAMPM) {
          hourOptions = hourOptions.filter(function (value) {
            return hour < 12 ? value < 12 : value >= 12;
          });
          formattedOptions = formattedOptions.map(function (option) {
            return _objectSpread(_objectSpread({}, option), {}, {
              label: option.value <= 12 ? option.value : pad(option.value - 12)
            });
          }).filter(function (_ref) {
            var value = _ref.value;
            return hour < 12 ? Number(value) < 12 : Number(value) >= 12;
          });
        }
        return /*#__PURE__*/React__default["default"].createElement(Select, {
          prefixCls: prefixCls,
          options: formattedOptions,
          selectedIndex: hourOptions.indexOf(hour),
          type: "hour",
          onSelect: _this.onItemChange,
          onMouseEnter: _this.onEnterSelectPanel.bind(_assertThisInitialized(_this), 'hour')
        });
      });
      _defineProperty(_assertThisInitialized(_this), "getMinuteSelect", function (minute) {
        var _this$props3 = _this.props,
          prefixCls = _this$props3.prefixCls,
          minuteOptions = _this$props3.minuteOptions,
          disabledMinutes = _this$props3.disabledMinutes,
          defaultOpenValue = _this$props3.defaultOpenValue;
        var value = _this.props.value || defaultOpenValue;
        var disabledOptions = disabledMinutes(value.hour());
        return /*#__PURE__*/React__default["default"].createElement(Select, {
          prefixCls: prefixCls,
          options: minuteOptions.map(function (option) {
            return formatOption(option, disabledOptions);
          }),
          selectedIndex: minuteOptions.indexOf(minute),
          type: "minute",
          onSelect: _this.onItemChange,
          onMouseEnter: _this.onEnterSelectPanel.bind(_assertThisInitialized(_this), 'minute')
        });
      });
      _defineProperty(_assertThisInitialized(_this), "getSecondSelect", function (second) {
        var _this$props4 = _this.props,
          prefixCls = _this$props4.prefixCls,
          secondOptions = _this$props4.secondOptions,
          disabledSeconds = _this$props4.disabledSeconds,
          showSecond = _this$props4.showSecond,
          defaultOpenValue = _this$props4.defaultOpenValue;
        if (!showSecond) {
          return null;
        }
        var value = _this.props.value || defaultOpenValue;
        var disabledOptions = disabledSeconds(value.hour(), value.minute());
        return /*#__PURE__*/React__default["default"].createElement(Select, {
          prefixCls: prefixCls,
          options: secondOptions.map(function (option) {
            return formatOption(option, disabledOptions);
          }),
          selectedIndex: secondOptions.indexOf(second),
          type: "second",
          onSelect: _this.onItemChange,
          onMouseEnter: _this.onEnterSelectPanel.bind(_assertThisInitialized(_this), 'second')
        });
      });
      _defineProperty(_assertThisInitialized(_this), "getAMPMSelect", function (period) {
        var _this$props5 = _this.props,
          prefixCls = _this$props5.prefixCls,
          showAMPM = _this$props5.showAMPM;
          _this$props5.defaultOpenValue;
          var isGregorian = _this$props5.isGregorian;
        if (!showAMPM) {
          return null;
        }
        var options = [{
          value: 'AM',
          label: isGregorian ? 'AM' : 'ق.ظ'
        }, {
          value: 'PM',
          label: isGregorian ? 'PM' : 'ب.ظ'
        }];
        return /*#__PURE__*/React__default["default"].createElement(Select, {
          prefixCls: prefixCls,
          options: options,
          selectedIndex: period === 'AM' ? 0 : 1,
          type: "period",
          onSelect: _this.onItemChange,
          onMouseEnter: _this.onEnterSelectPanel.bind(_assertThisInitialized(_this), 'period')
        });
      });
      return _this;
    }
    _createClass(Combobox, [{
      key: "render",
      value: function render() {
        var _this$props6 = this.props,
          prefixCls = _this$props6.prefixCls,
          defaultOpenValue = _this$props6.defaultOpenValue;
        var value = this.props.value || defaultOpenValue;
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: "".concat(prefixCls, "-combobox")
        }, this.getHourSelect(value.hour()), this.getMinuteSelect(value.minute()), this.getSecondSelect(value.second()), this.getAMPMSelect(value.hour() < 12 ? 'AM' : 'PM'));
      }
    }]);
    return Combobox;
  }(React__default["default"].Component);
  _defineProperty(Combobox, "propTypes", {
    format: PropTypes__default["default"].string,
    defaultOpenValue: PropTypes__default["default"].object,
    prefixCls: PropTypes__default["default"].string,
    value: PropTypes__default["default"].object,
    onChange: PropTypes__default["default"].func,
    showHour: PropTypes__default["default"].bool,
    showSecond: PropTypes__default["default"].bool,
    hourOptions: PropTypes__default["default"].array,
    minuteOptions: PropTypes__default["default"].array,
    secondOptions: PropTypes__default["default"].array,
    disabledHours: PropTypes__default["default"].func,
    disabledMinutes: PropTypes__default["default"].func,
    disabledSeconds: PropTypes__default["default"].func,
    onCurrentSelectPanelChange: PropTypes__default["default"].func,
    isGregorian: PropTypes__default["default"].bool
  });

  function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  function noop$1() {}
  function generateOptions(length, disabledOptions, hideDisabledOptions) {
    var arr = [];
    for (var value = 0; value < length; value++) {
      if (!disabledOptions || disabledOptions.indexOf(value) < 0 || !hideDisabledOptions) {
        arr.push(value);
      }
    }
    return arr;
  }
  var Panel = /*#__PURE__*/function (_React$Component) {
    _inherits(Panel, _React$Component);
    var _super = _createSuper$3(Panel);
    function Panel(props) {
      var _this;
      _classCallCheck(this, Panel);
      _this = _super.call(this, props);
      _defineProperty(_assertThisInitialized(_this), "onChange", function (newValue) {
        _this.setState({
          value: newValue
        });
        _this.props.onChange(newValue);
      });
      _defineProperty(_assertThisInitialized(_this), "onClear", function () {
        _this.props.onClear();
      });
      _defineProperty(_assertThisInitialized(_this), "onCurrentSelectPanelChange", function (currentSelectPanel) {
        _this.setState({
          currentSelectPanel: currentSelectPanel
        });
      });
      _this.state = {
        value: _this.props.value,
        selectionRange: []
      };
      return _this;
    }
    _createClass(Panel, [{
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var value = nextProps.value;
        if (value) {
          this.setState({
            value: value
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          isGregorian = _this$props.isGregorian,
          formatter = _this$props.formatter,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          placeholder = _this$props.placeholder,
          name = _this$props.name,
          disabledHours = _this$props.disabledHours,
          disabledMinutes = _this$props.disabledMinutes,
          disabledSeconds = _this$props.disabledSeconds,
          hideDisabledOptions = _this$props.hideDisabledOptions,
          allowEmpty = _this$props.allowEmpty,
          showHour = _this$props.showHour,
          showSecond = _this$props.showSecond,
          showAMPM = _this$props.showAMPM,
          format = _this$props.format,
          defaultOpenValue = _this$props.defaultOpenValue,
          clearText = _this$props.clearText,
          onEsc = _this$props.onEsc;
        var _this$state = this.state,
          value = _this$state.value,
          currentSelectPanel = _this$state.currentSelectPanel;
        var disabledHourOptions = disabledHours();
        var disabledMinuteOptions = disabledMinutes(value ? value.hour() : null);
        var disabledSecondOptions = disabledSeconds(value ? value.hour() : null, value ? value.minute() : null);
        var hourOptions = generateOptions(24, disabledHourOptions, hideDisabledOptions);
        var minuteOptions = generateOptions(60, disabledMinuteOptions, hideDisabledOptions);
        var secondOptions = generateOptions(60, disabledSecondOptions, hideDisabledOptions);
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: "".concat(prefixCls, "-inner ").concat(className)
        }, /*#__PURE__*/React__default["default"].createElement(Header, {
          clearText: clearText,
          prefixCls: prefixCls,
          defaultOpenValue: defaultOpenValue,
          value: value,
          currentSelectPanel: currentSelectPanel,
          onEsc: onEsc,
          format: format,
          placeholder: placeholder,
          name: name,
          hourOptions: hourOptions,
          minuteOptions: minuteOptions,
          secondOptions: secondOptions,
          disabledHours: disabledHours,
          disabledMinutes: disabledMinutes,
          disabledSeconds: disabledSeconds,
          onChange: this.onChange,
          onClear: this.onClear,
          allowEmpty: allowEmpty
        }), /*#__PURE__*/React__default["default"].createElement(Combobox, {
          isGregorian: isGregorian,
          formatter: formatter,
          prefixCls: prefixCls,
          value: value,
          defaultOpenValue: defaultOpenValue,
          format: format,
          onChange: this.onChange,
          showAMPM: showAMPM,
          showHour: showHour,
          showSecond: showSecond,
          hourOptions: hourOptions,
          minuteOptions: minuteOptions,
          secondOptions: secondOptions,
          disabledHours: disabledHours,
          disabledMinutes: disabledMinutes,
          disabledSeconds: disabledSeconds,
          onCurrentSelectPanelChange: this.onCurrentSelectPanelChange
        }));
      }
    }]);
    return Panel;
  }(React__default["default"].Component);
  _defineProperty(Panel, "propTypes", {
    clearText: PropTypes__default["default"].string,
    prefixCls: PropTypes__default["default"].string,
    defaultOpenValue: PropTypes__default["default"].object,
    value: PropTypes__default["default"].object,
    placeholder: PropTypes__default["default"].string,
    name: PropTypes__default["default"].string,
    format: PropTypes__default["default"].string,
    disabledHours: PropTypes__default["default"].func,
    disabledMinutes: PropTypes__default["default"].func,
    disabledSeconds: PropTypes__default["default"].func,
    hideDisabledOptions: PropTypes__default["default"].bool,
    onChange: PropTypes__default["default"].func,
    onEsc: PropTypes__default["default"].func,
    allowEmpty: PropTypes__default["default"].bool,
    showHour: PropTypes__default["default"].bool,
    showSecond: PropTypes__default["default"].bool,
    onClear: PropTypes__default["default"].func,
    showAMPM: PropTypes__default["default"].bool,
    isGregorian: PropTypes__default["default"].bool
  });
  _defineProperty(Panel, "defaultProps", {
    prefixCls: 'rc-time-picker-panel',
    onChange: noop$1,
    onClear: noop$1,
    defaultOpenValue: momentJalaali__default["default"]()
  });

  var autoAdjustOverflow = {
    adjustX: 1,
    adjustY: 1
  };
  var targetOffset = [0, 0];
  var placements = {
    bottomLeft: {
      points: ['tl', 'tl'],
      overflow: autoAdjustOverflow,
      offset: [0, -3],
      targetOffset: targetOffset
    },
    bottomRight: {
      points: ['tr', 'tr'],
      overflow: autoAdjustOverflow,
      offset: [0, -3],
      targetOffset: targetOffset
    },
    topRight: {
      points: ['br', 'br'],
      overflow: autoAdjustOverflow,
      offset: [0, 3],
      targetOffset: targetOffset
    },
    topLeft: {
      points: ['bl', 'bl'],
      overflow: autoAdjustOverflow,
      offset: [0, 3],
      targetOffset: targetOffset
    }
  };

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  function noop() {}
  function refFn(field, component) {
    this[field] = component;
  }
  var Picker = /*#__PURE__*/function (_React$Component) {
    _inherits(Picker, _React$Component);
    var _super = _createSuper$2(Picker);
    function Picker(props) {
      var _this;
      _classCallCheck(this, Picker);
      _this = _super.call(this, props);
      _defineProperty(_assertThisInitialized(_this), "setOpen", function (open, callback) {
        var _this$props = _this.props,
          onOpen = _this$props.onOpen,
          onClose = _this$props.onClose;
        if (_this.state.open !== open) {
          _this.setState({
            open: open
          }, callback);
          var event = {
            open: open
          };
          if (open) {
            onOpen(event);
          } else {
            onClose(event);
          }
        }
      });
      _defineProperty(_assertThisInitialized(_this), "onPanelChange", function (value) {
        _this.setValue(value);
      });
      _defineProperty(_assertThisInitialized(_this), "onPanelClear", function () {
        _this.setValue(null);
        _this.setOpen(false);
      });
      _defineProperty(_assertThisInitialized(_this), "onVisibleChange", function (open) {
        _this.setOpen(open);
      });
      _defineProperty(_assertThisInitialized(_this), "onEsc", function () {
        _this.setOpen(false);
        _this.picker.focus();
      });
      _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
        if (e.keyCode === 40) {
          _this.setOpen(true);
        }
      });
      _defineProperty(_assertThisInitialized(_this), "setValue", function (value) {
        if (!('value' in _this.props)) {
          _this.setState({
            value: value
          });
        }
        _this.props.onChange(value);
      });
      _defineProperty(_assertThisInitialized(_this), "getFormat", function () {
        var format = _this.props.format;
        if (_this.props.format) {
          format = _this.props.format;
        } else if (!_this.props.showSecond) {
          format = 'HH:mm';
        } else if (!_this.props.showHour) {
          format = 'mm:ss';
        } else {
          format = 'HH:mm:ss';
        }
        if (_this.props.showAMPM) {
          format = "".concat(format.replace('HH', 'hh'), " A");
        }
        return format;
      });
      _defineProperty(_assertThisInitialized(_this), "getPanelElement", function () {
        var _this$props2 = _this.props,
          prefixCls = _this$props2.prefixCls,
          placeholder = _this$props2.placeholder,
          name = _this$props2.name,
          disabledHours = _this$props2.disabledHours,
          disabledMinutes = _this$props2.disabledMinutes,
          disabledSeconds = _this$props2.disabledSeconds,
          hideDisabledOptions = _this$props2.hideDisabledOptions;
          _this$props2.allowEmpty;
          var showHour = _this$props2.showHour,
          showSecond = _this$props2.showSecond,
          showAMPM = _this$props2.showAMPM,
          defaultOpenValue = _this$props2.defaultOpenValue,
          clearText = _this$props2.clearText,
          isGregorian = _this$props2.isGregorian;
        return /*#__PURE__*/React__default["default"].createElement(Panel, {
          isGregorian: isGregorian,
          clearText: clearText,
          prefixCls: "".concat(prefixCls, "-panel"),
          ref: function ref(refs) {
            _this.savePanelRef = refs;
          },
          value: _this.state.value,
          onChange: _this.onPanelChange,
          onClear: _this.onPanelClear,
          defaultOpenValue: defaultOpenValue,
          showHour: showHour,
          onEsc: _this.onEsc,
          showSecond: showSecond,
          showAMPM: showAMPM,
          allowEmpty: true,
          format: _this.getFormat(),
          placeholder: placeholder,
          name: name,
          disabledHours: disabledHours,
          disabledMinutes: disabledMinutes,
          disabledSeconds: disabledSeconds,
          hideDisabledOptions: hideDisabledOptions
        });
      });
      _this.savePanelRef = refFn.bind(_assertThisInitialized(_this), 'panelInstance');
      var _this$props3 = _this.props,
        defaultOpen = _this$props3.defaultOpen,
        defaultValue = _this$props3.defaultValue,
        _this$props3$open = _this$props3.open,
        _open = _this$props3$open === void 0 ? defaultOpen : _this$props3$open,
        _this$props3$value = _this$props3.value,
        _value = _this$props3$value === void 0 ? defaultValue : _this$props3$value;
      _this.state = {
        open: _open,
        value: _value
      };
      return _this;
    }
    _createClass(Picker, [{
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var value = nextProps.value,
          open = nextProps.open;
        if ('value' in nextProps) {
          this.setState({
            value: value
          });
        }
        if (open !== undefined) {
          this.setState({
            open: open
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;
        var _this$props4 = this.props,
          panelClassName = _this$props4.panelClassName,
          prefixCls = _this$props4.prefixCls,
          placeholder = _this$props4.placeholder,
          name = _this$props4.name,
          placement = _this$props4.placement,
          align = _this$props4.align,
          disabled = _this$props4.disabled,
          transitionName = _this$props4.transitionName,
          style = _this$props4.style,
          className = _this$props4.className,
          showHour = _this$props4.showHour,
          showSecond = _this$props4.showSecond,
          getPopupContainer = _this$props4.getPopupContainer;
        var _this$state = this.state,
          open = _this$state.open,
          value = _this$state.value;
        var popupClassName;
        if (!showHour || !showSecond) {
          popupClassName = "".concat(prefixCls, "-panel-narrow");
        }
        return /*#__PURE__*/React__default["default"].createElement(Trigger__default["default"], {
          prefixCls: "".concat(prefixCls, "-panel  ").concat(panelClassName),
          popupClassName: popupClassName,
          popup: this.getPanelElement(),
          popupAlign: align,
          builtinPlacements: placements,
          popupPlacement: placement,
          action: disabled ? [] : ['click'],
          destroyPopupOnHide: true,
          getPopupContainer: getPopupContainer,
          popupTransitionName: transitionName,
          popupVisible: open,
          onPopupVisibleChange: this.onVisibleChange
        }, /*#__PURE__*/React__default["default"].createElement("span", {
          className: "".concat(prefixCls, " ").concat(className),
          style: style
        }, /*#__PURE__*/React__default["default"].createElement("input", {
          className: "".concat(prefixCls, "-input"),
          ref: function ref(refs) {
            _this2.picker = refs;
          },
          type: "text",
          placeholder: placeholder,
          name: name,
          readOnly: true,
          onKeyDown: this.onKeyDown,
          disabled: disabled,
          value: value && value.format(this.getFormat()) || ''
        }), /*#__PURE__*/React__default["default"].createElement("span", {
          className: "".concat(prefixCls, "-icon")
        })));
      }
    }]);
    return Picker;
  }(React__default["default"].Component);
  _defineProperty(Picker, "propTypes", {
    prefixCls: PropTypes__default["default"].string,
    clearText: PropTypes__default["default"].string,
    value: PropTypes__default["default"].object,
    defaultOpenValue: PropTypes__default["default"].object,
    disabled: PropTypes__default["default"].bool,
    allowEmpty: PropTypes__default["default"].bool,
    defaultValue: PropTypes__default["default"].object,
    open: PropTypes__default["default"].bool,
    defaultOpen: PropTypes__default["default"].bool,
    align: PropTypes__default["default"].object,
    placement: PropTypes__default["default"].any,
    transitionName: PropTypes__default["default"].string,
    getPopupContainer: PropTypes__default["default"].func,
    placeholder: PropTypes__default["default"].string,
    name: PropTypes__default["default"].string,
    format: PropTypes__default["default"].string,
    showHour: PropTypes__default["default"].bool,
    style: PropTypes__default["default"].object,
    className: PropTypes__default["default"].string,
    showSecond: PropTypes__default["default"].bool,
    disabledHours: PropTypes__default["default"].func,
    disabledMinutes: PropTypes__default["default"].func,
    disabledSeconds: PropTypes__default["default"].func,
    hideDisabledOptions: PropTypes__default["default"].bool,
    onChange: PropTypes__default["default"].func,
    onOpen: PropTypes__default["default"].func,
    onClose: PropTypes__default["default"].func,
    showAMPM: PropTypes__default["default"].bool,
    panelClassName: PropTypes__default["default"].string,
    isGregorian: PropTypes__default["default"].bool
  });
  _defineProperty(Picker, "defaultProps", {
    clearText: 'clear',
    prefixCls: 'rc-time-picker',
    defaultOpen: false,
    style: {},
    className: '',
    align: {},
    defaultOpenValue: momentJalaali__default["default"](),
    allowEmpty: true,
    showHour: true,
    showSecond: true,
    disabledHours: noop,
    disabledMinutes: noop,
    disabledSeconds: noop,
    hideDisabledOptions: false,
    placement: 'bottomLeft',
    onChange: noop,
    onOpen: noop,
    onClose: noop
  });

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var disabledMinutes = function disabledMinutes() {
    return _toConsumableArray(Array(60)).map(function (v, i) {
      return i;
    }).filter(function (v) {
      return v % 5 !== 0;
    });
  };
  var MyTimePicker = /*#__PURE__*/function (_Component) {
    _inherits(MyTimePicker, _Component);
    var _super = _createSuper$1(MyTimePicker);
    function MyTimePicker() {
      _classCallCheck(this, MyTimePicker);
      return _super.apply(this, arguments);
    }
    _createClass(MyTimePicker, [{
      key: "handleChange",
      value: function handleChange(value) {
        var _this$props = this.props,
          momentValue = _this$props.momentValue,
          min = _this$props.min;
        var newValue;
        if (momentValue) {
          newValue = momentValue.clone();
        } else if (min && min.isAfter(momentJalaali__default["default"]())) {
          newValue = min.clone();
        } else {
          newValue = momentJalaali__default["default"](value);
        }
        newValue.hour(value ? value.hour() : null);
        newValue.minute(value ? value.minute() : null);
        this.props.setMomentValue(newValue);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
          momentValue = _this$props2.momentValue,
          isGregorian = _this$props2.isGregorian,
          outsideClickIgnoreClass = _this$props2.outsideClickIgnoreClass;
        return /*#__PURE__*/React__default["default"].createElement(Picker, {
          showAMPM: true,
          isGregorian: isGregorian,
          showSecond: false,
          allowEmpty: false,
          value: momentValue,
          className: outsideClickIgnoreClass,
          popupClassName: outsideClickIgnoreClass,
          panelClassName: "".concat(outsideClickIgnoreClass, " time-picker-panel"),
          onChange: this.handleChange.bind(this),
          disabledMinutes: disabledMinutes,
          formatter: function formatter(value) {
            return persianNumber(value);
          },
          hideDisabledOptions: true
        });
      }
    }]);
    return MyTimePicker;
  }(React.Component);
  _defineProperty(MyTimePicker, "propTypes", {
    momentValue: PropTypes__default["default"].object,
    setMomentValue: PropTypes__default["default"].func,
    isGregorian: PropTypes__default["default"].bool
  });
  _defineProperty(MyTimePicker, "defaultProps", {
    momentValue: momentJalaali__default["default"]()
  });

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var outsideClickIgnoreClass = 'ignore--click--outside';
  var DatePicker = /*#__PURE__*/function (_Component) {
    _inherits(DatePicker, _Component);
    var _super = _createSuper(DatePicker);
    function DatePicker(props) {
      var _this;
      _classCallCheck(this, DatePicker);
      _this = _super.call(this, props);
      // create a ref to store the textInput DOM element
      _defineProperty(_assertThisInitialized(_this), "setOpen", function (isOpen) {
        _this.setState({
          isOpen: isOpen
        });
        if (_this.props.onOpen) {
          _this.props.onOpen(isOpen);
        }
      });
      _defineProperty(_assertThisInitialized(_this), "toggleMode", function () {
        var isGregorian = !_this.state.isGregorian;
        _this.props.inputFormat;
        _this.props.inputJalaaliFormat;
        _this.setState({
          isGregorian: isGregorian,
          inputValue: _this.getValue(_this.props.value, isGregorian, _this.props.timePicker)
        });
      });
      _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
        _this.setOpen(true);
      });
      _defineProperty(_assertThisInitialized(_this), "renderInput", function (ref) {
        var _this$state = _this.state,
          isOpen = _this$state.isOpen,
          inputValue = _this$state.inputValue,
          isGregorian = _this$state.isGregorian;
        var className = classnames__default["default"](_this.props.className, _defineProperty({}, outsideClickIgnoreClass, isOpen));
        return /*#__PURE__*/React__default["default"].createElement("div", {
          ref: ref
        }, /*#__PURE__*/React__default["default"].createElement("input", {
          placeholder: _this.props.placeholder,
          name: _this.props.name,
          className: "datepicker-input ".concat(className),
          type: "text",
          ref: function ref(inst) {
            _this.input = inst;
          },
          onFocus: _this.handleFocus.bind(_assertThisInitialized(_this)),
          onBlur: _this.hanldeBlur.bind(_assertThisInitialized(_this)),
          onChange: _this.handleInputChange.bind(_assertThisInitialized(_this)),
          onClick: _this.handleInputClick.bind(_assertThisInitialized(_this)),
          value: isGregorian || !_this.props.persianDigits ? inputValue : _this.toPersianDigits(inputValue),
          readOnly: _this.props.inputReadOnly === true,
          disabled: _this.props.disabled
        }));
      });
      _defineProperty(_assertThisInitialized(_this), "renderCalendar", function (ref) {
        var _this$state2 = _this.state,
          momentValue = _this$state2.momentValue,
          isGregorian = _this$state2.isGregorian,
          TimePicker = _this$state2.timePickerComponent;
        var _this$props = _this.props;
          _this$props.onChange;
          var min = _this$props.min,
          max = _this$props.max,
          defaultYear = _this$props.defaultYear,
          defaultMonth = _this$props.defaultMonth,
          styles = _this$props.styles,
          calendarContainerProps = _this$props.calendarContainerProps,
          ranges = _this$props.ranges,
          disableYearSelector = _this$props.disableYearSelector,
          schedule = _this$props.schedule;
        return /*#__PURE__*/React__default["default"].createElement("div", {
          ref: ref
        }, /*#__PURE__*/React__default["default"].createElement(Calendar$1, {
          toggleMode: _this.toggleMode,
          ranges: ranges,
          min: min,
          max: max,
          selectedDay: momentValue,
          defaultYear: defaultYear,
          defaultMonth: defaultMonth,
          onSelect: _this.handleSelectDay.bind(_assertThisInitialized(_this)),
          onClickOutside: _this.handleClickOutsideCalendar.bind(_assertThisInitialized(_this)),
          outsideClickIgnoreClass: outsideClickIgnoreClass,
          styles: styles,
          containerProps: calendarContainerProps,
          isGregorian: isGregorian,
          calendarClass: _this.props.calendarClass ? _this.props.calendarClass : '',
          showToggleButton: _this.props.showToggleButton,
          toggleButtonText: _this.props.toggleButtonText,
          showTodayButton: _this.props.showTodayButton,
          disableYearSelector: disableYearSelector,
          timePicker: TimePicker ? /*#__PURE__*/React__default["default"].createElement(TimePicker, {
            outsideClickIgnoreClass: outsideClickIgnoreClass,
            isGregorian: isGregorian,
            min: min,
            max: max,
            momentValue: momentValue,
            setMomentValue: _this.setMomentValue.bind(_assertThisInitialized(_this))
          }) : null,
          schedule: schedule
        }));
      });
      _this.textInput = /*#__PURE__*/React__default["default"].createRef();
      _this.state = {
        isOpen: false,
        momentValue: _this.props.defaultValue || null,
        inputValue: _this.getValue(_this.props.defaultValue, _this.props.isGregorian, _this.props.timePicker),
        inputJalaaliFormat: _this.props.inputJalaaliFormat || _this.getInputFormat(false, _this.props.timePicker),
        inputFormat: _this.props.inputFormat || _this.getInputFormat(true, _this.props.timePicker),
        isGregorian: _this.props.isGregorian,
        timePicker: _this.props.timePicker,
        timePickerComponent: _this.props.timePicker ? MyTimePicker : undefined,
        setTodayOnBlur: _this.props.setTodayOnBlur
      };
      return _this;
    }
    _createClass(DatePicker, [{
      key: "getInputFormat",
      value: function getInputFormat(isGregorian, timePicker) {
        if (timePicker) return isGregorian ? 'YYYY/M/D hh:mm A' : 'jYYYY/jM/jD hh:mm A';
        return isGregorian ? 'YYYY/M/D' : 'jYYYY/jM/jD';
      }
    }, {
      key: "getValue",
      value: function getValue(inputValue, isGregorian, timePicker) {
        if (!inputValue) return '';
        var inputFormat = this.state.inputFormat;
        var inputJalaaliFormat = this.state.inputJalaaliFormat;
        if (!inputFormat) inputFormat = this.getInputFormat(isGregorian, timePicker);
        if (!inputJalaaliFormat) inputJalaaliFormat = this.getInputFormat(isGregorian, timePicker);
        return isGregorian ? inputValue.locale('es').format(inputFormat) : inputValue.locale('fa').format(inputJalaaliFormat);
      }
    }, {
      key: "UNSAFE_componentWillMount",
      value: function UNSAFE_componentWillMount() {
        if (this.props.value) {
          this.setMomentValue(this.props.value);
        }
      }
    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
          if (nextProps.value === null) {
            this.setState({
              input: '',
              inputValue: '',
              momentValue: null
            });
          } else if (typeof nextProps.value === 'undefined' && typeof this.props.value !== 'undefined' || typeof nextProps.value !== 'undefined' && !nextProps.value.isSame(this.props.value)) {
            this.setMomentValue(nextProps.value);
          }
        }
        if ('isGregorian' in nextProps && nextProps.isGregorian !== this.props.isGregorian) {
          var nextPropsInputFormat = nextProps.inputFormat;
          var nextPropsInputJalaaliFormat = nextProps.inputJalaaliFormat;
          this.setState({
            isGregorian: nextProps.isGregorian,
            inputValue: this.getValue(nextProps.value, nextProps.isGregorian, nextProps.timePicker),
            inputFormat: nextPropsInputFormat || this.state.inputFormat,
            inputJalaaliFormat: nextPropsInputJalaaliFormat || this.state.inputJalaaliFormat
          });
        }
        if ('timePicker' in nextProps && nextProps.timePicker !== this.props.timePicker) {
          this.setState({
            timePicker: nextProps.timePicker,
            timePickerComponent: this.props.timePicker ? MyTimePicker : undefined
          });
        }
        if ('setTodayOnBlur' in nextProps && nextProps.setTodayOnBlur !== this.props.setTodayOnBlur) {
          this.setState({
            setTodayOnBlur: nextProps.setTodayOnBlur
          });
        }
      }
    }, {
      key: "setMomentValue",
      value: function setMomentValue(momentValue) {
        var _this$state3 = this.state;
          _this$state3.inputFormat;
          var isGregorian = _this$state3.isGregorian,
          timePicker = _this$state3.timePicker;
        if (this.props.onChange) {
          this.props.onChange(momentValue);
        }
        var inputValue = this.getValue(momentValue, isGregorian, timePicker);
        this.setState({
          momentValue: momentValue,
          inputValue: inputValue
        });
      }
    }, {
      key: "handleClickOutsideCalendar",
      value: function handleClickOutsideCalendar() {
        this.setOpen(false);
      }
    }, {
      key: "toEnglishDigits",
      value: function toEnglishDigits(str) {
        if (!str) return str;
        var regex1 = /[\u0660-\u0669]/g;
        var regex2 = /[\u06f0-\u06f9]/g;
        return str.replace(regex1, function (c) {
          return c.charCodeAt(0) - 0x0660;
        }).replace(regex2, function (c) {
          return c.charCodeAt(0) - 0x06f0;
        });
      }
    }, {
      key: "toPersianDigits",
      value: function toPersianDigits(str) {
        if (!str) return str;
        var regex = /[0-9]/g;
        var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return str.replace(regex, function (w) {
          return id[+w];
        });
      }
    }, {
      key: "handleSelectDay",
      value: function handleSelectDay(selectedDay) {
        var oldValue = this.state.momentValue;
        var momentValue = selectedDay.clone();
        if (oldValue) {
          momentValue = momentValue.set({
            hour: oldValue.hours(),
            minute: oldValue.minutes(),
            second: oldValue.seconds()
          });
        }
        this.setOpen(false);
        this.setMomentValue(momentValue);
      }
    }, {
      key: "handleInputChange",
      value: function handleInputChange(event) {
        var _this2 = this;
        var _this$state4 = this.state,
          inputFormat = _this$state4.inputFormat,
          inputJalaaliFormat = _this$state4.inputJalaaliFormat,
          isGregorian = _this$state4.isGregorian;
        var inputValue = this.toEnglishDigits(event.target.value);
        var currentInputFormat = isGregorian ? inputFormat : inputJalaaliFormat;
        var momentValue = momentJalaali__default["default"](inputValue, currentInputFormat);
        var cursor = event.target.selectionStart;
        if (momentValue.isValid()) {
          this.setState({
            momentValue: momentValue
          });
        }
        this.setState({
          inputValue: inputValue
        }, function () {
          // It cause lose current cursor positon if persian digits is active
          // for example it convert 4 to ۴, so the react set cursor position to end of string
          if (_this2.props.persianDigits) _this2.input.setSelectionRange(cursor, cursor);
        });
        if (this.props.onInputChange) {
          this.props.onInputChange(event);
        }
      }
    }, {
      key: "hanldeBlur",
      value: function hanldeBlur(event) {
        if (this.props.onChange) {
          if (!event.target.value && this.state.setTodayOnBlur === false) return;
          var _this$state5 = this.state,
            inputFormat = _this$state5.inputFormat,
            inputJalaaliFormat = _this$state5.inputJalaaliFormat,
            isGregorian = _this$state5.isGregorian;
          var inputValue = this.toEnglishDigits(event.target.value);
          var currentInputFormat = isGregorian ? inputFormat : inputJalaaliFormat;
          var momentValue = momentJalaali__default["default"](inputValue, currentInputFormat);
          if (event.target.value && momentValue.isValid()) {
            this.props.onChange(this.state.momentValue);
          } else if (this.state.setTodayOnBlur === true) {
            this.props.onChange(momentJalaali__default["default"]());
          }
        }
      }
    }, {
      key: "handleInputClick",
      value: function handleInputClick() {
        if (!this.props.disabled) {
          this.setOpen(true);
        }
      }
    }, {
      key: "removeDate",
      value: function removeDate() {
        var onChange = this.props.onChange;
        if (onChange) {
          onChange(null);
        }
        this.setState({
          input: '',
          inputValue: '',
          momentValue: null
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;
        var isOpen = this.state.isOpen;
        return /*#__PURE__*/React__default["default"].createElement(TetherComponent__default["default"], {
          ref: function ref(tether) {
            return _this3.tether = tether;
          },
          attachment: this.props.tetherAttachment ? this.props.tetherAttachment : 'top center',
          constraints: [{
            to: 'window',
            attachment: 'together'
          }],
          offset: "-10px -10px",
          onResize: function onResize() {
            return _this3.tether && _this3.tether.position();
          }
          /* renderTarget: This is what the item will be tethered to, make sure to attach the ref */,
          renderTarget: function renderTarget(ref) {
            return _this3.renderInput(ref);
          }
          /* renderElement: If present, this item will be tethered to the the component returned by renderTarget */,
          renderElement: function renderElement(ref) {
            return isOpen && _this3.renderCalendar(ref);
          }
        });
      }
    }]);
    return DatePicker;
  }(React.Component);
  _defineProperty(DatePicker, "propTypes", {
    value: PropTypes__default["default"].object,
    defaultValue: PropTypes__default["default"].object,
    onChange: PropTypes__default["default"].func,
    onInputChange: PropTypes__default["default"].func,
    onFocus: PropTypes__default["default"].func,
    onBlur: PropTypes__default["default"].func,
    children: PropTypes__default["default"].node,
    min: PropTypes__default["default"].object,
    max: PropTypes__default["default"].object,
    defaultYear: PropTypes__default["default"].object,
    defaultMonth: PropTypes__default["default"].object,
    inputFormat: PropTypes__default["default"].string,
    inputJalaaliFormat: PropTypes__default["default"].string,
    removable: PropTypes__default["default"].bool,
    styles: PropTypes__default["default"].object,
    calendarStyles: PropTypes__default["default"].object,
    calendarContainerProps: PropTypes__default["default"].object,
    isGregorian: PropTypes__default["default"].bool,
    // jalaali or gregorian
    timePicker: PropTypes__default["default"].bool,
    calendarClass: PropTypes__default["default"].string,
    datePickerClass: PropTypes__default["default"].string,
    tetherAttachment: PropTypes__default["default"].string,
    inputReadOnly: PropTypes__default["default"].bool,
    ranges: PropTypes__default["default"].array,
    showToggleButton: PropTypes__default["default"].bool,
    toggleButtonText: PropTypes__default["default"].any,
    showTodayButton: PropTypes__default["default"].bool,
    placeholder: PropTypes__default["default"].string,
    name: PropTypes__default["default"].string,
    persianDigits: PropTypes__default["default"].bool,
    setTodayOnBlur: PropTypes__default["default"].bool,
    disableYearSelector: PropTypes__default["default"].bool,
    schedule: PropTypes__default["default"].array
  });
  _defineProperty(DatePicker, "defaultProps", {
    styles: undefined,
    calendarContainerProps: {},
    isGregorian: true,
    timePicker: true,
    showTodayButton: true,
    placeholder: '',
    name: '',
    persianDigits: true,
    setTodayOnBlur: true,
    disableYearSelector: false
  });

  momentJalaali__default["default"].loadPersian({
    dialect: 'persian-modern'
  });

  exports.Calendar = Calendar;
  exports["default"] = DatePicker;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
