import { useState } from 'react'
import './App.css'
import Navigator from './component/navigator/Navigator'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Portal from './Portal'
import Login from './component/login/Login'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} />

          <Route path='/' element={<Portal />}>
            <Route path='/' element={<Home />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
