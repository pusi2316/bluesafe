import React, { useRef } from "react";
import axios from "axios";
import "../styles/fileUploader.css";
const uploadUrl = "http://localhost:8080/analyze";

const FileAnalyzer = ({ fileName, onFileAnalyze }) => {
  const handleAnalyzer = (event) => {
    try {
      console.log(fileName);
      const response = axios.post(uploadUrl, {
        fileName: fileName
      },
    {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
      console.log(response.data);
      //onFileAnalyze(response.data);
    } catch (error) {
      console.error("Error analyzing file:", error);
    }
  };

  return (
    <div className="container">
      <button className="uploadButton" onClick={handleAnalyzer}>
        Analyze
      </button>
    </div>
  );
};

export default FileAnalyzer;
