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
exports.deleteAllMovies = exports.deleteMovie = exports.updateMovie = exports.createMovie = exports.addMovies = exports.getMovie = exports.getAllMovies = void 0;
const apiFeatures_1 = __importDefault(require("../utils/apiFeatures"));
const movieModel_1 = __importDefault(require("../models/movieModel"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
//Movie Controller
exports.getAllMovies = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const features = new apiFeatures_1.default(movieModel_1.default.find(), req.query)
        .filter()
        .sort()
        .paginate()
        .limitFields();
    const movies = yield features.query;
    // if(!movies) 
    //   return next(new ErrorHandler('No movies found', 500))
    res.status(200).json({
        status: "success",
        length: movies.length,
        data: {
            movies,
        },
    });
}));
exports.getMovie = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = yield movieModel_1.default.findById(req.params.id);
    if (!movie) {
        return next(new errorHandler_1.default(`Movie not found by the ID ${req.params.id}`, 404));
    }
    res.status(200).json({
        status: "success",
        data: {
            movie,
        },
    });
}));
exports.addMovies = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // req.body.user = req.user.id;
    const movies = yield movieModel_1.default.insertMany(req.body);
    if (!movies) {
        return next(new errorHandler_1.default("Movies not added", 500));
    }
    res.status(200).json({
        status: "success",
        length: movies.length,
        data: {
            movies,
        },
    });
}));
exports.createMovie = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // req.body.user = req.user.id
    const movie = yield movieModel_1.default.create(req.body);
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
exports.updateMovie = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = yield movieModel_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!movie) {
        return next(new errorHandler_1.default(`Movie not found by the ID ${req.params.id}`, 404));
    }
    res.status(200).json({
        status: "success",
        data: {
            movie,
        },
    });
}));
exports.deleteMovie = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = yield movieModel_1.default.findByIdAndDelete(req.params.id);
    if (!movie) {
        return next(new errorHandler_1.default(`Movie not found by the ID ${req.params.id}`, 404));
    }
    res.status(200).json({
        status: "success",
        data: {
            movie: null,
        },
    });
}));
exports.deleteAllMovies = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const movies = yield movieModel_1.default.deleteMany();
    res.status(200).json({
        status: "success",
        data: {
            movies: null,
        },
    });
}));
//# sourceMappingURL=movieController.js.map