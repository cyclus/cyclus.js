/**
 * Created by yarden on 6/16/15.
 */

var callback;
var fileDialog;

function choose(accept, cb) {
  if (!fileDialog) {
    fileDialog = document.querySelector('#fileDialog');
    fileDialog.addEventListener('click',fileDialogChanged);
  }

  callback = cb;
  fileDialog.setAttribute('accept', accept);
  fileDialog.click();
}

function fileDialogChanged(e) {
  callback('foo');
}

//exports.choose = choose;