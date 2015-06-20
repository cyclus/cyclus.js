/**
 * Created by yarden on 6/19/15.
 */

import * as menu from "menu";
import * as cycic from "cycic/cycic";

menu.init();
cycic.init(menu.get('Scenario').submenu);
window.focus();

