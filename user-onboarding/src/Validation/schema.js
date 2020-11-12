import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string()
        .required('a name is required'),
    email: yup.string()
        .email('Please Enter a valid email address')
        .required('Email Is Required'),
    password: yup.string()
        .required('password required')
        .min(8, 'must be atleast 8 characters long'),
    tos: yup.boolean().oneOf([true])
    
})