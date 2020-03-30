import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DefaultForm } from '../../components/form'
import { UserMainInfo } from '../../components/user-main-info'
import { Avatar } from '../../components/avatart'
import { BlockWithIcon } from '../../components/block-with-icon'
import PropTypes from 'prop-types'
import './index.css'

export const EditUserComponent = ({ user, loadUser, updateUser }) => {
    useEffect(() => {
        !user.length && loadUser()
        //eslint-disable-next-line
    }, [loadUser])

    const formCallback = values => {
        const userData = { id: user.id, ...values }
        updateUser(userData)
    }

    return (<div>
        <div className="user-info d-flex position-relative">
            <div className="arrow-back">
                <Link to='/'>
                    <BlockWithIcon icon='arrow-alt-circle-left' />
                </Link>
            </div>
            <Avatar img="/avatar.png">
                <Link to={`/user/${user.id}`} className="link">View</Link>
            </Avatar>
            <UserMainInfo user={user} />
        </div>
        <DefaultForm callBack={formCallback} userDetails={user} />
    </div>)
}

EditUserComponent.propTypes = {
    user: PropTypes.object,
    loadUser: PropTypes.func,
    updateUser: PropTypes.func
}
