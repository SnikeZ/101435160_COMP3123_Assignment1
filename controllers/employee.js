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


        const employee = await employeeSchema.create({
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


exports.getEmployee = async (req, res) => {
    try {
        const employeeId = req.params.eid
        const employee = await employeeSchema.findById(employeeId);

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            })
        }

        res.status(200).json(employee);

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.updateEmployee = async (req, res) => {
    try {

        const updated = await employeeSchema.findByIdAndUpdate(req.params.eid, req.body, { new: true });

        if (!updated) {
            return res.status(404).json({ message: "Employee not found." });
        }

        res.status(200).json({ message: "Employee details updated successfully." });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};