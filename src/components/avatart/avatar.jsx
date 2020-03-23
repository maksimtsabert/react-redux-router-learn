import React from 'react'
import PropTypes from 'prop-types'
import './index.css'


export const Avatar = ({ children, img }) => {
    return (
        <div className="user-wrapper-avatar">
            <img className="user-avatar" src={img} alt="" />
            <div>
                {children}
            </div>
        </div>
    )
}

Avatar.propTypes = {
    children: PropTypes.node
}
