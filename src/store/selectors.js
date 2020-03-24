import { createSelector } from 'reselect'

export const usersSelector = state => state.users
export const querySelector = state => state.search

const lowerQuerySelector = createSelector(
    querySelector,
    query => query.toLowerCase()
)

export const filteredUsers = createSelector(
    [lowerQuerySelector, usersSelector],
    (query, users) => users.filter(({ name }) => name.toLowerCase().includes(query))
)
