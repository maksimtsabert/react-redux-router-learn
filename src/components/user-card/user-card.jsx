import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '../avatart'
import PropTypes from 'prop-types'
import { UserMainInfo } from '../user-main-info'
import './index.css'

export const UserCardComponent = ({ user }) => {
    return (<div className="user-card">
        <Avatar img="/avatar.png">
            <Link to={`/edit/user/${user.id}`} className="link">Edit</Link>
            <Link to={`/user/${user.id}`} className="link">View</Link>
        </Avatar>
        <UserMainInfo user={user} />
    </div>)
}

UserCardComponent.propTypes = {
    user: PropTypes.object,
}
