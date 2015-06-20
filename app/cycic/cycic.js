define(["exports", "utils/fileDialog", "./editor"], function (exports, _utilsFileDialog, _editor) {
  /**
   * Created by yarden on 6/19/15.
   */
  /**
   * Created by yarden on 6/19/15.
   */

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.init = init;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _fileDialog = _interopRequireDefault(_utilsFileDialog);

  var _Editor = _interopRequireDefault(_editor);

  var fs = requireNode("promised-io/fs");

  var editor = new _Editor["default"]("xml_editor");

  function load_scenario(filename) {
    fs.readFile(filename).then(function (data) {
      editor.setText(data.toString());
    });
  }

  function init(menu) {
    var gui = requireNode("nw.gui");
    menu.append(new gui.MenuItem({
      label: "New",
      enabled: false
    }));

    menu.append(new gui.MenuItem({
      label: "Open",
      click: function click(e) {
        console.log("debug:", load_scenario);
        (0, _fileDialog["default"])("*.xml", load_scenario);
      }
    }));

    menu.append(new gui.MenuItem({
      label: "Save",
      enabled: false
    }));

    menu.append(new gui.MenuItem({
      label: "Save As",
      enabled: false
    }));
  }
});

//# sourceMappingURL=cycic.js.map