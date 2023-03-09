const mongoose = require('mongoose');

const quotesSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
  translation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Quote', quotesSchema);
