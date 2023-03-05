import { Router } from "express";
import UserController from "../controllers/UserController.js";
import checkAuth from "../utils/checkAuth.js";
import { signInValidation, signUpValidation } from "../utils/validations.js";

const router = Router();

router.post("/auth/signup", signUpValidation, UserController.signUp);
router.post("/auth/signin", signInValidation, UserController.signIn);
router.get("/auth/me", checkAuth, UserController.getMe);

export default router;
