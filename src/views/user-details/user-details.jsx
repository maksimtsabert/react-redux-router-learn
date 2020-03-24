import React, { useEffect } from 'react'
import { BlockWithIcon } from '../../components/block-with-icon'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Avatar } from '../../components/avatart'
import PropTypes from 'prop-types'
import './index.css'

export const UserDetailsComponent = ({ user, loadUser }) => {
    useEffect(() => {
        !Object.keys(user).length && loadUser()
        // eslint-disable-next-line
    }, [loadUser])

    return (<div className="user-view-card">
        <div className="arrow-back">
            <Link to='/'>
                <BlockWithIcon icon='arrow-alt-circle-left' />
            </Link>
        </div>
        <Avatar img="/avatar.png" />
        <div>{user.name}</div>
        <UserBlockWrapper>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        </UserBlockWrapper>
        <UserBlockWrapper>
            <div>Contacts:</div>
            <BlockWithIcon icon='phone' text={user.phone} />
            <BlockWithIcon icon='envelope' text={user.email} />
            <BlockWithIcon icon='globe' text={user.website} />
        </UserBlockWrapper>
    </div>)
}

//just for test
const UserBlockWrapper = styled.div`border-top: 1px solid #9E9E9E;`

UserDetailsComponent.propTypes = {
    user: PropTypes.object,
    loadUser: PropTypes.func,
}
