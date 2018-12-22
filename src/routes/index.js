const express = require('express');
const router = express.Router();
const path = require('path');

// Default - Show API docs
router.use('/', router.use(express.static('public/apidoc')));

// Controller routes
router.use('/sensor', require('./sensor.route'));

module.exports = router;