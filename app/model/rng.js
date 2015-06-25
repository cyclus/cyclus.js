define(['exports', 'module'], function (exports, module) {
  /**
   * Created by yarden on 6/20/15.
   */

  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var fs = requireNode('fs');
  var xml2js = requireNode('xml2js');

  var RNG = (function () {
    function RNG(schema) {
      _classCallCheck(this, RNG);

      this.schema = schema;
      this.nsResolver = this.schema.createNSResolver(this.schema);
    }

    _createClass(RNG, [{
      key: 'resolver',
      value: function resolver(prefix) {
        var ns = {
          'rng': 'http://relaxng.org/ns/structure/1.0'
        };
        return ns[prefix] || null;
      }
    }, {
      key: 'root',
      value: function root() {
        return this.find('//rng:element[@name=\'simulation\']', this.schema, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
      }
    }, {
      key: 'find',
      value: function find(expr, node, type) {
        return this.schema.evaluate(expr, node, this.resolver, type, null);
      }
    }]);

    return RNG;
  })();

  function load(filename) {
    // TODO: DOMParser does not throw exception upon error, rather it return a error document
    var xml = fs.readFileSync(filename);
    var dom = new DOMParser().parseFromString(xml, 'text/xml');

    var json = xml2js.parseString(xml, function (err, result) {
      console.dir(result);
    });
    return new RNG(dom);
  }

  module.exports = {
    RNG: RNG,
    load: load
  };
});

//# sourceMappingURL=rng.js.map