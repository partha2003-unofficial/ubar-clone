import { validationResult } from 'express-validator'
import driverModel from '../models/driver.model.js';

async function registerDriver(request, response) {
    const errorValidation = validationResult(request);
    if (!errorValidation.isEmpty()) { return response.status(400).json({ message: 'enter valid required field', error: errorValidation.array() }) }

    try {
        const { fullName, email, password, status, vehical, location } = request.body;
        if (!fullName.firstName || !email || !password || !status || !vehical || !location) {
            return response.status(400).json({ message: 'enter valid required fields' })
        }
        // console.log(request.body)
        const isAllreadyExistDriver = await driverModel.findOne({ email });
        if (isAllreadyExistDriver) { return response.status(400).json({ message: 'unauthorized user || driver already exist' }) };

        const createHashPassword = await driverModel.createHashPassword(password);
        if (!createHashPassword) { return response.status(400).json({ message: 'password is not hashed!!' }) }

        const createDriver = await driverModel.create({
            fullName: { firstName: fullName.firstName, lastName: fullName.lastName },
            email,
            password: createHashPassword,
            status,
            vehical: {
                color: vehical.color,
                NumberPlate: vehical.NumberPlate,
                capacity: vehical.capacity,
                vehicalType: vehical.vehicalType
            },
            location
        })

        createDriver.password = undefined;
        const token = createDriver.createAuthToken()
        return response.status(200).json({ token, createDriver })
    } catch (error) {
        response.status(500).json({ message: 'inernal server error in register', error: error })
    }
}

async function loginDriver(request, response) {
    const errorValidation = validationResult(request);
    if (!errorValidation.isEmpty()) { return response.status(400).json({ message: 'enter valid required field', error: errorValidation.array() }) }

    try {
        const { email, password } = request.body;
        if (!email || !password) { response.status(400).json({ message: 'email and password are need' }) };

        const findDriver = await driverModel.findOne({ email }).select('+password');
        const isMatchPassword = await findDriver.comparePassword(password);
        if (!findDriver || !isMatchPassword) { return response.status(404).json({ message: 'invalid email and password' }) };

        findDriver.password = undefined;
        const token = findDriver.createAuthToken();
        response.cookie('token', token);
        return response.status(200).json({ message:'login successful',token, findDriver })

    } catch (error) {
        response.status(500).json({ message: 'internal server error' })
    }
}

function driverProfile(request, response) {
    return response.status(200).json({ driver: request.driver })
}

export { registerDriver, loginDriver, driverProfile }