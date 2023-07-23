import mongoose from 'mongoose';

const tvSeriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  },
  creators: {
    type: [String],
    required: true
  },
  genres: {
    type: [String],
    required: true
  },
  actors: {
    type: [String],
    required: true
  },
  seasons: {
    type: Number,
    required: true
  },
  episodes: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const TVSeries = mongoose.model('TVSeries', tvSeriesSchema);

export default TVSeries;
