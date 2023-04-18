import React from 'react'
import classes from './Home.module.css'
import { useSelector } from 'react-redux'
import Banner from '../component/banner/Banner'

const Home = () => {
    const { banner } = useSelector(state => state.image)
    return (
        <div className={classes.home}>
            <div className={classes.container}>
                <div className={classes.banner}>
                    {
                        banner.map((item, index) => {
                            return (
                                <Banner key={index}
                                    img={item.imageSrc}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home