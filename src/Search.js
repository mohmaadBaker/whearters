import React, { useState } from "react";
function Search() {
    const [weather, setWeather] = useState({});
    const [flag, setflag] = useState(false);
    const [city, setCity] = useState("");
    // const [time, settime] = useState(new Date())
    const getWheather = () => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=c816c46ebe3db153af6a868b6bdd5251`)
            .then(
                resp => resp.json()
            )
            .then(data =>
                setWeather(data)
            )
        setCity('')
        setflag(true)
    }
    console.log(weather);
    // const hour = time.getHours();
    // console.log(hour);
    return (
        <div>
            <div style={{ display: 'flex', background: '#7777FF' }} >
                <input id="location" style={{ background: '7777FF' }} placeholder="enter a location " onChange={(e) => setCity(e.target.value)}
                    value={city} />
                <button style={{ backgroundColor: 'white', color: "black", padding: 5, margin: 5 }} onClick={getWheather}> Search Weather</button>
            </div>
            {/* <hr style={{ display: 'flex', background: '#7777FF', height: 70 }} /> */}
            {flag && (
                <div style={{ paddingLeft: '45%', justifyContent: "center", alignItems: 'center' }}>
                    <div> {<img src={window.location.origin + ImageId(weather?.list?.[0].weather?.[0].id)} style={{ width: 180, height: 180 }} alt="storm" />}  </div>
                    <div style={{ color: 'white' }}>{weather?.list?.[0].weather?.[0].description} </div>
                    <div> <span style={{ fontWeight: "bold" }}>Temperature </span>{`${weather?.list?.[0].main?.temp_min.toFixed()} to ${weather?.list?.[0].main?.temp_max.toFixed()}`}C</div>
                    <span> {`Humidity ${weather?.list?.[0].main?.humidity}`}% </span>
                    <span>  {`pressure ${weather?.list?.[0].main?.pressure}`}</span>
                    <div>
                        {/* {weather?.list?.[0].weather[0]?.id.map((e, idx) => {
                            return (<div>
                                <div>{hour > 0 && hour < 12 ? <div>{hour + 12} pm</div> : null}</div>
                                <div>{hour === 12 ? <div>{hour - 12}</div> : null}</div>
                                <div>{hour === 24 ? <div>{hour - 24}</div> : null}</div>
                                <div>{hour > 12 ? <div>{hour}pm</div> : null}</div>
                            </div>)
                        })} */}
                    </div>
                </div>
            )
            }
        </div>
    )
}
export default Search;
function ImageId(id) {
    if (801 < id && id < 805) {
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
    if (600 < id && id < 699) {
        return ('/img/weather-icons/snow.svg')
    }
    if (500 < id && id < 599) {
        return ('/img/weather-icons/rain.svg')
    }
    if (300 < id && id < 499) {
        return ('/img/weather-icons/drizzle.svg')
    }
    if (id < 300) {
        return ('/img/weather-icons/storm.svg')
    }
}