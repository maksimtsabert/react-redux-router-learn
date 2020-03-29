import { connect } from 'react-redux'
import { SearchInputComponent } from './search-input'

const mapStateToProps = state => {
    return {
        value: state.search
    }
}

export const SearchInput = connect(mapStateToProps)(SearchInputComponent)