const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  timestamp: { type: String, required: true },
  sensor: { type: String, required: true },
  unit: { type: String, required: true },
  value: { type: Number, required: true }
});

module.exports = mongoose.model('Record', RecordSchema);