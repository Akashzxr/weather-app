import { dom } from "./dom";

export function get(){
    dom();
const input = document.querySelector('#input');
const search_btn = document.querySelector('#search');

search_btn.addEventListener('click',getdata);

async function getdata(){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=55b2f4b739998d82795ba5cabb50890f',{mode:'cors'});
    const result = await response.json();
    console.log(result);
   
    let city = document.querySelector('.city');
    let weather = document.querySelector('.weather');
    let feelslike = document.querySelector('.feelslike');
    let humidity = document.querySelector('.humidity');
    let wind = document.querySelector('.wind');

    city.textContent = input.value;
    weather.textContent = result.main.temp+'°C';
    feelslike.textContent = 'Feels like: '+result.main.feels_like+'°C';
    humidity.textContent = 'Humidity: '+result.main.humidity+'%';
    wind.textContent = 'Wind: '+result.wind.speed+'km/h'

}
}
