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
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
const userSchema = new mongoose_1.default.Schema({
    userName: {
        type: String,
        trim: true,
        required: true,
        maxLength: [30, 'Length cannot exceed 30 characters']
    },
    userId: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        validate: [validator_1.default.isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        minlength: [5, 'Password should be greater than 5 characters'],
        select: false
    },
    role: {
        type: String,
        default: "User"
    },
    status: {
        type: String,
        enum: ['verified', 'inactive', 'unverified'],
        default: 'unverified'
    },
    avatar: {
        url: {
            type: String,
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});
const User = mongoose_1.default.model('User', userSchema);
// If password not modified, don't encrypt, else encrypt
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified('password')) {
            next();
        }
        this.password = yield bcryptjs_1.default.hash(this.password, 10);
    });
});
// Match Password
userSchema.methods.comparePassword = function (enteredPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.compare(this.password, enteredPassword);
    });
};
// Return JWT Token
userSchema.methods.getJwtToken = function () {
    return jsonwebtoken_1.default.sign({ id: this.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    });
};
// Reset Token
userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto_1.default.randomBytes(20).toString('hex');
    this.resetPasswordToken = crypto_1.default.createHash('sha256').update(resetToken).digest('hex');
    this.resetPasswordExpire = new Date(Date.now() + 30 * 60 * 1000);
    console.log(this.resetPasswordExpire);
    console.log('token reset', resetToken, this.resetPasswordToken);
    // returns non-hashed token so that it can be compared later after hashing with the current hashed resetToken
    return resetToken;
};
exports.default = User;
//# sourceMappingURL=userModel.js.map