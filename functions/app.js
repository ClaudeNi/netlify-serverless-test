const serverless = require("serverless-http");
const express = require("express");
const path = require("path");

const app = express();
const router = express.Router();

app.use(express.json());

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../build");

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "../build/index.html"));
});

router.get("/test", (req, res) => {
    res.send("This is a test from express");
});

exports.handler = serverless(app);
