import React from 'react'
import PropTypes from "prop-types"

export const SearchInputComponent = ({ callBack, title, value }) => {
    return (
        <div className="form-group mt-2">
            <label>{title}</label>
            <input value={value} type="search" className="form-control" placeholder="Search" onChange={callBack} />
        </div>
    )
}

SearchInputComponent.propTypes = {
    callBack: PropTypes.func,
    title: PropTypes.string,
    value: PropTypes.string
}
