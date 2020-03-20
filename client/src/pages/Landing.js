import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import BoatSelect from "../components/BoatSelect"

const Landing = () => {
  const [boatData, setBoatData] = useState([])

  useEffect(() => {
    API.getAllData()
      .then(res => setBoatData(res.data))
      .catch(err => console.log(err))
  }, [])


  const boatUserSelected = (event) => {
    console.log(event.target.value.rating)

  }


  return (
    <div className="frow-container mt-50">
      <div className="frow centered-column">
        <div>
          Pick your boat
        </div>
        <select name="boat" id="boat-select" onChange={boatUserSelected} className="boat-select">
          {boatData.map(boatinfo => (
            <BoatSelect boat={boatinfo} key={boatinfo._id} boatUserSelected={boatUserSelected}></BoatSelect>
          ))}
        </select>

        <div className="frow">
          Add a boat
        </div>
      </div>
    </div>
  )
}

export default Landing;