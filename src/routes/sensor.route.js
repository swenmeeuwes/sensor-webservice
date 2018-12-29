const express = require('express');
const router = express.Router();

const sensorController = require('../controllers/sensor.controller');

/**
 * @api {post} /create Create Sensor
 * @apiVersion 1.0.0
 * @apiName CreateSensor
 * @apiGroup Sensor
 *
 * @apiParam {String} uid Sensors unique ID.
 * @apiParam {String} name Sensors name.
 * @apiParam {String} type Sensors type.
 * @apiParam {String} location Sensors location.
 * 
 * @apiSuccess {String} uid Sensors unique ID.
 * @apiSuccess {String} name Sensors name.
 * @apiSuccess {String} type Sensors type.
 * @apiSuccess {String} location Sensors location.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "uid": "73DKQ9IU",
 *          "name": "Living Room",
 *          "type": "Temperature",
 *          "Location": "Living Room"
 *     }
 */
router.post('/create', sensorController.create);

/**
 * @api {get} /:uid Sensor Details
 * @apiVersion 1.0.0
 * @apiName GetSensor
 * @apiGroup Sensor
 *
 * @apiSuccess {String} uid Sensors unique ID.
 * @apiSuccess {String} name Sensors name.
 * @apiSuccess {String} type Sensors type.
 * @apiSuccess {String} location Sensors location.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "uid": "73DKA9EU",
 *          "name": "Living Room",
 *          "type": "Temperature",
 *          "Location": "Living Room"
 *     }
 */
router.get('/:uid', sensorController.details);

/**
 * @api {put} /:uid Update Sensor
 * @apiVersion 1.0.0
 * @apiName UpdateSensor
 * @apiGroup Sensor
 *
 * @apiParam {String} uid Sensors unique ID.
 * @apiParam {String} name Sensors name.
 * @apiParam {String} type Sensors type.
 * @apiParam {String} location Sensors location.
 * 
 * @apiSuccess {String} uid Sensors unique ID.
 * @apiSuccess {String} name Sensors name.
 * @apiSuccess {String} type Sensors type.
 * @apiSuccess {String} location Sensors location.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "uid": "73DKA9QU",
 *          "name": "Living Room",
 *          "type": "Humidity",
 *          "Location": "Living Room"
 *     }
 */
router.put('/:uid', sensorController.update);

/**
 * @api {patch} /:uid Update Sensor
 * @apiVersion 1.0.0
 * @apiName UpdateSensor
 * @apiGroup Sensor
 *
 * @apiParam {String} uid Sensors unique ID.
 * @apiParam {String} name Sensors name.
 * @apiParam {String} type Sensors type.
 * @apiParam {String} location Sensors location.
 * 
 * @apiSuccess {String} uid Sensors unique ID.
 * @apiSuccess {String} name Sensors name.
 * @apiSuccess {String} type Sensors type.
 * @apiSuccess {String} location Sensors location.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "uid": "73DKA9QU",
 *          "name": "Living Room",
 *          "type": "Humidity",
 *          "Location": "Living Room"
 *     }
 */
router.patch('/:uid', sensorController.update);

/**
 * @api {delete} /:uid Delete Sensor
 * @apiVersion 1.0.0
 * @apiName DeleteSensor
 * @apiGroup Sensor
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     }
 */
router.delete('/:uid', sensorController.delete);

module.exports = router;