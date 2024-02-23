import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import testRoutes from "./routes/test.route.js";
import authRoutes from "./routes/auth.route.js";

app.use(express.json());

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("MongoDB is connected!");
    })
    .catch((err) => {
        console.log("ERROR: ", err);
    });

app.use("/api/user", testRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
