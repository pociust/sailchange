import React from 'react';
// import API from '../utils/API';
import BoatSelect from "../components/BoatSelect"

const Landing = (props) => {
  // const [boatData, setBoatData] = useState([])

  // useEffect(() => {
  //   API.getAllData()
  //     .then(res => setBoatData(res.data))
  //     .catch(err => console.log(err))
  // }, [])


  // const boatUserSelected = (event) => {
  //   console.log(event.target.value.rating)

  // }


  return (
    <div className="frow-container mt-50">
      <div className="landing-container">
        <div className="frow centered-column">
          <div>
            Pick your boat
          </div>
          <select name="boat" id="boat-select" onChange={props.boatUserSelected} className="boat-select">
            <option value="">Select your boat</option>
            {props.boatData.map(boatinfo => (
              <BoatSelect boat={boatinfo} key={boatinfo._id} ></BoatSelect>
            ))}
          </select>

          <div className="frow">
            Add a boat
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;