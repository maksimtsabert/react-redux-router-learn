import React from 'react'
import { Formik, Form } from 'formik'
import { Schema } from '../../utils/validation-rules'
import { defaultConfig } from '../../utils/form-config'
import { FormInput } from './form-input'
import PropTypes from 'prop-types'
import './index.css'

export const DefaultForm = ({ callBack, userDetails, show = true }) => {
    const config = !userDetails ? defaultConfig : userDetails

    if (!show) {
        return null
    }

    return (
        <Formik
            initialValues={{ ...config }}
            validationSchema={Schema}
            onSubmit={(values, { resetForm }) => {
                callBack(values)
                resetForm()
            }}>
            {({ errors, touched }) => (
                <Form>
                    <FormInput name='name' title='Name' errors={errors} touched={touched} />
                    <FormInput name='phone' title='Phone' errors={errors} touched={touched} />
                    <FormInput name='email' type='email' title='Email Address' errors={errors} touched={touched} />
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

DefaultForm.propTypes = {
    callBack: PropTypes.func,
    userDetails: PropTypes.object
}
