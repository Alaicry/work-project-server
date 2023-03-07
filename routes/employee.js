import { Router } from "express";
import EmployeeController from "../controllers/EmployeeController.js";
import { employeeCreateValidation } from "../utils/validations.js";
import checkAuth from '../utils/checkAuth.js'

const router = Router();

router.post("/employees", checkAuth, employeeCreateValidation, EmployeeController.create);
router.get("/employees", checkAuth, EmployeeController.getAll);
router.get("/employees/:id", checkAuth, EmployeeController.getOne);
router.delete("/employees/:id", checkAuth, EmployeeController.delete);
router.patch("/employees/:id", checkAuth, EmployeeController.update);

export default router;
