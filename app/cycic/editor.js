/**
 * Created by yarden on 6/19/15.
 */
define(function(require) {

  var CodeMirror = require('lib/codemirror/lib/codemirror');

  require("lib/codemirror/addon/edit/closetag");
  require("lib/codemirror/addon/fold/foldcode");
  require("lib/codemirror/addon/fold/foldgutter");
  require("lib/codemirror/addon/fold/brace-fold");
  require("lib/codemirror/addon/fold/xml-fold");
  require("lib/codemirror/addon/fold/comment-fold");
  require('lib/codemirror/mode/xml/xml');
  require("lib/codemirror/mode/htmlmixed/htmlmixed");

  var editor = CodeMirror.fromTextArea(document.getElementById('xml_editor'), {
    mode: 'text/xml',
    autoCloseTags: true,
    lineNumbers: true,
    //lineWrapping: true,
    extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
  });

  return editor;
});