import React from "react";
import Speeds from '../components/Speeds'
import Angles from "../components/Angles.js"
import SailChange from '../components/SailChange'


const Home = () => {
  return (
    <div className="container">
      <Speeds></Speeds>
      <Angles></Angles>
      <SailChange></SailChange>
    </div>
  )
}

export default Home; 