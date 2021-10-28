const weatherImg = document.querySelector('img');
const container = document.querySelector('section');

let arrImages =[
    'https://openweathermap.org/img/wn/03n@2x.png',
    'https://openweathermap.org/img/wn/10n@2x.png',
    'https://openweathermap.org/img/wn/01d@2x.png',
    'https://openweathermap.org/img/wn/13d@2x.png'
    
];

let APIkey= 'adbaa54fce71ba2f91b4353b5cfc6b18';

function findCity() {

    let cityName= document.querySelector("datalist").value;
    
    const urlAddress=`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=adbaa54fce71ba2f91b4353b5cfc6b18`)
    .then(response => response.json())
    .then(data=> {
        
        let p = document.createElement('p');
        p.textContent= data.main.temp;
        container.appendChild(p);

        switch (data.weather[0].main) {
            case 'Clouds':
                weatherImg.src=arrImages[0];
                break;
            case 'Rain':
                weatherImg.src=arrImages[1];
                break;
            case 'Clear':
                weatherImg.src=arrImages[2];
                break;
        
            default:
                weatherImg.src=arrImages[3];
                break;
        }
        

    })
  
}