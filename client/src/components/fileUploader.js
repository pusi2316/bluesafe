import React, { useRef } from "react";
import axios from 'axios';
import "../styles/fileUploader.css";
const uploadUrl = 'http://localhost:8080/upload';

const FileUploader = ({ onFileUpload }) => {
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file && file.type === "") {
      const reader = new FileReader();

      reader.onload = (e) => {
        onFileUpload(file.name, e.target.result);
      };

      reader.readAsText(file);

      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post(uploadUrl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        });
         console.log("Server Response:", response.data);

    } catch (error) {
      console.error("Error uploading file:", error);
    } 
  }
  else {
      alert("Please upload a valid .sol file");
    }
  };

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="container">
      <h2>Upload Solidity File</h2>
      <button className="uploadButton" onClick={handleClick}>
        Choose a file
      </button>
      <input
        type="file"
        accept=".sol"
        style={{ display: "none" }}
        ref={hiddenFileInput}
        onChange={handleFileUpload}
      />
    </div>
  );
};
export default FileUploader;
