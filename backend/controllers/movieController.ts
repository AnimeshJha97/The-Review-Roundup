import APIFeatures from "../utils/apiFeatures";
import Movies from "../models/movieModel";
import catchAsync from "../utils/catchAsync";
import errorHandler from "../utils/errorHandler";
import { NextFunction, Request, Response } from "express";
import mongoose, { Document, Model, Query } from "mongoose";
import MovieModel from "../interfaces/movie.interface";
import QueryString from "../interfaces/queryString.interface";
import MovieReviewsModel from "../interfaces/movieReview.interface";
import ErrorHandler from "../utils/errorHandler";

type MovieDocument = Document & MovieModel;
type NewMovieModel = Model<MovieDocument>;

//Movie Controller
export const getAllMovies = catchAsync(
  async (
    req: Request<unknown, unknown, unknown, QueryString>,
    res: Response,
    next: NextFunction
  ) => {
    const features = new APIFeatures<MovieDocument, NewMovieModel>(
      Movies.find(),
      req.query
    )
      .filter()
      .sort()
      .paginate()
      .limitFields();
    const movies = await features.query;

    // if(!movies) 
    //   return next(new ErrorHandler('No movies found', 500))

    res.status(200).json({
      status: "success",
      length: movies.length,
      data: {
        movies,
      },
    });
  }
);

export const getMovie = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const movie = await Movies.findById(req.params.id);

    if (!movie) {
      return next(
        new errorHandler(`Movie not found by the ID ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      status: "success",
      data: {
        movie,
      },
    });
  }
);

export const addMovies = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // req.body.user = req.user.id;
    const movies = await Movies.insertMany(req.body);

    if (!movies) {
      return next(new errorHandler("Movies not added", 500));
    }

    res.status(200).json({
      status: "success",
      length: movies.length,
      data: {
        movies,
      },
    });
  }
);

export const createMovie = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // req.body.user = req.user.id
    const movie = await Movies.create(req.body);

    if (!movie) {
      return next(new errorHandler("Movie not created", 500));
    }

    res.status(200).json({
      status: "success",
      data: {
        movie,
      },
    });
  }
);

export const updateMovie = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const movie = await Movies.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!movie) {
      return next(
        new errorHandler(`Movie not found by the ID ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      status: "success",
      data: {
        movie,
      },
    });
  }
);

export const deleteMovie = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const movie = await Movies.findByIdAndDelete(req.params.id);

    if (!movie) {
      return next(
        new errorHandler(`Movie not found by the ID ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      status: "success",
      data: {
        movie: null,
      },
    });
  }
);

export const deleteAllMovies = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const movies = await Movies.deleteMany();

    res.status(200).json({
      status: "success",
      data: {
        movies: null,
      },
    });
  }
);

