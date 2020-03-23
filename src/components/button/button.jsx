import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

export const Button = ({ onClick, text, disabled = false }) => {
    return <button className="btn btn-primary mt-2" onClick={onClick} disabled={disabled}>{text}</button>
}

Button.propTypes = {
    onClick: PropTypes.func,
    test: PropTypes.string
}
