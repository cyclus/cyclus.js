define(["exports", "module", "lib/codemirror/lib/codemirror", "lib/codemirror/addon/edit/closetag", "lib/codemirror/addon/fold/foldcode", "lib/codemirror/addon/fold/foldgutter", "lib/codemirror/addon/fold/brace-fold", "lib/codemirror/addon/fold/xml-fold", "lib/codemirror/addon/fold/comment-fold", "lib/codemirror/mode/xml/xml", "lib/codemirror/mode/htmlmixed/htmlmixed"], function (exports, module, _libCodemirrorLibCodemirror, _libCodemirrorAddonEditClosetag, _libCodemirrorAddonFoldFoldcode, _libCodemirrorAddonFoldFoldgutter, _libCodemirrorAddonFoldBraceFold, _libCodemirrorAddonFoldXmlFold, _libCodemirrorAddonFoldCommentFold, _libCodemirrorModeXmlXml, _libCodemirrorModeHtmlmixedHtmlmixed) {
  /**
   * Created by yarden on 6/19/15.
   */
  "use strict";

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var defaultOptions = {
    mode: "text/xml",
    autoCloseTags: true,
    lineNumbers: true,
    //lineWrapping: true,
    extraKeys: { "Ctrl-Q": function CtrlQ(cm) {
        cm.foldCode(cm.getCursor());
      } },
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
  };

  //var editor = CodeMirror.fromTextArea(document.getElementById('xml_editor'), opt);

  var Editor = (function () {
    function Editor(elem, opt) {
      _classCallCheck(this, Editor);

      opt = opt || defaultOptions;
      this.opt = opt;
      this.editor = _libCodemirrorLibCodemirror.fromTextArea(document.getElementById(elem), opt);
    }

    _createClass(Editor, [{
      key: "setText",
      value: function setText(text) {
        this.editor.setValue(text);
      }
    }]);

    return Editor;
  })();

  module.exports = Editor;
});

//# sourceMappingURL=editor.js.map