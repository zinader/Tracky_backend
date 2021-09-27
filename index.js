import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// setup express
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => res.status(200).send("Hi hello!"));

console.log("Starting Server");
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

import router from "./routes/internships.js";

app.use("/internships", router);

//setup mongoose
console.log("Connecting to MongoDB");

mongoose.connect(
  "mongodb+srv://" +
    process.env.MONGO_USER +
    ":" +
    process.env.MONGO_PASS +
    "@cluster0.c0byn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.error(err);
    console.log("✔️  MongoDB connection established");
  }
);
