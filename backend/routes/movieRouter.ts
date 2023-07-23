import express from 'express';
const router = express.Router();
import { getAllMovies, getMovie, addMovies, updateMovie, deleteMovie, createMovie, deleteAllMovies } from '../controllers/movieController';
// import { addMovieReviews, deleteAllMovieReviews, createMovieReview, getMovieReviews } from '../controllers/reviewController';


import { isAuthenticatedUser, authorizeRoles } from '../middleware/authMiddleware';

// movie router
router.route('/').get(getAllMovies);

router
  .route('/admin')
  .post(addMovies) // ~addMovieToCart should not have admin
  // .post(isAuthenticatedUser, authorizeRoles('admin'), addMovies) // ~addMovieToCart should not have admin
  .delete(deleteAllMovies);
  // .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteAllMovies);

router.route('/:id').get(getMovie);

router
  .route('/admin/:id')
  .patch(isAuthenticatedUser, authorizeRoles('admin'), updateMovie)
  .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteMovie);

router
  .route('/admin/new')
  .post(createMovie);
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

export default router;
