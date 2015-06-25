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
    this.visit(this.schema.root(), this.print);
  }

  visit(node, visitor, lvl) {
    lvl = lvl || 0;
    visitor(node, lvl);

    console.debug('node:',node, ' children:',node.children);
    for (let i=0; i<node.children.length; i++) {
      console.debug('child ', i,': ',node.children[i]);
      this.visit(node.children[i], visitor, lvl+1);
    }
  }

  parse(node) {
    let obj = {
      def: node
    };

    if (node.tagName)
  }

  print(node, lvl) {
    let s = '';
    for (let i=0; i<lvl; i++) {
      s += '  ';
    }
    console.log(s,node);
  }
}