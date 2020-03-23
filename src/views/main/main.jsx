import React, { useEffect, useState } from 'react'
import { UserCard } from '../../components/user-card'
import { DefaultForm } from '../../components/form'
import { SearchInput } from '../../components/search-input'
import { Button } from '../../components/button'
import PropTypes from 'prop-types'

export const MainComponent = ({ users, loadUsers, addUSer }) => {
    const [showForm, setShowForm] = useState(false)
    const [filterRule, setFilterRule] = useState('')
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        !Object.keys(users).length && loadUsers()
        // eslint-disable-next-line
    }, [loadUsers])


    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(filterRule))

    const handleClick = values => {
        const userData = { id: Math.floor(Math.random() * Math.floor(100)), ...values } //random id
        addUSer(userData)
        setDisabled(false)
        setShowForm(false)
    }

    const filterUser = e => {
        let val = e.target.value.toLowerCase()
        setFilterRule(val)
    }

    const showUserForm = () => {
        setShowForm(true)
        setDisabled(true)
    }

    return (<div className="main-wrapper">
        <SearchInput callBack={filterUser} title='Search users' />
        <Button onClick={showUserForm} text="Add user" disabled={disabled} />
        <DefaultForm callBack={handleClick} show={showForm} />
        <div className="users-list">
            {filteredUsers.map((user, index) => (
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
