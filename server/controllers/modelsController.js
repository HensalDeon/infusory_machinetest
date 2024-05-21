import Model from "../models/threeModel.js";
import path from "path";
export const getModels = async (req, res) => {
    try {
        const models = await Model.find().sort({ createdAt: -1 });
        res.json(models);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const uploadModel = async (req, res) => {
    const { filename } = req.file;
    const { name } = req.body;

    const fileUrl = path.join("uploads", filename);

    const newModel = new Model({
        name,
        fileUrl,
    });

    try {
        const savedModel = await newModel.save();
        res.json({ savedModel, message: "File uploaded..!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
