import React, { useEffect, useState } from "react";
import Speeds from '../components/Speeds'
import Angles from "../components/Angles.js"
import SailChange from '../components/SailChange'
import API from '../utils/API';
// import { CircleSlider } from "react-circle-slider"


const Home = () => {
  const full_url = document.URL; // Get current url
  const url_array = full_url.split('/'); // Split the string into an array with / as separator
  const id = url_array[url_array.length - 1];

  const [boat, setBoat] = useState({});
  const [wind, setWind] = useState("");
  const [styleWind, setStyleWind] = useState()
  const [windDirection, setWindDirection] = useState();


  const setSelectBoat = (boat) => {

    setBoat({ "name": boat.boat.type })
  }

  const windSpeed = (event) => {

    if (wind <= 5) {
      setStyleWind("wind-5")
    } else if (wind > 5 && wind <= 10) {
      setStyleWind("wind-10")
    } else if (wind > 10 && wind <= 15) {
      setStyleWind("wind-15")
    } else if (wind > 15 && wind <= 20) {
      setStyleWind("wind-20")
    } else if (wind > 20 && wind <= 25) {
      setStyleWind("wind-25")
    } else {
      setStyleWind("wind-30")
    }

    setWind(event.target.value)


  }
  const windDirectionInput = (event) => {

    setWindDirection(event.target.value)
  }


  useEffect(() => {
    API.getBoatInfoById(id)
      .then(res => setSelectBoat(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <div className="frow justify-around">
        <div className="windSpeed-slider">
          <label>Wind Speed:{wind}</label>
          <input type="range" min="0" max="30" id="windSpeed" step="1" value={wind} onChange={windSpeed}></input>
        </div>
        <div className="wind-direction-container">
          <label>Wind Direction: (0-360)</label>
          <input type="number" min="0" max="360" id="windAngle" onChange={windDirectionInput}></input>
          {/* <CircleSlider></CircleSlider> */}
        </div>

        hardcode data
      </div>
      <div className="container height-100">
        <div>{boat.name}</div>
        <Speeds></Speeds>
        <Angles></Angles>
        <SailChange styleWind={styleWind} windDirection={windDirection}></SailChange>
      </div>
    </div>
  )
}

export default Home; 