import * as yup from 'yup';

export const Basicschema = yup.object().shape({
    Comment: yup.string().min(5).max(100).required("Fill the comment"),
    name: yup.string().required('Fill the name'),
    email: yup.string().email('Please enter the valid email address').required('This field is requied'),
    site: yup.string().url('Please enter the url').required('This field is requied')
});