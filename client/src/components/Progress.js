import React from "react"
import PropTypes from "prop-types"

const Progress = props => {
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped bg-success"
        role="progressbar"
        style={{ width: `${props.percentage}%` }}
      >
        {props.percentage}%
      </div>
    </div>
  )
}

Progress.propTypes = {
  percentage: PropTypes.number.isRequired
}

export default Progress
