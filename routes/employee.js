const express = require('express');
const router = express.Router();
const { listEmployees } = require('../controllers/employee');

router.get('/employees', listEmployees);

module.exports = router;