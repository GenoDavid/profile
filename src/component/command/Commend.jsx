import React from 'react'
import classes from './Commend.module.css'
import { useFormik } from 'formik'
import { Basicschema } from '../../schema/yup';

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
};
const Commend = () => {
    const { values, handleBlur, isSubmitting, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            comment: '',
            name: '',
            email: '',
            site: '',
        },
        validationSchema: Basicschema,
        onSubmit,
    });
    console.log(touched);

    return (
        <div className={classes.container}>
            <div className={classes.wrap}>
                <h2>Leave a comment</h2>
                <span>Your email address will not be published. Required fields are marked *</span>
            </div>
            <from onSubmit={handleSubmit} className={classes.form}>
                <div>
                    <lable htmlFor='comment'>Comment: </lable>
                </div>
                <textarea className={classes.valids}
                    type='text'
                    id='comment'
                    value={values.comment}
                    onChange={handleChange}
                    onBlur={handleBlur}></textarea>
                {errors.comment && touched.comment && <p className={classes.error}>{errors.comment}</p>}

                <div>
                    <lable htmlFor='name' >Name*: </lable>
                </div>
                <input className={classes.valid}
                    type='text'
                    id='name'
                    placeholder='Name'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                {errors.name && touched.name && <p className={classes.error}>{errors.name}</p>}

                <div>
                    <lable htmlFor='email'>Email*: </lable>
                </div>
                <input className={classes.valid}
                    type='email'
                    id='email'
                    placeholder='E-Mail'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                {errors.email && touched.email && <p className={classes.error}>{errors.email}</p>}

                <div>
                    <lable htmlFor='site'>Website: </lable>
                </div>
                <input className={classes.valides}
                    type='url'
                    id='site'
                    placeholder='Any site url'
                    value={values.site}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                {errors.site && touched.site && <p className={classes.error}>{errors.site}</p>}

                <button disabled={isSubmitting} className={classes.btn} type='submit'>Submit</button>

            </from>

        </div>
    )
}

export default Commend;