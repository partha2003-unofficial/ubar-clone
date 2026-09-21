import { model, Schema } from "mongoose";
import bcrypt from 'bcrypt'
import { generateAuthToken } from "../services/jwt.service.js";

const userSchema = new Schema({
    fullName: {
        firstName: { type: String, required: true, minlength: [3, 'First Name must be at least 3 character'] },
        lastName: { type: String, minlength: [2, 'Last Name is must be atleat 2 character'] }
    },
    email: { type: String, required: true, unique: true, minlength: [5, 'email is must be 5 character'] },
    password: { type: String, required: true, select: false, minlength: [6, 'password is must be 5 character'] },
    socketId: { type: String }
}, { timestamps: true })

userSchema.methods.generateAuthToken = function () {
    const payload = {
        id: this.id,
        name: this.fullName,
        email: this.email
    }
    return generateAuthToken(payload)
}

userSchema.statics.createHashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

const userModel = model('userModel', userSchema);

export { userModel } 