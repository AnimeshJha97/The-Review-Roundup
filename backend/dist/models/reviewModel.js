"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const reviewSchema = new mongoose_1.default.Schema({
    movieId: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    reviewDate: {
        type: Date,
        default: Date.now()
    },
    userId: {
        type: String,
    },
    userName: {
        type: String,
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    }
});
const Reviews = mongoose_1.default.model('Reviews', reviewSchema);
exports.default = Reviews;
//# sourceMappingURL=reviewModel.js.map