const Employee = require("../models/employee");

const addEmployee = async (req, res) => {
    const employee = new Employee({
        empid: req.body.empid,
        name: req.body.name,
        designation: req.body.designation,
        address: req.body.address,
        phoneno: req.body.phoneno,
        email: req.body.email,
        gender: req.body.gender
        });
        console.log("testing");
        try{
          console.log("testing2");
        const newEmployee = await employee.save();
        console.log("testing1");
        res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getEmployee = async (req, res) => {
    try {
      const employees = await Employee.find();
      //res.status(201).json(employees);
      res.json(employees);
    } catch (err) {
      res.status(501).json({ message: err.message });
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
      await Employee.findOneAndDelete(req.params.id);
      // const deleteEmployee = await Employee.findByIdAndDelete(req.params.id);
      // if (deleteEmployee.deleteCount == 0){
      //   res.status(404).json({message: "employee details are not found"});
      // }
      res.json({ message: 'Employee Details deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const updateEmployee = async (req, res) => {
    try {
      const updateEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, {new: true});
      // const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
      // if (employee == null){
      //   res.status(404).json({message: "employee details updated failed"});
      // }
      res.json(updateEmployee);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };


  module.exports={addEmployee,getEmployee,getEmployeeById,deleteEmployee,updateEmployee}