import React, { useState } from 'react'
import classes from './Navigator.module.css'
import image from '../../image/Untitled-3.png'
import { CgSearch } from "react-icons/cg";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/User';
import { Alert } from 'react-bootstrap';


const Navigator = () => {
    const navigat = useNavigate()
    const dispatch = useDispatch()
    const [isopen, setIopen] = useState(false)
    const Menus = ['Data Science Courses', 'Software Engineering', 'Doctorate', 'AI & ML', 'Marketing', 'Business Analytics', 'Project Managment']

    return (
        <div>
            <div className={classes.conatiner}>
                <div className={classes.navibar}>
                    <img src={image} alt='logo' className={classes.logo} />
                    <div className={classes.explore}>
                        <b>EXPLORE COURSES
                            <i className={classes.moredown}>
                                <MdKeyboardArrowDown />
                                {
                                    Menus.map((menu) => {
                                        return (
                                            <li>{menu}</li>
                                        )
                                    })
                                }
                            </i>
                        </b>
                    </div>
                    <div className={classes.blogs}>
                        <b>BLOGS
                            <i className={classes.moredown}>
                                <MdKeyboardArrowDown />
                            </i>
                        </b>
                    </div>
                    <div className={classes.mba}>
                        <b>MANAGMENT&DEGREE
                            <i className={classes.moredown}>
                                <MdKeyboardArrowDown />
                            </i></b>
                    </div>

                    <div className={classes.top}>
                        <b>TOP INSTITUTES
                            <i className={classes.moredown}>
                                <MdKeyboardArrowDown />
                            </i>
                        </b>
                    </div>
                    <div className={classes.skill}>
                        <b>EXPLORE SKILL
                            <i className={classes.moredown}>
                                <MdKeyboardArrowDown />
                            </i>
                        </b>

                    </div>
                    <div className={classes.more}>
                        <b>MORE
                            <i className={classes.moredown}>
                                <MdKeyboardArrowDown />
                            </i>
                        </b>
                    </div>
                    <form className={classes.form}>
                        <label for="search">
                            <div className={classes.search}>
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                                    <g>
                                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                    </g>
                                </svg>
                            </div>
                            <input className={classes.input} type="text" required="" placeholder="Search" id="search" />
                            <div className={classes.fancybg}></div>

                        </label>
                    </form>

                    {
                        isopen ?
                            (<div className={classes.box1}>
                                <div className={classes.box2}>
                                    <p className={classes.logout} onClick={() => {
                                        const conform = window.confirm("Are You Confirm To Logout")
                                        if (conform) {
                                            dispatch(logout(false))
                                            navigat('/login')
                                        }
                                        console.log(dispatch);
                                    }}>Logout</p>
                                </div>
                            </div>)
                            : (<></>)
                    }
                    <p onClick={() => setIopen(true)}> Logout</p>
                </div>
            </div >

        </div>

    )
}

export default Navigator;