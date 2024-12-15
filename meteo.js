const City = document.getElementById('City');
const Weatheratm = document.getElementById('Weatheratm');
const Gradenatm = document.getElementById('Gradenatm');
const Precipitacionesatm = document.getElementById('Precipitacionesatm');
const Humedadatm = document.getElementById('Humedadatm');
const Vientoatm = document.getElementById('Vientoatm');
const Hourlyforecast = document.getElementById('Hourlyforecast');

async function getCurrentWeatherData() {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f546c560ae074b2896601930241112&q=Madrid&aqi=no`);
        if(!response.ok) {
            console.log('Error: ',response.status);
        }
        return await response.json();
    }
    catch(error) {
        throw new Error("Error!: ",error);
    }
};

async function getForecastWeatherData() {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f546c560ae074b2896601930241112&q=Madrid&aqi=no`);
        if(!response.ok) {
            console.log('Error: ',response.status);
        }
        return await response.json();
    }
    catch(error) {
        throw new Error("Error!: ",error);
    }
};

function paintCurrentWeatherDate() {
    getCurrentWeatherData().then((response) => {
        console.log(response);
        City.innerText = `${response.location.name} / ${response.location.country}`;
        Weatheratm.innerText = `Condition = ${response.current.condition.text}`;
        Gradenatm.innerText = `Temp = ${response.current.temp_c}°C`;
        Precipitacionesatm.innerText = `Precipation = ${response.current.precip_mm}mm`;
        Humedadatm.innerText = `Humedad = ${response.current.humidity}%`;
        Vientoatm.innerText = `Viento = ${response.current.wind_kph}km/h`;

    })
}


setInterval(paintCurrentWeatherDate(),1000000);

//nog toe te voegen: forecast