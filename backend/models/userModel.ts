import mongoose, { Document, Model } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { NextFunction } from 'express';

// validator for email validation, 
// bcryptjs for hashing passwords, 
// jsonwebtoken for creating JSON Web Tokens, and 
// crypto for generating secure random bytes and hashing tokens.

interface IUser extends Document {
  userName: string;
  role: string;
  status: "verified" | "inactive" | "unverified";
  createdAt: Date;
  password?: string;
  resetPasswordToken?: string;
  resetPasswordExpire?: Date;
  userId?: string;
  email?: string;
  avatar?: {
    url: string;
  };
  comparePassword: (enteredPassword: string) => Promise<boolean>;
  getJwtToken: () => string;
  getResetPasswordToken: () => string;
}

const userSchema = new mongoose.Schema<IUser>({
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
        validate: [validator.isEmail, 'Please enter a valid email']
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

const User: Model<IUser> = mongoose.model('User', userSchema);

// If password not modified, don't encrypt, else encrypt
userSchema.pre('save', async function (next: NextFunction) {
    if (!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);
})

// Match Password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(this.password, enteredPassword)
}

// Return JWT Token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    })
}

// Reset Token
userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString('hex')

    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    this.resetPasswordExpire = new Date(Date.now() + 30 * 60 * 1000)
    console.log(this.resetPasswordExpire)
    console.log('token reset', resetToken, this.resetPasswordToken)

    // returns non-hashed token so that it can be compared later after hashing with the current hashed resetToken
    return resetToken
}


export default User;
