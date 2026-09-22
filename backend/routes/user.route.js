import { Router } from 'express'
import { body } from 'express-validator';
import { createUser, loginUser, userLogout, userProfile } from '../controller/user.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
const router = Router();

router.post('/register', [
    body('email').isEmail().withMessage('enter a valid email'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('enter a minimum length of 3 character of name')
], createUser)

router.post('/login', [
    body('email').isEmail().withMessage('enter a valid email id'),
    body('password').isLength({ min: 6 }).withMessage('enter a minimum length of 6 character of name')
], loginUser)

router.get('/userProfile', authMiddleware, userProfile)
router.get('/logout', authMiddleware, userLogout)

export default router;