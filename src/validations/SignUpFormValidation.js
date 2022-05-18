import * as yup from 'yup'

export const SignUpFormValidationSchema=yup.object().shape({
    username:yup.string().required('username is required'),
    email: yup.string().email().required('email is required'),
    password:yup.string().required('Password is required'),
    passwordConfirmation: Yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
})

