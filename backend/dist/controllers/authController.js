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
exports.loginUser = exports.getUser = exports.getAllUsers = exports.registerUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
exports.registerUser = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, userName, password, avatar, role } = req.body;
    const user = yield userModel_1.default.create({
        userName,
        email,
        password,
        avatar,
        role
    });
    if (!user)
        return next(new errorHandler_1.default('Unable to create new User', 500));
    res.status(200).json({
        status: "success",
        data: {
            user
        }
    });
}));
exports.getAllUsers = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userModel_1.default.find();
    if (!users)
        return next(new errorHandler_1.default('Unable to create new User', 500));
    res.status(200).json({
        status: "success",
        data: {
            users
        }
    });
}));
exports.getUser = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, email } = req.query;
    let user;
    if (userName)
        user = yield userModel_1.default.findOne({ userName });
    if (email)
        user = yield userModel_1.default.findOne({ email });
    if (!user) {
        res.status(200).json({
            status: "fail",
            data: {
                user: null
            }
        });
    }
    res.status(200).json({
        status: "success",
        data: {
            user
        }
    });
}));
exports.loginUser = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, password } = req.query;
    const user = yield userModel_1.default.findOne({ userName });
    console.log("loginUser user", user);
    if (!user) {
        res.status(200).json({
            status: "fail",
            data: {
                user: null
            }
        });
    }
    else {
        const flag = yield user.comparePassword(String(password));
        console.log("comparePassword flag", flag);
        if (!flag) {
            res.status(200).json({
                status: "fail",
                data: {
                    user: null
                }
            });
        }
        res.status(200).json({
            status: "success",
            data: {
                user
            }
        });
    }
}));
//# sourceMappingURL=authController.js.map