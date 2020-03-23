import { showSpinner } from '../store/actions/spinner/spinner-actions'

export const fetchUsersData = () => dispatch => {
    dispatch(showSpinner(true))
    return fetch('https://jsonplaceholder.typicode.com/users', { mode: 'cors' })
        .then((response) => checkResponce(response))
        .finally(() => dispatch(showSpinner(false)))
}

export const fetchUserDetails = (id) => dispatch => {
    dispatch(showSpinner(true))
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { mode: 'cors' })
        .then((response) => checkResponce(response))
        .finally(() => dispatch(showSpinner(false)))
}

const checkResponce = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}
