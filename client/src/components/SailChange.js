import React from "react"


const SailChange = (props) => {
  console.log('direction', props.windDirection)


  return (
    <>
      <div className="item-sailchange">
        this is saildchange
        <div className="markers">orangecone</div>

        <div className="lines-to-mark">red line</div>

        <div className="boat-design">boat<span>sail</span></div>

        <div className={`wind-arrows ${props.styleWind} rotated`}> arrows</div>
      </div>

    </>
  )
}

export default SailChange