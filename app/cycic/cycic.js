/**
 * Created by yarden on 6/16/15.
 */

define(function(require) {
  var fs = requireNode('promised-io/fs');
  var fileDialog = require('utils/fileDialog');
  var editor = require('./editor');

  function load_scenario(filename) {
    fs.readFile(filename).then(function(data) {
      editor.setValue(data.toString());
    });
  }

  function init(menu) {
    var gui = requireNode('nw.gui');
    menu.append(new gui.MenuItem({
      label: 'New',
      enabled: false
    }));

    menu.append(new gui.MenuItem({
      label: 'Open',
      click: function() {
        fileDialog.choose('*.xml', load_scenario);
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

  return {
    init: init
  }

});
