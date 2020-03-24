import { SHOW_SPINNER } from '../../actions/spinner/spinner-actions'

export function spinnerReducer(state = false, action) {
    switch (action.type) {
        case SHOW_SPINNER:
            return action.payload
        default:
            return state
    }
}
