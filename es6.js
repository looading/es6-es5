"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [gene].map(_regenerator2.default.mark);

function gene() {
	return _regenerator2.default.wrap(function gene$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return 1;

				case 2:
					_context.next = 4;
					return 2;

				case 4:
					return _context.abrupt("return", 0);

				case 5:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}

var g = gene();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());