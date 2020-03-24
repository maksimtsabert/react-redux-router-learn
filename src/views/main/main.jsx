import React, { useEffect, useState } from 'react'
import { UserCard } from '../../components/user-card'
import { DefaultForm } from '../../components/form'
import { SearchInput } from '../../components/search-input'
import { Button } from '../../components/button'
import PropTypes from 'prop-types'

const getNextId = () => Math.floor(Math.random() * Math.floor(100))
const setIdMapper = props => ({ id: getNextId(), ...props })

export const MainComponent = ({ users, loadUsers, setSearchQuery, addUSer }) => {
    const [showForm, setShowForm] = useState(false)

    // eslint-disable-next-line
    useEffect(() => loadUsers(), [])

    return (<div className="main-wrapper">
        <SearchInput
            callBack={({ target: { value } }) => setSearchQuery(value)}
            title='Search users' />
        <Button
            onClick={() => setShowForm(!showForm)}
            text="Add user" />
        <DefaultForm
            callBack={values => addUSer(setIdMapper(values))}
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
