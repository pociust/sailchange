import React, { useState, useEffect } from "react"


const SailChange = (props) => {

  return (
    <>
      <div className="item-sailchange">
        this is saildchange
        <div className="markers">orangecone</div>

        <div className="lines-to-mark">red line</div>

        <div className="boat-design">boat<span>sail</span></div>

        <div className={`wind-arrows ${props.styleWind}`}> arrows</div>
      </div>

    </>
  )
}

export default SailChange