import mongoose from "mongoose";

async function mongodbConnection() {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
            .then(() => console.log('mongodb connection successful!'))
            .catch((error) => console.log('mongodb connection failed.\n',error))
    } catch (error) {
        console.log('there is problem to connect in database', error)
    }
}

export { mongodbConnection }