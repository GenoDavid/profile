import React, { useState } from 'react'
import classes from './Register.module.css'
import { useDispatch } from 'react-redux'
import { home } from '../../features/User'
import { useNavigate } from 'react-router-dom'

const Register = () => {

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
            <form className={classes.form}>
                <p className={classes.title}>Register </p>
                <p className={classes.message}>Signup now and get full access to our app. </p>
                <label>
                    <input required="" placeholder="" type="text" className={classes.input} />
                    <span>Firstname</span>
                </label>

                <label>
                    <input required="" placeholder="" type="text" className={classes.input} />
                    <span>Lastname</span>
                </label>


                <label>
                    <input required="" placeholder="" type="email" className={classes.input} />
                    <span>Email</span>
                </label>

                <label>
                    <input required="" placeholder="" type="password" className={classes.input} />
                    <span>Password</span>
                </label>
                <label>
                    <input required="" placeholder="" type="password" className={classes.input} />
                    <span>Confirm password</span>
                </label>
                <button className={classes.submit} onClick={login}>Signin</button>
                <p className={classes.signin} onClick={login} >Already have an acount ? <a href="#">Signin</a> </p>
            </form>
        </div>
    )
}

export default Register