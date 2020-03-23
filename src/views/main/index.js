import { connect } from 'react-redux'
import { thunkFecthUsersData } from './thunk/index'
import { MainComponent } from './main'
import { addUSer } from '../../store/actions/user/user-actions'

const mapStateToProps = store => {
    return {
        users: store.users || {}
    }
}

const mapDispatchToProps = dispatch => ({
    loadUsers: () => dispatch(thunkFecthUsersData()),
    addUSer: data => dispatch(addUSer(data)),
})

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent)
