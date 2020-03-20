import React, { useEffect, useState } from "react";
import Speeds from '../components/Speeds'
import Angles from "../components/Angles.js"
import SailChange from '../components/SailChange'
import API from '../utils/API';


const Home = () => {
  const full_url = document.URL; // Get current url
  const url_array = full_url.split('/'); // Split the string into an array with / as separator
  const id = url_array[url_array.length - 1];

  const [boat, setBoat] = useState({});



  const setSelectBoat = (boat) => {

    setBoat({ "name": boat.boat.type })
    console.log(boat.boat.type)

  }



  useEffect(() => {
    API.getBoatInfoById(id)
      .then(res => setSelectBoat(res.data))
      .catch(err => console.log(err))
  }, [])



  return (
    <div className="container height-100">
      <div>{boat.name}</div>
      <Speeds></Speeds>
      <Angles></Angles>
      <SailChange></SailChange>
    </div>
  )
}

export default Home; 