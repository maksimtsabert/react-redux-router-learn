import { connect } from 'react-redux'
import { thunkFecthUsersData } from '../main/thunk/index'
import { updateUser } from '../../store/actions/user-actions'
import { EditUserComponent } from './edit-user'

const mapStateToProps = (store, ownProps) => {
    return {
        user: store.users.find(user => user.id === parseInt(ownProps.match.params.id)) || {}
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUser: () => dispatch(thunkFecthUsersData()),
        updateUser: user => dispatch(updateUser(user))
    }
}

export const EditUser = connect(mapStateToProps, mapDispatchToProps)(EditUserComponent)
