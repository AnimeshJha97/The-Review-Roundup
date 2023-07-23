import mongoose from 'mongoose';

const cafeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  openingHours: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  menu: [{
    itemName: String,
    price: Number,
    ingredients: [String]
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Cafe = mongoose.model('Cafe', cafeSchema);

export default Cafe;
