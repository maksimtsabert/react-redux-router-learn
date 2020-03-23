import { connect } from 'react-redux'
import { UserCardComponent } from './user-card'

const mapStateToProps = store => {
    return {
        users: store.users
    }
}

export const UserCard = connect(mapStateToProps)(UserCardComponent)
