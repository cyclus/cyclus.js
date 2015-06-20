define(["exports"], function (exports) {
  /**
   * Created by yarden on 6/16/15.
   */

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.init = init;
  exports.get = get;
  var menubar;

  function dev() {
    window.gui.Window.get().showDevTools();
  }

  function init() {
    var gui = requireNode("nw.gui");
    var win = gui.Window.get();

    menubar = new gui.Menu({ type: "menubar" });

    if (process.platform == "darwin") {
      menubar.createMacBuiltin("Cyclus.js", {
        hideEdit: true,
        hideWindow: true
      });

      menubar.items[0].submenu.insert(new gui.MenuItem({
        label: "Show Dev Tool",
        click: function click() {
          var save = window.require;
          window.require = window.requireNode;
          if (window.gui.Window.get().isDevToolsOpen()) window.gui.Window.get().closeDevTools();else window.gui.Window.get().showDevTools();
          setTimeout(function () {
            window.require = save;
          }, 1000);
        }
      }), 1);
    }
    win.menu = menubar;

    // Session
    var session_menu = new gui.Menu();
    session_menu.append(new gui.MenuItem({
      label: "Load",
      enabled: false
    }));

    session_menu.append(new gui.MenuItem({
      label: "Save",
      enabled: false
    }));

    win.menu.append(new gui.MenuItem({
      label: "Session",
      submenu: session_menu
    }));

    // Scenario
    var scenario_menu = new gui.Menu();

    win.menu.append(new gui.MenuItem({
      label: "Scenario",
      submenu: scenario_menu
    }));

    // Data
    var data = new gui.Menu();
    data.append(new gui.MenuItem({
      label: "Load SQLite",
      enabled: false
    }));

    win.menu.append(new gui.MenuItem({
      label: "Data",
      submenu: data
    }));
  }

  function get(name) {
    var n = menubar.items.length;
    for (var i = 0; i < n; i++) {
      if (menubar.items[i].label == name) return menubar.items[i];
    }
    return undefined;
  }
});

//# sourceMappingURL=menu.js.map