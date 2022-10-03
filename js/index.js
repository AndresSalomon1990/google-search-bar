const searchInput = document.getElementById('search-input');
const cancelSearchIcon = document.getElementById('cancel-search-icon');
const autocompleteBox = document.getElementById('autocomplete-box');
const divisionLine = document.getElementById('division-line');

const handleClick = (value) => {
  searchInput.value = value;
  divisionLine.style.display = 'none';
  autocompleteBox.innerHTML = '';
};

searchInput.addEventListener('keyup', (e) => {
  if (e.target.value) {
    cancelSearchIcon.style.display = 'block';
    autocompleteBox.innerHTML = '';

    api(e.target.value).then((res) => {
      res.forEach((item) => {
        const html = `
          <li class="autocomplete-suggestion" onclick="handleClick('${item}')">
            <div class="list-image"></div>
            <div class="list-text">${item}</div>
          </li>
        `;
        autocompleteBox.insertAdjacentHTML('beforeend', html);
      });

      if (res.length > 0) {
        divisionLine.style.display = 'block';
      } else {
        divisionLine.style.display = 'none';
      }
    });
  } else {
    divisionLine.style.display = 'none';
    autocompleteBox.innerHTML = '';
    cancelSearchIcon.style.display = 'none';
  }
});

cancelSearchIcon.addEventListener('click', () => {
  divisionLine.style.display = 'none';
  searchInput.value = null;
  autocompleteBox.innerHTML = '';
  cancelSearchIcon.style.display = 'none';
});
