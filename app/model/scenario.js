define(["exports", "module"], function (exports, module) {
  /**
   * Created by yarden on 6/20/15.
   */

  "use strict";

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Scenario = (function () {
    function Scenario(schema, text) {
      _classCallCheck(this, Scenario);

      this.schema = schema;
      this.text = text || "";
      this.dom = undefined;
      this.simulation = {};
      this.init();
    }

    _createClass(Scenario, [{
      key: "init",
      value: function init() {
        this.visit(this.schema.root(), visitor);
      }
    }, {
      key: "visit",
      value: function visit(node, visitor) {
        visitor(node);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = node.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var child = _step.value;

            console.log(child);
          }
          //let n = node.children.length;
          //for (var i=0; i<n; i++) {
          //  console.log(node.children[i]);
          //}
          //var children = this.schema.find("./*", root, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
          //var elem = children.iterateNext();
          //while (elem ) {
          //  console.log(elem);
          //  elem = children.iterateNext();
          //}
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }]);

    return Scenario;
  })();

  module.exports = Scenario;
});

//# sourceMappingURL=scenario.js.map