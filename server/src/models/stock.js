const mongoose = require('mongoose');
const { Schema } = mongoose;

const stockSchema = new Schema({
  company: String,
  marketPrice: Number,
  percentChange: Number,
  sector: String,
  listedDate: Date,
  paidUpCapital: Number,
  fiftyTwoWeeksHigh: Number,
  fiftyTwoWeeksLow: Number,
});

const Stock = mongoose.model('Stock', stockSchema);
module.exports = Stock;
