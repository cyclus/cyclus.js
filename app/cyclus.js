/**
 * Created by yarden on 6/10/15.
 */

global.window = window;
global.gui = require('nw.gui');
global.document = window.document;
global.navigator = window.navigator;

var menu = require('./menu');
var cycic = require('./cycic/cycic');

global.window.onload = function() {
  menu.init(global.gui);
  cycic.init(global.gui, menu.get('Scenario').submenu);

  global.window.focus();
};