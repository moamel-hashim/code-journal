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

// var $main = document.querySelector('main');

// function entries(event) {
//   var $dataView = document.createElement('div');
//   $dataView.setAttribute('data-view', 'entries');
//   $main.appendChild($dataView);
//   var $divRow = document.createElement('div');
//   $divRow.setAttribute('class', 'row align-items justify');
//   $dataView.appendChild($divRow);
//   var $div = document.createElement('div');
//   $divRow.appendChild($div);

// }
