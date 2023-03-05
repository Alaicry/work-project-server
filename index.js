import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import connectDB from "./database.js";

dotenv.config();

const PORT = process.env.PORT || 4001;

const app = express();

connectDB();

app.use(express.json());

app.use(authRouter);

app.listen(PORT, () => {
	try {
		console.log(`Server started on port ${PORT}`);
	} catch (err) {
		console.error(err);
	}
});
