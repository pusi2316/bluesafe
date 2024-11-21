const { Upload } = require("@aws-sdk/lib-storage");
const { S3 } = require("@aws-sdk/client-s3");
const dotenv = require("dotenv");

dotenv.config();

const s3 = new S3({
  credentials: {
    accessKeyId: process.env.ACCES_KEY,
    secretAccessKey: process.env.ACCESS_SECRET_KEY,
  },
  region: process.env.BUCKET_REGION,
});

module.exports = async (fileName, stream) => {
  try {
    const uploadParams = {
      Bucket: process.env.BUCKET_NAME,
      Key: fileName,
      Body: stream,
    };

    const data = await new Upload({
      client: s3,
      params: uploadParams,
    }).done();

    return data;
  } catch (error) {
    console.log("Upload to s3 failed", error);

    throw error;
  }
};
