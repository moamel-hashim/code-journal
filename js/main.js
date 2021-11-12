/* global data */
/* exported data */
var $form = document.querySelector('form');
var $imgSrc = document.querySelector('img');
var $photoUrl = document.querySelector('#URL');
$photoUrl.addEventListener('input', addURL);
$form.addEventListener('submit', submitForm);

function addURL(event) {
  var imageSource = $photoUrl.value;
  $imgSrc.setAttribute('src', imageSource);
  if ($photoUrl.value === '') {
    $imgSrc.setAttribute('src', './images/placeholder-image-square.jpg');
  }
}

function submitForm(event) {
  event.preventDefault();
  var messageData = {
    title: $form.elements.title.value,
    image: $form.elements.image.value,
    notes: $form.elements.notes.value
  };
  $imgSrc.setAttribute('src', './images/placeholder-image-square.jpg');
  showOrHideNoEntries();
  switchView('entries');
  $form.reset();

  if (data.editing !== null) {
    messageData.entryId = data.editing.entryId;
    var getLiId = document.querySelectorAll('li');
    for (var i = 0; i < getLiId.length; i++) {
      var liDomTreeElement = getLiId[i];
      var id = parseInt(getLiId[i].getAttribute('entry-id'));
      if (id === messageData.entryId) {
        var editedEntries = renderEntry(messageData);
        liDomTreeElement.replaceWith(editedEntries);
        for (var j = 0; j < data.entries.length; j++) {
          if (messageData.entryId === data.entries[j].entryId) {
            data.entries[j] = messageData;
          }
        }
      }
    }
    data.editing = null;
  } else {
    messageData.entryId = data.nextEntryId++;
    data.entries.unshift(messageData);
    $ul.prepend(renderEntry(messageData));
  }
}

var $ul = document.querySelector('ul');

function renderEntry(entry) {

  var $li = document.createElement('li');
  $li.setAttribute('class', 'column-full padding-0 position-relative');
  $li.setAttribute('entry-id', entry.entryId);
  $ul.appendChild($li);

  var $divRow = document.createElement('div');
  $divRow.setAttribute('class', 'row');
  $li.appendChild($divRow);

  var $divColumnHalf = document.createElement('div');
  $divColumnHalf.setAttribute('class', 'column-half');
  $divRow.appendChild($divColumnHalf);

  var $imgholder = document.createElement('img');
  $imgholder.setAttribute('src', entry.image);
  $divColumnHalf.appendChild($imgholder);

  var $secondDivColumnHalf = document.createElement('div');
  $secondDivColumnHalf.setAttribute('class', 'column-half');
  $divRow.appendChild($secondDivColumnHalf);

  var $h2 = document.createElement('h2');
  $h2.textContent = entry.title;
  $secondDivColumnHalf.appendChild($h2);

  var $p = document.createElement('p');
  $p.textContent = entry.notes;
  $secondDivColumnHalf.appendChild($p);
  showOrHideNoEntries();

  var $pen = document.createElement('i');

  $pen.setAttribute('class', 'fas fa-pen');
  $h2.appendChild($pen);
  return $li;
}

window.addEventListener('DOMContentLoaded', handleDomLoaded);

function handleDomLoaded(event) {
  for (var i = 0; i < data.entries.length; i++) {
    showOrHideNoEntries();
    var displayNotes = renderEntry(data.entries[i]);
    $ul.appendChild(displayNotes);
  }
}

function showOrHideNoEntries(event) {
  if (data.entries.length > 0) {
    hideNoEntry();
  }
}

function hideNoEntry() {
  var $noEntry = document.querySelector('.hide-div');
  $noEntry.className = 'hide-div hidden';
}
var $newButton = document.querySelector('.second-button');
$newButton.addEventListener('click', newButton);

function newButton(event) {
  var newEntry = event.target.getAttribute('data-view');
  var $h1 = document.querySelector('.edit');
  $h1.textContent = 'New Entry';
  $deleteButton.className = 'vis-hidden';
  switchView(newEntry);
}

var $anchor = document.querySelector('a');
$anchor.addEventListener('click', anchor);

function anchor(event) {
  event.preventDefault();
  var viewEntry = false;
  var entryView = event.target.getAttribute('data-view');
  switchView(entryView);
  if (viewEntry === false) {
    $ul.className = 'row';
  }
}

var $view = document.querySelectorAll('.view');

function switchView(viewName) {
  for (var i = 0; i < $view.length; i++) {
    if ($view[i].getAttribute('data-view') === viewName) {
      $view[i].className = 'view';
    } else {
      $view[i].className = 'hidden view';
    }
  }
}

$ul.addEventListener('click', editEntries);

function editEntries(event) {
  if (event.target.matches('i')) {
    $deleteButton.className = 'delete-button';
    var $h1 = document.querySelector('.edit');
    $h1.textContent = 'Edit Entry';
    var currentId = parseInt(event.target.closest('li').getAttribute('entry-id'));
    for (var i = 0; i < data.entries.length; i++) {
      if (currentId === data.entries[i].entryId) {
        data.editing = data.entries[i];
      }
    }
    $form.elements.URL.value = data.editing.image;
    $form.elements.title.value = data.editing.title;
    $form.elements.notes.value = data.editing.notes;
    $imgSrc.setAttribute('src', $photoUrl.value);
    switchView('entry-form');
  }
}

var $deleteButton = document.querySelector('.delete-button');
$deleteButton.addEventListener('click', deleteButtonHandler);
var $modal = document.querySelector('.position-fixed');
var showOrHide = true;
function deleteButtonHandler(event) {
  event.preventDefault();
  if (showOrHide === true) {
    $modal.className = 'position-fixed row align-items justify-content-center overlay';
    showOrHide = false;
  }
}

var $cancel = document.querySelector('.cancel');
$cancel.addEventListener('click', cancelButtonHandler);

function cancelButtonHandler(event) {
  event.preventDefault();
  if (showOrHide === false) {
    $modal.className = 'position-fixed row align-items justify-content-center overlay hidden';
    showOrHide = true;
  }
}
