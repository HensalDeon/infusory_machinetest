import mongoose from "mongoose";

const modelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    fileUrl: {
        type: String,
        required: [true, "File is required"],
    },
});

const Model = mongoose.models.modelSchema || mongoose.model("Model", modelSchema);
export default Model;
