import React from "react";


const BoatSelect = (props) => {
  console.log(props.boat)
  return (
    <>
      <option boat={props.boat} value={props.boat}> {props.boat.boat.type}</option>
    </>
  )
}

export default BoatSelect;