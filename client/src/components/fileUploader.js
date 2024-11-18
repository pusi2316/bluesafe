import React from "react";

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

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Upload Solidity File</h2>
      <input type="file" accept=".sol" onChange={handleFileUpload} />
    </div>
  );
};
export default FileUploader;
