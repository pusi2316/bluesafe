const express = require("express");
const router = express.Router();
const { execSync, spawn, exec } = require("child_process");
const bodyParser = require('body-parser');  

// Create application/x-www-form-urlencoded parser  
const urlencodedParser = bodyParser.urlencoded({ extended: false }) 

router.post("/", urlencodedParser, (req, res) => {
  exec(`solhint tests/testFiles/${req.body.fileName}`, (err, output) => {
    if (err) {
      console.error("could not execute command: ", err);

      return res.status(400).json({ message: "could not execute command!" });
    }
    //DEBUG CODE!!
    //console.log("Output: \n", output);
    //console.log(output.trim().length === 0);

    return res.status(200).json({ message: output.trim().length === 0 ? "no syntax violation found!": output});
  });
});

module.exports = router;
