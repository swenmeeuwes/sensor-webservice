const express = require('express');
const router = express.Router();

// Default - Show API docs
// router.use('/', router.use(express.static('public/apidoc')));

// Controller routes
router.use('/sensor', require('./sensor.route'));
router.use('/record', require('./record.route'));

module.exports = router;