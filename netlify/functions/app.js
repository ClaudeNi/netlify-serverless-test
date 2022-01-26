const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());

// // Define paths for Express config
// const publicDirectoryPath = path.join(__dirname, "../build");

// // Setup static directory to serve
// app.use(express.static(publicDirectoryPath));

router.get("/test", (req, res) => {
    res.send("This is a test from express");
});

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "../build/index.html"));
});

module.exports.handler = serverless(app);
