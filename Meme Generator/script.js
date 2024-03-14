const memeName = document.querySelector('.Memes .memeName');
const displayMeme = document.querySelector('.Memes img');
const button = document.querySelector('.Memes  button');

function memesD(url, name) {
  displayMeme.setAttribute('src', url);
  memeName.innerText = name;
}

const fetchMeme = () => {
  fetch('https://api.imgflip.com/get_memes')
    .then((response) => response.json())
    .then((data) => {
      const memes = data.data.memes;
      const randomMemesIndex = Math.floor(Math.random() * memes.length);
      const randomMeme = memes[randomMemesIndex];
      memesD(randomMeme.url, randomMeme.name);
    })
    .catch(errorFunction);
};

const errorFunction = (error) => console.error(error, 'this is an error');
button.addEventListener('click', fetchMeme);

fetchMeme();