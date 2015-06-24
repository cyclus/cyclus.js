define(["exports", "utils/fileDialog", "./editor", "model/rng", "model/scenario"], function (exports, _utilsFileDialog, _editor, _modelRng, _modelScenario) {
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
  exports.test = test;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _fileDialog = _interopRequireDefault(_utilsFileDialog);

  var _Editor = _interopRequireDefault(_editor);

  var _rng = _interopRequireDefault(_modelRng);

  var _Scenario = _interopRequireDefault(_modelScenario);

  var fs = requireNode("fs");

  var editor = new _Editor["default"]("xml_editor");
  var schema;
  var scenario;

  function init(menu) {
    setup_menu(menu);
    schema = _rng["default"].load("app/assets/schema/schema.rng");
  }

  function test() {
    window.setTimeout(load_scenario("/Users/yarden/data/neup/scenario/recycle-long.xml"), 5000);
  }

  function load_scenario(filename) {
    var text = fs.readFileSync(filename).toString();
    new_scenario(text);
  }

  function new_scenario(text) {
    editor.setText(text);
    scenario = new _Scenario["default"](schema, text);
  }

  function setup_menu(menu) {
    var gui = requireNode("nw.gui");
    menu.append(new gui.MenuItem({
      label: "New",
      click: function click(e) {
        return new_scenario("");
      }
    }));

    menu.append(new gui.MenuItem({
      label: "Open",
      click: function click(e) {
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