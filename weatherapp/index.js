const apiKey ="8d8f7e1b85fb4be56503d160e6b9dbb0";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=berlin"

async function checkWeather(){
    const response = await fetch(apiUrl+`&appid=${apiKey}`)
    let data = await response.json()
    console.log(data)
}
checkWeather()
// console.log("hello")