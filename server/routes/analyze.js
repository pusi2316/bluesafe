const express = require("express");
const router = express.Router();
const { execSync, spawn, exec } = require("child_process");

router.get("/", (req, res) => {
  //const solhintProcess = spawn("/solhint tests/testFiles/test.sol");
  exec("solhint tests/testFiles/test.sol ./", (err, output) => {
    // once the command has completed, the callback function is called
    if (err) {
      // log and return if we encounter an error
      console.error("could not execute command: ", err);

      return res.status(400).json({ message: "could not execute command!" });
    }
    // log the output received from the command
    console.log("Output: \n", output);
    console.log(output.trim().length === 0);
    //return res.status(200).json({ message: output || "no syntax violation found!"});
    return res.status(200).json({ message: output.trim().length === 0 ? "no syntax violation found!": output});
  });
});

module.exports = router;
