const express = require('express');
const router = express.Router();
const { listEmployees, createEmployee } = require('../controllers/employee');

router.get('/employees', listEmployees);
router.post('/employees', createEmployee);

module.exports = router;