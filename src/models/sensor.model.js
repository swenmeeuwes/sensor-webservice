const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const SensorSchema = new Schema({
    uid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    location: { type: String, required: true }
});

SensorSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Sensor', SensorSchema);