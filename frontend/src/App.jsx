import { Route, Routes } from 'react-router-dom'
import Login from './pages/UserLogin.jsx'
import Signup from './pages/UserSignUp.jsx'
import Home from './pages/Home.jsx'
import Driverlogin from './pages/DriverLogin.jsx'
import Driversignup from './pages/DriverSignUp.jsx'
import './App.css'
import Start from './pages/Start.jsx'
import UserProtected from '../components/UserProtected.jsx'
import UserLogout from './pages/UserLogout.jsx'
import DriverProtected from '../components/DriverProtected.jsx'
import DriverHome from './pages/DriverHome.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/driver-login' element={<Driverlogin />} />
        <Route path='/driver-signup' element={<Driversignup />} />
        <Route path='/home' element={<UserProtected> <Home /></UserProtected>} />
        <Route path='/user-logout' element={<UserProtected> <UserLogout /></UserProtected>} />
        <Route path='/driver-home' element={<DriverProtected> <DriverHome /></DriverProtected>} />
      </Routes>
    </div>
  )
}

export default App
