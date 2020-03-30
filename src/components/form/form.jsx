import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Schema } from '../../utils/validation-rules'
import { defaultConfig } from '../../utils/form-config'
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
            enableReinitialize
            validationSchema={Schema}
            onSubmit={(values, { resetForm }) => {
                callBack(values)
                resetForm()
            }}>
            {({ errors, touched }) => (
                <Form>
                    <label className="mt-1 mb-0">Name</label>
                    <Field name='name' type='text' className={`form-control ${errors.name && touched.name ? 'invalid' : ''}`} />
                    {errors.name && touched.name ? (<div className="error-message">{errors.name}</div>) : null}

                    <label className="mt-1 mb-0">Phone</label>
                    <Field name='phone' type='text' className={`form-control ${errors.phone && touched.phone ? 'invalid' : ''}`} />
                    {errors.phone && touched.phone ? (<div className="error-message">{errors.phone}</div>) : null}

                    <label className="mt-1 mb-0">Email Address</label>
                    <Field name='email' type='email' className={`form-control ${errors.email && touched.email ? 'invalid' : ''}`} />
                    {errors.email && touched.email ? (<div className="error-message">{errors.email}</div>) : null}

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
