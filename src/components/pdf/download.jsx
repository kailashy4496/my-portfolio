import React from "react";
import { saveAs } from 'file-saver';


const Download = () => {
  const handleDownload = () => {
    const pdfUrl = "/src/resume/KailashResume.pdf";
    
    // Fetch the PDF file
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Save the blob (PDF file) using FileSaver.js
        saveAs(blob, 'KailashResume.pdf');
      })
      .catch((error) => {
        console.error('Error fetching the PDF file:', error);
      });
  };
  return <button onClick={handleDownload}>Download PDF</button>;
};

export default Download;
