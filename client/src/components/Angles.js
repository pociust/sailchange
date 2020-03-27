import React from 'react';


const Angles = (props) => {
  return (
    <>
      <div className="shadow-dark frow content-center item-twa">
        <div className="frow column-center">
          <div>
            TWA:
          </div>
          <div>
            {props.trueWindAngle}°
          </div>
          <div>
            Wind angle after mark:
          </div>
          <div>
            {}°
          </div>
        </div>
      </div>
      <div className="shadow-dark frow content-center item-atm">Angle To Mark</div>
      <div className="shadow-dark frow content-center item-aamtnm">
        <div className="frow column-center">
          <div>
            Angle after mark to next mark:
          </div>
          <div>
            {props.windAngleToNextMark}°
          </div>
        </div>
      </div>
    </>
  )
}


export default Angles;