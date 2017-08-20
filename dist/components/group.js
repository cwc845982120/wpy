'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _groupitem = require('./groupitem.js');

var _groupitem2 = _interopRequireDefault(_groupitem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_wepy$component) {
	_inherits(Group, _wepy$component);

	function Group() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Group);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Group.__proto__ || Object.getPrototypeOf(Group)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
			grouplist: {},
			index: {}
		}, _this.$props = { "groupitem": { "xmlns:v-bind": { "for": "grouplist.list", "item": "item", "index": "index", "key": "key", "value": "item" }, "v-bind:gitem.once": { "for": "grouplist.list", "item": "item", "index": "index", "key": "key", "value": "item" } } }, _this.$events = {}, _this.components = {
			groupitem: _groupitem2.default
		}, _this.methods = {
			tap: function tap() {
				this.grouplist.name = 'Parent Random(' + Math.random() + ')';
				console.log('Clicked Group ' + this.$index + ', ID is ' + this.grouplist.id);
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return Group;
}(_wepy2.default.component);

exports.default = Group;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLmpzIl0sIm5hbWVzIjpbIkdyb3VwIiwicHJvcHMiLCJncm91cGxpc3QiLCJpbmRleCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ3JvdXBpdGVtIiwibWV0aG9kcyIsInRhcCIsIm5hbWUiLCJNYXRoIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsIiRpbmRleCIsImlkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0M7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEssR0FBUTtBQUNOQyxjQUFXLEVBREw7QUFFTkMsVUFBTztBQUZELEcsUUFJVEMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVBQUMsT0FBTSxnQkFBUCxFQUF3QixRQUFPLE1BQS9CLEVBQXNDLFNBQVEsT0FBOUMsRUFBc0QsT0FBTSxLQUE1RCxFQUFrRSxTQUFRLE1BQTFFLEVBQWhCLEVBQWtHLHFCQUFvQixFQUFDLE9BQU0sZ0JBQVAsRUFBd0IsUUFBTyxNQUEvQixFQUFzQyxTQUFRLE9BQTlDLEVBQXNELE9BQU0sS0FBNUQsRUFBa0UsU0FBUSxNQUExRSxFQUF0SCxFQUFiLEUsUUFDWEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1RDO0FBRFMsRyxRQUdYQyxPLEdBQVU7QUFDUkMsTUFEUSxpQkFDRjtBQUNKLFNBQUtQLFNBQUwsQ0FBZVEsSUFBZixzQkFBdUNDLEtBQUtDLE1BQUwsRUFBdkM7QUFDQUMsWUFBUUMsR0FBUixvQkFBNkIsS0FBS0MsTUFBbEMsZ0JBQW1ELEtBQUtiLFNBQUwsQ0FBZWMsRUFBbEU7QUFDRDtBQUpPLEc7Ozs7RUFWdUIsZUFBS0MsUzs7a0JBQW5CakIsSyIsImZpbGUiOiJncm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cdGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblx0aW1wb3J0IEdyb3VwSXRlbSBmcm9tICcuL2dyb3VwaXRlbSdcclxuXHRleHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuXHQgIHByb3BzID0ge1xyXG5cdCAgICBncm91cGxpc3Q6IHt9LFxyXG5cdCAgICBpbmRleDoge31cclxuXHQgIH1cclxuXHQgJHByb3BzID0ge1wiZ3JvdXBpdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6e1wiZm9yXCI6XCJncm91cGxpc3QubGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcIml0ZW1cIn0sXCJ2LWJpbmQ6Z2l0ZW0ub25jZVwiOntcImZvclwiOlwiZ3JvdXBsaXN0Lmxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIixcInZhbHVlXCI6XCJpdGVtXCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcblx0ICAgIGdyb3VwaXRlbTogR3JvdXBJdGVtXHJcblx0ICB9XHJcblx0ICBtZXRob2RzID0ge1xyXG5cdCAgICB0YXAoKSB7XHJcblx0ICAgICAgdGhpcy5ncm91cGxpc3QubmFtZSA9IGBQYXJlbnQgUmFuZG9tKCR7TWF0aC5yYW5kb20oKX0pYFxyXG5cdCAgICAgIGNvbnNvbGUubG9nKGBDbGlja2VkIEdyb3VwICR7dGhpcy4kaW5kZXh9LCBJRCBpcyAke3RoaXMuZ3JvdXBsaXN0LmlkfWApXHJcblx0ICAgIH1cclxuXHQgIH1cclxuXHR9XHJcbiJdfQ==