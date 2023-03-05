import { body } from "express-validator";

export const signUpValidation = [
	body("email", "Неверно указан email адрес").isEmail(),
	body("password", "Неправильно указан пароль").isLength({ min: 6 }),
	body("fullName", "Неправильно введено полное имя пользователь").isLength({ min: 3 }),
];

export const signInValidation = [
	body("email", "Неверно указан email адрес").isEmail(),
	body("password", "Неправильно указан пароль").isLength({ min: 6 }),
];

export const noteCreateValidation = [
	body("email", "Неверно указан email адрес").isEmail(),
	body("password", "Неправильно указан пароль").isLength({ min: 6 }),
];