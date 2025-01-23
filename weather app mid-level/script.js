let weather = {
    tehran: {id: 1, provinceName: 'tehran', status: 'cloudy', icon: '/icon/cloudy.png',img: 'url(/img/tehran.jpg)',  temprature: '20°C', humidity: '5%', windSpeed: '6.2 km/h'},
    shiraz: {id: 2, provinceName: 'shiraz', status: 'sunny', icon: '/icon/sunny.png',img: 'url(/img/shiraz.jpg)',  temprature: '27°C', humidity: '20%', windSpeed: '7 km/h'},
    esfahan: {id: 3, provinceName: 'esfahan', status: 'sunny', icon: '/icon/sunny.png',img: 'url(/img/esfahan.jpg)',  temprature: '22°C', humidity: '2%', windSpeed: '3 km/h'},
    yazd: {id: 4, provinceName: 'yazd', status: 'windy', icon: '/icon/windy.png',img: 'url(/img/yazd.jpg)',  temprature: '17°C', humidity: '15%', windSpeed: '9 km/h'},
}


let $ = document
let searchInput = $.querySelector(".search-bar") 
let searchBtn = $.querySelector('button')
let provinceName = $.querySelector('.city')
let temprature = $.querySelector('.temp')
let weatherInfo = $.querySelector('.weather')
let weatherStatus = $.querySelector('.description')
let humidity = $.querySelector('.humidity')
let windSpeed = $.querySelector('.windspeed')
let loading = $.querySelector('.loading')


document.body.style.backgroundSize = 'cover'
document.body.style.backgroundRepeat = 'norepeat'





searchBtn.addEventListener('click', function(){

    
    let provinceIndex = searchInput.value
    let provinceObj = weather[provinceIndex]

    if(provinceObj){
        weatherInfo.classList.remove('loading')
        provinceName.textContent = 'weather in '  + provinceObj.provinceName
        temprature.textContent = provinceObj.temprature
        weatherStatus.innerHTML = ` <img class="icon description-icon" src="${provinceObj.icon}" > ${provinceObj.status}`
        humidity.textContent = "Humidity: " + provinceObj.humidity
        windSpeed.textContent = "WindSpeed: " + provinceObj.windSpeed
        document.body.style.backgroundImage = provinceObj.img
    }else{
        weatherInfo.classList.add('loading')
        document.body.style.backgroundImage = ''
    }

    
    
})





