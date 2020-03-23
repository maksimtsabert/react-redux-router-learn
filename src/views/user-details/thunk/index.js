import { loadUserDetails } from '../../../store/actions/user-actions'
import { fetchUserDetails } from '../../../api/index'

export function thunkFecthUserData(id) {
    return async (dispatch) => {
        const response = await dispatch(fetchUserDetails(id));
        dispatch(loadUserDetails(response));
    }
}
