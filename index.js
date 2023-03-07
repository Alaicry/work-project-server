import express from "express";
import dotenv from "dotenv";
import connectDB from "./database.js";
import authRouter from "./routes/auth.js";
import employeeRouter from "./routes/employee.js";
dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

connectDB();

app.use(express.json());

app.use(authRouter);
app.use(employeeRouter);

app.listen(PORT, () => {
	try {
		console.log(`Server started on port ${PORT}`);
	} catch (err) {
		console.error(err);
	}
});
