const express = require('express');
const router = express.Router();
const { listEmployees, createEmployee, getEmployee } = require('../controllers/employee');

router.get('/employees', listEmployees);
router.post('/employees', createEmployee);
router.get('/employees/:eid', getEmployee);

module.exports = router;