import APIFeatures from "../utils/apiFeatures"
import catchAsync from "../utils/catchAsync"
// import errorHandler from "../utils/errorHandler"
import Reviews from "../models/reviewModel"
import { NextFunction, Request, Response } from "express"
import { Document, Model } from "mongoose"
import MovieReviewsModel from "../interfaces/movieReview.interface"
import QueryString from "../interfaces/queryString.interface"
import ErrorHandler from "../utils/errorHandler"

// Movie Review Controller
type MovieReviewsDocument = Document & MovieReviewsModel;
type NewMovieReviewsModel = Model<MovieReviewsDocument>;

export const getMovieReviews = catchAsync(
  async (
    req: Request<unknown, unknown, unknown, QueryString>,
    res: Response,
    next: NextFunction
  ) => {
    console.log("req.query", req.query);
    
    const {movieId} = req.query
    const allReviews = await Reviews.find({movieId: movieId})
    const features = new APIFeatures<
      MovieReviewsDocument,
      NewMovieReviewsModel
    >(Reviews.find(), req.query)
      .filter()
      .sort()
      .paginate()
      .limitFields();
    const reviews = await features.query;
    console.log("reviews", reviews);
    
    res.status(200).json({
      status: "success",
      total: allReviews.length,
      length: reviews.length,
      data: {
        reviews,
      },
    });
  }
);

export const addMovieReviews = catchAsync(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const reviews = await Reviews.insertMany(req.body)

    if(!reviews)
        return next(new ErrorHandler('Unable to add Movie Reviews', 500))

    res.status(200).json({
      status: "success",
      length: reviews.length,
      data: {
        reviews
      }
    })
  }
);
export const deleteAllMovieReviews = catchAsync(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const reviews = await Reviews.deleteMany();

    res.status(200).json({
      status: "success",
      data: {
        reviews: null,
      },
    }); 
  }
);

export const deleteMovieReview = catchAsync(
  async (
    req: Request, 
    res: Response, next: 
    NextFunction
  ) => {
    const review = await Reviews.findByIdAndDelete(req.params.id);

    if (!review) {
      return next(
        new ErrorHandler(`Movie not found by the ID ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      status: "success",
      data: {
        review: null,
      },
    });
  }
);

export const createMovieReview = catchAsync(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const movie = await Reviews.create(req.body);

    if (!movie) {
      return next(new ErrorHandler("Movie not created", 500));
    }

    res.status(200).json({
      status: "success",
      data: {
        movie,
      },
    });
  }
);

export const updateMovieReview = catchAsync(
  async (
    req:Request, 
    res: Response, 
    next: NextFunction
    ) => {
      const review = await Reviews.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      })

      if(!review){
        return next(new ErrorHandler("Review not found", 500));
      }

      res.status(200).json({
        status: "success",
        data: {
          review
        }
      })
    }
)

