import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import file from "./POSTER_only_2.pdf";

function PosterFile() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  return (
    // className="all-page-container"
    <div className="pt-3 pb-5 all-page-container">
      <Document file={file}>
        {[1, 2, 3, 4].map((page) => (
          <Page pageNumber={page} width={1700} />
        ))}
      </Document>
    </div>
  );
}

export default PosterFile;
