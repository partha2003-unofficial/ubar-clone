import { Router } from 'express'
import { body } from 'express-validator';
import { createUser } from '../controller/user.controller.js';
const router = Router();

router.post('/', [
    body('email').isEmail().withMessage('enter a valid email'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('enter a minimum length of 3 character of name')
], createUser)

export default router;