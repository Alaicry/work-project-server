import EmployeeModel from "../models/Employee.js";

class EmployeeController {
	async getAll(req, res) {
		try {
			const employees = await EmployeeModel.find();
			res.json(employees);
		} catch (err) {
			console.log(err);
			res.status(500).json({ message: "Не удалось получить сотрудников" });
		}
	}

	async getOne(req, res) {
		try {
			// EmployeeModel.findOne({ _id: employeeId }, { returnDocument: "after" }, (err, doc) => {
			// 	if (err) {
			// 		console.log(err);
			// 		res.status(500).json({ message: "Не удалось получить сотрудников" });
			// 	}
			// 	if (!doc) {
			// 		return res.status(404).json({
			// 			message: "Сотрудник не найден",
			// 		});
			// 	}
			// 	res.json(doc);
			// });

			const employeeId = req.params.id;
			const employee = await EmployeeModel.findById(employeeId);
			res.json(employee);
		} catch (err) {
			console.log(err);
			res.status(500).json({ message: "Не удалось получить сотрудника" });
		}
	}

	async create(req, res) {
		try {
			const doc = new EmployeeModel({
				employeeFullName: req.body.employeeFullName,
				position: req.body.position,
			});

			const employee = await doc.save();
			res.json(employee);
		} catch (err) {
			console.log(err);
			res.status(500).json({ message: "Не удалось добавить сотрудника" });
		}
	}

	async update(req, res) {
		try {
			const employeeId = req.params.id;

			await EmployeeModel.updateOne(
				{ _id: employeeId },
				{
					employeeFullName: req.body.employeeFullName,
					position: req.body.position,
				}
			);
			res.json({
				success: true,
			});
		} catch (err) {
			console.log(err);
			res.status(500).json({ message: "Не удалось обновить статью" });
		}
	}

	async delete(req, res) {
		try {
			const employeeId = req.params.id;
			await EmployeeModel.findOneAndDelete({ _id: employeeId })
				.then((doc) => {
					if (!doc) {
						return res.status(404).json({
							message: "Сотрудник не найден",
						});
					}
					res.json({
						success: true,
					});
				})
				.catch((err) => {
					if (err) {
						console.log(err);
						return res.status(500).json({
							message: "Не удалось удалить сотрудника",
						});
					}
				});
		} catch (err) {
			console.log(err);
			res.status(500).json({ message: "Не удалось удалить статью" });
		}
	}
}

export default new EmployeeController();
