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
    notes: $form.elements.notes.value,
    entryId: data.nextEntryId++
  };
  $imgSrc.setAttribute('src', './images/placeholder-image-square.jpg');
  data.entries.unshift(messageData);
  $ul.prepend(entriesNotes(messageData));
  switchView('entries');
  $form.reset();
}

// var $main = document.querySelector('main');
// var $divEntries = document.querySelector('.entries');
var $ul = document.querySelector('ul');
// $divEntries.appendChild($ul);

function entriesNotes(entry) {
  // debugger;
  var $li = document.createElement('li');
  $li.setAttribute('class', 'column-full padding-0');
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
  return $li;
}

window.addEventListener('DOMContentLoaded', handleDomLoaded);

function handleDomLoaded(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var displayNotes = entriesNotes(data.entries[i]);
    $ul.appendChild(displayNotes);
  }
}

var $newButton = document.querySelector('.second-button');
$newButton.addEventListener('click', newButton);

function newButton(event) {
  var newEntry = event.target.getAttribute('data-view');
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
      $view[i].className = 'hidden';
    }
  }
}
