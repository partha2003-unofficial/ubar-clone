import { validationResult } from "express-validator";
import { userModel } from "../models/user.model.js";

async function createUser(request, response) {

    const errorValidation = validationResult(request);

    if (!errorValidation.isEmpty()) {
        return response.status(400).json({ errors: errorValidation.array() })
    }
    const { fullName, email, password } = request.body;
    if (!fullName || !email || !password) {
        throw new Error("enter all required fields");
    }

    try {
        const hashedPassword = await userModel.createHashPassword(password);
        const createUser = await userModel.create({
            fullName: { firstName: fullName.firstName, lastName: fullName.lastName },
            email,
            password: hashedPassword
        })

        const token = createUser.generateAuthToken()
        response.status(201).json({ token, createUser })

    } catch (error) {
        response.status(500).json({ message: 'internal server error', error: error })
    }
}

export { createUser }