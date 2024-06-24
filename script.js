'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// .addEventListener('click', function () {})
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);

for (let i = 0; i < btnShowModal.length; i++)
  // show Modal
  btnShowModal[i].addEventListener('click', function () {
    // console.log('button clicked')
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

// close function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// close model
btnCloseModal.addEventListener('click', closeModal);
// close overlay
overlay.addEventListener('click', closeModal);
