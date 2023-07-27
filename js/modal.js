const modal = document.querySelector('.search-model');
const modalBtn = document.querySelector('.icon_search');
const modalClose = modal.querySelector('.search-close-switch');
const form = modal.querySelector('.search-model-form');
const searchInput = form.querySelector('#search-input');

modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

searchInput.addEventListener('input', (e) => {
  const target = e.target.value;
  console.log(target);
});
