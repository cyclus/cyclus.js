/**
 * Created by yarden on 6/19/15.
 */
/**
 * Created by yarden on 6/19/15.
 */

import fileDialog from "utils/fileDialog";
import Editor from "./editor";

var fs = requireNode('promised-io/fs');

var editor = new Editor('xml_editor');

function load_scenario(filename) {
  fs.readFile(filename).then(function(data) {
    editor.setText(data.toString());
  });
}

export function init(menu) {
  var gui = requireNode('nw.gui');
  menu.append(new gui.MenuItem({
    label: 'New',
    enabled: false
  }));

  menu.append(new gui.MenuItem({
    label: 'Open',
    click: e => {
      console.log('debug:',load_scenario);
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