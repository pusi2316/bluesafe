const express = require("express");
const multer = require("multer");
const fs = require("fs");
const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send("No File was Uploaded");
  }

  fs.readFile(file.path, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file.");
    }

    //processing goes here
    //{CODE}

    // Delete file after processing
    fs.unlink(file.path, () => {});

    res
      .status(200)
      .send({ message: "File processed successfully!", fileContent: data });
  });
});

module.exports = router;
