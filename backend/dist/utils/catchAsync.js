"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsyncFunc = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};
exports.default = catchAsyncFunc;
//# sourceMappingURL=catchAsync.js.map