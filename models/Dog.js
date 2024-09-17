const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: String, required: true },
  breed: { type: String, required: true },
  gender: { type: String, required: true },
  color: { type: String, required: true }
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;
