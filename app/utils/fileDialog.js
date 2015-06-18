/**
 * Created by yarden on 6/16/15.
 */

define(function(require) {

  var callback;
  var fileDialog;

  function choose(accept, cb) {
    if (!fileDialog) {
      fileDialog = global.window.document.querySelector('#fileDialog');
      fileDialog.addEventListener('change',fileDialogChanged);
    }

    callback = cb;
    fileDialog.setAttribute('accept', accept);
    fileDialog.click();
  }

  function fileDialogChanged(e) {
    callback(this.value);
  }

  return {
    choose: choose
  }
});
;