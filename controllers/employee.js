const userSchema = require('../models/employee');
const employeeSchema = require('../models/employee')


exports.listEmployees = async (req, res) => {
    try {
    
        const employees = await employeeSchema.find()
        res.status(200).json(employees)
    
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
}