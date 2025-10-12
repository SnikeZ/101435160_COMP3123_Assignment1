const express = require('express');
const router = express.Router();
const { listEmployees, createEmployee, getEmployee, updateEmployee, deleteEmployee } = require('../controllers/employee');

router.get('/employees', listEmployees);
router.post('/employees', createEmployee);
router.get('/employees/:eid', getEmployee);
router.put('/employees/:eid', updateEmployee);
router.delete('/employees', deleteEmployee);

module.exports = router;