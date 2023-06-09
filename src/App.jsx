import { useState } from 'react'
import './App.css'
import Navigator from './component/navigator/Navigator'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Portal from './Portal'
import Login from './component/login/Login'
import { useSelector } from 'react-redux'
import Error from './component/Error'
import Register from './component/creataccount/Register'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Userview from './component/userview/Userview'
import User from './features/User'

function App() {
  const { isgo } = useSelector(state => state.user)
  console.log(isgo);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
            isgo ? (<Route path='/' element={<Portal />}>
              <Route path='/' element={<Home />} />
              <Route path='user' element={<User />} />
              <Route path='userview/:id' element={<Userview />} />
            </Route>) :
              (<>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<Navigate to='/login' />} />
              </>)
          }
          <Route path='*' element={<Error />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
