import React, { useRef } from "react";
import axios from 'axios';
import "../styles/fileUploader.css";
const uploadUrl = 'http://localhost:8080/analyze';

const fileAnalyzer = ({ fileName, onFileAnalyze }) => {
    const response = axios.get(uploadUrl, 
        {params: fileName});
}