const mongoose = require("mongoose");
require("dotenv").config();

const dbURI = process.env.MONGODB_URI;

mongoose
    .connect(dbURI)
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });
