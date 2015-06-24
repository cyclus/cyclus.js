/**
 * Created by yarden on 6/20/15.
 */

var fs = requireNode('fs');

class RNG {
  constructor(schema) {
    this.schema = schema;
    this.nsResolver = this.schema.createNSResolver(this.schema);
  }

  resolver(prefix) {
    var ns =  {
      'rng': "http://relaxng.org/ns/structure/1.0"
    };
    return ns[prefix] || null;
  }

  root() {
    return this.find("//rng:element[@name='simulation']", this.schema, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
  }

  find(expr, node, type) {
    return this.schema.evaluate(expr, node, this.resolver, type, null);
  }
}

function load(filename) {
  // TODO: DOMParser does not throw exception upon error, rather it return a error document
  var dom = (new DOMParser()).parseFromString(fs.readFileSync(filename), "text/xml");
  return new RNG(dom);
}

export default {
  RNG: RNG,
  load: load
}