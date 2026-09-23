import { Router } from 'express'
const router = Router();
import { body } from 'express-validator';
import { authMiddleware_driver } from '../middleware/auth.middleware.js';
import { driverProfile, loginDriver, registerDriver } from '../controller/driver.controller.js';
import { userLogout } from '../controller/user.controller.js';

router.post('/register', [
    body('email').isEmail().withMessage('enter a valid email'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('enter a 6 length first name'),
    body('vehical.color').isLength({ min: 3 }).withMessage('vehical color is must be 3 length word'),
    body('vehical.NumberPlate').isLength({ min: 3 }).withMessage('vehical number plate is must be 3 length word'),
    body('vehical.capacity').isInt({ min: 1 }).withMessage('vehical capacity is must be 3 length word'),
    body('vehical.vehicalType').isIn(['car', 'motorcycle', 'auto']).withMessage('vehical vehicalType is must be 3 length word'),
], registerDriver)

router.post('/login', [
    body('email').isEmail().withMessage('enter a valid email id'),
    body('password').isLength({ min: 6 }).withMessage('enter a minimum length of 6 character of name')
], loginDriver)

router.get('/driverprofile', authMiddleware_driver, driverProfile)
router.get('/logout', authMiddleware_driver, userLogout)

export default router;