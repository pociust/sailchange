import React from "react";


const BoatSelect = (props) => {
  console.log('22222', props.boat)
  return (
    <div className="frow justify-start p-5">
      <input className="shadow-light" type="checkbox" boat={props.boat}></input>
      <label className="shadow-dark">{props.boat}</label>
    </div>
  )
}

export default BoatSelect;