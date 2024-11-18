import React, { useRef } from "react";
import "../styles/fileUploader.css";

const FileUploader = ({ onFileUpload }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file && file.type === "") {
      const reader = new FileReader();

      reader.onload = (e) => {
        onFileUpload(file.name, e.target.result);
      };

      reader.readAsText(file);
    } else {
      alert("Please upload a valid .sol file");
    }
  };

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click(); // ADDED
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
