import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'
import { generateAuthToken } from '../services/jwt.service.js'

const driverSchema = new Schema({
    fullName: {
        firstName: { type: String, required: true, minlength: [3, 'first name must be 3 character'] },
        lastName: { type: String, minlength: [3, 'last name is must be 3 character'] }
    },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true, lowercase: true },
    password: { type: String, required: true, select: false, minlength: [6, 'password must be atleast 6 character'] },
    socketId: { type: String },
    status: { type: String, enum: ['active', 'inactive'] },
    vehical: {
        color: { type: String, required: true, minlength: [3, 'vehical color is must be 3 length word'] },
        NumberPlate: { type: String, required: true, minlength: [3, 'vehical numberPlate is must be 3 length'] },
        capacity: { type: Number, required: true, minlength: [1, 'capacity must be 1 '] },
        vehicalType: { type: String, required: true, enum: ['car', 'motorcycle', 'auto'] }
    },
    location: {
        lat: { type: Number },
        lng: { type: Number }
    }
})

driverSchema.methods.createAuthToken = function () {
    const payload = {
        id: this.id,
        name: this.fullName,
        email: this.email
    }
    return generateAuthToken(payload);
}

driverSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

driverSchema.statics.createHashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const driverModel = model('driver_model', driverSchema);
export default driverModel;