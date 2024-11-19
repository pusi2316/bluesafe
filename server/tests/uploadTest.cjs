const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const fs = require("fs");
const app = require("../startup");
const testTxt = "tests/testFiles/test.txt";
const testSolidity = "tests/testFiles/test.sol"

chai.use(chaiHttp);

describe("File Extension Validation", () => {
  it("should reject files with other than .sol extension", (done) => {
    chai
      .request(app)
      .post("/upload")
      .attach("file", fs.readFileSync(testTxt), testTxt)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal(
          "Invalid file type. Only .sol files are allowed."
        );
        done();
      });
  });
  it("should accept files with .sol extension", (done) => {
    chai
      .request(app)
      .post("/upload")
      .attach("file", fs.readFileSync(testSolidity), testSolidity)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal(
          "File is valid and processed successfully!"
        );
        done();
      });
  });
});
