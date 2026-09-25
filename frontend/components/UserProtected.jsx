import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UserProtected = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage?.getItem('token')
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [token])
    if (!token) { return null }
    return (
        <>
            {children}
        </>
    )
}

export default UserProtected
