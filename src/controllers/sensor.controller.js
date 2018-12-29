const Sensor = require('../models/sensor.model');

exports.create = (req, res, next) => {
    const sensor = new Sensor({
        uid: req.body.uid,
        name: req.body.name,
        type: req.body.type,
        location: req.body.location
    });

    sensor.save((error) => {
        if (error) {
            res.sendStatus(400) // BAD REQUEST
            return next(error);
        }

        res.sendStatus(201); // CREATED
    });
};

exports.details = (req, res, next) => {
    Sensor.findOne({ uid: req.params.uid }, (error, sensor) => {
        if (error) {
            res.sendStatus(400) // BAD REQUEST
            return next(error);
        }

        res.send(sensor);
    });
};

exports.update = function (req, res, next) {
    Sensor.findOneAndUpdate({ uid: req.params.uid }, { $set: req.body }, (error, sensor) => {
        if (error) {
            res.sendStatus(400) // BAD REQUEST
            return next(error);
        }

        res.send(sensor);
    });
};

exports.delete = function (req, res, next) {
    Sensor.findOneAndDelete({ uid: req.params.uid }, (error) => {
        if (error) {
            res.sendStatus(400) // BAD REQUEST
            return next(error);
        }
        
        res.sendStatus(200); // OK
    });
};