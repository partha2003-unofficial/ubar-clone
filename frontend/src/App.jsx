import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/UserLogin.jsx'
import Signup from './pages/UserSignUp.jsx'
import Driverlogin from './pages/DriverLogin.jsx'
import Driversignup from './pages/DriverSignUp.jsx'
import './App.css'
import { useContext } from 'react'
import { UserDataContext } from '../context/UserContext.jsx'

function App() {
  const ans = useContext(UserDataContext)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/driver-login' element={<Driverlogin />} />
        <Route path='/driver-signup' element={<Driversignup />} />
      </Routes>
    </div>
  )
}

export default App
