import express from 'express';
const router = express.Router();
import { getMovieReviews, addMovieReviews, updateMovieReview, deleteMovieReview, createMovieReview, deleteAllMovieReviews } from '../controllers/reviewController';

router.route('/').get(getMovieReviews);

router
  .route('/admin/')
  .post(addMovieReviews) // ~addReviewToCart should not have admin
  .delete(deleteAllMovieReviews);

// router.route('/review/:id').get(getReview);

router
  .route('/review/:id')
  .patch(updateMovieReview)
  .delete(deleteMovieReview);

router
  .route('/review/new')
  .post(createMovieReview);
  // .post(isAuthenticatedUser, authorizeRoles('admin'), createMovieReview);

// router.route('/movie/generateToken')
//   .get(sendToken)

export default router;
