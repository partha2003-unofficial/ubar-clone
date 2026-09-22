import blacklistUserModel from "../models/blacklistUser.model.js";
import { userModel } from "../models/user.model.js";
import { verifyAuthToken } from "../services/jwt.service.js";

async function authMiddleware(request, response, next) {
    const token = request.cookies?.token || request.headers.authorization?.split(' ')[1];
    if (!token) { return response.status(404).json({ message: 'token is not found!' }) }

    const isunauthorized = await blacklistUserModel.findOne({ token })
    if (isunauthorized) {
        response.status(401).json({ message: 'user unauthorized' });
    }

    try {
        const decode = verifyAuthToken(token);
        const user = await userModel.findById(decode.id);
        request.user = user;
        return next();
    } catch (error) {
        return response.status(404).json({ message: 'unauthorized user', error: error })
    }
}

export { authMiddleware }