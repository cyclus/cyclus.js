/**
 * Created by yarden on 6/20/15.
 */

export default class Scenario {
  constructor(schema, text) {
    this.schema = schema;
    this.text = text || "";
    this.dom = undefined;
    this.simulation = {};
    this.init();
  }

  init() {
    this.visit(this.schema.root(), visitor);
  }

  visit(node, visitor) {
    visitor(node);

    for (let child of node.children) {
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
  }
}