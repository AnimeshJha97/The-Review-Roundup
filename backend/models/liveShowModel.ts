import mongoose from 'mongoose';

const liveShowSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  performers: {
    type: [String],
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

const LiveShow = mongoose.model('LiveShow', liveShowSchema);

export default LiveShow;
