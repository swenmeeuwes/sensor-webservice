const moment = require('moment');
const Record = require('../models/record.model');

exports.create = (req, res, next) => {
  const record = new Record({
    timestamp: moment().valueOf(), // Unix timestamp (milliseconds)
    sensor: req.body.sensor,
    unit: req.body.unit,
    value: req.body.value
  });

  record.save((error) => {
    if (error) {
      res.sendStatus(400); // BAD REQUEST
      return next(error);
    }

    res.sendStatus(201); // CREATED
  });
};