import React from 'react'
import classes from './Form.module.css'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const sechema = yup.object().shape({
    firstname: yup.string().required('Fill the firstname'),
    lastname: yup.string().required('Fill the lastname'),
    email: yup.string().email('Pls enter the email').required('Enter the mail'),
    number: yup.number().integer().positive().min(10).max(10).required('Enter your phone number'),
    select: yup.string().optional().required('Select your courses'),
    city: yup.string().required('Select your National city')
})

const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({

    });
    // console.log(handleSubmit);

    useEffect(() => {

    })

    return (
        <div className={classes.Form}>
            <h3 className={classes.container}>Save Your Data</h3>
            <hr className={classes.line} />
            <div className={classes.formcontrol}>
                <form className={classes.valid} onSubmit={handleSubmit(async (data) => {
                    // async () => {
                    const user = await axios.post('https://63fcbd648ef914c5559e51fc.mockapi.io/upgrad', data)
                    console.log(user.data);
                    // }
                })}>
                    <input {...register('firstname')} placeholder='Firstname' type='text' className={classes.name} />
                    <input {...register('lastname')} placeholder='Lastname' type='text' className={classes.name} />
                    <input {...register('email')} placeholder='Email' type='text' className={classes.name} />
                    <input {...register('number')} placeholder='Phone.no' type='number' className={classes.name} />
                    <select {...register('select')} className={classes.name} placeholder='select'>
                        <option>---Select Coures---</option>
                        <option>Data Science</option>
                        <option>Machine Learning</option>
                        <option>Big Data</option>
                        <option>Digital Marketing</option>
                        <option>Management</option>
                        <option>MBA & DBA</option>
                        <option>Softawre Technology</option>
                        <option>Blockchain Technology</option>
                        <option>Insurence</option>
                        <option>IT Service Managment</option>
                        <option>DevOps </option>
                    </select>
                    <input {...register('city')} placeholder='City' type='text' className={classes.name} />
                    <button type='submit' className={classes.btn}><Link to={'user'}>Submit</Link></button>
                </form>
            </div>
        </div>
    )
}

export default Form