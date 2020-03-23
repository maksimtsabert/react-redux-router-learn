import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

export const SpinnerComponent = ({ loading }) => {
    if (!loading) {
        return null
    }

    return (<div className="parent">
        <div className="loader"></div>
    </div>)
}

SpinnerComponent.propTypes = {
    loading: PropTypes.bool,
}
