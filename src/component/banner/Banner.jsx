import React from 'react'
import classes from './Banner.module.css'

const Banner = ({ img }) => {
    return (
        <div className={classes.banner}>
            <div className={classes.bannerleft}>
                <img className={classes.image} src={img} alt='Banner' />
                <div className={classes.form}>
                    <div className={classes.bannerright}>
                        <h3 className={classes.headline}>Start Your Upskilling Journey Now</h3>
                        <input className={classes.input} id='name' type='text' placeholder='Full Name*' />
                        <input className={classes.input} id='course' type='text' placeholder='Select Course' />
                        <input className={classes.input} id='program' type='text' placeholder='Select Program' />
                        <input className={classes.input} id='mail' type='email' placeholder='Email' />
                        <input className={classes.input} id='number' type='text' placeholder='Phone No' />
                        <button class={classes.learnmore}> Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;