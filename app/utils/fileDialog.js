define(['exports', 'module'], function (exports, module) {
  /**
   * Created by yarden on 6/16/15.
   */

  'use strict';

  module.exports = dialog;
  var callback;
  var fileDialog;
  var x;

  function dialog(accept, cb) {
    if (!fileDialog) {
      fileDialog = global.window.document.querySelector('#fileDialog');
      fileDialog.addEventListener('change', fileDialogChanged);
    }

    callback = cb;
    fileDialog.setAttribute('accept', accept);
    fileDialog.click();
  }

  function fileDialogChanged(e) {
    callback(this.value);
  }
});

//# sourceMappingURL=fileDialog.js.map