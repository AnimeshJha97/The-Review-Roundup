import mongoose from 'mongoose';

const travelDestinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  attractions: [{
    name: String,
    description: String
  }],
  photos: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const TravelDestination = mongoose.model('TravelDestination', travelDestinationSchema);

export default TravelDestination;
