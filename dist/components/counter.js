'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import abc from 'abc'
var Counter = (_temp2 = _class = function (_wepy$component) {
	_inherits(Counter, _wepy$component);

	function Counter() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Counter);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	}

	return Counter;
}(_wepy2.default.component), _initialiseProps = function _initialiseProps() {
	var _this2 = this;

	this.props = {
		num: {
			type: [Number, String],
			coerce: function coerce(v) {
				return +v;
			},
			default: 50
		}
	};
	this.data = {};
	this.events = {
		'index-broadcast': function indexBroadcast() {
			var _ref2;

			var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
			console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
		}
	};
	this.watch = {
		num: function num(curVal, oldVal) {
			console.log('\u65E7\u503C\uFF1A' + oldVal + '\uFF0C\u65B0\u503C\uFF1A' + curVal);
		}
	};
	this.methods = {
		plus: function plus() {
			this.num = this.num + 1;
			console.log(this.$name + ' plus tap');
			this.$emit('index-emit', 1, 2, 3);
		},
		minus: function minus() {
			this.num = this.num - 1;
			console.log(this.$name + ' minus tap');
		}
	};
}, _temp2);
exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsImNvbXBvbmVudCIsInByb3BzIiwibnVtIiwidHlwZSIsIk51bWJlciIsIlN0cmluZyIsImNvZXJjZSIsInYiLCJkZWZhdWx0IiwiZGF0YSIsImV2ZW50cyIsIiRldmVudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCIkbmFtZSIsIm5hbWUiLCJzb3VyY2UiLCJ3YXRjaCIsImN1clZhbCIsIm9sZFZhbCIsIm1ldGhvZHMiLCJwbHVzIiwiJGVtaXQiLCJtaW51cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0M7Ozs7Ozs7Ozs7OztBQUNBO0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBZ0IsZUFBS0MsUzs7O01BQ3hDQyxLLEdBQVE7QUFDTkMsT0FBSztBQUNIQyxTQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxDQURIO0FBRUhDLFdBQVEsZ0JBQVNDLENBQVQsRUFBWTtBQUNsQixXQUFPLENBQUNBLENBQVI7QUFDRCxJQUpFO0FBS0hDLFlBQVM7QUFMTjtBQURDLEU7TUFTUkMsSSxHQUFPLEU7TUFDUEMsTSxHQUFTO0FBQ1AscUJBQW1CLDBCQUFhO0FBQUE7O0FBQzlCLE9BQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBQyxXQUFRQyxHQUFSLENBQWUsT0FBS0MsS0FBcEIsaUJBQXFDSixPQUFPSyxJQUE1QyxjQUF5REwsT0FBT00sTUFBUCxDQUFjRixLQUF2RTtBQUNEO0FBSk0sRTtNQU1URyxLLEdBQVE7QUFDTmhCLEtBRE0sZUFDRmlCLE1BREUsRUFDTUMsTUFETixFQUNjO0FBQ2xCUCxXQUFRQyxHQUFSLHdCQUFrQk0sTUFBbEIsZ0NBQStCRCxNQUEvQjtBQUNEO0FBSEssRTtNQUtSRSxPLEdBQVU7QUFDUkMsTUFEUSxrQkFDRDtBQUNMLFFBQUtwQixHQUFMLEdBQVcsS0FBS0EsR0FBTCxHQUFXLENBQXRCO0FBQ0FXLFdBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLEdBQWEsV0FBekI7QUFDQSxRQUFLUSxLQUFMLENBQVcsWUFBWCxFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQUNELEdBTE87QUFNUkMsT0FOUSxtQkFNQTtBQUNOLFFBQUt0QixHQUFMLEdBQVcsS0FBS0EsR0FBTCxHQUFXLENBQXRCO0FBQ0FXLFdBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLEdBQWEsWUFBekI7QUFDRDtBQVRPLEU7O2tCQXRCU2hCLE8iLCJmaWxlIjoiY291bnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cdGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblx0Ly8gaW1wb3J0IGFiYyBmcm9tICdhYmMnXHJcblx0ZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuXHQgIHByb3BzID0ge1xyXG5cdCAgICBudW06IHtcclxuXHQgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdCAgICAgIGNvZXJjZTogZnVuY3Rpb24odikge1xyXG5cdCAgICAgICAgcmV0dXJuICt2XHJcblx0ICAgICAgfSxcclxuXHQgICAgICBkZWZhdWx0OiA1MFxyXG5cdCAgICB9XHJcblx0ICB9XHJcblx0ICBkYXRhID0ge31cclxuXHQgIGV2ZW50cyA9IHtcclxuXHQgICAgJ2luZGV4LWJyb2FkY2FzdCc6ICguLi5hcmdzKSA9PiB7XHJcblx0ICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxyXG5cdCAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YClcclxuXHQgICAgfVxyXG5cdCAgfVxyXG5cdCAgd2F0Y2ggPSB7XHJcblx0ICAgIG51bShjdXJWYWwsIG9sZFZhbCkge1xyXG5cdCAgICAgIGNvbnNvbGUubG9nKGDml6flgLzvvJoke29sZFZhbH3vvIzmlrDlgLzvvJoke2N1clZhbH1gKVxyXG5cdCAgICB9XHJcblx0ICB9XHJcblx0ICBtZXRob2RzID0ge1xyXG5cdCAgICBwbHVzKCkge1xyXG5cdCAgICAgIHRoaXMubnVtID0gdGhpcy5udW0gKyAxXHJcblx0ICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgcGx1cyB0YXAnKVxyXG5cdCAgICAgIHRoaXMuJGVtaXQoJ2luZGV4LWVtaXQnLCAxLCAyLCAzKVxyXG5cdCAgICB9LFxyXG5cdCAgICBtaW51cygpIHtcclxuXHQgICAgICB0aGlzLm51bSA9IHRoaXMubnVtIC0gMVxyXG5cdCAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIG1pbnVzIHRhcCcpXHJcblx0ICAgIH1cclxuXHQgIH1cclxuXHR9XHJcbiJdfQ==