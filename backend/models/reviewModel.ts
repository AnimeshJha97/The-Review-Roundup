import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  movieId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
  reviewDate: {
    type: Date,
    default: Date.now()
  },
  userId: {
    type: String,
  },
  userName: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0
  },
  dislikes: {
    type: Number,
    default: 0
  }
});

const Reviews = mongoose.model('Reviews', reviewSchema);

export default Reviews;
