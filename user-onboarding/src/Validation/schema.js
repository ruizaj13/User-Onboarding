import * as yup from 'yup';

export default yup.object().shape({
    email: yup.string()
        .email('Please Enter a valid email address')
        .required('Email Is Required')
})