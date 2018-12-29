const express = require('express');
const router = express.Router();

const recordController = require('../controllers/record.controller');

/**
 * @api {post} /create Create Record
 * @apiVersion 1.0.0
 * @apiName CreateRecord
 * @apiGroup Record
 *
 * @apiParam {String} sensor The unique ID of the sensor that owns this record.
 * @apiParam {String} unit Measurement unit.
 * @apiParam {String} value Measurement value.
 * 
 */
router.get('/create', recordController.create);

module.exports = router;