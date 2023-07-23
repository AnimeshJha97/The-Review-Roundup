import catchAsync from "../utils/catchAsync"
import jwt from "jsonwebtoken"
import ErrorHandler from "../utils/errorHandler"
import { Request, Response, NextFunction } from "express"
// import User from "../models/user"

// check if user is authenticated
export const isAuthenticatedUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const {token} = req.cookies

    if(!token) {
        return next(new ErrorHandler('Login first to access', 500))
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET)
    // GET USER PROFILE
    // const user = await User.findById(decode.id)

    next()
})

interface MyRequest extends Request {
    user: {
        role: string;
    }
}

export const authorizeRoles = (...roles) => {
    return (req: MyRequest, res: Response, next: NextFunction) => {
        if(!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role ${req.user.role} is not authorised to access this role`, 403))
        }
        next()
    }
}