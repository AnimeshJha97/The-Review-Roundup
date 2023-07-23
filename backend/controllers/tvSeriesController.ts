// import ErrorHandler from "../utils/errorHandler";
// import catchAsync from "../utils/catchAsync";
// import TvSeries from "../models/tvSeriesModel"
// import APIFeatures from "../utils/apiFeatures";
// import { Request, Response, NextFunction } from "express";

// export const getTvSeries = catchAsync(async (req: Request, res:Response, next: NextFunction) => {
//     const tvSeries = await TvSeries.findById(req?.params.id)

//     if(!tvSeries){
//         return next(new ErrorHandler(`Tv Series not found by id ${req.params.id}`, 404));
//     }

//     res.status(200).json({
//         status: "success",
//         data: {
//             tvSeries
//         }
//     })
// })

// export const getAllTvSeries = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
//     const features = new APIFeatures(TvSeries.find(), req.query).filter().sort().paginate().limitFields()
//     const tvSeries = await features.query;

//     res.status(200).json({
//         status: "succcess",
//         length: tvSeries.length,
//         data: {
//             tvSeries
//         }
//     })
// })

// // export const addTvSeries = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    
// // })

// export const deleteAllTvSeries = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

// })

// export const updateTvSeries = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

// })

// export const createTvSeries = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

// })
