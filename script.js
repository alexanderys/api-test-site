/* API */
const MY_KEY = API_KEY;
const url = `https://pixabay.com/api/?key=${MY_KEY}&q=flowers&image_type=photo&pretty=true&per_page=200`


/* Variables */
let myData;
let randomFlowerUrl;

/* Selectors */
const link = document.querySelector('.link');
const button = document.querySelector('.btn');

/* Event Listeners */
button.addEventListener('click', setHref);

/* Functions */
function setHref() {
    let randomNumber = Math.floor(Math.random() * 200);
    randomFlowerUrl = myData[randomNumber].pageURL;
    link.setAttribute('href', randomFlowerUrl);
}

/* Fetch */
fetch(url)
    .then(response => response.json())
    .then(data => myData = data.hits)
    .then(() => setHref())


