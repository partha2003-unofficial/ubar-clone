import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const DriverProtected = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (!token) {
            navigate('/driver-login');
        }
    }, [token])
    if (!token) { return null }
    return (
        <>
            {children}
        </>
    )
}

export default DriverProtected
