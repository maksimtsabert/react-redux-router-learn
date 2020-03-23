import React from 'react'
import { BlockWithIcon } from '../block-with-icon'
import './index.css'
import PropTypes from 'prop-types'

export const UserMainInfo = ({ user }) => {
    return (
        <div className="user-details">
            <BlockWithIcon icon='user' text={user.name} />
            <BlockWithIcon icon='phone' text={user.phone} />
            <BlockWithIcon icon='envelope' text={user.email} />
        </div>
    )
}

UserMainInfo.propTypes = {
    user: PropTypes.object,
}
