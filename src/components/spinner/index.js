import { connect } from 'react-redux'
import { SpinnerComponent } from './spinner'

const mapStateToProps = state => {
    return {
        loading: state.spinner.loading
    }
}

export const Spinner = connect(mapStateToProps)(SpinnerComponent)
