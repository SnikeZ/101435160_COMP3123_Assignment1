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

exports.createEmployee = async (req, res) => {
    try {

        const {
            first_name,
            last_name,
            email,
            position,
            salary,
            date_of_joining,
            department
        } = req.body


        const employee = await userSchema.create({
            first_name,
            last_name,
            email,
            position,
            salary,
            date_of_joining,
            department
        });
        res.status(201).json({
            message: "Employee created successfully.",
            employee_id: employee._id,
        });

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}