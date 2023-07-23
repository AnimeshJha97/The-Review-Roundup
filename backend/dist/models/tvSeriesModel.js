"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const tvSeriesSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    creators: {
        type: [String],
        required: true
    },
    genres: {
        type: [String],
        required: true
    },
    actors: {
        type: [String],
        required: true
    },
    seasons: {
        type: Number,
        required: true
    },
    episodes: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const TVSeries = mongoose_1.default.model('TVSeries', tvSeriesSchema);
exports.default = TVSeries;
//# sourceMappingURL=tvSeriesModel.js.map