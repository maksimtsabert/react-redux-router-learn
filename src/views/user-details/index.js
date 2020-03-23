import { connect } from 'react-redux'
import { thunkFecthUsersData } from '../main/thunk/index'
import { UserDetailsComponent } from './user-details'

const mapStateToProps = (store, ownProps) => {
    return {
        user: store.users.find(user => user.id === parseInt(ownProps.match.params.id)) || {}
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUser: () => dispatch(thunkFecthUsersData())
    }
}

export const UserDetails = connect(mapStateToProps, mapDispatchToProps)(UserDetailsComponent)
