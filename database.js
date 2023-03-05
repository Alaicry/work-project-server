import mongoose from "mongoose";

const connectDB = () => {
	mongoose
		.connect(process.env.DATABASE)
		.then(() => console.log("Database connected"))
		.catch((err) => console.log("Error", err));
};
export default connectDB;