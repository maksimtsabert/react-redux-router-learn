import React, { useEffect, useState, useRef } from 'react'
import { UserCard } from '../../components/user-card'
import { DefaultForm } from '../../components/form'
import { SearchInput } from '../../components/search-input'
import { Button } from '../../components/button'
import PropTypes from 'prop-types'

const getNextId = () => Math.floor(Math.random() * Math.floor(100))
const setIdMapper = values => ({ id: getNextId(), ...values })

export const MainComponent = ({ users, loadUsers, setSearchQuery, addUSer }) => {
    const [showForm, setShowForm] = useState(false)
    // const isCancelled = useRef(false);

    useEffect(() => {
        !users.length && loadUsers()
        // eslint-disable-next-line
    }, [loadUsers])

    const formCallBack = (values) => {
        addUSer(setIdMapper(values))
        setShowForm(false)
    }

    return (<div className="main-wrapper">
        <SearchInput
            callBack={({ target: { value } }) => setSearchQuery(value)}
            title='Search users' />
        <Button
            onClick={() => setShowForm(true)}
            text="Add user"
            disabled={showForm} />
        <DefaultForm
            callBack={formCallBack}
            show={showForm} />
        <div className="users-list">
            {users.map((user, index) => (
                <UserCard user={user} key={index} />
            ))}
        </div>
    </div>)
}

MainComponent.propTypes = {
    users: PropTypes.array,
    loadUsers: PropTypes.func,
    addUSer: PropTypes.func
}
