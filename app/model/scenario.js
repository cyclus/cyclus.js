define(['exports', 'module'], function (exports, module) {
  /**
   * Created by yarden on 6/20/15.
   */

  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Scenario = (function () {
    function Scenario(schema, text) {
      _classCallCheck(this, Scenario);

      this.schema = schema;
      this.text = text || '';
      this.dom = undefined;
      this.simulation = {};
      this.init();
    }

    _createClass(Scenario, [{
      key: 'init',
      value: function init() {
        this.visit(this.schema.root(), this.print);
      }
    }, {
      key: 'visit',
      value: function visit(node, visitor, lvl) {
        lvl = lvl || 0;
        visitor(node, lvl);

        console.debug('node:', node, ' children:', node.children);
        for (var i = 0; i < node.children.length; i++) {
          console.debug('child ', i, ': ', node.children[i]);
          this.visit(node.children[i], visitor, lvl + 1);
        }
      }
    }, {
      key: 'parse',
      value: function parse(node) {
        var obj = {
          def: node
        };
      }
    }, {
      key: 'print',
      value: function print(node, lvl) {
        var s = '';
        for (var i = 0; i < lvl; i++) {
          s += '  ';
        }
        console.log(s, node);
      }
    }]);

    return Scenario;
  })();

  module.exports = Scenario;
});

//# sourceMappingURL=scenario.js.map