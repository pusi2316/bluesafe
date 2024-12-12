import React, { useState } from "react";
import FileRenderer from "./fileRenderer";
import FileUploader from "./fileUploader";
import FileAnalyzer from "./fileAnalyzer";

const FileHandler = () => {
  const [fileContent, setFileContent] = useState("");
  const [fileName, setFileName] = useState("");
  const [analyzerOutput, setAnalyzerOutput] = useState("");

  const handleFileUpload = (name, content) => {
    setFileName(name);
    setFileContent(content);
  };

  const handleAnalyzerOutput = (output) => {
    setAnalyzerOutput(output);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <FileUploader onFileUpload={handleFileUpload} />
      <FileRenderer fileName={fileName} fileContent={fileContent} />
      <FileAnalyzer fileName={fileName} onFileAnalyze={handleAnalyzerOutput} />
    </div>
  );
};
export default FileHandler;
