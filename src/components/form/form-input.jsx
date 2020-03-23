import React from 'react'
import { Field } from 'formik'
import PropTypes from 'prop-types'
import './index.css'

export const FormInput = ({ name, title, type = 'text', ...props }) => {
    return (<React.Fragment>
        <label htmlFor={name} className="mt-1 mb-0">{title}</label>
        <Field name={name} type={type} className={`form-control ${props.errors[name] && props.touched[name] ? 'invalid' : ''}`} />
        {props.errors[name] && props.touched[name] ? (<div className="error-message">{props.errors[name]}</div>) : null}
    </React.Fragment>)
}

FormInput.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string
}
