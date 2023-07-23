"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const movieSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    releaseDate: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    writer: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    actors: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        required: true
    },
    rated: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        postor: {
            type: String,
            required: true
        },
        banner: {
            type: String,
            required: true
        },
        backdrops: {
            type: [String],
            required: true
        }
    },
    type: {
        type: String,
        required: true
    },
    video: {
        type: [String],
        required: true
    },
    country: {
        type: String,
        required: true
    }
});
const Movie = mongoose_1.default.model('Movie', movieSchema);
exports.default = Movie;
//# sourceMappingURL=movieModel.js.map