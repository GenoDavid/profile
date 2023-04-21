import React from 'react'
import classes from './alert.module.css'

const Alert = ({ children }) => {
    return (
        <div className={classes.alert}>
            <div className={classes.alert2}>{children}</div>
        </div>

    )
}

export default Alert