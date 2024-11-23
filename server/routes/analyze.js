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
      return;
    }
    // log the output received from the command
    console.log("Output: \n", output);
  });
});

module.exports = router;
