import mongoose from "mongoose";

const EmployeeSchema = mongoose.Schema(
	{
		employeeFullName: {
			type: String,
			require: true,
			unique: true,
		},
		position: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Employee", EmployeeSchema);
