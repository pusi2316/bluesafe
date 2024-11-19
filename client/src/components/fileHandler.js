import React, { useState } from "react";
import FileRenderer from "./fileRenderer";
import FileUploader from "./fileUploader";

const FileHandler = () => {
  const [fileContent, setFileContent] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (name, content) => {
    setFileName(name);
    setFileContent(content);
  };
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <FileUploader onFileUpload={handleFileUpload} />
      <FileRenderer fileName={fileName} fileContent={fileContent} />
    </div>
  );
};
export default FileHandler;
