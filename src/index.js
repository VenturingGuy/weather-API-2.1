async function getWeather(path) {
    try {
        const res = await fetch(path)
        const json = await res.json()
        const weatherData = {
            temp: json.main.temp,
            description: json.weather[0].description,
            feelsLike: json.main.feels_like,
            humidity: json.main.humidity,
            temp_min: json.main.temp_min,
            temp_max: json.main.temp_max,
            coord: json.coord
        }
        console.log(json)
        return weatherData
    } catch(err) {
        return err
    }
  }

function getWeatherByZip(zip, apiKey, units = 'imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    return getWeather(path)
}

function getWeatherByCity(city, apiKey, units = 'imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
    return getWeather(path)
}

function getWeatherByGeo(lat, lon, apiKey, units = 'imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
    return getWeather(path)
}



  export {
      getWeatherByZip,
      getWeatherByCity,
      getWeatherByGeo
  }