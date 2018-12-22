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
            res.sendStatus(400) // BAD REQUEST (todo: see if it was an actual bad request)
            return next(error);
        }

        res.sendStatus(201); // CREATED
    });
};

exports.details = (req, res, next) => {
    Sensor.findById(req.params.id, (error, sensor) => {
        if (error) {
            res.sendStatus(400) // BAD REQUEST (todo: see if it was an actual bad request)
            return next(error);
        }

        res.send(sensor);
    });
};

exports.update = function (req, res, next) {
    Sensor.findByIdAndUpdate(req.params.id, { $set: req.body }, (error, sensor) => {
        if (error) {
            res.sendStatus(400) // BAD REQUEST (todo: see if it was an actual bad request)
            return next(error);
        }
        res.sendStatus(200); // OK
    });
};

exports.delete = function (req, res, next) {
    Sensor.findByIdAndRemove(req.params.id, (error) => {
        if (error) {
            res.sendStatus(400) // BAD REQUEST (todo: see if it was an actual bad request)
            return next(error);
        }
        res.sendStatus(200); // OK
    });
};