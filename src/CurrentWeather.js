import React, { useContext } from "react"
import { GlobalContext } from "./Comp/context"
import ImageId from "./Comp/ImageId";
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
export default function CurrentWeather() {
    const contextData = useContext(GlobalContext)
    const weather = contextData.temp;
    // console.log(wea);
    var time = 0
    // console.log(weather?.list[0]?.weather?.[0]?.id);
    // console.log(weather?.list[0]?.weather[0]?.id)
    console.log(weather);
    return (
        <div className="d-flex justify-items-center flex-row justify-content-center mt-5" style={{ paddingRight: 520 }}>
            {

                weather?.list?.map((item, idx) => {
                    { time = time + 3 }
                    console.log(ImageId(item?.weather[0]?.id));
                    return <div key={idx} className="the-box d-flex align-items-center flex-column ms-6 ">
                        {
                            time <= 9 ?
                                <div className="mt-5">0{time}:00</div>
                                :
                                <div className="mt-5">{time}:00</div>
                        }
                        <img className="mt-5" src={window.location.origin + ImageId(item?.weather[0]?.id)} style={{ width: 100, height: 100 }} alt="storm" />
                        <div className="mt-5"> {Math.round(item.main.temp)}°C </div>
                    </div>
                })

            }
        </div>
    )
}