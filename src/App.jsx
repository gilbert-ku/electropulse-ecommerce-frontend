import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import LogIn from './components/auth/Login'
import SignUp from './components/auth/SignUp'
const App = () =>{

  return (
    <>
      <div>
        <Navbar/>
        
        <LogIn />
        <SignUp />

        <Footer />
        
      </div>
    </>
  )
}

export default App
