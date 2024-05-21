import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import connect from "./database/connection.js";
import modelsRouter from "./routes/modelsRouter.js";

dotenv.config();

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors(
  ["http://localhost:5173/", "https://infusory-machinetest.vercel.app"]
));
app.use(express.json());
// Serve static files from the uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(morgan("tiny"));

/** HTTP GET request */
app.get(/^(?!\/api).+/, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// app.get("/", (req, res) => {
//   res.status(200).json("HOME Page");
// });

const apiRouter = express.Router();
app.use("/api", apiRouter);

apiRouter.use("/models", modelsRouter);
connect()
  .then(() => {
    try {
      app.listen(process.env.PORT, () => {
        console.log(`Server connected to port: ${process.env.PORT}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Inavlid database connection");
  });
