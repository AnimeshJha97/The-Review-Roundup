"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const movieController_1 = require("../controllers/movieController");
// import { addMovieReviews, deleteAllMovieReviews, createMovieReview, getMovieReviews } from '../controllers/reviewController';
const authMiddleware_1 = require("../middleware/authMiddleware");
// movie router
router.route('/').get(movieController_1.getAllMovies);
router
    .route('/admin')
    .post(movieController_1.addMovies) // ~addMovieToCart should not have admin
    // .post(isAuthenticatedUser, authorizeRoles('admin'), addMovies) // ~addMovieToCart should not have admin
    .delete(movieController_1.deleteAllMovies);
// .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteAllMovies);
router.route('/:id').get(movieController_1.getMovie);
router
    .route('/admin/:id')
    .patch(authMiddleware_1.isAuthenticatedUser, (0, authMiddleware_1.authorizeRoles)('admin'), movieController_1.updateMovie)
    .delete(authMiddleware_1.isAuthenticatedUser, (0, authMiddleware_1.authorizeRoles)('admin'), movieController_1.deleteMovie);
router
    .route('/admin/new')
    .post(movieController_1.createMovie);
// .post(isAuthenticatedUser, authorizeRoles('admin'), createMovie);
// router.route('/movie/generateToken')
//   .get(sendToken)
// // movie review router
// router.route(`/reviews`).get(getMovieReviews);
// router
//   .route('/admin/reviews')
//   .post(addMovieReviews) // ~addMovieToCart should not have admin
//   // .post(isAuthenticatedUser, authorizeRoles('admin'), addMovies) // ~addMovieToCart should not have admin
//   .delete(deleteAllMovieReviews);
//   // .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteAllMovies);
// // router.route('/:id').get(getMovieReview);
// router
//   .route('/review/:id')
//   .patch(isAuthenticatedUser, authorizeRoles('admin'), updateMovie)
//   .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteMovie);
// router
//   .route('/review/new')
//   .post(createMovieReview);
//   // .post(isAuthenticatedUser, authorizeRoles('admin'), createMovie);
exports.default = router;
//# sourceMappingURL=movieRouter.js.map