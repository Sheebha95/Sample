const express = require("express");
const router = express.Router();
const {addEmployee,getEmployee,getEmployeeById,updateEmployee,deleteEmployee} = require("../controllers/employeeController");

router.get("/", getEmployee);
router.post("/", addEmployee);
router.get("/:id", getEmployeeById);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;