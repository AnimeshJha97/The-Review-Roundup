import { Request, Response, NextFunction } from "express"

const catchAsyncFunc = fn => {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req, res, next).catch(next)
    }
}

export default catchAsyncFunc