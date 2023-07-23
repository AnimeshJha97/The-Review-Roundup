"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const travelDestinationSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    attractions: [{
            name: String,
            description: String
        }],
    photos: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const TravelDestination = mongoose_1.default.model('TravelDestination', travelDestinationSchema);
exports.default = TravelDestination;
//# sourceMappingURL=destinationModel.js.map