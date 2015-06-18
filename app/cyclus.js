/**
 * Created by yarden on 6/10/15.
 */

global.window = window;
global.gui = window.gui;
global.document = window.document;
global.navigator = window.navigator;

//var gui = require('nw.gui');
define(function(require) {
  var menu = require('menu');
  //var test = require('test');
  var cycic = require('cycic/cycic');

    menu.init(window.gui);
    cycic.init(window.gui, menu.get('Scenario').submenu);
    window.focus();
});