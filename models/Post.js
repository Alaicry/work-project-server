import mongoose from "mongoose";

const PostSchema = mongoose.Schema.create(
	{
		employee: {
			type: mongoose.SchemaTypes.String,
			ref: "employees",
			required: true,
		},
		deviceName: {
			type: String,
			required: true,
		},
		deviceNumber: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Post", PostSchema);
