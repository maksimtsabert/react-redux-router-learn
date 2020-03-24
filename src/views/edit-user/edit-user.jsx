import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DefaultForm } from '../../components/form'
import { UserMainInfo } from '../../components/user-main-info'
import { Avatar } from '../../components/avatart'
import './index.css'

export const EditUserComponent = ({ user, loadUser, updateUser }) => {

    useEffect(() => {
        !user.length && loadUser()
        //eslint-disable-next-line
    }, [loadUser])

    const handleCkick = values => {
        const userData = { id: user.id, ...values }
        updateUser(userData)
    }

    return (<div>
        <div className="user-info d-flex">
            <Avatar img="/avatar.png">
                <Link to={`/user/${user.id}`} className="link">View</Link>
            </Avatar>
            <UserMainInfo user={user} />
        </div>
        <DefaultForm callBack={handleCkick} userDetails={user} />
    </div>)
}
