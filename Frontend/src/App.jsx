import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element={<Start />}/>
        <Route path = "/login" element={<UserLogin />}/>
        <Route path = "/signup" element={<UserSignup />}/>
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path = "/riding" element={<Riding />}/>
        <Route path = "/captain-riding" element={<CaptainRiding />}/>
        <Route path = "/home" element={
          <UserProtectedWrapper>
            <Home/>
          </UserProtectedWrapper>
        }/>
        <Route path = "/user/logout" element={<UserProtectedWrapper>
          <UserLogout/>
        </UserProtectedWrapper>}/>
        <Route path='/captain-home' element={<CaptainHome/>} />
      </Routes>
    </div>
  )
}

export default App
