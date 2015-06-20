/**
 * Created by yarden on 6/19/15.
 */
import * as CodeMirror from 'lib/codemirror/lib/codemirror';

import "lib/codemirror/addon/edit/closetag";
import "lib/codemirror/addon/fold/foldcode";
import "lib/codemirror/addon/fold/foldgutter";
import "lib/codemirror/addon/fold/brace-fold";
import "lib/codemirror/addon/fold/xml-fold";
import "lib/codemirror/addon/fold/comment-fold";
import "lib/codemirror/mode/xml/xml";
import "lib/codemirror/mode/htmlmixed/htmlmixed";

var defaultOptions = {
  mode: 'text/xml',
  autoCloseTags: true,
  lineNumbers: true,
  //lineWrapping: true,
  extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
  foldGutter: true,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
};

//var editor = CodeMirror.fromTextArea(document.getElementById('xml_editor'), opt);

class Editor {
  constructor(elem, opt) {
    opt = opt || defaultOptions;
    this.opt = opt;
    this.editor = CodeMirror.fromTextArea(document.getElementById(elem), opt);

  }

  setText(text) {
    this.editor.setValue(text);
  }
}

export default Editor;