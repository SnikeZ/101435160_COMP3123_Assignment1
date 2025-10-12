const express = require('express');
const router = express.Router();
const { listEmployees, createEmployee, getEmployee, updateEmployee } = require('../controllers/employee');

router.get('/employees', listEmployees);
router.post('/employees', createEmployee);
router.get('/employees/:eid', getEmployee);
router.put('/employees/:eid', updateEmployee);

module.exports = router;