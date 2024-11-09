import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";
import songRouter from "./src/routes/songRoute.js";
import albumRouter from "./src/routes/albumRoute.js";

const app = express();
connectDB();
connectCloudinary();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("APT Working"));
app.use("/api/song", songRouter);
app.use("/api/album", albumRouter);
app.listen(port, () => console.log(`Server started on ${port}`));
