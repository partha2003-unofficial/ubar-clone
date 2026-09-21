import env from 'dotenv'
env.config()
import express from 'express';
import cors from 'cors'
import userRoute from './routes/user.route.js'
import { mongodbConnection } from './config/db.connection.js';

const application = express();

mongodbConnection()

application.use(express.urlencoded({ extended: true }));
application.use(cors())
application.use(express.json());

application.use('/user/register', userRoute)

export default application;