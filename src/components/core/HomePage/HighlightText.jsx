import React from 'react'

import "./HighlightText.css"

const HighlightText = ({text}) => {
  return (
  
       <span className="highLight font-bold">
       {" "}
       {
            text
        }
        {" "}
       </span>
  
  )
}

export default HighlightText