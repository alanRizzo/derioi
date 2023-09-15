import React from 'react'

import PropTypes from 'prop-types'

import './frame22.css'

const Frame22 = (props) => {
  return (
    <div className={`frame22-frame22 ${props.rootClassName} `}>
      <span className="frame22-text">
        <span className="">Sign-in</span>
      </span>
    </div>
  )
}

Frame22.defaultProps = {
  rootClassName: '',
}

Frame22.propTypes = {
  rootClassName: PropTypes.string,
}

export default Frame22
