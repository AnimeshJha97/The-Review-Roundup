"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cafeSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    openingHours: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    menu: [{
            itemName: String,
            price: Number,
            ingredients: [String]
        }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const Cafe = mongoose_1.default.model('Cafe', cafeSchema);
exports.default = Cafe;
//# sourceMappingURL=cafeModel.js.map