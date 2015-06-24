/**
 * Created by yarden on 6/19/15.
 */
/**
 * Created by yarden on 6/19/15.
 */

import fileDialog from "utils/fileDialog";
import Editor from "./editor";
import rng from "model/rng";
import Scenario from "model/scenario";

var fs = requireNode('fs');

var editor = new Editor('xml_editor');
var schema;
var scenario;

export function init(menu) {
  setup_menu(menu);
  schema = rng.load('app/assets/schema/schema.rng');
}

export function test() {
  window.setTimeout(
    load_scenario('/Users/yarden/data/neup/scenario/recycle-long.xml'),
    5000);
}

function load_scenario(filename) {
  var text = fs.readFileSync(filename).toString();
  new_scenario(text);
}

function new_scenario(text) {
  editor.setText(text);
  scenario = new Scenario(schema, text);
}

function setup_menu(menu) {
  var gui = requireNode('nw.gui');
  menu.append(new gui.MenuItem({
    label: 'New',
    click: e => new_scenario("")
  }));

  menu.append(new gui.MenuItem({
    label: 'Open',
    click: e => {
      fileDialog('*.xml', load_scenario);
    }
  }));

  menu.append(new gui.MenuItem({
    label: 'Save',
    enabled: false
  }));

  menu.append(new gui.MenuItem({
    label: 'Save As',
    enabled: false
  }));
}