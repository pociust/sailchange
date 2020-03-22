import React from "react"


const SailChange = (props) => {
  console.log('direction', props.windDirection)

  const arrowDirection = {
    transform: `rotate(${props.windDirection}deg)`
  }


  return (
    <>
      <div className="item-sailchange sail-change-container">
        <div className="markers">orangecone</div>

        <div className="lines-to-mark">red line</div>

        <div className="boat-design">boat<span>sail</span></div>

        <div className={`wind-arrows ${props.styleWind} arrow1`} style={arrowDirection}></div>
        <div className={`wind-arrows ${props.styleWind} arrow2`} style={arrowDirection}></div>
        <div className={`wind-arrows ${props.styleWind} arrow3`} style={arrowDirection}></div>
        <div className={`wind-arrows ${props.styleWind} arrow4`} style={arrowDirection}></div>
        <div className={`wind-arrows ${props.styleWind} arrow5`} style={arrowDirection}></div>
        <div className={`wind-arrows ${props.styleWind} arrow6`} style={arrowDirection}></div>
        <div className={`wind-arrows ${props.styleWind} arrow7`} style={arrowDirection}></div>
        <div className={`wind-arrows ${props.styleWind} arrow8`} style={arrowDirection}></div>
        <div className={`wind-arrows ${props.styleWind} arrow9`} style={arrowDirection}></div>

      </div>

    </>
  )
}

export default SailChange