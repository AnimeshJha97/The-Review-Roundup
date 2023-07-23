import express from 'express';
const router = express.Router();

import {
    getUser,
    registerUser,
    getAllUsers,
    loginUser
} from '../controllers/authController'

router
    .route('/')
    .get(getAllUsers)

router
    .route('/register')
    .post(registerUser)

router
    .route('/userCheck')
    .get(getUser)

router
    .route('/login')
    .get(loginUser)

export default router;