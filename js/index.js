let apiKey = '6bfc5f6b779046ce9e9171957251411'
let findCity = document.querySelector("#findCity")
let findBtn = document.querySelector("#findBtn")
let city = ''
let apiData = ''
let nextdayWeather= {}
let nextnextdayWeather = {}
//city input

async function init(){
    city = await getCity()
    try {
        await weatherAPI()
    } catch (error) {
        console.log(error)  
    }
}
init()
findCity.addEventListener("input", async function (e) {
    city = e.target.value
    try {
        await weatherAPI()
    } catch (error) {
        console.log(error)  
    }
})
//get location

async function getLocation(){
    return new Promise(function(resolve,reject) {
         navigator.geolocation.getCurrentPosition(resolve,reject)
    })
}


async function getCity() {
    let pos = await getLocation()
    let lat = pos.coords.latitude
    let lon = pos.coords.longitude
    
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=3&aqi=no&alerts=no`)
    let region = await response.json()
    city = region.location.name
    return city
}


//API handling
let currentWeather = {}
async function weatherAPI() {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`)
    apiData = await response.json()
    console.log(apiData)
    let  i=0
    currentWeather = {
        day:apiData.forecast.forecastday[i].date,
        city: apiData.location.name,
        temparature: apiData.current.temp_c,
        conditionIcon: apiData.current.condition.icon,
        conditionText: apiData.current.condition.text,
        rain: apiData.current.precip_mm,
        windSpeed: apiData.current.wind_kph,
        windDirection: apiData.current.wind_dir,
         windDir(name){
           if(name.startsWith("W")){
            return "West"
          }else if (name.startsWith("N")) {
            return "North"
          }else if (name.startsWith("S")) {
            return "South"
          }else{
            return "East"
          }
        },
        dayName(date){
            let dayDate = new Date(date)
            let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            return  weekdays[dayDate.getDay()];
        },
        monthName(date){
            let monthDate = new Date(date)
            let months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
            return months[monthDate.getMonth()];
        },
        dayNum(date){
            let dayNum = new Date(date)
            return dayNum.getDate();
        
        }
    }
    console.log(currentWeather)
     nextdayWeather = {
     day:apiData.forecast.forecastday[i+1].date,
     conditionIcon:apiData.forecast.forecastday[i+1].day.condition.icon,
     maxTemperature:apiData.forecast.forecastday[i+1].day.maxtemp_c,
     minTemperature:apiData.forecast.forecastday[i+1].day.mintemp_c,
     conditionText:apiData.forecast.forecastday[i+1].day.condition.text,
     dayName(day){
            let dayDate = new Date(day)
            let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            return  weekdays[dayDate.getDay()];
        }
    }
     nextnextdayWeather = {
    day:apiData.forecast.forecastday[i+2].date,
     conditionIcon:apiData.forecast.forecastday[i+2].day.condition.icon,
     maxTemperature:apiData.forecast.forecastday[i+2].day.maxtemp_c,
     minTemperature:apiData.forecast.forecastday[i+2].day.mintemp_c,
     conditionText:apiData.forecast.forecastday[i+2].day.condition.text,
     dayName(day){
            let dayDate = new Date(day)
            let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            return  weekdays[dayDate.getDay()];
        }
    }
    console.log(nextdayWeather)
    console.log(nextnextdayWeather)
    //location
    

    //additon of weather boxes
    const day = new Date() 
    console.log(day)
    let box = ''
    for (let i = 0; i < 3; i++) {
        if (i == 0) {
            box += `<div class="col-lg-4 bg-darklightblue p-0">
                        <header class="date d-flex justify-content-between align-items-center p-2">
                            <h5 class="d-inline text-secondary fs-6">${currentWeather.dayName(currentWeather.day)}</h5>
                            <h5 class="d-inline text-secondary fs-6">${currentWeather.dayNum(currentWeather.day)} ${currentWeather.monthName(currentWeather.day)}</h5>
                        </header>
                        <div class="weather p-3">
                            <h5 class="text-secondary fs-6">${currentWeather.city? currentWeather.city : '' }</h5>
                            <div class="temp-icon d-flex flex-column">
                                <h2 class="d-inline text-white fs-1">${currentWeather.temparature}°C </h2> 
                                <img src="http:${currentWeather.conditionIcon}" alt="weather icon" class="">
                            </div>
                            <h5 class=" text-cyan fs-6">${currentWeather.conditionText}</h5>
                            <ul class="list-unstyled d-flex gap-2">
                                <li class="text-secondary fs-6">${currentWeather.rain} <i class="fa-solid text-secondary fa-umbrella"></i></li>
                                <li class="text-secondary fs-6">${currentWeather.windSpeed} <i class="fa-solid text-secondary fa-wind"></i></li>
                                <li class="text-secondary fs-6">${currentWeather.windDir(currentWeather.windDirection)} <i class="fa-regular text-secondary fa-compass"></i></li>
                            </ul>
                        </div>
                    </div>
                    `
        } else {
            if (i % 2 != 0) {
                box += `<div class="col-lg-4 bg-darklightblue p-0 text-center">
                         <header class="date  p-2">
                            <h5 class="d-inline text-secondary fs-6">${nextdayWeather.dayName(nextdayWeather.day)}</h5>
                        </header>
                        <div class="forecast  d-flex align-items-center flex-column gap-3 p-3">
                            <img src="http:${nextnextdayWeather.conditionIcon}">
                        <h5 class="text-white fs-6">${nextnextdayWeather.maxTemperature}°C</h5>
                        <h6 class="text-secondary fs-6">${nextnextdayWeather.minTemperature}°C</h6>
                        <p class="text-cyan fs-6">${nextnextdayWeather.conditionText}</p>
                        </div>
                    </div>
                    `
            } else {
                box += `
        <div class="col-lg-4 bg-darklightblue p-0 text-center">
                         <header class="date  p-2">
                            <h5 class="d-inline text-secondary fs-6">${nextnextdayWeather.dayName(nextnextdayWeather.day)}</h5>
                        </header>
                        <div class="forecast  d-flex align-items-center flex-column gap-3 p-3">
                             <img src="http:${nextdayWeather.conditionIcon}">
                        <h5 class="text-white fs-6">${nextdayWeather.maxTemperature}°C</h5>
                        <h6 class="text-secondary fs-6">${nextdayWeather.minTemperature}°C</h6>
                        <p class="text-cyan fs-6">${nextdayWeather.conditionText}</p>
                        </div>
                    </div>
            `
            }
        }

    }
    document.querySelector(".forecast-boxes").innerHTML = box
}








//API handling

/* 
Keys:
location.name
current.temp_c
current.condition.icon
current.condition.text 
current.precip_mm
current.wind_kph
current.wind_dir

search for next day date 
if(forecastday.date = nextday){
forecastday.{nextDayDate}.day.condition.icon
forecastday.{nextDayDate}.day.maxtemp_c
forecastday.{nextDayDate}.day.mintemp_c
forecastday.{nextDayDate}.day.condition.text

search for next next day date 
if(forecastday.date = nextnextday){
forecastday.{nextnextDayDate}.day.condition.icon
forecastday.{nextnextDayDate}.day.maxtemp_c
forecastday.{nextnextDayDate}.day.mintemp_c
forecastday.{nextnextDayDate}.day.condition.text

*/