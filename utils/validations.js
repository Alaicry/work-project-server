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

export const employeeCreateValidation = [
	body("employeeFullName", "Неверно указан ФИО сотрудника").isLength({ min: 15 }).isString(),
	body("position", "Неправильно указана должность сотружника").isLength({ min: 6 }).isString(),
];
