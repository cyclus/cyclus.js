/**
 * Created by yarden on 6/16/15.
 */

var fs = require('promised-io/fs');
var fileDialog = require('../utils/fileDialog');
var CodeMirror = require('codemirror');

require("../../node_modules/codemirror/addon/edit/closetag");
require("../../node_modules/codemirror/addon/fold/foldcode");
require("../../node_modules/codemirror/addon/fold/foldgutter");
require("../../node_modules/codemirror/addon/fold/brace-fold");
require("../../node_modules/codemirror/addon/fold/xml-fold");
require("../../node_modules/codemirror/addon/fold/comment-fold");
require('../../node_modules/codemirror/mode/xml/xml');
//require("../../node_modules/codemirror/mode/htmlmixed/htmlmixed");


var editor;

function load_scenario(filename) {
  fs.readFile(filename).then(function(data) {
    editor.setValue(data.toString());
  });
}

function init(gui, menu) {

  menu.append(new gui.MenuItem({
    label: 'New'
  }));

  menu.append(new gui.MenuItem({
    label: 'Open',
    click: function() {
      fileDialog.choose('*.xml', load_scenario);
    }
  }));

  menu.append(new gui.MenuItem({
    label: 'Save'
  }));

  menu.append(new gui.MenuItem({
    label: 'Save As'
  }));

  var window = global.window;
  editor = CodeMirror.fromTextArea(global.document.getElementById('xml_editor'), {
    mode: 'text/xml',
    autoCloseTags: true,
    lineNumbers: true,
    //lineWrapping: true,
    extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
  });
}

exports.init = init;
