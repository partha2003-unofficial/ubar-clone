import axios from 'axios';
import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DriverDataContext } from '../context/driverContext';

const DriverProtected = ({ children }) => {

    const { driver, setDriver } = useContext(DriverDataContext)
    const [lodding, setLodding] = useState(true)

    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/driver-login');
        }

        axios.get(`${import.meta.env.VITE_API_BASE_URL}/driver/driverprofile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    setDriver(response.data.driver);
                    setLodding(false)
                }
            })
            .catch((error) => {
                localStorage.removeItem('token')
                navigate('/driver-login')
            })
    }, [token])

    if (!token) { return null } // if the token is not found on not chenge the token
    if (lodding) { return (<div>Loadding..</div>) }

    return (
        <>
            {children}
        </>
    )
}

export default DriverProtected
