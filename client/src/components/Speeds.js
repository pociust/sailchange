import React from 'react'

const Speeds = (props) => {
  return (
    <>
      <div className="item-tws shadow-dark frow content-center mt-15">
        <div>
          TWS:
          </div>
        <div>{props.wind}</div>
      </div>
      <div className="item-aws shadow-dark frow content-center mt-15">AWS</div>
      <div className="item-bs shadow-dark frow content-center mt-15">Boat Speed</div>
    </>
  )
}

export default Speeds