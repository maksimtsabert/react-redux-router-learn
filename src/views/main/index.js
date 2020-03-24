import { connect } from 'react-redux'
import { thunkFecthUsersData } from './thunk/index'
import { MainComponent } from './main'
import { addUSer } from '../../store/actions/user-actions'
import { filteredUsers } from '../../store/selectors'
import { setSearchQuery } from '../../store/reducers/search-reducer'

const mapStateToProps = state => ({
    users: filteredUsers(state),
})

const mapDispatchToProps = dispatch => ({
    loadUsers: () => dispatch(thunkFecthUsersData()),
    addUSer: data => dispatch(addUSer(data)),
    setSearchQuery: query => dispatch(setSearchQuery(query))
})

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent)
