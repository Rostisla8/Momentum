const time = document.querySelector('.time');

function showTime() {
    const date = new Date();
    time.textContent = date.toLocaleTimeString();
}

const dateNow = document.querySelector('.date');
const options = { month: 'long', day: 'numeric', timeZone: 'UTC' };

function showDay() {
    const dateNowing = new Date();
    dateNow.textContent = dateNowing.toLocaleDateString('ru-RU', options);
}

setInterval(() => {
    showTime();
    showDay();
    getTimeOfDay();
}, 1000);


let greet = document.querySelector('.greeting');


function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 12 && hours <= 18) {
        greet.textContent = 'Добрый день,'
    } else if (hours >= 18 && hours < 0) {
        greet.textContent = 'Добрый вечер,'
    } else if (hours >= 0 && hours < 6) {
        greet.textContent = 'Доброй ночи,'
    } else {
        greet.textContent = 'Доброе утро,'
    }

}

let name = document.querySelector('.name');

function setLocalStorage() {
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)


function getLocalStorage() {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)




const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=01ffc5c2eafbb0930b2eebf9e7f897f1&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
}

function setCity(event) {
    if (event.code === 'Enter') {
        getWeather();
        city.blur();
    }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);








function getRandomNum() {
    let a = 0;
    return a = Math.floor(Math.random() * 20 + 1)
}


function getBgPicture(func) {
    func()

}

getBgPicture(getRandomNum);

let quote = document.querySelector('.quote');
let author = document.querySelector('.author');


function getRandomNumber() {
    let a = 0;
    return a = Math.floor(Math.random() * 100 + 1)
}

async function getQuotes(getRandomNum) {
    const quotes = 'https://type.fit/api/quotes';
    const res = await fetch(quotes);
    const data = await res.json();
    console.log(data);
    let randomNumber = getRandomNum();
    quote.textContent = data[randomNumber].text
    author.textContent = data[randomNumber].author

}
getQuotes(getRandomNumber);


let buttonQuotes = document.querySelector('.change-quote');
buttonQuotes.addEventListener('click', function() {
    getQuotes(getRandomNumber)
})


let play = document.querySelector('#play');

const audio = new Audio();
let sounds = false;

function playAudio() {
    audio.src = 'assets/sounds/q.mp3'
    audio.currentTime = 0;
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

play.addEventListener('click', function() {
    if (sounds == false) {
        playAudio()
        sounds = true;
    } else {
        pauseAudio()
        sounds = false
    }
})


//*=== === === === === === === === === === SLIDER === === === === === === === === === === === === === === === === === === === === =**/

let next = document.querySelector('#nextSlide');

function hello() {
    let increment = 19;
    return function hello2() {
        increment--
        document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${increment}.jpg')`;
    }
}
let hello3 = hello();

function nextSlider() {
    let increment = 9;
    if (increment <= 19) {
        return function hello2() {
            increment++
            document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${increment}.jpg')`;
        }

    } else if (increment > 19) {
        return function retNine() {
            increment = 9;

        }
    }
}
let hello4 = nextSlider();


next.addEventListener('click', function() {

    hello3();
})

let prew = document.querySelector('#prewSlide');

prew.addEventListener('click', function() {
    hello4();
})