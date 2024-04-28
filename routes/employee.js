const express = require("express");
const router = express.Router();
const {
    addEmployee,
    getEmployee,
    deleteEmployee,
    getEmployeeById,
    updateEmployee,
} = require("../controllers/employeeController");

router.post("/", addEmployee);
router.get("/", getEmployee);
router.get("/:id", getEmployeeById);
router.get("/:id", updateEmployee);
router.get("/:id", deleteEmployee);

module.exports = router;