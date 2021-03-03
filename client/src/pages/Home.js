import React, { useEffect, useState } from "react";
import Speeds from '../components/Speeds';
import Angles from '../components/Angles.js';
import SailChange from '../components/SailChange';
import Spinnaker from '../components/Spinnaker';
import API from '../utils/API';



const Home = () => {

  const full_url = document.URL; // Get current url
  const url_array = full_url.split('/'); // Split the string into an array with / as separator
  const id = url_array[url_array.length - 1];

  const [boat, setBoat] = useState({});
  const [wind, setWind] = useState("");
  const [styleWind, setStyleWind] = useState()
  const [windDirection, setWindDirection] = useState();
  const [angleToNextMark, setAngleToNextMark] = useState();
  const [styleWindATNM, setstyleWindATNM] = useState();
  const [trueWindAngle, setTrueWindAngle] = useState();
  const [windAngleAfterMark, setWindAngleAfterMark] = useState();



  const firstSpinnakerDecider = () => {
    //angles for doyle sails, might want to add other makers rules may need to break this to a utils?
    if (wind <= 9 && wind > 3) {
      if (trueWindAngle >= 95 && trueWindAngle < 140) {
        console.log("a1")
      } else {
        console.log('Keep up the jib')
      }
    } else if (wind > 9 && wind <= 20) {
      if (trueWindAngle >= 140 && trueWindAngle < 150) {
        console.log("a2")
      } else if (wind >= 14) {
        if (trueWindAngle >= 125 && trueWindAngle >= 138) {
          console.log("a3")
        } else {
          console.log("keep up the jib or buy better sails")
        }
      }
    } else if (wind >= 20 && wind < 30) {
      if (trueWindAngle > 138 && trueWindAngle <= 160) {
        console.log("a4")
      }
    }
  }



  const setSelectBoat = (boat) => {

    setBoat({ "name": boat.boat.type })
  }

  const windSpeed = (event) => {

    if (event.target.value <= 5) {
      setStyleWind("wind-5")
    } else if (event.target.value > 5 && event.target.value <= 10) {
      setStyleWind("wind-10")
    } else if (event.target.value > 10 && event.target.value <= 15) {
      setStyleWind("wind-15")
    } else if (event.target.value > 15 && event.target.value <= 20) {
      setStyleWind("wind-20")
    } else if (event.target.value > 20 && event.target.value <= 25) {
      setStyleWind("wind-25")
    } else {
      setStyleWind("wind-30")
    }

    setWind(event.target.value)


  }
  const windDirectionInput = (event) => {

    setWindDirection(event.target.value)
    setTrueWindAngle(event.target.value)
  }

  const changingAngleToNextMark = (event) => {

    let degrees = event.target.value

    //keeping this in incase I want to have a round mark to starbord
    // if (degrees <= -120) {
    //   setstyleWindATNM("mark-140")

    // } else if (degrees > -120 && degrees <= -100) {

    //   setstyleWindATNM("mark-120")

    // } else if (degrees > -100 && degrees <= -80) {

    //   setstyleWindATNM("mark-100")

    // } else if (degrees > -80 && degrees <= -60) {

    //   setstyleWindATNM("mark-80")

    // } else if (degrees > -60 && degrees <= -40) {

    //   setstyleWindATNM("mark-60")

    // } else if (degrees > -40 && degrees <= -20) {

    //   setstyleWindATNM("mark-40")

    // } else if (degrees > -20 && degrees < 0) {

    //   setstyleWindATNM("mark-20")}

    if (degrees < 20 && degrees >= 0) {

      setstyleWindATNM("mark20")

    } else if (degrees < 40 && degrees >= 20) {

      setstyleWindATNM("mark40")

    } else if (degrees < 60 && degrees >= 40) {

      setstyleWindATNM("mark60")

    } else if (degrees < 80 && degrees >= 60) {

      setstyleWindATNM("mark80")

    } else if (degrees < 100 && degrees >= 80) {

      setstyleWindATNM("mark100")

    } else if (degrees < 120 && degrees >= 90) {

      setstyleWindATNM("mark120")

    } else if (degrees <= 140 && degrees >= 120) {

      setstyleWindATNM("mark140")
    }

    let changeInTWA = (parseInt(windDirection) + parseInt(degrees))

    if (changeInTWA > 360) {
      setWindAngleAfterMark(changeInTWA - 360)
    } else {
      setWindAngleAfterMark(changeInTWA)
    }

    setAngleToNextMark(degrees)
  }


  useEffect(() => {
    API.getBoatInfoById(id)
      .then(res => setSelectBoat(res.data))
      .catch(err => console.log(err))
  }, [])

  firstSpinnakerDecider()
  return (
    <div>
      <div className="frow justify-around">
        <div className="windSpeed-slider">
          <label>Wind Speed:</label>
          <input type="range" min="0" max="30" id="windSpeed" step="1" value={wind} onChange={windSpeed}></input>
        </div>
        <div className="wind-direction-container">
          <label>Wind Direction: (0-360)</label>
          <input type="number" min="0" max="360" id="windAngle" onChange={windDirectionInput}></input>
          {/* <CircleSlider></CircleSlider> */}
        </div>
        <div>
          <label>Angle to next mark: {angleToNextMark}</label>
          <input type="range" min="0" max="140" onChange={changingAngleToNextMark}></input>
        </div>


        hardcode data
      </div>
      <div className="container height-100">
        <div className="shadow-dark mt-15">
          <div>{boat.name}</div>
          <div className="frow row-around">
            <div className="sail-1">Sail #1
              <div>daw</div>
            </div>
            <div className="sail-2">Sail Change
              <div>wdade</div>
            </div>
          </div>
        </div>
        <Speeds wind={wind}></Speeds>
        <Angles angleToNextMark={angleToNextMark} trueWindAngle={trueWindAngle} windAngleAfterMark={windAngleAfterMark}></Angles>
        <SailChange styleWind={styleWind} windDirection={windDirection} styleWindATNM={styleWindATNM}></SailChange>
      </div>
    </div>
  )
}

export default Home; 