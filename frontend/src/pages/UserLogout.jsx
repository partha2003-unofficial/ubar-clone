import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const UserLogout = () => {

  const navigate = useNavigate()
  const token = localStorage.getItem('token');

  useEffect(() => {
    console.log(token)
    if (!token) {
      navigate('/logout')
      return
    }
    axios.get(`${process.env.VITE_API_BASE_URL}/user/logout`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((data) => {
        console.log(data)
        if (data.status === 200) {
          localStorage.removeItem('token');
          navigate('/')
        }
      })
      .catch((error) => { console.error(error) })
  }, [token])

  return (
    <div>
      user logout successful
    </div>
  )
}

export default UserLogout
