const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SensorSchema = new Schema({
    uid: { type: Number, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    location: { type: String, required: true }
});

module.exports = mongoose.model('Sensor', SensorSchema);