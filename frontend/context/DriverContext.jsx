import React, { createContext, useState } from 'react'

export const DriverDataContext = createContext();

const DriverContext = ({ children }) => {

    const [driver, setDriver] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    const updateDriver = (dirverData) => {
        setDriver(dirverData)
    }

    const driverData = {
        driver,
        setDriver,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaption
    }

    return (
        <DriverDataContext.Provider value={driverData}>
            {children}
        </DriverDataContext.Provider>
    )
}

export default DriverContext
