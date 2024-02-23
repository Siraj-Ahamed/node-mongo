import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/test.route.js";

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("MongoDB is connected!");
    })
    .catch((err) => {
        console.log("ERROR: ", err);
    });

app.use('/api/user',userRoutes);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
