import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext.jsx';

const UserProtected = ({ children }) => {
    const navigate = useNavigate();

    const { setUser } = useContext(UserDataContext)
    const [isLoading, setIsLodding] = useState(true);

    const token = localStorage?.getItem('token')

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }

        axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/userProfile`, {
            headers: {
                Authorization: `Bearer: ${token}`
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    setUser(response.data.user);
                    setIsLodding(false);
                }
            })
            .catch((error) => {
                localStorage.removeItem('token');
                navigate('/login');
            })

    }, [token])

    if (!token) { return null }
    if (isLoading) { return <h1>loadding...</h1> }

    return (
        <>
            {children}
        </>
    )
}

export default UserProtected
