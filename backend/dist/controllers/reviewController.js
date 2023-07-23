"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMovieReview = exports.createMovieReview = exports.deleteMovieReview = exports.deleteAllMovieReviews = exports.addMovieReviews = exports.getMovieReviews = void 0;
const apiFeatures_1 = __importDefault(require("../utils/apiFeatures"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
// import errorHandler from "../utils/errorHandler"
const reviewModel_1 = __importDefault(require("../models/reviewModel"));
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
exports.getMovieReviews = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("req.query", req.query);
    const { movieId } = req.query;
    const allReviews = yield reviewModel_1.default.find({ movieId: movieId });
    const features = new apiFeatures_1.default(reviewModel_1.default.find(), req.query)
        .filter()
        .sort()
        .paginate()
        .limitFields();
    const reviews = yield features.query;
    console.log("reviews", reviews);
    res.status(200).json({
        status: "success",
        total: allReviews.length,
        length: reviews.length,
        data: {
            reviews,
        },
    });
}));
exports.addMovieReviews = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = yield reviewModel_1.default.insertMany(req.body);
    if (!reviews)
        return next(new errorHandler_1.default('Unable to add Movie Reviews', 500));
    res.status(200).json({
        status: "success",
        length: reviews.length,
        data: {
            reviews
        }
    });
}));
exports.deleteAllMovieReviews = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = yield reviewModel_1.default.deleteMany();
    res.status(200).json({
        status: "success",
        data: {
            reviews: null,
        },
    });
}));
exports.deleteMovieReview = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield reviewModel_1.default.findByIdAndDelete(req.params.id);
    if (!review) {
        return next(new errorHandler_1.default(`Movie not found by the ID ${req.params.id}`, 404));
    }
    res.status(200).json({
        status: "success",
        data: {
            review: null,
        },
    });
}));
exports.createMovieReview = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = yield reviewModel_1.default.create(req.body);
    if (!movie) {
        return next(new errorHandler_1.default("Movie not created", 500));
    }
    res.status(200).json({
        status: "success",
        data: {
            movie,
        },
    });
}));
exports.updateMovieReview = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield reviewModel_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!review) {
        return next(new errorHandler_1.default("Review not found", 500));
    }
    res.status(200).json({
        status: "success",
        data: {
            review
        }
    });
}));
//# sourceMappingURL=reviewController.js.map