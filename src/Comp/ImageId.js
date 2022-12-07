export default function ImageId(id) {
    console.log(id);
    if (801 < id < 805) {
        return ('/img/weather-icons/mostlycloudy.svg')
    }
    if (id === 801) {
        return ('/img/weather-icons/partlycloudy.svg')
    }
    if (id === 800) {
        return ('/img/weather-icons/clear.svg')
    }
    if (700 < id && id < 799) {
        return ('/img/weather-icons/fog.svg')
    }
    if (600 < id < 699) {
        return ('/img/weather-icons/snow.svg')
    }
    if (500 < id < 599) {
        return ('/img/weather-icons/rain.svg')
    }
    if (300 < id < 499) {
        return ('/img/weather-icons/drizzle.svg')
    }
    if (id < 300) {
        return ('/img/weather-icons/storm.svg')
    }
}