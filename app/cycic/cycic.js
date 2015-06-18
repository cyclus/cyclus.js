/**
 * Created by yarden on 6/16/15.
 */

define(function(require) {

  var fs = requireNode('promised-io/fs');
  var fileDialog = require('../utils/fileDialog');
  var CodeMirror = require('codemirror');

  require("../../node_modules/codemirror/addon/edit/closetag");
  require("../../node_modules/codemirror/addon/fold/foldcode");
  require("../../node_modules/codemirror/addon/fold/foldgutter");
  require("../../node_modules/codemirror/addon/fold/brace-fold");
  require("../../node_modules/codemirror/addon/fold/xml-fold");
  require("../../node_modules/codemirror/addon/fold/comment-fold");
  require('../../node_modules/codemirror/mode/xml/xml');
  require("../../node_modules/codemirror/mode/htmlmixed/htmlmixed");
  //requirejs("codemirror/addon/edit/closetag");
  //requirejs("codemirror/addon/fold/foldcode");
  //requirejs("codemirror/addon/fold/foldgutter");
  //requirejs("codemirror/addon/fold/brace-fold");
  //requirejs("codemirror/addon/fold/xml-fold");
  //requirejs("codemirror/addon/fold/comment-fold");
  //requirejs('codemirror/mode/xml/xml');


  var editor;

  function load_scenario(filename) {
    fs.readFile(filename).then(function(data) {
      editor.setValue(data.toString());
    });
  }

  function init(gui, menu) {

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

    editor = CodeMirror.fromTextArea(document.getElementById('xml_editor'), {
      mode: 'text/xml',
      autoCloseTags: true,
      lineNumbers: true,
      //lineWrapping: true,
      extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
      foldGutter: true,
      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
    });
  }

  return {
    init: init
  }

});
