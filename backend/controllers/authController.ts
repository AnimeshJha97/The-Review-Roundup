import User from '../models/userModel'
import catchAsync from "../utils/catchAsync"
import ErrorHandler from "../utils/errorHandler"
import { NextFunction, Request, Response } from "express"

export const registerUser = catchAsync(
    async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const {email, userName, password, avatar, role} = req.body;
    const user = await User.create({
        userName,
        email,
        password,
        avatar,
        role
    })

    if(!user)
        return next(new ErrorHandler('Unable to create new User', 500))

    res.status(200).json({
      status: "success",
      data: {
        user
      }
    })
  }
);

export const getAllUsers = catchAsync(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await User.find()

  if(!users)
        return next(new ErrorHandler('Unable to create new User', 500))

  res.status(200).json({
    status: "success",
    data: {
      users
    }
  })
})

export const getUser = catchAsync(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {userName, email} = req.query
  let user;
  if(userName)
    user = await User.findOne({userName})

  if(email)
    user = await User.findOne({email})

  if(!user){
    res.status(200).json({
      status: "fail",
      data: {
        user: null
      }
    })
  }

  res.status(200).json({
    status: "success",
    data: {
      user
    }
  })
})

export const loginUser = catchAsync(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {userName, password} = req.query

  const user = await User.findOne({userName})
  console.log("loginUser user", user);
  

  if(!user){
    res.status(200).json({
      status: "fail",
      data: {
        user: null
      }
    })
  }
  else{
    const flag = await user.comparePassword(String(password))
    console.log("comparePassword flag", flag);  
  
    if(!flag){
      res.status(200).json({
        status: "fail",
        data: {
          user: null
        }
      })
    }
  
    res.status(200).json({
      status: "success",
      data: {
        user
      }
    })
  }

})