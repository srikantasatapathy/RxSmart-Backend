import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { db, port } from "./src/config/config";
import userRoutes from './src/routes/userRoutes';

//For env File
dotenv.config();

const app: Application = express();
// Middleware to parse JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello RxSmart",
  });
});

// db connection
app.listen(port, () => {
  console.log(`Server Running on port  ${port}`);
  mongoose.set("strictQuery", true);
  mongoose
    .connect(db)
    .then(() => {
      console.log("Connected to db", db);
    })
    .catch((error) => {
      console.log(error, "connection error");
    });
});

// Define routes after middleware
app.use('/users', userRoutes); // All user-related routes
