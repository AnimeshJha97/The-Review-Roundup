"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const reviewController_1 = require("../controllers/reviewController");
router.route('/').get(reviewController_1.getMovieReviews);
router
    .route('/admin/')
    .post(reviewController_1.addMovieReviews) // ~addReviewToCart should not have admin
    .delete(reviewController_1.deleteAllMovieReviews);
// router.route('/review/:id').get(getReview);
router
    .route('/review/:id')
    .patch(reviewController_1.updateMovieReview)
    .delete(reviewController_1.deleteMovieReview);
router
    .route('/review/new')
    .post(reviewController_1.createMovieReview);
// .post(isAuthenticatedUser, authorizeRoles('admin'), createMovieReview);
// router.route('/movie/generateToken')
//   .get(sendToken)
exports.default = router;
//# sourceMappingURL=reviewRouter.js.map