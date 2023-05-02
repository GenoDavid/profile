import React, { useState } from 'react';
import classes from './Navigator.module.css';
import image from '../../image/Untitled-3.png';
import { CgSearch } from "react-icons/cg";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/User';
import { Alert } from 'react-bootstrap';
import { useRef } from 'react'
import { useEffect } from 'react';


const Navigator = () => {

    const navigat = useNavigate()
    const dispatch = useDispatch()
    const [isopen, setIopen] = useState(false)


    const { Menus } = useSelector(state => state.image)
    const [open, setOpen] = useState(false)
    // const menuref = useRef()
    // const listref = useRef()

    // window.addEventListener('click', (e) => {
    //     if (e.target !== listref.current || e.target !== menuref.current) { setOpen(false) }
    // })

    // useEffect(() => {
    //     const handler = (e) => {
    //         if (menuref.current && menuref.current.contains(e.target)) {
    //             setOpen(false);
    //             console.log(e);
    //         }
    //     };

    //     document.addEventListener("mousedown", handler);

    //     return () => {
    //         document.removeEventListener("mousedown", handler);
    //     };
    // }, [menuref]);
    return (
        <div>
            <div classNam e={classes.conatiner} >
                <div className={classes.navibar}>
                    <img src={image} alt='logo' className={classes.logo} />
                    <div className={classes.explore} onMouseLeave={() => setOpen(!open)} onMouseEnter={() => setOpen(!open)}>
                        <b>EXPLORE COURSES</b>
                        <i className={classes.moredown}>
                            <MdKeyboardArrowDown />
                            {/* {
                                open && (<div className=''>
                                    {
                                        Menus.map((menu) => {
                                            return (
                                                <li key={menu} onClick={() => setOpen(false)} className={classes.popup}>{menu}</li>
                                            )
                                        })
                                    }
                                </div>)
                            } */}
                            <div className={classes.popup}>
                                {
                                    open && Menus.map((menu) => {
                                        return (
                                            <ul>
                                                <li key={menu} onClick={() => setOpen(false)}>{menu}</li>

                                            </ul>)
                                    })
                                }
                            </div>
                        </i>

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


                    <div className={classes.box1}>
                        <p className={classes.logout} onClick={() => {
                            const conform = window.confirm("Are You Confirm To Logout")
                            if (conform) {
                                dispatch(logout(false))
                                navigat('/login')
                            }
                            // console.log(dispatch);
                        }} >Logout</p>
                    </div>



                    <p onClick={() => setIopen(true)}> Logout</p>
                </div>
            </div >
        </div>
    )
}

export default Navigator;