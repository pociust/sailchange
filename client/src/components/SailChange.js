import React from "react"


const SailChange = (props) => {

  const arrowDirection = {
    transform: `rotate(${props.windDirection}deg)`
  }





  return (
    <>
      <div className="item-sailchange sail-change-container">
        <div className="markers mark1">1</div>
        <div className={`markers ${props.styleWindATNM}`}>2</div>


        <div className="lines-to-mark"></div>

        <div className="boat-design"><span>spinnaker</span></div>

        <div className={`wind-arrows ${props.styleWind} arrow1`} style={arrowDirection}></div>
        <div className={`wind-arrows ${props.styleWind} arrow2`} style={arrowDirection}></div>
        <div className={`wind-arrows ${props.styleWind} arrow3`} style={arrowDirection}></div>
        <div className={`wind-arrows ${props.styleWind} arrow4`} style={arrowDirection}></div>
        <div className={`wind-arrows ${props.styleWind} arrow5`} style={arrowDirection}></div>
        <div className={`wind-arrows ${props.styleWind} arrow6`} style={arrowDirection}></div>
        <div className={`wind-arrows ${props.styleWind} arrow7`} style={arrowDirection}></div>
        <div className="compass"></div>
        <div className="frow direction-column justify-between compass-ns">
          <div>
            N
            </div>
          <div>
            S
          </div>
        </div>
        <div className="frow compass-ew">
          <div>
            W
          </div>
          <div>
            E
          </div>
        </div>
      </div>
    </>
  )
}

export default SailChange