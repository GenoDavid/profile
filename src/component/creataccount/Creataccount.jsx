import React from 'react'
import classes from './Creataccount.module.css'


const Creataccount = () => {
    return (
        <div>
            <form className={classes.form}>
                <p className={classes.title}>Register </p>
                {/* <p className={classes.message}>Signup now and get full access to our app. </p> */}
                <div className={classes.flex}>
                    <label>
                        <input required="" placeholder="" type="text" className={classes.input} />
                        <span>Firstname</span>
                    </label>

                    <label>
                        <input required="" placeholder="" type="text" className={classes.input} />
                        <span>Lastname</span>
                    </label>
                </div>

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
                <button className={classes.submit}>Submit</button>
                <p className={classes.signin}>Already have an acount ? <a href="#">Signin</a> </p>
            </form>
        </div>
    )
}

export default Creataccount