import React from "react"
import containerStyles from "./container.module.css"

export default (props) => (
  <div className={containerStyles.container} style={props.style}>
    <div style={{ maxWidth: 1300, margin: "auto" }}>
      {props.children}
    </div>
  </div>
)
