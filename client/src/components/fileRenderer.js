import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-solidity";

const FileRenderer = ({ fileName, fileContent }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [fileContent]);

  if (!fileContent) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>File: {fileName}</h3>
      <pre className="language-solidity">
        <code>{fileContent}</code>
      </pre>
    </div>
  );
};
export default FileRenderer;
