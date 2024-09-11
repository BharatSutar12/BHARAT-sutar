// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
// import SignIn from './pages/signIn'
import Login from './Form/Login'
import Home from './pages/Home'
import Logout from './Form/Logout'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/Home2' element={<Logout />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
