const express = require('express');
const router = express.Router();
const { listEmployees, searchEmployees, createEmployee, getEmployee, updateEmployee, deleteEmployee } = require('../controllers/employee');
const authenticateToken = require('../middleware/auth');

router.get('/employees', authenticateToken, listEmployees);
router.get('/employees/search', authenticateToken, searchEmployees);
router.post('/employees', authenticateToken, createEmployee);
router.get('/employees/:eid', authenticateToken, getEmployee);
router.put('/employees/:eid', authenticateToken, updateEmployee);
router.delete('/employees', authenticateToken, deleteEmployee);

module.exports = router;