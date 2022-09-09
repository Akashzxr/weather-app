
export function dom(){
    
  const result_sec = document.querySelector('.result-sec');
  const city = document.createElement('div');
  const weather = document.createElement('div');
  const feelslike = document.createElement('div');
  const humidity = document.createElement('div');
  const wind = document.createElement('div');
  
  city.classList.add('city');
  weather.classList.add('weather');
  feelslike.classList.add('feelslike');
  humidity.classList.add('humidity');
  wind.classList.add('wind');

  city.style.color = '#101010';
  city.style.fontSize = '40px';
  weather.style.fontSize = '40px';


  result_sec.appendChild(city);
  result_sec.appendChild(weather);
  result_sec.appendChild(feelslike);
  result_sec.appendChild(humidity);
  result_sec.appendChild(wind);

}