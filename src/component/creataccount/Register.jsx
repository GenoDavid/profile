import React, { useState } from 'react'
import classes from './Register.module.css'
import { useDispatch } from 'react-redux'
import { home } from '../../features/User'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'



const Register = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    console.log(errors);
    const Fname = watch('fname')

    const navi = useNavigate()
    const dispatch = useDispatch()
    // const [sign, setSign] = useState(false)
    const login = () => {
        const open = dispatch(home(true))
        navi('/')
        console.log(open);
    }

    return (
        <div>
            <form className={classes.form} onSubmit={handleSubmit((data) => {
                console.log(data)
            })} >
                <p className={classes.title}>Register </p>
                <p className={classes.message}>Signup now and get full access to our app. </p>
                <label>
                    <input {...register('fname', { required: 'Fill The First Name' })} placeholder="Firstname" type="text" className={classes.input} />
                    {Fname}
                </label>
                {errors?.fname && <p>{errors.fname.message}</p>}

                <label>
                    <input {...register('lname', { required: 'Fill The Last Name' })} placeholder="Lastname" type="text" className={classes.input} />
                </label>
                {errors?.lname && <p>{errors.lname.message}</p>}

                <label>
                    <input {...register('mail', { required: 'Enter The EMail' })} placeholder="Email" type="email" className={classes.input} />
                </label>
                {errors?.mail && <p>{errors.mail.message}</p>}

                <label>
                    <input {...register('pass', { required: 'Strong Password', minLength: { value: 6, message: 'Strong Password' } })} placeholder="Password" type="password" className={classes.input} />
                </label>
                {errors?.pass && <p>{errors.pass.message}</p>}

                <label>
                    <input {...register('conpass', { required: 'Incorrect Password', minLength: { value: 6, message: 'Confirm Password' } })} placeholder="Confirm Password" type="password" className={classes.input} />
                </label>
                {errors?.conpass && <p>{errors.conpass.message}</p>}

                <button className={classes.submit} onClick={login}>Signin</button>
                <p className={classes.signin} onClick={login} >Already have an acount ? <a href="#">Signin</a> </p>
            </form>
        </div>
    )
}

export default Register