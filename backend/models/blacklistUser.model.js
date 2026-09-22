import { model, Schema } from 'mongoose'

const blacklistUserSchema = new Schema({
    token: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now(), expire: 86400 }
})

const blacklistUserModel = model('blacklist-user', blacklistUserSchema);
export default blacklistUserModel;