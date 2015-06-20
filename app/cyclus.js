define(["exports", "menu", "cycic/cycic"], function (exports, _menu, _cycicCycic) {
  /**
   * Created by yarden on 6/19/15.
   */

  "use strict";

  _menu.init();
  _cycicCycic.init(_menu.get("Scenario").submenu);
  window.focus();
});

//# sourceMappingURL=cyclus.js.map