import env from 'dotenv'
env.config()
import jwt from 'jsonwebtoken'

function generateAuthToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "24h" });
}

function verifyAuthToken(token){
    return jwt.verify(token,process.env.JWT_SECRET);
}
export { generateAuthToken, verifyAuthToken }