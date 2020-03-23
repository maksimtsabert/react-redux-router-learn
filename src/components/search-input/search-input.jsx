import React from 'react'
import PropTypes from "prop-types"

export const SearchInput = ({ callBack, title }) => {
    return (
        <div className="form-group mt-2">
            <label>{title}</label>
            <input type="search" className="form-control" placeholder="Search" onChange={callBack} />
        </div>
    )
}

SearchInput.propTypes = {
    callBack: PropTypes.func,
    title: PropTypes.string
}
