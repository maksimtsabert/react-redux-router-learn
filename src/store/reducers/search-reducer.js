export const SET_QUERY = 'SET_QUERY'

export const setSearchQuery = query => ({ type: SET_QUERY, payload: query })

export function searchReducer(state = '', action) {
    switch (action.type) {
        case SET_QUERY:
            return action.payload
        default:
            return state
    }
}
