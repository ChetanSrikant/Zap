import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import ZapLogo from './pages/ZapLogo'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element={<Home />}/>
        <Route path = "/login" element={<UserLogin />}/>
        <Route path = "/signup" element={<UserSignup />}/>
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path = "/zap" element={<ZapLogo />}/>
      </Routes>
    </div>
  )
}

export default App
