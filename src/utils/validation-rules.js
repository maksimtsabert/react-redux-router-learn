import * as Yup from 'yup'

const phoneRegex = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

export const Schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name Too Short!')
        .max(50, 'Name Too Long!')
        .required('Name is required'),
    phone: Yup.string()
        .matches(phoneRegex, 'Phone is not valid') //refactor
        .required('Phone is Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is Required'),
})
