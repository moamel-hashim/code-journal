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
  $form.reset();
}

//  <div data-view="entries">
//       <div class="row align-items justify">
//         <div class="">
//           <h1>entries</h1>
//         </div>
//         <div class="column-half padding-0 text-align">
//           <button>NEW</button>
//         </div>
//       </div>
//       <ul class="row">
//         <li class="column-full padding-0">
//           <div class="row">
//             <div class="column-half">
//               <img src="./images/placeholder-image-square.jpg" alt="placeholder-image-square">
//             </div>
//             <div class="column-half">
//               <h2>Lorem, ipsum.</h2>
//               <p>Lorem ipsum dolor sit amet
//                 consectetur adipisicing elit. Quis, ut?</p>
//             </div>
//           </div>
//         </li>
//         <li class="column-full padding-0">
//           <div class="row">
//             <div class="column-half">
//               <img src="./images/placeholder-image-square.jpg" alt="placeholder-image-square">
//             </div>
//             <div class="column-half">
//               <h2>Lorem, ipsum.</h2>
//               <p>Lorem ipsum dolor sit amet consectetur,
//                 adipisicing elit. Blanditiis, perspiciatis!</p>
//             </div>
//           </div>
//         </li>
//       </ul>
//     </div>

var $main = document.querySelector('main');

function entriesNotes(event) {
  var $ul = document.createElement('ul');
  $ul.setAttribute('class', 'row');
  // li
  var $li = document.createElement('li');
  $li.setAttribute('class', 'column-full padding-0');
  $ul.appendChild($li);
  // div for the row
  var $divRow = document.createElement('div');
  $divRow.setAttribute('class', 'row');
  $li.appendChild($divRow);
  // div for the column-half
  var $divColumnHalf = document.createElement('div');
  $divColumnHalf.setAttribute('class', 'column-half');
  $li.appendChild($divColumnHalf);
  // img
  var $imgholder = document.createElement('img');
  $imgholder.setAttribute('src', '');
  $divColumnHalf.appendChild($imgholder);
  // div second column-half
  var $secondDivColumnHalf = document.createElement('div');
  $secondDivColumnHalf.setAttribute('class', 'column-half');
  $li.appendChild($secondDivColumnHalf);
  // h2
  var $h2 = document.createElement('h2');
  $h2.textContent = '';
  $secondDivColumnHalf.appendChild($h2);
  // p
  var $p = document.createElement('p');
  $p.textContent = '';
  $secondDivColumnHalf.appendChild($p);
}

window.addEventListener('DOMContentLoaded', entriesNotes);

for (var i = 0; i < length; i++) {
  var displayNotes = entriesNotes([i]);
  $main.appendChild(displayNotes);
}
