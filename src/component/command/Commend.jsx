import React from 'react'
import classes from './Commend.module.css'

const Commend = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrap}>
                <h2>Leave a comment</h2>
                <span>Your email address will not be published. Required fields are marked *</span>
            </div>
            <from className={classes.form}>
                <div className={classes.valid}>
                    <lable className={classes.lable}>Comment</lable>
                    <input />
                </div>
                <div className={classes.valid}>
                    <lable className={classes.lable}>Name</lable>
                    <input />
                </div>
                <div className={classes.valid}>
                    <lable className={classes.lable}>Email*</lable>
                    <input />
                </div>
                <div className={classes.valid}>
                    <lable className={classes.lable}>Website</lable>
                    <input />
                </div>
            </from>
        </div>
    )
}

export default Commend