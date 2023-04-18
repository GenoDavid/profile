import React from 'react'
import Navigator from './component/navigator/Navigator'
import { Outlet } from 'react-router-dom'

const Portal = () => {
    return (
        <div>
            <Navigator />
            <Outlet />
        </div>
    )
}

export default Portal