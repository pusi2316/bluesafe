const express = require("express");
const multer = require("multer");
const fs = require("fs");
const router = express.Router();
const path = require("path");
const s3uploadService = require("../services/s3uploadService");

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send("No File was Uploaded");
  }

  const ext = path.extname(file.originalname);
  if (ext !== ".sol") {
    fs.unlink(file.path, () => {});

    return res
      .status(400)
      .json({ message: "Invalid file type. Only .sol files are allowed." });
  }

  const content = fs.readFileSync(file.path, "utf-8");
  if (!content.includes("pragma solidity") && !content.includes("contract")) {
    fs.unlink(file.path, () => {});

    return res.status(400).json({ message: "Invalid Solidity file content." });
  }

  fs.readFile(file.path, "utf-8", async (err, data) => {
    if (err) {
      fs.unlink(file.path, () => {});

      return res.status(500).send("Error reading file.");
    }

    //processing goes here
    //{CODE}
    console.log(file.path);
    const nameWithExtension = Date.now().toString().concat(ext);

    await s3uploadService(nameWithExtension, fs.createReadStream(file.path));

    // Delete file after processing
    fs.unlink(file.path, () => {});

    res.status(200).send({
      message: "File is valid and processed successfully!",
      fileContent: data,
    });
  });
});

module.exports = router;
