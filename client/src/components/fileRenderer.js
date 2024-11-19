import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-solidity";
import "../styles/fileRenderer.css"

const FileRenderer = ({ fileName, fileContent }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [fileContent]);

  if (!fileContent) return null;

  return (
    <div className="codeContainer">
          <h3 className="codeContainerFileName">File: {fileName}</h3>
          <pre className="language-solidity">
            <code>{fileContent}</code>
          </pre>
        </div>
  );
};
export default FileRenderer;
