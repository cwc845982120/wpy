'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = (_temp2 = _class = function (_wepy$component) {
	_inherits(List, _wepy$component);

	function List() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, List);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(List, [{
		key: 'onLoad',
		value: function onLoad() {}
	}]);

	return List;
}(_wepy2.default.component), _initialiseProps = function _initialiseProps() {
	var _this2 = this;

	this.data = {
		list: [{
			id: '0',
			title: 'loading'
		}]
	};
	this.events = {
		'index-broadcast': function indexBroadcast() {
			var _ref2;

			var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
			console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.name);
		}
	};
	this.methods = {
		tap: function tap() {
			console.log(this.$name + ' tap');
		},
		add: function add() {
			var len = this.list.length;
			this.list.push({
				id: len + 1,
				title: 'title_' + len
			});
		}
	};
}, _temp2);
exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiTGlzdCIsImNvbXBvbmVudCIsImRhdGEiLCJsaXN0IiwiaWQiLCJ0aXRsZSIsImV2ZW50cyIsIiRldmVudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCIkbmFtZSIsIm5hbWUiLCJzb3VyY2UiLCJtZXRob2RzIiwidGFwIiwiYWRkIiwibGVuIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQzs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQXlCVixDQUFFOzs7O0VBekJxQixlQUFLQyxTOzs7TUFDckNDLEksR0FBTztBQUNMQyxRQUFNLENBQUM7QUFDTEMsT0FBSSxHQURDO0FBRUxDLFVBQU87QUFGRixHQUFEO0FBREQsRTtNQU1QQyxNLEdBQVM7QUFDUCxxQkFBbUIsMEJBQWE7QUFBQTs7QUFDOUIsT0FBSUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFKO0FBQ0FDLFdBQVFDLEdBQVIsQ0FBZSxPQUFLQyxLQUFwQixpQkFBcUNKLE9BQU9LLElBQTVDLGNBQXlETCxPQUFPTSxNQUFQLENBQWNELElBQXZFO0FBQ0Q7QUFKTSxFO01BTVRFLE8sR0FBVTtBQUNSQyxLQURRLGlCQUNGO0FBQ0pOLFdBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLEdBQWEsTUFBekI7QUFDRCxHQUhPO0FBSVJLLEtBSlEsaUJBSUY7QUFDSixPQUFJQyxNQUFNLEtBQUtkLElBQUwsQ0FBVUssTUFBcEI7QUFDQSxRQUFLTCxJQUFMLENBQVVlLElBQVYsQ0FBZTtBQUNiZCxRQUFJYSxNQUFNLENBREc7QUFFYlosV0FBTyxXQUFXWTtBQUZMLElBQWY7QUFJRDtBQVZPLEU7O2tCQWJTakIsSSIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblx0aW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHRleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG5cdCAgZGF0YSA9IHtcclxuXHQgICAgbGlzdDogW3tcclxuXHQgICAgICBpZDogJzAnLFxyXG5cdCAgICAgIHRpdGxlOiAnbG9hZGluZydcclxuXHQgICAgfV1cclxuXHQgIH1cclxuXHQgIGV2ZW50cyA9IHtcclxuXHQgICAgJ2luZGV4LWJyb2FkY2FzdCc6ICguLi5hcmdzKSA9PiB7XHJcblx0ICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxyXG5cdCAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UubmFtZX1gKVxyXG5cdCAgICB9XHJcblx0ICB9XHJcblx0ICBtZXRob2RzID0ge1xyXG5cdCAgICB0YXAoKSB7XHJcblx0ICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgdGFwJylcclxuXHQgICAgfSxcclxuXHQgICAgYWRkKCkge1xyXG5cdCAgICAgIGxldCBsZW4gPSB0aGlzLmxpc3QubGVuZ3RoXHJcblx0ICAgICAgdGhpcy5saXN0LnB1c2goe1xyXG5cdCAgICAgICAgaWQ6IGxlbiArIDEsXHJcblx0ICAgICAgICB0aXRsZTogJ3RpdGxlXycgKyBsZW5cclxuXHQgICAgICB9KVxyXG5cdCAgICB9XHJcblx0ICB9XHJcblx0ICBvbkxvYWQoKSB7fVxyXG5cdH1cclxuIl19