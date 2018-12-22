const express = require('express');
const router = express.Router();

const sensorController = require('../controllers/sensor.controller');

/**
 * @api {post} /create Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} uid Sensors unique ID.
 * @apiParam {Name} name Sensors name.
 * @apiParam {Type} type Sensors type.
 * @apiParam {Location} location Sensors location.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 * 
 *     }
 */
router.post('/create', sensorController.create);
router.get('/:id', sensorController.details);
router.put('/:id', sensorController.update);
router.patch('/:id', sensorController.update);
router.delete('/:id', sensorController.delete);

module.exports = router;