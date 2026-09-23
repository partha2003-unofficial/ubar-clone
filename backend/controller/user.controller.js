import { validationResult } from "express-validator";
import { userModel } from "../models/user.model.js";
import blacklistUserModel from "../models/blacklistUser.model.js";

async function createUser(request, response) {

    const errorValidation = validationResult(request);

    if (!errorValidation.isEmpty()) {
        return response.status(400).json({ errors: errorValidation.array() })
    }
    try {
        const { fullName, email, password } = request.body;
        if (!fullName || !email || !password) {
            response.status(404).json({ message: 'all required field are reqiured' })
        }

        const isUserAlreadyExist = await userModel.find({ email });
        if (isUserAlreadyExist) { return response.status(400).json({ message: 'user is already exist' }) }

        const hashedPassword = await userModel.createHashPassword(password);
        if (!hashedPassword) { return response.status(400).json({ message: 'password is not hashed' }) }
        
        const createUser = await userModel.create({
            fullName: { firstName: fullName.firstName, lastName: fullName.lastName },
            email,
            password: hashedPassword
        })

        createUser.password = undefined; // for hidding password
        const token = createUser.generateAuthToken()
        response.status(201).json({ token, createUser })

    } catch (error) {
        response.status(500).json({ message: 'internal server error', error: error })
    }
}

async function loginUser(request, response) {
    try {
        const validationError = validationResult(request);
        if (!validationError.isEmpty()) { return response.status(400).json({ message: 'all fields are required' }) };

        const { email, password } = request.body;
        if (!email || !password) { return response.status(400).json({ message: 'enter a email and password' }) };

        const userFind = await userModel.findOne({ email }).select('+password');
        const isMatchPassword = await userFind.comparePassword(password);
        if (!userFind || !isMatchPassword) {
            return response.status(400).json({ message: 'invalid email and password' });
        }

        userFind.password = undefined; // for secutiry purpose
        const token = userFind.generateAuthToken();
        response.cookie('token', token);
        return response.status(200).json({ token, userFind })

    } catch (error) {
        response.status(500).json({ message: 'internal server error', error: error })
    }
}

function userProfile(request, response) {
    return response.status(200).json({ user: request.user })
}

async function userLogout(request, response) {
    try {
        response.clearCookie('token');
        const token = request.cookies?.token || request.headers.authorization?.split(' ')[1];
        if (token) { await blacklistUserModel.create({ token }) }
        response.status(200).json({ message: ' logout  successful' })
    } catch (error) {
        response.status(500).json({ message: 'internal server error', error: error })
    }
}

export { createUser, loginUser, userProfile, userLogout }