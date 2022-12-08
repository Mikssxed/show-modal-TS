'use strict';

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closebtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const showOrHide = () => {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

showModal.forEach(item => item.addEventListener('click', showOrHide));

closebtn.addEventListener('click', showOrHide);

overlay.addEventListener('click', showOrHide);

document.addEventListener('keydown', function (e: KeyboardEvent) {
  if (e.key === 'Escape') showOrHide();
});
