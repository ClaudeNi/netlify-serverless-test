const serverless = require("serverless-http");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../build");

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "../build/index.html"));
});

exports.handler = serverless(app);
