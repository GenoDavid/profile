import { useState } from 'react'
import './App.css'
import Navigator from './component/navigator/Navigator'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Portal from './Portal'
import Login from './component/login/Login'
import { useSelector } from 'react-redux'

function App() {
  const { isgo } = useSelector(state => state.user)
  console.log(isgo);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          (<Route path='/' element={<Portal />}>
            <Route path='/' element={<Home />} />
          </Route>)
          (<Route path='/login' element={<Login />} />)
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
