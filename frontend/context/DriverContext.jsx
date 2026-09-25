import React, { createContext, useState } from 'react'

export const DriverDataContext = createContext();

const DriverContext = ({ children }) => {

    const [driver, setDriver] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    const updateCaption = (captainData) => {
        setDriver(captainData)
    }

    const captainData = {
        driver,
        setDriver,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaption
    }

    return (
        <DriverDataContext.Provider value={captainData}>
            {children}
        </DriverDataContext.Provider>
    )
}

export default DriverContext
