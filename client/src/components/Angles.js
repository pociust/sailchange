import React from 'react';


const Angles = (props) => {
  return (
    <>
      <div className="shadow-dark frow content-center item-twa">
        <div>
          TWA:
        </div>
        <div>
          {props.windDirection}deg
        </div>
        <div>AWA:</div>
        <div></div>
      </div>
      <div className="shadow-dark frow content-center item-atm">Angle To Mark</div>
      <div className="shadow-dark frow content-center item-aamtnm">Angle after mark to next mark</div>
    </>
  )
}


export default Angles;