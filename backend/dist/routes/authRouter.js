"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const authController_1 = require("../controllers/authController");
router
    .route('/')
    .get(authController_1.getAllUsers);
router
    .route('/register')
    .post(authController_1.registerUser);
router
    .route('/userCheck')
    .get(authController_1.getUser);
router
    .route('/login')
    .get(authController_1.loginUser);
exports.default = router;
//# sourceMappingURL=authRouter.js.map