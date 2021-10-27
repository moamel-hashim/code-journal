/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

// JSON.stringify(data);
var codeJournal = localStorage.getItem('code-journal');
if (codeJournal !== null) {
  data = JSON.parse(codeJournal);
}

window.addEventListener('beforeunload', storage);

function storage(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('code-journal', dataJSON);
}
