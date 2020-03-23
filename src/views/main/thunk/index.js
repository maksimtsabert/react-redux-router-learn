import { loadUsers } from '../../../store/actions/user/user-actions'
import { fetchUsersData } from '../../../api/index'

export function thunkFecthUsersData() {
    return async (dispatch) => {
        const response = await dispatch(fetchUsersData());
        dispatch(loadUsers(response));
    }
}
