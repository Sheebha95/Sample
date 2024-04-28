//const employee = require("../models/employee");
const Employee = require("../models/employee");

const addEmployee = async (req, res) => {
    try{
        const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getEmployee = async (req, res) => {
    try {
      const employees = await Employee.find();
      res.json(employees);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getEmployeeById = async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id);
      if (employee== null){
        res.status(404).json({message: "employee details are not found"});
      }
      res.status(201).json(employee);
    } catch (err) {
      res.status(500).json({ message: err.message });
    } 
  };

  const deleteEmployee = async (req, res) => {
    try {
      const deleteEmployee = await Employee.findByIdAndDelete(req.params.id);
      if (deleteEmployee.deleteCount == 0){
        res.status(404).json({message: "employee details are not found"});
      }
      res.json({ message: 'Employee Details deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const updateEmployee = async (req, res) => {
    try {
      const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (employee == null){
        res.status(404).json({message: "employee details updated failed"});
      }
      res.json(updateEmployee);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };


  module.exports={addEmployee,getEmployee,getEmployeeById,deleteEmployee,updateEmployee}