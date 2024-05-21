import { Router } from "express";
import { getModels, uploadModel } from "../controllers/modelsController.js";
import upload from "../config/multer.js"
const router = Router();

router.route("/").get(getModels);
router.route("/upload").post(upload.single("file"), uploadModel);

export default router;
