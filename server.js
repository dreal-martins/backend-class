import express, { json } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config({ path: "./config/config.env" });

connectDB();
const app = express();

// bodyParser
app.use(json());

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
