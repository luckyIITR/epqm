import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import file from "./map_back_of_back_cover.pdf";

function PosterFile() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  return (
    <div className="container mt-5">
      <p className="text-center h2 pt-3 mb-5 font-weight-bold">MAP</p>
      <div className="container pt-3 pb-5 all-page-container">
        <Document file={file}>
          {[1].map((page) => (
            <Page pageNumber={page} width={1000} />
          ))}
        </Document>
      </div>
    </div>
  );
}

export default PosterFile;
