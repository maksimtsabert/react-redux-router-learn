import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const BlockWithIcon = ({ icon, text }) => {
    return (<div>
        <FontAwesomeIcon icon={['fas', icon]} />
        <span className="ml-2">{text}</span>
    </div>)
}

BlockWithIcon.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string
}
