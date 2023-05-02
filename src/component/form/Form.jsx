import React from 'react'
import classes from './Form.module.css'

const Form = () => {
    return (
        <div className={classes.Form}>
            <h3 className={classes.container}>Save Your Data</h3>
            <hr className={classes.line} />
            <div className={classes.formcontrol}>
                <div className={classes.valid}>
                    <input placeholder='Firstname' type='text' className={classes.name} />
                    <input placeholder='Lastname' type='text' className={classes.name} />
                    <input placeholder='Email' type='text' className={classes.name} />
                    <input placeholder='Phone.no' type='number' className={classes.name} />
                    <select className={classes.name} placeholder='select'>
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
                    <input placeholder='City' type='text' className={classes.name} />
                    <button className={classes.btn}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Form