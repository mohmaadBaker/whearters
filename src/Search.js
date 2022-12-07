import React, { useContext, useState } from "react";
import ImageId from "./Comp/ImageId";
import { GlobalContext } from "./Comp/context"
import CurrentWeather from "./CurrentWeather";
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
function Search() {
    const [weather, setWeather] = useState({});
    const [flag, setflag] = useState(false);
    const [city, setCity] = useState("");
    const contextData = useContext(GlobalContext)
    const [temp, setTemp] = useState();
    // const [time, settime] = useState(new Date())
    console.log(weather?.list?.[0]?.weather?.[0]?.id)
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
        contextData.update();
        const temp = JSON.parse(JSON.stringify(weather));
        temp?.list?.shift();
        console.log(temp);
        setTemp(temp);
        console.log(weather);

    }


    return (
        <GlobalContext.Provider
            value={{ temp }}
        >
            <div style={{ height: "12%", background: '#06bfe4' }} className="">
                <input className="mx-5 mt-5 mb-5" id="location" style={{ background: '7777FF' }} placeholder="enter a location " onChange={(e) => setCity(e.target.value)}
                    value={city} />
                <button className="btn btn-primary" onClick={getWheather}> Search Weather</button>
            </div>
            {/* <hr style={{ display: 'flex', background: '#7777FF', height: 70 }} /> */}
            {flag && (
                <div style={{ paddingLeft: '45%', justifyContent: "center", alignItems: 'center' }}>
                    <div> {<img src={window.location.origin + ImageId(weather?.list?.[0]?.weather?.[0]?.id)} style={{ width: 180, height: 180 }} alt="storm" />}  </div>
                    <div style={{ color: 'white' }}>{weather?.list?.[0].weather?.[0].description} </div>
                    <div> <span style={{ fontWeight: "bold" }}>Temperature </span>{`${weather?.list?.[0].main?.temp_min.toFixed()}° to ${weather?.list?.[0].main?.temp_max.toFixed()}`}°C</div>
                    <span> {`Humidity ${weather?.list?.[0].main?.humidity}`}% </span>
                    <span>  {`pressure ${weather?.list?.[0].main?.pressure}`}</span>
                    <div>


                        <CurrentWeather />
                    </div>

                </div>
            )


            }

        </GlobalContext.Provider>
    )
}
export default Search;