const modal = () => {
  const modal = document.querySelector('.search-model');
  const modalBtn = document.querySelector('.icon_search');
  const modalClose = modal.querySelector('.search-close-switch');
  const form = modal.querySelector('.search-model-form');
  const searchInput = form.querySelector('#search-input');
  const wrapper = document.querySelector('.search-model-result');

  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '500px';

  const debounce = (func, ms = 500) => {
    let timer;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, ms);
    };
  };

  const searchDebounce = debounce((searchString) => {
    searchFunc(searchString);
  }, 1000);

  const renderFunc = (items) => {
    wrapper.innerHTML = '';

    items.forEach((item) => {
      wrapper.insertAdjacentHTML(
        'afterbegin',
        `
          <a class="p-2" href="/anime-details.html" target="_blank">${item.title}</a>
        `,
      );
    });
  };

  const searchFunc = (searchStr) => {
    fetch('https://anime-e0a14-default-rtdb.firebaseio.com/anime.json')
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.filter((dataItem) => {
          return (
            dataItem.title.toLowerCase().includes(searchStr.toLowerCase()) ||
            dataItem.description.toLowerCase().includes(searchStr.toLowerCase())
          );
        });

        renderFunc(filterData.slice(0, 5));
      });
  };

  modalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    searchInput.value = '';
    wrapper.innerHTML = '';
  });

  searchInput.addEventListener('input', (e) => {
    searchDebounce(e.target.value);
  });
};

modal();
