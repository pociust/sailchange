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



  console.log('11111', boatData)
  return (
    <div className="frow-container mt-50">
      <div className="frow column-center">
        Pick your boat
        <div className="boat-input">
          {boatData.map(boatinfo => (
            <BoatSelect boat={boatinfo.boat.type}></BoatSelect>
          ))}
        </div>
      </div>
      <div className="frow">
        Add a boat
      </div>
    </div>
  )
}

export default Landing;