import React,  { useState } from 'react';

const FileUploader = () => {
    const [fileContent, setFileContent] = useState("");
    const [fileName, setFileName] = useState("");
    //const [file, setFile] = useState(null)

    const handleFileUpload = (event) => {
        const file = event.target.files[0];

        if (file && file.type === ""){
            const reader = new FileReader();
            
            reader.onload = (e) => {
                setFileContent(e.target.result);
                setFileName(file.name);
            };

            reader.readAsText(file);
        } else {
            alert("Please upload a valid .sol file");
        }
};

return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Upload Solidity File</h2>
      <input 
        type="file" 
        accept=".sol" 
        onChange={handleFileUpload} 
      />
      {fileContent && (
        <div style={{ marginTop: "20px" }}>
          <h3>File: {fileName}</h3>
          <pre style={{ 
              backgroundColor: "#f4f4f4", 
              padding: "15px", 
              border: "1px solid #ddd", 
              borderRadius: "5px", 
              overflowX: "auto" 
          }}>
            <code>{fileContent}</code>
          </pre>
        </div>
      )}
    </div>
  );  
}
export default FileUploader;