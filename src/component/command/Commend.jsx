import React from 'react'
import classes from './Commend.module.css'
import { useFormik } from 'formik'

const Commend = () => {
    const { values, handleBlur, handleChange } = useFormik({
        initialValues: {
            comment: '',
            name: '',
            email: '',
            site: '',
        }
    });

    return (
        <div className={classes.container}>
            <div className={classes.wrap}>
                <h2>Leave a comment</h2>
                <span>Your email address will not be published. Required fields are marked *</span>
            </div>
            <from className={classes.form}>

                <lable className={classes.comment}>Comment</lable>
                <input type='text' id='comment' placeholder='Minimum 50 charecters' value={values.comment} onChange={handleChange} onBlur={handleBlur} />

                <lable className={classes.name}>Name</lable>
                <input type='text' id='name' placeholder='Name' value={values.name} onChange={handleChange} onBlur={handleBlur} />

                <lable className={classes.email}>Email*</lable>
                <input type='email' id='email' placeholder='E-Mail' value={values.email} onChange={handleChange} onBlur={handleBlur} />

                <lable className={classes.site}>Website</lable>
                <input type='url' id='site' placeholder='Any site url' value={values.site} onChange={handleChange} onBlur={handleBlur} />

                <button type='submit'>Submit</button>
            </from>
        </div>
    )
}

export default Commend;